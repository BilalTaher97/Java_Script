

let ele = document.getElementsByTagName('h1')[0];


ele.onmouseover = function EditStyle1() {


    ele.innerHTML = 'Hello World!';


};

ele.onmouseout = function EditStyle2() {


    ele.innerHTML = 'Can i help you?';


}



let Font_F = document.getElementById("Font-Family");
let Font_S = document.getElementById('Font-Size');
let Italic1 = document.getElementById('Italic');
let Bold1 = document.getElementById('Bold');
let Underline1 = document.getElementById('Underline');
let Textarea1 = document.getElementById('Text-Area');



Font_F.addEventListener('change', function () {

    let selectedValue = Font_F.value;


    if (selectedValue == "fantasy") {

        Textarea1.style.fontFamily = 'fantasy';

    } else if (selectedValue == "Times New Roman") {

        Textarea1.style.fontFamily = 'Times New Roman';

    } else if (selectedValue == "Arial") {

        Textarea1.style.fontFamily = 'Arial';

    } else if (selectedValue == "cursive") {

        Textarea1.style.fontFamily = 'cursive';
    }
});

Font_S.addEventListener('change', function () {

    let selectedValue = Font_S.value;

    if (selectedValue == "10px") {

        Textarea1.style.fontSize = '10px';

    } else if (selectedValue == "11px") {

        Textarea1.style.fontSize = '11px';

    } else if (selectedValue == "12px") {

        Textarea1.style.fontSize = '12px';

    } else if (selectedValue == "13px") {

        Textarea1.style.fontSize = '13px';
    }
    else if (selectedValue == "14px") {

        Textarea1.style.fontSize = '14px';
    }
    else if (selectedValue == "15px") {

        Textarea1.style.fontSize = '15px';
    }

});




Italic1.onclick = function() {

    if(Italic1.checked)
    {
        Textarea1.style.fontStyle = 'italic';
    }
    else
    {
        
        Textarea1.style.fontStyle = 'normal';
    }
}


Bold1.onclick = function() {

    if(Bold1.checked)
    {
        Textarea1.style.fontWeight = 'bold';
    }
    else
    {
        
        Textarea1.style.fontWeight = 'normal';
    }
}

Underline1.onclick = function() {

    if(Underline1.checked)
    {
        Textarea1.style.textDecoration = 'underline';
    }
    else
    {
        
        Textarea1.style.fontWeight = 'none';
    }
}