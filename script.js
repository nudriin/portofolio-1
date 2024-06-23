const projectImg = document.getElementById('project-img');

const projects = [
    { id: "djawara", imgSrc: "/images/projects/djawarabarbershop.png" },
    { id: "binary", imgSrc: "/images/projects/binarytalkhub.png" },
    { id: "mind", imgSrc: "/images/projects/mindjourney.png" }
];

projects.forEach(project => {
    const element = document.getElementById(project.id);
    element.addEventListener("mouseover", function() {
        projectImg.src = project.imgSrc;
    });
    element.addEventListener("mouseout", function() {
        projectImg.src = "/images/projects/djawarabarbershop.png"; // Default image
    });
});