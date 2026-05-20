Engineering Ethics Final Exam Study Website

How to open the website
1. Open the folder that contains these files.
2. Double-click index.html.
3. The website will open directly in your browser.

Offline use
- This project uses only HTML, CSS, and vanilla JavaScript.
- It does not need npm, React, a server, a backend, a database, or the internet.
- You can zip the whole folder and share it with classmates.

Files
- index.html: The homepage and the 10 case-study sections.
- style.css: The visual design, layout, spacing, colors, and mobile responsiveness.
- script.js: The reusable quiz logic and quiz data.
- README.txt: These instructions.

How to add or edit a case
1. Open index.html.
2. Find the section you want, for example:
   <section id="case-1" ...>
3. Replace the placeholder text inside these blocks:
   A. Case Overview
   B. What I Must Know for the Exam
   C. Ethical Principles Violated
   D. Causes of the Failure
   E. Consequences
   F. Written Exam Questions
   H. Quick Revision Box
4. Keep the section id and data-case-id unchanged, such as case-1 or case-2.

How to add MCQs
1. Open script.js.
2. Find the quizData array.
3. Find the case you want to edit, for example:
   {
     caseId: "case-1",
     questions: [ ... ]
   }
4. Add questions using this format:
   {
     question: "Your question here?",
     options: [
       "Option A",
       "Option B",
       "Option C",
       "Option D"
     ],
     correctAnswer: 1,
     explanation: "Explain why the correct answer is correct."
   }

Important quiz notes
- correctAnswer uses zero-based numbering.
- 0 means the first option.
- 1 means the second option.
- 2 means the third option.
- 3 means the fourth option.
- Correct answers and explanations stay hidden until the quiz is submitted.
- Each case can have its own quiz.
- Add around 20 to 30 MCQs per case when the case content is ready.

Recommended written-answer structure
1. Name the ethical principles violated.
2. Apply the principles to the case facts.
3. Explain why the failure happened.
4. Identify who was responsible.
5. Explain consequences for safety, environment, reputation, or public trust.
6. End with what engineers should have done and the lesson learned.
