// const a=["nisar","nandha","bharath"]
// document.write(a)
// document.write("<br>")
// document.write(a.length)
// document.write("<br>")
// document.write(a[1])
// document.write("<br>")
// a[2]="bharathvaj"
// document.write(a)
// document.write("<br>")
// a.push("bagavan","Saai")
// document.write(a)
// document.write("<br>")
// a.pop()
// document.write(a)
// document.write("<br>")
// a.shift()
// document.write(a)
// document.write("<br>")
// a.unshift("nizar")
// document.write(a)
// document.write("<br>")
// delete a
// document.write(a)
// document.write("<br>")
// a.splice(1,0,"bharathvaj","saai")
// document.write(a)
// document.write("<br>")
// const emps=a.slice(1,4)
// document.write(emps)
// document.write("<br>")
// const empss=a.concat(emps)
// document.write(empss)
// document.write("<br>")
// document.write(empss.length)

// const car={
//     brand:"Hundai",
//     model:"i20",
//     color:"red",
//     price:"1000000"
// }
// car.mdr="sedan"
// document.write(car.mdr)

// var str="     Welcome to kaashiv infotech webtech program  "
// document.write(str)
// document.write("<br>")
// document.write(str.length)
// document.write("<br>")
// document.write(str.replace("kaashiv","nizar"))
// document.write("<br>")
// document.write(str.lastIndexOf("e"))
// document.write("<br>")
// document.write(str.match(/tech/g))
// document.write("<br>")
// document.write(str.charAt(18))
// document.write("<br>")
// document.write(str.charCodeAt(19))
// document.write("<br>")
// document.write(str.slice(11,18))
// document.write("<br>")
// document.write(str.substring(11,28))
// document.write("<br>")
// document.write(str.concat(" abc"))
// document.write("<br>")
// const words=str.split(" ")
// document.write(words[5])
// document.write("<br>")
// document.write(str.search("kaashiv"))
// document.write("<br>")
// var a=str.trim()
// document.write(a.length)
// document.write("<br>")
// var car="Volvo"
// add()

// function add(){
//     document.write(typeof car)
// }
// var i=8
// do{
//     document.write("The Number is "+i+"<br>")
//     i++
// }while(i<10)

const a=["nisar","nandha","bharath","saai","bagavan"]

// for(var i=0; i<a.length;i++){
//     document.write("The employee name is "+a[i]+"<br>")
// }

// a.forEach(b => {
//     document.write("The employee name is "+b+"<br>")
// });
// for (const b of a) {
//     document.write("The employee name is "+b+"<br>")
// }

// document.write(Math.round(1.4))
// document.write(Math.ceil(1.4))
// document.write(Math.floor(1.9))
// document.write(Math.trunc(1.4))
// document.write(Math.trunc(Math.random()*100))

// document.write(new Date())
// document.write(new Date().getDate())
// document.write(new Date().getDay())
// document.write(new Date().getMonth())

var d=new Date().getDay()

// if(d<12){
//     document.write("Good Morning")
// }
// else if(d<16){
//     document.write("Good Afternoon")
// }
// else if(d<19){
//     document.write("Good Evening")
// }
// else{
//     document.write("Good Night")
// }

switch(d){
    case 0:
        day="Sunday"
        break;
    case 1:
        day="Monday"
        break;
    case 2:
        day="Tuesday"
        break;
    case 3:
        day="Wednesday"
        break;
    default:
        day="Not sunday,monday tuseday and wednesday"
}

document.write("Today is "+day)








