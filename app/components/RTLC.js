import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import Page from "./Content"

function Attachments(props) {
  return (
    <img
      style={{ height: "50px", width: "50px", backgroundColor: "white" }}
      src="./public/edit.png"
      onClick={(e) => {
        e.stopPropagation()
        alert(`attachment ${props.file} clicked`)
        // openfile(props.file)
      }}
    />
  )
}

function RTLElement({ time, title, description, attachments }) {
  return (
    <VerticalTimelineElement
      icon={<span className="vertical-timeline-element-icon-time"> {time} </span>}
      onTimelineElementClick={() => {
        alert("testclick")
      }}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <p>{description}</p>
      <div style={{ display: "flex", columnGap: "10px", marginTop: "10px" }}>
        {attachments.map((file, index) => (
          <Attachments key={index} file={file} />
        ))}
      </div>
    </VerticalTimelineElement>
  )
}

function RTLDate(props) {
  // filter to use
  const opslogThisDate = props.opslog.filter((log) => log.datetime.split(",")[0] == props.date.split(",")[0])

  return (
    <>
      <VerticalTimelineElement className="vertical-timeline-date">
        <b>{props.date.split(",")[0]}</b>
      </VerticalTimelineElement>
      {opslogThisDate.map((element, index) => (
        <RTLElement key={index} time={element.datetime.split(",")[1]} title={element.title} description={element.description} attachments={element.attachments} />
      ))}
    </>
  )
}

// function Icon(props) {
//   return <span className="vertical-timeline-element-icon-time">12:30</span>
// }

function RTLC(props) {
  // get opslog data from database

  const opslogfromdatabase = [
    {
      datetime: "01-02-2024 14:20:00",
      title: "A Title",
      description: "desc",
      attachments: [1, 2, 3]
    },
    {
      datetime: "04-02-2024 16:17:00",
      title: "A Title Too",
      description: "desc",
      attachments: [1]
    },
    {
      datetime: "08-02-2024 09:56:00",
      title: "A Title again",
      description: "desc",
      attachments: []
    }
  ]

  const formatdates = (numericdate) => {
    const date = new Date(numericdate)
    console.log(new Date("01-02-2024 14:20:00").valueOf())
    console.log(new Date("04-02-2024 16:17:00").valueOf())
    console.log(new Date("08-02-2024 09:56:00").valueOf())
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Singapore",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date)

    return formattedDate
  }

  // get filtered opslog data to display
  const opslog = opslogfromdatabase.map((e) => {
    return { ...e, datetime: formatdates(e.datetime) }
  })
  console.log(opslog)

  return (
    <Page>
      <div className="wireframe" style={{ marginLeft: "30vw" }}>
        <VerticalTimeline layout="1-column-left" lineColor="white" animate={false}>
          {opslog.map((e, index) => (
            <RTLDate key={index} date={e.datetime} opslog={opslog} />
          ))}
        </VerticalTimeline>
      </div>
    </Page>
  )
}

export default RTLC
