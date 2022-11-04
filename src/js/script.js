import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

Draggable.create(".draggable-content", {
  type: "x",
  bounds: document.querySelector(".main-container"),
  inertia: true,
  dragClickables: false,
  dragResistance: 0.25,
  onClick: function () {
    console.log("clicked");
  },
  onDragEnd: function () {
    console.log("drag ended");
  },
});
