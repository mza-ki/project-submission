/**
 ** Dreff: a function to create dramatic effects on images
 **/
const Dreff = (arg) => {

  // some basic values
  let init = ".dreff";
  let clipPath = "";
  let clipType = "polygon";

  // if no values are specified, create a fake object (it will default)
  let args = arg || {};
  if (!args.hover) { args.hover = { back: {}, front: {} } }
  if (!args.hover.back) { args.hover.back = {} }
  if (!args.hover.front) { args.hover.front = {} }
  if (!args.initial) { args.initial = { back: {}, front: {} } }
  if (!args.initial.back) { args.initial.back = {} }
  if (!args.initial.front) { args.initial.front = {} }

  // update default settings
  init = args.init ? args.init : init;

  // apply all to the selectors
  let elements = document.querySelectorAll(init);
  elements.forEach((el) => {

    // add the dreff classes, and duplicate image
    el.classList.add("dreff-holder")
    let img = el.querySelector("img");
    let parent = img.parentNode;
    let clone = img.cloneNode(true);
    img.classList.add("dreff-back");
    img.classList.add("dreff-img");
    clone.classList.add("dreff-front");
    clone.classList.add("dreff-img");

    // generate clip-path if specified
    if (args.clipPath) {
      clipType = args.clipType ? args.clipType : "polygon";
      clipPath = args.clipPath ? clipType + "(" + args.clipPath + ")" : "";
      clone.style.setProperty("--hover-front-clippath", clipPath);
    }

    // set initial state for front and back images
    if (args.initial.back.hasOwnProperty("blur")) { img.style.setProperty("--blur", args.initial.back.blur); }
    if (args.initial.back.hasOwnProperty("brightness")) { img.style.setProperty("--brightness", args.initial.back.brightness); }
    if (args.initial.back.hasOwnProperty("grayscale")) { img.style.setProperty("--grayscale", args.initial.back.grayscale); }
    if (args.initial.back.hasOwnProperty("scale")) { img.style.setProperty("--scale", args.initial.back.scale); }
    if (args.initial.back.hasOwnProperty("sepia")) { img.style.setProperty("--sepia", args.initial.back.sepia); }

    if (args.initial.front.hasOwnProperty("blur")) { clone.style.setProperty("--front-blur", args.initial.front.blur); }
    if (args.initial.front.hasOwnProperty("brightness")) { clone.style.setProperty("--front-brightness", args.initial.front.brightness); }
    if (args.initial.front.hasOwnProperty("grayscale")) { clone.style.setProperty("--front-grayscale", args.initial.front.grayscale); }
    if (args.initial.front.hasOwnProperty("scale")) { clone.style.setProperty("--front-scale", args.initial.front.scale); }
    if (args.initial.front.hasOwnProperty("sepia")) { clone.style.setProperty("--front-sepia", args.initial.front.sepia); }

    // set hover state for front and back images
    if (args.hover.back.duration) { img.style.setProperty("--hover-duration", args.hover.back.duration); }
    if (args.hover.back.hasOwnProperty("blur")) { img.style.setProperty("--hover-blur", args.hover.back.blur); }
    if (args.hover.back.hasOwnProperty("brightness")) { img.style.setProperty("--hover-brightness", args.hover.back.brightness); }
    if (args.hover.back.hasOwnProperty("grayscale")) { img.style.setProperty("--hover-grayscale", args.hover.back.grayscale); }
    if (args.hover.back.hasOwnProperty("scale")) { img.style.setProperty("--hover-scale", args.hover.back.scale); }
    if (args.hover.back.hasOwnProperty("sepia")) { img.style.setProperty("--hover-sepia", args.hover.back.sepia); }

    if (args.hover.front.duration) { clone.style.setProperty("--hover-front-duration", args.hover.front.duration); }
    if (args.hover.front.hasOwnProperty("blur")) { clone.style.setProperty("--hover-front-blur", args.hover.front.blur); }
    if (args.hover.front.hasOwnProperty("brightness")) { clone.style.setProperty("--hover-front-brightness", args.hover.front.brightness); }
    if (args.hover.front.hasOwnProperty("grayscale")) { clone.style.setProperty("--hover-front-grayscale", args.hover.front.grayscale); }
    if (args.hover.front.hasOwnProperty("scale")) { clone.style.setProperty("--hover-front-scale", args.hover.front.scale); }
    if (args.hover.front.hasOwnProperty("sepia")) { clone.style.setProperty("--hover-front-sepia", args.hover.front.sepia); }

    // add the second picture to the container
    parent.appendChild(clone);
  })
}
/** END **/

// #section-1 will be default: only grow front image
Dreff({ init: "#section-1" });

// #section-2 will be default, but the front will be clipped to create an effect
Dreff({ init: "#section-2", clipPath: "22% 100%,22% 84%,25% 70%,29% 60%,34% 47%,36% 32%,40% 18%,45% 13%,51% 12%,55% 16%,59% 22%,60% 29%,59% 38%,58% 48%,58% 55%,57% 60%,55% 61%,57% 71%,61% 79%,65% 100%" });

// #section-3 will start as a shadow and will reveal front as the effect
Dreff({
  init: "#section-3",
  initial: {
    back: {
      grayscale: 1,
      brightness: 0.4,
      sepia: 0,
    },
    front: {
      brightness: 0,
      grayscale: 1,
      sepia: 0
    }
  },
  hover: {
    front: {
      grayscale: 0,
      scale: 1.6
    },
    back: {
      blur: 0,
      grayscale: 0,
      sepia: 0.7
    }
  },
  clipPath: "22% 100%,22% 84%,25% 70%,29% 60%,34% 47%,36% 32%,40% 18%,45% 13%,51% 12%,55% 16%,59% 22%,60% 29%,59% 38%,58% 48%,58% 55%,57% 60%,55% 61%,57% 71%,61% 79%,65% 100%"
});

Dreff({
  init: "#section-4",
  clipPath: "22% 100%,22% 84%,25% 70%,29% 60%,34% 47%,36% 32%,40% 18%,45% 13%,51% 12%,55% 16%,59% 22%,60% 29%,59% 38%,58% 48%,58% 55%,57% 60%,55% 61%,57% 71%,61% 79%,65% 100%",
  initial: {
    back: { sepia: 0 },
    front: { sepia: 0 }
  },
  hover: {
    back: {
      blur: 0
    },
    front: {
      scale: 1,
      sepia: 0.3,
      duration: "0.6s"
    }
  }
});