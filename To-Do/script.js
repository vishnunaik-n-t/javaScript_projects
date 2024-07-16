const item = document.getElementById("item");
const ToDo = document.querySelector("#To-Do");

const addList = (task) => {
    const list = document.createElement("li");
    list.innerHTML = `${task} <i class="cancel fa-solid fa-xmark"></i>`;

    list.addEventListener(
        "click", function () {
            this.classList.toggle("done");
            saveToLocalStorage();
        }
    );

    list.querySelector("i").addEventListener(
        "click", function () {
            list.remove();
            saveToLocalStorage();
        }
    );

    ToDo.appendChild(list);
};

const saveToLocalStorage = () => {
    const tasks = [];
    ToDo.querySelectorAll("li").forEach(li => {
        tasks.push({ text: li.innerText, done: li.classList.contains("done") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadFromLocalStorage = () => {
    const list = document.createElement("li");
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
        addList(task.text);
        if (task.done) {
            ToDo.lastChild.classList.add("done");
        }
    });
};

item.addEventListener(
    "keydown", function (evt) {
        if (evt.key === "Enter") {
            addList(item.value);
            saveToLocalStorage();
            this.value = "";
        }
    }
);

// Load existing tasks from local storage when the page loads
loadFromLocalStorage();
