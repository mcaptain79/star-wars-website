import React,{useState} from "react";
import './five.css'
import MovieList from "../movieList/movieList";
function Five(){
    const [stay,setStay] = useState(true)
    const [pageNumber,setPageNumber] = useState(1)
    if(stay){
        if(pageNumber === 1){
            return(
                <body>
                    <div className = "middle">
                        <p>page 1</p>
                        <p className = "red">Star Destroyer</p>
                        <p className = "gold">Imperial I-class Star Destroyer,Kuat Drive Yards,47 or 60,n/a</p>
                        <p className = "red">Millennium Falcon</p>
                        <p className = "gold">YT-1300 light freighter,Corellian Engineering Corporation,4,6</p>
                        <p className = "red">Y-wing</p>
                        <p className = "gold">BTL Y-wing,Koensayr Manufacturing,2,0</p>
                        <p className = "red">X-wing</p>
                        <p className = "gold">T-65 X-wing,Incom Corporation,1,0</p>
                        <p className = "red">Executor</p>
                        <p className = "gold">Executor-class star dreadnought,Kuat Drive Yards Fondor Shipyards,279 or 144,38000</p>
                        <button type = "submit" className = "next" onClick = {() => {setPageNumber(2)}}>next</button>
                        <br></br>
                        <button type = "submit" id = "buttFive" onClick = {() => {setStay(false);}}>return</button>
                    </div>
                </body>
            );
        }
        else{
            return(
                <body>
                    <div className = "middle">
                        <p>page 2</p>
                        <p className = "red">Rebel transport</p>
                        <p className = "gold">GR-75 medium transport,Gallofree Yards Inc,6,90</p>
                        <p className = "red">Slave 1</p>
                        <p className = "gold">Firespray-31-class patrol and attack,Kuat Systems Engineering,1,6</p>
                        <p className = "red">Imperial shuttle</p>
                        <p className = "gold">Lambda-class T-4a shuttle,Sienar Fleet Systems,6,20</p>
                        <p className = "red">EF76 Nebulon-B escort frigate</p>
                        <p className = "gold">EF76 Nebulon-B escort frigate,Kuat Drive Yards,854,75</p>
                        <button type = "submit" className = "previous" onClick = {() => {setPageNumber(1)}}>previous</button>
                        <br></br>
                        <button type = "submit" id = "buttFive" onClick = {() => {setStay(false);}}>return</button>
                    </div>
                </body>
            );
        }
    }
    else{
        return(
            <MovieList></MovieList>
        );
    }
}
export default Five;