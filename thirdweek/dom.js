// console.log(document)

// let car={
// model:"mazda",
//     colour: "black",
//    type:850

// }

// console.log(car)
//to be able to identify different elements within the object we shall use
// document.getElementsByTagName// example of a tag is h1, h2 ,h3,body
// document.getElementById
// document.querySelector// works like css when capturing the class use a (.) but id use (#)
// document.querySelectorAll

const allHeadings = document.getElementsByTagName("h1")

console.log(allHeadings)
console.log(allHeadings.length)


for (i=0;i<allHeadings.length;i++){
console.log(allHeadings[i])
}

//const firstheadings=document.getElementById("first")

const  firstHeading=document.querySelector(".heading")



