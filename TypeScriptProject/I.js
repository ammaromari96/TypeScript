function store() {
    var _a, _b, _c, _d;
    var taskTitle = (_a = document.getElementById("taskInput")) === null || _a === void 0 ? void 0 : _a.value;
    var taskStatus = (_b = document.getElementById("statusInput")) === null || _b === void 0 ? void 0 : _b.value;
    var startDate = (_c = document.getElementById("startDate")) === null || _c === void 0 ? void 0 : _c.value;
    var endDate = (_d = document.getElementById("endDate")) === null || _d === void 0 ? void 0 : _d.value;
    if (!taskTitle || !taskStatus) {
        alert("Task title and status cannot be empty!");
        return;
    }
    var taskData = localStorage.getItem("tasks") || "";
    taskData += "".concat(Date.now(), "|").concat(taskTitle, "|").concat(taskStatus, "|").concat(startDate, "|").concat(endDate, ";");
    localStorage.setItem("tasks", taskData);
    renderTasks();
}
function renderTasks() {
    var taskList = document.getElementById("taskList");
    if (taskList) {
        taskList.innerHTML = "<tr><th>Title</th><th>Status</th><th>Start Date</th><th>End Date</th></tr>";
        var storedTasks = (localStorage.getItem("tasks") || "").split(";").filter(function (task) { return task; });
        storedTasks.forEach(function (taskStr) {
            var _a = taskStr.split("|"), id = _a[0], title = _a[1], status = _a[2], startDate = _a[3], endDate = _a[4];
            taskList.innerHTML += "<tr><td>".concat(title, "</td><td>").concat(status, "</td><td>").concat(startDate, "</td><td>").concat(endDate, "</td></tr>");
        });
    }
}
document.addEventListener("DOMContentLoaded", renderTasks);
