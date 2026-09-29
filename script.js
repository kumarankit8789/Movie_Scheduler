const update = document.getElementById("update");
let data = [];
update.addEventListener("click",(e)=>{
    const obj = [];
    const movie_title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("releaseyear").value;
    const status = document.getElementById("Status").value;
    console.log(status);
    obj.push(movie_title)
    obj.push(genre)
    obj.push(year)
    obj.push(status)
    data.push(obj);
    display();
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
    }
});