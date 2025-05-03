document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const classValue = document.getElementById("class").value;
    const careerInterest = document.getElementById("careerInterest").value;
    const actions = document.getElementById("actions").value;
    const favoriteSubject = document.getElementById("favoriteSubject").value;
    const activities = document.getElementById("activities").value;
    const personality = document.getElementById("personality").value;

    const formData = {
        name,
        class: classValue,
        careerInterest,
        actions,
        favoriteSubject,
        activities,
        personality
    };

    // Gửi dữ liệu tới Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbzW1wCrAIRj_s7V6OWsyNyvcrMVc4hcvgSGcB8Fj5UoDQw6fpNYT1qmidJsFRyr3rYy4g/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        alert("Dữ liệu đã được gửi thành công!");
    })
    .catch(error => {
        alert("Đã có lỗi xảy ra, vui lòng thử lại.");
    });
});
