document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector("#counter");
    let seconds = parseInt(counter.innerText,10);
    let minus = document.querySelector("#minus");
    let plus = document.querySelector("#plus");
    let heart = document.querySelector("#heart");
    let pause = document.querySelector("#pause");
    let submit = document.querySelector("#submit");
    let form = document.querySelector("#comment-form")
    var isPaused = false;
    
    function numOfSeconds() {
        seconds = seconds + 1;
        counter.innerText = `${seconds}`;
    };
    
    
    var timer = setInterval(function() {
        if (!isPaused){
            numOfSeconds;
        }
    }, 1000);
  

    
    
    minus.addEventListener("click", function(event) {
        seconds -= 1;
        counter.innerText = `${seconds}`
    });
    
    plus.addEventListener("click", function(event) {
        seconds += 1;
        counter.innerText = `${seconds}`
    });
    
    heart.addEventListener("click", function(event) {
        let existing = document.querySelector("li")
        let likes = document.querySelector(".likes");
        let li = document.createElement('li');
        li.setAttribute("data-num", `${seconds}`);
        li.innerHTML = `${seconds} has been liked <span> 1 </span> time `;
        likes.append(li);
    })
    
    pause.addEventListener("click", function(event) {
        if (pause.innerText == "pause") {
            pause.innerText = "resume";
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            isPaused = true;
        } else if (pause.innerText == "resume") {
            pause.innerText = "pause";    
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            isPaused = false;
        }
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let userInput = document.querySelector("#comment-input").value; 
        let p = document.createElement('p');
        p.innerText = `${userInput}`;
        document.querySelector("#list").append(p)
    })


    
    
    

});