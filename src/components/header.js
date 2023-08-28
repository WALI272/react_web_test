import React from "react";
import '../assets/styles/header.css';

const Header = () => {
    return (
        <div id="top_bg">
            <header id="header" class="container">
                <div class="row">
                    <div id="header_sides" class="col-2"></div>
                    <div id="header_center" class="col-8">
                            <h1>
                                <center>
                                Esto es el titulo principal
                                </center>
                            </h1>
                    </div>
                    <div id="header_sides" class="col-2"></div>
                </div>
            </header>
            <nav id="nav" class="container"> 
                <ul id="ul" class="row">
                    <li id="li" class="col-xl-3 col-sm-12">
                        <a class="nav_button" href="">
                            <div class="cont_texto">
                                Sobre Nosotros
                            </div>
                        </a>
                    </li>
                    <li id="li" class="col-xl-3 col-sm-12">
                        <a class="nav_button" href="">
                            <div class="cont_texto">
                                Nuestros Productos
                            </div>
                        </a>
                    </li>
                    <li id="li" class="col-xl-3 col-sm-12">
                        <a class="nav_button" href="">
                            <div class="cont_texto">
                                Redes Sociales
                            </div>
                        </a>
                    </li>
                    <li id="li" class="col-xl-3 col-sm-12">
                        <a class="nav_button" href="">
                            <div class="cont_texto">
                                Novedades y Más
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;