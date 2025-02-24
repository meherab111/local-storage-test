// Dummy Object With Data

const studentData = {
  name: "Araf Mahmud",

  education: "Honours 3rd Year",

  age: 23,

  address: {
    city: "uttara",
    district: "Dhaka",
    postCode: 1230,
  },
};

let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn-3");
let showData = document.getElementById("data-show");

// Setting Data To Local Storage

const funcBtn1 = () => {
  let jsonConvert = JSON.stringify(studentData);

  localStorage.setItem("studentData", jsonConvert);
  alert("Data Added");
};

// Getting Data From Local Storage

const funcBtn2 = () => {
  const getData = JSON.parse(localStorage.getItem("studentData"));

  let pTag = document.createElement("p");

  pTag.classList.add("pTag");

  pTag.innerHTML = `Data From Local Storage : name: ${getData.name}, education: ${getData.education}, city: ${getData.address.city}, district: ${getData.address.district}, postCode: ${getData.address.postCode}`;

  showData.append(pTag);
};

// Removing Data From Local Storage

const funcBtn3 = () => {
  localStorage.removeItem("studentData");
  alert("Data Removed");
  showData.innerHTML = "";
};

// Click Events

button1.addEventListener("click", funcBtn1);
button2.addEventListener("click", funcBtn2);
button3.addEventListener("click", funcBtn3);
