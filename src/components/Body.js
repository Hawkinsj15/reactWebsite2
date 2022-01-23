import React from 'react'
import { Button } from '@material-ui/core';
import './body.css'
import blackgirl from'../assets/bla.png';
export default function Body() {
    return (
        <div>

            <div class="container-fluid" style={{ backgroundColor: "#f2f2f2" }}>

                <div class="row" style={{padding:"50px 10px 50px 10px"}}>

                    <div class="col-md-4 mx-auto"><div class="card">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src={blackgirl}class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Make Dat Breadz</h5>
                            <p class="card-text">Dont let it make you.</p>
                            <a href="#!" class="btn btn-primary">Click Here!</a>
                        </div>
                    </div></div>


                </div>



            </div>
        </div>
    )
}
