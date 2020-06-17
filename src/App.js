import React, {Component} from 'react';
import './App.css';
import GridCreator from './GridCreator'
import 'tachyons'

const emptyGrid = Array(81).fill('');

const sudokuGrid = [5,3,'','',7,'','','','',
        6,'','',1,9,5,'','','',
        '',9,8,'','','','',6,'',
        8,'','','',6,'','','',3,
        4,'','',8,'',3,'','',1,
        7,'','','',2,'','','',6,
        '',6,'','','','',2,8,'',
        '','','',4,1,9,'','',5,
        '','','','',8,'','',7,9];



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:'',
      index: '',
      sudoku:sudokuGrid,
      solveSudoku:[]
    }
  }

  // onNumChange = (event) => {
  //   console.log(event.target)
  //   this.setState({value: event.target.value});  
  // }

  gridUpdate = (data) => {
    this.setState({solveSudoku: data})
  }

  render() {
    const createNewGrid = (e) => {
      e.preventDefault();
      return this.setState({ sudoku: emptyGrid })
    }
    const { sudoku, solveSudoku } = this.state;
    return (
      <div className="App">
        <h1>Welcome to Sudoku Goku!</h1>
        <div className="sudokuBox">
          <GridCreator grid={sudoku} gridUpdate={this.gridUpdate} solveSudoku={solveSudoku}/>
        </div>
        <div>
          <div className="flex justify-center">
          <form onSubmit={createNewGrid}>
            <button className="solveButton tc pa3 ma2 grow pointer">Empty Grid</button>
          </form>
          <form>
            <button className="solveButton tc pa3 ma2 grow pointer">Solve</button>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
