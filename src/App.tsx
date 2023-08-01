import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CryptoDashboard from "./pages/CryptoDashboard";
import Instructions from "./pages/Instructions";
import SearchPage from "./pages/SearchPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/instructions":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2186":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CryptoDashboard />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/frame-2186" element={<SearchPage />} />
    </Routes>
  );
}
export default App;
