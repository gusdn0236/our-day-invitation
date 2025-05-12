import React from 'react';

const KakaoNavi = ({ latitude, longitude, name }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // 카카오맵 앱 실행
    window.location.href = `kakaomap://route?ep=${latitude},${longitude}&by=CAR`;
    
    // fallback: 카카오맵 앱이 없을 경우 웹으로
    setTimeout(() => {
      window.location.href = `https://map.kakao.com/link/to/${name},${latitude},${longitude}`;
    }, 300);
  };

  return (
    <a
      href={`kakaomap://route?ep=${latitude},${longitude}&by=CAR`}
      onClick={handleClick}
      style={{
        display: 'inline-block',
        width: '50px', // 아이콘 크기 줄이기
        height: '50px',
        margin:'0 20px'
       
      }}
    >
      <img
        src="assets/kakaomap_basic.png"
        alt="카카오맵으로 길찾기"
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

export default KakaoNavi;
