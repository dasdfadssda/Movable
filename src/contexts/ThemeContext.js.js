import React, { createContext, useContext } from "react";

// 테마에 대한 컨텍스트 생성
const ThemeContext = createContext();

// ThemeProvider 컴포넌트는 'theme'을 받아서 그것을 컨텍스트로 감싸는 역할을 하도록 설정
export const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

// 어떤 컴포넌트에서든지 테마에 접근할 수 있는 커스텀 훅 공개
export const useTheme = () => useContext(ThemeContext);
