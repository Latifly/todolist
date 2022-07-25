const displayList = document.querySelector("#list-data");
displayList.textContent = "test";

async function getjson() {
  const response = await fetch("./data.json");
  // const data = await response.json();
  const { data } = await response.json();
  console.log(data);
  console.log(data[0].name);

  for (var name in data) {
    displayList.textContent += data[name].name;
    console.log(data[name].name);
  }
}

getjson();
