import React from "react";
import { Router,BrowserRouter,Route, Routes } from "react-router-dom";
import Question1 from "./question1";
import Master1 from "./Master1";
import Question2 from "./question2";
import Question3 from "./question3";
import Quiz_result from "./Quiz_result";


export default function Quiz(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Master1 />} >
                <Route index element={<Question1 />} />
                <Route path="question-1" element={<Question1 />} />
                <Route path="/question-2" element={<Question2 />} />
                <Route path="/question-3" element={<Question3 />} />
                <Route path="quiz-result" element={<Quiz_result />} />
                </Route>
        </Routes>
        </BrowserRouter>
    )

} 