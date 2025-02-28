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
        calendarDiv.style.gap = "10px"; // المسافة بين الأيام
        calendarDiv.style.direction = "rtl"; // ترتيب من اليمين إلى اليسار

        const startDate = new Date("2025-03-01"); // بداية رمضان 1446 هـ
        const firstDayOfWeek = startDate.getDay(); // تحديد اليوم الذي يبدأ به رمضان

        // إضافة فراغات قبل بداية رمضان
        for (let i = 0; i < firstDayOfWeek; i++) {
            let emptyCell = document.createElement("div");
            emptyCell.className = "calendar-empty";
            calendarDiv.appendChild(emptyCell);
        }

        // إضافة أيام رمضان بترتيب صحيح
        for (let i = 1; i <= 30; i++) {
            let dayElement = document.createElement("a");
            dayElement.className = "calendar-day";
            dayElement.href = `day.html?day=${i}`;
            dayElement.innerText = `يوم ${i}`;
            calendarDiv.appendChild(dayElement);
        }
    }

    generateRamadanCalendar();
});
