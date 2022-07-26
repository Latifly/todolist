const displayList = document.querySelector("#list-data");
displayList.textContent = "test";

async function getjson() {
  const response = await fetch("./data.json");
  const { data } = await response.json();

  document.getElementById("list-data").innerHTML = `<ol>
  ${data
    .map(function (data) {
      return `
      <li>
        <input type="checkbox" class="check" id="check" ${
          data.status === "done" ? "checked" : ""
        }/>
        <label for="check">${data.name}</label>
      </li>
      `;
    })
    .join("")}
    </ol>
    `;
}

getjson();
