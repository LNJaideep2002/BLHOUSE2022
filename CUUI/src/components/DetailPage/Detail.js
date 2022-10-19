import React, { useState, useEffect } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import Product from "./Product";
import Similar from "./Similar";
import Bottom from "../HomePage/Bottom/Bottom";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Categories from "../HomePage/Categories";
function Detail(props) {
    const params = useParams();
    const match = useRouteMatch();
    const history = useHistory();
    const [Data, setData] = useState(0);
    const [urldata, seturldata] = useState({ ID: params.ID, type: params.type });
    useEffect(() => {
        history.listen((location) => {
            seturldata({ ID: location.pathname.split("/")[3], type: location.pathname.split("/")[2] })
            console.log({ ID: location.pathname.split("/")[2] });
            console.log(`You changed the page to: ${location.pathname}`)
        })
    }, [history]);
    return (
        <React.Fragment>
            <Navbar />
            <Product ID={urldata.ID} datafn={setData} type={urldata.type} />
            {Data === 0 ? null : <Categories tittle="Similar" type={Data.type} data={Data.data} st={1} value={params.type} />}
            <Bottom />
        </React.Fragment>
    )
}
export default Detail;