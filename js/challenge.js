document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector("#counter");
    let seconds = parseInt(counter.innerText,10);
    let minus = document.querySelector("#minus");
    let plus = document.querySelector("#plus");
    let heart = documnet.querySelector("#heart");
    
    function numOfSeconds() {
        counter.innerText = `${seconds+=1}`;

        
    };
    
    const cancel = setInterval(numOfSeconds, 1000);
    
    minus.addEventListener("click", function(event){
        seconds -= 1;
        counter.innerText = `${seconds}`
    });
    
    plus.addEventListener("click", function(event){
        seconds += 1;
        counter.innerText = `${seconds}`
    })

    heart.addEventListener("click", function(event) {
        let existing = document.querySelector("li")
        
        let likes = document.querySelector(".likes");
        let liked = 0
        let li = document.createElement('li');
        li.setAttribute("data-num": `${seconds}`);
        li.innerHTML = `${seconds} has been liked `
    })



    


    
    
    

});