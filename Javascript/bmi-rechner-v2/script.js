// replace error
let gewicht = parseFloat(prompt("Wie viel wiegst du in kg").replace(",", "."));
let groesse = parseInt(prompt("Wie groß bist du in cm")) / 100;
let kommentar = "";

// Alternativ
// Hier ist die eingabe in Meter. Ein Switch check wäre noch vom vorteil ob cm oder meter
// groesse = parseFloat(prompt("Wie groß bist du in meter").replace(",", "."))

// Es gibt schönere Rechenarten als x*x. ist aber verständlich
let bmi = (gewicht / (groesse * groesse)).toFixed(2)

// Auswerung nach
// Untergewicht < 18,5
// Normalgewicht 18,5 - 24,9
// Übergewicht: > 25,0
// Präadipositas 25,0 - 29,9
// moderate Adipositas 30,0 - 34,9
// starke Adipositas 35,0 - 39,9
// extreme Adipositas > 40,0

// If Statement
if (bmi < 18.5) {
    kommentar = "Sie sind untergewichtig"
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    kommentar = "Sieht gut aus, Normalgewicht"
} else {
    kommentar = "Ooof"
}

// Switch Statement 

console.log(kommentar);
alert(`Du hast bei einer Größe von ${groesse}cm und einem Gewicht von ${gewicht}kg einen BMI von: ${bmi}`)

