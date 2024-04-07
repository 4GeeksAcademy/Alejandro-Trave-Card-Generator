/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = document.querySelector("#suit");
  let upperSuit = document.querySelector("#upper_suit");
  let lowerSuit = document.querySelector("#lower_suit");
  let randomSuit = Math.floor(Math.random() * 4 + 1);
  let randomCornerSuit = Math.floor(Math.random() * 13 + 1);
  switch (
    randomCornerSuit // para los números
  ) {
    case 1:
      upperSuit.innerHTML = "A<br>";
      lowerSuit.innerHTML = "A<br>";
      break;
    case 2:
      upperSuit.innerHTML = "2<br>";
      lowerSuit.innerHTML = "2<br>";
      break;
    case 3:
      upperSuit.innerHTML = "3<br>";
      lowerSuit.innerHTML = "3<br>";
      break;
    case 4:
      upperSuit.innerHTML = "4<br>";
      lowerSuit.innerHTML = "4<br>";
      break;
    case 5:
      upperSuit.innerHTML = "5<br>";
      lowerSuit.innerHTML = "5<br>";
      break;
    case 6:
      upperSuit.innerHTML = "6<br>";
      lowerSuit.innerHTML = "6<br>";
      break;
    case 7:
      upperSuit.innerHTML = "7<br>";
      lowerSuit.innerHTML = "7<br>";
      break;
    case 8:
      upperSuit.innerHTML = "8<br>";
      lowerSuit.innerHTML = "8<br>";
      break;
    case 9:
      upperSuit.innerHTML = "9<br>";
      lowerSuit.innerHTML = "9<br>";
      break;
    case 10:
      upperSuit.innerHTML = "10<br>";
      lowerSuit.innerHTML = "10<br>";
      break;
    case 11:
      upperSuit.innerHTML = "J<br>";
      lowerSuit.innerHTML = "J<br>";
      break;
    case 12:
      upperSuit.innerHTML = "Q<br>";
      lowerSuit.innerHTML = "Q<br>";
      break;
    case 13:
      upperSuit.innerHTML = "K<br>";
      lowerSuit.innerHTML = "K<br>";
      break;
    default:
      break;
  }
  switch (
    randomSuit // para los suit
  ) {
    case 1:
      suit.innerHTML = "♦";
      suit.className = "symbol_alert";
      upperSuit.innerHTML += "♦";
      upperSuit.className = "symbol_alert";
      lowerSuit.innerHTML += "♦";
      lowerSuit.className = "symbol_alert";
      break;
    case 2:
      suit.innerHTML = "♥";
      suit.className = "symbol_alert";
      upperSuit.innerHTML += "♥";
      upperSuit.className = "symbol_alert";
      lowerSuit.innerHTML += "♥";
      lowerSuit.className = "symbol_alert";
      break;
    case 3:
      suit.innerHTML = "♠";
      upperSuit.innerHTML += "♠";
      lowerSuit.innerHTML += "♠";
      break;
    case 4:
      suit.innerHTML = "♣";
      upperSuit.innerHTML += "♣";
      lowerSuit.innerHTML += "♣";
      break;
    default:
      break;
  }
};

let newCard = document.querySelector("#newCard");

