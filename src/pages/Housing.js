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
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
        Perhaps Bucharests unique charm can be best observed in the area known
        as Lipscani, which consists of a jumble of streets between Calea
        Victoriei, Blvd. Bratianu, Blvd. Regina Elisabeta and the Dambovita
        River. A once-glamorous residential area, the old city centre is now
        slowly being refashioned into an upscale neighborhood.
      </p>

      <p className="text-center">
        At the beginning of 1400s, most merchants and craftsmen - Romanian,
        Austrian, Greek, Bulgarian, Serbian, Armenian and Jewish - established
        their stores and shops in this section of the city. Soon, the area
        became known as Lipscani, named for the many German traders from Lipsca
        or Leiptzig. Other streets took on the names of various old craft
        communities and guilds, such as Blanari (furriers), Covaci
        (blacksmiths), Gabroveni (knife makers) and Cavafii Vechii
        (shoe-makers). The mix of nationalities and cultures is reflected in the
        mishmash of architectural styles, from baroque to neoclassical to art
        nouveau.
      </p>

      <p className="text-center">
        Today, the area is home to many art galleries, antique shops and
        coffeehouses. On a beautiful day, you can stroll down the narrow
        cobblestone streets and imagine the shopkeepers outside near their
        stores, encouraging people to buy their merchandise and negotiating
        prices with them. Don't forget to stop by Hanul cu Tei, which is a
        rectangular courtyard between Strada Lipscani and Strada Blanari, home
        to an array of art and antiques shops.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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

      <div class="row" style={{ padding: "5% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        The city of Timisoara is documented since the thirteenth century. The
        first documented testimony of the Timisoara is controversial, being
        placed by specialists in 1212 or 1266. In 1342, Timisoara is mentioned
        with the title „civitas” – city. The archaeological discoveries however
        indicate the existence of a Roman settlement, possibly a city, on
        today’s hearth of the city. The name Timisoara comes from Castri de
        Thymes (a fortification built at the beginning of the 11th century for
        the surveillance of forests and roads), which kept the old Daco-Roman
        name of the Timis river.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Brasov is considered to be the heart of Romania. It is one of the most
        important economic and cultural cities in the country. Settled along one
        of the oldest trade routes between Wallachia, Moldavia, and
        Transylvania, this splendid city is full of history, mystery, and
        traditions. 170 km north of Bucharest, Brasov benefits from convenient
        (and picturesque) access routes, which cross the Carpathians through the
        Timis and Prahova valleys. The city is placed in the inner Carpathian
        curve, at the foot of Tampa Mountain.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Today the Municipality of Cluj-Napoca is the seat of Cluj County and the
        spiritual and economic capital of Transylvania as well as an influential
        academic and medical centre; the heart of multiculturalism and
        diversity, Cluj is the city where the past, the present and the future
        forged the identity and local specifics. In the Protocols of the XVIth
        century, kept almost entirely at Directia Judeteana Cluj a Arhivelor
        Nationale (the National Archives of Cluj county), the citizen of Cluj is
        proudly referred to as a person who loves their homeland and the
        Republic is the utmost principle entire city, for which we have a duty
        to die, to which we must offer and devote all we have.{" "}
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Constanta lies on the western coast of the Black Sea, 185 miles north of
        Istanbul and Bosphorus Strait (Turkey) and 99 miles north of Varna
        (Bulgaria). An ancient metropolis, Romania's oldest continuously
        inhabited and the country's largest sea port, Constanta traces its
        history some 2,500 years. Originally called Tomis, legend has it that
        Constanta was visited by Jason and the Argonauts after finding the
        Golden Fleece.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Craiova, city, capital of Dolj județ (county), southwestern Romania. It
        is situated near the Jiu River, 115 miles (185 km) west of Bucharest.
        Settlement there is of long standing. Close to the city archaeologists
        have discovered the remains of a Roman fortress built under Trajan. From
        the late 15th to the 18th century Craiova was the residence of the
        military governors of the region. The city prospered as a regional
        trading centre despite an earthquake in 1790, a plague in 1795, and a
        Turkish assault in 1802 during which it was burned. The oldest remaining
        architectural monument is the St. Dimitru church, rebuilt several times
        but still a likeness of the original erected in 1652.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Iasi is the most important political, economic and cultural centre of
        the province of Moldavia as well as one of the oldest cities in Romania.
        Located in the northeastern part of the country, Iasi was for many
        centuries the crossing point of the most important commercial routes
        linking Poland, Hungary, Russia and Constantinople. Deeply rooted in
        history, Iasi has been the main centre of Moldavian culture since 1408.
        The city prides itself with publishing the first Romanian newspaper and
        establishing the first Romanian university. Today, Iasi is home to five
        universities.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        According to the Gesta Hungarorum the territory was ruled by a legendary
        ruler Menumorut – having its citadel centered at Bihar – at the end of
        the 9th and beginning of the 10th centuries, until the Hungarian
        land-taking. The first documented mention of Oradea's name was in 1113
        under the Latin name, Varadinum ("vár" means fortress in Hungarian). In
        the 11th century when St. King Ladislaus I of Hungary founded a
        bishopric settlement near the city of Oradea, the present Roman Catholic
        Diocese of Oradea. The city flourished during the 13th century in
        particular. The Citadel of Oradea, the ruins of which remain today, was
        first mentioned in 1241 during the Mongol invasion of Europe. The 14th
        century was one of the most prosperous periods in the city's life.
        Statues of St. Stephen, Emeric and Ladislaus (before 1372) and the
        equestrian sculpture of St. Ladislaus (1390) were erected in Oradea. St.
        Ladislaus' statue was the first proto-renaissance public square
        equestrian in Europe. Bishop Andreas Báthori (1329–1345) rebuilt the
        cathedral in Gothic style. From that epoch dates also the Hermes, now
        preserved at Györ, which contains the skull of King Ladislaus, and which
        is a masterpiece of the Hungarian goldsmith's art.
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Ploieşti, also spelled Ploeşti, city, capital of Prahova judeƫ (county),
        southeastern Romania. It is situated between the valleys of the Prahova
        and Teleajen rivers, north of Bucharest. According to legend the city
        was named after its founder, Father Ploaie, an escapee from
        Transylvania. The city is first documented in the 16th century as a
        military camp for the army of Michael the Brave (Mihai Viteazul), but
        not until the mid-19th century did Ploieşti begin to develop rapidly. In
        1856 one of the first oil refineries in the world was opened near
        Ploieşti, and the city’s growth since that time has been directly
        related to that of the expanding Romanian petroleum industry. Ploieşti
        is the country’s primary petroleum centre, having refineries, storage
        tanks, oil-field equipment works, and a distillery.{" "}
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
      <p className="text-center" style={{ padding: "15% 0 0 0" }}>
        Galați is the municipality of the county with the same name. It is one
        of the largest economic centres in Romania. It is close to the triple
        southern frontier with the Republic of Moldova and Ukraine. According to
        the latest census, of 2011, it had a population of 249,732 inhabitants,
        being the eighth largest city in the country. The denomination of Galați
        probably comes from the Celtic tribe of the Gauls, who lived in this
        area in antiquity, or from the Galitia region, another alternative being
        the Cuman language called Gala(t), from the Arabian kalhat (fortress).
      </p>
      <div class="row" style={{ padding: "3% 0 3% 0" }}>
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
