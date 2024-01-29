import React from "react"
import items from "./Chronodata"
import { Chrono } from "react-chrono"

function RChrono(props) {
  return (
    <div className="wireframe timeline">
      <Chrono
        items={items}
        mode="VERTICAL"
        cardHeight={100}
        cardWidth={300}
        fontSizes={{
          title: "12px"
        }}
        contentDetailsHeight={150}
        disableAutoScrollOnClick
        disableNavOnKey
        useReadMore={false}
        hideControls
      />
    </div>
  )
}

export default RChrono
