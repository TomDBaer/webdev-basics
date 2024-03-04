const MAX_LENGTH = 35;

let text_eingabe = document.querySelector(".eingabe").textContent;
let text_ausgabe = document.querySelector(".ausgabe")
let num_ausgabe = document.querySelector(".info")

let num_text = text_eingabe.length;

let new_text = text_eingabe.slice(0, MAX_LENGTH)

let diff_length = num_text - MAX_LENGTH

text_ausgabe.insertAdjacentText('afterbegin', new_text)

num_ausgabe.insertAdjacentText('afterbegin', `Der Text ist länger als die mögliche länge von ${MAX_LENGTH} Zeichen. 
    Er wurde aus diesem grund gekürzt.
    Die differenz beträgt ${diff_length} Zeichen
`)
