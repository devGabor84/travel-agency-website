import { elements } from "./base";

export const getAirport = () => {
  for (let btn of elements.airportBtns) {
    if (btn.checked) {
      return btn.value;
    }
  }
};

export const getDate = () => {
  for (let date of elements.dateInputs) {
    if (date.selected) {
      return date.value;
    }
  }
};
