import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Routers";
import { ModalVideoProvider } from "./Components/Video/ModalVideoContext";
import { NavProvider } from "./Components/Context/NavContext";
import { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  // ===========================
  // Cursor Glow Hook
  // ===========================
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* Cursor Glow */}
      {window.innerWidth > 768 && <div id="cursor-glow"></div>}

      <NavProvider>
        <ModalVideoProvider>
          <AppRouter />
        </ModalVideoProvider>
      </NavProvider>
    </Router>
  );
}

export default App;
