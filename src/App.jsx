import React, { useState } from "react";
import ToDolists from "./ToDolists";

const App = () => {

    const [inputlist, setinputlist] = useState("");



    const itemevents = (event) => {
        setinputlist(event.target.value);
    }

    const [items, setitems] = useState([]);
    const show = () => {
        setitems((olditems) => {
            return [...olditems, inputlist];
        });
        setinputlist("");
    }

    const deleteitem = (id) =>{
        setitems((olditems)=>{
            return olditems.filter((arrelem,index)=>{
                return index !==id;
            })
        })
    }



     



    return (<>
        <div className="outerdiv">
            <div className="innerdiv">
                <br />
                <h1>To do list</h1>
                <br />
                <input type="text" placeholder="Add Task"
                    value={inputlist}
                    onChange={itemevents} />
                <button className="addbutton" onClick={show}>+</button>
                <ol>
                    {/* <li>{inputlist}</li> */}
                    {
                        items.map((val,index) => {
                           return <ToDolists
                           key={index}
                           id={index}
                            text = {val}
                            onselect={deleteitem}
                            />;
                        })
                    }
                </ol>
            </div>
        </div>
    </>)

}

export default App;