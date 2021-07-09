let mainContainer = document.querySelector(".container");
let numCorrect = 0;

fetch("mcqs.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    function createQuesCard(i) {
      let flag = 0;
      let qCard = document.createElement("div");
      let question = document.createElement("div");
      let options = document.createElement("div");
      let option1 = document.createElement("div");
      let option2 = document.createElement("div");
      let option3 = document.createElement("div");
      let option4 = document.createElement("div");

      qCard.classList.add("question-card");
      question.classList.add("question");
      options.classList.add("options");
      option1.classList.add("option");
      option2.classList.add("option");
      option3.classList.add("option");
      option4.classList.add("option");

      mainContainer.append(qCard);
      qCard.append(question);
      qCard.append(options);
      options.append(option1);
      options.append(option2);
      options.append(option3);
      options.append(option4);

      question.innerHTML = json[i].question;
      option1.innerHTML = json[i].a;
      option2.innerHTML = json[i].b;
      option3.innerHTML = json[i].c;
      option4.innerHTML = json[i].d;

      function check() {
        qCard.classList.toggle("show");
        if (flag === 0) {
          if (json[i][json[i].answer] === this.innerHTML) {
            numCorrect++;
            this.classList.add("correct");
          } else {
            this.classList.add("wrong");
          }
          flag = 1;
          setTimeout(() => {
            qCard.remove();
            i++;
            if (i < 10) createQuesCard(i);
            else showresult();
            flag = 0;
          }, 1000);
        }
      }

      function showresult() {
        let resultCard = document.createElement("div");
        resultCard.classList.add("result-card");
        mainContainer.append(resultCard);
        let correct = document.createElement("div");
        correct.classList.add("correct-ques");
        resultCard.append(correct);
        correct.innerHTML = "Total Score: " + numCorrect;
        let accuracy = document.createElement("div");
        accuracy.classList.add("correct-ques");
        resultCard.append(accuracy);
        accuracy.innerHTML =
          "Accuracy: " + (numCorrect / json.length) * 100 + "%";
      }

      option1.addEventListener("click", check);
      option2.addEventListener("click", check);
      option3.addEventListener("click", check);
      option4.addEventListener("click", check);
    }
    createQuesCard(0);
  });
