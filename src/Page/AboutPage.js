import React from "react";
import { useMediaQuery } from "react-responsive";
import AppAbout from "../Components/App/App_About_Components/AppAbout";
import WebAbout from "../Components/Web/Web_About_Components/WebAbout";

const AboutPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppAbout />
        </div>
      ) : (
        <div>
          <WebAbout />
        </div>
      )}
    </>
  );
};

export default AboutPage;

