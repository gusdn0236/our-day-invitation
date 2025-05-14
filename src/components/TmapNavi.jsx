import React from 'react';

const TmapNavi = ({ latitude, longitude, name }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Tmap 앱 실행
    window.location.href = `tmap://route?goalname=${name}&goalx=${longitude}&goaly=${latitude}`;
    // fallback: 웹 링크
    setTimeout(() => {
      window.location.href = `https://apis.openapi.sk.com/tmap/app/routes?goalname=${name}&lon=${longitude}&lat=${latitude}`;
    }, 300);
  };

  return (
    <a
      href={`tmap://route?goalname=${name}&goalx=${longitude}&goaly=${latitude}`}
      onClick={handleClick}
      style={{
        display: 'inline-block',
        width: '50px', // 아이콘 크기 줄이기
          margin:'0 20px'
      }}
    >
      <img
        src="assets/Tmap_Icon.png" // 이 이미지 파일은 public/assets에 넣어야 함
        alt="티맵으로 길찾기"
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
 
export default TmapNavi;
