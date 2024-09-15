document.getElementById("build-resume")?.addEventListener("click", function () {

    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const contact: number = +(document.getElementById("contact") as HTMLInputElement).value;
    const degree: string = (document.getElementById("degree") as HTMLInputElement).value;
    const university: string = (document.getElementById("university") as HTMLInputElement).value;
    const gradYear: number = +(document.getElementById("grad-year") as HTMLInputElement).value;
    const company: string = (document.getElementById("company") as HTMLInputElement).value;
    const jobTitle: string = (document.getElementById("job-title") as HTMLInputElement).value;
    const duration: string = (document.getElementById("duration") as HTMLInputElement).value;
    const skills: string = (document.getElementById("skills") as HTMLInputElement).value;

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
    document.getElementById("display-name")!.textContent = name;
    document.getElementById("display-email")!.textContent = email;
    document.getElementById("display-contact")!.textContent = contact.toString();

    document.getElementById("display-degree")!.textContent = degree;
    document.getElementById("display-university")!.textContent = university;
    document.getElementById("display-grad-year")!.textContent = gradYear.toString();

    document.getElementById("display-company")!.textContent = company;
    document.getElementById("display-job-title")!.textContent = jobTitle;
    document.getElementById("display-duration")!.textContent = duration;

    document.getElementById("display-skills")!.textContent = skills;

    // Set the resume heading
    const resumeHeading = document.getElementsByClassName("resume-heading");
    if (resumeHeading.length > 0) {
        (resumeHeading[0] as HTMLElement).textContent = `${name} Resume`;
    }
});
