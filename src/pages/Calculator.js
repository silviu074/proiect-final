export const calculator = {
  flightDistance: (n1) => {
    return n1 * 1.35;
  },
  flightHousing: (n1, n2) => {
    return n1 + n2;
  },
  tva: (n1) => {
    return (n1 * 19) / 100;
  },
  guestDiscount: (n1, n2) => {
    return n1 - n2 * 3.3;
  },
};
