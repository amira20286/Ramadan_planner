
document.addEventListener("DOMContentLoaded", function () {
    function generateRamadanCalendar() {
        const calendarDiv = document.getElementById("ramadanCalendar");

        if (!calendarDiv) {
            console.error("لم يتم العثور على عنصر التقويم!");
            return;
        }

        calendarDiv.innerHTML = "";
        calendarDiv.style.display = "grid";
        calendarDiv.style.gridTemplateColumns = "repeat(7, 1fr)"; // 7 أيام في الأسبوع
        calendarDiv.style.gap = "5px"; // المسافة بين الأيام

        const startDate = new Date("2025-03-01"); // بداية رمضان 1446 هـ
        const firstDayOfWeek = startDate.getDay(); // تحديد اليوم الذي يبدأ به رمضان

        // إضافة فراغات للأيام قبل بداية رمضان
        for (let i = 0; i < firstDayOfWeek; i++) {
            let emptyCell = document.createElement("div");
            emptyCell.className = "calendar-empty";
            calendarDiv.appendChild(emptyCell);
        }

        for (let i = 1; i <= 30; i++) {
            let dayElement = document.createElement("a");
            dayElement.className = "calendar-day";
            dayElement.href = `day.html?day=${i}`;
            dayElement.innerText = `يوم ${i}`;
            dayElement.style.padding = "15px";
            dayElement.style.background = "#F4F4F4";
            dayElement.style.borderRadius = "8px";
            dayElement.style.textAlign = "center";
            dayElement.style.fontSize = "18px";
            dayElement.style.fontWeight = "bold";
            dayElement.style.color = "#333";
            dayElement.style.textDecoration = "none";
            dayElement.style.border = "2px solid #ddd";

            // عند تمرير الماوس
            dayElement.addEventListener("mouseenter", function () {
                dayElement.style.background = "#87CEFA";
            });

            // عند خروج الماوس
            dayElement.addEventListener("mouseleave", function () {
                dayElement.style.background = "#F4F4F4";
            });

            calendarDiv.appendChild(dayElement);
        }
    }

    generateRamadanCalendar();
});
