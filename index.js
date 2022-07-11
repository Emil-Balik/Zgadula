var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");
var i = 0;
// var j = 0;
var arr = [];

var luck = Math.floor(Math.random() * 10) + 1;
// console.log(luck);

button.addEventListener("click", check);

function check() {
  var value = Number(input.value);
  if (Number.isInteger(value) && value >= 1 && value <= 10) {
    i++;

    if (luck > value) {
      answer.innerHTML = "Wylosowana liczba jest większa od Twojej!";
    } else if (luck < value) {
      answer.innerHTML = "Wylosowana liczba jest mniejsza od Twojej!";
    } else {
      answer.innerHTML = "Gratulacje, udało Ci się odgadnąć za " + i + " razem!";
      answer.classList.add("gold");
      button.innerHTML = "Odśwież";
      button.removeEventListener("click", check);
      button.addEventListener("click", refresh);
    }

    // PODAWANE WARTOŚCI NIE POWINNY SIĘ POWTARZAĆ. DYNAMICZNA LISTA?

    // for (j = arr.length; j >= 0; j--) {
    //   if (arr[j] == value) {
    //     answer.innerHTML += " " + value + " była już wybierana!";
    //     break;
    //   }
    // }

    // Funkcjonalność includes() - zwraca prawdę lub fałsz

    if (arr.includes(value)){
      answer.innerHTML += " " + value + " była już wybierana!";
    }

    arr.push(value);
    // console.log(arr);

    var li = document.createElement("li");
    list.appendChild(li);
    list.lastChild.innerHTML = value;
    // list.lastChild.innerHTML = i.toString() + " : " + value;
    // właściwość li: list-style-type: decimal;

  } else {
    alert("Błędna liczba!");
  }
}

function refresh() {
  location.reload();
}
