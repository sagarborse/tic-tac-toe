/**
 * This program is a boliler plate code for the famous tic tac toe game
 * Here box represents one placeholder for either X or a 0
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 * 
 * Below are the tasks which needs to be completed
 * Imagine you are playing with Computer so every alternate move should be by Computer
 * X -> player
 * O -> Computer
 * 
 * Winner has to be decided and has to be flashed
 * 
 * Extra points will be given for the Creativity
 * 
 * Use of Google is not encouraged
 * 
 */
grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
no_of_moves = 0
radio_value=2


function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    let newValue = parseInt(radio_value);
    grid[colIdx][rowIdx] = newValue;
    
    if (newValue == 1){
        comp_symbol = 2
    }
    else{
        comp_symbol = 1
    }

    gameStatus()
    comp(comp_symbol)
    renderMainGrid();
    addClickHandlers();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}



$(document).ready(function(){
    $("input[type='radio']").click(function(){
        grid = []
        initializeGrid();
        renderMainGrid();
        addClickHandlers();
        obj = {'1':'X', '2':'O'}
        radio_value = $("input[name='symbol']:checked").val();
        if(radio_value){
            alert("Player 1 selected : " + obj[radio_value]);
        }
        if (radio_value == '2'){
            comp(1);
            renderMainGrid();
            addClickHandlers();
        }
    });
        

});

function comp(compValue) {
    var rowIdx= 100 , colIdx = 100
    for (i=0;i<3;i++){
        for (j=0; j< 3; j++){
            if (grid[i][j] == 0){
                rowIdx = j;
                colIdx = i;
                break;
            }
        }
    }
    if (rowIdx >50){
        alert('Game Over')
    }
    else{
        grid[colIdx][rowIdx] = compValue;
        gameStatus();
        renderMainGrid();
        addClickHandlers();
    }
  
};


function gameStatus(){
    winner = 0
    console.log(grid)
    for (i =1; i < 3; i ++){

        if (grid[0][0] == i && grid[0][1] == i && grid[0][2] == i){
            winner = i;
            break;
        }
        if (grid[1][0] == i && grid[1][1] == i && grid[1][2] == i){
            winner = i;
            break;
        }
        if (grid[2][0] == i && grid[2][1] == i && grid[2][2] == i){
            winner = i;
            break;
        }


        if (grid[0][0] == i && grid[1][0] == i && grid[2][0] == i){
            winner = i;
            break;
        }
        if (grid[0][1] == i && grid[1][1] == i && grid[2][1] == i){
            winner = i;
            break;
        }
        if (grid[0][2] == i && grid[1][2] == i && grid[2][2] == i){
            winner = i;
            break;
        }

        if (grid[0][0] == i && grid[1][1] == i && grid[2][2] == i){
            winner = i;
            break;
        }
        if (grid[0][2] == i && grid[1][1] == i && grid[2][0] == i){
            winner = i;
            break;
        }
    }

    if (winner !=0 ){
        if (i == radio_value){
            alert("Player one Win's");
            initializeGrid();
            renderMainGrid();
            addClickHandlers();
        }
        else {
            alert("Computer Win's");
            initializeGrid();
            renderMainGrid();
            addClickHandlers();
        }
    }
}

initializeGrid();
renderMainGrid();
addClickHandlers();
