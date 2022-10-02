var btntranslate = document.querySelector("#button");
var textinputer  = document.querySelector("#textinput");
var textoutputer = document.querySelector("#output");

var serverURl = "https://api.funtranslations.com/translate/groot.json"

function gettranslatedurl(input){
     return serverURl + "?" + "text=" +input

}

function errorHandler(error){

   console.log("error occured" ,error.code)
  //  alert("wrong")
}

function clickhandler() {
    var inputtext = textinputer.value;
  fetch(gettranslatedurl(inputtext))
  .then(response=> response.json())
  .then(json => {
      var translatedtext = json.contents.translated;
      textoutputer.innerText= translatedtext;})
  .catch(errorHandler) 
};
btntranslate.addEventListener("click" , clickhandler)
