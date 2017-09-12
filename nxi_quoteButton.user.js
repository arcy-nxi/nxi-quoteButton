// ==UserScript==
// @name        NextINpact - Citations actu
// @namespace   https://www.nextinpact.com/
// @match       https://www.nextinpact.com/*
// @description Ajoute le bouton de citations dans la barre d'action. Dev/test sous FF 55.0.3
// @version     1.0.2
// @grant       Arcy / arcy-nxi
// ==/UserScript==

var isLoaded = false;

const quoteOpened = "[quote]";
const quoteClosed = "[/quote]";
const buttonText = "[Q]";
const version = "1.0.2";

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

// créer le bouton "Q" (Quote)
function createButton(){
    // ajoute le bouton une seule fois
    if (document.getElementById("global_comment") != null && !isLoaded){
        isLoaded = true;
        
        var quoteAction = document.createElement("button");
        quoteAction.id = "quote_action";
        quoteAction.title = "Citations";
        quoteAction.classList.add("icon-quote");
        quoteAction.classList.add("btn-action-editor"); 
        quoteAction.innerHTML = buttonText;
        quoteAction.onclick = eventClickButton;
        
        document.getElementById("action_button_post_comment").appendChild(quoteAction);
    }
}

// créer la balise [QUOTE]
function eventClickButton(){   
    var str = document.getElementById('textarea_comment').value;
    
    // emplacement du curseur / de la sélection
    var selStart = document.getElementById('textarea_comment').selectionStart;
    var selEnd = document.getElementById('textarea_comment').selectionEnd;
    var strLength = document.getElementById('textarea_comment').value.length;
    
    var strStart = str.substring(0, selStart);
    var strSelected = str.substring(selStart, selEnd);
    var strEnd = str.substring(selEnd, strLength);
    
    document.getElementById('textarea_comment').value = strStart + quoteOpened + strSelected + quoteClosed + strEnd;
    
    // donne le focus à la zone de commentaire
    // dans le cas où aucun texte était sélectionné, on place le curseur entre les balises
    if (strSelected == "") {
        var curs = selStart + quoteOpened.length;
        document.getElementById('textarea_comment').selectionStart = curs;
        document.getElementById('textarea_comment').selectionEnd = curs;
    }
    
    document.getElementById('textarea_comment').focus();
}

console.log("Script NXI - citations " + version + " chargé");
