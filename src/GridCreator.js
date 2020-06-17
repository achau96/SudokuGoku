import React from 'react';

class GridCreator extends React.Component {
      constructor(props){
            super(props);
            this.state = {
            value: [''] 
            }
      }

      onNumChange = (event, i) => {
            if(event.target.value.match("^[1-9]*$")!=null){
                  console.log(event.target.value)
            this.setState({value: event.target.value}); 
            this.props.gridUpdate(this.props.grid.map((box,index) => {
                  return i === index ? parseInt(event.target.value) : box
            }))
            // console.log(this.props.grid)
            //  console.log(this.props.solveSudoku)
          }
      }
          
      render(){
            return this.props.grid.map((box,i) => { 
                  if(box===''){
                  return(
                  <input className="box bg-light-blue tc pointer hover-bg-yellow" key={i}
                        maxLength="1"
                        type="text"
                        defaultValue={this.state.value[i]}
                        onChange={(event) => this.onNumChange(event, i)} 
                        ></input>
                  )} else {
                    return(
                      <textarea className="box bg-light-blue tc fw7" key={i}
                            maxLength="1"
                            type='text'
                            value={box}
                            readOnly
                            ></textarea>
                      )
                  } 
                })
      }
}
    
   

   export default GridCreator