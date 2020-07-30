function footballpoints(win,loss,draw) {
    
    console.log(win*3+loss*0+draw*1);
}

footballpoints(80,2,4);


function convert(value,type) {
    if (type=="hour") {
        console.log(value*60 + "min");
    }
    else if (type=="min") {
        console.log(value*60 + "sec");
    }
}

convert(2,"hour");
convert(6,"min");