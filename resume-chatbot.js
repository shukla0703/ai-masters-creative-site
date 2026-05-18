const resumeKnowledge = {
  intro: [
    "Shambhavi Shukla is a data engineer and AI-focused builder.",
    "She combines industry experience, AI projects, and academic depth.",
    "Her long-term goal is a prestigious international master's in Artificial Intelligence.",
  ],
  education: [
    "Bachelor of Technology from Rajasthan Technical University, completed across 2021 to 2025.",
    "Bachelor of Science from IIT Madras, expected in 2027.",
    "Relevant coursework includes algorithms analysis, data structures, operating systems, computer architecture, Python, DBMS, machine learning, and artificial intelligence.",
  ],
  experience: [
    "Graduate Engineer Trainee at Atlas Copco Group in Pune since July 2025.",
    "Improved data modeling, data mapping, and domain-specific AI chatbot development by 50 percent using LangChain and OpenAI.",
    "Built BiDocGen, an AI documentation generator, and became a Quality Expo 2025 finalist.",
    "Improved AI Power BI chatbot efficiency by 45 percent.",
    "Previously worked as a CS Intern at Ohmium Operation Private Limited from April 2024 to August 2024.",
    "Achieved 75 percent growth in an inspection data management application and improved data accuracy and retrieval efficiency by 40 percent.",
  ],
  projects: [
    "DHRUV AI - Intelligence that guides. Action that Delivers - Constructed a Python-based AI assistant using LangChain, Hugging\n            Face, DeepSearch, PyQt5, pyttsx3, and SpeechRecognition for conversational AI, voice interaction, intelligent automation, and\n            GUI-based assistant functionalities. Implemented modular architecture, memory services, and web/system control features.",
    "BiDocGen: an AI-powered documentation generator built with LangChain, OpenAI, and Streamlit.",
    "Diabetes Detective: a predictive analytics project using Jupyter Notebook, Pandas, and NumPy.",
    "Guardian of Cyber Realms: a bug bounty and security analysis project focused on vulnerability discovery and reporting.",
  ],
  skills: [
    "Technical skills: Python, SQL, Power BI, LangChain, PyCharm, Excel, Git, PySpark.",
    "AI and data strengths: cloud computing, machine learning algorithms, data warehousing, data modeling, data mapping.",
    "Soft skills: communication, time management, analytical thinking, adaptability.",
  ],
  leadership: [
    "Main coordinator in javelin during college sports events.",
    "Initiated an AI and AR Cancer Development Project team for a Young India entrepreneurship effort.",
    "Served as soft board in-charge in school for key events and presentation work.",
  ],
  achievements: [
    "Champion Award recipient in the National Abacus Competition organized by Bain-O-Brain.",
    "Certified in Basic German Language from the Institute of European Languages.",
  ],
  masters: [
    "Aims to pursue a prestigious international master's in AI.",
    "Wants to deepen expertise in machine learning, intelligent systems, and human-centered AI design.",
    "Brings a combination of academic learning, industry exposure, and applied AI building.",
  ],
  contact: [
    "Email: shuklashambhavi595@gmail.com",
    "Phone: +91 98894 43470",
    "LinkedIn: https://www.linkedin.com/in/shambhavi-shukla-5a98a0226",
    "GitHub: https://github.com/shukla0703",
    "Location: Uttar Pradesh, India",
  ],
};

