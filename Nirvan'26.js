/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("show");

}


/* =========================
   COUNTDOWN
========================= */

const festDate =
    new Date("October 12, 2026 10:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        festDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   EVENT FILTER
========================= */

function filterEvents(category, button) {

    const filters =
        document.querySelectorAll(".filter");


    filters.forEach(function(item) {

        item.classList.remove("active");

    });


    button.classList.add("active");


    const events =
        document.querySelectorAll(".event");


    events.forEach(function(event) {

        const categories =
            event.dataset.category;


        if (
            category === "all" ||
            categories.includes(category)
        ) {

            event.style.display = "flex";

        }
        else {

            event.style.display = "none";

        }

    });

}


/* =========================
   EVENT INFORMATION
========================= */

const eventData = {

    "Hackathon":
        "Build real-world solutions with your team. Create, prototype and present an innovative idea.",

    "CTF":
        "Test your cybersecurity skills through challenges involving cryptography, web security and digital investigation.",

    "E-Sports":
        "Compete in the gaming arena using strategy, reflexes and teamwork.",

    "Treasure Hunt":
        "Solve clues, discover hidden locations and work with your team to reach the final treasure.",

    "AI Arena":
        "Explore artificial intelligence and build intelligent solutions using creativity and technology.",

    "Workshop":
        "Learn practical skills from experts through interactive and hands-on technical sessions."

};


/* =========================
   SHOW EVENT
========================= */

function showEvent(name) {

    document.getElementById("eventTitle")
        .innerText = name;


    document.getElementById("eventDescription")
        .innerText = eventData[name];


    document.getElementById("eventModal")
        .style.display = "flex";


    document.body.style.overflow = "hidden";

}


/* =========================
   REGISTER MODAL
========================= */

function openRegister() {

    document.getElementById("registerModal")
        .style.display = "flex";


    document.body.style.overflow = "hidden";

}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(id) {

    document.getElementById(id)
        .style.display = "none";


    document.body.style.overflow = "auto";

}


/* =========================
   REGISTRATION FORM
========================= */

document
    .getElementById("registerForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value;


            const selectedEvent =
                document.getElementById("eventSelect")
                .value;


            alert(
                "🎉 REGISTRATION SUCCESSFUL!\n\n" +
                "Welcome, " + name + "!\n" +
                "Event: " + selectedEvent
            );


            this.reset();


            closeModal("registerModal");

        }
    );


/* =========================
   CLICK OUTSIDE MODAL
========================= */

window.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList
                .contains("modal")
        ) {

            event.target.style.display = "none";

            document.body.style.overflow = "auto";

        }

    }
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal")
                .forEach(function(modal) {

                    modal.style.display = "none";

                });


            document.body.style.overflow = "auto";

        }

    }
);