function resetOutput() {
  document.getElementById("output").innerHTML = " ";
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function myFunction() {
  event.preventDefault();
  resetOutput();
  let inputRecipe = document.getElementById("recipe-input").value;
  let bakingRadio = document.getElementById("baking");
  let cookingRadio = document.getElementById("cooking");
  let initialServings = document.getElementById("initial-servings").value;
  let intendedServings = document.getElementById("intended-servings").value;
  let conversionFactor = (intendedServings / initialServings);

  // Array to store each sentence from the recipe
  let sentences = inputRecipe.split('\n');

  if (bakingRadio.checked) {
    resetOutput();
    sentences.forEach(function (sentence, index) {

      let numbers = sentence.match(/\d+/g);

      numbers.forEach(function (number) {
        let originalNumber = parseInt(number, 10);

        //CHANGE DEPENDING ON BAKING OR COOKING
        let calculatedValue = Math.ceil(originalNumber * conversionFactor);
        console.log(Math.ceil(calculatedValue));

        // Replace the original number with the calculated value
        sentence = sentence.replace(number, calculatedValue.toString());

      });

      document.getElementById("output").innerHTML += sentence + "<br>";

    }
    );
    // document.getElementById("output").innerHTML = "Baking Recipe";
  }
  else if (cookingRadio.checked) {
    resetOutput();
    sentences.forEach(function (sentence, index) {

      let numbers = sentence.match(/\d+/g);

      numbers.forEach(function (number) {
        let originalNumber = parseInt(number, 10);

        //CHANGE DEPENDING ON BAKING OR COOKING
        let calculatedValue = Math.floor(originalNumber * conversionFactor);
        console.log(Math.floor(calculatedValue));

        // Replace the original number with the calculated value
        sentence = sentence.replace(number, calculatedValue.toString());

      });

      document.getElementById("output").innerHTML += sentence + "<br>";

    }
    );
    //document.getElementById("output").innerHTML = "Cooking Recipe";
  }
  else {
    document.getElementById("output").innerHTML = "SELECT WHAT TYPE OF RECIPE";
  }

}