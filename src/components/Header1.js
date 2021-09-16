import React from 'react'
import  './body.css'
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header1() {
    return (
        <div>
            
                <div class="row">
                <div class="title">
                    <h1 class="title">BrownTechBae</h1>
                </div>
                </div>
                <div class="row">
                    {/* <p style={{textAlign:"center"}}> <a href="#"> Home |</a> <a href="#"> About|</a><a href="#"> Contact|</a><a href="#"> Vlogs </a></p> */}
                    <div class="col-md-8 mx-auto"style={{justifyContent:"center",display:"block"}}>
                    <Nav style={{textAlign:"center",justifyContent:"center"}}>
                        <Nav.Link href="#features" id="head" style={{color:"black"}}>Home</Nav.Link>
                        <Nav.Link href="#pricing"  id="head"style={{color:"black"}}>About</Nav.Link>
                        <Nav.Link href="#features" id="head"style={{color:"black"}}>Vlogs</Nav.Link>
                        <Nav.Link href="#pricing"  id="head" style={{color:"black"}}>Contact</Nav.Link>
      
      
    </Nav>
    </div>
                </div>
        </div>
    )
}

