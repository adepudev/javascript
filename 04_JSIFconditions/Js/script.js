//ifelseif

var exp = 2;

if (exp <= 1) {

    console.log("Fresher");
} else if (exp > 1 && exp <= 3) {

    console.log("Junior Developer")
}
else if (exp > 4 && exp <= 6) {
    console.log("COnsultant")
} else if (exp >= 7 && exp <= 9) {
    console.log("Projetc Lead")
}
else if (exp >= 10 && exp <= 12) {
    console.log("Senior Project lead")
}
else {
    console.log(" Get a Job")
}


var Marks=45;
if(Marks<34){
    console.log("Fail")

}
else if(Marks>=35 && Marks<50)
{
    console.log("Third Class")

}
else if(Marks>=51 && Marks<=70){
    console.log("Second class")

}
else if(Marks>71 && Marks<100){
    console.log("First Class")
}
else{
    console.log("Invalid Marks.")
}

//LadderIF

var a=4;
if(a>=0 && a<=9){
    console.log("Children")
}
if(a>=10 && a<=30){
    console.log("Youth")
}
if(a>=31 && a<=50){
    console.log("Adults")
}
if(a>=51 && a<=70){
    console.log("Aged");
}

// NestedIF/

var b=15;
if(b>10){
    console.log("u r Children")
    if(b>20){
        console.log("u r Youth");
        if(b>30){
            if(b>40){
                console.log("You are Adult");
            }
        }
    }
}