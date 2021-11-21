import React, {useMemo, useState, useCallback} from "react";
import MyChildComponent from "./MyChildComponent";

function MyParentComponent() {
    const[parentStateTracker, setParentState] = useState(0);
    const[childStateTracker, setChildState] = useState(2);
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const getEvenNumber = () =>{
        console.log('I am in get EvenNumber Function-----');
        return data.filter((number)=> number % 2===0).length
    }
    
    const changeDataArray = () => setData([11, 12, 13, 14, 15]);
    const myMemonisedGetEvenNumberFunction = useMemo(()=> getEvenNumber(), [data])
    const changeStateOfParent = () => setParentState(parentStateTracker + 1);
    const changeChildState = () => setChildState(childStateTracker + 1);
    const memoChangeChildStateFunction = useCallback(()=>changeChildState(), [childStateTracker]);

    return (
        <div>
            <h3>{parentStateTracker}</h3>
            <button onClick={changeStateOfParent}>Change State Of Parent</button> 
            <br/>
            <MyChildComponent changeChildStateFunction={memoChangeChildStateFunction} childState={childStateTracker}/>
            <br/>
            <span>TOTAL EVEN NUMBERS ARE: {myMemonisedGetEvenNumberFunction}</span>
            <button onClick={changeDataArray}>Change data Array</button>
        </div>
    );
}

export default MyParentComponent;