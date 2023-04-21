import React from "react";
import {Book} from 'react-bootstrap-icons';
import sushi from "../images/bg-sushi.jpg";
import { Link } from "react-router-dom";

const myStyle = {
  backgroundImage: `url(${sushi})`,
  height: "55vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function MainPage() {
  return (
    <div className="main-page">
      <div style={myStyle} className="titles">
        <h2 className="p-2">VIVE LA EXPERIANCIA</h2>
        <h4 className="">
          GOHAN & SUSHI TO GO
        </h4>
        <h4 className="p-2">
          PRUEBA LAS MEJORES TORTAS DE SUSHI.
        </h4>
      </div>
      <div className="main-menu-link">
        <Link to="/menu">
        <Book color="white"/>
        Menu
        </Link>
      </div>
    </div>
  );
}
