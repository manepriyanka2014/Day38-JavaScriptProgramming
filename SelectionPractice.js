//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let a=Math.floor(Math.random()*900+100);
let b=Math.floor(Math.random()*900+100);
let c=Math.floor(Math.random()*900+100);
let d=Math.floor(Math.random()*900+100);
let f=Math.floor(Math.random()*900+100);
console.log("Random values are  :"+a+" " +b +" "+c+" "+d+" "+f);
if (a>b && a>c && a>d && a>f)
{
    console.log("Maximum Value :"+ a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log("Maximum Value :"+b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log("Maximum Value :"+c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log("Maximum Value :"+d);
}
else
{
    console.log("Maximum Value :"+f);
}


if (a<b && a<c && a<d && a<f)
{
    console.log("Minimum Value :"+ a);
}
else if (b<a && b<c && b<d && b<f)
{
    console.log("Minimum Value :"+b);
}
else if (c<a && c<b && c<d && c<f)
{
    console.log("Minimum Value :"+c);
}
else if (d<a && d<c && d<b && d<f)
{
    console.log("Minimum Value :"+d);
}
else
{
    console.log("Minimum Value :"+f);
}