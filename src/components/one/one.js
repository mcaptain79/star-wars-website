import React,{useState} from "react";
import './one.css';
import MovieList from "../movieList/movieList";
function One(){
    const [stay,setStay] = useState(true)
    if(stay){
    return(
        <body>
            <div className = "middle">
                <p className = "red">Republic Cruiser</p>
                <p className = "gold">Consular-class cruiser,Corellian Engineering Corporation,9,16</p>
                <p className = "red">Droid control ship</p>
                <p className = "gold">Lucrehulk-class Droid Control Ship,Hoersch-Kessel Drive Inc,175, 139000</p>
                <p className = "red">Naboo fighter</p>
                <p className = "gold">N-1 starfighter,Theed Palace Space Vessel Engineering Corps,1,0</p>
                <p className = "red">Naboo Royal Starship</p>
                <p className = "gold">J-type 327 Nubian royal starship,Theed Palace Space Vessel Engineering Corps Nubia Star Drives,8,unknown</p>
                <p className = "red">Scimitar</p>
                <p className = "gold">Star Courier,Republic Sienar Systems,1,6</p>
                <button type = "submit" id = "buttOne" onClick = {() => setStay(false)}>return</button>
            </div>
        </body>
    );
    }
    else{
        return(<MovieList></MovieList>)
    }
}
export default One;