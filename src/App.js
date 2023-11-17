import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPage from "./Page/MapPage";
import HomePage from "./Page/HomePage";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext.js"; 
import { theme } from "./Style/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <ScrollToTop />
      <Routes>
        {/* 기본 화면 설정 */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Map" element={<MapPage />} /> 
        <Route path="/Route" element={<HomePage />} /> 
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
