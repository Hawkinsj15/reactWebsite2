import React from "react";
import { Button } from "@material-ui/core";
import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import dani from "../assets/dani2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Body() {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto" style={{ alignItems: "center" }}>
            <div className="image-container">
              <img
                src={dani}
                alt=""
                style={{ borderRadius: "50%", height: "300px", width: "300px" }}
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 mx-auto" style={{ marginTop: "50px" }}>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <h4
                style={{ fontFamily: "Abel", color: "pink", fontSize: "40px" }}
              >
                {" "}
                Subscribe to my vlog and podcast!!! Join the team and get the
                latest updates..
              </h4>
            </div>
          </div>
        </div>

        <div class="up" id="up" style={{ marginTop: "100px" }}>
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{
              width: "30px",
              height: "30px",
              marginTop: "20px",
              marginLeft: "20px",
              color: "brown",
            }}
          />
        </div>
      </div>
    </div>
  );
}
