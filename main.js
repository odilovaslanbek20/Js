let ifrem = document.getElementById("iframe");
let a = prompt("Yoshingizni kiriting...");
let b = prompt("Loginningizni kiriting...");
let c = prompt("Parolingizni kiriting...");

let l = "parol";
let p = "12345";

if (a >= "18") {
    if (b === l) {
        if (c === p) {
            ifrem.classList.toggle("active");
        }else{
            alert("Siz kiritgan Parol xato iltimos tekshirib boshqatdan urinib ko'ring...");
       };
    }else{
        alert("Siz kiritgan Login xato iltimos tekshirib boshqatdan urinib ko'ring...");
    }
}else{
    alert("Kechirasiz sizning yoshingiz 18 dan kichik...");
};