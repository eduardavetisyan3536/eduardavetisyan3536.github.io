//                                  text

let temp = document.body.children[1];
let tempClass = {
  margin: "20px auto",
  width: "70%",
};

for (const key in tempClass) {
  temp.style[key] = tempClass[key];
}

let mega = document.body.children[1].children[1];
let megaClass = {
  color: "rgb(231,203,70)",
  fontSize: "30px",
  margin: "30px 0",
};
for (const key in megaClass) {
  mega.style[key] = megaClass[key];
}

//                                   img

let img = document.body.children[2];
let imgClass = {
  width: "70%",
  display: "flex",
  flexWrap: "wrap",
  margin: "20px auto",
};
for (const key in imgClass) {
  img.style[key] = imgClass[key];
}
let divs =  document.body.firstElementChild.nextElementSibling.nextElementSibling.children;
for (let i = 0; i <= divs.length; i++) {
  divs[i].style.width = "250px";
  divs[i].style.fontSize = "11px";
  divs[i].style.margin = "10px 50px";
}
