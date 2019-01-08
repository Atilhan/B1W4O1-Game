var basevraag = prompt("Naar welke supermarkt wil je gaan ? Albertheijn ? | Jumbo ? | Plus? |");
if (basevraag == "Albertheijn"){


var vraag1AH = prompt("Snacks of Frisdrank?");

if (vraag1AH == "Snacks"){
  var vraag2AH = prompt("Frikandel of Chips?");
if (vraag2AH == "Frikandel"){
  var vraag2AH = prompt("De frikandel bleef in je keel vast zitten waardoor je bent gestikt");
}else{
  var vraag4AH = prompt("Je heb teveel chips gegeten waardoor in obesity raakt & niet meer kunt bewegen & daardoor overleed op grond in AH ");
}
}else{
    var vraag3AH = prompt("Frisdrank? Energy of Fruitsap?")
if (vraag3AH == "Energy"){
    var vraag5AH = prompt("Je hebt een hartaanval gekregen omdat de Energy drinken te ongezond is !")
 }else{
   var vraag6AH = prompt("Wil je Uiensap & Appelsap mix of Sinaasappelsap ?")
if (vraag6AH == "Uiensap & Appelsap Mix"){
   var vraag7AH = prompt("De smaak was zo vies waardoor je flauw bent gevallen en niet meer bent opgestaan !")
 }else{
 var vraag8AH = prompt("Je hebt een gezond fruitsap gekozen waardoor je gezonder bent geworden !")
   }
  }
 }
}

if (basevraag == "Jumbo"){
  var vraagJB1 = prompt("Groente of Zuivel ?")
if (vraagJB1 == "Groente"){
  var vraagJB2 = prompt("Wortel of Bergsla ?")
if (vraagJB2 == "Bergsla"){
  var afrondingJB1 = prompt("Je bent de bergen in beklommen maar hebt helaas geen sla gevonden.")
}else{
  var vraagJB2 = prompt("Je hebt wortel sap gemaakt en dat is gezond voor je ! ")
}
 }else{
   var vraagJB3 = prompt("Chocomelk of Melk ?")
if (vraagJB3 == "Chocomelk"){
   var vraagJB3 = prompt("Al de chocomelk zijn leeg gedronken door de docenten van Applicatie Ontwikkelaars")
 }else{
   var vraagJB4 = prompt("Geit or Koe melk ?")
if (vraagJB4 == "Geit"){
   var vraagJB4 = prompt("De geit heeft je neer gevloerd met zn hoorn, geen geiten melk voor jou")
 }else{
   var vraagJB4 = prompt("Je hebt een koe meegenomen naar huis waardoor je nu oneindigd melk voor je gezin over hebt !")
   }
  }
 }
}

if (basevraag == "Plus"){
  var vraagPLS1 = prompt("Taart of Snoepjes ?")
if (vraagPLS1 == "Taart"){
  var vraagPLS2 = prompt("Appeltaart of Aardbij Taart ?")
if (vraagPLS2 == "Appeltaart"){
  var afrondingPLS1 = prompt("Er zat wormen in de appel waardoor je nu een worm taart hebt !")
}else{
  var afrondingPLS2 = prompt("Je buikje zit lekker vol door de aarbijen taart ! ")
  }
}else{
  var afrondingPLS3 = prompt("Je hebt gaatjes gekregen waardoor je niks meer kan eten ! ")
 }
}
