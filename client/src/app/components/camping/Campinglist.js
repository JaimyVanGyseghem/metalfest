import React, { useEffect, useState, Fragment } from 'react';
import arrow from '../../static/images/arrow.png';

import './campinglist.scss';
import '../info/InfoList.scss';

const Campinglist = () => {
  useEffect(() => {
    const dropdownFAQ = () => {
      const dropdown = document.getElementsByClassName("dropbtn");
      const arrow = document.getElementsByClassName("arrow");

      for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
          console.log(dropdown[i])
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
             panel.style.display = "none";
             arrow[i].style.transform = "rotate(0deg)";
          } else {
             panel.style.display = "block";
             panel.style.marginBottom = '-10px'
             arrow[i].style.transform = "rotate(180deg)";
          }
        });
      }}

      dropdownFAQ();    
  }, []);
  return (
    <div class="container">
      <div class="info">
      <h2>Hoe geraak ik de camping binnen?</h2>
        <p>Net zoals je festivalband moet je aanschuiven aan de plaats voor de festivalingang. Je krijgt daar zowel je festivalband als je campingband.</p>
        <h2>Praktische afspraken op de camping</h2>
        <ul>
          <li>Bij de eerste binnenkomst zet je je tent op de zo dicht mogelijkste plaats. Zo kan iedereen genieten van een plaatsje op de camping.</li>
          <li>Alle tenten zijn toegelaten behalve grote partytenten die langer zijn dan 3 x 3m.</li>
          <li>Om 10 uur openen de kraampjes om eten en drinken te kopen op de camping</li>
          <li>Wees mileuvriendelijk en ruim alles op voor je terug naar huis gaat.</li>
          <li>Spoel de douches uit als je klaar bent met douche, zo is dat ook aangenaam voor de volgende na jou.</li>
        </ul>
        <h2>Wat is er voorzien op de camping?</h2>
        <ul>
          <li>Op de camping zijn er 10 douches voor vrouwen en 10 douches voor mannen voorzien</li>
          <li>Er is gratis drinkbaar water voorzien aan onze waterkranen op de camping</li>
          <li>Er zullen snacks en drank verkocht worden op de camping</li>
          <li>Er zijn microgolven die je altijd kan gebruiken om eten op te warmen</li>
          <li>Het wordt niet aangeraden om waardevolle spullen te laten liggen. Daarom voorzien we ook kluisjes om de camping (en op het festivaltereun) die je kunt huren. </li>
        </ul>
        <h2>Wat mag er allemaal niet?</h2>
        <ul>
          <li>Je mag geen eigen vuur meenemen om eten op te warmen</li>
          <li>Het is niet toegestaan om huisdieren/dieren mee te nemen</li>
          <li>Er mag geen vuurwerk meegenomen worden</li>
          <li>Het is verboden om sterke drank aan te bieden aan jongeren onder de 18 </li>
          <li>Alle soorten drugs worden niet toegelaten op de camping</li>
          <li>Alle soorten wapens zijn ook niet toegelatenx</li>
        </ul>
        <h2>Andere FAQ</h2>
        <button className="dropbtn"><p>Is mijn campingticket inbegrepen in mijn festivalticket?</p><img class="arrow" src={arrow}></img></button> 
        <p className="dropdown">Ja je campingticket zit gratis bij je festivalticket. </p>
        <button className="dropbtn"><p>Wanneer gaat de camping ten vroegste open?</p><img class="arrow" src={arrow}></img></button> 
        <p className="dropdown">De camping is open van 6 uur in de ochtend op 8 augustus. </p>
        <button className="dropbtn"><p>Wanneer sluit de camping?</p><img class="arrow" src={arrow}></img></button> 
        <p className="dropdown">De camping is open tot 12 uur in de middag  op 10 augustus. </p>
        <button className="dropbtn"><p>Mag ik mijn campingbandje doorgeven?</p><img class="arrow" src={arrow}></img></button> 
        <p className="dropdown">Nee, bij het ontvangen van het bandje wordt die rechtstreeks vastgemaakt aan de pols. Als het ijzer van het badje los gemaakt is kan je niet meer op de camping komen. </p>
        <button className="dropbtn"><p>Hoe oud moet ik zijn om op de camping te verblijven?</p><img class="arrow" src={arrow}></img></button> 
        <p className="dropdown">Er staat geen minimum leeftijd. Het wordt wel afgeraden om niet met kleine kinderen op de camping/festivalterein te komen.  </p>
      </div>
    </div>
  )
}

export default Campinglist