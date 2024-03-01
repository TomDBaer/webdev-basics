// Project Tip Calculator

// TODO 1. Erstellen Sie eine Begrüßung für Ihr Programm.

// TODO 2. Fragen Sie den Benutzenden wie hoch die komplette Rechnung ist.

// TODO 3. Fragen Sie den Benutzenden wie viel Trinkgeld (in %) gegeben werden soll.

// TODO 4. Fragen Sie anschließend auf wie viele Personen die Rechnung aufgeteilt werden soll.

// TODO 5. Das Programm soll nun den zu zahlenden Betrag für jede einzelne Person inklusive des Trinkgeldes berechnen.

// Beispiel
// Wenn die Rechnung beispielsweise einen Betrag von 150€ hatte, diese auf 5
// Personen aufgeteilt werden soll und dabei ein Trinkgeld von 10 % gegeben wird,
// dann sollte jede Person (150.00 / 5) * 1,1 zahlen

// Runden Sie das Ergebnis auf zwei dezimale Kommastellen

// (Math.round(num * 100) / 100).toFixed(2);

has_error = false;
error = "";

alert(`Schönen guten Tag, Sie wollen also Trinkgeld geben?`);
let betrag_gesamt = Number(prompt("Wie hoch ist der Betrag den Sie zu bezahlen haben?"));
let prozent_trinkgeld = Number(prompt("Wie viel Prozent an Trinkgeld wollen Sie geben?"));
let personen = Number(prompt("Wie viele Personen sind in Ihrer Gruppe?"));

console.log(typeof betrag_gesamt);
console.log(typeof personen);

// Funktioniert so nicht. Ich kann auch einen char in eine int setzen. Stört dann bei der Berechnung
// Am besten bei der Berechnung selber Überprüfen ob die Rechnung eine NaN ausgibt
if (typeof betrag_gesamt != Number || typeof prozent_trinkgeld != "number" || typeof personen != "number"){
    has_error = !has_error;
    error = "Sie haben einen Wert eingegeben der keine Zahl ist\nBitte starten Sie die Rechnung neu";
    alert(error)
    throw new Error();
}

betrag_pro_person = betrag_gesamt / personen;
einzelbetrag_mit_trinkgeld = Math.round( betrag_pro_person * (prozent_trinkgeld / 100 + 1)).toFixed(2);
endbetrag_mit_trinkgeld = einzelbetrag_mit_trinkgeld * personen;

console.log(`Testlog`);
console.log(`Es sind ${personen} in Ihrer Gruppe.
\nJeder muss bei ${prozent_trinkgeld}% Trinkgeld einen Betrag von ${einzelbetrag_mit_trinkgeld}€ Bezahlen.
\nZusammen macht das ${endbetrag_mit_trinkgeld}€`);

alert(`Es sind ${personen} in Ihrer Gruppe.
\nJeder muss bei ${prozent_trinkgeld}% Trinkgeld einen Betrag von ${einzelbetrag_mit_trinkgeld}€ Bezahlen.
\nZusammen macht das ${endbetrag_mit_trinkgeld}€`);