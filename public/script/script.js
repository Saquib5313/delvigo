



window.addEventListener("load", () => {
  const video = document.getElementById("introVideo");
  const loader = document.getElementById("video-loader");
  const content = document.getElementById("main-content");
  
  // ensure video starts
  if(!sessionStorage.getItem('played')){

    loader.style.display='flex'
    content.style.display = "none";
  
  video.play().catch(() => {});

  // when video ends
  video.onended = () => {
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";

    sessionStorage.setItem('played','true')

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 800);
  };

  // fallback (VERY IMPORTANT)
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    AOS.init({
    duration: 1000,     // animation duration
    once: true,         // animation happens only once
    offset: 100,        // trigger offset
    easing: 'ease-in-out'
  });
  }, 5000); // if video fails
}
else{
  AOS.init({
    duration: 1000,     // animation duration
    once: true,         // animation happens only once
    offset: 100,        // trigger offset
    easing: 'ease-in-out'
  });
}
});



