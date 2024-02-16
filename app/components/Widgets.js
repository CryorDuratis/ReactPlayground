import React, { useEffect, useState } from "react"
import { Chartjs, Coreui, NivoC, RechartsC, StatWidget, VictoryC } from "./WidgetStyles"
import { loadModules } from "esri-loader"

export const WidgetSwitchBoard = props => {
  switch (props.id) {
    case "map":
      return <MapWidget />
    case "incidents":
      return <IncidentsWidget id={props.id} />
    case "shelters":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "casualty":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "resources":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "div1":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "div2":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "div3":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "div4":
      return <SheltersWidget displayStyle={props.displayStyle} />
    case "div5":
      return <SheltersWidget displayStyle={props.displayStyle} />
    default:
      return <p>error</p>
  }
}

function DisplaySwitch(displaystyle, data) {
  switch (displaystyle) {
    case "coreui":
      return <Coreui data={data} />
    case "chartjs":
      return <Chartjs data={data} />
    case "recharts":
      return <RechartsC data={data} />
    case "victory":
      return <VictoryC data={data} />
    case "nivo":
      return <NivoC data={data} />
    default:
      return <StatWidget data={data} />
  }
}

export const ResourcesWidget = props => {
  // query for resources data
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  }
  return DisplaySwitch(props.displayStyle, chartData)
}
export const MapWidget = props => {
  useEffect(() => {
    // Load the required ArcGIS modules
    loadModules(["esri/Map", "esri/views/MapView"], { css: true })
      .then(([Map, MapView]) => {
        // Create a new map
        const map = new Map({
          basemap: "streets"
        })

        // Create a new map view
        const view = new MapView({
          container: "mapcontainer", // ID of the container div
          map: map,
          center: [103.8198, 1.3521],
          zoom: 11
        })
      })
      .catch(err => {
        console.error("Error loading ArcGIS modules:", err)
      })
  }, []) // Empty dependency array ensures the effect runs only once on component mount

  return
}
export const IncidentsWidget = props => {
  return <h2>{props.id}</h2>
}
export const SheltersWidget = props => {
  // query for resources data
  const chartData = {
    labels: ["Bishan", "Dover", "Lavender"],
    datasets: [
      {
        label: "cases",
        data: [10, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  }
  return DisplaySwitch(props.displayStyle, chartData)
}
