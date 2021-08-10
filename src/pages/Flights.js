import React from "react";
import fbuc from "./img/fbuc.jpg";
import fbra from "./img/fbra.jpg";
import ftim from "./img/ftim.jpg";
import fcluj from "./img/fcluj.jpg";
import fcon from "./img/fcon.jpg";
import fcra from "./img/fcra.jpg";
import fiasi from "./img/fiasi.jpg";
import fora from "./img/fora.jpg";

export const Flights = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "15%" }}>
        Our flights available at the moment:
      </h1>
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
        Perhaps Bucharests unique charm can be best observed in the area known
        as Lipscani, which consists of a jumble of streets between Calea
        Victoriei, Blvd. Bratianu, Blvd. Regina Elisabeta and the Dambovita
        River. A once-glamorous residential area, the old city centre is now
        slowly being refashioned into an upscale neighborhood.
      </p>

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Bucharest</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Bucharest "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Bucharest "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Bucharest "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div className="col-half">
          <img className="imghome" src={fbuc} alt="Bucharest Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* --------------------------------------- */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
        Brasov is considered to be the heart of Romania. It is one of the most
        important economic and cultural cities in the country. Settled along one
        of the oldest trade routes between Wallachia, Moldavia, and
        Transylvania, this splendid city is full of history, mystery, and
        traditions. 170 km north of Bucharest, Brasov benefits from convenient
        (and picturesque) access routes, which cross the Carpathians through the
        Timis and Prahova valleys. The city is placed in the inner Carpathian
        curve, at the foot of Tampa Mountain.
      </p>

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Brasov</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Brasov "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Brasov "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Brasov "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div className="col-half">
          <img className="imghome" src={fbra} alt="Brasov Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
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

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Timisoara</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Timisoara "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Timisoara "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Timisoara "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div className="col-half">
          <img className="imghome" src={ftim} alt="Timisoara Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
        Today the Municipality of Cluj-Napoca is the seat of Cluj County and the
        spiritual and economic capital of Transylvania as well as an influential
        academic and medical centre; the heart of multiculturalism and
        diversity, Cluj is the city where the past, the present and the future
        forged the identity and local specifics. In the Protocols of the XVIth
        century, kept almost entirely at Directia Judeteana Cluj a Arhivelor
        Nationale (the National Archives of Cluj county), the citizen of Cluj is
        proudly referred to as a person who loves their homeland and the
        Republic is the utmost principle entire city, for which we have a duty
        to die, to which we must offer and devote all we have.
      </p>

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Cluj-Napoca</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Cluj "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Cluj "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Cluj "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div className="col-half">
          <img className="imghome" src={fcluj} alt="Cluj-Napoca Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
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
            <h2>Constanta</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Constanta "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Constanta "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Constanta "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div className="col-half">
          <img className="imghome" src={fcon} alt="Constanta Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
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

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Craiova</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Craiova "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Craiova "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Craiova "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={fcra} alt="Craiova Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
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

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Iasi</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Iasi "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Iasi "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Iasi "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div className="col-half">
          <img className="imghome" src={fiasi} alt="Iasi Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <p className="text-center" style={{ padding: "10% 0 0 0" }}>
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

      <div className="row" style={{ padding: "3% 0 3% 0" }}>
        <div className="col-half">
          <div className="htext">
            <h2>Oradea</h2>
            <div className="hdesktop" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Oradea "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              {/* <p>"xx" £/Night</p> */}
              <div style={{ padding: "10% 0 10% 0" }}>
                <h4 style={{ padding: "10% 0 10% 0" }}>Flight classes:</h4>
                <li>Economy</li>
                <li>First Class</li>
                <li>Business</li>
              </div>

              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="htablet" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Oradea "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <p>Discount -£ "xx"</p>
              <p>Free cancelation before dd/mm/yyyy</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
            <div className="hmobile" style={{ padding: "2% 0 2% 0" }}>
              <p style={{ padding: "18% 0 0 0" }}>Oradea "xx" Airport</p>
              <p>"x" tickets available</p>
              <p> "yy" Flight Company</p>
              <a href="https://www.google.com/maps">
                📌 Distance from your location
              </a>
            </div>
          </div>
        </div>

        <div class="col-half">
          <img className="imghome" src={fora} alt="Oradea Airport" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="btn">Check Availability</button>
        <button className="btn">Contact Airline</button>
      </div>

      {/* ------------------------------------------ */}
      <div style={{ padding: "0 0 5% 0" }}></div>
    </div>
  );
};
