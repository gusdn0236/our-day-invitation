import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarSection.css'; // 스타일 추가용
import SectionDivider from './SectionDivider';

// 결혼식 날짜를 설정
const weddingDate = new Date('2027-09-04T14:00:00');

// 남은 일수를 계산하는 함수
const getDDay = (targetDate) => {
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 변환
  return diffDays;
};

const CalendarSection = () => {
  const dDay = getDDay(weddingDate); // 남은 일수 계산

  return (
    
    <section className="calendar-section">
      <h2 className="wedding-date">2027.09.04</h2>
      <p className="wedding-time">토요일 오후 2시</p>
      <br/>
      <div className="calendar-wrapper">
      <Calendar
        value={weddingDate}
        tileClassName={({ date }) =>
          date.toDateString() === weddingDate.toDateString() ? 'highlight' : null
        }
        showNeighboringMonth={false}
        locale="ko-KR"
        formatDay={(_, date) => date.getDate().toString()}
        calendarType = "hebrew"
      />
       </div>
      <p className="wedding-message">현우, 인혜의 결혼식이 {dDay}일 남았습니다.</p>
      <br/>
      <br/>
      <SectionDivider/>
    </section>
    
  );
}

export default CalendarSection;
