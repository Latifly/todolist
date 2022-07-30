const displayList = document.querySelector("#list-data");
const button = document.querySelectorAll("button");

let listTodo = [];

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

const showList = () => {
  document.getElementById("todo-list").innerHTML = `
  ${listTodo
    .map((lt) => {
      return `
      <li class="list-activity">
        <div>
          ${lt.activity} ${
        lt.status === "todo"
          ? '<i class="fa-solid fa-list-check"></i>'
          : lt.status === "progress"
          ? '<i class="fa-solid fa-person-running"></i>'
          : '<i class="fa-solid fa-check"></i>'
      }
          
        </div>
        <div>
          <button class="btn-status" data-value="done">Done</button>
          <button class="btn-status">In Progress</button>
        </div>
      
      </li>`;
    })
    .join("")}`;
};

const addList = (ev) => {
  ev.preventDefault();
  let activity = {
    activity: document.getElementById("input-todo").value,
    status: "todo",
  };
  listTodo.push(activity);
  document.querySelector("form").reset();
  console.log(listTodo);
  showList();
};

// getjson();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-submit").addEventListener("click", addList);
});
