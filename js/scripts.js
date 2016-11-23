$(document).ready(function(){
  var sentence =  prompt("Enter a sentence");
  sentence;
  var stringLength = sentence.length;
  var firstChar = sentence.charAt(0).toUpperCase();
  var lastChar = sentence.charAt(stringLength - 1).toUpperCase();
  var newString = firstChar + lastChar;
  alert(newString);
  function reverse(newString){
    return newString.split("").reverse().join("");
  };
  alert(reverse(newString));
  var final = sentence+newString;
  alert(final);
  function character(){
    var index= stringLength/2;
    var last = sentence.charAt(index);
     var encoded = last + final;
    return encoded;

};
  alert(character());

  $("h1").click(function() {
  alert(sentence);
  });

$("h2").click(function() {
  alert(encoded);
});
});
