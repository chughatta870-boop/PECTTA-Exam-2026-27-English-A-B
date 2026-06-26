/**********************************
 * PECTTA ENGLISH APP V2 PRO
 **********************************/

/******** DOM ********/
const screens = document.querySelectorAll(".screen");
const menuButtons = document.querySelectorAll(".menu-btn");
const goScreenButtons = document.querySelectorAll(".go-screen");

const studentName = document.getElementById("studentName");
const studentRoll = document.getElementById("studentRoll");
const studentSchool = document.getElementById("studentSchool");
const studentClass = document.getElementById("studentClass");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const profilePreview = document.getElementById("profilePreview");

const practiceCategory = document.getElementById("practiceCategory");
const practiceCount = document.getElementById("practiceCount");
const practiceTime = document.getElementById("practiceTime");
const startPracticeBtn = document.getElementById("startPracticeBtn");
const wrongPracticeBtn = document.getElementById("wrongPracticeBtn");

const mockCount = document.getElementById("mockCount");
const mockTime = document.getElementById("mockTime");
const startMockBtn = document.getElementById("startMockBtn");

const quizModeTitle = document.getElementById("quizModeTitle");
const quizCounter = document.getElementById("quizCounter");
const quizTimer = document.getElementById("quizTimer");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const prevQuestionBtn = document.getElementById("prevQuestionBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const submitQuizBtn = document.getElementById("submitQuizBtn");

const resultTotal = document.getElementById("resultTotal");
const resultCorrect = document.getElementById("resultCorrect");
const resultWrong = document.getElementById("resultWrong");
const resultPercent = document.getElementById("resultPercent");
const resultMessage = document.getElementById("resultMessage");
const reviewAnswersBtn = document.getElementById("reviewAnswersBtn");
const backDashboardBtn = document.getElementById("backDashboardBtn");
const reviewPanel = document.getElementById("reviewPanel");
const reviewList = document.getElementById("reviewList");

const notesSearch = document.getElementById("notesSearch");
const notesCategory = document.getElementById("notesCategory");
const notesList = document.getElementById("notesList");
const bookmarkList = document.getElementById("bookmarkList");

const comprehensionList = document.getElementById("comprehensionList");
const editingList = document.getElementById("editingList");

const progressSummary = document.getElementById("progressSummary");
const historyList = document.getElementById("historyList");
const clearProgressBtn = document.getElementById("clearProgressBtn");

const themeToggle = document.getElementById("themeToggle");
const themeToggle2 = document.getElementById("themeToggle2");
const resetAppBtn = document.getElementById("resetAppBtn");
const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

const dashTests = document.getElementById("dashTests");
const dashAverage = document.getElementById("dashAverage");
const dashBest = document.getElementById("dashBest");
const dashBookmarks = document.getElementById("dashBookmarks");

/******** DATA ********/
const mcqBank = [
  { id: 1, category: "grammar", question: "Choose the correct article: He is ___ honest boy.", options: ["a", "an", "the", "no article"], answer: "an" },
  { id: 2, category: "vocabulary", question: "Synonym of brave is:", options: ["fearful", "coward", "courageous", "weak"], answer: "courageous" },
  { id: 3, category: "tenses", question: "She ___ a letter now.", options: ["write", "writes", "is writing", "wrote"], answer: "is writing" },
  { id: 4, category: "articles", question: "The book is ___ the table.", options: ["on", "in", "for", "at"], answer: "on" },
  { id: 5, category: "sentence", question: "Choose the correct sentence.", options: ["He do not work.", "He does not work.", "He does not works.", "He not work."], answer: "He does not work." },
  { id: 6, category: "grammar", question: "Plural of child is:", options: ["childs", "children", "childrens", "childes"], answer: "children" },
  { id: 7, category: "vocabulary", question: "Opposite of ancient is:", options: ["old", "modern", "historic", "past"], answer: "modern" },
  { id: 8, category: "tenses", question: "Past form of go is:", options: ["goed", "gone", "went", "going"], answer: "went" },
  { id: 9, category: "grammar", question: "Identify adjective: He is a ___ boy.", options: ["beauty", "beautiful", "beautify", "beautifully"], answer: "beautiful" },
  { id: 10, category: "sentence", question: "Please open the door. This is:", options: ["Imperative", "Interrogative", "Assertive", "Exclamatory"], answer: "Imperative" },
  { id: 11, category: "articles", question: "She lives ___ Multan.", options: ["in", "on", "at", "for"], answer: "in" },
  { id: 12, category: "grammar", question: "Choose the correct pronoun: Ali and I are friends. ___ study together.", options: ["We", "They", "He", "She"], answer: "We" },
  { id: 13, category: "vocabulary", question: "Honesty means:", options: ["truthfulness", "anger", "fear", "laziness"], answer: "truthfulness" },
  { id: 14, category: "sentence", question: "Question tag: He is a doctor, ___?", options: ["is he", "isn't he", "does he", "wasn't he"], answer: "isn't he" },
  { id: 15, category: "grammar", question: "Choose the correct spelling.", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: "Receive" },
  { id: 16, category: "tenses", question: "I ___ to school tomorrow.", options: ["go", "went", "will go", "going"], answer: "will go" },
  { id: 17, category: "articles", question: "We go to school ___ bus.", options: ["by", "with", "in", "on"], answer: "by" },
  { id: 18, category: "sentence", question: "The sun ___ in the east.", options: ["rise", "rises", "rising", "rose"], answer: "rises" },
  { id: 19, category: "grammar", question: "Verb in 'Birds fly in the sky' is:", options: ["birds", "fly", "sky", "the"], answer: "fly" },
  { id: 20, category: "vocabulary", question: "Choose the homophone pair.", options: ["sea / see", "book / pen", "chair / table", "cow / goat"], answer: "sea / see" },
  { id: 21, category: "grammar", question: "Choose correct passive meaning: The work was done by him.", options: ["He did the work.", "He will do the work.", "He is doing the work.", "He has done work"], answer: "He did the work." },
  { id: 22, category: "grammar", question: "Choose the modal verb: You ___ obey your parents.", options: ["should", "can", "may", "might"], answer: "should" },
  { id: 23, category: "vocabulary", question: "Antonym of Victory is:", options: ["Success", "Defeat", "Win", "Triumph"], answer: "Defeat" },
  { id: 24, category: "tenses", question: "They ___ football when it rained.", options: ["play", "were playing", "are playing", "played"], answer: "were playing" },
  { id: 25, category: "sentence", question: "Choose the correct sentence.", options: ["She can sings.", "She can sing.", "She can singing.", "She cans sing."], answer: "She can sing." },
  { id: 26, category: "articles", question: "He sat ___ the chair.", options: ["on", "in", "at", "for"], answer: "on" },
  { id: 27, category: "grammar", question: "Noun in 'Ahmed reads a book' is:", options: ["reads", "a", "Ahmed", "booked"], answer: "Ahmed" },
  { id: 28, category: "vocabulary", question: "Meaning of polite is:", options: ["rude", "well-mannered", "angry", "lazy"], answer: "well-mannered" },
  { id: 29, category: "tenses", question: "She ___ already finished her work.", options: ["has", "have", "had", "is"], answer: "has" },
  { id: 30, category: "sentence", question: "What is your name ___", options: [".", ",", "?", "!"], answer: "?" }
];

const notesBank = [
  {
    id: "n1",
    category: "letter",
    title: "Letter to Father for Money",
    text:
`Examination Hall,
City A.B.C.
June 25, 2026

My dear Father,
I am fine here and hope that you are also fine by the grace of Allah. My examinations are near. I need some money to buy books and notebooks. Kindly send me Rs. 2000 as soon as possible. I shall be very thankful to you.

Your loving son,
Ali`
  },
  {
    id: "n2",
    category: "application",
    title: "Application for Sick Leave",
    text:
`To,
The Headmaster,
Govt. High School.

Subject: Application for Sick Leave

Respected Sir,
It is respectfully stated that I am suffering from fever and the doctor has advised me to take rest for two days. Therefore, kindly grant me leave for two days from school.
I shall be very thankful to you.

Yours obediently,
XYZ
Class 8th`
  },
  {
    id: "n3",
    category: "essay",
    title: "My Best Friend",
    text:
`A good friend is a great blessing of Allah. My best friend is Ahmed. He is honest, hardworking and polite. He helps me in studies and respects his teachers. We play together and also prepare our lessons together. I am proud of my best friend.`
  },
  {
    id: "n4",
    category: "grammar",
    title: "Parts of Speech",
    text:
`1. Noun: Name of a person, place or thing.
2. Pronoun: Used in place of a noun.
3. Verb: Shows action or state.
4. Adjective: Describes a noun.
5. Adverb: Describes a verb.
6. Preposition: Shows relation.
7. Conjunction: Joins words/sentences.
8. Interjection: Expresses sudden feeling.`
  },
  {
    id: "n5",
    category: "vocabulary",
    title: "Important Synonyms & Antonyms",
    text:
`Brave = Courageous
Honest = Truthful
Ancient antonym = Modern
Victory antonym = Defeat
Polite = Well-mannered
Happy antonym = Sad`
  },
  {
    id: "n6",
    category: "essay",
    title: "My School",
    text:
`My school is one of the best schools in our area. It has neat classrooms, a playground and a library. Our teachers are hardworking and kind. We learn discipline, honesty and respect in school. I love my school very much.`
  },
  {
    id: "n7",
    category: "application",
    title: "Application for Fee Concession",
    text:
`To,
The Headmaster,
Govt. High School.

Subject: Application for Fee Concession

Respected Sir,
I beg to say that I am a student of class 8th in your school. My father has a small income and it is difficult for him to pay my full school fee. I am good at studies and always secure good marks. Kindly grant me fee concession.
I shall be very thankful to you.

Yours obediently,
XYZ`
  },
  {
    id: "n8",
    category: "letter",
    title: "Letter to Uncle Thanking Him for Gift",
    text:
`My dear Uncle,
I received your beautiful gift yesterday. Thank you very much for your kindness and love. I liked the gift very much. It is very useful for me and I shall always remember your affection.

Your loving nephew,
Ali`
  },
  {
    id: "n9",
    category: "paragraph",
    title: "My Hobby",
    text:
`My hobby is reading books. Books are our best friends because they increase our knowledge. I read story books, Islamic books and school books in my free time. Reading improves my vocabulary and writing skills. It is a very useful hobby.`
  }
];

const comprehensionBank = [
  {
    title: "Comprehension Passage 1",
    passage:
`Ali is a hardworking student. He gets up early in the morning and studies for two hours before going to school. He respects his teachers and helps his classmates. Because of his hard work and honesty, everyone likes him.`,
    questions: [
      "Who is Ali?",
      "What does he do before going to school?",
      "Why do people like him?"
    ]
  },
  {
    title: "Comprehension Passage 2",
    passage:
`Pakistan is an agricultural country. Many people depend on farming for their livelihood. Farmers grow wheat, rice, sugarcane and cotton. Agriculture plays an important role in the economy of Pakistan.`,
    questions: [
      "What type of country is Pakistan?",
      "Name any two crops mentioned in the passage.",
      "Why is agriculture important?"
    ]
  }
];

const editingBank = [
  {
    title: "Editing Practice 1",
    wrong: "he go to school every day and read many book.",
    corrected: "He goes to school every day and reads many books."
  },
  {
    title: "Editing Practice 2",
    wrong: "sara and ali was playing in the garden yesterday.",
    corrected: "Sara and Ali were playing in the garden yesterday."
  },
  {
    title: "Editing Practice 3",
    wrong: "the sun rise in the east.",
    corrected: "The sun rises in the east."
  }
];

/******** STATE ********/
let currentQuiz = [];
let currentAnswers = [];
let currentIndex = 0;
let currentTimer = null;
let timeLeft = 0;
let currentMode = "Practice Test";

/******** LOCAL STORAGE ********/
function getProfile() {
  return JSON.parse(localStorage.getItem("pecttaProfileV2")) || {};
}
function saveProfile(data) {
  localStorage.setItem("pecttaProfileV2", JSON.stringify(data));
}
function getHistory() {
  return JSON.parse(localStorage.getItem("pecttaHistoryV2")) || [];
}
function saveHistory(history) {
  localStorage.setItem("pecttaHistoryV2", JSON.stringify(history));
}
function getTheme() {
  return localStorage.getItem("pecttaThemeV2") || "dark";
}
function setTheme(theme) {
  localStorage.setItem("pecttaThemeV2", theme);
}
function getBookmarks() {
  return JSON.parse(localStorage.getItem("pecttaBookmarksV2")) || [];
}
function saveBookmarks(data) {
  localStorage.setItem("pecttaBookmarksV2", JSON.stringify(data));
}
function getWrongQuestions() {
  return JSON.parse(localStorage.getItem("pecttaWrongV2")) || [];
}
function saveWrongQuestions(data) {
  localStorage.setItem("pecttaWrongV2", JSON.stringify(data));
}

/******** HELPERS ********/
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function applyTheme() {
  const theme = getTheme();
  if (theme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light");
    themeToggle.textContent = "🌙";
  }
}

/******** NAVIGATION ********/
function showScreen(screenId) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");

  menuButtons.forEach(btn => btn.classList.remove("active"));
  const activeBtn = [...menuButtons].find(btn => btn.dataset.screen === screenId);
  if (activeBtn) activeBtn.classList.add("active");

  if (window.innerWidth < 900) {
    sidebar.classList.remove("show");
  }

  if (screenId === "dashboardScreen") updateDashboard();
  if (screenId === "notesScreen") renderNotes();
  if (screenId === "bookmarksScreen") renderBookmarks();
  if (screenId === "progressScreen") renderProgress();
  if (screenId === "comprehensionScreen") renderComprehension();
  if (screenId === "editingScreen") renderEditing();
}

