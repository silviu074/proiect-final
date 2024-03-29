import React, { useState } from "react";
import { calculator } from "./Calculator";

export const Services = () => {
  const [taxa, setTaxa] = useState("");
  const [distance, setDistance] = useState("");
  const [flight, setFlight] = useState("");
  const [housing, setHousing] = useState("");
  const [price, setPrice] = useState("");
  const [guests, setGuests] = useState("");

  const basicClickHandlerTVA = () => {
    alert(
      " If you have to pay " +
        taxa +
        " $, the TVA is " +
        calculator.tva(taxa) +
        " $"
    );
  };
  const basicClickHandlerSum = () => {
    alert(
      "Your total amount to pay is " +
        calculator.flightHousing(parseInt(flight), parseInt(housing)) +
        " $"
    );
  };
  const basicClickHandlerDistance = () => {
    alert(
      " If you have to travel " +
        distance +
        " km, then the aproximative amount you will have to pay is " +
        calculator.flightDistance(parseInt(distance)) +
        " $"
    );
  };
  const basicClickHandlerGuests = () => {
    alert(
      "Your total price with the discount is " +
        calculator.guestDiscount(parseInt(price), parseInt(guests)) +
        " $"
    );
  };

  // ...............................
  return (
    <div className="container">
      <div className="text-center">
        <h1 style={{ padding: "15% 0 0 0" }}>Main Services</h1>
        <h4 style={{ padding: "5% 0 5% 0" }}>
          Caulculate Flight cost based on your distance:
        </h4>
        <div style={{ padding: "1% 0 1% 0" }}>
          <input
            id="kmFlight"
            placeholder="Distance from you (km)"
            type="number"
            value={distance}
            onChange={(d) => setDistance(d.target.value)}
          />
          <button
            id="kmfc"
            onClick={basicClickHandlerDistance}
            className="btn1"
          >
            Calculate{" "}
          </button>
        </div>
        <h4 style={{ padding: "5% 0 5% 0" }}>
          Caulculate housing discount based on the number of guests:
        </h4>
        <div style={{ padding: "1% 0 1% 0" }}>
          <input
            id="AproxPrice"
            placeholder="Price of stay in $"
            type="number"
            value={price}
            onChange={(p) => setPrice(p.target.value)}
          />
          <input
            id="NrGuests"
            placeholder="Number of guests"
            type="number"
            value={guests}
            onChange={(g) => setGuests(g.target.value)}
          />
          <button id="kmfc" onClick={basicClickHandlerGuests} className="btn1">
            Calculate{" "}
          </button>
        </div>
        <h4 style={{ padding: "5% 0 5% 0" }}>Enter your totals so far</h4>
        <div style={{ padding: "1% 0 1% 0" }}>
          <input
            id="TVA"
            placeholder="Price of Flight in $"
            type="number"
            value={flight}
            onChange={(f) => setFlight(f.target.value)}
          />
          <input
            id="TVA"
            placeholder="Price of Housing in $"
            type="number"
            value={housing}
            onChange={(h) => setHousing(h.target.value)}
          />
          <button id="kmfc" onClick={basicClickHandlerSum} className="btn1">
            Total{" "}
          </button>
        </div>
        <h4 style={{ padding: "5% 0 5% 0" }}>How much is Romanian TAX?</h4>

        <div style={{ padding: "1% 0 1% 0" }}>
          <input
            id="taxa"
            placeholder="Total price in $"
            type="number"
            value={taxa}
            onChange={(t) => setTaxa(t.target.value)}
          />
          <button id="kmfc" onClick={basicClickHandlerTVA} className="btn1">
            Calculate TVA{" "}
          </button>
        </div>

        <h1 style={{ padding: "15% 0 5% 0" }}>
          What other services do we offer?
        </h1>
        <h4>Flights Reservations 📑</h4>
        <p style={{ padding: "1% 0 3% 0" }}>
          Offering cost effective flight reservations to all destinations.
          Preference for any particular airline is of course taken into
          consideration whenever reservations are made.
        </p>
        <h4>Accomodation 🏡</h4>
        <p style={{ padding: "1% 0 3% 0" }}>
          Giving the customers a choice of their specific accommodation needs,
          no matter where – regionally, nationally, and internationally. Certain
          corporate discounts are available, with preferred accommodation
          establishments (with bill back facilities).
        </p>
        <h4>Airline Loyalty ✈</h4>
        <p style={{ padding: "1% 0 3% 0" }}>
          Incentives earned through airline programs are passed onto the
          customers. We would like to ensure that all travelers are in
          possession of the royalty programs with the airlines.
        </p>
        <h4>Travel Insurance 💵</h4>
        <p style={{ padding: "1% 0 3% 0" }}>
          We provides travel insurance policies provided by xx,yy and zz.
        </p>
        <h4>Emergency Services 🚔</h4>
        <p style={{ padding: "1% 0 3% 0" }}>
          We provide a 24 hour, 7 day a week emergency service to all customers.
        </p>
        <h4>Accounting Services 💹</h4>
        <p style={{ padding: "1% 0 15% 0" }}>
          We issue an invoice to the customer on receipt of a customer’s
          instruction and post the following day. Car hire, tours, hotel, etc.,
          are billed on receipt of the supplier’s invoice. Statements reflecting
          full travel particulars are posted on the 2nd day of each month.
          Statements are payable within seven (7) days from the date of the
          issued statement. A customer control account can be generated whenever
          requested.
        </p>
      </div>
    </div>
  );
};
