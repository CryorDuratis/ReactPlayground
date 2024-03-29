// import node modules
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// import components
import Header from "./components/Header"
import Home from "./components/Home"
import RChrono from "./components/Chrono"
import RTLC from "./components/RTLC"
import RGL from "./components/RGL"
import Gridstacked from "./components/Gridstack"

function MainComponent() {
  return (
    <BrowserRouter>
      <Header />
      {/* main body */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chrono" element={<RChrono />} />
        <Route path="/rtlc" element={<RTLC />} />
        <Route path="/rgl" element={<RGL />} />
        <Route path="/gridstack" element={<Gridstacked />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<MainComponent />)

// if (module.hot) {
//   module.hot.accept()
// }