menuButtons.forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

goScreenButtons.forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

/******** PROFILE ********/
function loadProfile() {
  const profile = getProfile();
  studentName.value = profile.name || "";
  studentRoll.value = profile.roll || "";
  studentSchool.value = profile.school || "";
  studentClass.value = profile.className || "8th";
  renderProfilePreview();
}

function renderProfilePreview() {
  const profile = getProfile();
  profilePreview.innerHTML = `
    <strong>Name:</strong> ${profile.name || "-"}<br>
    <strong>Roll No:</strong> ${profile.roll || "-"}<br>
    <strong>School:</strong> ${profile.school || "-"}<br>
    <strong>Class:</strong> ${profile.className || "8th"}
  `;
}

saveProfileBtn.addEventListener("click", () => {
  const profile = {
    name: studentName.value.trim(),
    roll: studentRoll.value.trim(),
    school: studentSchool.value.trim(),
    className: studentClass.value.trim()
  };
  saveProfile(profile);
  renderProfilePreview();
  updateDashboard();
  alert("Profile saved successfully!");
});

/******** QUIZ ********/
function buildQuiz(category, count) {
  let pool = mcqBank;
  if (category !== "all") {
    pool = mcqBank.filter(item => item.category === category);
  }
  if (pool.length < count) {
    pool = mcqBank;
  }
  return shuffleArray(pool).slice(0, count);
}

