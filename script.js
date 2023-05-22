setInterval(() => {
    d =new Date()
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()
    hrotation = 30*htime + mtime/2
    mrotation = 6*mtime + stime /10
    srotation = 6*stime
    day_night = "AM";

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    if (htime > 12) {
        htime = htime - 12;
        day_night = "PM";       
    }
    if (htime < 10) {
        htime = "0" + htime;        
    }
    if (mtime < 10) {
        mtime = "0" + mtime;        
    }
    if (stime < 10) {
        stime = "0" + stime;        
    }
    

    time.textContent = htime+ ":" + mtime + ":" + stime + " " + day_night
    
}, 1000);