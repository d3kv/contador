import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Home() {
  let unidades = 0;
  let decenas = 0;
  let centenas = 0;
  let umillar = 0;
  let dmillar = 0;
  let cmillar = 0;

  setInterval(() => {
    unidades++;

    if (unidades > 9) {
      unidades = 0;
      decenas++;
    }

    if (decenas > 9) {
      decenas = 0;
      centenas++;
    }

	if (centenas > 9) {
      centenas = 0;
      umillar++;
    }


	if (umillar > 9) {
      umillar = 0;
      dmillar++;
    }
	
	if (dmillar > 9) {
      dmillar = 0;
      cmillar++;
    }



    document.getElementById("u").innerText = unidades;
    document.getElementById("d").innerText = decenas;
    document.getElementById("c").innerText = centenas;
	document.getElementById("um").innerText = umillar;
	document.getElementById("dm").innerText = dmillar;
	document.getElementById("cm").innerText = cmillar;

  }, 1000);

  return (
    <div className="d-flex align-items-center justify-content-center ms-auto text-center " style={{ gap: "10px", fontSize: "40px" }}
>
      <div className="border border-grey p-3 bg-dark text-white" id="cm">0</div>
	  <div className="border border-grey p-3 bg-dark text-white" id="dm">0</div>
	  <div className="border border-grey p-3 bg-dark text-white" id="um">0</div>
	  <div className="border border-grey p-3 bg-dark text-white" id="c">0</div>
      <div className="border border-grey p-3 bg-dark text-white" id="d">0</div>
      <div className="border border-grey p-3 bg-dark text-white" id="u">0</div>
    </div>
  );
}

export default Home;