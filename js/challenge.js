let counter = document.querySelector("h1#counter")
let timer = setInterval(increaseSec, 1000)
let x = parseInt(counter.innerText)
let isPaused = false

function increaseSec() {
    // if (!isPaused)
   { x++
    counter.innerText = x
   }
}

let btnMin = document.querySelector("button#minus")
btnMin.addEventListener("click", function(event){
    let newValue = parseInt(counter.innerText)
    newValue = newValue - 1
    counter.innerText = newValue
    console.log("clicked minus")
})

let btnPlus = document.querySelector("button#plus")
btnPlus.addEventListener("click", function(event){
    let newValue = parseInt(counter.innerText)
    newValue = newValue + 1
    counter.innerText = newValue
    console.log("clicked plus")
})

let btnHeart = document.querySelector("button#heart")
let ul = document.querySelector('ul.likes')
let incr = 0
btnHeart.addEventListener("click", heartFunc)

function heartFunc(){

    incr = incr + 1
    num = counter.innerText
    let li = document.createElement('li')
    
    if (ul.innerText.includes(num))
        {
            li.innerText =  `${counter.innerText} - ${incr} likes`
            ul.append(li)
        }
    else
        {   
            incr = 1
            li.innerText =  `${counter.innerText} - ${incr} likes`
            ul.append(li)
        }
    console.log("Liked!")
}


let btnPause = document.querySelector("button#pause")
btnPause.addEventListener("click", pauseFunc)

function pauseFunc(){
    
    if (btnPause.innerText === "pause")
    {   
        btnPause.innerText = "resume"
        x = parseInt(counter.innerText)
        // isPaused = true
        clearInterval(timer)
        document.querySelector("button#minus").disabled = true
        document.querySelector("button#plus").disabled = true
        document.querySelector("button#heart").disabled = true
    }
    
    else if (btnPause.innerText === "resume")
    {
        btnPause.innerText = "pause"
        // isPaused = false
        x = parseInt(counter.innerText)
        debugger
        timer = setInterval(increaseSec, 1000)
        document.querySelector("button#minus").disabled = false
        document.querySelector("button#plus").disabled = false
        document.querySelector("button#heart").disabled = false
    }

}

let form = document.querySelector("form#comment-form")
let divList = document.querySelector("div#list")
form.addEventListener("submit", function(event){

    event.preventDefault()
    let input = document.querySelector("input")
    let pTag = document.createElement('p')
    pTag.innerText = input.value
    divList.append(pTag)

})


// previous way to like counter
// let btnHeart = document.querySelector("button#heart")
// let ul = document.querySelector('ul.likes')
// let incr = 0
// btnHeart.addEventListener("click", function(event){
//     incr = incr + 1
//     ul.innerText = incr
//     console.log("Liked!")
// })