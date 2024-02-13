import React from "react"
import { CChart } from "@coreui/react-chartjs"

export const DonutWidget = (props) => {
  const chartOptions = {
    tooltips: {
      enabled: true
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      }
    }
  }

  return <CChart data={props.data} options={chartOptions} style={{ width: "100%", height: "100%" }} />
}

export const StatWidget = (props) => {
  return <h1>{props.data}</h1>
}
