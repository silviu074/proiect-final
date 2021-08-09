import React from "react";
import { NavLink } from "react-router-dom";
import sbuc from "./img/sbuc.jpg";
import sbuc2 from "./img/sbuc2.jpg";
import sbuc3 from "./img/sbuc3.jpg";
// import sbuc4 from "./img/sbuc4.jpg";

export const SpecialOffers = () => {
  return (
    <div className="container">
      {/* <h3 className="text-center" style={{ paddingTop: "15%" }}>
        This weekend we have a 50% discount on a Bucharest City Center
        appartment:
      </h3>

      <img
        className="imghome"
        src={sbuc4}
        alt="Bucharest"
        style={{ padding: "5% 0 2% 0" }}
      /> */}
      <h2 className="text-center" style={{ paddingTop: "15%" }}>
        Best Offer Available:
      </h2>
      <p className="text-center" style={{ paddingTop: "10%" }}>
        Set in the centre of Bucharest, 700 m from Patriarchal Cathedral and 1.8
        km from Carol Park, City Center Premium Apartments offers accommodation
        with free WiFi, air conditioning and access to a garden with a terrace.
      </p>
      <img
        className="imghome"
        src={sbuc}
        alt="Bucharest"
        style={{ padding: "5% 0 5% 0" }}
      />
      <p className="text-center">
        The units come with parquet floors and feature a fully equipped
        kitchenette with a fridge, a flat-screen TV, and a private bathroom with
        shower and a hairdryer. A stovetop and toaster are also offered, as well
        as a kettle.
      </p>
      <img
        className="imghome"
        src={sbuc2}
        alt="Bucharest"
        style={{ padding: "5% 0 5% 0" }}
      />
      <p className="text-center">
        Stavropoleos Church is 1.8 km from the apartment, while Palace of the
        Parliament is 1.9 km from the property. The nearest airport is Henri
        Coandă International Airport, 16 km from City Center Premium Apartments.
      </p>
      <img
        className="imghome"
        src={sbuc3}
        alt="Bucharest"
        style={{ padding: "5% 0 5% 0" }}
      />
      <h4 className="text-center" style={{ padding: "10% 0 5% 0" }}>
        You may also want to check other offers here:
      </h4>
      <div className="btnContainer">
        <NavLink className="nav-link" to="/" exact>
          <button className="btn">Home</button>
        </NavLink>
        <NavLink className="nav-link" to="/flights" exact>
          <button className="btn">Flights</button>
        </NavLink>
        <NavLink className="nav-link" to="/housing" exact>
          <button className="btn">Housing</button>
        </NavLink>
      </div>
      <div style={{ padding: "0 0 5% 0" }}></div>
    </div>
  );
};
