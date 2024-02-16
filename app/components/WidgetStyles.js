import React from "react"
import { CChart } from "@coreui/react-chartjs"
import { Chart } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip as TooltipR, Legend as LegendR, LabelList, ResponsiveContainer } from "recharts"
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLabel, VictoryTheme, VictoryTooltip } from "victory"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const Coreui = props => {
  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      },
      title: {
        display: true,
        text: "CoreUI Chart.js Bar Chart"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  }

  return <CChart type="bar" data={props.data} options={chartOptions} style={{ width: "100%", height: "100%" }} />
}

export const Chartjs = props => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  }

  return <Chart type="bar" data={props.data} options={chartOptions} style={{ width: "100%", height: "100%" }} />
}

export const RechartsC = props => {
  const data = [
    {
      name: "Bishan",
      cases: 10
    },
    {
      name: "Dover",
      cases: 40
    },
    {
      name: "Lavender",
      cases: 30
    }
  ]

  const colors = ["#FF6384", "#36A2EB", "#FFCE56"]

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 30
        }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <TooltipR />
        <LegendR />
        <Bar dataKey="cases" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
export const VictoryC = props => {
  const colors = ["#FF6384", "#36A2EB", "#FFCE56"]
  const data = [
    { location: "Bishan", cases: 10 },
    { location: "Dover", cases: 40 },
    { location: "Lavender", cases: 30 }
  ]
  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={40}
    >
      <VictoryLabel text="Victory Bar Chart" x={"50%"} y={30} textAnchor="middle" />
      <VictoryAxis tickValues={[1, 2, 3]} tickFormat={["Bishan", "Dover", "Lavender"]} />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={data}
        x="location"
        y="cases"
        barWidth={60}
        style={{
          data: { fill: ({ index }) => colors[index % 20] }
        }}
        labels={({ datum }) => `cases: ${datum.cases}`}
        labelComponent={<VictoryTooltip cornerRadius={1} />}
        // containerComponent={<VictoryContainer preserveAspectRatio="none" responsive={false} />}
      />
    </VictoryChart>
  )
}
export const NivoC = props => {
  return <h1>nivo</h1>
}
export const StatWidget = props => {
  return <h1>stats</h1>
}
