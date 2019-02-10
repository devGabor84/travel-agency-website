import "./sass/main.scss";

///////////////////////////////////////
///////////CONTROLLER
import * as model from "./holidaysModel";
import * as holidayView from "./holidayView";
import * as formControlView from "./formControlView";
import { elements } from "./base";

////////global app state, it contains the currently rendered holidays in the view and wether they are sorted or not

let state = {
  sortedByPrice: false,
  sortedByName: false,
  sortedByRating: false
};

////////function that sets the holidays to be rendered first time

const setInitialState = () => {
  state.holidays = model.holidays;
};

////////function that calls the render method of the view

const updateView = () => {
  holidayView.renderHolidays(state.holidays);
};

////////sort functions, sorts the currently displayed holidays

const sortByName = () => {
  if (state.sortedByName) {
    state.holidays.reverse();
  } else {
    state.sortedByName = true;
    state.sortedByPrice = false;
    state.sortedByValue = false;
    return state.holidays.sort((a, b) => a["name"].localeCompare(b["name"]));
  }
};

const sortByPrice = () => {
  if (state.sortedByPrice) {
    state.holidays.reverse();
  } else {
    state.sortedByPrice = true;
    state.sortedByName = false;
    state.sortedByRating = false;
    return state.holidays.sort((a, b) => a["priceValue"] - b["priceValue"]);
  }
};

const sortByRating = () => {
  if (state.sortedByRating) {
    state.holidays.reverse();
  } else {
    state.sortedByPrice = false;
    state.sortedByName = false;
    state.sortedByRating = true;
    return state.holidays.sort((a, b) => a["ratingValue"] - b["ratingValue"]);
  }
};

const sortControl = type => {
  if (type === "name") {
    sortByName();
  } else if (type === "rating") {
    sortByRating();
  } else {
    sortByPrice();
  }

  updateView();
};

////////filter functions, it filters the holidays in the model by the value provided as function parameter, and sets it to the state to be be rendered

const filterByDate = inputValue => {
  state.holidays = model.holidays.filter(holiday => {
    return holiday.date === inputValue;
  });
};

const filterByAirport = inputValue => {
  state.holidays = model.holidays.filter(holiday => {
    return holiday.airportCheck === inputValue;
  });
};

const filterByAll = (inputValueAirport, inputValueDate) => {
  state.holidays = model.holidays.filter(holiday => {
    return (
      holiday.airportCheck === inputValueAirport &&
      holiday.date === inputValueDate
    );
  });
};

const filterControl = () => {
  //1. get the input value from the view
  let airport = formControlView.getAirport();
  let date = formControlView.getDate();

  //2. decide which filter function to be called
  if (airport !== "all" && date === "all") {
    filterByAirport(airport);
  } else if (date !== "all" && airport === "all") {
    filterByDate(date);
  } else if (airport && date !== "all") {
    filterByAll(airport, date);
  } else if (airport && date === "all") {
    setInitialState();
  }

  //3. sort the filtered holidays by price as default
  sortControl();
};

///////////function adds event listeners to the sort buttons

const addEvListeners = () => {
  elements.sortControlBtns.forEach(sortBtn => {
    sortBtn.addEventListener("click", e => {
      const btn = e.target.closest(".sort-control__item");
      sortControl(btn.dataset.type);
    });
  });

  elements.filterBtn.addEventListener("click", () => {
    filterControl();
  });
};

///////////initialising the app

const init = () => {
  setInitialState();
  sortControl();
  addEvListeners();
};

///////////initialising the app

init();
