

//Form 

let Name = document.getElementById('Name');
let Age = document.getElementById('Age');
let Gender = document.getElementById('Gender');
let Barith = document.getElementById('Barith');
let image1 = document.getElementById('image').files[0];
let Description = document.getElementById('Description');
let Major = document.getElementById('Major');
let HTML1 = document.getElementById('HTML');
let CSS1 = document.getElementById('CSS');
let JavaScript1 = document.getElementById('JavaScript');
let Siblings_N = document.getElementById('Siblings-N');
let Siblings_D = document.getElementById('Siblings-D');
let submit = document.getElementById('Sub');
let Container = document.getElementById('Container');
let user_form = document.getElementById('user-form');


function showImage() {
    const file = document.getElementById("image").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = document.createElement("img");
            img.src = reader.result;
            img.width = 100;
            document.body.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}


function Ischecked()
{
    let S1 = '';

    if(HTML1.checked)
        S1 += ' HTML ';
    
    if(CSS1.checked)
        S1 += ' CSS ';
    
    if(JavaScript1.checked)
        S1 += ' JavaScript '


    return S1;
}


function saveToLocal() {
    localStorage.setItem("name", Name.value);
    localStorage.setItem("age", Age.value);
    localStorage.setItem("gender", Gender.value);
    localStorage.setItem("birthdate", Barith.value);
    localStorage.setItem("description", Description.value);
    localStorage.setItem("major", Major.value);

        const languages = [];
            if (HTML1.checked) languages.push("HTML");
            if (CSS1.checked) languages.push("CSS");
            if (JavaScript1.checked) languages.push("JavaScript");

            localStorage.setItem("languages", languages.join(" "));
    }



user_form.addEventListener('submit', function (event) {

    event.preventDefault();

    let T1 = document.createElement('h3');
    T1.innerText = 'Name: ' + Name.value;

    let T2 = document.createElement('h3');
    T2.innerText = 'Age: ' + Age.value;

    let T3 = document.createElement('h3');
    T3.innerText = 'Gender: ' + Gender.value;

    let T4 = document.createElement('h3');
    T4.innerText = 'Barith Date: ' + Barith.value;

    let T5 = document.createElement('h3');
    T5.innerText = 'Description: ' + Description.value;

    let T6 = document.createElement('h3');
    T6.innerText = 'Major: ' + Major.value;

    let T7 = document.createElement('h3');
    T7.innerText = 'Programming Language : ' + Ischecked();

    let T8 = document.createElement('h3');
    T8.innerText = 'Siblings Number : ' + Siblings_N.value;

    let T9 = document.createElement('h3');
    T9.innerText = 'Description of Siblings : ' + Siblings_D.value;

    showImage();

    Container.appendChild(T1);
    Container.appendChild(T2);
    Container.appendChild(T3);
    Container.appendChild(T4);
    Container.appendChild(T5);
    Container.appendChild(T6);
    Container.appendChild(T7);
    Container.appendChild(T8);
    Container.appendChild(T9);


    saveToLocal();

});

