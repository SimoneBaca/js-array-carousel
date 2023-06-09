/*Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
:puntare_su:MILESTONE 1
Per prima cosa, creiamo il markup statico:
costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
:le_corna:MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
:gesto_ti_amo:MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
:regalo: BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
:regalo: BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
:urlo: Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
:lampadina:Consigli del giorno:
Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"*/



const imgs = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",];
const slide = document.querySelector(".slide");


for (let i=0; i<imgs.length; i++) {

    slide.innerHTML += `<img src="${imgs[i]}" class="hidden carouselImg"></img>`;
    console.log ("slide");
    
}

const allImgs = document.querySelectorAll(".carouselImg");
allImgs[0].classList.toggle("hidden");

const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
let index = 0;

console.log("inizio", index);
previousBtn.style.display = "none";
previousBtn.addEventListener("click", function(){

    if (index >0) {

        allImgs[index].classList.toggle("hidden");
        index--;
        allImgs[index].classList.toggle("hidden");

    }

    if (index == 0) {

        previousBtn.style.display = "none";

    }

    nextBtn.style.display= "block";
    console.log("prev", index);

});

nextBtn.addEventListener("click", function(){

    if (index < imgs.length -1) {

        allImgs[index].classList.toggle("hidden");
        index++;
        allImgs[index].classList.toggle("hidden");

    }

    
    if (index == (imgs.length -1)) {

        nextBtn.style.display = "none";

    }
    
    previousBtn.style.display= "block";
    console.log("next", index);

});
