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

    player.setPopUp();

    $("button.restart").click(function(){
      location.reload();
    });
  });
});
