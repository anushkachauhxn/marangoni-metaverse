import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

Draggable.create(".draggable-content", {
  type: "x",
  bounds: document.querySelector(".main-container"),
  inertia: true,
  onClick: function () {
    console.log("clicked");
  },
  onDragEnd: function () {
    console.log("drag ended");
  },
});
