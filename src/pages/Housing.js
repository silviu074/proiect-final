import React from "react";
import buc1 from "./img/hbuc1.jpg";
import buc2 from "./img/hbuc2.jpg";
import tim1 from "./img/htimisoara1.jpg";
import tim2 from "./img/htimisoara2.jpg";
import bra1 from "./img/hbrasov1.jpg";
import bra2 from "./img/hbrasov2.jpg";
import cluj1 from "./img/hcluj1.jpg";
import cluj2 from "./img/hcluj2.jpg";
import con1 from "./img/hconstanta1.jpg";
import con2 from "./img/hconstanta2.jpg";
import cra1 from "./img/hcraiova1.jpg";
import cra2 from "./img/hcraiova2.jpg";
import iasi1 from "./img/hiasi1.jpg";
import iasi2 from "./img/hiasi2.jpg";
import ora1 from "./img/horadea1.jpg";
import ora2 from "./img/horadea2.jpg";
import plo1 from "./img/hploiesti1.jpg";
import plo2 from "./img/hploiesti2.jpg";
import gal1 from "./img/hgalati1.jpg";
import gal2 from "./img/hgalati2.jpg";

export const Housing = () => {
  return (
    <div className="container">
      {/* --------------------------------------------------- */}
      <h1 className="text-center" style={{ paddingTop: "15%" }}>
        Our housing available at the moment:
      </h1>
      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Bucharest Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={buc1} alt="Bucharest Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Bucharest Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={buc2} alt="Bucharest Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Timisoara Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={tim1} alt="Timisoara Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Timisoara Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={tim2} alt="Timisoara Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Brasov Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={bra1} alt="Brasov Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Brasov Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={bra2} alt="Brasov Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Cluj-Napoca Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={cluj1} alt="Cluj Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Cluj-Napoca Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={cluj2} alt="Cluj-Napoca Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Constanta Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={con1} alt="Constanta Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Constanta Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={con2} alt="Constanta Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Craiova Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={cra1} alt="Craiova Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Craiova Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={cra2} alt="Craiova Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Iasi Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={iasi1} alt="Iasi Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Iasi Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={iasi2} alt="Iasi Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Oradea Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={ora1} alt="Oradea Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Oradea Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={ora2} alt="Oradea Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Ploiesti Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={plo1} alt="Ploiesti Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Ploiesti Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={plo2} alt="Ploiesti Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 3% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Galati Center</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={gal1} alt="Galati Central Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}

      <div class="row" style={{ padding: "15% 0 10% 0" }}>
        <div class="col-half">
          <div className="htext">
            <h2>Galati Suburbs</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of "x" guests</p>
              <p>Owned by "yy"</p>
              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>You will have:</h4>
                <li>Entire Home</li>
                <li>Enhanced Clean</li>
                <li>Self Check-in</li>
                <li>Free cancelation before dd/mm/yyyy</li>
              </div>

              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>
              <p>Owned by "yy"</p>

              <p>Weekly discount -£ xx</p>
              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Near "xx" Park</p>
              <p>Maximum of xx guests</p>

              <p>"xx" £/Night</p>
              <a href="https://www.google.com/maps">📌 See location on map</a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={gal2} alt="Galati Suburbs Area" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Owner</button>
      </div>
      {/* --------------------------------------------------- */}
      <div style={{ padding: "0 0 5% 0" }}></div>
    </div>
  );
};
