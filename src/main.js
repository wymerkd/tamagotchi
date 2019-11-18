import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $("#namePage").submit(function(event){
    event.preventDefault();
    let playerName = $("input#petName").val();
    let player = new Tamagotchi(playerName);
    $("#namePage").hide();
    $("#playCard").show();
    console.log(player);
    console.log(this.foodLevel);
  });
  $("#playCard").click(function(){
    alert("cool");
  });

});
