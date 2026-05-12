window.addEventListener("scroll", function () {
  const hrs = document.querySelectorAll(".scroll-reveal"); // Selecciona todos

  hrs.forEach(function (hr) {
    const hrPosition = hr.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (hrPosition < screenHeight * 0.8) {
      hr.classList.add("visible");
    }
  });
});
