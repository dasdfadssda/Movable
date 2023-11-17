import React from "react";
import { useMediaQuery } from "react-responsive";
import AppMap from "../Components/App/App_Map_Components/AppMap";
import WebAbout from "../Components/Web/Web_About_Components/WebAbout";

const MapPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppMap />
        </div>
      ) : (
        <div>
          <WebAbout />
        </div>
      )}
    </>
  );
};

export default MapPage;

