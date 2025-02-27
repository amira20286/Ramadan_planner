document.addEventListener("DOMContentLoaded", function () {
    function generateRamadanCalendar() {
        const calendarDiv = document.getElementById("ramadanCalendar");

        // تأكد من أن العنصر موجود
        if (!calendarDiv) {
            console.error("لم يتم العثور على عنصر التقويم!");
            return;
        }

        calendarDiv.innerHTML = "";

        const startDate = new Date("2025-03-01"); // بداية رمضان 1446 هـ
        for (let i = 1; i <= 30; i++) {
            let dayElement = document.createElement("a");
            dayElement.className = "calendar-day";
            dayElement.href = `day.html?day=${i}`;
            dayElement.innerText = `📅 يوم ${i}`;
            calendarDiv.appendChild(dayElement);
        }
    }

    generateRamadanCalendar();
});
