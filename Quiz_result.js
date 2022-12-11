import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

 var Quiz_result=()=>{
var navigator = useNavigate();
var location = useLocation();

return(
    <div>
    <h1>Results</h1>
    <h1>First Name = {location.state.firstname}</h1>
    <h1>Last Name = {location.state.lastname}</h1>
    <h1>Full Name = {location.state.fullname}</h1>
    </div>
)


}
export default Quiz_result;