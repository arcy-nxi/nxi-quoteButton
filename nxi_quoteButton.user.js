// ==UserScript==
// @name        NextINpact - Citations actu
// @namespace   https://www.nextinpact.com/
// @match       https://www.nextinpact.com/*
// @description Ajoute le bouton de citations dans la barre d'action
// @version     1.0.1
// @grant       Arcy / arcy-nxi
// ==/UserScript==

console.log("Script NXI - citations 1.0.1 chargé");

var isLoaded = false;

// évenement "load" -> si le navigateur charge l'article ET les commentaires en même temps (avant l'exécution de ce script)
// évènement "onscroll" -> si le navigateur charge le script avant les commentaires
if(window.addEventListener){
    window.addEventListener('load', createButton, false);
    window.addEventListener('scroll', createButton, false);
}
else{
    window.attachEvent('onload', createButton);
    window.attachEvent('onscroll', createButton);
}

function createButton(){
    if (document.getElementById("global_comment") != null && !isLoaded){
        isLoaded = true;
        
        var $quoteAction = document.createElement("button");
        $quoteAction.id = "quote_action";
        $quoteAction.title = "Citations";
        $quoteAction.classList.add("icon-quote");
        $quoteAction.classList.add("btn-action-editor"); 
        $quoteAction.innerHTML = "Q";
        $quoteAction.onclick = eventClickButton;
        
        document.getElementById("action_button_post_comment").appendChild($quoteAction);
    }
}

function eventClickButton(){ 
   document.getElementById("textarea_comment").value += "[quote][/quote]";
}
