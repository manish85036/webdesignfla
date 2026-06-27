import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import WebDesign from "@/pages/WebDesign";
import SEO from "@/pages/SEO";
import Social from "@/pages/Social";
import Portfolio from "@/pages/Portfolio";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/web-design" element={<WebDesign />} />
              <Route path="/web-design/" element={<WebDesign />} />
              <Route path="/seo" element={<SEO />} />
              <Route path="/seo/" element={<SEO />} />
              <Route path="/social" element={<Social />} />
              <Route path="/social/" element={<Social />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/" element={<Portfolio />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
              <Route path="/index.html" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
