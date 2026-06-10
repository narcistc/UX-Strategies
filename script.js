const screenTitles = {
  dashboard: "Role-based generator discovery",
  step: "Step-by-step HE guide generator",
  profile: "Anonymised student profile generator",
  testing: "Usability metrics and evidence"
};

const navButtons = document.querySelectorAll("[data-screen]");
const screens = document.querySelectorAll(".screen");
const title = document.querySelector("#screen-title");

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === name);
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === name);
  });

  title.textContent = screenTitles[name] || screenTitles.dashboard;
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screen);
    window.location.hash = button.dataset.screen;
  });
});

document.querySelector("#generate-step").addEventListener("click", () => {
  const task = document.querySelector("#step-task").value.trim() || "the task";
  const output = document.querySelector("#step-output");
  output.innerHTML = `
    <li>Confirm the purpose of ${task.toLowerCase()} and check the assessment brief.</li>
    <li>Prepare each required item, using clear file names and the requested format.</li>
    <li>Open the VLE submission area and check the deadline, file limit and declaration text.</li>
    <li>Upload the portfolio, review the preview and save the confirmation receipt.</li>
    <li>Use the support route listed on the module page if an access or upload issue occurs.</li>
  `;
});

document.querySelector("#generate-profile").addEventListener("click", () => {
  const context = document.querySelector("#profile-context").value.trim();
  const summary = document.querySelector(".profile-card p");
  summary.textContent = context
    ? `${context}. Needs predictable structure, accessible materials and clear assessment expectations.`
    : "HE learner profile with anonymised context, needs and design recommendations.";
});

if (window.lucide) {
  window.lucide.createIcons();
}

const initialScreen = window.location.hash.replace("#", "");
if (screenTitles[initialScreen]) {
  showScreen(initialScreen);
}
