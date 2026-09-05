const ROLE_KEY = "g6canva-role";
const PROGRESS_KEY = "g6canva-progress";

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

function blankProgress() {
  return { steps: [], demo: [], checks: [], stamped: false };
}

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress(store) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(store));
}

function lessonProgress(n) {
  return loadProgress()[String(n)] || blankProgress();
}

function isOn(n, field, index) {
  return (lessonProgress(n)[field] || []).includes(index);
}

function toggleItem(n, field, index) {
  const store = loadProgress();
  const key = String(n);
  const current = store[key] || blankProgress();
  const list = new Set(current[field] || []);
  if (list.has(index)) list.delete(index);
  else list.add(index);
  store[key] = { ...current, [field]: [...list].sort((a, b) => a - b) };
  saveProgress(store);
}

function stampLesson(n) {
  const store = loadProgress();
  const key = String(n);
  const current = store[key] || blankProgress();
  store[key] = { ...current, stamped: !current.stamped };
  saveProgress(store);
}

function stampedCount() {
  const store = loadProgress();
  return LESSONS.filter((l) => store[String(l.n)]?.stamped).length;
}

function firstOpenLesson() {
  const store = loadProgress();
  return LESSONS.find((l) => !store[String(l.n)]?.stamped) || LESSONS[LESSONS.length - 1];
}

function esc(s) {
  const amp = "\u0026";
  return String(s)
    .replace(/\u0026/g, amp + "amp;")
    .replace(/</g, amp + "lt;")
    .replace(/>/g, amp + "gt;")
    .replace(/"/g, amp + "quot;");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function currentPage() {
  const file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  return file === "index" ? "index" : file;
}

function nav() {
  const page = currentPage();
  const params = new URLSearchParams(location.search);
  const lesson = params.get("n");
  const store = loadProgress();
  const mark = (id) => (page === id || (page === "lesson" && id === "lesson") ? "active" : "");
  return `
    <div class="nav-label">Classroom</div>
    <a class="nav-link ${mark("index")}" href="index.html"><span class="nav-ico">▦</span> Course map</a>
    <a class="nav-link ${mark("how-to")}" href="how-to.html"><span class="nav-ico">☰</span> How to teach</a>
    <a class="nav-link ${mark("projects")}" href="projects.html"><span class="nav-ico">▣</span> Hand-in projects</a>
    <a class="nav-link ${mark("final")}" href="final.html"><span class="nav-ico">⎙</span> Final poster</a>
    <a class="nav-link teacher-only ${mark("teachers")}" href="teachers.html"><span class="nav-ico">✉</span> Teacher hub</a>
    <div class="nav-label">Lessons</div>
    <p class="nav-meta">${stampedCount()} of ${LESSONS.length} stamped</p>
    ${LESSONS.map((l) => {
      const stamped = !!store[String(l.n)]?.stamped;
      const active = page === "lesson" && lesson === String(l.n);
      return `
      <a class="nav-link ${active ? "active" : ""}" href="lesson.html?n=${l.n}">
        <span class="nav-ico">${stamped ? "\u2713" : pad(l.n)}</span> ${esc(l.short)}
      </a>`;
    }).join("")}
  `;
}

function header() {
  return `
    <header class="topbar">
      <div class="brand-wrap">
        <button type="button" class="menu-btn" data-menu aria-label="Open menu">\u2630</button>
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
            <div class="brand-sub">Canva \u00b7 13 lessons</div>
          </div>
        </a>
      </div>
      <div class="role-toggle" role="group" aria-label="View mode">
        <button type="button" data-role-btn="teacher">Teacher</button>
        <button type="button" data-role-btn="student">Student</button>
      </div>
    </header>
  `;
}

function stepCards(n, field, steps) {
  return `<ol class="step-cards">
    ${steps.map(([title, detail], i) => {
      const done = isOn(n, field, i);
      return `<li>
        <button type="button" class="step-card ${done ? "done" : ""}" data-toggle="${n}|${field}|${i}" aria-pressed="${done}">
          <span class="step-num">${done ? "\u2713" : pad(i + 1)}</span>
          <span class="step-body">
            <strong>${esc(title)}</strong>
            <span>${esc(detail)}</span>
          </span>
        </button>
      </li>`;
    }).join("")}
  </ol>`;
}

function checkCards(n, items) {
  return `<ul class="check-cards">
    ${items.map((item, i) => {
      const done = isOn(n, "checks", i);
      return `<li>
        <button type="button" class="check-card ${done ? "done" : ""}" data-toggle="${n}|checks|${i}" aria-pressed="${done}">
          <span class="check-box">${done ? "\u2713" : ""}</span>
          <span>${esc(item)}</span>
        </button>
      </li>`;
    }).join("")}
  </ul>`;
}

function renderHomeExtras() {
  const weekBox = document.getElementById("this-week");
  if (weekBox) {
    const week = firstOpenLesson();
    weekBox.innerHTML = `
      <div class="soft-kicker">This week\u2019s lesson</div>
      <div class="week-meta">Lesson ${week.n} \u00b7 ${week.minutes} minutes</div>
      <h3>${esc(week.title)}</h3>
      <p>${esc(week.focus)}</p>
      <a href="lesson.html?n=${week.n}">Open the full lesson \u2192</a>
    `;
    const teach = document.getElementById("teach-now");
    if (teach) {
      teach.href = `lesson.html?n=${week.n}`;
      teach.textContent = `Teach lesson ${week.n} \u2192`;
    }
    const stampMeta = document.getElementById("stamp-meta");
    if (stampMeta) stampMeta.textContent = `${stampedCount()} of ${LESSONS.length} stamped`;
  }

  const list = document.getElementById("lesson-list");
  if (!list) return;
  const store = loadProgress();
  list.innerHTML = LESSONS.map((l, i) => {
    const p = store[String(l.n)] || blankProgress();
    const checked = (p.steps || []).length;
    return `<a class="lesson-row ${i ? "bordered" : ""}" href="lesson.html?n=${l.n}">
      <span class="step-num ${p.stamped ? "stamped" : ""}">${p.stamped ? "\u2713" : pad(l.n)}</span>
      <span class="step-body">
        <span class="row-top"><strong>${esc(l.title)}</strong><span class="mins">${l.minutes} min</span></span>
        <span class="muted">${esc(l.project)}${checked ? ` \u00b7 ${checked}/${l.studentSteps.length} steps` : ""}</span>
      </span>
    </a>`;
  }).join("");
}

function bindProgress() {
  document.body.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-toggle]");
    if (btn) {
      const [n, field, index] = btn.dataset.toggle.split("|");
      toggleItem(Number(n), field, Number(index));
      refreshLesson(Number(n));
      return;
    }
    const stamp = event.target.closest("[data-stamp]");
    if (stamp) {
      stampLesson(Number(stamp.dataset.stamp));
      refreshLesson(Number(stamp.dataset.stamp));
    }
  });
}

