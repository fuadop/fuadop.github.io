import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faFacebook, faInstagram, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <div className="row justify-content-center align-content-center">
        <div className="col-12 col-md-8">
          <Navbar/>
          <br/><br/>

          <div className="mt-5 container font-weight-bold">
            <p className="h2">Hello👋</p>
            <p className="h3">
              I am Fuad, a Software Engineer located in Lagos, Nigeria.
            </p>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="mailto:fuad@fuadolatunji.me?subject=Contact From Portfolio😊💌" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href="https://github.com/fuadop" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/fuadop2" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/fuad.olatunji.35" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/fuado_p" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/fuadop" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/fuadop" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accredition">
          Created by Fuad Olatunji, &copy; 2020
      </div>
    </div>
  );
}

export default App