const resumeCards = {
  education: [
    { label: "Degree", value: "B.Tech, Rajasthan Technical University" },
    { label: "Years", value: "2021 - 2025" },
    { label: "Parallel Study", value: "B.Sc, IIT Madras, expected 2027" },
  ],
  experience: [
    { label: "Current Role", value: "Graduate Engineer Trainee, Atlas Copco Group" },
    { label: "Impact", value: "50% improvement in AI chatbot development workflow" },
    { label: "Earlier Role", value: "CS Intern, Ohmium Operation Private Limited" },
  ],
  projects: [
    { label: "DHRUV AI", value: "DHRUV AI - Intelligence that guides. Action that Delivers - Constructed a Python-based AI assistant using LangChain, Hugging Face, DeepSearch, PyQt5, pyttsx3, and SpeechRecognition for conversational AI, voice interaction, intelligent automation, and GUI-based assistant functionalities. Implemented modular architecture, memory services, and web/system control features." },
    { label: "BiDocGen", value: "AI documentation generator with LangChain and Streamlit" },
    { label: "Diabetes Detective", value: "Predictive analysis with Pandas and NumPy" },
  ],
  skills: [
    { label: "Core Tech", value: "Python, SQL, Power BI, LangChain, PySpark" },
    { label: "AI Focus", value: "ML algorithms, data modeling, data mapping" },
    { label: "Soft Skills", value: "Communication, adaptability, analytical thinking" },
  ],
  masters: [
    { label: "Goal", value: "Prestigious international master's in AI" },
    { label: "Focus", value: "Machine learning, intelligent systems, human-centered AI" },
    { label: "Strength", value: "Applied AI plus industry data experience" },
  ],
  contact: [
    { label: "Email", value: "shuklashambhavi595@gmail.com",type: "full" },
    { label: "Phone", value: "+91 98894 43470" ,type: "half"},
    { label: "Location", value: "Uttar Pradesh, India" ,type: "half"},
  ],
};

const chatbotConfig = window.CHATBOT_CONFIG || {};
let currentMode = "resume";
let voiceEnabled = false;
let activeUtterance = null;

function makeResponse(title, bullets, suggestions) {
  return { title, bullets, suggestions, cards: [] };
}

function makeCardResponse(title, bullets, suggestions, cards) {
  return { title, bullets, suggestions, cards: cards || [] };
}

function chooseReply(question) {
  const query = question.toLowerCase();

  if (!query.trim()) {
    return makeCardResponse(
      "Ask about the resume",
      ["Please type a question about education, skills, projects, experience, contact details, or the master's goal."],
      ["Tell me about Shambhavi's education.", "What skills does Shambhavi have?"],
      resumeCards.skills
    );
  }

  if (query.includes("education") || query.includes("study") || query.includes("college") || query.includes("university") || query.includes("iit")) {
    return makeCardResponse(
      "Education overview",
      resumeKnowledge.education,
      ["What coursework is most relevant for AI?", "Why does Shambhavi want a master's in AI abroad?"],
      resumeCards.education
    );
  }

  if (query.includes("experience") || query.includes("work") || query.includes("intern") || query.includes("atlas copco") || query.includes("ohmium")) {
    return makeCardResponse(
      "Experience overview",
      resumeKnowledge.experience,
      ["Which experience is strongest for university applications?", "What projects came out of this work?"],
      resumeCards.experience
    );
  }

  if (query.includes("project") || query.includes("dhruv") || query.includes("jarvis") || query.includes("bidocgen") || query.includes("diabetes") || query.includes("cyber")) {
    return makeCardResponse(
      "Project highlights",
      resumeKnowledge.projects,
      ["Which AI project is strongest for admissions?", "What technical skills do these projects show?"],
      resumeCards.projects
    );
  }

  if (query.includes("skill") || query.includes("technology") || query.includes("tool") || query.includes("python") || query.includes("sql")) {
    return makeCardResponse(
      "Skills snapshot",
      resumeKnowledge.skills,
      ["How do these skills support an AI master's application?", "Tell me about Shambhavi's projects."],
      resumeCards.skills
    );
  }

  if (query.includes("leader") || query.includes("achievement") || query.includes("award") || query.includes("german") || query.includes("abacus")) {
    return makeCardResponse(
      "Leadership and achievements",
      [...resumeKnowledge.leadership, ...resumeKnowledge.achievements],
      ["Give me a full profile summary.", "How does this help for university selection?"],
      resumeCards.masters
    );
  }

  if (query.includes("master") || query.includes("ai abroad") || query.includes("goal") || query.includes("future") || query.includes("why")) {
    return makeCardResponse(
      "Master's in AI goal",
      resumeKnowledge.masters,
      ["Give me a university-focused summary.", "What experience supports this goal?"],
      resumeCards.masters
    );
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("linkedin") || query.includes("github")) {
    return makeCardResponse(
      "Contact details",
      resumeKnowledge.contact,
      ["Give me a short professional summary.", "What are Shambhavi's strongest projects?"],
      resumeCards.contact
    );
  }

  if (query.includes("recruiter") || query.includes("university") || query.includes("admission") || query.includes("application")) {
    return makeCardResponse(
      "University and recruiter summary",
      [
        "Shambhavi combines technical education, hands-on industry work, and applied AI project building.",
        "Her profile shows measurable impact through data systems, AI chatbots, and documentation automation.",
        "She is already aligning her experience with advanced study in Artificial Intelligence.",
        "Her strongest value lies in connecting real-world data problems with practical AI solutions.",
      ],
      ["What experience supports this summary?", "Which projects are strongest for AI admissions?"],
      resumeCards.masters
    );
  }

  if (query.includes("summary") || query.includes("about") || query.includes("who is")) {
    return makeCardResponse(
      "Profile summary",
      [...resumeKnowledge.intro, ...resumeKnowledge.masters],
      ["Tell me about Shambhavi's experience.", "What are her technical skills?"],
      resumeCards.masters
    );
  }

  return makeCardResponse(
    "General overview",
    [...resumeKnowledge.intro, ...resumeKnowledge.experience.slice(0, 3), ...resumeKnowledge.projects.slice(0, 2)],
    ["Tell me about education.", "How can I contact Shambhavi?"],
    resumeCards.experience
  );
}

