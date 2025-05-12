import { React, useEffect, useRef,useState } from 'react';
import './LocationSection.css';
import MapContainer from './MapContainer';
import TransportInfo from './TransportInfo';
import KakaoNavi from './KakaoNavi'
import TmapNavi from './TmapNavi';
import NaverNavi from './NaverNavi';
import SectionDivider from './SectionDivider';




  const LocationSection = () => {
   
  
    return (
      <section className="Location-container">
        <p className="Location-label">Location</p>
        <h2 className="Location-title">오시는 길</h2>
        <h1 className="Location-maintext">노블레스웨딩컨벤션 </h1>
        <MapContainer/>
       
       
 
        <h2 className="Location-subtext">경기도 수원시 팔달구 팔달문로 128</h2>
        <h2 className="Location-tel">Tel. 031-215-7000</h2> <br/>   
     
        <KakaoNavi latitude={37.281614114007354} longitude={127.03028788382828} name="노블레스웨딩컨벤션" />
        <TmapNavi latitude={37.281614114007354} longitude={127.03028788382828} name="노블레스웨딩컨벤션" />
        <NaverNavi latitude={37.281614114007354} longitude={127.03028788382828} name="노블레스웨딩컨벤션" />
        <br/>   
        
        <h2 className="Location-parking"> 

          주차장 안내 : 본건물(지하2F, 지하1F,1F,2F, 3F),<br/>주차타워 (4층 건물) 이용
          <br/>※ 주차요원의 안내를 받으세요.
        </h2>
        <br/>    
       
        <TransportInfo/>
        <SectionDivider/>
      </section>
    );
  }
  
  export default LocationSection;
