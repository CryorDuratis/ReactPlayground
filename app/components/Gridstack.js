import React, { useEffect } from "react"
import "gridstack/dist/gridstack.min.css"
import "react-gridstack/dist/react-gridstack.min.css"
import { GridStack } from "gridstack"

function Gridstacked(props) {
  useEffect(() => {
    const options = {
      // Grid options go here (e.g., cellHeight, verticalMargin, etc.)
      cellHeight: 80,
      verticalMargin: 10
    }

    // Initialize the grid
    var grid = GridStack.init(options)

    // Add initial items to the grid
    // grid.addWidget("<div><b>Widget 1</b></div>", { width: 2, height: 1 })
    // grid.addWidget("<div><b>Widget 2</b></div>", { width: 2, height: 1 })

    const example = () => {
      return <div>test</div>
    }

    const data = [
      { x: 0, y: 0, w: 2, h: 2, content: { example } },
      { x: 0, y: 0, w: 2, h: 2 },
      { x: 0, y: 0, w: 2, h: 2 }
    ]
    grid.load(data)
  }, [])

  return (
    <div>
      <h2>React GridStack Example</h2>
      <div className="grid-stack"></div>
    </div>
  )
}

export default Gridstacked
