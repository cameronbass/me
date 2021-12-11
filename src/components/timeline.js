import React from 'react'

import "./stylesheets/timeline.css"

var square1 = document.getElementById("square1")
var square2 = document.getElementById("square2")
var date1 = new Date("01/01/2016")
var date2 = new Date()
var diffInTime = date2.getTime() - date1.getTime();
var diffInDays = diffInTime / (1000 * 3600 * 24);
var diffPercent1 = (parseInt(1300 / diffInDays * 100))
var diffPercent2 = (parseInt(700 / diffInDays * 100))

square2.style.height = `${diffPercent2}%`
square1.style.height = `${diffPercent1}%`

const Timeline = () => (
  <div className="timeline-container">
    <div class="container">
      <div id="square2" class="square2"></div>
      <div id="square1" class="square1"></div>
    </div>
  </div>
)

export default Timeline
