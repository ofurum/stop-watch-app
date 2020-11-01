let timeText = document.querySelector('.timer');
let startBtn = document.querySelector('.btn-start');
let resetBtn = document.querySelector('.btn-reset');
let pauseBtn = document.querySelector('.btn-pause')

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0

let timer;

let startTime = (e) => {
    e.preventDefault();
    console.log('click')

    isCounting = true;

    clearInterval(timer)

     let updateTime = () => {
        ms++
        if(ms == 99) {
            sec++
            ms = 00;
        }
    
         if(sec == 59) {
             min++
             sec = 00;
         }
    
         if(min == 59) {
             hr++;
             min = 00;
         }
    
    
         let hours_text = hr == 00 ? "00" : hr < 10 ? "0" + hr : hr;
         let min_text = min == 00 ? "00" : min < 10 ? "0" + min : min;
         let sec_text = sec == 00 ? "00" : sec < 10 ? "0" + sec : sec;
         let ms_text = ms == 00 ? "00" : ms < 10 ? "0" + ms : ms;
    
         timeText.innerHTML = hours_text + ' : ' + min_text + ' : ' + sec_text + ' : ' + ms_text
     }
   
     timer = setInterval(updateTime, 10);

     
}


let pauseTime = (e) => {
    e.preventDefault();

    clearInterval(timer)
}

let resetTime = (e) => {
    e.preventDefault();
     
    clearInterval(timer)
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    timeText.innerHTML = "00 : 00 : 00 : 00"
}


startBtn.addEventListener('click', startTime);

pauseBtn.addEventListener('click', pauseTime);

resetBtn.addEventListener('click', resetTime)