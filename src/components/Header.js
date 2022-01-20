import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Header() {
    return (
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container">
  
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style={{marginTop:"-1px" }}
      />
    </a>

   
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">BrownTechBae</a>
        </li>
      </ul>
     

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          >
            <FontAwesomeIcon icon={faGithub}style={{height:"20px",width:"20px",textAlign:"center"}}/>
            <i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    
  </div>
  
</nav>


        </div>
    )
}
