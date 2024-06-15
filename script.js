let radius;
const PI=3.147;
let circumference;

document.getElementById('button').onclick= function(){
    radius=document.getElementById('input').value ;
    radius= Number(radius);
    circumference= radius * PI * 2;
    document.getElementById('result').textContent= `The Circumference is : ${circumference}` + "cm";
    document.getElementById('H1').textContent = "Circumference Of A Circle!";
}