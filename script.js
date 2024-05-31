let fname = document.querySelector(".name");
// let lname = document.querySelector(".lname");
let country = document.querySelector(".country");
let score = document.querySelector(".score");
let submit = document.querySelector(".btn");
let clear = document.querySelector(".btn1");
let red = document.querySelector(".btn2");
let main = document.querySelector(".lb");

submit.addEventListener("click", ()=>{
    if(fname.value === "" || country.value === "" || score.value === "") {
        alert("Please Fill All Required Fields");
    } else {
    let addfn = document.createElement("div");
    let adddt = document.createElement("div");
    let adddn = document.createElement("div");
    let addcn = document.createElement("div");
    let addsc = document.createElement("div");
    let addrk = document.createElement("div");
    let add = document.createElement("div");

    add.classList = "add1";
    add.style.width = "90%";
    add.style.height = "15%";
    // add.style.border = "2px solid black";
    add.style.backgroundColor = "#ccccb2";
    add.style.background = "-webkit-linear-gradient(to right, #ccccb2, #757519)";
    add.style.background =  "linear-gradient(to right, #ccccb2, #757519)";
    add.style.color = "wheat";
    add.style.display = "flex";

    addfn.style.height = "100%";
    addfn.style.width = "30%";
    addfn.appendChild(adddn);
    addfn.appendChild(adddt);

    adddn.style.height = "50%";
    adddn.style.width = "100%";
    adddn.style.color = "black";
    adddn.style.fontFamily = "system-ui";
    adddn.style.textAlign = "center";
    adddn.style.paddingTop = "20px";
    adddn.innerHTML = fname.value;

    adddt.style.height = "50%";
    adddt.style.width = "100%";
    adddt.style.color = "black";
    adddt.style.textAlign = "center";
    adddt.style.fontSize = "15px";
    adddt.style.fontFamily = "system-ui";
    // adddt.style.paddingTop = "10px";
    let today = new Date();
    let month = today;
    adddt.innerHTML = month;
    

    addcn.style.height = "100%";
    addcn.style.width = "20%";
    // addcn.style.border = "1px solid red";
    addfn.style.fontSize = "20px";
    addcn.style.color = "black";
    addcn.style.textAlign = "center";
    addcn.style.paddingTop = "30px";
    addcn.style.fontFamily = "system-ui";
    addcn.innerHTML = country.value;

    addsc.style.height = "100%";
    addsc.style.width = "20%";
    addsc.style.fontFamily = "system-ui";
    addsc.style.fontSize = "20px";
    addsc.style.color = "black";
    addsc.style.textAlign = "center";
    addsc.style.paddingTop = "30px";
    addsc.innerHTML = score.value;

    addrk.style.height = "100%";
    addrk.style.width = "10%";
    addrk.style.fontSize = "20px";
    addrk.style.color = "black";
    

    add.appendChild(addfn);
    add.appendChild(addcn)
    add.appendChild(addsc)
    add.appendChild(addrk)
    main.appendChild(add);
    }

});

clear.addEventListener("click", ()=>{
    fname.value = "";
    country.value = "";
    score.value = "";
});
red.addEventListener("click", ()=>{
    // console.log(main.children);
    if(main.children.length>1) {
         main.removeChild(main.lastChild);
    }
   
    //  main.forEach((child)=>{
    //     console.log(child);
    //  })
})