function refreshLesson(n) {
  const p = lessonProgress(n);
  document.querySelectorAll("[data-toggle]").forEach((btn) => {
    const [ln, field, index] = btn.dataset.toggle.split("|");
    if (Number(ln) !== n) return;
    const done = isOn(n, field, Number(index));
    btn.classList.toggle("done", done);
    btn.setAttribute("aria-pressed", done ? "true" : "false");
    const num = btn.querySelector(".step-num, .check-box");
    if (btn.classList.contains("step-card") && num) num.textContent = done ? "\u2713" : pad(Number(index) + 1);
    if (btn.classList.contains("check-card") && num) num.textContent = done ? "\u2713" : "";
  });
  const count = document.getElementById("step-count");
  const lesson = LESSONS.find((l) => l.n === n);
  if (count && lesson) count.textContent = `${p.steps.length} of ${lesson.studentSteps.length} student steps checked`;
  const stampBtn = document.querySelector("[data-stamp]");
  if (stampBtn) {
    stampBtn.textContent = p.stamped ? "Stamped complete" : "Stamp complete";
    stampBtn.classList.toggle("btn-primary", p.stamped);
    stampBtn.classList.toggle("btn-ghost", !p.stamped);
  }
  const kicker = document.getElementById("lesson-kicker");
  if (kicker && lesson) {
    kicker.textContent = `Lesson ${lesson.n} \u00b7 ${lesson.minutes} minutes${p.stamped ? " \u00b7 stamped" : ""}`;
  }
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.innerHTML = nav();
  const overlay = document.querySelector(".nav-overlay-inner");
  if (overlay) overlay.innerHTML = nav();
}

function mountChrome() {
  const app = document.getElementById("app");
  const page = app.innerHTML;
  app.outerHTML = `
    ${header()}
    <div class="nav-overlay" hidden>
      <div class="nav-overlay-inner">${nav()}</div>
    </div>
    <div class="shell">
      <aside class="sidebar">${nav()}</aside>
      <main class="main" id="main">${page}</main>
    </div>
  `;
  document.querySelectorAll("[data-role-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setRole(btn.dataset.roleBtn));
  });
  const overlay = document.querySelector(".nav-overlay");
  document.querySelector("[data-menu]").addEventListener("click", () => {
    overlay.hidden = !overlay.hidden;
  });
  overlay.addEventListener("click", (event) => {
    if (event.target.closest("a")) overlay.hidden = true;
  });
  applyRole();
  bindProgress();
  renderHomeExtras();
}

document.addEventListener("DOMContentLoaded", mountChrome);
