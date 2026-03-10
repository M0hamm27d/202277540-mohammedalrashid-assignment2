# AI Usage Report

## 🛠 Tools Used & Use Cases

**AI Tools Used:**
* **ChatGPT**: Primary guided assistant.
* **Google Gemini**: Secondary conceptual research.
* **Grammarly**: Documentation polishing and grammar correction.

**Date of Access:**
* January 29, 2026 – Present

---

## 📖 How Each Tool Was Used

### ChatGPT
Used as a **guided assistant** rather than a solution generator. It was primarily utilized for:
* **Step-by-step explanations** of HTML, CSS, and JavaScript concepts.
* **Debugging** minor errors (e.g., method typos, DOM issues).
* **Clarifying Git commands** and workflow practices.
* **Reviewing structure** and suggesting architectural improvements.
* **Generating snippets** for conceptual understanding (not for blind copy-pasting).

> **Prompt Strategy:** Prompts were structured to ensure explanations of each tag, clear expected outputs, strict adherence to assignment instructions, and concept-check questions to verify understanding.

### Google Gemini
Used occasionally to gather **alternative clarifications** or to compare complex explanations, deepening the conceptual understanding without disrupting the structured CoT (Chain of Thought) from ChatGPT.

### Grammarly
Used strictly for **grammar correction** and language polishing during the final documentation phase.

---

## 💡 Reflection on Recommended Tools
While the assignment mentioned tools like GitHub Copilot, Claude, Cursor, and AWS CodeWhisperer, **ChatGPT** and **Gemini** fulfilled these roles by providing code explanations, debugging guidance, and conceptual clarification equivalent to those platforms.

---

## 📈 Benefits & Challenges

### Benefits
AI significantly supported the learning process by:
* **Breaking down complex concepts**: (e.g., `classList`, `toggle`, `localStorage`).
* **Explaining Git workflow**: (staging, committing, pushing).
* **Reinforcing best practices**: Maintaining one logical change per commit.
* **Debugging assistance**:
    * Typographical errors (e.g., `creatElement`).
    * Incorrect use of `.classList` as a function.
    * Script placement logic inside HTML.
* **Strengthening understanding of**: DOM manipulation, Event listeners, the `Date` object, and Browser rendering behavior.

### Challenges & Limitations
* **Verification**: AI explanations required manual verification to ensure technical correctness.
* **Review**: Generated code required careful line-by-line review to fully grasp the logic.
* **Academic Integrity**: Required conscious effort to avoid "autopilot" coding and ensure the AI acted as a tutor, not a ghostwriter.

---

## 🎓 Learning Outcomes

Through the integrated use of AI, I mastered the following:

### Git & Command Line
- **[1]** Creating folders (`mkdir`) and files via CLI.
- **[2]** The purpose of `.gitignore` and `.gitkeep`.
- **[3]** The difference between `git add`, `commit`, and `push`.
- **[4]** How to inspect commit history and why logic-based commits matter.

### HTML & Browser Behavior
- **[1]** The semantic difference between `<form>` and `<section>`.
- **[2]** The purpose of the `name` attribute in inputs.
- **[3]** Sequential HTML processing and script placement for optimized rendering.

### JavaScript & DOM
- **[1] Web Storage**: `localStorage.setItem()` and `getItem()`.
- **[2] DOM Logic**: `.classList`, `.addEventListener()`, and `.toggle()`.
- **[3] Objects**: Utilizing the `Date` object and `getHours()`.

### CSS & Styling
* **[1] Dark Theme Logic**: Used `.dark-theme` parent class to toggle background and text colors.
* **[2] Descendant Selectors**: Styled `a` and `button` tags specifically when inside the dark theme.
* **[3] Flexbox Layout**: Used `display: flex`, `align-items`, and `justify-content` for header alignment.
* **[4] Responsive Stacking**: Used `flex-wrap` and `flex-direction: column` to handle smaller screens.
* **[5] Media Queries**: Applied `@media` to detect `max-width: 768px` and `portrait` orientation for the whole body.
* **[6] Image Scaling**: Used `max-width: 100%` and `height: auto` to prevent overflow.



---

## 🛡 Responsible Use & Modifications
AI-generated suggestions were **never used blindly**. 

1.  **Originality**: All structural decisions (layout, file organization, naming conventions) were made independently.
2.  **Personal Touch**: Variable names, comments, commit messages, and UI text were written personally.
3.  **Adaptation**: Code suggestions were reviewed, rewritten, and adjusted to fit specific assignment requirements.
4.  **Verification**: No concept was implemented until it was fully understood. 

**Conclusion:** The project structure, logic flow, and implementation remain original. AI served as a conceptual guide and reviewer rather than a replacement for independent work.