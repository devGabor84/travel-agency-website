import { elements } from "./base";

/////////function that clears the UI

const clearHolidaysContainer = () => {
  elements.holidaysContainer.innerHTML = "";
};

/////////function that renders the template with dynamic data and adds it to html afterwards

const renderHoliday = holiday => {
  const ratingTemplate = `<svg class="hotel-view__rating">
  <use xLink:href="./assets/sprite.svg#icon-star"></use>
</svg>`;

  let infantTemplate = `&
  <span class="text-highlighted">${holiday.infants}</span> infant`;

  let infants = holiday.infants > 0 ? infantTemplate : "";

  let rating = [];
  let ratingValue = holiday.ratingValue;

  for (let i = 0; i < ratingValue; i++) {
    rating.push(ratingTemplate);
  }

  const template = `<div class="hotel-view">
  <div class="hotel-view__info">
    <h3 class="heading-xs ">
    ${holiday.name} 
    ${rating.join("")} 
    </h3>
    <p class="text text--grey">${holiday.location}</p>
  </div>

  <div class="hotel-view__price">
    <h3 class="heading-sm ">${holiday.price}</h3>
  </div>

  <div class="hotel-view__img">
    <img src="${holiday.imgPath}" alt="${holiday.name}"  />
    <div class="hotel-view__details">
      <p class="text text--light text--small">
          Lorem ipsum, dolor sit amet 
          consectetur adipisicing elit. Veniam, itaque. Fugiat minima sequi mollitia 
          numquam iusto hic odio aliquam repellat.
      </p>
      </div>
  </div>

<div class="hotel-view__description">
  <p class="hotel-view__description__header text--small">
    <span class="text-highlighted">${holiday.startDate}</span> for
    <span class="text-highlighted">${holiday.duration}</span> nights from
    <span class="text-highlighted">${holiday.airport}</span>,
    <span class="text-highlighted">${holiday.adults}</span> Adults,
    <span class="text-highlighted">${holiday.children}</span>, ${
    holiday.children > 1 ? "children" : "child"
  } ${infants}
  </p>
  <button class="btn btn--green">Book Now</button>
</div>
</div>`;

  elements.holidaysContainer.insertAdjacentHTML("beforeend", template);
};

/////////function that receives an array of objects, loops through them and runs the renderHoliday function on each

export const renderHolidays = holidays => {
  //1. clear the current UI
  clearHolidaysContainer();

  //2. render the holidays
  holidays.forEach(renderHoliday);
};
