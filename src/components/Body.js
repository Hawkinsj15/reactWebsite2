import React from 'react'
import { Button } from '@material-ui/core';
import  './body.css'

export default function Body() {
    return (
        <div>
            
            <div class="container">

                <div class="row">

                    <div class ="col-md-4" >
                        <div class="fille">
                        <p>dsdddedleded</p>
                        <Button variant="contained" color="primary">
  Primary
</Button>
                    
                        </div>


                    </div>
                    <div class ="col-md-4" >
                    <div style={{backgroundColor:"black", border:"2px solid black", height:"400px",marginTop:"5%"}}>
                        <p>dsdddedleded</p>
                        </div>
                   

                        
                    </div>
                   < div class ="col-md-4" >
                    <div style={{backgroundColor:"black", border:"2px solid black", height:"400px",marginTop:"5%"}}>
                        <p>dsdddedleded</p>
                        </div>
                   

                        
                    </div>
                </div>

            </div>
        </div>
    )
}
