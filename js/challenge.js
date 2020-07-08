document.addEventListener("DOMContentLoaded", () => {

  let counter = document.querySelector("#counter")

  let count = setInterval(function () {
    counter.innerText++;
  }, 1000);

  let minus = document.getElementById("minus")
  let plus = document.getElementById("plus")
  let love = document.getElementById("heart")
  let pause = document.getElementById("pause")
  let likes = document.querySelector(".likes")

  let submitBtn = document.querySelector("#submit")
  let commentList = document.querySelector("#list")

  minus.addEventListener("click", function(e) {
    counter.innerText--;
  });

  plus.addEventListener("click", function(e) {
    counter.innerText++;
  });

  pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause") {
        pause.innerText = "resume"
        clearInterval(count)

        plus.disabled = true;
        minus.disabled = true;
        love.disabled = true;
        submitBtn.disabled = true;
    }
    else {
      counter.innerText++;
    }, 1000);
    pause.innerText = "pause"

    plus.disabled = false;
    minus.disabled = false;
    love.disabled = false;
    submitBtn.disabled = false;
    }
  });

  heart.addEventListener("click", function(e) {
    if (obj) {
      obj.children[0].innerText++
    }
    else {
      likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    }
  });

  submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let coment = document.querySelector("#comment-form > input[type=text]").value
    comment.innerHTML += `<li>${comment}</li>`
  });

});