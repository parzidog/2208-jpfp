import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return(
        <nav>
            <button>
            <Link to={"/students"}>Students</Link>
            </button>
            <button>
            <Link to={"/campuses"}>Campuses</Link>
            </button>
        </nav>
    )
}

export default Navigation