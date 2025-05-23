// JavaScript

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    document.querySelectorAll(".answer").forEach((el) => {
      if (el !== answer) {
        el.style.display = "none";
      }
    });
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
