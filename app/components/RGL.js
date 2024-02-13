import { isSelected } from "@progress/kendo-react-inputs"
import React, { useState } from "react"
import { Responsive, WidthProvider } from "react-grid-layout"

const ResponsiveGridLayout = WidthProvider(Responsive)

function RGL(props) {
  // query from database

  const [selectedWidgets, setSelectedWidgets] = useState({
    lg: [
      { i: "map", x: 3, y: 1, w: 6, h: 3, static: true },
      { i: "casualty", x: 1, y: 0, w: 1, h: 1, isResizable: false },
      { i: "resources", x: 4, y: 0, w: 2, h: 1 }
    ]
  })

  const onAddItem = grid => {
    setSelectedWidgets({
      // Add a new item. It must have a unique key!
      lg: layouts.lg.concat({
        i: grid.i,
        x: 0,
        y: 0, // puts it at the bottom
        w: grid.w,
        h: grid.h
      })
    })
  }

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveGridLayout className="layout" layouts={layouts} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} resizeHandles={["n", "s", "e", "w", "ne", "nw", "se", "sw"]} rowHeight={90} maxRows={6} preventCollision compactType={null}>
        {selectedWidgets.map((widget, index) => (
          <div key={index} className="wireframe" style={{ color: "white" }}>
            <Widget widget={widget} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}

export default RGL
