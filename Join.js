import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import {connect} from "react-redux";

import { postDataExample} from '../src/redux/action/action';
function Post(props)
{
   // console.log("initial post",props.responseData)
   
    useEffect(()=>{
        props.dispatch(postDataExample("https://reqres.in/api/users","Example3"))
    },[])
    useEffect(() => {
        console.log("post",props.response3)
    },[props.response3])
    return(
        <div>
            <div className="fun">
                {props.responseData &&
                <h3>Context
                    {props.responseData.total}</h3>
                }
            </div>
                
        </div>
    )
}
const mapStateToProps =(state) =>({

   responseData:state.responseData,
    response3:state.response3

});

export default connect(mapStateToProps)(Post)