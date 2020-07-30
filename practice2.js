function convert(value,type) {

 if (type =="h") {
    console.log(value*60 + "mins");
   }
else if (type=="m") {
  console.log(value*60 + "sec");  
  }
} 


convert(2,'h');
convert(3,'m');