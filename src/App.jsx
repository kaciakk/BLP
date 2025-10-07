import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ForIndustryPage from "./pages/ForIndustry/ForIndustryPage";
import ForHousePage from "./pages/ForHouse/ForHousePage";
import DotationPage from "./pages/Dotation/DotationPage";
import RealizationPage from "./pages/Realization/RealizationPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="for-industry" element={<ForIndustryPage />} />
        <Route path="for-house" element={<ForHousePage />} />
        <Route path="dotation" element={<DotationPage />} />
        <Route path="realization" element={<RealizationPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
