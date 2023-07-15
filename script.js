function volume_sphere() {
    //Write your code here
  let r=document.getElementById("radius").value;
  let v=(4/3)*3.14*r*r*r;
  let vb=document.getElementById("volume");
  vb.innerText=v;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
