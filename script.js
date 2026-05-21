// Engineering Ethics Study Website
// Add or replace case quiz data below. Each quiz uses caseId, question, options,
// correctAnswer, and explanation. correctAnswer is zero-based: 0 = first option.

const quizData = [
  {
    caseId: "case-1",
    questions: [
      {
        question: "In the Volkswagen emissions scandal, why is the use of defeat-device software considered a serious violation of engineering ethics rather than only a technical problem?",
        options: [
          "Because the software made the vehicles more expensive to repair",
          "Because the software was intentionally designed to mislead emissions testing and hide real-world pollution",
          "Because the software reduced customer comfort during testing",
          "Because the software was installed without changing the car's appearance"
        ],
        correctAnswer: 1,
        explanation: "The ethical issue is not simply that software was used. The problem is that the software was intentionally designed to deceive regulators and hide the vehicle's real emissions behavior."
      },
      {
        question: "In terms of transparency, what was Volkswagen's main failure?",
        options: [
          "It gave regulators and consumers complete information about how the vehicles behaved",
          "It failed to clearly reveal that the vehicles behaved differently during laboratory tests and normal road driving",
          "It used too many technical terms in its advertisements",
          "It allowed customers to choose diesel vehicles"
        ],
        correctAnswer: 1,
        explanation: "Transparency requires truthful disclosure. Volkswagen hid the difference between test behavior and real-world behavior from regulators, testers, and consumers."
      },
      {
        question: "Which statement best explains how Volkswagen violated honesty in this case?",
        options: [
          "It sold vehicles in a competitive market",
          "It promoted vehicles as environmentally friendly while hiding their real emissions performance",
          "It used diesel technology instead of only electric vehicles",
          "It followed laboratory testing procedures exactly as intended"
        ],
        correctAnswer: 1,
        explanation: "Honesty was violated because Volkswagen's claims gave a false impression of environmental performance."
      },
      {
        question: "The cars appeared compliant during laboratory testing but produced much higher emissions during real road driving. Why is this ethically important?",
        options: [
          "Because ethics only applies inside laboratories",
          "Because passing a test is the only responsibility of engineers",
          "Because the company satisfied the test format while failing the real purpose of the regulation",
          "Because road driving is not related to public welfare"
        ],
        correctAnswer: 2,
        explanation: "The purpose of emissions regulation is to protect people and the environment, not merely to pass a lab procedure."
      },
      {
        question: "Which ethical principle is most directly connected to the harm caused by higher real-world emissions?",
        options: [
          "Public welfare",
          "Product styling",
          "Employee convenience",
          "Market segmentation"
        ],
        correctAnswer: 0,
        explanation: "Public welfare is connected to air quality, public health, and environmental protection."
      },
      {
        question: "Which answer best describes why Volkswagen's sustainability image made the scandal worse?",
        options: [
          "The company had no environmental reputation before the scandal",
          "The company's public promise of sustainability conflicted with its hidden deceptive behavior",
          "Sustainability claims are never relevant in engineering ethics",
          "The scandal only affected advertising departments"
        ],
        correctAnswer: 1,
        explanation: "The contradiction between Volkswagen's public image and actual conduct increased the ethical seriousness of the case."
      },
      {
        question: "In terms of professional responsibility, what should engineers have done if they knew the software was designed to cheat emissions testing?",
        options: [
          "Continue because managers are always responsible for ethics",
          "Refuse participation, document concerns, and report the issue through proper channels",
          "Improve the deception so it would be harder to detect",
          "Ignore the issue because software decisions do not affect society"
        ],
        correctAnswer: 1,
        explanation: "Engineers are responsible for refusing deceptive work and protecting the public."
      },
      {
        question: "Which of the following best shows that the Volkswagen case was intentional misconduct?",
        options: [
          "The vehicles were tested in laboratories",
          "The software detected testing conditions and changed the vehicle's behavior during the test",
          "The company sold cars internationally",
          "Consumers liked fuel-efficient cars"
        ],
        correctAnswer: 1,
        explanation: "The software's ability to detect tests shows deliberate design, not accidental failure."
      },
      {
        question: "From an accountability perspective, which response is most ethically appropriate after such a scandal?",
        options: [
          "Deny the issue and blame the testing equipment",
          "Accept responsibility, compensate affected consumers, cooperate with regulators, and reform internal culture",
          "Focus only on new advertisements",
          "Treat the issue as a minor public relations problem"
        ],
        correctAnswer: 1,
        explanation: "Accountability means accepting responsibility and correcting the harm, not just protecting reputation."
      },
      {
        question: "Which stakeholder group was most directly misled by Volkswagen's false emissions behavior?",
        options: [
          "Regulators, governments, testers, and consumers",
          "Only competitors",
          "Only car designers",
          "Only future employees"
        ],
        correctAnswer: 0,
        explanation: "These groups relied on truthful emissions information and were deceived by the defeat-device strategy."
      },
      {
        question: "Which statement best connects the scandal to corporate culture?",
        options: [
          "The scandal was only about one car model and had no organizational meaning",
          "The scandal suggests that the organization tolerated or encouraged results over ethical conduct",
          "Corporate culture is only about uniforms and office design",
          "Corporate culture has no effect on engineering decisions"
        ],
        correctAnswer: 1,
        explanation: "When misconduct involves multiple people and continues over time, it indicates a deeper cultural problem."
      },
      {
        question: "Why is \"short-term profit over long-term sustainability\" a useful way to explain this case?",
        options: [
          "Volkswagen chose immediate business success and market image over honest environmental responsibility",
          "Volkswagen stopped caring about customers forever",
          "Sustainability is unrelated to engineering ethics",
          "Short-term profit is always illegal"
        ],
        correctAnswer: 0,
        explanation: "The company appeared to prioritize market success and reputation instead of truthful long-term environmental responsibility."
      },
      {
        question: "In terms of legal compliance, what was unethical about Volkswagen's behavior?",
        options: [
          "The company designed vehicles to genuinely satisfy environmental goals",
          "The company appeared compliant during tests while hiding non-compliant real-world behavior",
          "The company asked regulators to perform more tests",
          "The company avoided selling vehicles"
        ],
        correctAnswer: 1,
        explanation: "Legal compliance must be real, not manipulated. Volkswagen engineered the vehicles to appear compliant without truly meeting the purpose of the law."
      },
      {
        question: "Which answer best explains the difference between an engineering mistake and the Volkswagen defeat device?",
        options: [
          "A mistake is intentional, while the defeat device was accidental",
          "A mistake is unexpected failure, while the defeat device was designed to deceive",
          "There is no difference",
          "A defeat device is ethical if it uses advanced technology"
        ],
        correctAnswer: 1,
        explanation: "The defeat device worked as designed. The ethical problem was the purpose of the design."
      },
      {
        question: "Why might regulators demand stronger on-road testing after this scandal?",
        options: [
          "Because laboratory tests always show the full truth",
          "Because Volkswagen showed that lab results can be manipulated and may not reflect real-world behavior",
          "Because consumers no longer buy cars",
          "Because environmental claims are never important"
        ],
        correctAnswer: 1,
        explanation: "The scandal showed that laboratory compliance alone may not prove real-world environmental performance."
      },
      {
        question: "Which option best describes the public trust issue in the case?",
        options: [
          "Public trust was damaged because Volkswagen's actual behavior contradicted its public environmental claims",
          "Public trust was not affected because only engineers understood the issue",
          "Public trust increased because the company used advanced software",
          "Public trust depends only on vehicle price"
        ],
        correctAnswer: 0,
        explanation: "Trust is damaged when stakeholders discover that a company's promises do not match its actions."
      },
      {
        question: "In terms of environmental responsibility, what should Volkswagen have done instead of using defeat devices?",
        options: [
          "Design vehicles that genuinely reduce emissions during real driving",
          "Make the defeat device harder to discover",
          "Stop sharing emissions information with regulators",
          "Focus only on laboratory performance"
        ],
        correctAnswer: 0,
        explanation: "Environmental responsibility requires real-world harm reduction, not only test performance."
      },
      {
        question: "Which answer best explains why consumers were harmed ethically even if they were not physically injured immediately?",
        options: [
          "They made purchasing decisions based on misleading environmental claims",
          "They were given too many vehicle choices",
          "They were asked to drive only in laboratories",
          "They were not stakeholders"
        ],
        correctAnswer: 0,
        explanation: "Consumers have a right to truthful information, especially when environmental responsibility is part of the product claim."
      },
      {
        question: "Which of the following is the strongest exam answer if asked \"What is the main ethical lesson of the Volkswagen scandal?\"",
        options: [
          "Companies should avoid diesel vehicles in all cases",
          "Engineers and companies must not use technical knowledge to deceive regulators or the public",
          "Laboratory testing should never be used",
          "Marketing is more important than compliance"
        ],
        correctAnswer: 1,
        explanation: "The main lesson is that technical ability must be controlled by ethical responsibility."
      },
      {
        question: "Which situation best matches the ethical problem in Volkswagen's case?",
        options: [
          "A company discovers an accidental defect and reports it immediately",
          "A company designs a system to pass inspection while hiding unsafe or harmful real-world behavior",
          "A company improves a product after customer feedback",
          "A company follows regulations and verifies its claims independently"
        ],
        correctAnswer: 1,
        explanation: "This captures the core ethical issue: passing inspection by hiding the real problem."
      },
      {
        question: "If a written question asks how Volkswagen could recover, which answer is strongest?",
        options: [
          "Increase advertising and wait until the public forgets",
          "Accept responsibility, compensate affected people, cooperate with regulators, change culture, and prove future claims",
          "Blame only customers and suppliers",
          "Stop discussing sustainability forever"
        ],
        correctAnswer: 1,
        explanation: "Recovery requires real ethical reform, not only image repair."
      },
      {
        question: "What does the discovery of the scandal through on-road testing show about ethical evaluation?",
        options: [
          "Claims should be accepted if the company is famous",
          "Real behavior must be checked, not only official claims or controlled tests",
          "Testing is unnecessary when a company has a good reputation",
          "Regulators should trust all sustainability statements"
        ],
        correctAnswer: 1,
        explanation: "The scandal shows the importance of verifying what companies promise against what they actually do."
      },
      {
        question: "Which ethical principle is most connected to hiding information from regulators and testers?",
        options: [
          "Transparency",
          "Product variety",
          "Comfort",
          "Speed"
        ],
        correctAnswer: 0,
        explanation: "Hiding relevant information from authorities violates transparency."
      },
      {
        question: "Which option best explains why multiple employees or executives knowing about the defeat devices matters ethically?",
        options: [
          "It shows that the scandal may reflect an organizational culture problem, not only one individual mistake",
          "It proves that no one was responsible",
          "It makes the deception acceptable",
          "It means the technology was harmless"
        ],
        correctAnswer: 0,
        explanation: "Shared knowledge of misconduct suggests weak ethical culture and poor accountability."
      },
      {
        question: "In a general engineering ethics exam, which principle-based explanation is strongest for Volkswagen?",
        options: [
          "Volkswagen made a marketing mistake with no engineering relevance",
          "Volkswagen used engineering software to create a false appearance of compliance, violating honesty, transparency, public welfare, and environmental responsibility",
          "Volkswagen only had a financial problem",
          "Volkswagen was ethical because the vehicles passed lab tests"
        ],
        correctAnswer: 1,
        explanation: "This answer connects the technical action to multiple ethical principles, which is exactly what written and MCQ ethics questions usually test."
      },
      {
        question: "If a written exam asks \"How was the Volkswagen scandal discovered?\", which answer is strongest?",
        options: [
          "Customers noticed the cars were uncomfortable",
          "On-road emissions testing showed emissions were much higher than laboratory results",
          "Volkswagen announced it before anyone tested the cars",
          "The cars stopped working during lab testing"
        ],
        correctAnswer: 1,
        explanation: "The scandal became clear when road testing showed that real emissions did not match lab emissions."
      },
      {
        question: "Why does the discovery method matter ethically in the Volkswagen case?",
        options: [
          "It showed that the cars had too many features",
          "It proved there was a gap between Volkswagen's claims and real vehicle behavior",
          "It showed that diesel cars are always illegal",
          "It proved that testing is useless"
        ],
        correctAnswer: 1,
        explanation: "The discovery exposed the difference between promise and reality, which is central to public trust."
      },
      {
        question: "Which phrase would be best in a 5-mark written answer about Volkswagen?",
        options: [
          "Volkswagen was unlucky",
          "Volkswagen used engineering software to create a false appearance of compliance",
          "Volkswagen only had a marketing problem",
          "Volkswagen had no stakeholders"
        ],
        correctAnswer: 1,
        explanation: "This sentence connects the technical action to the ethical violation."
      },
      {
        question: "In terms of consumer rights, why was Volkswagen's behavior unethical?",
        options: [
          "Consumers received too much information",
          "Consumers were misled when buying cars based on environmental claims",
          "Consumers were responsible for emissions testing",
          "Consumers designed the defeat device"
        ],
        correctAnswer: 1,
        explanation: "Consumers relied on claims that did not match actual vehicle performance."
      },
      {
        question: "If an engineer says, \"I only wrote the software, management made the decision,\" what is the best ethical response?",
        options: [
          "Engineers have no responsibility for software consequences",
          "Engineers still have professional responsibility when their work deceives or harms the public",
          "Only customers are responsible",
          "Software is never part of ethics"
        ],
        correctAnswer: 1,
        explanation: "Engineers cannot ignore the social and legal effects of their technical work."
      },
      {
        question: "Which option best explains why Volkswagen damaged trust beyond only its own company?",
        options: [
          "It made consumers more skeptical of environmental claims in the whole automobile industry",
          "It made all cars impossible to test",
          "It proved sustainability is unimportant",
          "It only affected one customer"
        ],
        correctAnswer: 0,
        explanation: "Major scandals can reduce trust in similar claims from other companies."
      },
      {
        question: "Which answer best describes the ethical failure in Volkswagen's corporate culture?",
        options: [
          "The company had too many employees",
          "The organization appeared to tolerate deception to protect market share and reputation",
          "The company had too many written policies",
          "The organization focused too much on transparency"
        ],
        correctAnswer: 1,
        explanation: "The case suggests a culture where results were prioritized over ethical conduct."
      },
      {
        question: "Which principle is most connected to Volkswagen's duty to prove future sustainability claims?",
        options: [
          "Verification and transparency",
          "Decoration",
          "Speed",
          "Entertainment"
        ],
        correctAnswer: 0,
        explanation: "After trust is damaged, claims must be supported by clear evidence and independent testing."
      },
      {
        question: "Which answer best explains why this case is important for engineering ethics students?",
        options: [
          "It shows that technical solutions are always ethical",
          "It shows that software and engineering design can be misused to deceive society",
          "It shows that regulations are unnecessary",
          "It shows that consumers should not trust any technology"
        ],
        correctAnswer: 1,
        explanation: "The case teaches that technical ability must be guided by ethical judgment."
      },
      {
        question: "If asked \"What should Volkswagen have done instead?\", which answer is best?",
        options: [
          "Hide the software more carefully",
          "Truly reduce emissions, disclose problems, follow regulations, and protect public welfare",
          "Stop all communication with regulators",
          "Blame consumers"
        ],
        correctAnswer: 1,
        explanation: "Ethical action requires solving the real problem honestly."
      }
    ]
  },
  {
    caseId: "case-2",
    questions: [
      {
        question: "In the Heathrow Terminal 5 case, what makes the opening-day failure an engineering ethics issue rather than only a travel inconvenience?",
        options: [
          "The terminal was expensive to build",
          "Project decisions affected passengers, public trust, service reliability, and stakeholder welfare",
          "The terminal had modern architecture",
          "The airport had many shops"
        ],
        correctAnswer: 1,
        explanation: "The failure affected real users through delays, baggage problems, cancellations, and poor communication."
      },
      {
        question: "Which statement best describes the main difference between the Volkswagen case and the Heathrow Terminal 5 case?",
        options: [
          "Volkswagen was about poor airport training, while Heathrow was about emissions fraud",
          "Volkswagen was mainly intentional deception, while Heathrow was mainly poor readiness and project execution",
          "Both cases were only about financial accounting",
          "Heathrow involved no ethical concerns"
        ],
        correctAnswer: 1,
        explanation: "Volkswagen centered on deliberate cheating, while Heathrow centered on project-management failure, readiness, and stakeholder impact."
      },
      {
        question: "Why was the \"Big Bang\" launch approach risky for Heathrow Terminal 5?",
        options: [
          "It allowed too much time for testing",
          "It moved many operations at once, so failures quickly affected many passengers and flights",
          "It reduced the number of passengers",
          "It removed the need for staff training"
        ],
        correctAnswer: 1,
        explanation: "A large-scale immediate launch leaves little room to recover when problems occur."
      },
      {
        question: "In terms of risk management, what was one major weakness in the Heathrow T5 opening?",
        options: [
          "The organization prepared too many contingency plans",
          "The project did not manage predictable opening-day problems effectively",
          "The project had no passengers",
          "The terminal was too small to have risks"
        ],
        correctAnswer: 1,
        explanation: "Problems such as baggage failure, long queues, staff confusion, and communication breakdowns should have had stronger contingency planning."
      },
      {
        question: "Why is poor passenger communication an ethical issue in this case?",
        options: [
          "Communication is only a marketing issue",
          "Passengers affected by delays and baggage failures needed truthful, timely information",
          "Communication only matters after the project is successful",
          "Passengers should solve the problem themselves"
        ],
        correctAnswer: 1,
        explanation: "When people are harmed or inconvenienced, they deserve clear information and support."
      },
      {
        question: "Which principle is most connected to British Airways ignoring staff concerns before opening?",
        options: [
          "Stakeholder management",
          "Product color selection",
          "Luxury branding",
          "Advertising creativity"
        ],
        correctAnswer: 0,
        explanation: "Staff are key stakeholders because they understand operational readiness and run the system."
      },
      {
        question: "Why was insufficient staff training a serious failure?",
        options: [
          "Staff training is unrelated to system success",
          "A complex system cannot operate ethically or reliably if the people running it are not prepared",
          "Training only matters for small projects",
          "Passengers should train the staff"
        ],
        correctAnswer: 1,
        explanation: "The system's success depended on trained staff who could manage baggage, check-in, and passenger flow."
      },
      {
        question: "Which statement best explains the baggage-handling problem from a project-management perspective?",
        options: [
          "It was only a passenger mistake",
          "The system was complex and suffered from implementation, capacity, and operational readiness problems",
          "Baggage systems never require testing",
          "The system failed because airports should not use technology"
        ],
        correctAnswer: 1,
        explanation: "The baggage failure reflected readiness and performance planning problems."
      },
      {
        question: "What is the ethical problem with opening a public system mainly because of deadline pressure?",
        options: [
          "Deadlines are always unethical",
          "Meeting a deadline can become unethical if known risks to users are ignored",
          "Public systems do not need deadlines",
          "Deadline pressure improves safety automatically"
        ],
        correctAnswer: 1,
        explanation: "Deadlines matter, but they should not override readiness and public responsibility."
      },
      {
        question: "What does the Heathrow T5 case teach about testing?",
        options: [
          "Testing is unnecessary for large projects",
          "Testing must be realistic and connected to actual opening-day conditions",
          "Testing should only involve ideal scenarios",
          "Testing guarantees success in all cases"
        ],
        correctAnswer: 1,
        explanation: "Although testing occurred, opening-day conditions still exposed problems in readiness and capacity."
      },
      {
        question: "Which failure area is most directly related to passengers not knowing what was happening during delays?",
        options: [
          "Poor communication and crisis management",
          "Strong stakeholder engagement",
          "Good transparency",
          "Perfect implementation"
        ],
        correctAnswer: 0,
        explanation: "Lack of announcements, staff help, and information systems worsened passenger frustration."
      },
      {
        question: "Why is stakeholder concern important before launching a complex project?",
        options: [
          "Stakeholders only complain and should be ignored",
          "Stakeholders can identify practical risks that managers may miss",
          "Stakeholders are unrelated to project success",
          "Stakeholders only matter after the launch"
        ],
        correctAnswer: 1,
        explanation: "Staff and unions raised concerns based on operational experience."
      },
      {
        question: "Which answer best describes a safer alternative to the Heathrow T5 Big Bang launch?",
        options: [
          "Launch all operations at once with no backup",
          "Use a phased or iterative opening with fewer flights first",
          "Cancel all testing",
          "Ignore staff training until after launch"
        ],
        correctAnswer: 1,
        explanation: "A phased launch would reduce impact and allow problems to be fixed gradually."
      },
      {
        question: "Which principle is most connected to the need to plan for baggage-system failure?",
        options: [
          "Risk management",
          "Styling",
          "Entertainment",
          "Branding only"
        ],
        correctAnswer: 0,
        explanation: "A predictable high-impact failure should have been identified and prepared for."
      },
      {
        question: "Why did the Heathrow T5 failure damage reputation?",
        options: [
          "Because passengers saw that the promised world-class service did not match the opening-day reality",
          "Because passengers dislike all airports equally",
          "Because the terminal had no architecture",
          "Because no flights were affected"
        ],
        correctAnswer: 0,
        explanation: "Public trust was harmed because the project's promise conflicted with actual user experience."
      },
      {
        question: "Which statement best explains the role of external pressure in the Heathrow case?",
        options: [
          "Public perception and deadline pressure may have pushed management to open despite risks",
          "External pressure always improves project safety",
          "External pressure removed all responsibility from managers",
          "The public forced passengers to lose baggage"
        ],
        correctAnswer: 0,
        explanation: "The video suggests pressure to meet the deadline and improve public perception contributed to the failure."
      },
      {
        question: "Which of the following best represents the ethical lesson for project managers?",
        options: [
          "Open the project on time even if users are harmed",
          "Balance schedule, readiness, risk, training, communication, and stakeholder welfare",
          "Focus only on cost and ignore operations",
          "Avoid listening to staff"
        ],
        correctAnswer: 1,
        explanation: "Ethical project management requires responsibility to people affected by the project."
      },
      {
        question: "If staff reported they did not understand the system and management ignored them, which ethical issue is most relevant?",
        options: [
          "Ignoring stakeholder warnings",
          "Good communication",
          "Successful training",
          "Perfect accountability"
        ],
        correctAnswer: 0,
        explanation: "Staff concerns were signals of operational risk."
      },
      {
        question: "Which statement best describes the crisis-management failure?",
        options: [
          "The organization quickly solved all passenger concerns with clear communication",
          "The organization struggled to manage baggage failure, queues, confusion, and passenger information",
          "There was no crisis because flights were unaffected",
          "Crisis management is only needed after one month"
        ],
        correctAnswer: 1,
        explanation: "The opening-day crisis was worsened by poor communication and weak contingency response."
      },
      {
        question: "What is the best explanation of why the baggage system's capacity problem matters ethically?",
        options: [
          "Capacity planning is only a technical detail",
          "Poor capacity planning can harm users when a system fails under real demand",
          "Capacity is irrelevant in airports",
          "Passengers should reduce luggage by themselves"
        ],
        correctAnswer: 1,
        explanation: "If a system cannot handle real demand, people suffer the consequences."
      },
      {
        question: "Which answer best connects Heathrow T5 to accountability?",
        options: [
          "Organizations should deny responsibility when launch problems happen",
          "Organizations should explain the failure, compensate affected users, and improve systems",
          "Accountability only applies to passengers",
          "Accountability means blaming one random employee"
        ],
        correctAnswer: 1,
        explanation: "Accountability requires owning the failure and correcting harm."
      },
      {
        question: "Why is \"the system was tested\" not a complete defense for the Heathrow failure?",
        options: [
          "Testing never matters",
          "Testing may be insufficient if it does not reflect real conditions, real staff readiness, and real capacity",
          "Testing always makes failure impossible",
          "Testing is only for software projects"
        ],
        correctAnswer: 1,
        explanation: "Testing must match realistic operational stress and user conditions."
      },
      {
        question: "Which sentence would be strongest in a written answer about Heathrow T5?",
        options: [
          "The terminal was unlucky and nothing could be learned",
          "The project failed ethically because readiness, risk planning, communication, and stakeholder concerns were not handled properly before affecting the public",
          "The only issue was that passengers were impatient",
          "The project was successful because it opened on the planned date"
        ],
        correctAnswer: 1,
        explanation: "This connects the case facts to ethical project responsibility."
      },
      {
        question: "Which group should be considered stakeholders in the Heathrow Terminal 5 case?",
        options: [
          "Only top executives",
          "Passengers, staff, British Airways, airport management, regulators, and the public",
          "Only architects",
          "Only baggage manufacturers"
        ],
        correctAnswer: 1,
        explanation: "Many groups were affected by the opening-day failure."
      },
      {
        question: "What is the strongest final lesson of the Heathrow Terminal 5 case?",
        options: [
          "A project is successful if it opens on time",
          "Complex systems must be launched only when operational readiness, training, risk planning, communication, and stakeholder concerns are properly addressed",
          "Public users do not matter in project management",
          "Reputation pressure is more important than readiness"
        ],
        correctAnswer: 1,
        explanation: "The case teaches that responsible project launch requires more than construction completion."
      },
      {
        question: "If a written exam asks \"How did the Heathrow T5 failure become visible?\", which answer is strongest?",
        options: [
          "It became visible through opening-day passenger confusion, baggage failure, long queues, and cancelled flights",
          "It was discovered only years later in a laboratory",
          "It was hidden from all passengers",
          "It was only visible in financial reports"
        ],
        correctAnswer: 0,
        explanation: "The failure became obvious when the real system failed under opening-day operating conditions."
      },
      {
        question: "Why does the opening-day visibility matter ethically?",
        options: [
          "It showed that real users were affected by poor readiness",
          "It proved that passengers caused the project failure",
          "It showed that testing is never useful",
          "It proved the terminal should never have been built"
        ],
        correctAnswer: 0,
        explanation: "The ethical issue is that public users experienced avoidable disruption."
      },
      {
        question: "Which phrase would be strongest in a written answer about Heathrow T5?",
        options: [
          "The terminal was unlucky",
          "Opening on time is not success if the system is not operationally ready",
          "Airports should not use baggage systems",
          "Passengers were the main cause"
        ],
        correctAnswer: 1,
        explanation: "This captures the core lesson of the case."
      },
      {
        question: "In terms of stakeholder management, why was ignoring staff concerns unethical?",
        options: [
          "Staff concerns can reveal real operational risks before users are harmed",
          "Staff should never be involved in projects",
          "Only top managers can understand systems",
          "Staff concerns are always emotional and irrelevant"
        ],
        correctAnswer: 0,
        explanation: "Staff are key stakeholders who understand daily operations."
      },
      {
        question: "Why is a phased rollout ethically better for a complex public system?",
        options: [
          "It hides all problems from the public",
          "It reduces risk by exposing fewer users while problems are identified and fixed",
          "It removes the need for testing",
          "It guarantees no cost"
        ],
        correctAnswer: 1,
        explanation: "Phased rollout limits damage and allows controlled learning."
      },
      {
        question: "Which option best explains the human-factor failure in Heathrow T5?",
        options: [
          "Staff were not sufficiently prepared to operate the new terminal smoothly",
          "Passengers did not understand engineering ethics",
          "The terminal had no technology",
          "The baggage had no labels"
        ],
        correctAnswer: 0,
        explanation: "Human readiness is part of system readiness."
      },
      {
        question: "What is the best ethical response when staff say a system is not ready?",
        options: [
          "Ignore them to protect the deadline",
          "Investigate the concerns, test readiness, and delay launch if needed",
          "Punish them for speaking",
          "Launch faster"
        ],
        correctAnswer: 1,
        explanation: "Ethical management requires responding to credible warnings."
      },
      {
        question: "Which principle is most connected to informing passengers during delays and baggage failure?",
        options: [
          "Transparency and accountability",
          "Decoration",
          "Branding only",
          "Profit maximization"
        ],
        correctAnswer: 0,
        explanation: "Affected stakeholders deserve timely, truthful information."
      },
      {
        question: "Which answer best explains why \"the system had been tested\" was not enough?",
        options: [
          "Testing was irrelevant",
          "Testing did not fully prevent real-load, staff-readiness, and opening-day operational failures",
          "Testing always creates failure",
          "Testing only matters after opening"
        ],
        correctAnswer: 1,
        explanation: "Testing must reflect realistic use, not only controlled scenarios."
      },
      {
        question: "If asked \"What should have been done differently?\", which answer is strongest?",
        options: [
          "Launch everything at once and hope staff adapt",
          "Use phased opening, realistic testing, trained staff, contingency plans, and clear communication",
          "Stop all flights permanently",
          "Ignore public perception"
        ],
        correctAnswer: 1,
        explanation: "This answer covers the main preventions for the failure."
      }
    ]
  },
  {
    caseId: "case-3",
    questions: [
      {
        question: "Boeing developed the 737 MAX under pressure to compete with Airbus while keeping the aircraft similar to older 737 models. Why did this become an engineering ethics issue?",
        options: [
          "Similarity goals helped reduce training while hiding important safety-critical changes.",
          "Competition between companies is always unethical.",
          "Larger aircraft engines are automatically unsafe.",
          "Airlines should never buy updated aircraft."
        ],
        correctAnswer: 0,
        explanation: "The ethical issue was not competition itself, but allowing business goals to reduce transparency and training around safety-critical changes."
      },
      {
        question: "What was MCAS designed to do in the Boeing 737 MAX?",
        options: [
          "Automatically push the aircraft nose down under certain conditions.",
          "Control passenger entertainment.",
          "Replace all pilot decision-making permanently.",
          "Improve airport ticketing systems."
        ],
        correctAnswer: 0,
        explanation: "MCAS could command nose-down trim when the system believed the aircraft angle was too high."
      },
      {
        question: "Why was MCAS ethically significant?",
        options: [
          "It could affect aircraft control, but many pilots were not clearly informed or trained enough.",
          "It was only a cosmetic cockpit feature.",
          "It was unrelated to flight behavior.",
          "It was designed only for ground maintenance."
        ],
        correctAnswer: 0,
        explanation: "A system that affects flight control must be transparent and understood by pilots."
      },
      {
        question: "In terms of transparency, what was Boeing's main failure?",
        options: [
          "MCAS behavior and risk were not clearly communicated to key stakeholders.",
          "Boeing gave pilots too much useful safety information.",
          "Boeing disclosed all details perfectly.",
          "Transparency only applied to ticket prices."
        ],
        correctAnswer: 0,
        explanation: "Pilots, airlines, and regulators needed clear information about MCAS."
      },
      {
        question: "Why is blaming only the pilots ethically weak?",
        options: [
          "Pilots faced hidden or poorly explained automation during an emergency.",
          "Pilots had no role in flying the aircraft.",
          "Pilots designed MCAS themselves.",
          "Pilots controlled Boeing's certification strategy."
        ],
        correctAnswer: 0,
        explanation: "The case involves system design, training, automation, and communication, not only pilot action."
      },
      {
        question: "Which ethical principle is most directly connected to two fatal crashes involving passengers and crew?",
        options: [
          "Public safety.",
          "Product branding.",
          "Interior design.",
          "Intellectual property."
        ],
        correctAnswer: 0,
        explanation: "Loss of life makes public safety the central principle."
      },
      {
        question: "What made the larger engine placement important in the case?",
        options: [
          "It changed the aircraft behavior and contributed to the need for MCAS.",
          "It only changed the aircraft color.",
          "It removed the need for all software.",
          "It made pilot training impossible."
        ],
        correctAnswer: 0,
        explanation: "The larger engines changed flight characteristics, leading Boeing to add MCAS."
      },
      {
        question: "Which answer best explains the conflict between profit and safety?",
        options: [
          "Avoiding costly retraining and competing quickly influenced safety-related decisions.",
          "Profit is always illegal in engineering.",
          "Safety is only important after certification.",
          "Competition removes professional responsibility."
        ],
        correctAnswer: 0,
        explanation: "Business pressure became ethically problematic when it affected training and disclosure."
      },
      {
        question: "In terms of accountability, what should Boeing have done after early warnings and the first crash?",
        options: [
          "Act faster with disclosure, fixes, training, and cooperation.",
          "Wait for public pressure before investigating.",
          "Blame only pilots and airlines.",
          "Continue unchanged because certification ended responsibility."
        ],
        correctAnswer: 0,
        explanation: "Accountability means taking responsibility and preventing repeated harm."
      },
      {
        question: "Why was faulty sensor input important?",
        options: [
          "Bad data could trigger MCAS and cause dangerous nose-down commands.",
          "Sensors only affected cabin temperature.",
          "Sensor input was unrelated to MCAS.",
          "Bad sensors make pilot training unnecessary."
        ],
        correctAnswer: 0,
        explanation: "Automation acting on faulty data can create serious risk."
      },
      {
        question: "Which statement best explains why Boeing's similarity claim mattered ethically?",
        options: [
          "It supported limited training even though the MAX had safety-relevant differences.",
          "It proved the MAX was exactly the same as older planes.",
          "It removed the need for safety analysis.",
          "It only affected marketing posters."
        ],
        correctAnswer: 0,
        explanation: "Similarity claims are ethical issues when they reduce training or hide risk."
      },
      {
        question: "What role did pilot training play in the ethical failure?",
        options: [
          "Pilots were not adequately prepared for MCAS behavior in an emergency.",
          "Pilots received too much simulator practice.",
          "Training was irrelevant because pilots never use automation.",
          "Training matters only for maintenance staff."
        ],
        correctAnswer: 0,
        explanation: "Pilots need to understand safety-critical systems that can affect control."
      },
      {
        question: "Which answer best describes the public trust impact?",
        options: [
          "The crashes made people question Boeing's safety culture and regulatory oversight.",
          "Public trust increased because the plane was grounded.",
          "Public trust was unrelated to aviation safety.",
          "Public trust depends only on ticket prices."
        ],
        correctAnswer: 0,
        explanation: "The crisis damaged trust in Boeing, FAA oversight, and aircraft certification."
      },
      {
        question: "Why is FAA oversight ethically relevant?",
        options: [
          "Certification is part of the public safety system.",
          "FAA oversight only affects airline food.",
          "Regulators have no relationship to safety.",
          "Certification removes company responsibility."
        ],
        correctAnswer: 0,
        explanation: "Public safety depends on careful, independent regulatory oversight."
      },
      {
        question: "What is the strongest explanation of the Boeing case as an ethics case?",
        options: [
          "Design, software, training, business pressure, and oversight decisions affected human life.",
          "Boeing used aircraft software, and software is always unethical.",
          "The case was only about airline branding.",
          "The crashes were unrelated to engineering."
        ],
        correctAnswer: 0,
        explanation: "The case combines technical and organizational decisions with public harm."
      },
      {
        question: "Which answer best describes professional responsibility in this case?",
        options: [
          "Engineers and managers had to ensure MCAS was safe, disclosed, tested, and trained.",
          "Engineers only needed to make the aircraft profitable.",
          "Managers could ignore technical risk after certification.",
          "Pilots alone were responsible for software design."
        ],
        correctAnswer: 0,
        explanation: "Safety-critical design requires engineering and management responsibility."
      },
      {
        question: "Which written-answer claim would be weakest?",
        options: [
          "The crisis was only pilot error.",
          "Transparency about MCAS was weak.",
          "Training was a major issue.",
          "Public safety was affected."
        ],
        correctAnswer: 0,
        explanation: "Reducing the crisis to pilot error ignores design, training, and communication failures."
      },
      {
        question: "What makes MCAS an automation ethics issue?",
        options: [
          "It could act automatically in a way pilots did not fully expect or understand.",
          "It replaced all aircraft hardware.",
          "It operated only after landing.",
          "It was used only for entertainment."
        ],
        correctAnswer: 0,
        explanation: "Automation must be predictable, understandable, and controllable by humans."
      },
      {
        question: "Which answer best explains risk management failure?",
        options: [
          "Boeing did not sufficiently control the danger of MCAS acting on faulty sensor data.",
          "Boeing removed every sensor from the aircraft.",
          "MCAS had no relationship to safety.",
          "Risk management applies only after crashes."
        ],
        correctAnswer: 0,
        explanation: "A safety-critical system should not become dangerous from one bad input."
      },
      {
        question: "Why did two similar crashes make the case more serious ethically?",
        options: [
          "They suggested a systemic problem and slow corrective action.",
          "They proved the aircraft was safe.",
          "They made training unnecessary.",
          "They showed public safety was unrelated."
        ],
        correctAnswer: 0,
        explanation: "Repeated similar harm after warnings strengthens accountability concerns."
      },
      {
        question: "Which answer best describes what Boeing should have done before launch?",
        options: [
          "Clearly disclose MCAS, require training, test sensor failure cases, and improve redundancy.",
          "Hide system behavior to avoid confusing pilots.",
          "Focus only on selling the aircraft quickly.",
          "Treat pilot training as unrelated to safety."
        ],
        correctAnswer: 0,
        explanation: "These actions directly address transparency, training, and risk management."
      },
      {
        question: "What was ethically wrong with minimizing pilot retraining?",
        options: [
          "It reduced preparation for safety-critical aircraft behavior.",
          "It made aircraft cheaper to paint.",
          "It improved emergency response.",
          "It had no safety effect."
        ],
        correctAnswer: 0,
        explanation: "Less training becomes unethical when pilots need knowledge to manage risk."
      },
      {
        question: "Which answer best connects accountability and victims?",
        options: [
          "Accountability includes responsibility to victims, correction, compensation, and prevention.",
          "Accountability only means protecting the company image.",
          "Accountability ends when lawsuits begin.",
          "Accountability has no role after fatalities."
        ],
        correctAnswer: 0,
        explanation: "Accountability includes response to harm and preventing recurrence."
      },
      {
        question: "What is the best ethical interpretation of Boeing's business pressure?",
        options: [
          "It became dangerous when it influenced communication and training about a safety-critical system.",
          "It was ethical because profit always comes first.",
          "It was irrelevant because engineering has no business context.",
          "It proves all competition is immoral."
        ],
        correctAnswer: 0,
        explanation: "Business pressure must not compromise safety duties."
      },
      {
        question: "Which answer best describes Boeing's safety-culture issue?",
        options: [
          "Safety communication and risk handling appeared weakened by business priorities.",
          "Safety culture only means wearing helmets in factories.",
          "Safety culture is unrelated to managers.",
          "Safety culture improved because pilots had less training."
        ],
        correctAnswer: 0,
        explanation: "Safety culture is about what risks an organization takes seriously."
      },
      {
        question: "Why is 'certification was completed, so Boeing was ethical' a weak answer?",
        options: [
          "Certification does not remove professional responsibility for safety.",
          "Certification means no aircraft can fail.",
          "Certification is unrelated to aviation.",
          "Certification replaces transparency and training."
        ],
        correctAnswer: 0,
        explanation: "Engineers remain responsible even after regulatory approval."
      },
      {
        question: "Which answer best describes the stakeholder impact?",
        options: [
          "Passengers, pilots, victims' families, airlines, Boeing, regulators, employees, shareholders, and the public were affected.",
          "Only Boeing shareholders were affected.",
          "Only pilots were affected.",
          "No stakeholders were affected because aircraft are private products."
        ],
        correctAnswer: 0,
        explanation: "The crisis affected direct victims and many wider stakeholders."
      },
      {
        question: "How did the consequences serve as a lesson or deterrent?",
        options: [
          "Grounding, investigations, settlements, and trust loss showed the cost of weak safety ethics.",
          "Consequences proved the issue was minor.",
          "Consequences affected only marketing.",
          "Consequences removed the need for future regulation."
        ],
        correctAnswer: 0,
        explanation: "Consequences warn organizations that safety shortcuts can create major harm."
      },
      {
        question: "Which answer best explains transparency in one sentence?",
        options: [
          "Safety-critical information about MCAS should have been clearly shared with pilots, airlines, and regulators.",
          "Transparency means showing passengers the aircraft logo.",
          "Transparency only applies to finances.",
          "Transparency means hiding complexity from users."
        ],
        correctAnswer: 0,
        explanation: "Transparency requires clear communication of safety-relevant information."
      },
      {
        question: "What is the best final conclusion for a 5-mark ethics answer about the Boeing case?",
        options: [
          "The Boeing 737 MAX case shows that safety-critical automation must be transparent, tested, trained, and accountable.",
          "The Boeing case proves all automation is unethical.",
          "The Boeing case was only about pilot mistakes.",
          "The Boeing case shows profit is always illegal."
        ],
        correctAnswer: 0,
        explanation: "This conclusion captures the ethical lesson without exaggeration."
      }
    ]
  },
  {
    caseId: "case-4",
    questions: [
      {
        question: "Ariane 5 Flight 501 failed shortly after launch because the flight computer received invalid guidance data. From an engineering ethics perspective, why is this more than just a programming error?",
        options: [
          "The software was safety-critical and was reused without enough validation for the new rocket.",
          "The payload was expensive and therefore automatically unethical.",
          "Rockets should never use software.",
          "The failure happened too quickly to analyze."
        ],
        correctAnswer: 0,
        explanation: "The ethical issue is that safety-critical reused software was trusted without proper validation under Ariane 5 conditions."
      },
      {
        question: "What was the key technical failure in the Ariane 5 case?",
        options: [
          "A 64-bit floating-point value was converted into a 16-bit signed integer, causing overflow.",
          "The rocket's paint affected the sensors.",
          "The payload sent wrong commands to the rocket.",
          "The software was used only for communication."
        ],
        correctAnswer: 0,
        explanation: "The overflow created invalid guidance data in the SRI."
      },
      {
        question: "Why was reusing Ariane 4 software risky in Ariane 5?",
        options: [
          "Ariane 5 had different hardware and flight conditions.",
          "Ariane 4 software had never worked before.",
          "Reusing code is always illegal.",
          "Ariane 5 had no guidance system."
        ],
        correctAnswer: 0,
        explanation: "Old software assumptions may fail when the new system behaves differently."
      },
      {
        question: "In terms of professional responsibility, what should the engineering team have done?",
        options: [
          "Revalidate the reused software under Ariane 5's real operating conditions.",
          "Trust the old code because Ariane 4 had worked.",
          "Test only the payload and ignore software.",
          "Use identical backup software without review."
        ],
        correctAnswer: 0,
        explanation: "Professional responsibility required testing the reused software for the new rocket."
      },
      {
        question: "Why did testing fail to catch the overflow problem?",
        options: [
          "The tests did not use realistic Ariane 5 values or boundary cases.",
          "The software had no variables.",
          "Testing was performed only after the explosion.",
          "The payload prevented all testing."
        ],
        correctAnswer: 0,
        explanation: "The old tests used values too small to reveal the overflow."
      },
      {
        question: "What made the backup SRI ethically weak?",
        options: [
          "It used the same software and failed from the same bug.",
          "It was not installed in the rocket.",
          "It was used only for decoration.",
          "It made the rocket too heavy."
        ],
        correctAnswer: 0,
        explanation: "Identical backup software created common-mode failure."
      },
      {
        question: "Which ethical principle is most central in the Ariane 5 case?",
        options: [
          "Professional responsibility.",
          "Advertising honesty.",
          "Customer entertainment.",
          "Product branding."
        ],
        correctAnswer: 0,
        explanation: "Engineers had responsibility to validate safety-critical software before launch."
      },
      {
        question: "Why is saying it worked before a weak ethical defense in this case?",
        options: [
          "Past success does not prove safety in a changed system.",
          "Past success makes testing unnecessary.",
          "Old code is always safer than new code.",
          "Hardware changes never affect software."
        ],
        correctAnswer: 0,
        explanation: "Ariane 5 produced conditions Ariane 4 did not."
      },
      {
        question: "Which answer best describes the risk management failure in Ariane 5?",
        options: [
          "The team did not control the risk that Ariane 5 values would exceed old software limits.",
          "The team tested too many boundary values.",
          "The team focused too much on software failure.",
          "The rocket had no known risks."
        ],
        correctAnswer: 0,
        explanation: "The changed operating range was a foreseeable software risk."
      },
      {
        question: "In terms of integrity, what was the main issue in Ariane 5?",
        options: [
          "The team accepted old assumptions without fully verifying them for the new mission.",
          "The team used software, which is always dishonest.",
          "The rocket was launched publicly.",
          "The payload was not the main failure."
        ],
        correctAnswer: 0,
        explanation: "Integrity requires honest verification, not overconfidence."
      },
      {
        question: "What is common-mode failure in the Ariane 5 case?",
        options: [
          "Primary and backup systems failed because they used the same flawed software.",
          "Two different unrelated failures happened at once.",
          "The payload failed before launch.",
          "The rocket lost power only in one sensor."
        ],
        correctAnswer: 0,
        explanation: "Both SRI systems repeated the same software error."
      },
      {
        question: "Why is identical redundancy not always safe in safety-critical systems?",
        options: [
          "It may repeat the same design or software fault.",
          "It always improves safety completely.",
          "It removes the need for testing.",
          "It makes software failures impossible."
        ],
        correctAnswer: 0,
        explanation: "Redundancy must reduce shared failure modes."
      },
      {
        question: "Which answer best explains the organizational culture problem in Ariane 5?",
        options: [
          "The organization trusted past success and hardware reliability too much.",
          "The organization tested too many software failures.",
          "The organization avoided all code reuse.",
          "The organization had no launch pressure."
        ],
        correctAnswer: 0,
        explanation: "The video emphasizes overconfidence and undervaluing software failure testing."
      },
      {
        question: "Why is the SRI important in understanding the Ariane 5 failure?",
        options: [
          "It produced inertial reference data used by the flight computer.",
          "It controlled ticket sales for the launch.",
          "It stored the satellites.",
          "It replaced the rocket engines."
        ],
        correctAnswer: 0,
        explanation: "Invalid SRI data led the flight computer to make wrong corrections."
      },
      {
        question: "Which written-answer claim about Ariane 5 would be weakest?",
        options: [
          "The failure was only random bad luck.",
          "Reused code required validation.",
          "Boundary testing was insufficient.",
          "Identical backup software repeated the failure."
        ],
        correctAnswer: 0,
        explanation: "The failure had identifiable technical and ethical causes."
      },
      {
        question: "What should have happened before the Ariane 5 launch to prevent failure?",
        options: [
          "Review assumptions, test real Ariane 5 values, and handle overflow safely.",
          "Launch first and test after failure.",
          "Disable all software checks.",
          "Trust Ariane 4 results without analysis."
        ],
        correctAnswer: 0,
        explanation: "Prevention required validation under the actual Ariane 5 context."
      },
      {
        question: "Which answer best connects the Ariane 5 case to public trust?",
        options: [
          "A preventable software failure damaged confidence in space engineering and safety-critical systems.",
          "Public trust was irrelevant because no passengers were onboard.",
          "Public trust depends only on advertising.",
          "The public trusts rockets more after unexplained failures."
        ],
        correctAnswer: 0,
        explanation: "Even without passengers, public and institutional trust is affected by major failures."
      },
      {
        question: "Why was the Ariane 5 failure not only one programmer's mistake?",
        options: [
          "It involved testing, reuse assumptions, redundancy, and organizational culture.",
          "The code had no role in the failure.",
          "The backup solved the problem.",
          "The payload caused the failure."
        ],
        correctAnswer: 0,
        explanation: "The failure came from system-level engineering decisions."
      },
      {
        question: "Which principle is most connected to boundary and overflow testing in Ariane 5?",
        options: [
          "Testing and validation.",
          "Product design aesthetics.",
          "Marketing fairness.",
          "Customer comfort."
        ],
        correctAnswer: 0,
        explanation: "Overflow failures are exactly what boundary testing should catch."
      },
      {
        question: "What does the Ariane 5 case teach about safety-critical software?",
        options: [
          "Software can physically destroy systems when it controls real hardware.",
          "Software errors only affect screens.",
          "Software never needs redundancy.",
          "Hardware reliability guarantees software safety."
        ],
        correctAnswer: 0,
        explanation: "Invalid software data caused the rocket to fail."
      },
      {
        question: "In terms of accountability, what should ESA and engineers learn from Ariane 5?",
        options: [
          "Responsibility includes correcting assumptions, improving testing, and preventing repeat failures.",
          "Accountability only means blaming the rocket.",
          "Accountability does not apply without injuries.",
          "Accountability ends after launch."
        ],
        correctAnswer: 0,
        explanation: "Accountability means learning and correcting the process."
      },
      {
        question: "Why was Ariane 5 different from Ariane 4 in a way that mattered for the software?",
        options: [
          "It could produce values outside the old software's safe range.",
          "It had the same exact flight conditions.",
          "It did not use software.",
          "It could not generate sensor values."
        ],
        correctAnswer: 0,
        explanation: "The new rocket context made old assumptions unsafe."
      },
      {
        question: "Which option best explains why exception and overflow handling mattered in Ariane 5?",
        options: [
          "Invalid values should not be allowed to guide a rocket.",
          "Overflow only affects accounting software.",
          "Exception handling is unnecessary in rockets.",
          "The backup makes all error handling useless."
        ],
        correctAnswer: 0,
        explanation: "Safety-critical systems must handle invalid data safely."
      },
      {
        question: "What ethical issue appears when a backup system is trusted without considering software faults?",
        options: [
          "Risk is underestimated because redundancy may not cover common software errors.",
          "The system becomes too transparent.",
          "Testing becomes unnecessary.",
          "Public trust automatically increases."
        ],
        correctAnswer: 0,
        explanation: "Redundancy is weak if it protects only against hardware failure."
      },
      {
        question: "Which answer best summarizes the cause of the Ariane 5 failure?",
        options: [
          "Unsafe code reuse, overflow, poor testing, identical backup software, and overconfidence.",
          "A payload communication error only.",
          "A random explosion with no engineering cause.",
          "Weather and public pressure only."
        ],
        correctAnswer: 0,
        explanation: "The case had technical and organizational causes."
      },
      {
        question: "Why is the Ariane 5 case important for engineering ethics education?",
        options: [
          "It shows how assumptions in software engineering can create catastrophic physical failure.",
          "It proves all code reuse is unethical.",
          "It shows rockets should avoid all computers.",
          "It is only about launch videos."
        ],
        correctAnswer: 0,
        explanation: "The case connects software assumptions to real-world consequences."
      },
      {
        question: "What role did hardware reliability assumptions play in the Ariane 5 disaster?",
        options: [
          "The team focused too much on hardware reliability and not enough on software failure modes.",
          "Hardware reliability prevented the failure.",
          "Hardware reliability means software testing is optional.",
          "Hardware reliability caused the payload to fail."
        ],
        correctAnswer: 0,
        explanation: "The culture assumed reliable hardware meant software would work."
      },
      {
        question: "Which answer best explains ethical prevention in the Ariane 5 context?",
        options: [
          "Revalidate reused software, test boundary cases, handle overflow, and design better redundancy.",
          "Reuse old software exactly because it worked before.",
          "Remove all backups.",
          "Launch faster to discover problems."
        ],
        correctAnswer: 0,
        explanation: "These actions target the actual failure chain."
      },
      {
        question: "Which statement best captures the integrity lesson from Ariane 5?",
        options: [
          "Engineers must question old assumptions when system conditions change.",
          "Engineers should never reuse code.",
          "If code worked once, it is permanently safe.",
          "Integrity only matters after public complaints."
        ],
        correctAnswer: 0,
        explanation: "Integrity requires honest checking of assumptions."
      },
      {
        question: "Which is the best final conclusion for a 5-mark ethics answer about Ariane 5?",
        options: [
          "Ariane 5 shows that reused safety-critical software must be revalidated when the system changes.",
          "Ariane 5 shows that all rockets fail randomly.",
          "Ariane 5 shows that backups always solve software problems.",
          "Ariane 5 shows that testing is less important than past success."
        ],
        correctAnswer: 0,
        explanation: "This conclusion connects the case to professional responsibility and software validation."
      }
    ]
  },
  {
    caseId: "case-5",
    questions: [
      {
        question: "Therac-25 was used to deliver radiation treatment to cancer patients. Why is this case considered a major engineering ethics case?",
        options: [
          "Software and design failures in a medical device directly harmed patients.",
          "The machine was too large for the treatment room.",
          "Radiation therapy is always unethical.",
          "Operators disliked using computer screens."
        ],
        correctAnswer: 0,
        explanation: "The ethical issue is that safety-critical software and design decisions caused serious patient harm."
      },
      {
        question: "What made Therac-25 more dangerous than earlier machines?",
        options: [
          "It relied heavily on software while reducing hardware interlocks.",
          "It used only manual controls with no computer.",
          "It could not deliver radiation at all.",
          "It was designed only for training students."
        ],
        correctAnswer: 0,
        explanation: "Earlier machines had more physical fail-safes. Therac-25 trusted software more heavily."
      },
      {
        question: "In terms of patient safety, what was the central failure in Therac-25?",
        options: [
          "Patients received radiation overdoses from unsafe system behavior.",
          "Patients waited too long for appointments.",
          "Hospitals charged different treatment prices.",
          "The machine was difficult to transport."
        ],
        correctAnswer: 0,
        explanation: "The direct harm was massive unintended radiation exposure."
      },
      {
        question: "Why were vague malfunction messages ethically dangerous in the Therac-25 case?",
        options: [
          "Operators could not know whether an error was harmless or deadly.",
          "Operators received too much safety information.",
          "The codes were written in a colorful font.",
          "The errors only appeared after safe treatment."
        ],
        correctAnswer: 0,
        explanation: "Unclear errors made it possible for operators to proceed without understanding the risk."
      },
      {
        question: "What was Malfunction 54 mainly connected to?",
        options: [
          "A timing problem when operators quickly edited treatment settings.",
          "A broken hospital elevator.",
          "A patient billing error.",
          "A harmless spelling mistake in the manual."
        ],
        correctAnswer: 0,
        explanation: "Fast editing during setup could create a mismatch between displayed settings and machine state."
      },
      {
        question: "Why is it incomplete to blame only the operator in the Therac-25 accidents?",
        options: [
          "The system allowed unclear errors, unsafe proceed actions, and poor fail-safe protection.",
          "Operators had no role in using the machine.",
          "Operators wrote all of AECL's software.",
          "Patients controlled the radiation dose."
        ],
        correctAnswer: 0,
        explanation: "Operators worked inside an unsafe system with vague warnings and weak safeguards."
      },
      {
        question: "What role did poor software engineering play in the Therac-25 disaster?",
        options: [
          "Software was not properly analyzed, tested, documented, or independently reviewed.",
          "The software was too visually attractive.",
          "Software had no role in radiation delivery.",
          "The software was only used for scheduling."
        ],
        correctAnswer: 0,
        explanation: "The machine depended on safety-critical software, but the engineering process was weak."
      },
      {
        question: "Why was reusing older Therac-20 software risky?",
        options: [
          "Old code can contain hidden assumptions and errors when reused in a new system.",
          "Reusing software is always illegal.",
          "Old software cannot control machines.",
          "Reused code automatically becomes safer."
        ],
        correctAnswer: 0,
        explanation: "Reused code must be revalidated, especially when hardware protections change."
      },
      {
        question: "In terms of fail-safe design, what was missing in Therac-25?",
        options: [
          "Independent hardware protection that could stop unsafe radiation even if software failed.",
          "More comfortable patient chairs.",
          "A better logo for the machine.",
          "Faster billing software."
        ],
        correctAnswer: 0,
        explanation: "Hardware interlocks or dose monitors could have prevented software faults from reaching patients."
      },
      {
        question: "Which answer best explains the arithmetic overflow error in Therac-25?",
        options: [
          "A counter rolled back to zero and made the system treat an unsafe state as safe.",
          "The patient received an extra appointment.",
          "A monitor showed the wrong date.",
          "The machine became too expensive to maintain."
        ],
        correctAnswer: 0,
        explanation: "The software overflow caused an error state to be missed, allowing unsafe treatment."
      },
      {
        question: "Why was AECL's response to the accident reports ethically problematic?",
        options: [
          "It denied or minimized overdose reports and acted too slowly.",
          "It immediately removed all machines after the first injury.",
          "It gave complete error-code documentation to every operator.",
          "It proved overdoses were impossible."
        ],
        correctAnswer: 0,
        explanation: "Accountability required urgent investigation, clear warnings, and protective action."
      },
      {
        question: "In terms of transparency, what was the main problem in Therac-25?",
        options: [
          "Users were not given clear information about error codes, risks, and similar accidents.",
          "Patients received too much technical documentation.",
          "Regulators caused the original software bug.",
          "Hospitals were told every detail immediately."
        ],
        correctAnswer: 0,
        explanation: "Operators and hospitals lacked critical safety information."
      },
      {
        question: "What did the repeated accidents after early warnings show ethically?",
        options: [
          "AECL failed to learn quickly enough from early harm.",
          "The machine was becoming safer after every accident.",
          "The problem was only patient imagination.",
          "The accidents were unrelated to engineering."
        ],
        correctAnswer: 0,
        explanation: "Repetition after warnings increases responsibility and shows weak accountability."
      },
      {
        question: "Which answer best describes the human factors problem in Therac-25?",
        options: [
          "The interface allowed real operators to make fast edits and proceed after vague errors.",
          "Operators were physically unable to use keyboards.",
          "Patients had to enter their own doses.",
          "The treatment room was too quiet."
        ],
        correctAnswer: 0,
        explanation: "The system was not designed safely for real operator behavior."
      },
      {
        question: "Why was software documentation important in the Therac-25 case?",
        options: [
          "Independent review and investigation require clear software documentation.",
          "Documentation is only useful for marketing.",
          "Documentation cannot affect safety.",
          "Operators should never receive manuals."
        ],
        correctAnswer: 0,
        explanation: "Poor documentation makes verification, training, and investigation harder."
      },
      {
        question: "What role did the FDA play in the Therac-25 case?",
        options: [
          "It declared the device defective and required corrective action.",
          "It wrote the original Therac-25 code.",
          "It operated the machine during treatment.",
          "It ignored every accident permanently."
        ],
        correctAnswer: 0,
        explanation: "The FDA became involved after repeated harm and required fixes."
      },
      {
        question: "Which ethical principle is most directly violated when a medical device harms patients during treatment?",
        options: [
          "Patient safety and public welfare.",
          "Product branding.",
          "Intellectual property.",
          "Aesthetic design."
        ],
        correctAnswer: 0,
        explanation: "The device existed to help patients but instead caused serious harm."
      },
      {
        question: "Why is saying software cannot fail like hardware dangerous in a safety-critical context?",
        options: [
          "Software can cause physical harm when it controls dangerous machines.",
          "Software only affects computer screens.",
          "Software is always perfect once installed.",
          "Software errors cannot interact with hardware."
        ],
        correctAnswer: 0,
        explanation: "Therac-25 shows that software errors can deliver real physical radiation harm."
      },
      {
        question: "Which answer best explains why hardware interlocks matter in a device like Therac-25?",
        options: [
          "They provide independent protection if software behaves incorrectly.",
          "They make all testing unnecessary.",
          "They increase radiation dose intentionally.",
          "They are only decorative."
        ],
        correctAnswer: 0,
        explanation: "Hardware interlocks are defense-in-depth protection independent of software."
      },
      {
        question: "What does the Therac-25 case teach about advanced medical technology?",
        options: [
          "Advanced technology is not ethical unless it is safe, tested, and accountable.",
          "Advanced technology is automatically safe.",
          "Advanced technology removes professional responsibility.",
          "Advanced technology should never be used in medicine."
        ],
        correctAnswer: 0,
        explanation: "Innovation must be controlled by safety and responsibility."
      },
      {
        question: "Which statement best connects Therac-25 case facts to professional responsibility?",
        options: [
          "AECL had a duty to test, review, document, and safeguard software controlling radiation.",
          "AECL's responsibility ended after selling the machine.",
          "Hospitals alone were responsible for all software defects.",
          "Patients should have checked the machine's code."
        ],
        correctAnswer: 0,
        explanation: "The manufacturer had responsibility for the safety-critical design."
      },
      {
        question: "Why was allowing operators to press proceed after unclear errors unethical?",
        options: [
          "It allowed treatment to continue when the safety state was uncertain.",
          "It made treatment too slow.",
          "It gave operators too much control over scheduling.",
          "It reduced paperwork."
        ],
        correctAnswer: 0,
        explanation: "A life-critical machine should not continue after an unexplained unsafe state."
      },
      {
        question: "What should AECL have done after early overdose reports?",
        options: [
          "Stop use, investigate fully, warn users, and add safeguards.",
          "Deny the reports until more patients were harmed.",
          "Tell operators to ignore malfunction codes.",
          "Blame patients without evidence."
        ],
        correctAnswer: 0,
        explanation: "Patient safety required immediate protective action."
      },
      {
        question: "Which answer best describes the ethical failure chain in Therac-25?",
        options: [
          "Poor software review, weak fail-safes, vague errors, denial, repeated patient harm.",
          "Good testing, clear warnings, strong interlocks, fast correction, no harm.",
          "Bridge wind, torsional flutter, public collapse, design standards.",
          "Hotel fire, blocked exits, flammable supplies, code enforcement."
        ],
        correctAnswer: 0,
        explanation: "This is the Therac-25 failure chain."
      },
      {
        question: "What was the purpose of the dose-per-pulse monitor added in later fixes?",
        options: [
          "To shut down dangerous doses even if software checks failed.",
          "To make the screen brighter.",
          "To make patients choose their own radiation.",
          "To replace all medical staff."
        ],
        correctAnswer: 0,
        explanation: "It added independent hardware safety protection."
      },
      {
        question: "Which written-answer claim about Therac-25 would be weakest?",
        options: [
          "The disaster was only operator error.",
          "Software testing was insufficient.",
          "Hardware fail-safes were reduced.",
          "AECL responded too slowly."
        ],
        correctAnswer: 0,
        explanation: "Operator action occurred within an unsafe system designed by others."
      },
      {
        question: "How did the consequences of Therac-25 serve as a lesson for future engineering?",
        options: [
          "They pushed stronger software documentation, regulation, and safety review for medical devices.",
          "They showed that software documentation is unnecessary.",
          "They proved manufacturers need less oversight.",
          "They removed patient safety from engineering ethics."
        ],
        correctAnswer: 0,
        explanation: "The case influenced how safety-critical medical software is documented and reviewed."
      },
      {
        question: "Which answer best explains accountability before harm repeats in a safety-critical context?",
        options: [
          "Accept possible failure, investigate, warn users, and stop unsafe operation.",
          "Wait until accidents become public.",
          "Keep devices running while denying evidence.",
          "Assume all patient complaints are impossible."
        ],
        correctAnswer: 0,
        explanation: "Accountability means acting before more harm happens."
      },
      {
        question: "Which answer best describes the role of testing and validation in the Therac-25 case?",
        options: [
          "The system should have been tested under realistic operator behavior and failure conditions.",
          "Testing was unnecessary because it was a medical device.",
          "Testing should only check the machine's appearance.",
          "Testing is only required after a death."
        ],
        correctAnswer: 0,
        explanation: "Therac-25 failed partly because real-use timing and error states were not properly tested."
      },
      {
        question: "Which is the best final conclusion for a 5-mark ethics answer about Therac-25?",
        options: [
          "Therac-25 shows that software in medical devices can kill if testing, fail-safes, transparency, and accountability are weak.",
          "Therac-25 shows that all software should be banned from hospitals.",
          "Therac-25 shows that operators alone are responsible for medical errors.",
          "Therac-25 shows that radiation therapy is unethical."
        ],
        correctAnswer: 0,
        explanation: "This conclusion connects the case to safety-critical software ethics."
      }
    ]
  },
  {
    caseId: "case-6",
    questions: [
      {
        question: "The Tacoma Narrows Bridge was known for moving noticeably in the wind even before it collapsed. From an engineering ethics perspective, why was this important?",
        options: [
          "It was a warning sign that the structure behaved unusually under real conditions.",
          "It proved the bridge was flexible but completely safe.",
          "It showed that bridges should never be built over water.",
          "It was only interesting because people filmed it."
        ],
        correctAnswer: 0,
        explanation: "Visible movement before collapse was a sign that the bridge's wind response needed serious investigation."
      },
      {
        question: "Why is the Tacoma Narrows collapse considered an engineering ethics case?",
        options: [
          "A public structure failed because real environmental forces were underestimated.",
          "It was only a physics demonstration with no ethical meaning.",
          "It happened because bridges cannot be designed safely.",
          "It was caused only by people watching the bridge."
        ],
        correctAnswer: 0,
        explanation: "The case involved public infrastructure, design decisions, and safety under real-world conditions."
      },
      {
        question: "What was the major design weakness of the Tacoma Narrows Bridge?",
        options: [
          "It was slender and flexible, with low stiffness against wind-induced motion.",
          "It was too short for the location.",
          "It had too many heavy trusses.",
          "It was designed only for pedestrians."
        ],
        correctAnswer: 0,
        explanation: "The bridge's slender plate-girder design reduced stiffness and increased vulnerability to wind effects."
      },
      {
        question: "In the video, why is saying the bridge collapsed because of resonance incomplete?",
        options: [
          "The final collapse was mainly due to torsional flutter, not only vertical resonance.",
          "Resonance never occurred in the bridge.",
          "Wind cannot create resonance.",
          "Resonance only happens in electrical systems."
        ],
        correctAnswer: 0,
        explanation: "The bridge had vertical oscillations, but the final destructive motion was twisting caused by torsional flutter."
      },
      {
        question: "Which statement best explains torsional flutter in this case?",
        options: [
          "Wind amplified the bridge's twisting motion until the structure failed.",
          "Gravity pulled the bridge straight downward until it snapped.",
          "Traffic vibrations alone created the collapse.",
          "The bridge deck melted under sunlight."
        ],
        correctAnswer: 0,
        explanation: "Torsional flutter is self-amplifying twisting caused by interaction between wind and the structure."
      },
      {
        question: "How did cost-saving contribute to the Tacoma Narrows failure?",
        options: [
          "The economical slender design reduced stiffness and increased wind vulnerability.",
          "The bridge failed because all cost-saving is unethical.",
          "Cost-saving caused the bridge to have no cables.",
          "The bridge was unsafe only because it was too expensive."
        ],
        correctAnswer: 0,
        explanation: "Saving material is not wrong by itself, but it must not compromise safety or stability."
      },
      {
        question: "Which ethical principle is most directly connected to designing a public bridge that can survive realistic wind conditions?",
        options: [
          "Public safety.",
          "Brand loyalty.",
          "Patent ownership.",
          "Advertising fairness."
        ],
        correctAnswer: 0,
        explanation: "A bridge is public infrastructure, so the public's safety is the central ethical concern."
      },
      {
        question: "What did the nickname Galloping Gertie reveal about the bridge before it collapsed?",
        options: [
          "The bridge had abnormal movement that was known before collapse.",
          "The bridge was built for horse traffic.",
          "The bridge had no wind exposure.",
          "The bridge had already been repaired."
        ],
        correctAnswer: 0,
        explanation: "The nickname came from visible movement in wind, which was a warning sign."
      },
      {
        question: "Which answer best describes the role of wind in the Tacoma Narrows case?",
        options: [
          "Wind was a real dynamic load that the design did not adequately handle.",
          "Wind was irrelevant because only gravity matters in bridge design.",
          "Wind removed all engineering responsibility for the collapse.",
          "Wind only affected the bridge's color and surface."
        ],
        correctAnswer: 0,
        explanation: "Wind created dynamic motion and aerodynamic instability that the slender design could not resist."
      },
      {
        question: "In terms of professional responsibility, what should the engineers have done more carefully?",
        options: [
          "Evaluate wind-induced dynamic and aerodynamic behavior.",
          "Focus only on the bridge's visual appearance.",
          "Ignore movement if the bridge was still standing.",
          "Assume older bridge rules covered all new designs."
        ],
        correctAnswer: 0,
        explanation: "Engineers have a duty to consider all relevant loads and failure modes, including wind and dynamic effects."
      },
      {
        question: "Why was the use of narrow plate girders significant to the collapse?",
        options: [
          "They helped create a slender deck but reduced aerodynamic stability.",
          "They made wind pass through the bridge perfectly.",
          "They made the bridge immune to twisting.",
          "They were unrelated to the failure."
        ],
        correctAnswer: 0,
        explanation: "The plate-girder deck affected how wind interacted with the structure and reduced the bridge's resistance to torsional motion."
      },
      {
        question: "Which answer best connects the Tacoma Narrows case to risk management?",
        options: [
          "Known movement under wind should have triggered deeper investigation.",
          "Risk management means waiting until collapse to act.",
          "Risk management was unnecessary because the bridge was new.",
          "Risk management only applies to software systems."
        ],
        correctAnswer: 0,
        explanation: "Visible movement was a warning that should have been treated as a serious risk signal."
      },
      {
        question: "Why is it ethically weak to say the wind caused the collapse and stop there?",
        options: [
          "Engineers must design structures to handle foreseeable wind effects.",
          "Wind is not a real physical force.",
          "Wind only affects aircraft, not bridges.",
          "Natural forces remove all engineering responsibility."
        ],
        correctAnswer: 0,
        explanation: "Wind was the load, but the design's inadequate response to that load is the engineering responsibility."
      },
      {
        question: "Which statement best describes the public trust issue in the Tacoma Narrows case?",
        options: [
          "A dramatic public bridge failure made people question engineering safety.",
          "Public trust increased because the bridge looked elegant.",
          "Public trust is unrelated to infrastructure failures.",
          "Public trust depends only on how quickly a bridge is built."
        ],
        correctAnswer: 0,
        explanation: "Public infrastructure failures damage confidence in engineers and public projects."
      },
      {
        question: "What is the strongest explanation of innovation responsibility in this case?",
        options: [
          "New efficient designs can introduce new risks that require extra testing.",
          "Innovation removes the need for safety checks.",
          "Engineers should never use new designs.",
          "Old designs are always safer than innovative ones."
        ],
        correctAnswer: 0,
        explanation: "Pushing design limits requires more caution because new failure modes may appear that older standards do not cover."
      },
      {
        question: "Which answer best explains the conflict between economy and safety in the Tacoma Narrows case?",
        options: [
          "Economical design is ethical only if it remains safe under real conditions.",
          "Economy always matters more than safety in public infrastructure.",
          "Any expensive design is automatically ethical.",
          "Public bridges should ignore cost completely."
        ],
        correctAnswer: 0,
        explanation: "Cost matters in public projects, but safety must set the boundary that economy cannot cross."
      },
      {
        question: "What should engineers have done to reduce the risk of collapse?",
        options: [
          "Use a stiffer or more aerodynamic deck and test wind behavior.",
          "Focus only on static gravity calculations.",
          "Ignore oscillations because they were familiar.",
          "Make the bridge visually thinner."
        ],
        correctAnswer: 0,
        explanation: "Better stiffness, aerodynamics, and wind testing address the actual failure mechanism."
      },
      {
        question: "Which answer best identifies the ethical failure chain in the Tacoma Narrows case?",
        options: [
          "Cost-saving slender design, insufficient wind understanding, visible movement, torsional flutter, collapse.",
          "Heavy truss design, too much stiffness, no wind, no warning, collapse.",
          "Software error, unclear messages, medical overdose, collapse.",
          "Fire hazard, poor exit signs, blocked stairway, collapse."
        ],
        correctAnswer: 0,
        explanation: "This sequence correctly matches the Tacoma Narrows case and its ethical and technical dimensions."
      },
      {
        question: "Why was the collapse not simply due to lack of strength in the ordinary static sense?",
        options: [
          "The bridge could resist gravity loads but was unstable under dynamic wind effects.",
          "The bridge had no structural members to carry any load.",
          "The bridge was never opened to traffic.",
          "Static strength and wind resistance are the same thing."
        ],
        correctAnswer: 0,
        explanation: "A structure can be strong for vertical gravity loads but still unstable under aerodynamic forces."
      },
      {
        question: "Which answer best describes vortex shedding and its role in the Tacoma Narrows case?",
        options: [
          "Alternating vortices behind the deck created periodic wind forces, contributing to early vertical oscillation.",
          "Gravity increases when wind blows across a bridge deck.",
          "Steel cables dissolve in air when vortices form.",
          "Vehicles create all wind loads on a bridge."
        ],
        correctAnswer: 0,
        explanation: "Vortex shedding can create oscillating forces. However, it alone is not the full explanation for the final torsional collapse."
      },
      {
        question: "Which written-answer claim would be the weakest?",
        options: [
          "The bridge collapsed only because it was unlucky.",
          "The bridge was too flexible.",
          "Wind-induced motion was underestimated.",
          "Engineers learned from the failure."
        ],
        correctAnswer: 0,
        explanation: "The collapse had identifiable engineering causes. Attributing it to bad luck ignores professional responsibility."
      },
      {
        question: "How does testing and validation apply to the Tacoma Narrows case?",
        options: [
          "A slender suspension bridge needed wind and dynamic testing before public use.",
          "Testing is only needed after collapse has already occurred.",
          "Testing only applies to medical devices, not bridges.",
          "Testing replaces all design judgment."
        ],
        correctAnswer: 0,
        explanation: "Testing could have revealed aerodynamic instability before the bridge was opened."
      },
      {
        question: "What is the ethical issue with ignoring the bridge's repeated abnormal movement?",
        options: [
          "It normalizes a warning sign and delays corrective action.",
          "It improves confidence in the bridge.",
          "It proves the bridge is stable under all conditions.",
          "It removes the need for further design review."
        ],
        correctAnswer: 0,
        explanation: "Abnormal behavior should trigger investigation, not acceptance as normal."
      },
      {
        question: "Which answer best describes accountability in the context of the Tacoma Narrows collapse?",
        options: [
          "Study the failure and improve future design standards.",
          "Hide the footage and repeat the same design.",
          "Blame the weather and stop investigating.",
          "Ignore wind in future bridge designs."
        ],
        correctAnswer: 0,
        explanation: "Accountability includes learning from failure and preventing recurrence."
      },
      {
        question: "What does the Tacoma Narrows case teach about engineering assumptions?",
        options: [
          "Assumptions must be updated when designs become lighter, longer, or more flexible.",
          "Old assumptions always fit new designs.",
          "Assumptions are only needed for cost estimates.",
          "Assumptions do not affect public safety."
        ],
        correctAnswer: 0,
        explanation: "New design forms can make previously minor forces important and require revised analysis."
      },
      {
        question: "Which answer best describes the full range of stakeholders affected by the Tacoma Narrows collapse?",
        options: [
          "Bridge users, taxpayers, engineers, public authorities, and public trust were all affected.",
          "Only the bridge designer was affected.",
          "No one was affected because the collapse happened at low traffic.",
          "Only photographers who filmed it were affected."
        ],
        correctAnswer: 0,
        explanation: "Public infrastructure affects users, funders, authorities, and the entire profession's reputation."
      },
      {
        question: "Why does the Tacoma Narrows case matter ethically even though it is often taught in physics?",
        options: [
          "It also teaches ethical judgment about safety, testing, and design responsibility.",
          "Physics cases cannot have ethical meaning.",
          "Engineering ethics applies only to fraud.",
          "Public safety is not involved in bridges."
        ],
        correctAnswer: 0,
        explanation: "The physics explains how it failed; ethics explains what engineers should have done differently."
      },
      {
        question: "Which answer best explains the responsibility of engineers when pushing the design envelope?",
        options: [
          "They must be more vigilant because new failure modes can appear.",
          "They can ignore safety because the design is innovative.",
          "They should avoid all innovation forever.",
          "They only need to satisfy appearance goals."
        ],
        correctAnswer: 0,
        explanation: "Innovation increases the duty to test, question assumptions, and manage uncertainty."
      },
      {
        question: "If asked what should have been done differently, which answer is strongest?",
        options: [
          "Consider wind dynamics, use a stiffer or aerodynamic deck, test realistically, and respond to warning signs.",
          "Make the bridge heavier without analysis.",
          "Close all suspension bridges permanently.",
          "Blame drivers for using the bridge."
        ],
        correctAnswer: 0,
        explanation: "This answer targets the actual failure mechanism and addresses both technical and ethical responsibilities."
      },
      {
        question: "Which is the best final conclusion for a 5-mark ethics answer about Tacoma Narrows?",
        options: [
          "Tacoma Narrows shows that elegant and economical designs must still be safe under real-world dynamic loads.",
          "Tacoma Narrows proves wind cannot be studied.",
          "Tacoma Narrows shows public safety is less important than cost.",
          "Tacoma Narrows proves all suspension bridges are unethical."
        ],
        correctAnswer: 0,
        explanation: "This conclusion connects the case to cost, safety, real conditions, and professional duty."
      }
    ]
  },
  {
    caseId: "case-7",
    questions: [
      {
        question: "The mattress believed to be extinguished was stored in a closet near the main stairway. From an ethics perspective, why was this decision the starting point of the disaster?",
        options: [
          "It created a foreseeable fire hazard directly beside the main escape route.",
          "It made the room look untidy and was against hotel cleaning procedures.",
          "It violated a patent on mattress storage used by the hotel chain.",
          "It delayed staff from checking other rooms during the night shift."
        ],
        correctAnswer: 0,
        explanation: "Placing a not-fully-extinguished mattress next to the stairway combined a fire source with the escape path — a foreseeable danger."
      },
      {
        question: "Which of the following best explains why the Gulf Hotel fire turned into a disaster rather than a minor incident?",
        options: [
          "Multiple hazards were combined in a building full of vulnerable occupants.",
          "The city had no fire department at the time of the fire.",
          "The hotel was built with intentionally dangerous materials.",
          "Firefighters refused to respond to a low-income neighborhood."
        ],
        correctAnswer: 0,
        explanation: "Weak exits, flammable storage, poor signage, and vulnerable occupants all combined to turn a small fire into a mass casualty event."
      },
      {
        question: "Which ethical principle is most central to the Gulf Hotel fire case?",
        options: [
          "Public safety and welfare of building occupants.",
          "Property rights of the hotel owner.",
          "Advertising honesty in the hospitality industry.",
          "Intellectual property protection for fire suppression designs."
        ],
        correctAnswer: 0,
        explanation: "The fundamental duty in engineering ethics is to hold public safety, health, and welfare paramount."
      },
      {
        question: "The hotel's exit sign was known to be broken before the fire. Why does this matter ethically?",
        options: [
          "It reduced occupants' ability to find the escape route during smoke and panic.",
          "It increased electricity costs for the hotel management.",
          "It caused the mattress to reignite near the stairway.",
          "It prevented the fire department from seeing the building from the street."
        ],
        correctAnswer: 0,
        explanation: "Emergency exit lighting is a life-safety system. A broken sign directly undermines occupants' ability to escape."
      },
      {
        question: "Inspectors had cited the Gulf Hotel for safety violations before the fire. What does this most importantly show?",
        options: [
          "A known safety problem existed but was not corrected before the disaster.",
          "The city had a perfect system for tracking and fixing hotel violations.",
          "Hotel management had no knowledge of the building's conditions.",
          "The inspection system was too strict and targeted low-income buildings unfairly."
        ],
        correctAnswer: 0,
        explanation: "A prior citation means the hazard was foreseeable and known — which makes the failure to correct it an ethical accountability problem."
      },
      {
        question: "What was the main accountability failure in the period before the fire?",
        options: [
          "Known safety hazards were identified but not corrected in time.",
          "The hotel was too new to have a formal inspection process.",
          "Inspectors were not allowed to enter private residential buildings.",
          "Management was unaware of any fire-related risks in the building."
        ],
        correctAnswer: 0,
        explanation: "Accountability requires not just identifying hazards but ensuring they are fixed before harm occurs."
      },
      {
        question: "Some accounts focus on the cigarette smoker who started the initial mattress fire. Why is blaming only the smoker an incomplete ethical analysis?",
        options: [
          "The unsafe building conditions allowed a small fire to become a mass-casualty disaster.",
          "The smoker had legal permission to smoke in all areas of the building.",
          "Engineering ethics does not apply to accidental fires caused by human error.",
          "Smokers are always fully responsible for any fire that results from their behavior."
        ],
        correctAnswer: 0,
        explanation: "A system without sprinklers, working exits, or safe storage allowed a cigarette-related fire to kill 55 people. The system design is an ethical responsibility."
      },
      {
        question: "What factor most increased the danger of the fire spreading rapidly?",
        options: [
          "Flammable cleaning supplies and insecticides were stored near the reigniting mattress.",
          "The hotel had too many sprinkler heads that obstructed the hallways.",
          "The building had wide windows that created draft conditions.",
          "The fire alarm was too loud and caused panic before the fire grew."
        ],
        correctAnswer: 0,
        explanation: "Flammable materials stored adjacent to a reigniting fire source is a classic compounding hazard."
      },
      {
        question: "Why did the vulnerability of the hotel's occupants make the safety failures especially serious?",
        options: [
          "Elderly, disabled, intoxicated, and homeless men were less able to escape quickly.",
          "Vulnerable people tend to smoke more, which increased ignition risk.",
          "Low-income occupants were less likely to pay for fire insurance.",
          "Vulnerable occupants attracted more media coverage after the disaster."
        ],
        correctAnswer: 0,
        explanation: "Vulnerable people have reduced capacity to protect themselves, which increases the ethical duty of building owners and authorities."
      },
      {
        question: "After the first small mattress fire appeared to be under control, what should management have done?",
        options: [
          "Fully extinguished the mattress or moved it safely away from the building.",
          "Stored it in the stairway closet to monitor it until morning.",
          "Placed it beside the cleaning chemicals so the area could be watched.",
          "Ignored it after visible smoke stopped and resumed normal business."
        ],
        correctAnswer: 0,
        explanation: "A mattress fire can reignite from deep within. Safe handling required full extinguishment or safe removal."
      },
      {
        question: "Which of the following best describes the risk management failure in the Gulf Hotel case?",
        options: [
          "Multiple foreseeable hazards were allowed to exist together in the same building.",
          "The hotel was operating without any insurance, which was the main risk.",
          "The only hazard was the cigarette, and management controlled smoking rules.",
          "Risk management only applies to industrial buildings, not residential hotels."
        ],
        correctAnswer: 0,
        explanation: "Risk management means identifying and controlling combinations of hazards — smoking, flammable storage, poor exits, no suppression, and vulnerable occupants all combined."
      },
      {
        question: "The fire killed 55 people and injured 30. What does this high casualty count show from an ethics perspective?",
        options: [
          "The building's safety systems were inadequate for its actual occupants and conditions.",
          "The fire was an extraordinary event that no safety system could have prevented.",
          "High casualties show that the victims did not follow emergency procedures.",
          "The death toll reflects normal outcomes for fires in 1940s buildings."
        ],
        correctAnswer: 0,
        explanation: "Mass casualties in a preventable incident show that safety provisions failed to meet the real needs of the people inside."
      },
      {
        question: "The NSPE Code of Ethics requires engineers to hold paramount the safety, health, and welfare of the public. How does this connect to the Gulf Hotel case?",
        options: [
          "The hotel owner and city authorities failed to protect occupants from foreseeable and known hazards.",
          "The NSPE canon does not apply to building owners who are not engineers.",
          "The canon was satisfied because a fire inspection was conducted at some point.",
          "Public safety means only preventing structural collapse, not fire hazards."
        ],
        correctAnswer: 0,
        explanation: "Foreseeable hazards in an occupied building that were not corrected directly contradicts the obligation to hold public safety paramount."
      },
      {
        question: "Why is code enforcement ethically important, beyond just writing the rules?",
        options: [
          "Safety codes only protect people if violations are actually corrected, not just cited.",
          "Codes are mainly important for new construction and not for occupied buildings.",
          "Enforcement is only necessary when a building owner requests an inspection.",
          "Written codes satisfy the ethical obligation regardless of whether they are followed."
        ],
        correctAnswer: 0,
        explanation: "A cited hazard that is never fixed shows that the enforcement system is not fulfilling its life-safety purpose."
      },
      {
        question: "What physical conditions made escape from the Gulf Hotel especially difficult during the fire?",
        options: [
          "The main stairway was blocked and the fire escape became dangerously overcrowded.",
          "The building had too many exits, causing occupants to scatter and get confused.",
          "The fire alarm was too quiet and did not alert occupants on upper floors.",
          "Firefighters locked the main exits to control the direction of evacuation."
        ],
        correctAnswer: 0,
        explanation: "A blocked stairway plus a single overcrowded fire escape left vulnerable occupants with extremely limited escape options."
      },
      {
        question: "The Gulf Hotel was a low-cost lodging for poor and transient men. What is the ethical problem with allowing an unsafe building to operate in that context?",
        options: [
          "Low-cost housing still requires life-safety standards, regardless of tenant income.",
          "Low-cost buildings are exempt from fire safety requirements under historical codes.",
          "Poor tenants accepted the risk voluntarily by choosing a cheap building.",
          "Safety costs are too high for operators of low-income housing to afford."
        ],
        correctAnswer: 0,
        explanation: "Every person in a building — regardless of economic status — deserves the protection of basic life-safety provisions."
      },
      {
        question: "How did the Gulf Hotel fire become visible as a wider public safety issue beyond a single incident?",
        options: [
          "The mass death toll showed that fire safety enforcement was inadequate at a systemic level.",
          "The fire received media coverage only because the hotel was in a wealthy neighborhood.",
          "The city was already improving fire codes and the disaster had no further impact.",
          "The fire prompted only the hotel owner to improve conditions, with no wider change."
        ],
        correctAnswer: 0,
        explanation: "Disasters with large casualties often trigger systemic reform, revealing that the failure was not isolated but structural."
      },
      {
        question: "What is the ethical responsibility of a fire inspector who cites a building for a safety violation?",
        options: [
          "To report the violation, follow up, and ensure the correction is made.",
          "To issue the citation and consider the responsibility transferred to the owner.",
          "To wait until the building's lease expires before requiring any changes.",
          "To approve the building conditionally once the owner acknowledges the citation."
        ],
        correctAnswer: 0,
        explanation: "A citation without enforcement follow-up does not fulfill the professional duty to protect public safety."
      },
      {
        question: "Which set of measures would most directly have prevented the escape route failures in the Gulf Hotel fire?",
        options: [
          "Working exit signs, clear unblocked stairways, and usable emergency exits.",
          "More hotel guests per floor to increase awareness and self-rescue potential.",
          "Lower room prices to encourage tenants to leave the building faster.",
          "Decorative lighting in hallways to improve the appearance of the exit path."
        ],
        correctAnswer: 0,
        explanation: "Exit signs, clear routes, and usable exits are the direct countermeasures to escape-route failure."
      },
      {
        question: "Which set of measures would most directly have prevented the rapid fire spread in the Gulf Hotel?",
        options: [
          "Sprinklers or extinguishers combined with safe storage of flammable materials.",
          "More guests in the building to raise the alarm faster.",
          "Wider hallways to allow smoke to dissipate before reaching rooms.",
          "Removing exit signs to prevent glare from affecting visibility during smoke."
        ],
        correctAnswer: 0,
        explanation: "Fire suppression and safe fuel storage are the primary controls for limiting fire growth and spread."
      },
      {
        question: "Ethically, how should the mattress storage decision after the first fire be characterized?",
        options: [
          "It turned a small, controllable fire into a building-wide hazard.",
          "It was a reasonable short-term measure given the late hour and available staff.",
          "It satisfied fire safety rules because the mattress appeared to be no longer burning.",
          "It was the only option available because the exit was already blocked."
        ],
        correctAnswer: 0,
        explanation: "Placing a not-fully-safe mattress near flammable materials and the main escape route transformed a manageable incident into a disaster."
      },
      {
        question: "Which of the following is the weakest written-answer claim about the Gulf Hotel fire?",
        options: [
          "The disaster was entirely the fault of the victims who chose to stay in a dangerous building.",
          "The hotel's management failed to correct known safety hazards.",
          "The city inspectors identified problems but enforcement was not timely.",
          "Multiple compounding failures created conditions that made mass death possible."
        ],
        correctAnswer: 0,
        explanation: "Blaming victims for choosing affordable housing ignores the building owner's and city's clear responsibility to provide safe conditions."
      },
      {
        question: "Why does public trust matter in the context of the Gulf Hotel fire?",
        options: [
          "People must be able to trust that lodging they use meets basic safety standards.",
          "Public trust only matters for high-end hotels, not low-cost lodging.",
          "Trust is restored automatically once the building owner apologizes publicly.",
          "Public trust is only relevant to engineering ethics when products are involved."
        ],
        correctAnswer: 0,
        explanation: "Anyone who pays to stay in a building trusts that it meets minimum life-safety standards — that trust was violated by the Gulf Hotel's conditions."
      },
      {
        question: "If fire department response is delayed, how does that affect the ethical responsibility of the building's internal safety systems?",
        options: [
          "It increases the importance of internal protection, since external response cannot be relied upon.",
          "It eliminates the hotel owner's responsibility because the city was at fault for the delay.",
          "It shows that fire departments are responsible for all fire deaths in their jurisdiction.",
          "It reduces the need for internal safety systems because delays are expected."
        ],
        correctAnswer: 0,
        explanation: "When external response is slow or uncertain, internal fire protection — exits, suppression, signs — becomes the only defense available."
      },
      {
        question: "Some dismissed the Gulf Hotel as just a flophouse. What is the ethical problem with that attitude?",
        options: [
          "It implies that vulnerable people deserve less protection, which violates the duty of equal safety.",
          "It is only problematic if the building is used for commercial purposes.",
          "It is acceptable because low-cost buildings cannot afford safety upgrades.",
          "It only affects ethical duty if the building is inspected by licensed engineers."
        ],
        correctAnswer: 0,
        explanation: "Dismissing a building's occupants as low-value undermines the universal obligation to protect human life."
      },
      {
        question: "If asked in an exam to explain what caused the Gulf Hotel disaster, which answer is strongest?",
        options: [
          "A combination of a reigniting mattress, flammable storage, blocked exits, broken signage, and weak enforcement.",
          "Only the cigarette smoker who started the initial fire in the mattress.",
          "The fire department, which was responsible for all fire safety in the city.",
          "The original building design, with no responsibility assigned to management or inspectors."
        ],
        correctAnswer: 0,
        explanation: "Strong exam answers address multiple causes — physical, managerial, and enforcement — not a single factor."
      },
      {
        question: "How should a professional explain their responsibility in the context of the Gulf Hotel fire?",
        options: [
          "Identify foreseeable hazards and ensure they are corrected before harm occurs.",
          "Document all safety problems but wait for a supervisor to approve any action.",
          "Prioritize keeping the building open because closure harms low-income residents.",
          "Report only hazards that are explicitly listed in current building codes."
        ],
        correctAnswer: 0,
        explanation: "Professional responsibility requires proactive identification and correction of foreseeable hazards, not reactive documentation."
      },
      {
        question: "How do the consequences of the Gulf Hotel fire serve as a deterrent for future negligence?",
        options: [
          "Mass casualties show the cost of ignoring foreseeable hazards and failing to enforce safety.",
          "Consequences deter only when the building owner is personally fined.",
          "The death toll was too long ago to have any deterrent effect today.",
          "Deterrence only works in industrial settings, not in lodging."
        ],
        correctAnswer: 0,
        explanation: "Documented disasters with known preventable causes create professional and moral pressure to take safety obligations seriously."
      },
      {
        question: "How is accountability connected to prevention in the Gulf Hotel case?",
        options: [
          "Holding parties accountable for failing to fix hazards leads to stronger codes and earlier corrections.",
          "Accountability is only relevant after a disaster and has no effect on future prevention.",
          "Prevention is the responsibility of tenants, not building owners or city inspectors.",
          "Accountability ends when a citation is issued, regardless of whether it is followed up."
        ],
        correctAnswer: 0,
        explanation: "Accountability that includes real consequences motivates actors to prevent harm rather than wait for disaster."
      },
      {
        question: "Which of the following is the best final conclusion about the Gulf Hotel fire from an engineering ethics perspective?",
        options: [
          "Foreseeable hazards in an occupied building must be corrected before vulnerable people are harmed.",
          "The fire proves that old buildings should be demolished rather than repaired.",
          "The disaster shows that only licensed engineers can prevent building fires.",
          "Public safety is only relevant to disasters that involve structural collapse."
        ],
        correctAnswer: 0,
        explanation: "The case teaches that foreseeability, vulnerable occupants, and the duty to act before harm are the core ethics lessons."
      }
    ]
  },
  {
    caseId: "case-8",
    questions: [
      {
        question: "During a crowded dance event at the Hyatt Regency Hotel, two suspended walkways collapsed into the atrium. From an engineering ethics perspective, what makes this event more than just a structural accident?",
        options: [
          "It involved a public space where design and review failures directly harmed people.",
          "It happened inside a hotel rather than outdoors.",
          "It involved a modern architectural lobby.",
          "It happened during a social event."
        ],
        correctAnswer: 0,
        explanation: "The ethical issue is that professional engineering decisions affected public safety and caused mass harm."
      },
      {
        question: "The original walkway concept used continuous hanger rods, but the final constructed version used split rods. Why was this change critical?",
        options: [
          "It changed the load path and doubled the load on the upper connection.",
          "It made the walkways look less symmetrical.",
          "It reduced the number of hotel guests allowed in the lobby.",
          "It changed the architectural style but not the structure."
        ],
        correctAnswer: 0,
        explanation: "The split-rod detail made the upper connection carry both the upper and lower walkway loads."
      },
      {
        question: "Which statement best explains why the rod change became an ethical issue?",
        options: [
          "It was a safety-critical change that was not properly recalculated.",
          "It was proposed by a fabricator, so it was automatically unethical.",
          "It changed the visual appearance of the walkway.",
          "It made the construction documents longer and more complex."
        ],
        correctAnswer: 0,
        explanation: "The issue was not who suggested the change, but that its structural impact was not verified."
      },
      {
        question: "If an exam asks why communication mattered in the Hyatt case, which answer is strongest?",
        options: [
          "The load-changing detail moved through the project without clear responsibility and verification.",
          "The hotel failed to communicate the dance schedule clearly to guests.",
          "The architect and owner had different aesthetic preferences.",
          "The public did not understand how suspension rods work."
        ],
        correctAnswer: 0,
        explanation: "Communication failure allowed a critical structural change to be treated as if it had been checked."
      },
      {
        question: "The engineer's professional seal appeared on structural documents. Ethically, what does that seal mean?",
        options: [
          "The engineer accepts professional responsibility for approved engineering work unless limits are clearly stated.",
          "The engineer only approves the drawing format.",
          "The engineer transfers all responsibility to the fabricator.",
          "The seal means no further checking is ever needed."
        ],
        correctAnswer: 0,
        explanation: "A professional seal is tied to accountability and responsibility for engineering adequacy."
      },
      {
        question: "Which answer best describes the role of professional responsibility in this case?",
        options: [
          "Engineers had a duty to calculate and verify critical connections before public use.",
          "Engineers only needed to create a general structural concept.",
          "Engineers were responsible only for the overall appearance of the atrium.",
          "Engineers had no further role once shop drawings were created."
        ],
        correctAnswer: 0,
        explanation: "Safety-critical structural connections require engineering verification."
      },
      {
        question: "The connection was already weak before the rod change and became much worse after. Which ethical principle does this most directly involve?",
        options: [
          "Code compliance and public safety.",
          "Advertising honesty.",
          "Environmental sustainability.",
          "Intellectual property."
        ],
        correctAnswer: 0,
        explanation: "Minimum strength requirements exist to protect the public from structural failure."
      },
      {
        question: "Why is it incomplete to blame only the fabricator for the collapse?",
        options: [
          "The engineer still had a duty to review and verify safety-critical changes.",
          "The fabricator had no involvement in the project.",
          "The fabricator was responsible for hotel crowd control only.",
          "The architect personally calculated all connections."
        ],
        correctAnswer: 0,
        explanation: "The fabricator proposed a change, but the engineer had professional responsibility to check it."
      },
      {
        question: "Which statement best describes fast-track construction in this case?",
        options: [
          "It saved time but increased the risk of missed coordination and unchecked details.",
          "It was automatically illegal in all engineering projects.",
          "It caused the rods to physically break by itself.",
          "It removed the need for structural calculations."
        ],
        correctAnswer: 0,
        explanation: "Fast-track construction is not always unethical, but it creates risk if safety review is rushed."
      },
      {
        question: "What was the ethical problem with treating the rod change as a simple fabrication issue?",
        options: [
          "It ignored the fact that the change affected the structural load path.",
          "It made the project more expensive.",
          "It required more workers on site.",
          "It changed the hotel's business model."
        ],
        correctAnswer: 0,
        explanation: "The rod change was not merely practical, it changed how forces were transferred through the structure."
      },
      {
        question: "In terms of accountability, what should have happened before approving the changed shop drawings?",
        options: [
          "The changed connection should have been recalculated and formally verified.",
          "The drawings should have been approved because construction was already moving.",
          "The change should have been accepted if it was easier to fabricate.",
          "The responsibility should have been left unclear until after construction."
        ],
        correctAnswer: 0,
        explanation: "Accountability requires checking work before approval, not after failure."
      },
      {
        question: "Which choice best connects the case facts to the principle of integrity?",
        options: [
          "Approving or accepting unchecked work created a false appearance of safety.",
          "Integrity was not involved because no one used software.",
          "Integrity only applies if someone admits criminal intent.",
          "Integrity means the hotel lobby should look honest."
        ],
        correctAnswer: 0,
        explanation: "Integrity means not approving safety-critical work without proper verification."
      },
      {
        question: "The roof collapse during construction was a warning sign. Why does that matter ethically?",
        options: [
          "It should have triggered deeper review of structural safety.",
          "It proved the walkway connections were safe.",
          "It removed responsibility from the engineers.",
          "It showed that the hotel should cancel dances only."
        ],
        correctAnswer: 0,
        explanation: "Warning signs should prompt investigation, especially in public structures."
      },
      {
        question: "Which answer best explains how public trust was affected by the collapse?",
        options: [
          "A new public building failed, making people question whether engineers properly protect safety.",
          "Public trust increased because the collapse was investigated.",
          "Public trust was unrelated because only technical experts understood the rods.",
          "Public trust depends only on whether the hotel reopened."
        ],
        correctAnswer: 0,
        explanation: "Public trust depends on confidence that engineered spaces are safe."
      },
      {
        question: "Which statement is the strongest case-understanding answer about the Hyatt collapse?",
        options: [
          "The split rods made the upper connection support both walkways.",
          "The lower walkway carried the weight of the ceiling.",
          "The rods failed because the lobby was too bright.",
          "The walkways collapsed because of an earthquake."
        ],
        correctAnswer: 0,
        explanation: "This captures the key technical mechanism behind the collapse."
      },
      {
        question: "Why is the crowd caused the collapse a weak answer?",
        options: [
          "The crowd exposed an unsafe connection, but the design and review failure caused the danger.",
          "Crowds never add load to structures.",
          "The hotel was empty during the collapse.",
          "The walkways were not meant to carry any weight."
        ],
        correctAnswer: 0,
        explanation: "The crowd load mattered, but the ethical failure was unsafe design and review."
      },
      {
        question: "What role did professional bodies play after the collapse?",
        options: [
          "They disciplined engineers and strengthened practice expectations.",
          "They ignored the case because it was only civil law.",
          "They removed all structural codes.",
          "They blamed only hotel guests."
        ],
        correctAnswer: 0,
        explanation: "Professional bodies responded with discipline and improved standards."
      },
      {
        question: "Which answer best describes the difference between legal and ethical responsibility in this case?",
        options: [
          "Ethical responsibility can exist even if criminal guilt is not proven.",
          "If no one is criminally guilty, no ethics were violated.",
          "Legal responsibility only matters for architects.",
          "Ethics only begins after a court decision."
        ],
        correctAnswer: 0,
        explanation: "Professional negligence can be ethically serious even without criminal conviction."
      },
      {
        question: "Why was the walkway location important to the risk?",
        options: [
          "It was suspended over a crowded public atrium.",
          "It was outside the building.",
          "It was unused by guests.",
          "It was underground."
        ],
        correctAnswer: 0,
        explanation: "A failure above a crowd creates severe life-safety risk."
      },
      {
        question: "Which answer best describes the professional communication duty when a design change is proposed?",
        options: [
          "Clarify who checks the change and document approval.",
          "Assume the change is safe if it saves time.",
          "Approve it verbally without review.",
          "Wait until construction is complete to calculate it."
        ],
        correctAnswer: 0,
        explanation: "Safety-critical changes require clear responsibility and documentation."
      },
      {
        question: "The Hyatt collapse led to license revocations and stronger professional standards. How do these consequences serve ethics?",
        options: [
          "They deter careless approval and reinforce professional accountability.",
          "They prove the collapse was not serious.",
          "They replace the need for engineering education.",
          "They remove all future risk automatically."
        ],
        correctAnswer: 0,
        explanation: "Professional consequences warn engineers that public safety duties are serious."
      },
      {
        question: "What was the most direct technical reason the upper connection failed?",
        options: [
          "It carried more load than it was designed to carry.",
          "It was damaged by fire.",
          "It was overloaded by wind only.",
          "It was intentionally removed before the event."
        ],
        correctAnswer: 0,
        explanation: "The split-rod configuration doubled the load on an already weak connection."
      },
      {
        question: "Which answer best explains the ethical problem with schedule pressure?",
        options: [
          "Time pressure cannot justify skipping safety verification.",
          "Time pressure removes engineering responsibility.",
          "Fast schedules always improve communication.",
          "Deadlines are more important than code compliance."
        ],
        correctAnswer: 0,
        explanation: "Engineers may face deadlines, but safety cannot be sacrificed."
      },
      {
        question: "Which option best describes shop drawings in this ethical context?",
        options: [
          "Construction-detail drawings that may include safety-critical changes.",
          "Decorative drawings used only for marketing purposes.",
          "Drawings unrelated to the final structure.",
          "Sketches that engineers should never review."
        ],
        correctAnswer: 0,
        explanation: "Shop drawings translate design into buildable details, so safety changes must be checked."
      },
      {
        question: "Which statement is most accurate about the designer and fabricator relationship?",
        options: [
          "Fabricators can suggest changes, but engineers must verify structural safety.",
          "Fabricators become the only responsible party after suggesting a change.",
          "Engineers must accept any change that improves constructability.",
          "Architects alone check all steel connections."
        ],
        correctAnswer: 0,
        explanation: "Constructability changes must still satisfy safety and code requirements."
      },
      {
        question: "Which answer best identifies the ethics failure chain in the Hyatt case?",
        options: [
          "Schedule pressure, unclear communication, unchecked rod change, weak connection, public harm.",
          "Dance music, hotel lighting, public excitement, unclear seating, guest behavior.",
          "Too many windows, modern lobby style, high ceilings, expensive hotel services.",
          "Fire alarms, evacuation signs, medical response, weather conditions."
        ],
        correctAnswer: 0,
        explanation: "This sequence connects organizational pressure to technical failure and public harm."
      },
      {
        question: "If asked what should engineers have done differently, which answer is strongest?",
        options: [
          "Recalculate the changed connection, clarify responsibility, and verify code compliance.",
          "Cancel all public events permanently.",
          "Build no atriums in hotels.",
          "Allow the contractor to decide structural adequacy."
        ],
        correctAnswer: 0,
        explanation: "This answer targets the actual ethical and technical causes of the collapse."
      },
      {
        question: "Why is this case commonly used in engineering ethics education?",
        options: [
          "It shows how small unchecked decisions in professional practice can cause mass casualties.",
          "It proves all building designs are unsafe.",
          "It is mainly about hotel marketing failure.",
          "It shows that calculations are less important than aesthetics."
        ],
        correctAnswer: 0,
        explanation: "The case teaches communication, responsibility, checking, and public safety."
      },
      {
        question: "Which written-answer claim would be weakest?",
        options: [
          "The collapse was only caused by people dancing.",
          "The rod change doubled the load on the upper connection.",
          "Communication failure contributed to the collapse.",
          "Public safety was violated."
        ],
        correctAnswer: 0,
        explanation: "Dancing was normal use. The unsafe connection was the real issue."
      },
      {
        question: "Best final conclusion for a 5-mark ethics answer about the Hyatt collapse?",
        options: [
          "The Hyatt collapse shows that public safety depends on verified design changes, clear communication, and accountable engineers.",
          "The Hyatt collapse shows that beautiful buildings are impossible to make safe.",
          "The Hyatt collapse shows that criminal conviction is required before ethics matters.",
          "The Hyatt collapse shows that shop drawings never affect safety."
        ],
        correctAnswer: 0,
        explanation: "This conclusion combines the main case facts with ethics principles."
      }
    ]
  },
  { caseId: "case-9", questions: [] },
  { caseId: "case-10", questions: [] }
];

