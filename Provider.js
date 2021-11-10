import React,{Component} from "react";
import {ThemeContext} from './App';

// Create a Context
class ClassContextComponent extends Component{
// It returns an object with 2 values:
// { Provider, Consumer }

ThemeStyles(dark){
  // Use the Provider to make a value available to all
  // children and grandchildren
  return {
   backgroundcolor: dark ? '#333' :'#CCC',
   color:dark ? '#CCC' :'#333',
   padding:'2rem',
   margin :'2rem',
   box :'20rem',
   width: '300px',
   border: '15px solid black'
  }
}
render(){
    return(
        <ThemeContext.Consumer>
            {darkTheme => {
                return<div style={this.ThemeStyles(darkTheme)}>class theme</div>
            }
            }
        </ThemeContext.Consumer>
    )
}
}


export default ClassContextComponent
