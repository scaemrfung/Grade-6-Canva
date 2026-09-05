const ROLE_KEY = "g6canva-role";

function role() {
  return localStorage.getItem(ROLE_KEY) === "student" ? "student" : "teacher";
}

function setRole(next) {
  localStorage.setItem(ROLE_KEY, next);
  applyRole();
}

function applyRole() {
  const current = role();
  document.querySelectorAll("[data-role-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.roleBtn === current);
  });
  document.querySelectorAll(".teacher-only").forEach((el) => {
    el.classList.toggle("hidden-role", current !== "teacher");
  });
  document.querySelectorAll(".student-only").forEach((el) => {
    el.classList.toggle("hidden-role", current !== "student");
  });
}

function currentPage() {
  const file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  return file === "index" ? "index" : file;
}

function nav() {
  const page = currentPage();
  const params = new URLSearchParams(location.search);
  const lesson = params.get("n");
  const mark = (id) => (page === id || (page === "lesson" && id === "lesson") ? "active" : "");
  return `
    <div class="nav-label">Classroom</div>
    <a class="nav-link ${mark("index")}" href="index.html"><span class="nav-ico">▦</span> Course map</a>
    <a class="nav-link ${mark("how-to")}" href="how-to.html"><span class="nav-ico">☰</span> How to teach</a>
    <a class="nav-link ${mark("projects")}" href="projects.html"><span class="nav-ico">▣</span> Hand-in projects</a>
    <a class="nav-link ${mark("final")}" href="final.html"><span class="nav-ico">⎙</span> Final poster</a>
    <a class="nav-link teacher-only ${mark("teachers")}" href="teachers.html"><span class="nav-ico">✉</span> Teacher hub</a>
    <div class="nav-label">Lessons</div>
    ${LESSONS.map((l) => `
      <a class="nav-link ${page === "lesson" && lesson === String(l.n) ? "active" : ""}" href="lesson.html?n=${l.n}">
        <span class="nav-ico">${String(l.n).padStart(2, "0")}</span> ${l.short}
      </a>
    `).join("")}
  `;
}

function header() {
  return `
    <header class="topbar">
      <a class="brand" href="index.html">
        <div class="logo" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 7.5C4 5.5 6.5 4 12 4s8 1.5 8 3.5S17.5 11 12 11 4 9.5 4 7.5Z" stroke="#F7F4EC" stroke-width="1.7"/>
            <path d="M4 7.5V16.5C4 18.5 6.5 20 12 20s8-1.5 8-3.5V7.5" stroke="#F7F4EC" stroke-width="1.7"/>
            <path d="M4 12C4 14 6.5 15.5 12 15.5S20 14 20 12" stroke="#F7F4EC" stroke-width="1.7"/>
          </svg>
        </div>
        <div>
          <div class="brand-title">Grade 6 Tech</div>
          <div class="brand-sub">Canva · 13 lessons</div>
        </div>
      </a>
      <div class="role-toggle" role="group" aria-label="View mode">
        <button type="button" data-role-btn="teacher">Teacher</button>
        <button type="button" data-role-btn="student">Student</button>
      </div>
    </header>
  `;
}

function mountChrome() {
  const app = document.getElementById("app");
  const page = app.innerHTML;
  app.outerHTML = `
    ${header()}
    <div class="shell">
      <aside class="sidebar">${nav()}</aside>
      <main class="main" id="main">${page}</main>
    </div>
  `;
  document.querySelectorAll("[data-role-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setRole(btn.dataset.roleBtn));
  });
  applyRole();
}

document.addEventListener("DOMContentLoaded", mountChrome);
