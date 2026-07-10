const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const detailButtons = document.querySelectorAll("[data-project-detail]");
const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalCopy = document.querySelector("[data-modal-copy]");
const modalList = document.querySelector("[data-modal-list]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

const projectDetails = {
  monitoring: {
    kicker: "Industrial IoT",
    title: "Remote Machine Monitoring Node",
    copy:
      "A connected embedded node for factories that need visibility into machine health, runtime, and warning conditions without replacing the full control system.",
    points: [
      "Reads vibration, temperature, current, runtime, and machine fault signals.",
      "Supports local logging plus Wi-Fi, GSM, Ethernet, RS485, or MQTT-style telemetry paths.",
      "Designed around protected inputs, stable power, serviceable wiring, and diagnostic firmware.",
    ],
  },
  control: {
    kicker: "Control Hardware",
    title: "Motor and Actuator Control Board",
    copy:
      "A compact control platform for switching and driving industrial loads while keeping wiring, protection, and service diagnostics practical.",
    points: [
      "Relay, solenoid, valve, small motor, and actuator control options.",
      "Limit switch, emergency signal, and isolated input handling.",
      "Firmware structure for predictable state control, fault recovery, and test modes.",
    ],
  },
  energy: {
    kicker: "Smart Energy",
    title: "Power and Energy Measurement Device",
    copy:
      "A metering-focused embedded device for tracking equipment power behavior and converting electrical measurements into useful maintenance data.",
    points: [
      "Voltage, current, power, energy, and equipment usage monitoring.",
      "Analog front-end integration, calibration workflow, and protected measurement design.",
      "Dashboard-ready data for load trends, alerts, and usage reports.",
    ],
  },
  fixture: {
    kicker: "Automation QA",
    title: "Production Test Fixture",
    copy:
      "A repeatable bench test system for validating boards and assemblies before they leave production.",
    points: [
      "Pass/fail checks for power rails, inputs, outputs, communication, and firmware identity.",
      "Serial logging, operator-friendly test flow, and clear fault reporting.",
      "Fixture wiring, pogo-pin planning, and documentation for repeat production use.",
    ],
  },
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeNavigation = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

const openModal = (key) => {
  const detail = projectDetails[key];
  if (!detail || !modal || !modalTitle || !modalKicker || !modalCopy || !modalList) return;

  modalTitle.textContent = detail.title;
  modalKicker.textContent = detail.kicker;
  modalCopy.textContent = detail.copy;
  modalList.replaceChildren(
    ...detail.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    })
  );

  modal.hidden = false;
  document.body.classList.add("is-locked");
};

const closeModal = () => {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("is-locked");
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeNavigation();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.projectDetail));
});

closeModalButtons.forEach((button) => button.addEventListener("click", closeModal));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeNavigation();
  }
});

const updateMetrics = () => {
  const load = 62 + Math.round(Math.random() * 12);
  const temp = (33.6 + Math.random() * 2.8).toFixed(1);
  const packets = (13.8 + Math.random() * 0.9).toFixed(1);

  const loadElement = document.querySelector('[data-metric="load"]');
  const tempElement = document.querySelector('[data-metric="temp"]');
  const packetElement = document.querySelector('[data-metric="packets"]');

  if (loadElement) loadElement.textContent = `${load}%`;
  if (tempElement) tempElement.textContent = `${temp}C`;
  if (packetElement) packetElement.textContent = `${packets}k`;
};

updateHeader();
updateMetrics();
window.addEventListener("scroll", updateHeader, { passive: true });
window.setInterval(updateMetrics, 2200);