const quizTopics = {
  "case-1": [
    "Engineering ethics",
    "Transparency",
    "Honesty",
    "Lab vs road",
    "Public welfare",
    "Sustainability claims",
    "Professional responsibility",
    "Intentional misconduct",
    "Accountability",
    "Stakeholders",
    "Corporate culture",
    "Profit pressure",
    "Legal compliance",
    "Technical vs ethical",
    "Regulation",
    "Public trust",
    "Environmental responsibility",
    "Consumer rights",
    "Engineering lesson",
    "Inspection ethics",
    "Accountability",
    "Verification",
    "Transparency",
    "Corporate culture",
    "Principle-based answer",
    "Discovery",
    "Discovery ethics",
    "Written answer",
    "Consumer rights",
    "Professional responsibility",
    "Industry trust",
    "Corporate culture",
    "Verification",
    "Engineering ethics",
    "Ethical action"
  ],
  "case-2": [
    "Project ethics",
    "Case comparison",
    "Big Bang launch",
    "Risk management",
    "Communication",
    "Stakeholders",
    "Training",
    "Baggage system",
    "Deadline pressure",
    "Testing",
    "Crisis management",
    "Stakeholder warnings",
    "Phased rollout",
    "Risk management",
    "Public trust",
    "External pressure",
    "Project management",
    "Ignored warnings",
    "Crisis management",
    "Capacity planning",
    "Accountability",
    "Realistic testing",
    "Written answers",
    "Stakeholders",
    "Final lesson",
    "Failure visibility",
    "User impact",
    "Written answer",
    "Stakeholder management",
    "Phased rollout",
    "Human factors",
    "Ignored warnings",
    "Communication",
    "Realistic testing",
    "Prevention"
  ],
  "case-3": [
    "Similarity and ethics",
    "MCAS function",
    "MCAS ethics",
    "Transparency failure",
    "Operator blame",
    "Public safety",
    "Engine placement",
    "Profit vs safety",
    "Accountability",
    "Sensor risk",
    "Similarity claim",
    "Pilot training",
    "Public trust",
    "FAA oversight",
    "Ethics case",
    "Professional responsibility",
    "Weak answer",
    "Automation ethics",
    "Risk management",
    "Two crashes",
    "Prevention",
    "Retraining ethics",
    "Accountability and victims",
    "Business pressure",
    "Safety culture",
    "Certification limit",
    "Stakeholders",
    "Consequences",
    "Transparency",
    "Final conclusion"
  ],
  "case-4": [
    "Software ethics",
    "Data conversion",
    "Code reuse",
    "Professional responsibility",
    "Realistic testing",
    "Redundancy",
    "Core principle",
    "Past success",
    "Risk management",
    "Integrity",
    "Common-mode failure",
    "Identical redundancy",
    "Organizational culture",
    "SRI role",
    "Weak claim",
    "Prevention",
    "Public trust",
    "System causes",
    "Testing",
    "Safety-critical software",
    "Accountability",
    "Changed conditions",
    "Overflow handling",
    "Backup trust",
    "Root causes",
    "Ethics education",
    "Hardware reliability",
    "Ethical prevention",
    "Integrity lesson",
    "Final conclusion"
  ],
  "case-5": [
    "Medical device ethics",
    "Software vs hardware",
    "Patient safety",
    "Error messages",
    "Malfunction 54",
    "Blame the operator",
    "Software engineering",
    "Code reuse",
    "Fail-safe design",
    "Arithmetic overflow",
    "AECL accountability",
    "Transparency",
    "Repeated harm",
    "Human factors",
    "Documentation",
    "Regulation",
    "Patient harm",
    "Software can fail",
    "Hardware interlocks",
    "Advanced technology",
    "Professional responsibility",
    "Proceed after errors",
    "First response",
    "Failure chain",
    "Dose monitor",
    "Weak claim",
    "Consequences",
    "Accountability",
    "Testing",
    "Final conclusion"
  ],
  "case-6": [
    "Warning signs",
    "Ethics case",
    "Design weakness",
    "Resonance vs flutter",
    "Torsional flutter",
    "Cost vs safety",
    "Public safety",
    "Galloping Gertie",
    "Wind load",
    "Professional responsibility",
    "Plate girders",
    "Risk management",
    "Natural forces",
    "Public trust",
    "Innovation responsibility",
    "Economy vs safety",
    "Prevention",
    "Failure chain",
    "Static vs dynamic",
    "Vortex shedding",
    "Weak claim",
    "Testing",
    "Ignoring warnings",
    "Accountability",
    "Assumptions",
    "Stakeholders",
    "Physics vs ethics",
    "Pushing limits",
    "Best prevention",
    "Final conclusion"
  ],
  "case-7": [
    "Foreseeable hazard",
    "Chain of failures",
    "Core principle",
    "Exit sign ethics",
    "Known hazard",
    "Accountability",
    "Single cause",
    "Fire spread",
    "Vulnerable stakeholders",
    "First response",
    "Risk management",
    "Consequences",
    "NSPE safety",
    "Code enforcement",
    "Escape routes",
    "Low-cost lodging",
    "Public visibility",
    "Inspector duty",
    "Egress prevention",
    "Fire suppression",
    "Mattress decision",
    "Weak claim",
    "Public trust",
    "Defense in depth",
    "Justice",
    "Multi-factor cause",
    "Professional responsibility",
    "Deterrence",
    "Accountability + prevention",
    "Final lesson"
  ],
  "case-8": [
    "Public space failure",
    "Load path change",
    "Ethics of change",
    "Communication failure",
    "Engineer's seal",
    "Professional responsibility",
    "Code compliance",
    "Shared responsibility",
    "Fast-track construction",
    "Load path ignored",
    "Accountability",
    "Integrity",
    "Warning signs",
    "Public trust",
    "Load path mechanism",
    "User vs design",
    "Professional bodies",
    "Legal vs ethical",
    "Location risk",
    "Communication duty",
    "Consequences",
    "Technical cause",
    "Schedule pressure",
    "Shop drawings",
    "Fabricator-engineer",
    "Failure chain",
    "Prevention",
    "Ethics education",
    "Weak claim",
    "Final conclusion"
  ]
};

