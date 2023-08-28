import React from "react";
import '../assets/styles/footer.css';

const Footer = () => {
    return (
        <div id="footer_bg">
            <div class="container">
                <div class=".col-1"></div>
                <div class=".col-10">
                    <footer id="Footer_main_content">
                        <center>
                            <div class="row">
                                <div class="col-3"></div>
                                <div id="footer_center_col" class="col-6">
                                    <div class="row">
                                        <center>
                                            logotipoAqui
                                        </center>
                                    </div>
                                    <br></br>
                                    <div class="row">
                                            <ul id="footer_ul" class="row">
                                                <li class="col-2">
                                                    <a>
                                                        <i class="bi bi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li class="col-2">
                                                    <a>
                                                        <i class="bi bi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li class="col-2">
                                                    <a>
                                                        <i class="bi bi-instagram"></i>
                                                    </a>
                                                </li>
                                                <li class="col-2">
                                                    <a>
                                                        <i class="bi bi-youtube"></i>
                                                    </a>
                                                </li>
                                                <li class="col-2">
                                                    <a>
                                                        <i class="bi bi-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li class="col-2">
                                                    <a>
                                                        <i class="bi bi-tiktok"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                    </div>
                                    <br></br>
                                    <div class="row">
                                        <address>
                                            <i class="bi bi-c-circle"></i>
                                            Web creada por Lucas Walica usando React
                                            <br></br><br></br>
                                            <ul id="bootom_footer_ul" class="row">
                                                <li><a href="">Legal</a></li>
                                                <li><a href="">Privacidad</a></li>
                                                <li><a href="">Cookies</a></li>
                                            </ul>
                                        </address>
                                    </div>
                                </div>
                                </div>
                        </center>
                    </footer>
                </div>
                <div class=".col-1"></div>
            </div>
        </div>
    );
}

export default Footer;