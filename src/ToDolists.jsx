import React from "react";




const ToDolists = (props) =>{
     return (
        <>
        <div className="text">
       <button className="remove" onClick={()=>{
        props.onselect(props.id);
       }} >
        -
       </button>
        {props.text}
        </div>
        </>)
}

export default ToDolists;