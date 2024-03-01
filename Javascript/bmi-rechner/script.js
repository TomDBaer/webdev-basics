
gewicht = parseFloat(prompt("Wie viel wiegst du in kg").replace(",", "."));
groesse = parseInt(prompt("Wie groß bist du in cm")) / 100;

// Alternativ
// Hier ist die eingabe in Meter. Ein Switch check wäre noch vom vorteil ob cm oder meter
// groesse = parseFloat(prompt("Wie groß bist du in meter").replace(",", "."));

// Es gibt schönere Rechenarten als x*x. ist aber verständlich
bmi = (gewicht / (groesse * groesse)).toFixed(2) 

alert(`Du hast bei einer Größe von ${groesse}cm und einem Gewicht von ${gewicht}kg einen BMI von: ${bmi}`)