const quizExamTips = {
  "case-1": [
    "If the question asks why this is unethical, mention intentional deception and misuse of engineering knowledge.",
    "Transparency means stakeholders are not kept in the dark.",
    "Honesty means the company's claims must match the real behavior of the product.",
    "Strong written phrase: \"They passed the test but violated the purpose of the test.\"",
    "When pollution or safety is involved, connect it to public welfare.",
    "Use the phrase \"gap between promise and action.\"",
    "Engineers cannot say \"I was only following orders\" when public welfare and law are involved.",
    "Intentional misconduct = designed deception, not unexpected malfunction.",
    "Accountability answers should include responsibility plus corrective action.",
    "For stakeholder questions, list who depended on the truth.",
    "Corporate culture = what behavior the organization rewards, tolerates, or ignores.",
    "Do not say profit is always unethical. The issue is profit gained through deception.",
    "Compliance is not only about appearance, it must reflect real behavior.",
    "Excellent written phrase: \"The system worked technically, but failed ethically.\"",
    "Connect this to verification and public trust.",
    "Public trust = consistency between promise and behavior.",
    "Environmental ethics focuses on real impact, not appearance.",
    "Consumer rights include truthful and non-misleading information.",
    "Use \"technical knowledge must be guided by ethics.\"",
    "Any \"hide real behavior during inspection\" scenario is a deception case.",
    "Recovery answer = responsibility + compensation + culture change + verification.",
    "Strong phrase: \"Compare promises with actual behavior.\"",
    "If information is hidden, think transparency.",
    "Multiple people knowing = culture and accountability issue.",
    "Best answers connect the action, the principle, the stakeholder, and the consequence.",
    "Discovery answer = road emissions did not match lab emissions.",
    "Link discovery to \"promise vs actual behavior.\"",
    "Strong answers connect action + principle + consequence.",
    "Consumer rights include truthful information.",
    "\"Following orders\" is not a full defense.",
    "Some cases affect industry-wide trust.",
    "Corporate culture = what behavior is rewarded or tolerated.",
    "Recovery requires proof, not only promises.",
    "Engineering ethics controls how technical power is used.",
    "\"What should have been done?\" = honesty + compliance + public welfare."
  ],
  "case-2": [
    "Ethics applies when engineering/project decisions affect people.",
    "Do not force every case into the same ethical category.",
    "For major systems, phased implementation usually reduces risk.",
    "Risk management means identifying likely failures before they harm users.",
    "Poor communication often connects to transparency and accountability.",
    "Stakeholders include workers, not only customers.",
    "A system is not ready if operators are not ready.",
    "For technical systems, ask whether testing matched real operating conditions.",
    "Profit, reputation, or schedule pressure becomes unethical when it overrides stakeholder welfare.",
    "Strong phrase: \"Testing must reflect real use.\"",
    "In written answers, link communication failures to accountability.",
    "Ignoring warnings is a strong ethics point.",
    "Safer implementation strategy = phased rollout.",
    "In project ethics, foreseeable risk creates responsibility.",
    "Reputation damage often comes from gap between promise and performance.",
    "External pressure explains causes, but does not excuse poor decisions.",
    "Project ethics = not just completion, but responsible completion.",
    "Warnings before failure are important in written answers.",
    "Crisis management means action during failure, not only planning before failure.",
    "Technical planning becomes ethical when failure affects users.",
    "Accountability includes responsibility plus corrective action.",
    "Do not only ask \"Was it tested?\" Ask \"Was it tested realistically?\"",
    "Strong answers connect facts, principles, and consequences.",
    "Stakeholder questions require broad thinking.",
    "Best final line: \"Opening on time is not success if the system is not ready.\"",
    "T5 visibility answer = opening-day operational breakdown.",
    "Real-world harm to users makes project failure ethical.",
    "Use this sentence in conclusion.",
    "Staff are stakeholders, not just workers.",
    "Big system = phased launch is usually safer.",
    "Human factors include training, navigation, procedures, and communication.",
    "Ignored warnings are often high-value written-answer points.",
    "Communication failures usually connect to transparency.",
    "Ask: tested how, by whom, and under what conditions?",
    "Prevention answer = phased rollout + training + testing + risk plan + communication."
  ],
  "case-3": [
    "Do not say profit is always unethical. Say safety must not be compromised for profit.",
    "MCAS = automatic nose-down control under certain flight conditions.",
    "Safety-critical automation requires training and clear disclosure.",
    "Transparency means safety-critical information reaches the right people.",
    "In ethics, look at system design, training, and information — not only operator action.",
    "Death or injury risk usually means public safety is central.",
    "Technical chain: larger engines → changed behavior → MCAS added.",
    "Business goals are acceptable only if safety remains first.",
    "Accountability = responsibility + corrective action + prevention.",
    "Automation acting on bad data is a high-yield risk management fact.",
    "Similarity claim + reduced training = high-yield exam combination.",
    "Training is an ethical duty when users must respond to safety-critical behavior.",
    "Public trust = confidence in safety systems and regulatory oversight.",
    "Regulation is part of public protection, but does not replace manufacturer responsibility.",
    "Strong ethics answers connect case facts to human consequences.",
    "Responsibility is shared across technical and organizational decisions.",
    "Avoid one-cause blame. The crisis had multiple contributing factors.",
    "Automation ethics = predictability + training + transparency + control.",
    "Single-point sensor failure triggering dangerous behavior = risk management failure.",
    "Repetition after warning = stronger accountability failure.",
    "Prevention answers should match root causes.",
    "Less training becomes unethical when safety-critical behavior is involved.",
    "Accountability includes victims, correction, and prevention.",
    "Explain business pressure without excusing it.",
    "Culture questions ask what the organization tolerated or prioritized.",
    "Certification does not remove engineering responsibility.",
    "Stakeholders include direct and indirect groups.",
    "Consequences deter future unethical decisions.",
    "Transparency is proactive, not reactive.",
    "End with safety, transparency, training, and accountability."
  ],
  "case-4": [
    "Connect the technical bug to professional responsibility and public trust.",
    "Ariane 5 technical core = 64-bit to 16-bit conversion overflow.",
    "Reused code must be revalidated when context changes.",
    "New system means new validation.",
    "Testing must match real operating conditions.",
    "Redundancy must protect against shared software faults.",
    "For Ariane 5, professional responsibility is the main principle.",
    "Past success does not replace verification.",
    "Risk management means checking changed assumptions.",
    "Integrity includes not pretending assumptions are verified.",
    "Same software can mean same failure.",
    "True redundancy must consider software diversity.",
    "Culture questions ask what the organization normalized.",
    "Know SRI generally, not excessive details.",
    "Avoid 'random accident' explanations.",
    "Prevention = validate, test, handle failure.",
    "Public trust can apply without direct human death.",
    "Ethics answers should avoid one-person blame.",
    "Boundary testing is high-yield for Ariane 5.",
    "Software ethics matters when software controls physical systems.",
    "Accountability is responsibility plus prevention.",
    "Changed conditions are the central case fact.",
    "Fail-safe behavior is part of software ethics.",
    "Ask whether the backup fails differently.",
    "Use a multi-cause answer.",
    "The lesson is responsible software engineering, not no software.",
    "System safety includes both hardware and software.",
    "Prevention should match cause.",
    "Use 'question assumptions' in written answers.",
    "End with revalidation, safety-critical systems, and responsibility."
  ],
  "case-5": [
    "Medical-device cases usually begin with patient safety.",
    "Therac-25 key idea: software replaced hardware protection.",
    "Link patient safety to actual harm, not only design theory.",
    "Error-message design is a human factors issue.",
    "Malfunction 54 = timing/race condition + real operator behavior.",
    "In ethics, do not blame users when design sets them up to fail.",
    "Poor software practice is a direct ethics issue in safety-critical systems.",
    "Reuse requires testing, documentation, and review.",
    "Fail-safe means failure should move the system to a safe state.",
    "Overflow is technical, but its ethics impact is patient harm.",
    "Denial after warning signs is an accountability failure.",
    "Transparency means clear safety information reaches users.",
    "Repeated harm makes accountability failure stronger.",
    "Human factors = how people actually use the system.",
    "Documentation is part of safety in engineering.",
    "Regulators protect the public when manufacturer control is insufficient.",
    "Patient harm = patient safety first.",
    "Software can be safety-critical.",
    "Redundancy should not depend on the same failure source.",
    "Do not say technology is bad. Say unsafe technology is bad.",
    "Professional responsibility follows the system's risk.",
    "Unknown fault should stop the system, not continue.",
    "Early warning signs require conservative safety response.",
    "Do not mix cases. Match the failure chain to the case.",
    "Dose monitor = later hardware fail-safe.",
    "Avoid blaming only the user.",
    "Consequences include reforms, not only lawsuits.",
    "Accountability is proactive, not only apology.",
    "Test how people actually use the system.",
    "End with patient safety and professional responsibility."
  ],
  "case-6": [
    "Warning signs are important in risk management questions.",
    "Public infrastructure failure connects to public safety and professional responsibility.",
    "Remember: slender + flexible + wind = key idea.",
    "Do not write 'only resonance.' Mention torsional flutter.",
    "Torsional means twisting.",
    "Cost-saving is acceptable only if safety is protected.",
    "Public bridge = public safety.",
    "The nickname is evidence of known risk.",
    "The ethics lesson is to design for real loads, not only obvious loads.",
    "Professional responsibility = competent and complete risk evaluation.",
    "Shape matters in wind design.",
    "Warning signs are risk data.",
    "Natural forces do not cancel engineering duty.",
    "Public trust is a common written-question angle.",
    "Innovation is not bad. Unchecked innovation is risky.",
    "Avoid extreme answers about cost.",
    "Prevention should match the cause.",
    "Use the correct case chain, not another case's pattern.",
    "Distinguish static strength from dynamic stability.",
    "Vortex shedding relates to vertical oscillation, not the final answer alone.",
    "Avoid 'random accident' explanations.",
    "Testing is evidence before trust.",
    "Repeated warnings should never become 'normal.'",
    "Accountability is corrective and preventive.",
    "Changed design conditions require changed analysis.",
    "Stakeholders include direct users and society.",
    "Technical cause + ethical responsibility = strong answer.",
    "Innovation requires extra caution.",
    "Prevention answers need both technical and ethical controls.",
    "End with public safety and real-world conditions."
  ],
  "case-7": [
    "A foreseeable hazard near an escape route is a double failure — fire risk and egress failure combined.",
    "Strong answers list multiple combined factors, not a single cause.",
    "Public safety and welfare is always the highest-priority principle in building and fire cases.",
    "Exit signs are life-safety systems — a broken one is a safety defect, not a maintenance issue.",
    "A prior citation means the hazard was known and preventable — use 'foreseeable' in your answer.",
    "Accountability = identify + correct. Knowing a hazard and not fixing it is the failure.",
    "Single-cause explanations almost always score lower than multi-factor ones in ethics exams.",
    "Flammable storage near ignition source = compounding hazard — show this chain in written answers.",
    "Vulnerable stakeholders always increase ethical duty — mention who was affected and why.",
    "The correct response to a fire risk that appears controlled is full safe removal, not storage.",
    "Risk management = identifying foreseeable hazard combinations, not just individual risks.",
    "High casualty count proves the safety system was inadequate for the real population inside.",
    "NSPE 'hold paramount' is always high-yield for fire and building cases.",
    "A cited-but-not-fixed violation is more damaging ethically than an uncited one — it proves awareness.",
    "Escape route failure = blocked path + crowded alternative + no working signage.",
    "Poverty does not reduce safety rights — this is a trap answer, never choose it.",
    "Disasters become systemic lessons when enforcement failures are revealed at scale.",
    "Inspector duty = report AND follow up. Issuing a citation is not enough.",
    "Exit safety = signs + clear routes + usable exits. Name all three if asked.",
    "Fire suppression + safe storage = the two physical controls for limiting fire spread.",
    "The mattress decision is ethically central — it combined fire source, fuel, and escape blockage.",
    "Victim-blaming claims are always the weakest in engineering ethics — look for them in MCQs.",
    "Public trust applies to all lodging, not just hotels or high-cost buildings.",
    "Delayed external response makes internal protection systems the last line of defense.",
    "Any answer that implies some groups deserve less safety is ethically wrong — mark it wrong.",
    "Exam answers combining physical cause + management failure + enforcement failure are strongest.",
    "Professional responsibility = proactive hazard correction, not reactive documentation.",
    "Consequences deter future negligence — connect the death toll to the preventable causes.",
    "Accountability that leads to code reform is the highest-value answer for prevention questions.",
    "Best conclusion combines foreseeability + vulnerability + duty to act before harm."
  ],
  "case-8": [
    "When a public structure fails, connect the case to public safety and professional duty.",
    "Hyatt technical core: continuous rods to split rods to doubled load.",
    "A design change becomes ethically important when it affects public safety.",
    "Communication in engineering means safety-critical information reaches the right people.",
    "Engineer's seal = high-yield accountability point.",
    "Do not say the engineer's responsibility ended at the concept stage.",
    "Codes are not just paperwork, they protect lives.",
    "Complex failures often involve shared responsibility.",
    "Say pressure increased risk, not fast-track is always wrong.",
    "Load path changes must be recalculated.",
    "Accountability is prevention plus responsibility.",
    "Integrity is broader than not lying.",
    "Warning sign plus no full review = risk management issue.",
    "Public trust questions need impact on society, not only case facts.",
    "Know the load path change clearly.",
    "Do not blame users for normal public use.",
    "Professional consequences are not the same as criminal consequences.",
    "Legal and ethical responsibility overlap, but are not identical.",
    "Risk = probability plus consequence.",
    "In ethics MCQs, assuming someone else checked it is usually wrong.",
    "Consequences deter unethical or careless practice.",
    "Keep the technical cause simple and accurate.",
    "Public safety is the limit on cost and time pressure.",
    "Shop drawings are high-yield in Hyatt.",
    "Practical changes still need engineering review.",
    "Great written answers often explain the failure chain.",
    "Prevention must match the cause.",
    "Why studied questions ask for the broader lesson.",
    "Avoid blaming normal users.",
    "End with public safety, communication, and accountability."
  ]
};

