// const email_input = document.getElementById("email");
// const uname_input = document.getElementById("uname");
// const phone_input = document.getElementById("phone");
const inputs = document.querySelectorAll("input");

const patterns = {
    uname: /^[a-zA-Z]\.[A-Za-z0-9]{3,}$/,
    phone: /\d{10}|(\d{3}\s\d{3}\s\d{4})/,
    email: /^\w+@bigcorp.eu$/,
};

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
        console.log(true);
    } else {
        field.className = "invalid";
        console.log(false);
    }
}

inputs.forEach((inp) => {
    inp.addEventListener("input", (e) => {
        console.log(e.target.attributes.id.value);
        validate(e.target, patterns[e.target.id]);
    });
});


//=======================================================
//api.giphy.com/v1/gifs/translate	

const img = document.querySelector('img');
const getCatBtn = document.querySelector('#getCats');
async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=GQi1of45leMY3PxmqrR9MNwCnBqzg2X0&s=dog&weirdness=4', {mode: 'cors'});
  const catData = await response.json()
    img.src = catData.data.images.original.url
    console.log(catData);
}

function firstload() {
  getCats();
  return;
}
firstload()
getCatBtn.addEventListener("click", (() => {
  getCats();
}))
