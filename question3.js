import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function Question3(){
var navigator = useNavigate();
var location = useLocation();

const[res,setRes] = useState("");

function result(){
navigator('/quiz-result',{state:{firstname:location.state.firstname,lastname:location.state.lastname,fullname:res}});
}

return(
    <div>
    <h1>Que 3: Whats Your Full Name?</h1>
    <input type="text" onChange={(e)=>setRes(e.target.value)} />
    <input type="button" value="Submit" onClick={result} />
    </div>
)


}