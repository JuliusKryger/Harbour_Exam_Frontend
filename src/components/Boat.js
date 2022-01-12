import { useState } from "react";

function Boat({ facade, setErrorMessage }) {

    const init = { boatName: "", boatBrand: "", boatMake: "" }; 
    const [boatInfo, setBoatInfo] = useState(init);

    const performCreateBoat = (evt) =>
    {
        evt.preventDefault();
        facade.createBoat(boatInfo.boatName, boatInfo.boatBrand, boatInfo.boatMake, setErrorMessage)
    }
    const onChange = (evt) =>
    {
        setBoatInfo({ ...boatInfo, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            
            <form onChange={onChange}>
                <h2>Enter the infomation for your boat!</h2>
                <input style={{textAlign:"center"}} placeholder="boatName" id="boatName" />
                <input style={{textAlign:"center"}} placeholder="boatBrand" id="boatBrand" />
                <input style={{textAlign:"center"}} placeholder="boatMake" id="boatMake" />
                <button onClick={performCreateBoat}>Create A New Boat!</button>
            </form>
        </div>
    )
}

export default Boat;
