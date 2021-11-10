import React, { useEffect } from "react";
import {connect} from "react-redux";
import { getDataExample } from "../src/redux/action/action"

/*const ProductCard = props => {
    return (
      <div className="product">
        <p>
          <b>Title:</b> {props.title}
        </p>
        <p>
          <b>Style:</b> {props.style}
        </p>
        <p>
          <b>Price:</b> {props.price}
        </p>
        <p>
          <b>Description:</b> {props.description}
        </p>
        <p>
          <b>Free shipping:</b> {props.isFreeShipping}
        </p>
        <hr />
      </div>
    );
  };
  

  export default ProductCard*/


  const HomeCategories = (props) => {
    console.log("sky ",props.responseData)
    console.log("home-page new response",props.response2)


    useEffect (() => {
      console.log("useEffect")
      props.dispatch(getDataExample("https://reqres.in/api/products/3","Example2"))
    },[])
    const onButtonClick = () =>{

    }
    return(
      <div className ="home_page">
        <input type ="text"/>
        {props.responseData &&<button onClick = {onButtonClick}>{props.testingredux}</button>
  }
      </div>
    )
  } 
  const mapStateToProps=(state)=>({
    testingredux:state.testingredux,
    responseData:state.responseData,
    response2:state.response2
  })


  export default connect(mapStateToProps)(HomeCategories)