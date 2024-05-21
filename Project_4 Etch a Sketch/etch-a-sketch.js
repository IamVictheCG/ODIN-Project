let gridNumber = prompt('Enter grid number');
let gridContainer = $(".grid-container")
console.log(gridContainer);
let gridSize = 100/gridNumber
let gridLayout = gridNumber * gridNumber;
let gridItem_1 = document.getElementsByClassName("grid-item")
// console.log(gridItem);
console.log(gridItem_1);

if(gridNumber < 120) {
    gridContainer.empty()
    $(':root').css({
        '--column-size': `${gridSize.toString()}%`,
        '--row-size': `${gridSize.toString()}%`,
        '--column-row-count': gridNumber
    })
    
    for (let i = 0; i < gridLayout; i++) {
        let newElement = document.createElement('div')
        newElement.className = "grid-item";
        gridContainer.append(newElement)
    }

    let gridItem = Array.from($(".grid-item"))
    gridItem.forEach((element) => {
        $(element).hover(() => {
            console.log("object");
            $(element).css("background-color", "#000000");
        })
    })
}