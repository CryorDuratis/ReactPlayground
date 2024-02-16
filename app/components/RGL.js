import React, { useEffect, useRef, useState } from "react"
import GridLayout, { WidthProvider } from "react-grid-layout"
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react"
import "@coreui/coreui/dist/css/coreui.min.css"
import { ResourcesWidget } from "./Widgets"

const ResponsiveGridLayout = WidthProvider(GridLayout)

function RGL(props) {
  // LOAD and DISPLAY widgets in grid layout ------------------------------------------------------------------------------------------
  // current grid layout with an example generic initial state before the departments customise for themselves
  // the selected widgets highlight in the dropdown will also depend on this state
  const [gridLayout, setGridLayout] = useState([
    { i: "map", x: 3, y: 1, w: 4, h: 3, static: true },
    { i: "casualty", x: 1, y: 0, w: 1, h: 1, isResizable: false }
  ])

  // Load the saved grid layout from somewhere (eg localstorage)
  // Set the current grid layout state to align to the saved layout. Component re-renders the new grid layout state.
  const handleLoadLayout = () => {
    const savedLayoutData = localStorage.getItem("savedLayout")
    if (savedLayoutData) {
      const parsedData = JSON.parse(savedLayoutData)
      console.log("setting gridlayout as saved data: ", parsedData)
      setGridLayout(parsedData)
    }
  }

  // on dashboard mount, query for savedlayout based on department and load it
  useEffect(() => {
    handleLoadLayout()
  }, [])

  // ADD and REMOVE widgets --------------------------------------------------------------------------------------------------
  // possible widgets. this shouldnt change often since new code has to be written for each widget, so it could be fixed here locally.
  // this stores the list of dropdown items as well as the container configurations for each widget.
  const widgetOptions = [
    { i: "map", x: 3, y: 1, w: 4, h: 3, static: true },
    { i: "casualty", x: 1, y: 0, w: 1, h: 1, isResizable: false },
    { i: "resources", x: 4, y: 0, w: 2, h: 1 },
    { i: "div1", x: 4, y: 0, w: 2, h: 1 },
    { i: "div2", x: 4, y: 0, w: 2, h: 1 },
    { i: "div3", x: 4, y: 0, w: 2, h: 1 },
    { i: "div4", x: 4, y: 0, w: 2, h: 1 },
    { i: "shelters", x: 4, y: 0, w: 2, h: 1 },
    { i: "incidents", x: 4, y: 0, w: 2, h: 1 }
  ]

  // on selection, if selected, remove from gridlayout, else add selected widget to the gridlayout. This changes the state and makes the grid render the newly selected widget immediately. The dropdown should also reflect this change.
  const handleWidgetSelect = selectedWidget => {
    if (gridLayout.some(current => current.i === selectedWidget.i)) {
      setGridLayout(gridLayout.filter(current => current.i !== selectedWidget.i))
      console.log(selectedWidget.i, " removed")
    } else {
      setGridLayout([...gridLayout, selectedWidget])
      console.log(selectedWidget.i, " added")
    }
  }

  // EDIT and SAVE grid layout -------------------------------------------------------------------------------------------------------------------
  // update the current grid layout state whenever a drag or resize is done
  const onLayoutChange = newLayout => {
    console.log(newLayout)
    setGridLayout(newLayout)
  }

  // if the user is happy with the new layout, they can save the current grid layout to storage, this will be the default layout on the next load.
  const handleSaveLayout = () => {
    localStorage.setItem("savedLayout", JSON.stringify(gridLayout))
  }

  return (
    <div>
      <CDropdown autoClose={"outside"}>
        <CDropdownToggle caret color="primary">
          Customise Widgets
        </CDropdownToggle>
        <CDropdownMenu>
          {widgetOptions.map((widget, index) => (
            <CDropdownItem key={index} onClick={() => handleWidgetSelect(widget)} className={gridLayout.some(current => current.i === widget.i) ? "widget-dropdown-selected" : undefined}>
              {widget.i}
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>{" "}
      <button onClick={handleSaveLayout}>Save Layout</button>
      <ResponsiveGridLayout className="layout" layout={gridLayout} cols={12} resizeHandles={["ne", "nw", "se", "sw"]} rowHeight={90} maxRows={6} preventCollision compactType={null} onLayoutChange={onLayoutChange}>
        {gridLayout.map(item => (
          <div key={item.i} className="react-grid-item" style={{ border: "1px solid black" }}>
            <h2>{item.i}</h2>
            <ResourcesWidget />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}

export default RGL
