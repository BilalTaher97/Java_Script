

const Container = document.getElementById('Main-Div');
let Button1 = document.getElementById('Load-1');
let Button2 = document.getElementById('Load-2');

Button1.addEventListener('click', function () {

    const DataFile = new XMLHttpRequest();

    DataFile.open('GET', 'file.JSON');

    DataFile.onreadystatechange = function () {

        if (DataFile.readyState === 4 && DataFile.status === 200) {
            const data = JSON.parse(DataFile.responseText);

            for (const key in data) {

                const NewDiv = document.createElement('div');
                NewDiv.className = 'Sub-Div';

                NewDiv.innerHTML = ` 
                <h3>${data[key].userName}</h3>
                <p>Age:${data[key].age}</p>
                <p>Email:<br>${data[key].email}</p>
                <p>Profession:${data[key].profession}</p>
                `;

                Container.appendChild(NewDiv);
            }

        }
    }

    DataFile.send();

})



Button2.addEventListener('click', async function () {

    const response = await fetch('https://api.npoint.io/fd84e16b703b05c9cbbe');

    const data = await response.json();

    console.log(data);

    for (const key in data) {

        const NewDiv = document.createElement('div');
        NewDiv.className = 'Sub-Div';

        NewDiv.innerHTML = ` 
                <h3>${data[key].userName}</h3>
                <p>Age:${data[key].age}</p>
                <p>Email:<br>${data[key].email}</p>
                <p>Profession:${data[key].profession}</p>
                `;

        Container.appendChild(NewDiv);
    }

})


