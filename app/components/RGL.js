import React, { useState } from "react"
import { Responsive, WidthProvider } from "react-grid-layout"

const ResponsiveGridLayout = WidthProvider(Responsive)

function RGL(props) {
  const [layouts, setlayouts] = useState({
    lg: [
      { i: "map", x: 3, y: 1, w: 4, h: 3, static: true },
      { i: "casualty", x: 1, y: 0, w: 1, h: 1, isResizable: false },
      { i: "resources", x: 4, y: 0, w: 2, h: 1 }
    ]
  })

  const onAddItem = () => {
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      })
    })
  }

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveGridLayout className="layout" layouts={layouts} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} resizeHandles={["n", "s", "e", "w", "ne", "nw", "se", "sw"]} rowHeight={90} maxRows={6} preventCollision compactType={null}>
        <div key="map" style={{ border: "1px solid black" }}>
          1
        </div>
        <div key="casualty" style={{ border: "1px solid black" }}>
          2
        </div>
        <div key="resources" style={{ border: "1px solid black" }}>
          3
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}

export default RGL
