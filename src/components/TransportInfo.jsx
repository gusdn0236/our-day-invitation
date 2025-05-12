import React, { useState } from 'react';
import './TransportInfo.css'

const TransportInfo = () => {
  const [showSubway, setShowSubway] = useState(false);
  const [showBus, setShowBus] = useState(false);

  return (
    <div className="space-y-4">
      {/* 지하철 / 셔틀버스 */}
      <div>
      <button
  onClick={() => setShowSubway(!showSubway)}
  className="shuttle-btn"
>
  🚇 지하철 / 셔틀버스 {showSubway ? '▲' : '▼'}
</button>
        <div className={`toggle-content ${showSubway ? 'show' : ''}`}>
        <div className="shuttle">
            <p>셔틀버스 운행:<br/> <strong>수인분당선 수원시청역 5번출구</strong> 30분 간격 운행</p>
          </div>
        </div>
      </div>

      {/* 버스 */}
      <div>
      <button
  onClick={() => setShowBus(!showBus)}
  className="bus-btn"
>
  🚌 버스 {showBus ? '▲' : '▼'}
</button>
        <div className={`toggle-content ${showBus ? 'show' : ''}`}>
        <div className="bus">
            <p>수원역(4번출구) → 동수원병원 하차:<br/> 10, 11-1, 37, 720-2, 83-1 (약 20분)</p>
            <p>수원종합버스터미널 → 수병원 하차:<br/> 300, 300-1, 80, 82-1, 88 (약 20분)</p>
            <p>서수원시외버스터미널 → 동수원병원 하차:<br/> 11-1, 37, 61, 62-1 (약 30분)</p>
            <p>망포역 (4번출구) → 동수원병원 하차:<br/> 61, 62-1 (약 30분)</p>
            <p>용인시(용인대입구삼거리) → 동수원병원 하차:<br/> 10, 10-5, 66 (약 1시간)</p>
            <p>범계역(범계사거리), 오산역(오산터미널맞은편) → 수병원 하차:<br/> 300 (약 50분)</p>
            <p>잠실역(4번출구) → 월드컵경기장 하차:<br/> 1007-1 (약 1시간 20분)</p>
            <p>사당역(4번출구) → 월드컵경기장 하차:<br/> 7000, 7001 (약 1시간)</p>
            <p>강남역(7번출구) → 월드컵경기장 하차:<br/> 3002, 3007, 3008 (약 1시간)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportInfo;
