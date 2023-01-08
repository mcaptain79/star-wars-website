import React,{useState} from "react";
import './three.css'
import MovieList from "../movieList/movieList";
function Three(){
    const [stay,setStay] = useState(true)
    const [pageNumber,setPageNumber] = useState(1)
    if(stay){
        if(pageNumber === 1){
            return(
                <body>
                    <div className = "middle">
                        <p>page 1</p>
                        <p className = "red">CR90 corvette</p>
                        <p className = "gold">CR90 corvette,Corellian Engineering Corporation,30-165,600</p>
                        <p className = "red">Droid control ship</p>
                        <p className = "gold">Lucrehulk-class Droid Control Ship,Hoersch-Kessel Drive Inc,175,139000</p>
                        <p className = "red">Jedi starfighter</p>
                        <p className = "gold">Delta-7 Aethersprite-class interceptor,Kuat Systems Engineering,1,0</p>
                        <p className = "red">Trade Federation cruiser</p>
                        <p className = "gold">Providence-class carrier/destroyer,Rendili StarDrive Free Dac Volunteers Engineering corps,600,48247</p>
                        <p className = "red">Theta-class T-2c shuttle</p>
                        <p className = "gold">Theta-class T-2c shuttle,Cygnus Spaceworks,5,16</p>
                        <button className = "next" onClick = {() => {setPageNumber(2)}}>next</button>
                        <br></br>
                        <button type = "submit" id = "buttThree" onClick = {() => {setStay(false);}}>return</button>
                    </div>
                </body>
            );
        }
        else if(pageNumber === 2){
            return(
                <body>
                    <div className = "middle">
                        <p>page 2</p>
                        <p className = "red">Republic attack cruiser</p>
                        <p className = "gold">Senator-class Star Destroyer,Kuat Drive Yards Allanteen Six shipyards,7400,2000</p>
                        <p className = "red">Naboo star skiff</p>
                        <p className = "gold">J-type star skiff,Theed Palace Space Vessel Engineering Corps/Nubia Star Drives Incorporated,3,3</p>
                        <p className = "red">Jedi Interceptor</p>
                        <p className = "gold">Eta-2 Actis-class light interceptor,Kuat Systems Engineering,1,0</p>
                        <p className = "red">arc-170</p>
                        <p className = "gold">Aggressive Reconnaissance-170 starfighte,Incom Corporation Subpro Corporation,3,0</p>
                        <p className = "red">Banking clan frigte</p>
                        <p className = "gold">Munificent-class star frigate,Hoersch-Kessel Drive Inc Gwori Revolutionary Industries,200,unknown</p>
                        <button className = "previous" onClick = {() => {setPageNumber(1)}}>previous</button>
                        <button className = "next" onClick = {() => {setPageNumber(3)}}>next</button>
                        <br></br>
                        <button type = "submit" id = "buttThree" onClick = {() => {setStay(false);}}>return</button>
                    </div>
                </body>
            );
        }
        else{
            return(
                <body>
                    <div className = "middle">
                        <p>page 3</p>
                        <p className = "red">Belbullab-22 starfighter</p>
                        <p className = "gold">Belbullab-22 starfighter,Feethan Ottraw Scalable Assemblies,1,0</p>
                        <p className = "red">V-wing</p>
                        <p className = "gold">Alpha-3 Nimbus-class V-wing starfighter,Kuat Systems Engineering,1,0</p>
                        <button className = "previous" onClick = {() => {setPageNumber(2)}}>previous</button>
                        <br></br>
                        <button type = "submit" id = "buttThree" onClick = {() => {setStay(false);}}>return</button>
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
export default Three;