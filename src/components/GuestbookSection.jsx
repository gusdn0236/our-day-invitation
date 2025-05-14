import './GuestbookSection.css';
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {getDoc,
  collection, addDoc, serverTimestamp,
  query, orderBy, limit, startAfter, getDocs
} from "firebase/firestore";

const GuestbookSection = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [lastDoc, setLastDoc] = useState(null); // 마지막 문서 추적
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터 있는지

  const fetchEntries = async () => {
    const baseQuery = query(
      collection(db, "guestbook"),
      orderBy("createdAt", "desc"),
      ...(lastDoc ? [startAfter(lastDoc)] : []),
      limit(5)
    );

    const snapshot = await getDocs(baseQuery);
    const newEntries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    if (snapshot.docs.length < 5) {
      setHasMore(false); // 더 이상 로딩할 데이터 없음
    }

    setLastDoc(snapshot.docs[snapshot.docs.length - 1]); // 마지막 문서 저장
    setEntries(prev => [...prev, ...newEntries]); // 기존 데이터에 추가
  };

  useEffect(() => {
    fetchEntries(); // 초기 로딩
  }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!name.trim() || !message.trim()) return;

  const docRef = await addDoc(collection(db, "guestbook"), {
    name,
    text: message,
    createdAt: serverTimestamp()
  });

  setName("");
  setMessage("");

  // createdAt 채워질 때까지 기다림
  let newDocSnap;
  let tries = 0;
  do {
    newDocSnap = await getDoc(docRef);
    await new Promise((r) => setTimeout(r, 200));
    tries++;
  } while (!newDocSnap.data()?.createdAt && tries < 5);

  const newDoc = { id: newDocSnap.id, ...newDocSnap.data() };

  // 새 항목을 현재 목록 가장 앞에 추가
  setEntries(prev => [newDoc, ...prev]);

  // 새로고침 없이 그대로 유지 (lastDoc, hasMore는 그대로 둠)
};

  return (
    <section className='Guestbook-container'>
      <p className="Guestbook-label">Guest book</p>
      <h2 className="Guestbook-title">방명록</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="축하메시지를 남겨주세요!"
          required
          rows="3"
        />
        <button type="submit" disabled={!name.trim() || !message.trim()}>등록</button>
      </form>

      <ul>
        {entries.map(entry => {
          const date = entry.createdAt?.toDate();
          const formattedDate = date
            ? date.toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
            : '';

          return (
            <li key={entry.id} className="Guestbook-entry">
              <div className="Guestbook-entry-header">
                <span className="Guestbook-name">{entry.name}</span>
                <span className="Guestbook-date">{formattedDate}</span>
              </div>
              <p className="Guestbook-message">{entry.text}</p>
            </li>
          );
        })}
      </ul>

      {hasMore && (
        <button onClick={fetchEntries} className="load-more-btn">
          더 보기
        </button>
      )}
    </section>
  );
};

export default GuestbookSection;