const quizState = {};

function getQuiz(caseId) {
  return quizData.find((quiz) => quiz.caseId === caseId);
}

function getState(caseId) {
  if (!quizState[caseId]) {
    quizState[caseId] = {
      currentIndex: 0,
      answers: {},
      submitted: {}
    };
  }
  return quizState[caseId];
}

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function setWarning(caseId, message) {
  const warningElement = document.querySelector(`[data-warning-for="${caseId}"]`);
  if (warningElement) {
    warningElement.textContent = message;
  }
}

function optionLetter(optionIndex) {
  return String.fromCharCode(65 + optionIndex);
}

function formatAnswer(question, optionIndex) {
  return `${optionLetter(optionIndex)}. ${question.options[optionIndex]}`;
}

function highlightTerms(text, caseId) {
  const sharedText = text
    .replaceAll("intentional deception", "<strong>intentional deception</strong>")
    .replaceAll("defeat-device software", "<strong>defeat-device software</strong>")
    .replaceAll("defeat device", "<strong>defeat device</strong>")
    .replaceAll("public welfare", "<strong>public welfare</strong>")
    .replaceAll("public trust", "<strong>public trust</strong>")
    .replaceAll("transparent testing", "<strong>transparent testing</strong>");

  if (caseId === "case-3") {
    return sharedText
      .replaceAll("MCAS", "<strong>MCAS</strong>")
      .replaceAll("safety-critical", "<strong>safety-critical</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("pilot training", "<strong>pilot training</strong>")
      .replaceAll("transparency", "<strong>transparency</strong>")
      .replaceAll("faulty sensor", "<strong>faulty sensor</strong>")
      .replaceAll("competition", "<strong>competition</strong>");
  }

  if (caseId === "case-4") {
    return sharedText
      .replaceAll("software reuse", "<strong>software reuse</strong>")
      .replaceAll("reused software", "<strong>reused software</strong>")
      .replaceAll("validation", "<strong>validation</strong>")
      .replaceAll("overflow", "<strong>overflow</strong>")
      .replaceAll("redundancy", "<strong>redundancy</strong>")
      .replaceAll("safety-critical", "<strong>safety-critical</strong>")
      .replaceAll("boundary", "<strong>boundary</strong>");
  }

  if (caseId === "case-5") {
    return sharedText
      .replaceAll("Therac-25", "<strong>Therac-25</strong>")
      .replaceAll("patient safety", "<strong>patient safety</strong>")
      .replaceAll("radiation", "<strong>radiation</strong>")
      .replaceAll("hardware interlocks", "<strong>hardware interlocks</strong>")
      .replaceAll("fail-safe", "<strong>fail-safe</strong>")
      .replaceAll("Malfunction 54", "<strong>Malfunction 54</strong>")
      .replaceAll("accountability", "<strong>accountability</strong>")
      .replaceAll("human factors", "<strong>human factors</strong>")
      .replaceAll("overflow", "<strong>overflow</strong>");
  }

  if (caseId === "case-6") {
    return sharedText
      .replaceAll("Tacoma Narrows", "<strong>Tacoma Narrows</strong>")
      .replaceAll("torsional flutter", "<strong>torsional flutter</strong>")
      .replaceAll("Torsional flutter", "<strong>Torsional flutter</strong>")
      .replaceAll("resonance", "<strong>resonance</strong>")
      .replaceAll("wind-induced", "<strong>wind-induced</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("cost-saving", "<strong>cost-saving</strong>")
      .replaceAll("warning signs", "<strong>warning signs</strong>")
      .replaceAll("warning sign", "<strong>warning sign</strong>")
      .replaceAll("real-world", "<strong>real-world</strong>")
      .replaceAll("aerodynamic", "<strong>aerodynamic</strong>");
  }

  if (caseId === "case-7") {
    return sharedText
      .replaceAll("Gulf Hotel", "<strong>Gulf Hotel</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("public welfare", "<strong>public welfare</strong>")
      .replaceAll("exit light", "<strong>exit light</strong>")
      .replaceAll("exit signs", "<strong>exit signs</strong>")
      .replaceAll("sprinklers", "<strong>sprinklers</strong>")
      .replaceAll("extinguishers", "<strong>extinguishers</strong>")
      .replaceAll("foreseeable", "<strong>foreseeable</strong>")
      .replaceAll("vulnerable", "<strong>vulnerable</strong>")
      .replaceAll("flammables", "<strong>flammables</strong>")
      .replaceAll("code", "<strong>code</strong>");
  }

  if (caseId === "case-8") {
    return sharedText
      .replaceAll("load path", "<strong>load path</strong>")
      .replaceAll("split rods", "<strong>split rods</strong>")
      .replaceAll("split-rod", "<strong>split-rod</strong>")
      .replaceAll("continuous rods", "<strong>continuous rods</strong>")
      .replaceAll("doubled the load", "<strong>doubled the load</strong>")
      .replaceAll("doubled load", "<strong>doubled load</strong>")
      .replaceAll("double load", "<strong>double load</strong>")
      .replaceAll("engineer's seal", "<strong>engineer's seal</strong>")
      .replaceAll("shop drawings", "<strong>shop drawings</strong>")
      .replaceAll("shop drawing", "<strong>shop drawing</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("professional responsibility", "<strong>professional responsibility</strong>")
      .replaceAll("recalculate", "<strong>recalculate</strong>")
      .replaceAll("fast-track", "<strong>fast-track</strong>")
      .replaceAll("code strength", "<strong>code strength</strong>")
      .replaceAll("design change", "<strong>design change</strong>")
      .replaceAll("communication", "<strong>communication</strong>")
      .replaceAll("independent review", "<strong>independent review</strong>")
      .replaceAll("accountability", "<strong>accountability</strong>");
  }

  if (caseId !== "case-2") {
    return sharedText;
  }

  return sharedText
    .replaceAll("operational readiness", "<strong>operational readiness</strong>")
    .replaceAll("project readiness", "<strong>project readiness</strong>")
    .replaceAll("risk management", "<strong>risk management</strong>")
    .replaceAll("crisis management", "<strong>crisis management</strong>")
    .replaceAll("phased rollout", "<strong>phased rollout</strong>")
    .replaceAll("Big Bang", "<strong>Big Bang</strong>")
    .replaceAll("stakeholder", "<strong>stakeholder</strong>")
    .replaceAll("communication", "<strong>communication</strong>")
    .replaceAll("public responsibility", "<strong>public responsibility</strong>");
}

function getCorrectCount(caseId) {
  const quiz = getQuiz(caseId);
  const state = getState(caseId);

  if (!quiz) {
    return 0;
  }

  return quiz.questions.reduce((total, question, questionIndex) => {
    const answeredCorrectly = state.submitted[questionIndex] && Number(state.answers[questionIndex]) === question.correctAnswer;
    return total + (answeredCorrectly ? 1 : 0);
  }, 0);
}

function getSubmittedCount(caseId) {
  const state = getState(caseId);
  return Object.keys(state.submitted).filter((questionIndex) => state.submitted[questionIndex]).length;
}

function getPerformanceMessage(percentage) {
  if (percentage >= 90) {
    return "Excellent, ready for exam";
  }

  if (percentage >= 70) {
    return "Good, revise weak points";
  }

  return "Repeat the case";
}

function renderAllQuizzes() {
  document.querySelectorAll("[data-quiz-for]").forEach((container) => {
    renderQuiz(container.dataset.quizFor);
  });
}

function getQuizCardElement(caseId) {
  const container = document.querySelector(`[data-quiz-for="${caseId}"]`);
  return container ? container.closest(".quiz-card") || container : null;
}

function rememberQuizPosition(caseId) {
  const quizCard = getQuizCardElement(caseId);
  if (!quizCard) {
    return null;
  }

  return {
    element: quizCard,
    top: quizCard.getBoundingClientRect().top
  };
}

function restoreQuizPosition(snapshot) {
  if (!snapshot || !snapshot.element) {
    return;
  }

  const nextTop = snapshot.element.getBoundingClientRect().top;
  const shift = nextTop - snapshot.top;

  if (Math.abs(shift) > 1) {
    window.scrollBy({ top: shift, left: 0, behavior: "auto" });
  }
}

function gentlyRevealResult(caseId) {
  window.requestAnimationFrame(() => {
    const resultCard = document.querySelector(`[data-quiz-for="${caseId}"] .result-card`);
    if (resultCard) {
      resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

function renderQuiz(caseId) {
  const quiz = getQuiz(caseId);
  const container = document.querySelector(`[data-quiz-for="${caseId}"]`);
  const submitButton = document.querySelector(`[data-submit-quiz="${caseId}"]`);
  const nextButton = document.querySelector(`[data-next-question="${caseId}"]`);
  const resetButton = document.querySelector(`[data-reset-quiz="${caseId}"]`);

  if (!container || !quiz) {
    return;
  }

  container.innerHTML = "";

  if (!quiz.questions.length) {
    const emptyMessage = createElement(
      "p",
      "empty-quiz",
      "No MCQs have been added for this case yet. Add questions in script.js when the case content is ready."
    );
    container.appendChild(emptyMessage);
    updateScore(caseId, null);
    if (submitButton) submitButton.disabled = true;
    if (nextButton) nextButton.hidden = true;
    if (resetButton) resetButton.disabled = true;
    return;
  }

  const state = getState(caseId);
  state.currentIndex = Math.min(Math.max(state.currentIndex, 0), quiz.questions.length - 1);

  const questionIndex = state.currentIndex;
  const question = quiz.questions[questionIndex];
  const selectedAnswer = state.answers[questionIndex];
  const isSubmitted = Boolean(state.submitted[questionIndex]);
  const isLastQuestion = questionIndex === quiz.questions.length - 1;
  const correctCount = getCorrectCount(caseId);
  const submittedCount = getSubmittedCount(caseId);
  const progressPercent = Math.round(((questionIndex + 1) / quiz.questions.length) * 100);
  const topic = (quizTopics[caseId] && quizTopics[caseId][questionIndex]) || "Engineering ethics";

  const quizShell = createElement("div", "single-quiz-card");
  const meta = createElement("div", "single-quiz-meta");
  meta.appendChild(createElement("span", "question-progress-text", `Question ${questionIndex + 1} of ${quiz.questions.length}`));
  meta.appendChild(createElement("span", "topic-badge", topic));
  meta.appendChild(createElement("span", "current-score", `Current score: ${correctCount} / ${submittedCount}`));

  const progress = createElement("div", "quiz-progress-bar");
  progress.setAttribute("aria-label", `Quiz progress: ${progressPercent}%`);
  const progressFill = createElement("span", null);
  progressFill.style.width = `${progressPercent}%`;
  progress.appendChild(progressFill);

  const fieldset = createElement("fieldset", "quiz-question one-at-a-time");
  const legend = createElement("legend", null, `Question ${questionIndex + 1}`);
  const questionText = createElement("p", "question-text", question.question);
  const optionList = createElement("div", "option-list");

  fieldset.appendChild(legend);
  fieldset.appendChild(questionText);

  question.options.forEach((option, optionIndex) => {
    const optionId = `${caseId}-q${questionIndex}-o${optionIndex}`;
    const label = createElement("label", "option-label");
    const input = document.createElement("input");
    const optionText = createElement("span", null, `${optionLetter(optionIndex)}. ${option}`);

    input.type = "radio";
    input.name = `${caseId}-q${questionIndex}`;
    input.id = optionId;
    input.value = String(optionIndex);
    input.checked = Number(selectedAnswer) === optionIndex;
    input.disabled = isSubmitted;
    input.addEventListener("change", () => {
      getState(caseId).answers[questionIndex] = optionIndex;
      setWarning(caseId, "");
      renderQuiz(caseId);
    });

    label.setAttribute("for", optionId);

    if (isSubmitted && optionIndex === question.correctAnswer) {
      label.classList.add("correct-option");
    }

    if (
      isSubmitted &&
      Number(selectedAnswer) === optionIndex &&
      optionIndex !== question.correctAnswer
    ) {
      label.classList.add("wrong-option");
    }

    label.appendChild(input);
    label.appendChild(optionText);
    optionList.appendChild(label);
  });

  fieldset.appendChild(optionList);
  quizShell.appendChild(meta);
  quizShell.appendChild(progress);
  quizShell.appendChild(fieldset);

  if (isSubmitted) {
    quizShell.appendChild(createResultCard(caseId, question, questionIndex));
  }

  if (isSubmitted && isLastQuestion) {
    quizShell.appendChild(createFinalResult(caseId));
  }

  container.appendChild(quizShell);

  if (submitButton) {
    submitButton.hidden = isSubmitted;
    submitButton.disabled = isSubmitted;
  }

  if (nextButton) {
    nextButton.hidden = !isSubmitted || isLastQuestion;
    nextButton.disabled = !isSubmitted || isLastQuestion;
  }

  if (resetButton) {
    resetButton.disabled = false;
  }

  updateScore(caseId);
}

function createResultCard(caseId, question, questionIndex) {
  const state = getState(caseId);
  const selectedAnswer = Number(state.answers[questionIndex]);
  const isCorrect = selectedAnswer === question.correctAnswer;
  const card = createElement("section", `result-card ${isCorrect ? "correct" : "wrong"}`);
  const title = createElement("h4", null, isCorrect ? "Correct" : "Wrong");
  const yourAnswer = createElement("p");
  const correctAnswer = createElement("p");
  const whyTitle = createElement("h5", null, "Why this is correct");
  const why = createElement("p");
  const tipTitle = createElement("h5", null, "Exam tip");
  const tip = createElement("p");
  const tipText = (quizExamTips[caseId] && quizExamTips[caseId][questionIndex]) || "Connect the fact to an ethical principle and explain why it matters.";

  yourAnswer.innerHTML = `<strong>Your answer:</strong> ${formatAnswer(question, selectedAnswer)}`;
  correctAnswer.innerHTML = `<strong>Correct answer:</strong> ${formatAnswer(question, question.correctAnswer)}`;
  why.innerHTML = highlightTerms(question.explanation, caseId);
  tip.innerHTML = highlightTerms(tipText, caseId);

  card.appendChild(title);
  card.appendChild(yourAnswer);
  card.appendChild(correctAnswer);
  card.appendChild(whyTitle);
  card.appendChild(why);
  card.appendChild(tipTitle);
  card.appendChild(tip);

  return card;
}

function createFinalResult(caseId) {
  const quiz = getQuiz(caseId);
  const correctCount = getCorrectCount(caseId);
  const percentage = Math.round((correctCount / quiz.questions.length) * 100);
  const finalCard = createElement("section", "final-score-card");

  finalCard.innerHTML = `
    <p class="section-kicker">Quiz complete</p>
    <h4>Final Score</h4>
    <p class="final-score-number">${correctCount} / ${quiz.questions.length} (${percentage}%)</p>
    <p class="performance-message">${getPerformanceMessage(percentage)}</p>
    <p>Use the Restart Quiz button to repeat this case from Question 1.</p>
  `;

  setCaseCompletion(caseId, true);
  return finalCard;
}

function submitQuiz(caseId) {
  const state = getState(caseId);
  const questionIndex = state.currentIndex;

  if (state.answers[questionIndex] === undefined) {
    setWarning(caseId, "Choose one option before submitting this answer.");
    return;
  }

  const position = rememberQuizPosition(caseId);
  state.submitted[questionIndex] = true;
  setWarning(caseId, "");
  renderQuiz(caseId);
  restoreQuizPosition(position);
  gentlyRevealResult(caseId);
}

function nextQuestion(caseId) {
  const quiz = getQuiz(caseId);
  const state = getState(caseId);

  if (!quiz || !state.submitted[state.currentIndex]) {
    return;
  }

  const position = rememberQuizPosition(caseId);
  state.currentIndex = Math.min(state.currentIndex + 1, quiz.questions.length - 1);
  setWarning(caseId, "");
  renderQuiz(caseId);
  restoreQuizPosition(position);
}

function resetQuiz(caseId) {
  const position = rememberQuizPosition(caseId);
  quizState[caseId] = {
    currentIndex: 0,
    answers: {},
    submitted: {}
  };
  setWarning(caseId, "");
  renderQuiz(caseId);
  restoreQuizPosition(position);
  setCaseCompletion(caseId, false);
}

function updateScore(caseId, forcedValue) {
  const scoreElement = document.querySelector(`[data-score-for="${caseId}"]`);
  const quiz = getQuiz(caseId);

  if (!scoreElement || !quiz) {
    return;
  }

  if (forcedValue === null || !quiz.questions.length) {
    scoreElement.textContent = "Quiz Score: MCQs not added yet";
    scoreElement.classList.remove("completed");
    return;
  }

  const correctCount = getCorrectCount(caseId);
  const submittedCount = getSubmittedCount(caseId);
  const isComplete = submittedCount === quiz.questions.length;

  if (!submittedCount) {
    scoreElement.textContent = `Current Score: 0 / 0 (${quiz.questions.length} questions)`;
    scoreElement.classList.remove("completed");
    return;
  }

  if (isComplete) {
    const percentage = Math.round((correctCount / quiz.questions.length) * 100);
    scoreElement.textContent = `Final Score: ${correctCount} / ${quiz.questions.length} (${percentage}%)`;
    scoreElement.classList.add("completed");
    return;
  }

  scoreElement.textContent = `Current Score: ${correctCount} / ${submittedCount}`;
  scoreElement.classList.remove("completed");
}

function setCaseCompletion(caseId, isCompleted) {
  const statusElement = document.querySelector(`[data-status-for="${caseId}"]`);
  const navLink = document.querySelector(`.case-nav a[href="#${caseId}"]`);

  if (statusElement) {
    const defaultStatus = statusElement.dataset.defaultStatus || "Not completed";
    statusElement.textContent = isCompleted ? "Quiz completed" : defaultStatus;
    statusElement.classList.toggle("completed", isCompleted || Boolean(statusElement.dataset.defaultStatus));
  }

  if (navLink) {
    navLink.classList.toggle("completed", isCompleted);
  }
}

function bindQuizButtons() {
  document.addEventListener("click", (event) => {
    const submitButton = event.target.closest("[data-submit-quiz]");
    const nextButton = event.target.closest("[data-next-question]");
    const resetButton = event.target.closest("[data-reset-quiz]");

    if (submitButton) {
      event.preventDefault();
      submitQuiz(submitButton.dataset.submitQuiz);
    }

    if (nextButton) {
      event.preventDefault();
      nextQuestion(nextButton.dataset.nextQuestion);
    }

    if (resetButton) {
      event.preventDefault();
      resetQuiz(resetButton.dataset.resetQuiz);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllQuizzes();
  bindQuizButtons();
});
