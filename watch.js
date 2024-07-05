
const time = {
    ms:0,
    s:0,
    m:0,
    h:0
}

let stat = 0;

const set_status =(val)=>{
    stat = val;
}

const run = ()=>{
    time.ms++;
    if(time.ms===100){
        time.s++;
        time.ms=0;
    }
    if(time.s===60){
        time.m++;
        time.s=0;
    }
    if(time.m===60){
        time.h++;
        time.m=0;
    }

    load(time.ms, time.s, time.m, time.h);
}

let intervalId ;

const start=()=>{
    run();
    set_status(1);
    bttn_disable(1)
    intervalId  = setInterval(run, 10)
}

const stop =()=>{
    clearInterval(intervalId);
}

const reset = ()=>{
    set_status(0);
    clearInterval(intervalId);
    load(0,0,0,0);
    bttn_disable(0);
}

const bttn_disable=(stat)=>{
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");

    if(stat==0){
        start.classList.remove("hidden");
        start.classList.add("enable");

        stop.classList.remove("enable")
        reset.classList.remove("enable")

        stop.classList.add("hidden");
        reset.classList.add("hidden");
    }

    if(stat==1){
        start.classList.remove("enable");
        start.classList.add("hidden");
;

        stop.classList.remove("hidden")
        reset.classList.remove("hidden")

        stop.classList.add("enable");
        reset.classList.add("enable");
        console.log(stop.classList)
    }
}




const load =(ms, s, m ,h)=>{
    const milli = document.getElementById("milli");
    const seconds = document.getElementById("seconds");
    const minute = document.getElementById("minute");
    const hour = document.getElementById("hour");

    
    (ms> 10)? milli.innerText=ms: milli.innerText="0 : "+ms;
    (s> 10)? seconds.innerText=s: seconds.innerText="0 : "+s;
    (m> 10)? minute.innerText=m: minute.innerText="0 : "+m;
    (h> 10)? hour.innerText=h: hour.innerText="0 : "+h;

    time.ms = ms;
    time.s = s;
    time.m = m;
    time.h = h;

}