newCard.onclick = function() {
  let suit = document.querySelector("#suit");
  let upperSuit = document.querySelector("#upper_suit");
  let lowerSuit = document.querySelector("#lower_suit");
  let randomSuit = Math.floor(Math.random() * 4 + 1);
  let randomCornerSuit = Math.floor(Math.random() * 13 + 1);
  suit.className = "symbol";
  upperSuit.className = "symbol";
  lowerSuit.className = "symbol";
  switch (
    randomCornerSuit // para los números
  ) {
    case 1:
      upperSuit.innerHTML = "A<br>";
      lowerSuit.innerHTML = "A<br>";
      break;
    case 2:
      upperSuit.innerHTML = "2<br>";
      lowerSuit.innerHTML = "2<br>";
      break;
    case 3:
      upperSuit.innerHTML = "3<br>";
      lowerSuit.innerHTML = "3<br>";
      break;
    case 4:
      upperSuit.innerHTML = "4<br>";
      lowerSuit.innerHTML = "4<br>";
      break;
    case 5:
      upperSuit.innerHTML = "5<br>";
      lowerSuit.innerHTML = "5<br>";
      break;
    case 6:
      upperSuit.innerHTML = "6<br>";
      lowerSuit.innerHTML = "6<br>";
      break;
    case 7:
      upperSuit.innerHTML = "7<br>";
      lowerSuit.innerHTML = "7<br>";
      break;
    case 8:
      upperSuit.innerHTML = "8<br>";
      lowerSuit.innerHTML = "8<br>";
      break;
    case 9:
      upperSuit.innerHTML = "9<br>";
      lowerSuit.innerHTML = "9<br>";
      break;
    case 10:
      upperSuit.innerHTML = "10<br>";
      lowerSuit.innerHTML = "10<br>";
      break;
    case 11:
      upperSuit.innerHTML = "J<br>";
      lowerSuit.innerHTML = "J<br>";
      break;
    case 12:
      upperSuit.innerHTML = "Q<br>";
      lowerSuit.innerHTML = "Q<br>";
      break;
    case 13:
      upperSuit.innerHTML = "K<br>";
      lowerSuit.innerHTML = "K<br>";
      break;
    default:
      break;
  }
  switch (
    randomSuit // para los suit
  ) {
    case 1:
      suit.innerHTML = "♦";
      suit.className = "symbol_alert";
      upperSuit.innerHTML += "♦";
      upperSuit.className = "symbol_alert";
      lowerSuit.innerHTML += "♦";
      lowerSuit.className = "symbol_alert";
      break;
    case 2:
      suit.innerHTML = "♥";
      suit.className = "symbol_alert";
      upperSuit.innerHTML += "♥";
      upperSuit.className = "symbol_alert";
      lowerSuit.innerHTML += "♥";
      lowerSuit.className = "symbol_alert";
      break;
    case 3:
      suit.innerHTML = "♠";
      upperSuit.innerHTML += "♠";
      lowerSuit.innerHTML += "♠";
      break;
    case 4:
      suit.innerHTML = "♣";
      upperSuit.innerHTML += "♣";
      lowerSuit.innerHTML += "♣";
      break;
    default:
      break;
  }
};
// para ejecución automática
let timer = document.querySelector("#tempToggle");
let interval = 0; // para poderlo detener
timer.onclick = function() {
  if (timer.innerHTML == "Desactivar temporizador") {
    clearInterval(interval);
    timer.innerHTML = "Activar temporizador";
    interval = 0;
  } else {
    timer.innerHTML = "Desactivar temporizador";

    interval = setInterval(() => {
      let suit = document.querySelector("#suit");
      let upperSuit = document.querySelector("#upper_suit");
      let lowerSuit = document.querySelector("#lower_suit");
      let randomSuit = Math.floor(Math.random() * 4 + 1);
      let randomCornerSuit = Math.floor(Math.random() * 13 + 1);
      suit.className = "symbol";
      upperSuit.className = "symbol";
      lowerSuit.className = "symbol";
      switch (
        randomCornerSuit // para los números
      ) {
        case 1:
          upperSuit.innerHTML = "A<br>";
          lowerSuit.innerHTML = "A<br>";
          break;
        case 2:
          upperSuit.innerHTML = "2<br>";
          lowerSuit.innerHTML = "2<br>";
          break;
        case 3:
          upperSuit.innerHTML = "3<br>";
          lowerSuit.innerHTML = "3<br>";
          break;
        case 4:
          upperSuit.innerHTML = "4<br>";
          lowerSuit.innerHTML = "4<br>";
          break;
        case 5:
          upperSuit.innerHTML = "5<br>";
          lowerSuit.innerHTML = "5<br>";
          break;
        case 6:
          upperSuit.innerHTML = "6<br>";
          lowerSuit.innerHTML = "6<br>";
          break;
        case 7:
          upperSuit.innerHTML = "7<br>";
          lowerSuit.innerHTML = "7<br>";
          break;
        case 8:
          upperSuit.innerHTML = "8<br>";
          lowerSuit.innerHTML = "8<br>";
          break;
        case 9:
          upperSuit.innerHTML = "9<br>";
          lowerSuit.innerHTML = "9<br>";
          break;
        case 10:
          upperSuit.innerHTML = "10<br>";
          lowerSuit.innerHTML = "10<br>";
          break;
        case 11:
          upperSuit.innerHTML = "J<br>";
          lowerSuit.innerHTML = "J<br>";
          break;
        case 12:
          upperSuit.innerHTML = "Q<br>";
          lowerSuit.innerHTML = "Q<br>";
          break;
        case 13:
          upperSuit.innerHTML = "K<br>";
          lowerSuit.innerHTML = "K<br>";
          break;
        default:
          break;
      }
      switch (
        randomSuit // para los suit
      ) {
        case 1:
          suit.innerHTML = "♦";
          suit.className = "symbol_alert";
          upperSuit.innerHTML += "♦";
          upperSuit.className = "symbol_alert";
          lowerSuit.innerHTML += "♦";
          lowerSuit.className = "symbol_alert";
          break;
        case 2:
          suit.innerHTML = "♥";
          suit.className = "symbol_alert";
          upperSuit.innerHTML += "♥";
          upperSuit.className = "symbol_alert";
          lowerSuit.innerHTML += "♥";
          lowerSuit.className = "symbol_alert";
          break;
        case 3:
          suit.innerHTML = "♠";
          upperSuit.innerHTML += "♠";
          lowerSuit.innerHTML += "♠";
          break;
        case 4:
          suit.innerHTML = "♣";
          upperSuit.innerHTML += "♣";
          lowerSuit.innerHTML += "♣";
          break;
        default:
          break;
      }
    }, 2000);
  }
};