function startQuiz(mode, category, count, seconds, customPool = null) {
  currentMode = mode;
  currentQuiz = customPool ? shuffleArray(customPool).slice(0, count) : buildQuiz(category, count);
  currentAnswers = new Array(currentQuiz.length).fill(null);
  currentIndex = 0;
  timeLeft = seconds;
  reviewPanel.classList.add("hidden");

  quizModeTitle.textContent = mode;
  showScreen("quizScreen");
  startTimer();
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuiz[currentIndex];
  quizCounter.textContent = `Question ${currentIndex + 1} / ${currentQuiz.length}`;
  quizQuestion.textContent = q.question;
  quizOptions.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    if (currentAnswers[currentIndex] === option) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => {
      currentAnswers[currentIndex] = option;
      renderQuestion();
    });

    quizOptions.appendChild(btn);
  });

  const progress = ((currentIndex + 1) / currentQuiz.length) * 100;
  quizProgress.style.width = `${progress}%`;

  prevQuestionBtn.style.display = currentIndex === 0 ? "none" : "inline-block";

  if (currentIndex === currentQuiz.length - 1) {
    nextQuestionBtn.classList.add("hidden");
    submitQuizBtn.classList.remove("hidden");
  } else {
    nextQuestionBtn.classList.remove("hidden");
    submitQuizBtn.classList.add("hidden");
  }
}

