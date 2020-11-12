import React, { useEffect, useState } from 'react';
import { useFirestore } from '../../services';
import arrow from '../../static/images/arrow.png';
import './InfoList.scss';

const InfoList = () => {

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
    <div className="container">
      <div className="info">
        <h2>Wanneer organiseren wij het festival?</h2>
        <p>Wij organiseren ons festival op 7 en 8 augustus.</p>
        <h2>Waar organiseren wij het festival?</h2>
        <p>Ons adres van ons festivalplein bevindt zich in Kastelsedijk, 2480 Dessel</p>
        <h2>Hoe geraak ik het festivalplein binnen?</h2>
        <p>Bij het aankomen op ons festival is er voor de ingang een plaats voorzien waar je aan moet aanschuiven om je festivalbandje te bemachtigen.</p>
        <h2>Praktische afspraken op het festivalplein</h2>
        <ul>
        <li>Er mag geen drank van de camping naar het festivalplein meegenomen worden. Er wordt altijd bij het binnenkomen van het festivalplein gecontrolleerd of flessen/blikken die je eventueel meehebt.</li>
        <li>Er wordt niet voorgestoken in de rij naar het festivalplein. Als onze medewerkers dit zien kunnen ze jullie helemaal achter de rij zetten</li>
        <li>Er wordt niet gecrowdsurft tijdens een optreden van een artiest</li>
        <li>Een moshpit tijdens een concert mag, let wel op voor de mensen die niet willen meedoen. Heb respect voor de mensen die er rond staan</li>
        </ul>
       
        <h2 className="faq">Andere FAQ</h2>
        <button className="dropbtn"><p>Kan ik met mijn band deelnemen aan dit festival?</p><img class="arrow" src={arrow}></img></button> 
        <p className="dropdown">Je kan met je band meedoen aan ons festival. Er is een speciaal podium voorzien waar we beginnende bands laten spelen om ze te supporten. Stuur een jullie mp3's, mp4's, spotify lijst,.. door naar info@metalfest.be met motivatie waarom jullie op ons podium moeten staan. </p>
        <button className="dropbtn"><p>Kan ik een combiticket kopen zonder camping?</p><img class="arrow" src={arrow}></img></button>
        <p className="dropdown">Nee, onze tickets zijn altijd meegegeven met een campingticket (behalve onze standaard dagticket) dus dit is geen extra kostprijs. Natuurlijk ben je niet verplicht om op onze camping te slapen als je ergens anders  wilt overnachten.</p>
        <button className="dropbtn"><p>Mag ik mijn ticket doorverkopen?</p><img class="arrow" src={arrow}></img></button>
        <p className="dropdown">Dat is toegestaan zolang je de verkoopprijs niet hoger zet dan de aankoopprijs die wij aanbieden. De koper van de ticket(s) moet wel een mail sturen naar info@metalfest.be met de ticket gegevens en persoonlijke gegevens zodat wij die kunnen aanpassen.</p>
        <button className="dropbtn"><p>Ik heb een fake ticket gekocht, wat nu?</p><img class="arrow" src={arrow}></img></button>
        <p className="dropdown">Jammer genoeg kunnen wij daar niks aandoen. De officiële ticketverkoop sites waar wij onze festivaltickets op verkopen is onze officiële site en ticketmaster.</p>
        <button className="dropbtn"><p>Hoe oud moet ik zijn om binnen te mogen op het festival?</p><img class="arrow" src={arrow}></img></button>
        <p className="dropdown">Er is geen minimum leeftijd. Het wordt wel sterk afgeraden om met kleine kinderen te komen</p>
        <button className="dropbtn"><p>Kan ik korting krijgen voor kinderen?</p><img class="arrow" src={arrow}></img></button>
        <p className="dropdown">Nee, er worden geen speciale prijzen gemaakt voor kinderen. Iedereen betaald evenveel voor de ticket die ze willen.</p>
    </div>
    </div>
  );
};

export default InfoList;