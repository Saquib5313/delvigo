AOS.init();

const c1 = new CountUp('count1', 500);
const c2 = new CountUp('count2', 120);
const c3 = new CountUp('count3', 25);

c1.start();
c2.start();
c3.start();




window.addEventListener("load", () => {
  const video = document.getElementById("introVideo");
  const loader = document.getElementById("video-loader");
  const content = document.getElementById("main-content");

  // ensure video starts
  video.play().catch(() => {});

  // when video ends
  video.onended = () => {
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 800);
  };

  // fallback (VERY IMPORTANT)
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 8000); // if video fails
});
