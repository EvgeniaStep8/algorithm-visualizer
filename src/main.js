import "./assets/styles/style.css";

import { renderArray,  container } from "./scripts/array.js";
import { startSort, changeSortAlgorithmDescription, changeSpeedOfSort,button, selectSort, selectSpeed, handleMashUp, handleChangeClick, array } from "./scripts/sort.js";
import { closePopup } from "./scripts/popup.js";
import { handleChangeArray, form } from "./scripts/form.js";

const changeArrayButton = document.querySelector(".change-array");
const closePopupButton = document.querySelector(".close");
const mashButton = document.querySelector(".mash-up");

renderArray(array, container);

button.addEventListener("click", startSort);
selectSort.addEventListener("change", changeSortAlgorithmDescription);
selectSpeed.addEventListener("change", changeSpeedOfSort);

mashButton.addEventListener("click", handleMashUp);

changeArrayButton.addEventListener("click", handleChangeClick);
closePopupButton.addEventListener("click", closePopup);

form.addEventListener("submit", handleChangeArray);
