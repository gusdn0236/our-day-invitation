import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // ✅ 아이콘 import
import './GallerySection.css';
import SectionDivider from './SectionDivider';

const imageList = [
  './assets/wedding1.jpg',
  './assets/wedding2.jpg',
  './assets/wedding3.jpg',
  './assets/wedding4.jpg',
  './assets/wedding5.jpg',
  './assets/wedding6.jpg',
  './assets/wedding7.jpg',
  './assets/wedding8.jpg',
  './assets/wedding9.jpg',
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => { 
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지
      // 화면 전체의 touchmove를 막기 위해 eventListener 추가
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = 'auto'; // 모달 닫히면 스크롤 풀기
      // 모달이 닫히면 eventListener 제거
      window.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시 초기화
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [selectedIndex]);

  // touchmove 이벤트가 발생할 경우 스크롤을 완전히 막기 위한 함수
  const handleTouchMove = (e) => {
    e.preventDefault(); // 스크롤을 방지하는 핵심
  };


  const handlers = useSwipeable({
    onSwipedLeft: () => showNext(new Event('fake')),  // 오른쪽에서 왼쪽으로 스와이프 → 다음 사진
    onSwipedRight: () => showPrev(new Event('fake')), // 왼쪽에서 오른쪽으로 스와이프 → 이전 사진
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false
  });




  return (
    <section className="Gallery-container">
      <p className="Gallery-label">Gallery</p>
      <h2 className="Gallery-title">웨딩 갤러리</h2>

      <div className="Gallery-grid">
        {imageList.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            className="Gallery-thumb"
            onClick={() => openModal(idx)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="Gallery-modal" onClick={closeModal}>
          <button className="Gallery-nav prev" onClick={showPrev}>
            <FaChevronLeft />
          </button>
          <div {...handlers}>
    <img
      src={imageList[selectedIndex]}
      alt="expanded"
      className="Gallery-modal-img"
    />
  </div>
          <button className="Gallery-nav next" onClick={showNext}>
            <FaChevronRight />
          </button>
        </div>
      )}
      <br />
      <SectionDivider/>
    </section>
  );
};

export default GallerySection;
