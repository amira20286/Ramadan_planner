document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const dayNumber = parseInt(urlParams.get("day"));

    if (dayNumber) {
        document.getElementById("dayTitle").innerText = `📅 يوم رمضان ${dayNumber}`;
    }

    let tasks = JSON.parse(localStorage.getItem(`tasks_${dayNumber}`)) || [];
    let tasbeehCount = parseInt(localStorage.getItem(`tasbeeh_${dayNumber}`)) || 0;

    function renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.className = task.completed ? "completed" : "";
            taskItem.innerHTML = `
                <span>${task.text} 🕒 ${task.time || "غير محدد"}</span>
                <button onclick="completeTask(${index})">🏆</button>
                <button onclick="deleteTask(${index})">🗑</button>
            `;
            taskList.appendChild(taskItem);
        });

        saveTasks();
    }

    window.addTask = function () {
        const taskSelect = document.getElementById("taskSelect");
        const customTaskInput = document.getElementById("customTaskInput");
        const taskTime = document.getElementById("taskTime").value;
        let taskText = taskSelect.value === "✍️ مهمة أخرى" ? customTaskInput.value : taskSelect.value;

        if (taskText.trim() !== "") {
            tasks.push({ text: taskText, time: taskTime, completed: false });
            renderTasks();
        }
    };

    window.completeTask = function (index) {
        tasks[index].completed = true;
        renderTasks();
    };

    window.deleteTask = function (index) {
        tasks.splice(index, 1);
        renderTasks();
    };

    window.resetAllTasks = function () {
        tasks = [];
        renderTasks();
    };

    window.copyPreviousDayTasks = function () {
        if (dayNumber > 1) {
            let previousTasks = JSON.parse(localStorage.getItem(`tasks_${dayNumber - 1}`)) || [];
            tasks = [...previousTasks];
            renderTasks();
        }
    };

    window.goBack = function () {
        window.location.href = "index.html";
    };

    function saveTasks() {
        localStorage.setItem(`tasks_${dayNumber}`, JSON.stringify(tasks));
    }

    renderTasks();

    // إدارة المسبحة الإلكترونية
    window.increaseCount = function () {
        tasbeehCount++;
        document.getElementById("tasbeehCount").innerText = tasbeehCount;
        localStorage.setItem(`tasbeeh_${dayNumber}`, tasbeehCount);
    };

    window.decreaseCount = function () {
        if (tasbeehCount > 0) {
            tasbeehCount--;
            document.getElementById("tasbeehCount").innerText = tasbeehCount;
            localStorage.setItem(`tasbeeh_${dayNumber}`, tasbeehCount);
        }
    };

    window.resetCount = function () {
        tasbeehCount = 0;
        document.getElementById("tasbeehCount").innerText = tasbeehCount;
        localStorage.setItem(`tasbeeh_${dayNumber}`, tasbeehCount);
    };

    document.getElementById("tasbeehCount").innerText = tasbeehCount;
});
