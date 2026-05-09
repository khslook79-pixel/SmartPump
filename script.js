const header = document.querySelector("[data-header]");
const featureButtons = document.querySelectorAll("[data-feature]");
const featureKicker = document.querySelector("#feature-kicker");
const featureTitle = document.querySelector("#feature-title");
const featureBody = document.querySelector("#feature-body");
const form = document.querySelector(".consult-form");
const formNote = document.querySelector("[data-form-note]");

const featureContent = {
  dose: {
    kicker: "Smart dosing",
    title: "생활 패턴에 맞춘 자동 주입",
    body: "식사, 활동, 수면 등 하루 리듬에 맞춰 인슐린 주입을 더 예측 가능하게 관리합니다.",
  },
  monitor: {
    kicker: "Live monitoring",
    title: "혈당 흐름을 실시간으로 확인",
    body: "현재 상태와 변화 추이를 한눈에 보고 필요한 순간 알림을 받을 수 있습니다.",
  },
  app: {
    kicker: "Connected care",
    title: "사용자와 보호자를 연결하는 앱",
    body: "모바일 앱으로 기록을 확인하고 상담 전 필요한 정보를 더 쉽게 준비합니다.",
  },
  report: {
    kicker: "Clinical report",
    title: "상담에 활용하기 쉬운 데이터 리포트",
    body: "혈당 변화, 주입 이력, 알림 기록을 정리해 진료와 관리 계획에 참고할 수 있습니다.",
  },
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

featureButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.feature;
    const content = featureContent[key];

    featureButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    featureKicker.textContent = content.kicker;
    featureTitle.textContent = content.title;
    featureBody.textContent = content.body;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "상담 신청이 접수되었습니다. 담당자가 곧 연락드릴 예정입니다.";
  formNote.classList.add("success");
  form.reset();
});
