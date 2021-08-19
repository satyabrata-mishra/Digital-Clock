let a,time,date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    date =a.toLocaleDateString();
    document.getElementById('tim').innerHTML = time+" on "+date;
}, 1000);
