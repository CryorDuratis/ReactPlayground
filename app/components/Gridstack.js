import React, { useEffect, useState, createRef, useRef } from "react"
import "gridstack/dist/gridstack.min.css"
import { GridStack } from "gridstack"
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react"
import "@coreui/coreui/dist/css/coreui.min.css"
import { ResourcesWidget } from "./Widgets"

function Gridstacked(props) {
  // LOAD and DISPLAY widgets in grid layout ------------------------------------------------------------------------------------------

  // current grid layout with an example generic initial state before the departments customise for themselves
  // the selected widgets highlight in the dropdown will also depend on this state
  const [gridLayout, setGridLayout] = useState([
    { id: "map", x: 3, y: 1, w: 4, h: 3, locked: true },
    { id: "casualty", x: 1, y: 0, w: 1, h: 1, autoPosition: true, noResize: true }
  ])

  // Load the saved grid layout from somewhere (eg localstorage)
  // Set the current grid layout state to align to the saved layout. Component re-renders the new grid layout state.
  const handleLoadLayout = () => {
    const savedLayoutData = localStorage.getItem("savedGridstack")
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

  // this component is used to initiate and define the gridstack widget containers and their respective content, to facilitate its subsequent use.
  // items is the usestate referring to the list of widget containers. the content will be added to them here.
  // additem is the add widget function passed from the parent to the dropdown button shown here due to the usestate being in the parent
  const refs = useRef({})
  const gridRef = useRef()

  // this creates a reference to enable the mapping of content later
  if (Object.keys(refs.current).length !== gridLayout.length) {
    gridLayout.forEach(({ id }) => {
      refs.current[id] = refs.current[id] || createRef()
    })
  }

  // whenever the widget list changes due to the widget selection dropdown or remove button:
  // initiate the grid if it doesnt exist
  // batchupdate() update the grid values based on the current state, prevents unnecessary re-layouting when new widgets are added.
  // removeall(false) empties the grid rendered without emptying the DOM
  // for each id in the list of selected widgets, create and add that widget
  useEffect(() => {
    gridRef.current =
      gridRef.current ||
      GridStack.init(
        {
          float: true
        },
        ".dashboard"
      )
    const grid = gridRef.current
    grid.batchUpdate()
    grid.removeAll(false) // make sure the grid is empty first
    gridLayout.forEach((item) => {
      const { id, ...formatitem } = item // split id and other properties for element selection and layouting purposes
      // grid.makeWidget(refs.current[id].current, item)
      // el.setAttribute("id", id)
    })
    grid.commit() // this
    // console.log(gridLayout)
  }, [gridLayout])

  // ADD and REMOVE widgets --------------------------------------------------------------------------------------------------
  // possible widgets. this shouldnt change often since new code has to be written for each widget, so it could be fixed here locally.
  // this stores the list of dropdown items as well as the container configurations for each widget.
  const widgetOptions = [
    { id: "map", x: 3, y: 1, w: 4, h: 3, locked: true },
    { id: "casualty", x: 1, y: 0, w: 1, h: 1, autoPosition: true, noResize: true },
    { id: "resources", x: 4, y: 0, w: 2, h: 1, autoPosition: true },
    { id: "div1", x: 4, y: 0, w: 2, h: 1, autoPosition: true },
    { id: "div2", x: 4, y: 0, w: 2, h: 1, autoPosition: true },
    { id: "div3", x: 4, y: 0, w: 2, h: 1, autoPosition: true },
    { id: "div4", x: 4, y: 0, w: 2, h: 1, autoPosition: true },
    { id: "shelters", x: 4, y: 0, w: 2, h: 1, autoPosition: true },
    { id: "incidents", x: 4, y: 0, w: 2, h: 1, autoPosition: true }
  ]
  // on selection, if selected, remove from gridlayout, else add selected widget to the gridlayout. This changes the state and makes the grid render the newly selected widget immediately. The dropdown should also reflect this change.
  const handleWidgetSelect = (selectedWidget) => {
    if (gridLayout.some((current) => current.id === selectedWidget.id)) {
      setGridLayout(gridLayout.filter((current) => current.id !== selectedWidget.id))
      console.log(selectedWidget.id, " removed")
    } else {
      setGridLayout([...gridLayout, selectedWidget])
      console.log(selectedWidget.id, " added")
    }
  }

  useEffect(() => {
    console.log("gridLayout", gridLayout)
  }, [gridLayout])

  // EDIT and SAVE grid layout -------------------------------------------------------------------------------------------------------------------

  // if the user is happy with the new layout, they can save the current grid layout to storage, this will be the default layout on the next load.
  const handleSaveLayout = () => {
    const savedlayout = gridRef.current.save(false)
    console.log("savedlayout", savedlayout)
    // // gridlayout usestate does not update on change.
    // for (let index = 0; index < savedlayout.length; index++) {
    //   savedlayout[index].x = gridstacksave[index].x
    //   savedlayout[index].y = gridstacksave[index].y
    //   savedlayout[index].w = gridstacksave[index].w
    //   savedlayout[index].h = gridstacksave[index].h
    // }
    // console.log(savedlayout)
    // console.log(gridstacksave)
    // localStorage.setItem("savedGridstack", JSON.stringify(savedlayout))
  }

  // RENDER --------------------------------
  return (
    <div>
      <CDropdown autoClose={"outside"}>
        <CDropdownToggle caret color="primary">
          Customise Widgets
        </CDropdownToggle>
        <CDropdownMenu>
          {widgetOptions.map((widget, index) => (
            <CDropdownItem key={index} onClick={() => handleWidgetSelect(widget)} className={gridLayout.some((current) => current.id === widget.id) ? "widget-dropdown-selected" : undefined}>
              {widget.id}
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>{" "}
      <button onClick={handleSaveLayout}>Save Layout</button>
      <div className={`grid-stack dashboard`}>
        {gridLayout.map((item, i) => {
          return (
            <div ref={refs.current[item.id]} key={item.id} className={"grid-stack-item"}>
              <div className="grid-stack-item-content">
                <ResourcesWidget id={item.id} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gridstacked

/* API

// to make the overal grid container div
const grid = GridStack.init()

// to manually add a child element
grid.el.appendChild('<div id="gsi-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2" gs-auto-position="true"></div>')

// to convert an element with the id "id" into a widget
grid.makeWidget('#id');

// probably used to toggle between edit mode and non edit mode, where non edit mode disables all moving, adding and removing?
grid.setStatic(boolean condition)

// condition for whether an item will fit in the existing grid space remaining
handleadd(newwidget) {
  if (grid.willItFit(newNode.x, newNode.y, newNode.w, newNode.h, newNode.autoPosition)) {
    grid.addWidget(newNode.el, newNode);
  }
  else {
    alert('Not enough free space to place the widget');
  }
}

// saves the array of widgets
grid.save() // saves children content by default
grid.save(false) // saves the list of widgets omitting the content field

// const widget = grid.getGridItems()[0].gridstackNode
// grid.update(widget.el, 3, 3, 3, 3)
// console.log(widget)

*/
