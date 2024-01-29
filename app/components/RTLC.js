import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

function Icon(props) {
  return <img src="./public/edit.png" alt="" />
}

function RTLC(props) {
  return (
    <div className="wireframe timeline">
      <VerticalTimeline layout="1-column-left" lineColor="black" animate={false}>
        <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }} date="2011 - present" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2010 - 2011" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
          <div className="comment-section">
            <div className="comment">
              <div className="user">John Doe</div>
              <div className="timestamp">Posted on January 1, 2022</div>
              <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="comment">
              <div className="user">Jane Smith</div>
              <div className="timestamp">Posted on January 2, 2022</div>
              <p>Another comment here. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="comment">
              <div className="user">Your Name</div>
              <textarea placeholder="reply" rows={1} onInput={e => autoresize(e.target)}></textarea>
              <button>Post Comment</button>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2008 - 2010" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2006 - 2008" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="April 2013" iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="November 2012" iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2002 - 2006" iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<Icon />}>
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<Icon />} />
      </VerticalTimeline>
    </div>
  )
}

export default RTLC
