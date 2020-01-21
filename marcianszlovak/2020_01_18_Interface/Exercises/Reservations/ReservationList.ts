import Reservation from "./Reservation";

export default function addReservation(): Reservation[] {
  let reservationList = [];

  reservationList.push(new Reservation());
  reservationList.push(new Reservation());
  reservationList.push(new Reservation());
  reservationList.push(new Reservation());
  reservationList.push(new Reservation());
  reservationList.push(new Reservation());

  return reservationList;
}
