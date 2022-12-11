import { useLocation } from "react-router-dom"


export default function Result(){
    const location = useLocation();
console.log(location);

function resultClick(){
    console.log('result');
    console.log(location);
}
    return(
        <div>
            <input type="button" onClick={resultClick} value="Result" />
        </div>
    )
}