import { changeArrayForSort, changeArrayLength } from "./sort.js";
import { closePopup } from "./popup.js";

const radiobuttonsForm = document.querySelector(".radiobuttons");
const form = document.querySelector(".form");

// функция для отрисовки формы
const renderForm = () => {
  const formContainer = form.querySelector(".form-container");
  formContainer.innerHTML= "";
  if (radiobuttonsForm.array.value === "arrLength") {
    const range = document.querySelector("#template-length").content.querySelector(".range").cloneNode(true);
    range.addEventListener("change", () => {
      document.querySelector(".length").textContent = form.range.value;
    })
    formContainer.append(range);
  } else {
    const newArr = document.querySelector("#template-array").content.querySelector(".input-container").cloneNode(true);
    formContainer.append(newArr);
  }
}

// обработчик изменения массива
const handleChangeArray = (evt) => {
  evt.preventDefault();
  if (radiobuttonsForm.array.value === "arrLength") {
    changeArrayLength(+form.range.value);
  } else {
    const arr = form.array.value.split(", ").map((num) => +num);
    changeArrayForSort(arr);
  }
  closePopup();
}

renderForm();
radiobuttonsForm.addEventListener("change", renderForm);

export { handleChangeArray, form };
