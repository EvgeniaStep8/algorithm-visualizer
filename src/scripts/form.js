import { changeArrayForSort, changeArrayLength } from "./sort.js";
import { form } from "./constants.js";
import { closePopup } from "./popup.js";

const handleChangeArray = (evt) => {
  evt.preventDefault();
  if (form.array.value !== "") {
    const arr = form.array.value.split(", ").map((num) => +num);
    changeArrayForSort(arr);
  } else {
    changeArrayLength(+form.range.value);
  }
  closePopup();
}

const handleInputArrayChange = () => {
  if (form.array.value !== "") {
    form.range.disabled = true;
  } else {
    form.range.disabled = false;
  }
}

form.array.addEventListener("change", handleInputArrayChange);
form.range.addEventListener("change", () => {
  document.querySelector(".length").textContent = form.range.value;
})

export { handleChangeArray };
