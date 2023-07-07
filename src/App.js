import React, { useEffect } from "react";
import FirstPage from "./pages/First_Page/FirstPage";
import { Routes, Route } from "react-router-dom";
import ViewIngredients from "./pages/View_Ingredients/ViewIngredients";
import "./App.scss";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/view_ingredients" element={<ViewIngredients />}></Route>
      </Routes>
    </div>
  );
}

export default App;
