import React, { useState } from 'react';
import './AccountSection.css';
import SectionDivider from './SectionDivider';

const AccountSection = () => {
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  const handleCopy = async (name, accountInfo) => {
    try {
      await navigator.clipboard.writeText(accountInfo);
      setTimeout(() => {
        alert(`${name}님의 계좌번호가 복사되었습니다.`);
      }, 100); // 살짝 지연해서 alert 띄우기
    } catch (err) {
      alert('계좌번호 복사에 실패했습니다.');
    }
  };

  const groomAccounts = [
    { name: '김철수(신랑 아버지)', info: '국민은행 123456-78-901234' },
    { name: '김민영(신랑 어머니)', info: '우리은행 987654-32-109876' }
  ];

  const brideAccounts = [
    { name: '이민철(신부 아버지)', info: '신한은행 111222-33-444555' },
    { name: '박영희(신부 어머니)', info: '농협 666777-88-999000' }
  ];


  return (
    <section className="Account-container">
      <p className="Account-label">ACCOUNT</p>
      <h2 className="Account-title">마음 전하실 곳</h2>
      <p className="Account-content">참석이 어려우신 분들을 위해 <br />
        계좌번호를 기재하였습니다.<br />
        너그러운 마음으로 양해 부탁드립니다.</p>
        <p className='Account-subcontent'>(계좌번호를 누르시면 복사됩니다.)</p>
        <br /><br />
 {/* 신랑측 계좌 */}
 <div>
        <button className="Account-btn" onClick={() => setShowGroom(!showGroom)}>
          신랑측 계좌번호 {showGroom ? '▲' : '▼'}
        </button>
        <div className={`toggle-content ${showGroom ? 'show' : ''}`}>
          {showGroom && (
            <div className="Account-content">
              {groomAccounts.map((account, index) => (
                <p
                  key={index}
                  className="Account-btn"
                  onClick={() => handleCopy(account.name, account.info)}
                >
                  {account.name}:<br /> {account.info}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 신부측 계좌 */}
      <div style={{ marginTop: '1.5rem' }}>
        <button className="Account-btn" onClick={() => setShowBride(!showBride)}>
          신부측 계좌번호 {showBride ? '▲' : '▼'}
        </button>
        <div className={`toggle-content ${showBride ? 'show' : ''}`}>
          {showBride && (
            <div className="Account-content">
              {brideAccounts.map((account, index) => (
                <p
                  key={index}
                  className="Account-btn"
                  onClick={() => handleCopy(account.name, account.info)}
                >
                  {account.name}:<br /> {account.info}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
<br />
<br /><br />
<SectionDivider/>
    </section>
  );
};

export default AccountSection;
