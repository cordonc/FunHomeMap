$("#prologue").html("<p>The text of the Prologue will go here.</p>");
//1. Set the content of the # glosses.
$("#glosses").html("<p>The glosses will go here.</p>");

// 2. Set the content of #prologue.

$.getJSON("https://the-javascripting-english-major.org/v1/prologue.json", function(data){ // Note the data variable!
  let prologueText; // Define the variable you didn’t need before.
  prologueText = "<blockquote><p>"; // Open the tags.
  // Now you can iterate over the data variable’s .lines property:
  data.lines.forEach(function(line){ // We get a variable, line.
    // Define a blank lineText.
    let lineText;
    lineText = "";
    // Now iterate over each line. This part should be familiar.
    line.forEach(function(word){
      let wordString;
      wordString = word.text;
      if (word.modern){
        wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    // Add lineText with a line break to the prologueText.
    prologueText = prologueText + lineText + "<br/>";
  });
  // Close the prologueText tags.
  prologueText = prologueText + "</p></blockquote>";
  // Replace the content of #prologue.
  $("#prologue").html(prologueText);
}); // Close the callback function & method.


// 3. Wait around for the user to click on the <a> tag inside # prologue and then change the content of the #glosses.

$("#prologue a ").click(function(){
    // Define th text and the word that was clicked.
    let glossText, clickedWord, modernWord;
    clickedWord = $( this ).text();
    // .data("modern") looks for the data-modern HTML attribute.
    modernWord = $( this ).data("modern");
    glossText = "<h2>You clicked " + clickedWord + ", which means " + modernWord + "</h2>";
    $("#glosses").html(glossText);
}); 
