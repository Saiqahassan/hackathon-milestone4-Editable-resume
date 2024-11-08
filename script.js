var form = document.getElementById('resume-form');
var resumeGenerateElement = document.getElementById('resume-generate');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var university = document.getElementById('university').value;
    var college = document.getElementById('college').value;
    var school = document.getElementById('school').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Dynamically generate the resume
    var resumeBuilder = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n\n    <h3>Education</h3>\n    <p><b>University:</b><span contenteditable=\"true\">").concat(university, "</span></p>\n    <p><b>College:</b><span contenteditable=\"true\">").concat(college, "</span></p>\n    <p><b>School:</b><span contenteditable=\"true\">").concat(school, "</span></p>\n\n    <h3>Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    if (resumeGenerateElement) {
        resumeGenerateElement.innerHTML = resumeBuilder;
    }
    else {
        console.error('Something is missing.');
    }
});
