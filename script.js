// const h1main = document.getElementById("greeting");
// h1main.textContent = "Good Aftermoon"



// const h3main = document.getElementById("subTitle");
// h3main.textContent = "Hello Mateusz"


{/* <article class="best-card">
<img src="https://i.pravatar.cc/150?img=14" alt="">
<h3 class="card-name">John Smith</h3>
<button class="card-btn">
    <i class="bi bi-person-plus"></i>
    Follow
</button>
<p class="card-desc">Some quick example 
    text to build on the card title and 
    make up the bulk of the.</p>
</article> */}

const showGreeting = () => {
    const title = document.getElementById("Greeting");
    const date = new Date();
    const hour = date.getHours();
   
    if(hour < 12 && hour >= 6) {
        title.textContent = "Good Morning";
    }
    else if(hour>= 12 && hour < 18) {
        title.textContent = "Good Aftermoon";
    }
    else {
        title.textContent = "Good Evening";
    }


}
showGreeting();



const showCreat = () => {
    const createAcc = document.getElementById("Create");
    createAcc.textContent = "hello"


}
    
const showJoinbtn = () => {
    const joinNow = document.getElementById("btnJoin");
    joinNow.addEventListener("click",showCreat);

}

showJoinbtn();


const showMenuLeft = () => {
    const menu = document.getElementById("Menu");
    menu.classList.toggle("showMenu")
}

const showHamburger = () => {
    const hamburgerBtn = document.getElementById("HamburgerBtn");
    hamburgerBtn.addEventListener("click",showMenuLeft);
    
}

showHamburger();













// BEST WORKERS

const workersWrapper = document.getElementById("Workers");

function createWorkerCard (userImg,userName,userDesc) {
    // <article class="best-card">
    const card = document.createElement("article");
    card.setAttribute("class","best-card");
    //<img src="https://i.pravatar.cc/150?img=14" alt="">

    const image = document.createElement("img");
    image.src = userImg
    image.alt = "Zdjęcie użytkownika"
    card.appendChild(image);

    //<h3 class="card-name">John Smith</h3>
    const title = document.createElement("h3");
    title.classList.add("card-name");
    title.textContent = userName;
    card.appendChild(title);


    //<button class="card-btn">
//     <i class="bi bi-person-plus"></i>
//     Follow
// </button>

    const btn = document.createElement("button");
    btn.classList.add("card-btn");
    btn.innerHTML = `<i class="bi bi-person-plus"></i> Follow`
    card.appendChild(btn);

    // <p class="card-desc">Some quick example 
    // text to build on the card title and 
    // make up the bulk of the.</p>

    const paragraf = document.createElement("p");
    paragraf.classList.add("card-desc");
    paragraf.textContent = userDesc
    card.appendChild(paragraf);






    workersWrapper.appendChild(card);

}

createWorkerCard("https://i.pravatar.cc/150?img=14","John Smith","Some quick example text to build on the card");
createWorkerCard("https://i.pravatar.cc/150?img=27","Emma Smith","build on the card title and make up");
createWorkerCard("https://i.pravatar.cc/150?img=32","Lidia Smith","make up the bulk of the");
createWorkerCard("https://i.pravatar.cc/150?img=24","Sofia Smith","quick example text");










{/* <article class="pricing-card">
            <h3 class="pricing-title"><span class="pricing-dolar">$</span>19<span class="pricing-title-tekst">/month</span></h3>

            <div class="line"></div>

            <p class="pricing-text">Best for higher volume businesses that
             need additional features and power.</p>

            <p class="pricing-title-tekst">Full Support <span class="pricing-span">No</span></p>
            <p class="pricing-title-tekst">Storage <span class="pricing-span">50 GB</span></p>
            <p class="pricing-title-tekst">Monthly Visitors <span class="pricing-span">400K</span></p>

        <button class="pricing-btn">Buy Now</button>
    </article> */}

    //     const pricingtest = () => {
    //     const cardtest = document.createElement("article");
    //     cardtest.classList.add("pricing-card");

    //     cardtest.innerHTML = ` <article class="pricing-card">
    //     <h3 class="pricing-title"><span class="pricing-dolar">$</span>19<span class="pricing-title-tekst">/month</span></h3>

    //     <div class="line"></div>

    //     <p class="pricing-text">Best for higher volume businesses that
    //      need additional features and power.</p>

    //     <p class="pricing-title-tekst">Full Support <span class="pricing-span">No</span></p>
    //     <p class="pricing-title-tekst">Storage <span class="pricing-span">50 GB</span></p>
    //     <p class="pricing-title-tekst">Monthly Visitors <span class="pricing-span">400K</span></p>

    //     <button class="pricing-btn">Buy Now</button>
    //      </article>`

    //         pricingtest.appendChild(cardtest);

    // }

    

   



    const pricing19 = document.getElementById("card-pricing");
    function createPricingCard () {
        const card2 = document.createElement("article");
        card2.setAttribute("class","pricing-card");
        pricing19.appendChild(card2);
        

        const h3pricing = document.createElement("h3");
        h3pricing.classList.add("pricing-title");
        h3pricing.innerHTML = `<span class="pricing-dolar">$</span>19<span class="pricing-title-tekst">/month</span>`;
        card2.appendChild(h3pricing);

        const divLine = document.createElement("div");
        divLine.classList.add("line")
        card2.appendChild(divLine)

        const paragrafPricing = document.createElement("p");
        paragrafPricing.classList.add("pricing-text");
        paragrafPricing.textContent = "Best for higher volume businesses that need additional features and power.";
        card2.appendChild(paragrafPricing);


        const p1 = document.createElement("p");
        p1.classList.add("pricing-title-tekst");
        p1.innerHTML = `Full Support<span class="pricing-span"> No</span>`;
        card2.appendChild(p1);


        const p2 = document.createElement("p");
        p2.classList.add("pricing-title-tekst");
        p2.innerHTML = `Storage<span class="pricing-span"> 50 GB</span>`
        card2.appendChild(p2);

        const p3 = document.createElement("p");
        p3.classList.add("pricing-title-tekst");
        p3.innerHTML = `Monthly Visitors<span class="pricing-span"> 400K</span>`;
        card2.appendChild(p3);

        const pricingbtn = document.createElement("button");
        pricingbtn.classList.add("pricing-btn");
        pricingbtn.textContent = "Buy Now";
        card2.appendChild(pricingbtn);
    }

    createPricingCard()
    createPricingCard()
    createPricingCard()
    createPricingCard()










    // const num2 = 4;

    // if (num2 > 5) {
    //     console.log("liczba wieksza od 5 ")

    // }
    // else if (num2 === 5) {
    //     console.log('liczba równa 5');

        
    // }

    // else if(num2 < 5) {
    //     console.log("hello")
    // }













    // const isAdmin = true;
    // const isModerator = false;
    // const isUser = false ;
    // const islogged = true;
     
    // if(isAdmin === true || isModerator === true) {

    //     console.log("Witamy w panelu ziom")
    // }
    // else if(islogged === true && isUser === true ) {
    //     console.log("Panel Użytkownika")
    // }




