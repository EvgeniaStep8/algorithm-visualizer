const popup = document.querySelector(".popup");

// функции открытия и закрытия попапа

const openPopup = () => {
  popup.classList.add("popup-visible");
}

const closePopup = () => {
  popup.classList.remove("popup-visible");
}

export { openPopup, closePopup };

