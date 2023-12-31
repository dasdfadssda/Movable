import { createGlobalStyle } from "styled-components";

// GlobalStyle을 생성 => 폰트 적용
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  font-weight: 100;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 900;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot?#iefix') format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.ttf') format("truetype");
  font-display: swap;
}

  body{
      font-family: "Pretendard";
      margin: 0px;
      padding: 0px;
   }

`;

export const theme = {
  colors: {
    Primary_pink100: "#ED685A",
    Primary_pink50: "#F7D7D2",
    Primary_pink30: "#FFF7F5",
    White: "#FFFFFF",
    black_30: "#E3E3E3",
    black_50: "#A5A5A5",
    black_70: "#5B5B5B",
    black_90: "#1F1F1F",
    black_100: "#000000"
  },
 Web_fontSizes: {
    Header1: "1.333rem", // 20px / 16px / 375px = 0.01333333rem
    Header2: "1.333rem", // 20px / 16px / 375px = 0.01333333rem
    Header3: "1.6rem",   // 24px / 16px / 375px = 0.016rem
    Body1: "0.8rem",     // 12px / 16px / 375px = 0.008rem
    Body2: "0.9333rem",  // 14px / 16px / 375px = 0.00933333rem
    Body3: "0.9333rem",  // 14px / 16px / 375px = 0.00933333rem
    Body4: "1.0667rem",  // 16px / 16px / 375px = 0.01066667rem
    Body5: "1.0667rem",  // 16px / 16px / 375px = 0.01066667rem
    Body6: "1.0667rem",  // 16px / 16px / 375px = 0.01066667rem
  },
  fontWeights: {
    Header1: "600",
    Header2: "700",
    Header3: "700",
    Header4: "700",
    Body1: "600",
    Body2: "600",
    Body3: "500",
    Body4: "500",
    Body5: "600",
    Body6: "700",
  },
  LineHeight: {
    Header1: "28px",
    Header2: "24px",
    Header3: "28px",
    Body1: "16.8px",
    Body2: "19.6px ",
    Body3: "19.6px",
    Body4: "22.4px",
    Body5: "20px",
    Body6: "20px",
  },
};
