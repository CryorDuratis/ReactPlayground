import * as React from "react"
import { Timeline, sortEventList } from "@progress/kendo-react-layout"
import { events } from "./events"
import Page from "./Content"

const sortedEvents = sortEventList(events)

function KendoTL(props) {
  return (
    <Page>
      <div className="wireframe timeline">
        <h1>Timeline</h1>
        <Timeline
          events={sortedEvents}
          onActionClick={() => {
            alert("testclick")
          }}
        />
      </div>
    </Page>
  )
}

export default KendoTL
