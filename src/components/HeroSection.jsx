// 💛 HeroSection.jsx
// 모바일 청첩장 첫 화면: OUR DAY 로티 애니메이션 & 간단한 인삿말 표시

import React from 'react';
import './HeroSection.css';
import Container from './Container';
import SectionDivider from './SectionDivider';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <p className="hero-subtitle">The marriage of</p>
      <h1 className="hero-title">Hyunwoo  and  Inhye </h1><br/>
      <p  className="hero-name">신랑 김현우 신부 이인혜</p>
      <div className="hero-image-wrapper">
        <img
          src="./assets/hero-image.png" // 실제 이미지 파일로 교체
          alt="Couple"
          className="hero-image"
        />
      </div>
    <SectionDivider/>
    </section>
  );
};

export default HeroSection;