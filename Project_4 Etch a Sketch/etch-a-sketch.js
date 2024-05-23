let generateBtn = $(".generate");
let clearGrid = $(".clear");
let eraseGrid = $(".erase");
let shade = $(".shadeEffect");
let shadingActive = false;
let erasingActive = false;
let gridContainer = $("#grid-container");

window.addEventListener("load", () => {
  gridGenerator(16)
});

let gridGenerator = (number) => {
  let dimension = number * number;
  $(".dimension").html(`Grid: ${number} * ${number}`)
  gridContainer.empty();
  // gridContainer.innerHTML = " ";
  for (let i = 0; i < dimension; i++) {
    // console.log("hey");
    let grid = document.createElement("div");
    $(gridContainer)[0].appendChild(grid);
    grid.setAttribute("class", "grid");
    grid.style.flexBasis = `${100 / number}%`;
    console.log(grid.style.flexBasis);
  }
  hoverEvent();
};

let promptGenerator = () => {
  let gridLength = prompt("Enter your preferred Grid dimensions");
  gridLength = parseInt(gridLength);

  if (gridLength <= 0 || gridLength >= 140 || isNaN(gridLength)) {
    alert("Please enter a number between 1 and 140");
    return;
  } else {
    gridGenerator(gridLength);
  }
};

let handleSelectColorEffect = (() => {
  let red = "#ff0000";
  let green = "#00ff00";
  let blue = "#0000ff";
  let black = "#000000";
  let selectedColor = black; // Default color
  // let plainColors = [red, green, blue, black];
  let selectColorEffect = $("#selectColorEffect");

  selectColorEffect.change(() => {
    shadingActive = false;
    erasingActive = false;
    let selectedValue = selectColorEffect.val();

    switch (selectedValue) {
      case red:
      case green:
      case blue:
      case black:
        selectedColor = selectedValue;
        console.log(selectedColor);
        break;
      default:
        selectedColor = "rgb";
        console.log(selectedColor);
    }
  });

  return () => selectedColor; // Explicitly return the selected color
})();

let shadingEffect = () => {
  shadingActive = true
  erasingActive = false;
};

let erasingEffect = () => {
  erasingActive = true
  if (erasingActive) {
    console.log("rrr");
  }
};

let hoverEvent = () => {
  let clicked = false;
  console.log(clicked);

  function executeHoverEvent() {
    $(".grid").each((index, element) => {
      $(element).hover(function () {
        let currentColor;
        if (shadingActive) {
          let currentBgColor = $(this).css("background-color");
          let rgbArray = currentBgColor.match(/\d+/g).map(Number);
          console.log(rgbArray);
          let [R, G, B] = rgbArray.map(channel => Math.max(channel - 25, 0)); // Darken by 25
          console.log(G, R);
          currentColor = `rgb(${R},${G},${B})`;
          if (erasingActive) {
            console.log("object");
            currentColor = "rgb(255,255,255)";
          }
        } else if (erasingActive) {
          console.log("object");
          currentColor = "rgb(255,255,255)";
        } else {
          currentColor = handleSelectColorEffect();
          if (currentColor === "rgb") {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            currentColor = `rgb(${R}, ${G}, ${B})`;
          }
        }
        $(this).css("background-color", currentColor);
      });
    });
  }
  executeHoverEvent();
  $(gridContainer)[0].addEventListener("click", function () {
    clicked = !clicked;
    console.log(`clicked: ${clicked}`);

    if (!clicked) {
      executeHoverEvent();
    } else {
      $(".grid").off("mouseenter mouseleave"); // Remove hover event handlers when not clicked
    }
  });
};



// clearGrid.click(() => {
//   shadingActive = false;
//   let grid = $(".grid");
//   $(grid).each((index, element) => {
//     $(element).css("background-color", "white");
//   });
//   console.log("clear");
// });

// $(generateBtn).click(promptGenerator);
// shade.click(shadingEffect);
// eraseGrid.click(erasingEffect)
