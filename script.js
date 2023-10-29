const ul = document.body.querySelector(".ul");
const boxButtonRecord = document.body.querySelector(".boxButtonRecord");
boxButtonAntyRecord = document.body.querySelector(".boxButtonAntyRecord");
const li = document.body.querySelector(".li");
let count = +localStorage.getItem("boxCount");

fileJson = {
  classesToday: {
    "Наименование занятия": "бокс",
    "Время начала занятия": "в 19.00",
    "Время окончания занятия": "в 21.00",
    "Максимальное количество записанных": 25,
    // "Записано на данный момент":  el
  },
};

for (const key in fileJson.classesToday) {
  if (Object.hasOwnProperty.call(fileJson.classesToday, key)) {
    const element = `${key}: ${fileJson.classesToday[key]}`;
    console.log(element);
    newElem = document.createElement("li");
    newElem.append(element);
    li.before(newElem);
  }
}

li.innerHTML = `Записано на данный момент: ${+localStorage.getItem(
  "boxCount"
)}`;

function record() {
  if (count < 25) {
    ++count;
    li.innerHTML = `Записано на данный момент: ${count}`;
    localStorage.setItem("boxCount", JSON.stringify(count));
  }
  if (count == 25) {
    boxButtonRecord.setAttribute("disabled", true);
  }
  if (count > 0) {
    boxButtonAntyRecord.removeAttribute("disabled");
  }
}

function antyRecord() {
  if (count > 0) {
    --count;
    li.innerHTML = `Записано на данный момент: ${count}`;
    localStorage.setItem("boxCount", JSON.stringify(count));
  }
  if (count < 25) {
    boxButtonRecord.removeAttribute("disabled");
  }
  if (count == 0) {
    boxButtonAntyRecord.setAttribute("disabled", true);
  }
}

if (count == 25) {
  boxButtonRecord.setAttribute("disabled", true);
}
if (count < 25) {
  boxButtonRecord.removeAttribute("disabled");
}

if (count == 0) {
  boxButtonAntyRecord.setAttribute("disabled", true);
}
if (count > 0) {
  boxButtonAntyRecord.removeAttribute("disabled");
}

boxButtonRecord.addEventListener("click", record);
boxButtonAntyRecord.addEventListener("click", antyRecord);
