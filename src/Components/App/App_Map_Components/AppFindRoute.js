import React, { useState, useRef } from "react";
import { NaverMap, Polyline, Marker } from "react-naver-maps";

const AppFindRoute = () => {
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const zoom = 10;
  const departureRef = useRef(null);
  const arrivalRef = useRef(null);

  const routes = {
    trafast: {
      path: [[126.978, 37.5665]],
    },
  };
  return (
    <NaverMap
      //ncpClientId={process.env.REACT_APP_NAVER_CLOUD_CLIENT_ID}
      style={{
        width: "100%",
        height: "100vh",
      }}
      zoom={zoom}
      center={center}
      onCenterChanged={(newCenter) => setCenter(newCenter)}
      onZoomChanged={(newZoom) => console.log(newZoom)}
    >
      {routes && routes.trafast && (
        <Polyline
          path={routes.trafast.path.map(
            ([lng, lat]) => new window.naver.maps.LatLng(lat, lng)
          )}
          strokeColor={"#ff3344"}
          strokeStyle={"solid"}
          strokeOpacity={0.8}
          strokeWeight={4}
        />
      )}
      {departureRef.current && <Marker position={departureRef.current} />}
      {arrivalRef.current && <Marker position={arrivalRef.current} />}
    </NaverMap>
  );
};

export default AppFindRoute;
