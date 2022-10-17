const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.addEventListener("click", function () {
    sections.forEach((element) => {
      const elementcontent = element.querySelector(".content");
      const elarrow = element.querySelector(".arrow");
      const eltitle = element.querySelector(".title");
      elementcontent.classList.remove("active");
      elarrow.classList.remove("active-arrow");
      eltitle.classList.remove("active-title");
    });
    const content = section.querySelector(".content");
    const arrow = section.querySelector(".arrow");
    const title = section.querySelector(".title");
    arrow.classList.add("active-arrow");
    content.classList.add("active");
    title.classList.add("active-title");
  });
});
