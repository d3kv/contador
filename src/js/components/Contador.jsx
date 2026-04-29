import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


 function Contador(props) {
  return (
    <div className="d-flex align-items-center justify-content-center ms-auto text-center " style={{ gap: "10px", fontSize: "40px" }}>
      <div className="border border-grey p-3 bg-dark text-white">{props.cmillar}</div> 
      <div className="border border-grey p-3 bg-dark text-white">{props.dmillar}</div>
      <div className="border border-grey p-3 bg-dark text-white">{props.umillar}</div>
      <div className="border border-grey p-3 bg-dark text-white">{props.centenas}</div>
      <div className="border border-grey p-3 bg-dark text-white">{props.decenas}</div>
      <div className="border border-grey p-3 bg-dark text-white">{props.unidades}</div>
    </div>
  );
}


export default Contador