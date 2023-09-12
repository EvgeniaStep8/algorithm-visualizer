import "./assets/styles/style.css";

import { container, button, mashButton, selectSort, selectSpeed, changeArrayButton, closePopupButton, form } from "./scripts/constants.js";
import { renderArray, mashUpArray } from "./scripts/array.js";
import { startSort, changeSortAlgorithmDescription, changeSpeedOfSort, array } from "./scripts/sort.js";
import { openPopup, closePopup } from "./scripts/popup.js";
import { handleChangeArray } from "./scripts/form.js";

renderArray(array, container);

button.addEventListener("click", startSort);
selectSort.addEventListener("change", changeSortAlgorithmDescription);
selectSpeed.addEventListener("change", changeSpeedOfSort);

mashButton.addEventListener("click", () => {
  mashUpArray(array);
});

changeArrayButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

form.addEventListener("submit", handleChangeArray);
