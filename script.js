// function getBrowserName(userAgent) {
//   // The order matters here, and this may report false positives for unlisted browsers.

//   if (userAgent.includes("Firefox")) {
//     // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
//     return "Mozilla Firefox";
//   } else if (userAgent.includes("SamsungBrowser")) {
//     // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
//     return "Samsung Internet";
//   } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
//     // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
//     return "Opera";
//   } else if (userAgent.includes("Edge")) {
//     // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
//     return "Microsoft Edge (Legacy)";
//   } else if (userAgent.includes("Edg")) {
//     // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
//     return "Microsoft Edge (Chromium)";
//   } else if (userAgent.includes("Chrome")) {
//     // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
//     return "Google Chrome or Chromium";
//   } else if (userAgent.includes("Safari")) {
//     // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
//     return "Apple Safari";
//   }
//   return "unknown";
// }

// const browserName = getBrowserName(navigator.userAgent);
// alert(`You are using: ${browserName}`);




// setInterval(()=> {
//       console.log("interval")
// }, 3000)
// setTimeout(()=> {
//       console.log("interval")
// }, 3000)






// //موقعیت مکانی
// navigator.geolocation.getCurrentPosition((p)=>{
//   console.log(`${p.coords.latitude},${p.coords.longitude}`)
// })


// let listItems = document.getElementsByClassName("to-do-item");


// Array.from(listItems).forEach(element => { 
//   console.log(element);
// });

let att = document.createAttribute("target")

att.value = "_blank"

att

document.getElementById("ref-link").setAttributeNode(att)

document.querySelector("#main-title").style = "color:green"
document.querySelector("#main-title").style = "color:green;background-color:blue"

// ---------------------------------------------------------
//نکته remove
// let lists =document.getElementById("to-do-list")

// undefined
// lists
// <ul id=​"to-do-list">​…​</ul>​
// let classes = document.getElementsByClassName("title")

// undefined
// classes

// HTMLCollection(4) [h2.title, h2#main-title.title, h2#main-title.title, h2.title, main-title: h2#main-title.title]
// let classes1 = document.getElementsByClassName("to-do-item")

// undefined
// classes1

// HTMLCollection(4) [li.to-do-item, li.to-do-item, li.to-do-item, li.to-do-item]
// let classes1 = document.getElementsByClassName("to-do-item")[1].remove()
// -----------------------------------------------------------------------


document.querySelector("#main-title").addEventListener("animationstart", (e)=>{console.log("start" , e)} )
document.querySelector("#main-title").addEventListener("animationend", (e)=>{console.log("end" , e)} )