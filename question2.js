import { useState } from "react"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export default function Question2(){
var navigator = useNavigate();
var location = useLocation();

const[res,setRes] = useState("");

function result(){
navigator('/question-3',{state:{firstname:location.state.firstname,lastname:res}});
}

return(
    <div>
    <h1>Que 2: Whats Your Last Name?</h1>
    <input type="text" onChange={(e)=>setRes(e.target.value)} />
    <input type="button" value="Submit" onClick={result} />
    </div>
)


}