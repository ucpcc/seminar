document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".session-body a").forEach((trigger, index) => {
    trigger.setAttribute("role", "button");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", `session-description-${index + 1}`);

    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const card = trigger.closest(".session-card");
      const content = trigger.closest(".session-body > div");
      let description = card.querySelector(".session-description");

      if (!description) {
        description = document.createElement("div");
        description.className = "session-description";
        description.id = trigger.getAttribute("aria-controls");
        description.textContent = "설명글";
        content.append(description);
      }
      description.id = trigger.getAttribute("aria-controls");

      const isExpanded = card.classList.toggle("is-expanded");
      trigger.setAttribute("aria-expanded", String(isExpanded));
    });
  });
});
