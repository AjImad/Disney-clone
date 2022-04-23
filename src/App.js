import React from "react";
import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import './App.css';
import Detail from "./components/Detail";

export default function App(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </div>
    )
}