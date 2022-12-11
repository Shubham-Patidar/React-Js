import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Question1(){
var navigator = useNavigate();

const[res,setRes] = useState("");

function result(){
navigator('/question-2',{state:{firstname:res}});
}

return(
    <div>
    <h1>Que 1. Whats Your Name?</h1>
    <input type="text" onChange={(e)=>setRes(e.target.value)} />
    <input type="button" value="Submit" onClick={result} />
    </div>
)


}