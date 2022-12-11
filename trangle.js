import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Result from "./Result";
import { Location } from "react-router-dom";

export default function Trangle(){
const [A,setA] = useState(0);
const [B,setB] = useState(0);
const [rest,setRest] = useState(0);

var navigator = useNavigate();
var location = useLocation();

function resRac(){
    var d = A*B;
    setRest(d);

navigator('/rectangle',{state:{res1:d}});
}

return(<div>
    <br/>
    <div className="container">
<Link to="/rectangle" ><button>Rectangle</button></Link>&nbsp;
<Link to="/" ><button>Trangle</button></Link>
    <h1>Area Of Trangle</h1>
    <div>
        <input type="number"  onChange={(e)=>setA(e.target.value)}/>
        <input type="number" onChange={(e)=>setB(e.target.value)} />
        <input type="button" onClick={resRac} value="Result" />
    </div>
    {rest}
    </div>
    </div>)
}