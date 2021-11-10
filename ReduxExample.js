import React,{useEffect} from 'react';
import { connect } from 'react-redux'; 
import { getDataExample ,postDataExample} from './redux/action/action';
import HomeCategories from './High';
import Post from './Join'



const TodoList = (props) =>{
    console.log("new reduce",props.response2,props.response3)

    useEffect(()=>{
        console.log("useEffect")
        props.dispatch(getDataExample("https://api.npms.io/v2/search?q=react","Example1"))
    },[])

    useEffect(()=>{
        console.log("useEffect")
        props.dispatch(postDataExample("https://reqres.in/api/users","Example3"))
    },[])

  useEffect (() =>{
  console.log("initial Pages",props.responseData)

},[props.responseData])


    return (
        <div>
            <h3>
                Todo list
            </h3>
            {props.responseData &&
            <div>
            {props.responseData.total}
        </div>
}
        <HomeCategories/>
        <Post/>
        </div>
    )

}

const mapStateToProps =(state) =>({
    testingredux:state.testingredux,
    responseData: state.responseData,
    response2:state.response2,
    response3:state.response3
});


export default connect(mapStateToProps)(TodoList);