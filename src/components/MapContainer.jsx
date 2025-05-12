import React, { useEffect, useState } from 'react';

const MapContainer = () => {
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      if (!mapContainer) return;

      const mapOption = {
        center: new window.kakao.maps.LatLng(37.281614114007354,  127.03028788382828),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 🔽 마커 추가
      const markerPosition = new window.kakao.maps.LatLng(37.281614114007354,127.03028788382828);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map); // 지도 위에 마커 표시
    });
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '350px',
       
      }}
    >
      <div id="map" style={{ width: '100%', height: '100%'   }}></div>
    </div>
  );
};

export default MapContainer;
