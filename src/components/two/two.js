import React,{useState} from "react";
import './two.css'
import MovieList from "../movieList/movieList";
function Two(){
    const [stay,setStay] = useState(true)
    const [pageNumber,setPageNumber] = useState(1)
    if(stay){
        if(pageNumber === 1){
            return(
                <body>
                    <div className = "middle">
                        <p>page 1</p>
                        <p className = "red">Slave 1</p>
                        <p className = "gold">Firespray-31-class patrol and attack,Kuat Systems Engineering,1,6</p>
                        <p className = "red">Droid control ship</p>
                        <p className = "gold">Lucrehulk-class Droid Control Ship,Hoersch-Kessel Drive Inc,175,139000</p>
                        <p className = "red">Naboo fighter</p>
                        <p className = "gold">N-1 starfighter,Theed Palace Space Vessel Engineering Corps,1,0</p>
                        <p className = "red">J-type diplomatic barge</p>
                        <p className = "gold">J-type diplomatic barge,Theed Palace Space Vessel Engineering Corps Nubia Star Drives,5,10</p>
                        <p className = "red">AA-9 Coruscant freighter</p>
                        <p className = "gold">Botajef AA-9 Freighter-Liner,Botajef Shipyards,unknown,30000</p>
                        <button type = "submit" className = "next" onClick = {() => setPageNumber(2)}>next</button>
                        <br></br>
                        <button type = "submit" id = "buttTwo" onClick = {() => {setStay(false);}}>return</button>
                    </div>
                </body>
            );
        }
        else{
            return(
                <body>
                    <div className = "middle">
                        <p>page 2</p>
                        <p className = "red">Jedi starfighter</p>
                        <p className = "gold">Botajef AA-9 Freighter-Liner,Botajef Shipyards,unknown,30000</p>
                        <p className = "red">H-type Nubian yacht</p>
                        <p className = "gold">H-type Nubian yacht,Theed Palace Space Vessel Engineering Corps,4,unknown</p>
                        <p className = "red">Republic Assault ship</p>
                        <p className = "gold">Acclamator I-class assault ship,Rothana Heavy Engineering,700,16000</p>
                        <p className = "red">Solar Sailer</p>
                        <p className = "gold">Punworcca 116-class interstellar sloop,Huppla Pasa Tisc Shipwrights Collective,3,11</p>
                        <button type = "submit" className = "previous" onClick = {() => {setPageNumber(1)}}>previous</button>
                        <br></br>
                        <button type = "submit" id = "buttTwo" onClick = {() => {setStay(false);}}>return</button>
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
export default Two;