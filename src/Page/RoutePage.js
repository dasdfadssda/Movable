import React from "react";
import { useMediaQuery } from "react-responsive";
import AppRoute from "../Components/App/App_Route_Components/AppRoute";
import WebAbout from "../Components/Web/Web_About_Components/WebAbout";

const RoutePage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppRoute />
        </div>
      ) : (
        <div>
          <WebAbout />
          이건 아직 미정
        </div>
      )}
    </>
  );
};

export default RoutePage;

