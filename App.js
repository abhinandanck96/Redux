import logo from './logo.svg';
import './App.css';
//import ClickCounter from './ClickCounter';
//import HoverCounter from './HoverCounter';
import React,{useState} from 'react';
import FunctionContextComponent from './Contact';
import ClassContextComponent from './Provider';
//import Child from './Contact';


/*
function App() {
  
  return (
    <div className="App">
   <HoverCounter/>
     <ClickCounter/>
    </div>
  );
}

export default App */



export const ThemeContext =React.createContext()
function App(){
  const [darkTheme,setDarkTheme] =useState(true)
  function toggleTheme(){
    setDarkTheme(prevdarkTheme =>!prevdarkTheme)
  
  }
  return(
    <div>
     <ThemeContext.Provider value={darkTheme}>
        <button onClick ={toggleTheme}>toggleTheme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
      </ThemeContext.Provider>
    </div>
  )
}


export default App 


/*
function Parent(){
  const[word,setWord] = useState('Bob')
  return (
    <div className ="Parent">
      <h1>{word}</h1>
      <Child changeword ={word => setWord(word)}/>
    </div>
  )
}

export default Parent*/