const revealItems = document.querySelectorAll(
  ".section, .hero-card, .project, .timeline-item, .project-detail"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