function appendMessage(type, payload) {
  const chatWindow = document.getElementById("chat-window");
  if (!chatWindow) {
    return;
  }

  const card = document.createElement("article");
  card.className = `message ${type}`;

  const role = document.createElement("span");
  role.className = "message-role";
  role.textContent = type === "user" ? "You" : "Resume Guide";

  const body = document.createElement("div");
  body.className = "message-body";

  if (type === "user") {
    const paragraph = document.createElement("p");
    paragraph.textContent = payload;
    body.appendChild(paragraph);
  } else {
    if (payload.title) {
      const heading = document.createElement("p");
      heading.className = "message-heading";
      heading.textContent = payload.title;
      body.appendChild(heading);
    }

    if (payload.bullets && payload.bullets.length) {
      const list = document.createElement("ul");
      list.className = "message-list";
      payload.bullets.forEach((bullet) => {
        const item = document.createElement("li");
        item.textContent = bullet;
        list.appendChild(item);
      });
      body.appendChild(list);
    }

    if (payload.cards && payload.cards.length) {
      const cardGrid = document.createElement("div");
      cardGrid.className = "reply-card-grid";
      payload.cards.forEach((entry) => {
        const miniCard = document.createElement("div");
        miniCard.className = "reply-card";
        const label = document.createElement("span");
        label.className = "reply-card-label";
        label.textContent = entry.label;
        const value = document.createElement("strong");
        value.className = "reply-card-value";
        value.textContent = entry.value;
        miniCard.append(label, value);
        cardGrid.appendChild(miniCard);
      });
      body.appendChild(cardGrid);
    }
  }

  card.append(role, body);

  if (type === "bot" && payload.suggestions && payload.suggestions.length) {
    const suggestionRow = document.createElement("div");
    suggestionRow.className = "suggestion-row";

    payload.suggestions.forEach((suggestion) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "suggestion-chip";
      button.textContent = suggestion;
      button.dataset.prompt = suggestion;
      button.addEventListener("click", () => handlePrompt(suggestion));
      suggestionRow.appendChild(button);
    });

    card.appendChild(suggestionRow);
  }

  chatWindow.appendChild(card);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  if (type === "bot" && voiceEnabled) {
    speakReply(payload);
  }
}

