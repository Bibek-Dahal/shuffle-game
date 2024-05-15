let shuffeledIndex = 0
let gameStarted = false  
let booyahCount = 0
// console.log('selectedIndex==',shuffeledIndex)

function getRandomInt(max=3) {
    randomNum = Math.floor(Math.random() * max);
    shuffeledIndex = randomNum
    return randomNum
}


function init(){
    getRandomInt()

    if(shuffeledIndex === 0){
        document.querySelector('#first-img').src = './assets/images/ball.jpg'
    }else if(shuffeledIndex === 1){
        document.querySelector('#second-img').src = './assets/images/ball.jpg'
    }else{
        document.querySelector('#third-img').src = './assets/images/ball.jpg'
    }
}
  


window.onload = ()=>{
    // console.log("document loaded")
    init()
}
  
function handleButtonClick(event){
    
    // console.log(event)
    const imgSrc = './assets/images/ball.jpg'
    const output = getRandomInt()
    shuffeledIndex = output
    
    // console.log("shuffeledIndex===",shuffeledIndex)

    let shuffleButton = document.querySelector('#shuffle-btn')
    shuffleButton.disabled = true;
    shuffleButton.innerHTML = `
    
    <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    
    `
    setTimeout(()=>{
        gameStarted = true
        const allImg = document.querySelectorAll('img');
    allImg.forEach(img => {
        img.src = './assets/images/lock.gif'; // Set source to blank
    });

  


    shuffleButton.textContent = 'Shuffle'
    shuffleButton.disabled = false
    
    },1000)
    
  
}

function divClicked(divName){
    
    if (gameStarted == true){

        // console.log('div clicked',divName)
        if(divName === 'first'){

            checkResult(0,shuffeledIndex)
        }else if(divName === 'second'){
            checkResult(1,shuffeledIndex)
        }else{
            checkResult(2,shuffeledIndex)
        }
    }else{

        alert('Oops, game not started!!')
    }


}

function revealImage(actualValue){

    //render actual positon of image
    if(actualValue === 0){
        document.querySelector('#first-img').src = './assets/images/ball.jpg'
    }else if(actualValue === 1){
        document.querySelector('#second-img').src = './assets/images/ball.jpg'
    }else{
        document.querySelector('#third-img').src = './assets/images/ball.jpg'
    }
}


function checkWinner(userSelectedValue,actualValue){
    if(userSelectedValue == actualValue){
        alert('Booyah! You Win')
        booyahCount++
        gameStarted = false
    }else{
        alert('Sorry, You Loose')
        gameStarted = false
    }
}


function checkResult(userSelectedValue,actualValue){

    // console.log("userSelectedValue",userSelectedValue)
    // console.log("actualvalue",actualValue)


    revealImage(actualValue)


    checkWinner(userSelectedValue,actualValue)


    
}