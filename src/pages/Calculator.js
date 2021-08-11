export const calculator = {
  flightDistance: (n1) => {
    return Math.round(n1 * 0.55);
  },
  flightHousing: (n1, n2) => {
    return Math.round(n1 + n2);
  },
  tva: (n1) => {
    return Math.round((n1 * 19) / 100);
  },
  guestDiscount: (n1, n2) => {
    return Math.round(n1 - n2 * 3.3);
  },
};
