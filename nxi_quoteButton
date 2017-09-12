// ==UserScript==
// @name        NextINpact - Citations actu
// @namespace   https://www.nextinpact.com/
// @match       https://www.nextinpact.com/*
// @description Ajoute le bouton de citations dans la barre d'action
// @version     1.0
// @grant       Arcy / arcy-nxi
// ==/UserScript==
console.log("Script NXI - citations chargé");

if(window.addEventListener){
    window.addEventListener('load', createButton, false);
}
else{
    window.attachEvent('onload', createButton);
}

function createButton(){
    var $quoteAction = document.createElement("button");
    $quoteAction.id = "quote_action";
    $quoteAction.title = "Citations";
    $quoteAction.classList.add("icon-quote");
    $quoteAction.classList.add("btn-action-editor"); 
    $quoteAction.innerHTML = "Q";
    $quoteAction.onclick = eventClickButton
    document.getElementById("action_button_post_comment").appendChild($quoteAction);
}

function eventClickButton(){ 
   document.getElementById("textarea_comment").value += "[quote][/quote]"
}
