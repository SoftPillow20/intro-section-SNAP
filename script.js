"use strict";

const featureListEl = document.querySelector(".feature-list-name");
const companyListEl = document.querySelector(".company-list-name");

const featurePopUpEl = document.querySelector(".feature");
const companyPopUpEL = document.querySelector(".company");

const btnMobileNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

const featureArrowIcon = featureListEl.querySelector(".arrow-icon");
const companyArrowIcon = companyListEl.querySelector(".arrow-icon");

btnMobileNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

featureListEl.addEventListener("click", () => {
  featurePopUpEl.classList.toggle("hidden");
  if (featureArrowIcon.classList.contains("arrow-active")) {
    featureArrowIcon.classList.remove("arrow-active");
  } else {
    featureArrowIcon.classList.add("arrow-active");
  }
});

companyListEl.addEventListener("click", () => {
  companyPopUpEL.classList.toggle("hidden");
  if (companyArrowIcon.classList.contains("arrow-active")) {
    companyArrowIcon.classList.remove("arrow-active");
  } else {
    companyArrowIcon.classList.add("arrow-active");
  }
});

window.addEventListener("click", (e) => {
  const clickedFeature = e.target.closest(".feature-list-name");
  const clickedCompany = e.target.closest(".company-list-name");

  if (!clickedFeature && !clickedCompany) {
    featurePopUpEl.classList.add("hidden");
    companyPopUpEL.classList.add("hidden");

    if (
      featureArrowIcon.classList.contains("arrow-active") ||
      companyArrowIcon.classList.contains("arrow-active")
    ) {
    }
    featureArrowIcon.classList.remove("arrow-active");
    companyArrowIcon.classList.remove("arrow-active");
  }
});

/////////////////////////////////////////////////////////// Checks if the links works
// const navHoverLinksEl = document.querySelector(".nav-hover--links");
// navHoverLinksEl.addEventListener("click", (e) => {
//   const clickedTodo = e.target.closest(".todo");

//   if (clickedTodo) console.log("todo list was clicked");
// });

////////////////////////////////////////////////////////////////// FOR HOVER STATE UX
// let featureHideTimeout;
// let companyHideTimeout;
// featureListEl.addEventListener("mouseenter", () => {
//   clearTimeout(featureHideTimeout);
//   featurePopUpEl.classList.remove("hidden");
// });
// featurePopUpEl.addEventListener("mouseenter", () => {
//   clearTimeout(featureHideTimeout);
// });
// companyListEl.addEventListener("mouseenter", () => {
//   clearTimeout(companyHideTimeout);
//   companyPopUpEL.classList.remove("hidden");
// });
// companyPopUpEL.addEventListener("mouseenter", () => {
//   clearTimeout(companyHideTimeout);
// });
// function scheduleHideFeature() {
//   featureHideTimeout = setTimeout(() => {
//     featurePopUpEl.classList.add("hidden");
//   }, 200);
// }
// function scheduleHideCompany() {
//   companyHideTimeout = setTimeout(() => {
//     companyPopUpEL.classList.add("hidden");
//   }, 200);
// }
// featureListEl.addEventListener("mouseleave", scheduleHideFeature);
// featurePopUpEl.addEventListener("mouseleave", scheduleHideFeature);
// companyListEl.addEventListener("mouseleave", scheduleHideCompany);
// companyPopUpEL.addEventListener("mouseleave", scheduleHideCompany);
