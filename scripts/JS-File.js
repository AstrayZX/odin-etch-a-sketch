function createGrid(gridSize){

    //create 16x16 grid
    const container = document.querySelector(".container");
    
    const childDiv = document.createElement("div");

    container.replaceChildren();

    const rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";
    rowDiv.style.margin = 0;
    rowDiv.style.flex = "1";

    const gridBox = document.createElement("div");
    gridBox.style.border = "1px solid black";
    gridBox.style.width = 960/gridSize + "px";
    gridBox.style.height = 960/gridSize + "px";
    gridBox.style.flex = "1 1 auto";


    for(let i=0; i<gridSize; i++){
        const cloneRow = rowDiv.cloneNode();
        cloneRow.classList.add("row" + i);

        for(let x=0; x<gridSize; x++){
            const copyBox = gridBox.cloneNode();
            //copyBox.textContent = x;
            copyBox.classList.add("gridBox" + x);
            copyBox.addEventListener("mouseover", changeBoxColor);
            copyBox.style.opacity = 0;
            cloneRow.appendChild(copyBox);
        }

        container.appendChild(cloneRow);
    }
}

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function changeBoxColor(e){
    const randomRGB = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = randomRGB;
    if (parseFloat(e.target.style.opacity) < 1){
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
    }
}

const btn = document.querySelector(".newSketchpad");
btn.addEventListener("click", getGridSize);

function getGridSize(){
    let size = prompt("Enter the size of the grid. 1-100");
    if (size >=1 && size <=100){
        createGrid(size);
    }
}

createGrid(16);