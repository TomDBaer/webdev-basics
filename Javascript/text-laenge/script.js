const max_length = 35;

let text_eingabe = document.querySelector(".eingabe").textContent;
let text_ausgabe = document.querySelector(".ausgabe")
let num_ausgabe = document.querySelector(".numba")

let num_text = text_eingabe.length;

let new_text = text_eingabe.slice(0,max_length)

let diff_length = num_text - max_length

text_ausgabe.insertAdjacentText('afterbegin', new_text)

num_ausgabe.insertAdjacentText('afterbegin', `Die Differenz ist ${diff_length}`)


