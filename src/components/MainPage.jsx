import React from "react";
import {Book, Journals} from 'react-bootstrap-icons';
import sushi from "../images/bg-sushi.jpg";
import portada from "../images/gohan-main.png"
import { Link } from "react-router-dom";

const myStyle = {
  backgroundImage: `url(${portada})`,
  height: "55vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function MainPage() {
  return (
    <div className="main-page">
      <div style={myStyle} className="titles">

      </div>
      <div className="main-menu-link">
        <Link to="/menu">
          <Journals color="white"/>
            Menu
        </Link>
      </div>
    </div>
  );
}
