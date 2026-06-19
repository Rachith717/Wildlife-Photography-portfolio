const videos =
document.querySelectorAll(".hero-video");

let current = 0;

videos[current].play();

videos.forEach((video, index) => {

    video.addEventListener("ended", () => {

        videos[current].classList.remove("active");

        current = (current + 1) % videos.length;

        videos[current].classList.add("active");

        videos[current].currentTime = 0;
        videos[current].play();

    });

});