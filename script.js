let btn=document.getElementById("submitSearch");
let result=document.getElementById("result");
result.style.display="none";

let text=document.getElementById("searchTxt");
btn.addEventListener("click",function(){
console.log(text.value);
result.style.display="block";
result.textContent=text.value;
});