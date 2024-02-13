import React from "react"

function Page(props) {
  return (
    <div className="wireframe" style={{ overflowY: "scroll", maxHeight: "calc(100vh - 60px)" }}>
      {props.children}
    </div>
  )
}

export default Page
