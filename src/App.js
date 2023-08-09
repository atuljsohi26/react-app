import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./users/pages/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
