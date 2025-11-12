function submit_scores() {
  // Initialize the scores to zero
  const cstScores = [0, 0, 0, 0, 0, 0];
  const maxCstScores = [0, 0, 0, 0, 0, 0];

  /*
  F: Family and Community
  R: Rights and Responsibilities
  P: Protection for the Poor
  S: Solidarity
  C: Care for the Earth
  W: Workers Rights
  */
  const keys = ['F', 'R', 'P', 'S', 'C', 'W']

  const inputs = document.querySelectorAll('#quiz input');

  inputs.forEach(input => {
    // Get the users input to the question
    var sliderVal = input.value;

    // Get the questions ID
    var questionId = input.id;

    // The best slider answer the user can give is not always 0 or 10
    var bestAnswer = questionId.split('-')[0];

    // The catagories this question hits
    var catagories = questionId.split('-')[1];

    // Sum the scores of the user and calculate the max score
    for (let i=0; i<6; i++) {
      if (catagories.includes(keys[i])) {
        cstScores[i] += 100-Math.abs(bestAnswer - sliderVal);
        maxCstScores[i] += 100;
      }
    }


  });

  localStorage.setItem("cstScores", JSON.stringify(cstScores));
  localStorage.setItem("maxCstScores", JSON.stringify(maxCstScores));

  window.location.href = "scores.html";
}