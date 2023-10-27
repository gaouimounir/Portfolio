const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  // Vous pouvez envoyer ces données à votre serveur pour les traiter ici
  // Par exemple, en utilisant fetch() pour faire une requête POST

  // Après l'envoi, vous pouvez réinitialiser le formulaire ou afficher un message de confirmation
  contactForm.reset();
  alert("Message envoyé avec succès.");
});

const projectCarousel = document.querySelector(".project-carousel");
const projects = projectCarousel.querySelectorAll(".project");
let currentProject = 0;

function showProject(index) {
  projects.forEach((project, i) => {
    project.style.display = i === index ? "block" : "none";
  });
}

// Initial display
showProject(currentProject);

// Previous project
document.getElementById("prev-project").addEventListener("click", () => {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
});

// Next project
document.getElementById("next-project").addEventListener("click", () => {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
});
