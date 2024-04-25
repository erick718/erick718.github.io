let courseNum = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('byo-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let mascot = document.getElementById('mascot').value;
    
        let image = document.getElementById("image").files[0];
        const imageUrl = URL.createObjectURL(image);
    
        let caption = document.getElementById('image-caption').value;
        let personalBackground = document.getElementById('personal').value;
        let proffesionalBackground = document.getElementById('professional').value;
        let academicBackground = document.getElementById('academic').value;
        let webBackground = document.getElementById('background').value;
        let platform = document.getElementById('computer').value;
        let courseTitleInputs = document.querySelectorAll('#addedCourse');
        let funnyThing = document.getElementById('funny').value;
        let anythingElse = document.getElementById('anything').value;
    
        let courses = [];
        for(let i = 0; i < courseNum; i++){
            let course = courseTitleInputs[i].value;
            courses.push(course);
        }

        const main = document.querySelector('main');
        main.innerHTML = `
            <h1>${name} ☯ ${mascot}</h1>
            <figure>
            <img src= "${imageUrl}">
            <figcaption>${caption}</figcaption>
            </figure>
            <ul>
            <li><strong>Personal Background: </strong>${personalBackground}</li>
            <li><strong>Professional Background: </strong>${proffesionalBackground}</li>
            <li><strong>Academic Background: </strong>${academicBackground}</li>
            <li><strong>Background in Web Development: </strong>${webBackground}</li>
            <li><strong>Primary Computer Platform:  </strong>${platform}</li>
            <li><strong>Courses currently taking: </strong></li>
            <ul id='addingcourse'></ul>
            <li><strong>Funny Thing: </strong>${funnyThing}</li>
            <li><strong>Anything Else: </strong>${anythingElse}</li>
            </ul>
            <a href="byo_intro.html">New Form</a>
        `;

        let addcourse = document.getElementById('addingcourse');
        for(let i = 0; i < courseNum; i++){
            let liElement = document.createElement("li");
            liElement.innerHTML = `${courses[i]}`;
            addcourse.appendChild(liElement);
        }
    });
});

function addCourse() {
    const courseAdded = document.getElementById("course-input");
    const newInput = document.createElement('input');
    newInput.id = 'addedCourse';
    newInput.type = 'text';
    newInput.required = 'true';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'course-button';
    deleteButton.onclick = function() {
        courseAdded.removeChild(newInput);
        courseAdded.removeChild(deleteButton);
        courseNum--;
    };

    courseAdded.appendChild(newInput);
    courseAdded.appendChild(deleteButton);
    courseNum++;
}