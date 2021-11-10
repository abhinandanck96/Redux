import React, { useContext } from "react";
import { ReactDOM } from "react";
import { ThemeContext } from "./App";



function FunctionContextComponent(){
    const darkTheme = useContext(ThemeContext)
    const ThemeStyles = { backgroundcolor: darkTheme ? '#333' :'#CCC',
    color:darkTheme ? '#CCC' :'#333',
    padding:'2rem',
    margin :'2rem',
    width: '300px',
    border: '15px solid black'
}
    return(
        <div style={ThemeStyles}>Function Theme</div>
    )
}


export default FunctionContextComponent

/*function Child (props){
    return(
        <div className="Child">
            <h1>Child</h1>
            <button 
            onClick={()=>props.changeword('Abhi')}>
                click to change title </button>
        </div>
    )
}

export default Child*/