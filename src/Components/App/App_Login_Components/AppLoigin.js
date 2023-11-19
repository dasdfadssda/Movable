import React from "react";
import KakaoLogin from "react-kakao-login";
import { dbService } from "../fbase"; // fbase.js에서 dbService 가져오기
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;

  const onKakaoSuccess = async (data) => {
    console.log(data);
    // kakaoResponse(data.response.access_token);

    const docRef = doc(dbService, "Users", String(data.profile.id));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      navigate("/");
    } else {
      console.log("New Users!");
      const docRef = setDoc(doc(dbService, "Users", String(data.profile.id)), {
        id: data.profile.id,
        Name: data.profile.properties.nickname,
      });
      if (docRef) {
        console.log("create firstStep에 저장 성공");
        navigate("/");
      }
    }
  };

  const onKakaoFailure = (error) => {
    console.log(error);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={onKakaoSuccess}
        onFail={onKakaoFailure}
      />
      <div 
       style={{
         margin: "300px"
      }}
      >
asdf
      </div>
    </div>
  );
}

export default LoginPage;
