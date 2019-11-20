import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  let player = new Tamagotchi();
  $("#namePage").submit(function(event){
    event.preventDefault();
    player.name = $("input#petName").val();

    let food = player.foodLevel;
    try {
      if (player.name === "") {
        throw Error("Need a name")
      }else {
        player.setHunger();
        player.updateStatus();
        $("#namePage").hide();
        $("#playCard").show();
        $(".yourPetName").text(player.name);
        $("#yourPetHunger").text(food);
        console.log(player);
      }
    } catch (error) {
      $("#hideMe").hide();
      $("#error").show();
    }
    $("#feed").click(function(){
      player.feed();
      console.log(player);

    });
    let request = new XMLHttpRequest();
    let randomNumber = Math.floor(Math.random() * (200 - 1) + 1);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('#showWeedle').attr("src", response.sprites.front_shiny);
      console.log("here");
    }
  });

  player.setPopUp();

  $("button.restart").click(function(){
    location.reload();
  });
});
