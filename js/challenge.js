document.addEventListener("DOMContentLoaded", function() {
    
    let counter = document.getElementById("counter")
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let pause = document.getElementById("pause")
    


    var interval 
    go()

    function go(){
    interval = setInterval(increment,1000);
    }
   
    function increment(){

        let new_count = parseInt(counter.innerText, 10)
        
        new_count = new_count + 1;
        counter.innerText = new_count
    }

    
    
    pause.addEventListener("click", function()
    {
       
    

        if (pause.innerText == "pause") {
        clearInterval(interval)
        pause.innerText = "resume"
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        }
        else    {

            go()
            pause.innerText = "pause"
            plus.disabled = false
             minus.disabled = false
             heart.disabled = false
        }
        
    })



    minus.addEventListener("click", function(){

        let new_count = parseInt(counter.innerText, 10)
        counter.innerText = new_count - 1
    
    })

    
    plus.addEventListener("click", function(){

        let new_count = parseInt(counter.innerText, 10)
        counter.innerText = new_count + 1
    
    })




    let ul = document.querySelector("ul.likes")
    let amount_of_like = 0

    heart.addEventListener("click", function(){
      
        
      
      
        let new_amount = amount_of_like + 1
        
        let li = document.createElement("li")

        li.textContent = `${counter.innerText} : ${new_amount} likes`
        


        ul.append(li)
    
        
    })









    let form = document.getElementById("comment-form")
    let text = document.getElementById("comment-input")
    let div = document.querySelector("div#list")
    let ulLikes = document.createElement("ul")

    form.addEventListener("submit", function(){
        event.preventDefault()
        let li = document.createElement("li")
        li.innerText = text.value
        ulLikes.append(li)
        div.append(ulLikes)
        event.target.reset()
        
    })





      


  });