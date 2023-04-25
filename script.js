// backgroung music script
const bgMusic = document.getElementById("bg-music");

bgMusic.currentTime = 14;

function playMusic() {
bgMusic.play();
}

function pauseMusic() {
bgMusic.pause();
}

document.addEventListener('click', () => {
playMusic();
});

// Backgroung Image scrolling script
var headerBg = document.getElementById('home')
window.addEventListener('scroll', function () {
    headerBg.style.opacity = 1 - +window.pageYOffset / 1800 + ''
    headerBg.style.top = +window.pageYOffset + 'px'
    headerBg.style.backgroundPositionY = +window.pageYOffset / 2 + 'px'
})

// NavBar For Small device script
function openNav() {
    document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-200px";
}

// Typing Animation Script
var typed = new Typed(".auto-type", {
    strings: ["Student.", "Programmer.", "Developer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Fadding Transition Script
const faders = document.querySelectorAll(".fade-in", ".fade-uup");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

