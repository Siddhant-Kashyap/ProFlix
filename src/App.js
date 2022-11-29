import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import English from "./components/English";
import Hindi from "./components/Hindi";
import Head from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Head/>
      <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/hindiSection" element={<Hindi/>}/>
       <Route path="/englishSection" element={<English/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
