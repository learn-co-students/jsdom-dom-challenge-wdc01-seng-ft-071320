document.addEventListener("DOMContentLoaded",() =>{
    let isPaused = false;

    function timer(){
        setInterval(function(){
            if(!isPaused){
            let counter = document.querySelector("#counter").innerHTML;
            let int_counter = parseInt(counter);
            document.querySelector("#counter").innerHTML = int_counter += 1;
            }
        }, 1000);
    }

    function removeLikes(){
        counter = 0; 
        let child = document.querySelector('#each-like')
        document.querySelector('.likes').removeChild(child)
    }
    timer()

    document.querySelector("#pause").addEventListener("click", function(event){
        if (document.querySelector("#pause").innerText == "pause"){
            isPaused = true;
            document.getElementById("minus").disabled = true;
            document.querySelector('#pause').innerText = "resume" 
        }
        else {
            isPaused = false;
            document.getElementById("minus").disabled = false;
            document.querySelector('#pause').innerText = "pause" 
        }
        removeLikes()
    })

    // document.querySelector("#resume").addEventListener("click", function(event){
    //     isPaused = false;
    //     timer();

        //document.querySelector('#resume').id = "pause"
        //document.querySelector('#pause').innerText = "pause"
    //})

    document.querySelector("#plus").addEventListener("click", function(event){
        let counter = document.querySelector("#counter").innerHTML;
        let int_counter = parseInt(counter);
        document.querySelector("#counter").innerHTML = int_counter += 1;

        removeLikes();
    })

    document.querySelector("#minus").addEventListener("click", function(event){
        let counter = document.querySelector("#counter").innerHTML;
        let int_count = parseInt(counter);
        document.querySelector("#counter").innerHTML = int_count -= 1;

        removeLikes();
    })
    let counter = 0;

    document.querySelector('#heart').addEventListener("click", function(event){
        counter += 1;
        if (counter == 1){
            let child = document.createElement("LI")
            child.id = "each-like"
            child.innerText = `${counter} likes`
            document.querySelector('.likes').appendChild(child)
        } 
        else {
            document.querySelector('#each-like').innerText = `${counter} likes`
        }
    })

    document.querySelector("#submit").addEventListener("click", function(event){
        event.preventDefault()
        let userInput = document.querySelector("#comment-input").value
        let ul = document.createElement("UL")
        let li = document.createElement("LI")
        li.innerText = `${userInput}`
        document.body.append(ul)
        ul.appendChild(li)
    })
}
)