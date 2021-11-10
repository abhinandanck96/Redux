import logo from './logo.svg';
import './Home.css'

/*

function Homefun() {
  
  return (
    <div className="content">
        <h3>it's header part</h3>

      
    </div>
  )
}

export default Homefun */


class Numbers extends React.Component{
  constructor(props) {
    super(props);

    this.State = {date:new Date()};
  }
componentDidMount(){
 //this.timerID = setInterval (
   //  () =>this.tick(),
     //1000
 //);
}
componentWillUnmount(){
   //clearInterval(this.timerID)
   }
   //tick(){
     //  console.log("tick",this.dateVariable)
       //this.setState({
         //  date:new Date()
   //    });
   }

  //render(){
    return (
        <div>
            <h1>"hello world"</h1>
            <h2>it is{this.State.date.toLocaleTimeString()}</h2>
            <h2>var value{this.dateVariable}</h2>
        </div>

    )
     //       }



export default Numbers 
