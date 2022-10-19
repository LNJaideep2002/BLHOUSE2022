import React from "react";
function Carosel()
{
    return(
        <div style={{margin:'1.5% 1.5% 0% 1.5%'}}>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={process.env.PUBLIC_URL+"/sam.png"} className="d-block " alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={process.env.PUBLIC_URL+"/sam1.png"} className="d-block " alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL+"/sam2.png"} className="d-block " alt="..."/>
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default Carosel;