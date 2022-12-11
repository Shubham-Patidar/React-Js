import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function Rectangle(){
var [A,setA] = useState(0);
var [B,setB] = useState(0);
var [res,setRes] = useState(0);
const navigator = useNavigate();
const location = useLocation();

function CalcTrangle(){
    var c = parseInt(A) * parseInt(B);
    setRes(c);

navigator("/result", {state:{res1:location.state.res1,res2:c}});
}

    return(
        <div className="container">
            <Link to="/trangle"><button>Trangle</button></Link>&nbsp;
            <Link to="/rectangle"><button>Rectangle</button></Link>
        <h1>Area Of Rectangle</h1>
        <div className="">
        <input type="Number" onChange={(e)=>setA(e.target.value)} placeholder="Length"/><br/>    
        <input type="Number" onChange={(e)=>setB(e.target.value)} placeholder="Width"/><br/><br/>    
        <input type="button" onClick={CalcTrangle} value="calculate"/>
        </div>  
        {res}
        </div>
    )

}