function renderTypingThenReply(reply) {
  const chatWindow = document.getElementById("chat-window");
  if (!chatWindow) {
    return;
  }

  const typingCard = document.createElement("article");
  typingCard.className = "message bot typing-card";
  typingCard.innerHTML = `
    <span class="message-role">Resume Guide</span>
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  chatWindow.appendChild(typingCard);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  window.setTimeout(() => {
    typingCard.remove();
    appendMessage("bot", reply);
  }, 850);
}

function speakReply(payload) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const spokenText = [payload.title || "", ...(payload.bullets || [])].join(". ");
  if (!spokenText.trim()) {
    return;
  }

  if (activeUtterance) {
    window.speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.onend = () => {
    if (activeUtterance === utterance) {
      activeUtterance = null;
    }
  };
  activeUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function setMode(nextMode) {
  currentMode = nextMode;
  const offlineButton = document.getElementById("offline-mode");
  const apiButton = document.getElementById("api-mode");
  if (offlineButton) offlineButton.classList.toggle("is-active", nextMode === "resume");
  if (apiButton) apiButton.classList.toggle("is-active", nextMode === "api");
}

async function fetchApiReply(prompt) {
  if (!chatbotConfig.apiEnabled || !chatbotConfig.apiUrl) {
    return makeCardResponse(
      "AI API not configured",
      [
        "The site is ready for real AI mode, but `chatbot-config.js` still has API mode disabled.",
        "Add your API URL, API key, and enable `apiEnabled` to use freer conversation.",
        "Resume Mode remains active and already knows the resume details.",
      ],
      ["Switch back to Resume Mode.", "Give me a university-focused summary."],
      resumeCards.masters
    );
  }

  try {
    const response = await fetch(chatbotConfig.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(chatbotConfig.apiKey ? { Authorization: `Bearer ${chatbotConfig.apiKey}` } : {}),
      },
      body: JSON.stringify({
        model: chatbotConfig.model,
        messages: [
          { role: "system", content: chatbotConfig.systemPrompt },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const content =
      data.output_text ||
      data.choices?.[0]?.message?.content ||
      data.choices?.[0]?.text ||
      "The AI API responded, but the reply format was not recognized.";

    const bullets = String(content)
      .split(/\n+/)
      .map((line) => line.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 6);

    return makeCardResponse(
      "AI API response",
      bullets.length ? bullets : [String(content)],
      ["Ask another open question.", "Switch to Resume Mode for factual resume answers."],
      []
    );
  } catch (error) {
    return makeCardResponse(
      "AI API error",
      [
        "The chatbot could not reach the configured AI service.",
        String(error.message || error),
        "You can keep using Resume Mode while API settings are adjusted.",
      ],
      ["Switch back to Resume Mode.", "Tell me about Shambhavi's projects."],
      resumeCards.projects
    );
  }
}

const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const promptChips = document.querySelectorAll(".prompt-chip");
const suggestionChips = document.querySelectorAll(".suggestion-chip");
const offlineModeButton = document.getElementById("offline-mode");
const apiModeButton = document.getElementById("api-mode");
const voiceToggleButton = document.getElementById("voice-toggle");

async function handlePrompt(prompt) {
  appendMessage("user", prompt);
  const reply = currentMode === "api" ? await fetchApiReply(prompt) : chooseReply(prompt);
  renderTypingThenReply(reply);
}

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = chatInput.value.trim();
    appendMessage("user", question || " ");
    const reply = currentMode === "api" ? await fetchApiReply(question) : chooseReply(question);
    renderTypingThenReply(reply);
    chatInput.value = "";
    chatInput.focus();
  });
}

promptChips.forEach((chip) => {
  chip.addEventListener("click", () => handlePrompt(chip.dataset.prompt || ""));
});

suggestionChips.forEach((chip) => {
  chip.addEventListener("click", () => handlePrompt(chip.dataset.prompt || ""));
});

if (offlineModeButton) {
  offlineModeButton.addEventListener("click", () => setMode("resume"));
}

if (apiModeButton) {
  apiModeButton.addEventListener("click", () => setMode("api"));
}

if (voiceToggleButton) {
  voiceToggleButton.addEventListener("click", () => {
    voiceEnabled = !voiceEnabled;
    voiceToggleButton.textContent = voiceEnabled ? "Voice On" : "Voice Off";
    voiceToggleButton.classList.toggle("is-active", voiceEnabled);
    if (!voiceEnabled && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      activeUtterance = null;
    }
  });
}
