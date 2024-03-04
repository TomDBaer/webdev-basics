let ausgabe = document.querySelector(".ausgabe");

has_error = false;
error_message = "";

alert(`Schönen guten Tag, Sie wollen also Trinkgeld geben?`);
let betrag_gesamt = Number(prompt("Wie hoch ist der Betrag den Sie zu bezahlen haben?"));
let prozent_trinkgeld = Number(prompt("Wie viel Prozent an Trinkgeld wollen Sie geben?"));
let personen = Number(prompt("Wie viele Personen sind in Ihrer Gruppe?"));


let betrag_pro_person = betrag_gesamt / personen;
let einzelbetrag_mit_trinkgeld = Math.round(betrag_pro_person * (prozent_trinkgeld / 100 + 1)).toFixed(2);
let endbetrag_mit_trinkgeld = einzelbetrag_mit_trinkgeld * personen;

if (Number.isNaN(betrag_pro_person) || Number.isNaN(einzelbetrag_mit_trinkgeld) || Number.isNaN(endbetrag_mit_trinkgeld)) {
    has_error = true;
    error_message = "Eine der Eingaben war keine Nummer!"
}

console.log(`Testlog:`);
console.log(`Es sind ${personen} in Ihrer Gruppe.
\nJeder muss bei ${prozent_trinkgeld}% Trinkgeld einen Betrag von ${einzelbetrag_mit_trinkgeld}€ Bezahlen.
\nZusammen macht das ${endbetrag_mit_trinkgeld}€`);

if (has_error) {
    ausgabe.innerHTML = `${error_message}`
} else {
    // Ausgabe nachdem ich alle Prompt durch habe
    ausgabe.innerHTML = `Es sind ${personen} in Ihrer Gruppe.<br />
    Jeder muss bei ${prozent_trinkgeld}% Trinkgeld einen Betrag von ${einzelbetrag_mit_trinkgeld}€ Bezahlen.<br />
    Zusammen macht das ${endbetrag_mit_trinkgeld}€`;
}
