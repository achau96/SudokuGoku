import React from 'react'
import ArrayConverter from './ArrayConverter'

const Solver = ({gridArray}) => {
    for(let i = 0;i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(gridArray[i][j] === "")
            gridArray[i][j] = 1;
        }
    }
    return gridArray
}

export default Solver