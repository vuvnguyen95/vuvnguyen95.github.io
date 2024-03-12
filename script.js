document.addEventListener("DOMContentLoaded", (e) => {
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const nextButton = document.querySelector(".next-button");
  const backgroundInfo = document.getElementById("background");
  const skillsInfo = document.getElementById("skills-info");

  nextButton.addEventListener("click", function () {
    if (backgroundInfo.style.display === "none") {
      backgroundInfo.style.display = "block";
      skillsInfo.style.display = "none";
      document.querySelector(".background-box").classList.add("active");
      document.querySelector(".skills-box").classList.remove("active");
      skillsInfo.style.opacity = 0;
      setTimeout(() => {
        backgroundInfo.style.opacity = 1;
      }, 0);
    } else {
      skillsInfo.style.display = "block";
      backgroundInfo.style.display = "none";
      document.querySelector(".background-box").classList.remove("active");
      document.querySelector(".skills-box").classList.add("active");
      backgroundInfo.style.opacity = 0;
      setTimeout(() => {
        skillsInfo.style.opacity = 1;
      }, 0);
    }
  });

  const thumbnails = document.querySelectorAll(".project-thumbnail");
  const projectDefault = document.querySelector(".project-detail-default");
  const projects = document.querySelectorAll(".project-detail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("mouseover", function (e) {
        const targetId = this.getAttribute("data-target");
        const targetProject = document.getElementById(targetId);
        if(targetProject === "project1"){
            const displayTarget = document.getElementById("project-des1");
            displayTarget.style.opacity = 1;
            displayTarget.style.display = "block";
        }
    });
  });

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function (e) {
      e.preventDefault(); // Stop the default anchor behavior
      e.stopPropagation(); // Stop the click event from bubbling up or down
      // Hide all project details
      projects.forEach((project) => {
        project.style.display = "none";
        project.style.opacity = 0;
      });

      // Hide the default project detail view
      projectDefault.style.display = "none";

      // Get the id of the project detail to show
      const targetId = this.getAttribute("data-target");
      const targetProject = document.getElementById(targetId);

      // Show the targeted project detail
      setTimeout(() => {
        targetProject.style.display = "flex"; // Use 'flex' if that's the desired display type
        void targetProject.offsetWidth; // Trigger a reflow
        targetProject.style.opacity = 1; // Fade in the project detail
        document.querySelector("#projects").scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    });
  });

  const contactExpand = document.getElementById("contact-expand");
  const contactContainer = document.getElementById("contact");
  contactExpand.style.display = "none";
  // Show the contact container when the user clicks on the toggle
  contactExpand.addEventListener("click", function () {
    contactContainer.style.right = "-20px";
    contactExpand.style.display = "none";
  });
  // Hide the contact container when the user clicks on it
  contactContainer.addEventListener("click", function (e) {
    setTimeout(() => {
      contactExpand.style.display = "block";
    }, 280);
    contactContainer.style.right = "-250px";
    contactExpand.querySelector("img").src = "./images/contact-bar-expand.png";
  });

  document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth",
    });
  });
});
