// 💌 InvitationSection.jsx
// 초대글과 신랑/신부 소개, 날짜 및 장소 정보 간략 표시


import React from 'react';
import './InvitationSection.css';
import Container from './Container';
import SectionDivider from './SectionDivider';

const InvitationSection = () => {
  return (
   
      <section className="invitation-container">
        <p className="invitation-label">Invitation</p>
        <h2 className="invitation-title">소중한 분들을 초대합니다</h2><br/>
        <p className="invitation-content">
         저희 두 사람의 작은 만남이 <br/>
         사랑의 결실을 이루어<br/>
         소중한 결혼식을 올리게 되었습니다.<br/><br/>
         평생 서로 귀하게 여기며<br/>
         첫 마음 그대로 존중하고 배려하며 살겠습니다.<br/><br/>
         오로지 믿음과 사랑을 약속하는 날<br/>
         오셔서 축복해 주시면 더 없는 기쁨으로<br/>
         간직하겠습니다.<br/><br/>
        </p>
        <SectionDivider/>
      </section>
      

      
    
  );
};

export default InvitationSection;