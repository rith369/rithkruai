// ===================== Data =====================
// Each subject: theme key (maps to CSS custom colors), title, description,
// point count, duration, and a small decorative emoji collage for the
// illustration panel (kept lightweight instead of bitmap assets).
const FOUNDATION_SUBJECTS = [
  {
    theme: "math",
    title: "គណិតវិទ្យា",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ រូបមន្ត លំហាត់ មេរៀន នៅស្រាយបញ្ហា…",
    points: "១៤ ចំណុច",
    time: "កន្លះម៉ោង",
    emojis: ["🧮", "📐", "✏️"],
  },
  {
    theme: "chem",
    title: "គីមីវិទ្យា",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ រូបមន្ត លំហាត់និងមេរៀននៅស្រាយបញ្ហាៗ បង្កើនជំនាញរបស់អ្នកជាមួយនឹងការពន្យល់គីមីវិទ្យា…",
    points: "១៤ ចំណុច",
    time: "កន្លះម៉ោង៤៥នាទី",
    emojis: ["🧪", "⚗️", "🧫"],
  },
  {
    theme: "bio",
    title: "ជីវវិទ្យា",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ រូបមន្ត លំហាត់និងមេរៀននៅស្រាយបញ្ហាៗ បង្កើនជំនាញរបស់អ្នកជាមួយនឹងការពន្យល់ជីវវិទ្យា…",
    points: "១៤ ចំណុច",
    time: "កន្លះម៉ោង២៦នាទី",
    emojis: ["🧬", "🔬", "🌿"],
  },
  {
    theme: "phys",
    title: "រូបវិទ្យា",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ រូបមន្ត លំហាត់និងមេរៀននៅស្រាយបញ្ហាៗ បង្កើនជំនាញរបស់អ្នកជាមួយនឹងការពន្យល់រូបវិទ្យា…",
    points: "១៤ ចំណុច",
    time: "២ម៉ោង៤៨នាទី",
    emojis: ["🚀", "⚛️", "💡"],
  },
  {
    theme: "eng",
    title: "អង់គ្លេស",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ រូបមន្ត លំហាត់ មេរៀន នៅស្រាយបញ្ហា…",
    points: "១៤ ចំណុច",
    time: "៩ម៉ោង២៨នាទី",
    emojis: ["🔤", "📚", "🎓"],
  },
  {
    theme: "hist",
    title: "ប្រវត្តិវិទ្យា",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ រូបមន្ត លំហាត់និងមេរៀននៅស្រាយបញ្ហាៗ បង្កើនជំនាញរបស់អ្នកជាមួយនឹងការពន្យល់ប្រវត្តិវិទ្យា…",
    points: "១៤ ចំណុច",
    time: "៣ម៉ោង១២នាទី",
    emojis: ["🏛️", "📜", "🗿"],
  },
  {
    theme: "khm",
    title: "ភាសាខ្មែរ",
    desc: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះ វេយ្យាករណ៍ លំហាត់ មេរៀន និងស្រាយបញ្ហាៗ ដើម្បីបង្កើនជំនាញភាសាខ្មែររបស់អ្នក…",
    points: "១៤ ចំណុច",
    time: "១ម៉ោង០៥នាទី",
    emojis: ["📖", "✍️", "🇰🇭"],
  },
];

// A second tab's dataset — kept smaller/distinct so switching tabs feels real.
const SCHOOL_SUBJECTS = [
  {
    theme: "eng",
    title: "អក្សរសាស្ត្រ",
    desc: "អានវិភាគអត្ថបទ កំណាព្យ និងរឿងខ្លីៗ ដើម្បីពង្រឹងការយល់ដឹង…",
    points: "១០ ចំណុច",
    time: "១ម៉ោង១៥នាទី",
    emojis: ["📖", "🖋️", "🎭"],
  },
  {
    theme: "phys",
    title: "ព័ត៌មានវិទ្យា",
    desc: "រៀនពីមូលដ្ឋានកុំព្យូទ័រ ក្បួនដោះស្រាយ និងការសរសេរកម្មវិធីដំបូង…",
    points: "១២ ចំណុច",
    time: "២ម៉ោង០០នាទី",
    emojis: ["💻", "🖱️", "🔌"],
  },
  {
    theme: "chem",
    title: "ភូមិវិទ្យា",
    desc: "ស្វែងយល់ពីផែនទី អាកាសធាតុ និងលក្ខណៈភូមិសាស្ត្រនៃពិភពលោក…",
    points: "១០ ចំណុច",
    time: "១ម៉ោង៤០នាទី",
    emojis: ["🌍", "🧭", "🗺️"],
  },
  {
    theme: "bio",
    title: "សិល្បៈ",
    desc: "ស្វែងយល់ពីប្រវត្តិសិល្បៈ បច្ចេកទេសគូរគំនូរ និងទ្រឹស្តីពណ៌ដ៏សំខាន់…",
    points: "៨ ចំណុច",
    time: "៤៥នាទី",
    emojis: ["🎨", "🖌️", "🖼️"],
  },
];

