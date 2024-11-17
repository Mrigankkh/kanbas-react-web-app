import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Landing from "./Landing";
import { Provider } from "react-redux";
import store from "./Kanbas/store";
function App() {
  return (
    
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/Labs/*" element={<Labs />} />
          
          <Route path="/Kanbas/*" element={<Provider store={store}><Kanbas /></Provider>} />
        </Routes>{" "}
      </div>
    </HashRouter>
  );
}

export default App;
