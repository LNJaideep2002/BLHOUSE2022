import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar"
import Carosel from "./Carosel";
import Categories from "./Categories";
import Bottom from "./Bottom/Bottom";
import { Homeapi } from "../../Api/Apifunctions";
import { useDispatch } from "react-redux";
function Home() {
    const [first, setfirst] = useState(0);
    const [Blousedata, setBlousedata] = useState([]);
    const [Lacedata, setLacedata] = useState([]);
    const [Latkandata, setLatkandata] = useState([]);
    const [Patchdata, setPatchdata] = useState([]);
    const dispatch = useDispatch();
    dispatch({ type: "resetcurbag" });
    async function Fetch() {
        const data = await Homeapi();
        console.log(data.Blouse);
        setBlousedata(data.Blouse);
        setLacedata(data.Lace);
        setLatkandata(data.Latkan);
        setPatchdata(data.Patch);
        setfirst(1);
    }
    useEffect(() => {
        Fetch();
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            <Carosel />
            {
                first == 1 ? <div><Categories type="NeckDesigns" tittle="NeckDesigns" data={Blousedata} value="blouse" st={0} />
                    <Categories type="Lace" tittle="Lace" data={Lacedata} st={1} value="lace" />
                    <Categories type="Latkan" tittle="Latkan" data={Latkandata} st={1} value="latkan" />
                    <Categories type="Patches" tittle="Patches" data={Patchdata} st={1} value="patches" /></div> : null
            }
            <Bottom />
        </React.Fragment>

    );
}
export default Home;