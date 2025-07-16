const texts = [
        "Welcome To Qricket",
        "Scan. Enter. Experience.",
        "Secure. Simple. Instant.",
        "Your Event. Your Code."
    ];
    let idx = 0;
    const h1 = document.getElementById("changing-text");

    function changeText() {
        h1.classList.add("animate");
        setTimeout(() => {
            idx = (idx + 1) % texts.length;
            h1.textContent = texts[idx];
            h1.classList.remove("animate");
        }, 250);
    }
    h1.textContent = texts[0];
    setInterval(changeText, 2000);


    //mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    let isOpen = false;

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('-translate-x-full');
      isOpen = !isOpen;
    });

    document.addEventListener('click', (e) => {
      const clickedInside = mobileMenu.contains(e.target) || menuToggle.contains(e.target);
      if (isOpen && !clickedInside) {
        mobileMenu.classList.add('-translate-x-full');
        isOpen = false;
      }
    });