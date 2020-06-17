import React from 'react'

const ArrayConverter = ({sudokuGrid}) => {
    var gridArray = [[],[],[],[],[],[],[],[],[]];
    // Creates a 2 dimensional array for solving
    sudokuGrid.forEach((element,index) => {
        let colIndex = Math.floor(index/9);
        return gridArray[colIndex].push(element)
    });
}

const ReverseConverter = ({gridArray}) => {
    var newGrid = [];
    // Reverts back to 1-dimensional array for display
    for(var i = 0;i < 9; i++){
        for(var j = 0; j < 9; j++){
            newGrid.push(gridArray[i][j])
        }
    }
    return newGrid
}

export default ArrayConverter