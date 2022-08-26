import React from "react";
import {Route, Routes} from "react-router-dom";
import Students from "./components/students"
import Campuses from "./components/campuses";
import Navigation from "./components/navigation";
import StudentPage from "./components/students/StudentPage";
import CampusPage from "./components/campuses/CampusPage";


function App(){


    return(
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path={"students"} element={<Students/>}/>
                <Route path={"campuses"} element={<Campuses/>}/>
                <Route path={"students/:id"} element={<StudentPage/>}/>
                <Route path={"campuses/:id"} element={<CampusPage/>}/>
            </Routes>
        </div>

    )
}

export default App;