const update = document.getElementById("update");
let data = [];
update.addEventListener("click",(e)=>{
    const obj = [];
    const movie_title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("releaseyear").value;
    const status = document.getElementById("Status").value;
    if(movie_title === "" || genre === "" || year === "" || status === ""){
        alert("Write all the Information First!");
    }else{
        console.log(status);
        obj.push(movie_title)
        obj.push(genre)
        obj.push(year)
        obj.push(status)
        data.push(obj);
        document.getElementById("title").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("releaseyear").value = "";
        document.getElementById("Status").value = "";
    }
    display();
})
const cancel = document.getElementById("cancel");
cancel.addEventListener("click",()=>{
    document.getElementById("title").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("releaseyear").value = "";
        document.getElementById("Status").value = "";
})
const val = { "1": "Planned", "2": "Watched" };
const car = document.querySelector("#card");
function display(){
    car.innerHTML = "";
    data.forEach(([movie_title, genre, year,status],index) => {
        const card = document.createElement("section");
        card.className = "cards";
        card.dataset.index = index;
        card.innerHTML = `
            <section class="card-left">
                <h3>${movie_title}</h3>
                <p>${genre}</p>
            </section>
            <section class="card-right">
                <section id="hi1">
                    <span class="card-year">${year}</span>
                    <span class="card-status">${val[status]}</span>
                </section>
                <section id="hi2">
                    <button class="btn bttn1">Delete</button>
                    <button class="btn bttn2">Complete</button>
                    <button class="btn bttn3">Re-Watch</button>
                </section>
            </section>
        `;
        car.appendChild(card);
    });
}
car.addEventListener("click", (e) => {
    console.log(e.target);

    const bt = e.target;
    const index = Number(bt.closest(".cards").dataset.index);
    if(bt.classList.contains("bttn1")){
        data.splice(index,1);
        display()
    }else if(bt.classList.contains("bttn2")){
        data[index][3] = "2";
        display();
    }else if (bt.classList.contains("bttn3")) {
        data[index][3] = "1";
        display();
    }
});

// const update = document.getElementById("update");
// const car = document.querySelector("#card");
// const val = { "1": "Planned", "2": "Watched" };
// const STORAGE_KEY = "movies";

// // Load saved data (falls back to an empty list)
// let data = [];
// try {
//     data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// } catch (err) {
//     data = [];
// }

// function save() {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// }

// update.addEventListener("click", (e) => {
//     const movie_title = document.getElementById("title").value;
//     const genre = document.getElementById("genre").value;
//     const year = document.getElementById("releaseyear").value;
//     const status = document.getElementById("Status").value;

//     data.push([movie_title, genre, year, status]);
//     save();
//     display();
//     document.getElementById("title").value = "";
//     document.getElementById("genre").value = "";
//     document.getElementById("releaseyear").value = "";
// });

// function display() {
//     car.innerHTML = "";
//     data.forEach(([movie_title, genre, year, status], index) => {
//         const card = document.createElement("section");
//         card.className = "cards";
//         card.dataset.index = index;
//         card.innerHTML = `
//             <section class="card-left">
//                 <h3>${movie_title}</h3>
//                 <p>${genre}</p>
//             </section>
//             <section class="card-right">
//                 <section id="hi1">
//                     <span class="card-year">${year}</span>
//                     <span class="card-status">${val[status]}</span>
//                 </section>
//                 <section id="hi2">
//                     <button class="btn bttn1">Delete</button>
//                     <button class="btn bttn2">Complete</button>
//                     <button class="btn bttn3">Re-Watch</button>
//                 </section>
//             </section>
//         `;
//         car.appendChild(card);
//     });
// }

// car.addEventListener("click", (e) => {
//     const bt = e.target;
//     const cardEl = bt.closest(".cards");
//     if (!cardEl) return; // click wasn't inside a card

//     const index = Number(cardEl.dataset.index);
//     if (bt.classList.contains("bttn1")) {
//         data.splice(index, 1);
//         save();
//         display();
//     } else if (bt.classList.contains("bttn2")) {
//         data[index][3] = "2";
//         save();
//         display();
//     } else if (bt.classList.contains("bttn3")) {
//         data[index][3] = "1";
//         save();
//         display();
//     }
// });

// // Render saved movies on page load
// display();