import React from "react"
import items from "./Chronodata"
import { Chrono } from "react-chrono"

function RChrono(props) {
  return (
    <div className="wireframe timeline" style={{ width: "50%", height: "50vh", margin: "20px" }}>
      <Chrono
        items={items}
        mode="VERTICAL"
        cardHeight={100}
        cardWidth={400}
        fontSizes={{
          title: "1rem"
        }}
        contentDetailsHeight={150}
        disableAutoScrollOnClick
        enableOutline
      />
    </div>
  )
}

export default RChrono