function startTimer() {
  clearInterval(currentTimer);
  updateTimer();
  currentTimer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(currentTimer);
      submitQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  quizTimer.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function submitQuiz() {
  clearInterval(currentTimer);

  let correct = 0;
  const wrongQuestionIds = [];

  currentQuiz.forEach((q, i) => {
    if (currentAnswers[i] === q.answer) {
      correct++;
    } else {
      wrongQuestionIds.push(q.id);
    }
  });

  const total = currentQuiz.length;
  const wrong = total - correct;
  const percent = Math.round((correct / total) * 100);

  resultTotal.textContent = total;
  resultCorrect.textContent = correct;
  resultWrong.textContent = wrong;
  resultPercent.textContent = `${percent}%`;

  if (percent >= 80) {
    resultMessage.textContent = "Excellent! Bohat achi preparation hai.";
  } else if (percent >= 60) {
    resultMessage.textContent = "Good! Thori aur practice se score aur better ho jayega.";
  } else if (percent >= 40) {
    resultMessage.textContent = "Average result. Grammar aur vocabulary par focus karein.";
  } else {
    resultMessage.textContent = "Need improvement. Notes revise karein aur دوبارہ test dein.";
  }

  const history = getHistory();
  history.unshift({
    date: new Date().toLocaleString(),
    mode: currentMode,
    total,
    correct,
    wrong,
    percent
  });
  saveHistory(history);

  // save wrong questions
  const existingWrong = getWrongQuestions();
  const merged = [...new Set([...existingWrong, ...wrongQuestionIds])];
  saveWrongQuestions(merged);

  showScreen("resultScreen");
  updateDashboard();
}

function renderReview() {
  reviewList.innerHTML = "";
  currentQuiz.forEach((q, i) => {
    const userAns = currentAnswers[i] || "Not Answere
