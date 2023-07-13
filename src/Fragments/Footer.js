// import { Link } from "react-router-dom";
// reemplazar los buttons por links


export default function Footer() {
    return (

        <footer className="footer">
            <menu>
                <li className="img-footer">
                    <img
                        src={require("../assets/footers/small_logo.png")}
                        alt="Little Lemon logo"
                    ></img>
                </li>
                <li className="contact">
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">

                        <a
                            href={require("../assets/footers/small_logo.png")}
                            target='/'
                            rel="noreferrer"
                        >
                            Home
                        </a>
                        <a
                            href={require("../assets/footers/small_logo.png")}
                            target='_blank'
                            rel="noreferrer"
                        >
                            About
                        </a>

                        <a
                            href={require("../assets/footers/small_logo.png")}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Menu
                        </a>
                        <a
                            href={require("../assets/footers/small_logo.png")}
                            target='_blank'
                            rel="noreferrer"
                        >
                            Reservations
                        </a>
                        <a
                            href={require("../assets/footers/small_logo.png")}
                            target='_blank'
                            rel="noreferrer"
                        >
                            Order
                        </a>
                        <a
                            href={require("../assets/footers/small_logo.png")}
                            target='_blank'
                            rel="noreferrer"
                        >
                            Login
                        </a>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>2395 Maldove Way</li>
                        <li>Chicago Illinois</li>
                        <br></br>
                        <li>(629)-243-6827</li>
                        <br></br>
                        <a
                            href="mailto: info@littlelemon.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            info@littlelemon.com
                        </a>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Social Links</h1>
                    <ul className="footer-links">
                        <a
                            href="https://www.facebook.com/thelittlelemonshop/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/littlelemonmoon/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.youtube.com/watch?v=3Li-FfypZYE"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join us!
                        </a>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}