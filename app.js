var _a;
(_a = document.getElementById("build-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = +document.getElementById("contact").value;
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var gradYear = +document.getElementById("grad-year").value;
    var company = document.getElementById("company").value;
    var jobTitle = document.getElementById("job-title").value;
    var duration = document.getElementById("duration").value;
    var skills = document.getElementById("skills").value;
    // Check for empty fields
    if (!name || !email || !contact || !degree || !university || !gradYear || !company || !jobTitle || !duration || !skills) {
        alert("Please fill in all fields before building the resume.");
        return;
    }
    // Check for correct data types
    if (isNaN(contact) || isNaN(gradYear)) {
        alert("Please enter correct data. Contact and Graduation Year should be numbers.");
        return;
    }
    // Display the values in the resume section
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-contact").textContent = contact.toString();
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-university").textContent = university;
    document.getElementById("display-grad-year").textContent = gradYear.toString();
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-duration").textContent = duration;
    document.getElementById("display-skills").textContent = skills;
    // Set the resume heading
    var resumeHeading = document.getElementsByClassName("resume-heading");
    if (resumeHeading.length > 0) {
        resumeHeading[0].textContent = "".concat(name, " Resume");
    }
});
