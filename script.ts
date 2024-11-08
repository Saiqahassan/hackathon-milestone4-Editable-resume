const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeGenerateElement = document.getElementById('resume-generate') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const university = (document.getElementById('university') as HTMLInputElement).value
    const college = (document.getElementById('college') as HTMLInputElement).value
    const school = (document.getElementById('school') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Dynamically generate the resume

    const resumeBuilder = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    <p><b>Address:</b><span contenteditable="true">${address}</span></p>

    <h3>Education</h3>
    <p><b>University:</b><span contenteditable="true">${university}</span></p>
    <p><b>College:</b><span contenteditable="true">${college}</span></p>
    <p><b>School:</b><span contenteditable="true">${school}</span></p>

    <h3>Work Experience</h3>
    <p contenteditable="true">${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    `

    if(resumeGenerateElement){
        resumeGenerateElement.innerHTML = resumeBuilder;

    }else {
        console.error('Something is missing.')
    }

});