// ===================== Rendering =====================
const grid = document.getElementById("cardGrid");
const template = document.getElementById("cardTemplate");

function buildIllustration(emojis) {
  const wrap = document.createElement("div");
  wrap.className = "illus-icons";
  const positions = [
    { top: "50%", left: "50%", size: "3.1rem", rot: "0deg", z: 3 },
    { top: "22%", left: "22%", size: "1.6rem", rot: "-12deg", z: 2 },
    { top: "72%", left: "76%", size: "1.6rem", rot: "10deg", z: 2 },
  ];
  emojis.slice(0, 3).forEach((emoji, i) => {
    const span = document.createElement("span");
    const p = positions[i] || positions[0];
    span.textContent = emoji;
    span.style.position = "absolute";
    span.style.top = p.top;
    span.style.left = p.left;
    span.style.fontSize = p.size;
    span.style.transform = `translate(-50%, -50%) rotate(${p.rot})`;
    span.style.zIndex = p.z;
    span.style.filter = "drop-shadow(0 6px 10px rgba(0,0,0,0.18))";
    wrap.appendChild(span);
  });
  return wrap;
}

function renderCards(subjects) {
  grid.innerHTML = "";
  subjects.forEach((subject, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".card");
    card.dataset.theme = subject.theme;
    card.style.animationDelay = `${index * 0.05}s`;
    card.setAttribute("aria-label", `${subject.title} — ចាប់ផ្តើមរៀន`);

    node.querySelector(".card-title").textContent = subject.title;
    node.querySelector(".card-desc").textContent = subject.desc;
    node.querySelector(".points-text").textContent = subject.points;
    node.querySelector(".time-text").textContent = subject.time;
    node.querySelector(".card-illustration").appendChild(buildIllustration(subject.emojis));

    const open = () => openSubject(subject);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
    node.querySelector(".play-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      open();
    });

    grid.appendChild(node);
  });
}

function openSubject(subject) {
  // Placeholder navigation hook — wire this up to real routing / lesson screen.
  console.log(`Opening lesson: ${subject.title}`);
  toast(`កំពុងបើក "${subject.title}"…`);
}

// ===================== Toast (lightweight feedback) =====================
let toastTimer = null;
function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    Object.assign(el.style, {
      position: "fixed",
      left: "50%",
      bottom: "36px",
      transform: "translateX(-50%) translateY(20px)",
      background: "#24202f",
      color: "#fff",
      padding: "10px 18px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      opacity: "0",
      transition: "opacity 0.22s ease, transform 0.22s ease",
      zIndex: "999",
      pointerEvents: "none",
    });
    document.body.appendChild(el);
  }
  el.textContent = message;
  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateX(-50%) translateY(0)";
  });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-50%) translateY(20px)";
  }, 1600);
}

// ===================== Tabs =====================
const tabFoundations = document.getElementById("tab-foundations");
const tabSubjects = document.getElementById("tab-subjects");
const indicator = document.getElementById("tabIndicator");

function setActiveTab(tab) {
  [tabFoundations, tabSubjects].forEach((t) => {
    const isActive = t === tab;
    t.classList.toggle("active", isActive);
    t.setAttribute("aria-selected", String(isActive));
  });
  indicator.style.left = `${tab.offsetLeft}px`;
  indicator.style.width = `${tab.offsetWidth}px`;

  renderCards(tab === tabFoundations ? FOUNDATION_SUBJECTS : SCHOOL_SUBJECTS);
}

tabFoundations.addEventListener("click", () => setActiveTab(tabFoundations));
tabSubjects.addEventListener("click", () => setActiveTab(tabSubjects));

// ===================== Back button =====================
document.getElementById("backBtn").addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    toast("ត្រឡប់ក្រោយ");
  }
});

// ===================== Init =====================
window.addEventListener("DOMContentLoaded", () => {
  setActiveTab(tabFoundations);
});
window.addEventListener("resize", () => {
  const active = tabFoundations.classList.contains("active") ? tabFoundations : tabSubjects;
  indicator.style.left = `${active.offsetLeft}px`;
  indicator.style.width = `${active.offsetWidth}px`;
});
