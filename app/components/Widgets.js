import React, { useState } from "react"
import { DonutWidget, StatWidget } from "./WidgetStyles"

export const ResourcesWidget = (props) => {
  // query for resources data
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  }
  // select display style
  const [displayStyle, setDisplayStyle] = useState("donut")
  const selectStyle = (e) => {
    setDisplayStyle(e.target.value)
  }

  switch (displayStyle) {
    case "donut":
      return <DonutWidget data={chartData} />

    default:
      return <StatWidget data={chartData} />
  }
}
