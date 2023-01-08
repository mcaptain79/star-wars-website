import React,{useState} from "react";
import './movieList.css'
import One from "../one/one";
import Two from "../two/two";
import Three from "../three/three";
import Four from "../four/four";
import Five from "../five/five";
import Six from "../six/six";
function MovieList(){
    const [mode,setMode] = useState(0)
    if(mode === 0){
    return(
        <body>
            <div className = "middle">
                <h1>Star Wars Movies</h1>
                <pre>(The Phantom Menace) - released: 1999 - 05 - 19</pre>
                <button id = "butt1" onClick = {() => {setMode(1);}}>starShips</button>
                <pre>(Attackk of the Clones) - released: 2002 - 05 - 16</pre>
                <button id = "butt2" onClick = {() => {setMode(2);}}>starShips</button>
                <pre>(Revenge of the Sith) - released: 2005 - 05 - 19</pre>
                <button id = "butt3" onClick = {() => {setMode(3);}}>starShips</button>
                <pre>(A New Hope) - released: 1977 - 05 - 25</pre>
                <button id = "butt4" onClick = {() => {setMode(4);}}>starShips</button>
                <pre>(The Empire Strikes Back) - released: 1980 - 05 - 17</pre>
                <button id = "butt5" onClick = {() => {setMode(5);}}>starShips</button>
                <pre>(Return of the Jedi) - released: 1983 - 05 - 25</pre>
                <button id = "butt6" onClick = {() => {setMode(6);}}>starShips</button>
            </div>
        </body>
    );
    }
    else if(mode === 1){
        return(
            <One></One>
        );
    }
    else if(mode === 2){
        return(
            <Two></Two>
        );
    }
    else if(mode === 3){
        return(
            <Three></Three>
        );
    }
    else if(mode === 4){
        return(
            <Four></Four>
        );
    }
    else if(mode === 5){
        return(
            <Five></Five>
        );
    }
    else{
        return(
            <Six></Six>
        );
    }
}
export default MovieList;