import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import English from "./components/English";
import Hindi from "./components/Hindi";

function App() {
  return (

    // Hello bro I am ready to contribute
    //welcome bro
    
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ 
            <div className="App" style={{ backgroundColor: "midnightblue" }}>
              <LandingPage />
            </div>
          }
        />

        <Route
          path="/hindimain"
          element={
            <div className="App" style={{ backgroundColor: "midnightblue" }}>
              <Hindi/>
            </div>
          }
        />

        <Route
          path="/englishmain"
          element={
            <div className="App" style={{ backgroundColor: "midnightblue" }}>
              <English/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
