

let Main = document.getElementById('Main-List');
let Flags = document.getElementById('Flags');



Main.addEventListener('change', function () {

    Flags.src = Main.value;
})