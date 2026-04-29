import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Contador from './components/Contador';

let unidades = 0;
let decenas = 0;
let centenas = 0;
let umillar =0 ;
let dmillar= 0;
let cmillar=0;

const root = ReactDOM.createRoot(document.getElementById("root"));

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

  root.render(
    <Contador
      unidades={unidades}
      decenas={decenas}
      centenas={centenas}
      umillar={umillar}
      dmillar={dmillar}
      cmillar={cmillar}
    />
  );
}, 1000);

root.render(
  <Contador unidades={0} decenas={0} centenas={0} umillar={0} dmillar={0} cmillar={0}/>
);