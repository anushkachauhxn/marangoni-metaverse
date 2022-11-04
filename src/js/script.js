import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

Draggable.create("#bg_image", {
  type: "x",
  bounds: document.querySelector(".image-container"),
  inertia: true,
  onClick: function () {
    console.log("clicked");
  },
  onDragEnd: function () {
    console.log("drag ended");
  },
});
