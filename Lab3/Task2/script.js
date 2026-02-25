const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const filterButtons = document.querySelectorAll(".filter-btn");
let currentFilter = "all";

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});


filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        applyFilter();
    });
});

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "🗑";

    checkbox.addEventListener("change", function() {
        span.classList.toggle("done");

        /* mark li as completed for filtering */
        li.classList.toggle("completed", checkbox.checked);

        /* reapply current filter */
        applyFilter();
    });

    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);

        /* reapply current filter */
        applyFilter();
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    /* reapply current filter after adding */
    applyFilter();
}

/* filtering function (does NOT recreate list) */
function applyFilter() {
    const items = taskList.querySelectorAll("li");

    items.forEach(function(item) {
        const isCompleted = item.classList.contains("completed");
        let shouldShow = true;

        if (currentFilter === "active") {
            shouldShow = !isCompleted;
        } else if (currentFilter === "completed") {
            shouldShow = isCompleted;
        }

        item.classList.toggle("is-hidden", !shouldShow);
    });
}

