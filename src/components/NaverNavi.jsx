import React from 'react';

const NaverNavi = ({ latitude, longitude, name }) => {
  const handleClick = (e) => {
    e.preventDefault();

    // 네이버지도 앱 실행
    window.location.href = `nmap://route/public?dlat=${latitude}&dlng=${longitude}&dname=${name}&appname=com.example.webapp`;

    // fallback: 웹 브라우저용
    setTimeout(() => {
      window.location.href = `https://map.naver.com/v5/directions/-/-/${longitude},${latitude},${name}`;
    }, 300);
  };

  return (
    <a
      href={`nmap://route/public?dlat=${latitude}&dlng=${longitude}&dname=${name}&appname=com.example.webapp`}
      onClick={handleClick}
      style={{
        display: 'inline-block',
        width: '50px', // 아이콘 크기 줄이기
        height:'50px',
          margin:'0 20px'
      }}
    >
      <img
        src="assets/Map_Service_Icon.png" // 이 이미지 public/assets에 넣기!
        alt="네이버지도 길찾기"
        style={{
          width: '50px',
          height: '50px',
          display: 'inline-block',
          borderRadius: '6px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
        }}
      />
    </a>
  );
};

export default NaverNavi;
