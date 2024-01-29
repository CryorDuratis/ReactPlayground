import React from "react"
import { useNavigate } from "react-router-dom"

function Header(props) {
  const navigate = useNavigate()

  return (
    <div className="header wireframe">
      <div className="headertabs" onClick={e => navigate("/")}>
        Home
      </div>
      <div className="headertabs" onClick={e => navigate("/chrono")}>
        Chrono
      </div>
    </div>
  )
}

export default Header
