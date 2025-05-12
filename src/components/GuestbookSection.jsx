// 📜 GuestbookSection.jsx
import './GuestbookSection.css';
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

const GuestbookSection = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState(""); // 이름 상태 추가
  const [message, setMessage] = useState(""); // 내용 상태 추가

  // Firestore에서 방명록 데이터 가져오기
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "guestbook"), (snapshot) => {
      setEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  // 방명록 작성 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return; // 이름과 내용이 비어있지 않으면 제출

    await addDoc(collection(db, "guestbook"), {
      name: name, // 이름 필드 추가
      text: message,
      createdAt: serverTimestamp() // 작성 시간 저장
    });
    setName(""); // 입력 후 이름 상태 초기화
    setMessage(""); // 입력 후 메시지 상태 초기화
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
        />
        <button type="submit" disabled={!name.trim() || !message.trim()}>등록</button>
      </form>

      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <strong>{entry.name}</strong>: {entry.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GuestbookSection;
