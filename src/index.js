import React from 'react';
import ReactDOM from "react-dom";
import Eurojackpot from "./js/components/eurojackpot/Eurojackpot";



const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Eurojackpot />, wrapper) : false; 