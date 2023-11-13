import React from "react";
import { useMediaQuery } from "react-responsive";
import AppHome from "../Components/App/App_Home_Components/AppHome";
import WebHome from "../Components/Web/Web_Home_Components/Webhome";

const HomePage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppHome />
        </div>
      ) : (
        <div>
            <WebHome/>
        </div>
      )}
    </>
  );
};

export default HomePage;
