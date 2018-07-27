
function bold(){
	if (document.querySelector("#texte").style.fontWeight!="900"){
	document.querySelector("#texte").style.fontWeight="900"
} else 
	document.querySelector("#texte").style.fontWeight="400"
}

function italic(){
	if (document.querySelector("#texte").style.fontStyle=="normal") {
		document.querySelector("#texte").style.fontStyle="italic"
	} else
	document.querySelector("#texte").style.fontStyle="normal"
}
function underline(){
	if (document.querySelector("#texte").style.textDecoration=="") {
	    document.querySelector("#texte").style.textDecoration="underline"
    } else
    document.querySelector("#texte").style.textDecoration=""
}
function police(){
	document.querySelector("#texte").style.fontFamily=document.querySelector("#police").value
}
function taille(){
	document.querySelector("#texte").style.fontSize=document.querySelector("#taille").value
}
