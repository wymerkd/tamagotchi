import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';


function updateStatus(player){
  setInterval(() => {
    $("#yourPetHunger").text(player.foodLevel);
    if (player.foodLevel === 9) {
      $("#hideMe").hide();
    }
  }, 50);
}


$(document).ready(function(){
  let player = new Tamagotchi();
  $("#namePage").submit(function(event){
    event.preventDefault();
    player.name = $("input#petName").val();
    let food = player.foodLevel;
    player.setHunger();
    $("#namePage").hide();
    $("#playCard").show();
    $("#yourPetName").text(player.name);
    $("#yourPetHunger").text(food);
    updateStatus(player);


    $("#feed").click(function(){
      player.feed();
      console.log(player);
    });

    $("button#restart").click(function(){
      location.reload();
    });
  });
});
