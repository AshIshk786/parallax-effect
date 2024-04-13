const box =document.querySelector('.detail')
let mount2=document.querySelector("#mount2");
let mount1=document.querySelector("#mount1");
let bush2=document.querySelector("#bush1");
let bush1=document.querySelector("#bush2");
const leaf1=document.querySelector('.leaf1');
let leaf2=document.querySelector("#leaf2");

document.addEventListener("scroll", function()
{
    let value=window.scrollY;
    console.log(value);


    box.style.marginTop=value + 'px';
    leaf1.style.marginLeft=-value + 'px';
    leaf2.style.marginLeft=value + 'px';
    bush1.style.marginBottom=value*1.2 + 'px';
    bush2.style.marginLeft=value + 'px';
    // mount1.style.marginLeft=value + 'px';
    mount2.style.marginLeft=value + 'px';
})