import React,{useState} from "react";
import './four.css'
import MovieList from "../movieList/movieList";
function Four(){
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
                        <p className = "red">Star Destroyer</p>
                        <p className = "gold">Imperial I-class Star Destroyer,Kuat Drive Yards,47 or 60,n/a</p>
                        <p className = "red">Sentinel-class landing craft</p>
                        <p className = "gold">Sentinel-class landing craft,Sienar Fleet Systems Cyngus Spaceworks,5,75</p>
                        <p className = "red">Death Star</p>
                        <p className = "gold">DS-1 Orbital Battle Station,Imperial Department of Military Research Sienar Fleet Systems,342 or 953,843 or 342</p>
                        <p className = "red">Millennium Falcon</p>
                        <p className = "gold">YT-1300 light freighter,Corellian Engineering Corporation,4,6</p>
                        <button type = "submit" className = "next" onClick = {() => {setPageNumber(2)}}>next</button>
                        <br></br>
                        <button type = "submit" id = "buttFour" onClick = {() => {setStay(false)}}>return</button>
                    </div>
                </body>
            );
        }
        else{
            return(
                <body>
                    <div className = "middle">
                        <p>page 2</p>
                        <p className = "red">Y-wing</p>
                        <p className = "gold">BTL Y-wing,Koensayr Manufacturing,2,0</p>
                        <p className = "red">X-wing</p>
                        <p className = "gold">T-65 X-wing,Incom Corporation,1,0</p>
                        <p className = "red">TIE Advanced x1</p>
                        <p className = "gold">Twin Ion Engine Advanced x1,Sienar Fleet Systems,1,0</p>
                        <button type = "submit" className = "previous" onClick = {() => {setPageNumber(1)}}>previous</button>
                        <br></br>
                        <button type = "submit" id = "buttFour" onClick = {() => {setStay(false)}}>return</button>
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
export default Four;