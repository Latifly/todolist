const displayList = document.querySelector("#list-data");
displayList.textContent = "test";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(typeof jsondata);
    console.log(jsondata);

    displayList.innerHTML = jsondata[0];
  });
