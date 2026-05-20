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
        question: "In the Boeing 737 MAX crisis, what made MCAS ethically significant?",
        options: [
          "It was a cockpit display feature with no direct safety effect during flight.",
          "It was safety-critical software that could affect aircraft control.",
          "It was mainly an airline scheduling tool used after landing.",
          "It permanently removed pilot authority from every flight decision."
        ],
        correctAnswer: 1,
        explanation: "MCAS was ethically significant because it could push the aircraft nose down, affecting control and safety."
      },
      {
        question: "Boeing wanted the 737 MAX to be viewed as similar to older 737s. Why did this matter ethically?",
        options: [
          "It helped justify limited pilot retraining.",
          "It made the aircraft appear modern without changing any safety duties.",
          "It meant regulators no longer had any role in approving aircraft systems.",
          "It made MCAS unnecessary because similarity claims solved the flight behavior."
        ],
        correctAnswer: 0,
        explanation: "Presenting the aircraft as similar helped reduce training requirements, even though the aircraft had important new behavior."
      },
      {
        question: "In terms of transparency, which answer best describes Boeing's failure?",
        options: [
          "Boeing used too many technical words in public statements.",
          "Boeing gave full MCAS information, but pilots chose not to read it.",
          "Boeing failed to clearly communicate MCAS behavior to key users.",
          "Boeing made pilots read long manuals unrelated to safety.",
        ],
        correctAnswer: 2,
        explanation: "The transparency issue was that pilots and stakeholders were not clearly informed about MCAS."
      },
      {
        question: "What is the strongest explanation of \"profit over safety\" in the Boeing case?",
        options: [
          "Boeing competed with Airbus and tried to avoid costly retraining, influencing safety-related decisions.",
          "Boeing wanted unsafe aircraft because unsafe aircraft would automatically create more profit, which oversimplifies the ethics issue.",
          "Boeing ignored money completely and focused only on regulation.",
          "Boeing's only problem was that pilots disliked learning new cockpit software."
        ],
        correctAnswer: 0,
        explanation: "The issue is not that profit exists, but that business pressure affected safety-critical decisions."
      },
      {
        question: "Why is blaming only the pilots an ethically weak explanation?",
        options: [
          "Pilots had no role in flying the aircraft or responding to emergencies, so design and training cannot matter.",
          "Pilots always cause software failures when automation is included.",
          "Pilots were responsible for aircraft certification and software design.",
          "Pilots faced a confusing emergency involving a system they were not fully trained on."
        ],
        correctAnswer: 3,
        explanation: "The pilots were dealing with hidden or poorly explained automation under severe time pressure."
      },
      {
        question: "How did the problem become visible?",
        options: [
          "Through routine post-delivery paperwork that did not compare accident patterns.",
          "Through two similar crashes and later investigations.",
          "Through a maintenance note about noncritical cockpit documentation.",
          "Through a planned software demo that Boeing scheduled before service."
        ],
        correctAnswer: 1,
        explanation: "The similar crashes triggered grounding and deeper investigation."
      },
      {
        question: "Which principle is most directly connected to the two fatal crashes?",
        options: [
          "Brand identity and aircraft marketing consistency.",
          "Market variety for airlines buying different aircraft.",
          "Public safety.",
          "Market confidence, certification paperwork, and airline purchasing strategy."
        ],
        correctAnswer: 2,
        explanation: "Fatal crashes are directly connected to public safety and welfare."
      },
      {
        question: "Which option best describes the MCAS design concern?",
        options: [
          "MCAS could act based on faulty sensor input and push the nose down.",
          "MCAS was only a fuel-saving label used in airline advertising materials.",
          "MCAS prevented all aircraft motion whenever the aircraft left the ground.",
          "MCAS worked only after landing and therefore had no flight-control effect."
        ],
        correctAnswer: 0,
        explanation: "Faulty sensor input could trigger dangerous automated behavior."
      },
      {
        question: "In terms of accountability, what should Boeing have done after early warning signs and the first crash?",
        options: [
          "Wait until public attention disappeared.",
          "Blame only foreign airlines.",
          "Continue unchanged because certification ended all responsibility.",
          "Act faster with disclosure, fixes, training, and cooperation."
        ],
        correctAnswer: 3,
        explanation: "Accountability requires taking responsibility and preventing repeated harm."
      },
      {
        question: "Why was minimal pilot training ethically problematic?",
        options: [
          "Training is only useful for pilots transferring between airlines.",
          "Pilots needed full understanding of safety-critical aircraft behavior.",
          "Pilots never need software information.",
          "Training would remove all business competition between aircraft makers."
        ],
        correctAnswer: 1,
        explanation: "Pilots needed to understand MCAS because it could affect emergency flight control."
      },
      {
        question: "Which answer is strongest for a written exam about Boeing's transparency?",
        options: [
          "Boeing's communication about MCAS was insufficient for a safety-critical system.",
          "Boeing used aircraft software, which is always unethical in modern aviation.",
          "Boeing's transparency issue was only about public relations after the accidents.",
          "Boeing explained everything perfectly, so transparency was not relevant."
        ],
        correctAnswer: 0,
        explanation: "The best answer connects transparency to MCAS and safety-critical information."
      },
      {
        question: "What made the two crashes strong evidence of a systemic issue?",
        options: [
          "They happened in different countries, so they were unrelated.",
          "They proved pilots never matter in aviation safety, emergency response, training, or system design.",
          "They involved similar aircraft behavior under similar early-flight conditions.",
          "They showed that weather and passenger behavior were the only likely causes."
        ],
        correctAnswer: 2,
        explanation: "Similar failures suggest a repeated system-level problem."
      },
      {
        question: "Which stakeholder group was directly exposed to the highest physical risk?",
        options: [
          "Shareholders and market analysts reviewing delivery performance.",
          "Passengers and pilots.",
          "Marketing departments preparing aircraft launch material.",
          "Airport ground-service contractors working after completed flights."
        ],
        correctAnswer: 1,
        explanation: "Passengers and pilots were physically on the aircraft."
      },
      {
        question: "Which statement best explains the ethical risk of hidden automation?",
        options: [
          "Automation always makes aircraft systems illegal regardless of design, testing, training, or pilot awareness.",
          "Hidden automation only affects visual design and dashboard labels.",
          "Pilots prefer hidden systems in emergencies because they reduce information.",
          "Users may not understand what the system is doing during a critical emergency."
        ],
        correctAnswer: 3,
        explanation: "Hidden automation is dangerous when users must respond quickly."
      },
      {
        question: "Which answer best describes Boeing's professional responsibility?",
        options: [
          "Ensure design changes are tested, disclosed, documented, and trained.",
          "Sell aircraft as quickly as possible after any design change is approved.",
          "Leave all safety understanding to pilots after aircraft delivery.",
          "Treat certification paperwork as a replacement for engineering judgment."
        ],
        correctAnswer: 0,
        explanation: "Professional responsibility requires active safety protection."
      },
      {
        question: "Why is FAA oversight part of the ethical discussion?",
        options: [
          "FAA oversight is only about airline schedules and route approvals.",
          "Regulators are part of the safety system that certifies public aircraft.",
          "Regulators have no role after aircraft are designed.",
          "Oversight only matters for airline competition and paperwork."
        ],
        correctAnswer: 1,
        explanation: "Certification and oversight are important because they affect public safety."
      },
      {
        question: "Which option best explains the safety-culture issue?",
        options: [
          "Safety culture means publishing general safety slogans after accidents.",
          "Safety culture only matters after a company permanently closes.",
          "Safety culture is unrelated to managers if engineers write code.",
          "Business and schedule pressures appeared to weaken safety communication and risk handling."
        ],
        correctAnswer: 3,
        explanation: "Safety culture is about what risks an organization takes seriously."
      },
      {
        question: "What should Boeing have prioritized?",
        options: [
          "Competition only, because business speed controls safety outcomes.",
          "Minimal disclosure only, to reduce confusion about system behavior.",
          "Certification paperwork only, without extra safety communication.",
          "Safety, training, transparency, and reliable design."
        ],
        correctAnswer: 3,
        explanation: "In safety-critical engineering, protecting people comes first."
      },
      {
        question: "Which answer best explains why sensor redundancy mattered?",
        options: [
          "A single faulty input should not trigger dangerous repeated behavior.",
          "Sensors are only for noncritical monitoring, airline schedules, and paperwork.",
          "Redundancy makes pilots unnecessary in every emergency situation.",
          "Redundancy only affects documentation and certification language."
        ],
        correctAnswer: 0,
        explanation: "Safety-critical systems should not fail dangerously from one bad input."
      },
      {
        question: "Which answer is most accurate about competition in this case?",
        options: [
          "Competition is always illegal in engineering.",
          "Competition removes the need for pilot training, regulatory scrutiny, safety communication, and design review.",
          "Competition is normal, but it becomes unethical if it pressures a company to reduce safety transparency.",
          "Competition means regulators cannot question design decisions."
        ],
        correctAnswer: 2,
        explanation: "Competition itself is not unethical, but safety must not be compromised."
      },
      {
        question: "If a written question asks \"What caused the crisis?\", which answer is strongest?",
        options: [
          "One pilot mistake with no other factors.",
          "Competition pressure, design changes, MCAS, weak training, poor transparency, and oversight concerns.",
          "Passenger behavior during takeoff.",
          "An unrelated aircraft configuration update combined with normal airline scheduling."
        ],
        correctAnswer: 1,
        explanation: "The crisis had technical, organizational, and ethical causes."
      },
      {
        question: "What was ethically wrong with minimizing MCAS in training material?",
        options: [
          "Pilots prefer less knowledge in critical situations because less information always improves emergency response.",
          "Training material should never mention software.",
          "MCAS had no effect on control.",
          "Pilots could not fully prepare for how the aircraft might behave in an emergency."
        ],
        correctAnswer: 3,
        explanation: "Training must include safety-critical system behavior."
      },
      {
        question: "What does accountability require after harm has occurred?",
        options: [
          "Admit responsibility, fix the system, compensate victims, cooperate, and prevent recurrence.",
          "Only change advertising and wait for public attention to decrease without reviewing training or design.",
          "Hide the cause until lawsuits finish and regulators lose interest.",
          "Blame users and avoid reviewing design, training, or oversight."
        ],
        correctAnswer: 0,
        explanation: "Accountability includes corrective and preventive action."
      },
      {
        question: "Why did the Boeing case damage public trust?",
        options: [
          "People dislike all aircraft engines and therefore distrust every aircraft.",
          "People questioned whether safety was placed below business pressure.",
          "Public trust only depends on official certification statements.",
          "Trust increased because two crashes made the issue more visible."
        ],
        correctAnswer: 1,
        explanation: "Trust fell because safety culture and regulatory oversight were questioned."
      },
      {
        question: "Which answer best explains the core lesson of the Boeing case?",
        options: [
          "Aircraft should never use software.",
          "Certification makes all ethical questions irrelevant.",
          "Safety-critical systems must be transparent, tested, trained, and designed with public safety first.",
          "Pilots should solve hidden automation alone while companies focus only on delivery schedules."
        ],
        correctAnswer: 2,
        explanation: "The key lesson combines safety, transparency, training, and design responsibility."
      },
      {
        question: "Which of the following would be the weakest written-answer claim?",
        options: [
          "Boeing should have provided clearer MCAS training.",
          "Boeing should have improved redundancy and testing.",
          "The crisis was only pilot error.",
          "Boeing should have been more transparent with regulators."
        ],
        correctAnswer: 2,
        explanation: "The crisis cannot be reduced to pilot error because system design, training, and transparency were major factors."
      },
      {
        question: "Which action would best show improved transparency?",
        options: [
          "Keep MCAS hidden to avoid confusion and rely on pilots to infer system behavior during emergencies.",
          "Clearly explain MCAS to pilots, airlines, and regulators.",
          "Mention MCAS only after another crash.",
          "Tell pilots that all 737s are identical."
        ],
        correctAnswer: 1,
        explanation: "Stakeholders need safety-critical information before operation."
      },
      {
        question: "Which action would best show improved accountability?",
        options: [
          "Delay any response until forced by courts, regulators, media pressure, and public criticism.",
          "Blame pilots without reviewing design.",
          "Treat the crashes as unrelated without evidence.",
          "Publicly accept responsibility, support victims, fix the system, and reform safety practices."
        ],
        correctAnswer: 3,
        explanation: "Accountability requires responsibility and correction."
      },
      {
        question: "Which option is the best \"profit over safety\" sentence?",
        options: [
          "Boeing wanted profit, and profit is always illegal even when companies follow safety rules.",
          "Boeing's effort to reduce retraining costs and compete quickly contributed to minimizing safety-critical changes.",
          "Boeing used engines, so the company was unethical.",
          "Boeing avoided profit and focused only on pilots."
        ],
        correctAnswer: 1,
        explanation: "This is balanced and exam-appropriate."
      },
      {
        question: "Which answer best explains why this is an engineering ethics case?",
        options: [
          "It involved a well-known manufacturer.",
          "It involved corporate reputation and certification paperwork only.",
          "It happened in more than one country only, which by itself proves an ethics violation.",
          "Design, software, training, regulation, and business decisions affected human life and public trust."
        ],
        correctAnswer: 3,
        explanation: "Engineering ethics applies because technical and managerial decisions affected safety."
      }
    ]
  },
  {
    caseId: "case-4",
    questions: [
      {
        question: "In the Ariane 5 case, why is the failure an engineering ethics issue rather than only a coding mistake?",
        options: [
          "The mission failed after launch, but ethics only applies if people are on board.",
          "The software was reused without enough validation in a safety-critical system.",
          "The main issue was that the launch happened in the 1990s.",
          "The payload owner changed the mission purpose during flight."
        ],
        correctAnswer: 1,
        explanation: "The ethical issue is the failure to validate safety-critical reused software under new conditions."
      },
      {
        question: "What was the central technical problem in Ariane 5 Flight 501?",
        options: [
          "The payload sent commands that directly overrode the guidance system.",
          "The launch site lost communication before the rocket left the pad.",
          "A data conversion overflow corrupted guidance information.",
          "The backup computer was removed before final launch approval."
        ],
        correctAnswer: 2,
        explanation: "A large floating-point value was converted into a smaller integer type, causing invalid data."
      },
      {
        question: "Why was reusing Ariane 4 software risky?",
        options: [
          "Ariane 5 operated under different conditions.",
          "Ariane 4 software had never worked in any previous mission.",
          "Software reuse is always forbidden in engineering projects.",
          "Ariane 5 had no guidance computer or flight-control software."
        ],
        correctAnswer: 0,
        explanation: "Old software can become unsafe when the new system produces different values or behavior."
      },
      {
        question: "Which answer best explains the professional responsibility failure?",
        options: [
          "Engineers should have focused only on payload ownership and mission branding.",
          "Engineers should have ignored boundary values because Ariane 4 had flown before.",
          "Engineers should have trusted the old code completely once hardware checks passed.",
          "Engineers should have retested Ariane 4 code under Ariane 5 conditions."
        ],
        correctAnswer: 3,
        explanation: "Professional responsibility requires checking assumptions in a new safety-critical system."
      },
      {
        question: "Why was the backup system ethically weak?",
        options: [
          "It was reviewed by a different team but not connected to launch telemetry.",
          "It used the same software and repeated the same failure.",
          "It was intended to test payload performance rather than guidance data.",
          "It failed because backup systems are never useful in software engineering."
        ],
        correctAnswer: 1,
        explanation: "A backup that repeats the same software bug does not protect against that bug."
      },
      {
        question: "Which principle is most directly connected to missed overflow and boundary cases?",
        options: [
          "Mission communication with satellite owners.",
          "Budget planning after the launch failure.",
          "Testing and validation.",
          "Public relations after an engineering failure."
        ],
        correctAnswer: 2,
        explanation: "The overflow should have been tested using realistic and boundary values."
      },
      {
        question: "What made Ariane 4's past success dangerous in this case?",
        options: [
          "It created overconfidence.",
          "It proved software never fails in safety-critical systems.",
          "It made Ariane 5 identical in hardware and flight behavior.",
          "It removed all testing needs once the old system had succeeded."
        ],
        correctAnswer: 0,
        explanation: "Past success caused the team to trust old assumptions too much."
      },
      {
        question: "Which answer best explains why the failure was not only one programmer's fault?",
        options: [
          "It happened too quickly to analyze and therefore has no process lesson.",
          "It only involved the launch weather and not the software process.",
          "It was caused by the satellite payload rather than guidance decisions.",
          "It involved code reuse, testing, redundancy, and culture."
        ],
        correctAnswer: 3,
        explanation: "The failure resulted from technical and organizational decisions."
      },
      {
        question: "In terms of risk management, what risk was missed?",
        options: [
          "The launch broadcast might fail to explain the mission clearly.",
          "Ariane 5 values could exceed Ariane 4 software limits.",
          "The payload might become the only stakeholder after liftoff.",
          "The team might document too many software assumptions."
        ],
        correctAnswer: 1,
        explanation: "The new rocket could produce values outside the old software's safe range."
      },
      {
        question: "Why is exception or overflow handling important here?",
        options: [
          "Invalid values should not control a rocket.",
          "It improves public announcements after the mission.",
          "It shortens software documentation for later projects.",
          "It helps satellite owners communicate with viewers."
        ],
        correctAnswer: 0,
        explanation: "In safety-critical control software, invalid data must be handled safely."
      },
      {
        question: "Which phrase is strongest for a written answer?",
        options: [
          "Ariane 5 was simply unlucky because software failures cannot be predicted.",
          "The backup system solved the fault before guidance was affected.",
          "Reused software was not validated for the new rocket's real conditions.",
          "Satellites caused the guidance problem during the launch phase."
        ],
        correctAnswer: 2,
        explanation: "This connects the technical issue to ethical responsibility."
      },
      {
        question: "What does common-mode software failure mean in this case?",
        options: [
          "The rocket failed because of two different unrelated software issues.",
          "The backup was stronger than the primary system during failure.",
          "The software worked only after the rocket had already failed.",
          "Primary and backup systems failed from the same software bug."
        ],
        correctAnswer: 3,
        explanation: "Identical software caused both systems to fail in the same way."
      },
      {
        question: "How did the failure become visible?",
        options: [
          "Engineers discovered the issue years later in a classroom exercise.",
          "The rocket deviated and was destroyed shortly after launch.",
          "The system completed the mission and reported a warning afterward.",
          "Mission reports showed a minor documentation issue after launch."
        ],
        correctAnswer: 1,
        explanation: "The failure became visible through the launch failure itself."
      },
      {
        question: "Why was testing insufficient?",
        options: [
          "It did not include realistic Ariane 5 values.",
          "It was performed so many times that new risks became irrelevant.",
          "It proved overflow could not happen under any mission conditions.",
          "It focused too much on boundary values and exception behavior."
        ],
        correctAnswer: 0,
        explanation: "The tests did not reproduce the conditions that triggered overflow."
      },
      {
        question: "Which answer best describes the cultural failure?",
        options: [
          "The team refused to use any old software even when it was validated.",
          "The organization focused too much on boundary testing and review.",
          "Overconfidence made the team undervalue software failure risks.",
          "The organization avoided all assumptions about hardware reliability."
        ],
        correctAnswer: 2,
        explanation: "The culture trusted past success and hardware reliability too much."
      },
      {
        question: "Why does public trust matter even without deaths?",
        options: [
          "Public trust only matters in passenger aircraft, not space missions.",
          "Public trust is unrelated to rockets because no users directly operate them.",
          "Public trust increases after preventable failure if the system is complex.",
          "Public confidence depends on reliable engineering and responsible use of funds."
        ],
        correctAnswer: 3,
        explanation: "Expensive public or institutional projects depend on trust."
      },
      {
        question: "Which option best explains the integrity issue?",
        options: [
          "The team should have honestly questioned old assumptions.",
          "The team should have hidden all reused software from reviewers.",
          "The team should have ignored Ariane 5 differences after success elsewhere.",
          "The team should have blamed the payload for guidance behavior."
        ],
        correctAnswer: 0,
        explanation: "Integrity requires honest evaluation of whether old software still fits."
      },
      {
        question: "What should have been done before launching Ariane 5?",
        options: [
          "Launch first and test software behavior after mission completion.",
          "Revalidate old code with Ariane 5 flight data.",
          "Use the same backup without review because redundancy always works.",
          "Remove overflow checks to simplify safety-critical software."
        ],
        correctAnswer: 1,
        explanation: "The reused code should have been tested against the new rocket's conditions."
      },
      {
        question: "Which answer best explains the role of the SRI?",
        options: [
          "It stored the satellites after launch until they reached orbit.",
          "It replaced the rocket engines during the early launch phase.",
          "It provided inertial reference data used for guidance.",
          "It existed only to report final mission costs after launch."
        ],
        correctAnswer: 2,
        explanation: "The SRI generated data that the flight computer used."
      },
      {
        question: "Why was the payload not the main focus?",
        options: [
          "The failure came from guidance software, not the satellites.",
          "The payload controlled the SRI during launch and caused the overflow.",
          "The payload was the only stakeholder affected by the failure.",
          "The payload was responsible for all prelaunch software testing."
        ],
        correctAnswer: 0,
        explanation: "The video says the payload was not important to the disaster's cause."
      },
      {
        question: "If asked 'What caused the failure?', which answer is strongest?",
        options: [
          "The satellites alone caused the explosion shortly after launch.",
          "The weather created all software errors during the mission.",
          "The rocket had no safety-critical software in the guidance system.",
          "Unsafe code reuse, overflow, weak testing, identical backup, and overconfidence."
        ],
        correctAnswer: 3,
        explanation: "The cause was a combination of technical and organizational failures."
      },
      {
        question: "What is the ethical lesson about code reuse?",
        options: [
          "Reused code is always safer because it has already flown once.",
          "Reused code must be reviewed and validated when the system changes.",
          "Reused code removes the need for boundary testing and review.",
          "Reused code is always illegal in safety-critical engineering."
        ],
        correctAnswer: 1,
        explanation: "Reuse is acceptable only when assumptions still hold."
      },
      {
        question: "Which answer best describes accountability after Ariane 5?",
        options: [
          "Blame only the rocket and avoid reviewing engineering assumptions.",
          "Ignore the software because the mission was unmanned.",
          "Review assumptions, improve testing, and prevent repeated failure.",
          "Repeat the same launch conditions to prove the failure was random."
        ],
        correctAnswer: 2,
        explanation: "Accountability requires learning and correction."
      },
      {
        question: "Why is boundary testing important?",
        options: [
          "The failure happened when a value exceeded the safe range.",
          "Boundary testing replaces all validation and review steps.",
          "Boundary testing only matters in user-interface websites.",
          "Boundary testing prevents every possible hardware failure."
        ],
        correctAnswer: 0,
        explanation: "Boundary testing could have exposed the overflow risk."
      },
      {
        question: "Which answer best explains redundancy responsibility?",
        options: [
          "A backup is always enough if it is present in the system design.",
          "A backup should always be identical to make validation simpler.",
          "A backup removes the need for testing the primary software.",
          "A backup should protect against software faults, not copy them."
        ],
        correctAnswer: 3,
        explanation: "Identical backup software repeated the same error."
      },
      {
        question: "What is the strongest prevention strategy?",
        options: [
          "Trust old software because it once worked on a successful rocket.",
          "Test real Ariane 5 conditions and improve fail-safe handling.",
          "Avoid reviewing type conversions because they are small details.",
          "Ignore backup design because the primary system should be enough."
        ],
        correctAnswer: 1,
        explanation: "Prevention targets realistic testing and safe failure handling."
      },
      {
        question: "Which claim would be weakest in a written answer?",
        options: [
          "The issue was only a random explosion with no software cause.",
          "Testing should include realistic values and boundary conditions.",
          "Reused code requires validation when the system context changes.",
          "Identical backup software can repeat the same design failure."
        ],
        correctAnswer: 0,
        explanation: "The failure had a clear software and validation cause."
      },
      {
        question: "Which answer best explains why hardware reliability was not enough?",
        options: [
          "Reliable hardware prevents every possible software error.",
          "Hardware reliability replaces testing when old software has succeeded.",
          "Software can fail even when hardware is reliable.",
          "Software cannot affect hardware in a physical rocket system."
        ],
        correctAnswer: 2,
        explanation: "The video emphasizes that reliable hardware does not guarantee software safety."
      },
      {
        question: "What is the most important ethical violation in this case?",
        options: [
          "Marketing strategy.",
          "Professional responsibility.",
          "Airline scheduling.",
          "Mission publicity."
        ],
        correctAnswer: 1,
        explanation: "Engineers failed to fully validate safety-critical reused software."
      },
      {
        question: "What is the best final lesson?",
        options: [
          "Old software always works if it has succeeded on a previous project.",
          "Backup systems always prevent safety-critical software failure.",
          "Rockets should never use computers in guidance systems.",
          "Reused software is not automatically safe in a changed safety-critical system."
        ],
        correctAnswer: 3,
        explanation: "The failure shows that changed context requires new validation."
      }
    ]
  },
  {
    caseId: "case-5",
    questions: [
      {
        question: "In the Therac-25 case, why is the machine considered a major engineering ethics case?",
        options: [
          "It was expensive and used in hospitals, which by itself made it an ethics case.",
          "Software and design failures directly harmed patients.",
          "It was larger than modern treatment machines and difficult to transport.",
          "Radiation therapy was new and unknown to medical professionals."
        ],
        correctAnswer: 1,
        explanation: "The ethical issue is that a medical device's software and safety design caused patient injury and death."
      },
      {
        question: "What made Therac-25 more dangerous than older designs?",
        options: [
          "It used only manual controls and no software checks at all.",
          "It had no treatment settings that operators could configure during use.",
          "It relied heavily on software instead of physical interlocks.",
          "It was used only for non-medical factory testing."
        ],
        correctAnswer: 2,
        explanation: "Removing or reducing hardware interlocks made software faults more dangerous."
      },
      {
        question: "In terms of patient safety, what was the central failure?",
        options: [
          "Patients had to wait too long for routine appointments.",
          "Operators used too much paperwork before treatment.",
          "Hospitals used different treatment rooms, which made every setup process unsafe.",
          "Patients received radiation overdoses due to unsafe system behavior."
        ],
        correctAnswer: 3,
        explanation: "The direct harm was massive unintended radiation exposure."
      },
      {
        question: "Why were vague malfunction messages ethically problematic?",
        options: [
          "They were unclear and did not tell operators the danger level.",
          "They only appeared after every treatment ended safely.",
          "They were too detailed for trained operators to interpret during treatment.",
          "They were mostly a formatting issue in the user manual."
        ],
        correctAnswer: 0,
        explanation: "Operators could not judge whether an error was minor or deadly."
      },
      {
        question: "Which answer best describes AECL's accountability failure?",
        options: [
          "AECL immediately removed all machines forever after the first concern.",
          "AECL gave operators perfect information about every malfunction.",
          "AECL denied or minimized reports and acted too slowly.",
          "AECL had no role after selling devices to hospitals."
        ],
        correctAnswer: 2,
        explanation: "Accountability required stronger response after early injuries and warnings."
      },
      {
        question: "Why is \"software worked in older models\" not a strong defense?",
        options: [
          "Old software is always illegal in every medical device context.",
          "Software cannot affect medical devices that use radiation.",
          "Hospitals are responsible for all code after a machine is purchased.",
          "Reused software must still be tested in the new system."
        ],
        correctAnswer: 3,
        explanation: "Old code can fail under new design conditions or workflows."
      },
      {
        question: "What was Malfunction 54 connected to?",
        options: [
          "A dangerous timing/editing issue during treatment setup.",
          "A harmless spelling error in the operator manual.",
          "A patient scheduling conflict between two hospital departments.",
          "A billing code unrelated to the machine's treatment state."
        ],
        correctAnswer: 0,
        explanation: "It was linked to an operator editing settings while machine parts were moving, causing mismatch and overdose risk."
      },
      {
        question: "In terms of fail-safe design, what should Therac-25 have included?",
        options: [
          "More marketing material explaining machine speed to hospitals.",
          "Hardware protection that stops unsafe radiation even if software fails.",
          "Faster proceed keys so operators could clear errors more quickly.",
          "Less documentation so error-code lists would not overwhelm users during treatment."
        ],
        correctAnswer: 1,
        explanation: "Hardware interlocks or monitors could prevent software faults from reaching patients."
      },
      {
        question: "Why was operator behavior important in this case?",
        options: [
          "Operators intentionally harmed patients during normal treatment despite clear device warnings.",
          "Operators never saw error messages before treatment accidents.",
          "Operators used the machine in realistic ways the designers did not fully consider.",
          "Operators wrote the original safety-critical software for AECL."
        ],
        correctAnswer: 2,
        explanation: "Experienced operators made quick edits, and the system was not designed safely for that behavior."
      },
      {
        question: "What does the Therac-25 case teach about automation in medicine?",
        options: [
          "Software should never be used in hospitals or treatment machines.",
          "Operators should ignore machine errors if treatment is urgent and the patient is waiting.",
          "Automation removes manufacturer responsibility after installation.",
          "Automated medical systems need clear safeguards and human-centered design."
        ],
        correctAnswer: 3,
        explanation: "Automation can help, but it must be safe, understandable, and fail-safe."
      },
      {
        question: "Which statement best explains the transparency problem?",
        options: [
          "AECL did not clearly explain error codes or disclose accident patterns quickly.",
          "Hospitals received too much safety data about every incident and could not identify useful warnings.",
          "Patients designed the treatment software and understood every fault.",
          "Regulators caused the original software bug during normal operation."
        ],
        correctAnswer: 0,
        explanation: "Operators and hospitals lacked clear information about dangerous errors and similar incidents."
      },
      {
        question: "Why did repeated accidents make the case more serious ethically?",
        options: [
          "They proved no one was harmed by the machine.",
          "They showed AECL failed to learn quickly from early harm.",
          "They showed the machine was safe under normal operation.",
          "They made software testing unnecessary after first release."
        ],
        correctAnswer: 1,
        explanation: "Repeated accidents show weak learning, accountability, and corrective action."
      },
      {
        question: "What was wrong with allowing operators to press proceed after unclear errors?",
        options: [
          "It made the machine slower during every treatment session.",
          "It forced patients to leave the room before treatment began and created scheduling delays.",
          "It allowed treatment to continue without understanding the risk.",
          "It removed all software from the device during operation."
        ],
        correctAnswer: 2,
        explanation: "Proceeding after vague errors can turn unknown faults into patient harm."
      },
      {
        question: "Which principle is most connected to missing hardware interlocks?",
        options: [
          "Public relations after medical-device accidents.",
          "Price fairness between hospitals and manufacturers.",
          "Staff scheduling across treatment departments.",
          "Fail-safe design."
        ],
        correctAnswer: 3,
        explanation: "Hardware interlocks are physical safeguards that prevent dangerous states."
      },
      {
        question: "Why was AECL's safety analysis ethically weak?",
        options: [
          "It did not properly interrogate the software controlling the device.",
          "It included too much independent software review.",
          "It stopped all sales immediately after the first warning.",
          "It focused only on patient comfort surveys and general scheduling rather than software hazards."
        ],
        correctAnswer: 0,
        explanation: "Software was safety-critical, but it was not deeply analyzed."
      },
      {
        question: "What is the strongest written-answer sentence about Therac-25?",
        options: [
          "Therac-25 was unlucky because all devices fail randomly, so engineers cannot reasonably learn from repeated patient injuries.",
          "Therac-25 shows that software in medical devices must be tested, documented, and backed by fail-safes.",
          "Therac-25 failed only because patients misunderstood treatment.",
          "Therac-25 proves hospitals should never use technology."
        ],
        correctAnswer: 1,
        explanation: "This links software, testing, documentation, and fail-safe design."
      },
      {
        question: "Which answer best describes the role of the FDA?",
        options: [
          "It wrote the original treatment software for AECL.",
          "It ignored all accidents and avoided corrective requirements despite repeated injury reports.",
          "It declared the device defective and demanded corrective action.",
          "It operated the machine during each patient's treatment."
        ],
        correctAnswer: 2,
        explanation: "The FDA became involved after repeated accidents and required fixes."
      },
      {
        question: "Why is documentation important in this case?",
        options: [
          "Documentation only matters for advertisements and hospital sales teams, not for safety review.",
          "Operators should never read manuals for medical equipment.",
          "Documentation cannot affect safety once software is installed.",
          "Independent review and investigation need clear software documentation."
        ],
        correctAnswer: 3,
        explanation: "Poor documentation makes investigation and safe use harder."
      },
      {
        question: "Which option best explains the race/timing problem?",
        options: [
          "Fast edits could occur while machine components were still moving.",
          "The machine only failed after total power outages.",
          "Patients moved the magnets themselves during treatment.",
          "The treatment room clock was wrong during every incident and misled the operators."
        ],
        correctAnswer: 0,
        explanation: "The software did not correctly handle quick operator edits during physical movement."
      },
      {
        question: "What was the arithmetic overflow problem later discovered?",
        options: [
          "A patient received too much paperwork before treatment.",
          "A counter could roll back to zero and hide an error.",
          "The monitor was too bright for operators to read comfortably.",
          "A hospital lost the manual during a treatment session."
        ],
        correctAnswer: 1,
        explanation: "The software counter overflowed, making the system treat an error state as safe."
      },
      {
        question: "Which stakeholder group was most directly harmed?",
        options: [
          "AECL marketing staff responsible for hospital sales.",
          "Hospital parking employees working near the clinic.",
          "Cancer patients receiving treatment.",
          "Software textbook authors studying the case later."
        ],
        correctAnswer: 2,
        explanation: "Patients received the dangerous overdoses."
      },
      {
        question: "Why was saying overdose is impossible ethically dangerous?",
        options: [
          "It made the machine easier to repair after every treatment.",
          "It warned all users clearly before they continued using the machine after early reports.",
          "It stopped treatments immediately until all faults were removed.",
          "It discouraged urgent investigation and continued exposing patients."
        ],
        correctAnswer: 3,
        explanation: "Denial delayed safety action and allowed repeated harm."
      },
      {
        question: "What should AECL have done after the first suspicious overdose?",
        options: [
          "Stop use, investigate fully, inform users, and add safeguards.",
          "Deny the event and keep devices running normally while waiting for another report.",
          "Tell operators to ignore error codes during treatment.",
          "Blame patients without evidence of misuse or movement."
        ],
        correctAnswer: 0,
        explanation: "Early action could have prevented repeated injuries."
      },
      {
        question: "Why is Therac-25 important for software engineering ethics?",
        options: [
          "It shows software is only theoretical and has no physical effect.",
          "Code controlled physical radiation and harmed real people.",
          "It proves hardware is always unsafe in medical settings.",
          "It was only a business failure involving hospital purchasing."
        ],
        correctAnswer: 1,
        explanation: "The case shows software can directly control dangerous physical energy."
      },
      {
        question: "Which answer best explains the main cause?",
        options: [
          "One patient complaint with no technical or design issue.",
          "A hospital scheduling mistake unrelated to software, hardware interlocks, warnings, or user interface design.",
          "Overreliance on software, poor testing, vague errors, weak fail-safes, and slow response.",
          "A normal treatment side effect with no ethical concern."
        ],
        correctAnswer: 2,
        explanation: "The case involved technical, human-factor, and organizational failures."
      },
      {
        question: "Which option best explains why hardware interlocks matter?",
        options: [
          "They make software unnecessary in every medical-device case after installation.",
          "They increase patient dose intentionally during treatment.",
          "They only help with hospital billing and equipment records.",
          "They provide independent protection if software behaves incorrectly."
        ],
        correctAnswer: 3,
        explanation: "Hardware interlocks are a layer of defense independent from software."
      },
      {
        question: "Which statement is weakest in a written answer?",
        options: [
          "The problem was only operator error.",
          "AECL needed stronger software testing.",
          "Hardware fail-safes were important.",
          "Vague errors contributed to unsafe operation."
        ],
        correctAnswer: 0,
        explanation: "Blaming only operators ignores software, design, and company response."
      },
      {
        question: "What is the best lesson about safety-critical medical devices?",
        options: [
          "They should rely only on operator intuition during normal treatment.",
          "They require independent testing, clear errors, fail-safes, and fast reporting.",
          "They need no documentation if the technology is advanced and hospitals have trained operators.",
          "They should continue operating after unexplained injuries."
        ],
        correctAnswer: 1,
        explanation: "Medical devices need strong safety engineering and accountability."
      },
      {
        question: "In terms of accountability, what made the Therac case worse?",
        options: [
          "The first accident was investigated perfectly and solved completely.",
          "AECL immediately admitted all faults before any other incident.",
          "Similar accidents continued after warnings and partial fixes.",
          "Operators never reported any issues with the machine."
        ],
        correctAnswer: 2,
        explanation: "Repeated harm after warnings shows accountability failure."
      },
      {
        question: "Which answer best explains the ethical difference between theory and practice in Therac-25?",
        options: [
          "Practice never matters in medical systems once software is approved, because certification predicts every workflow.",
          "The theory was mainly about hospital finance and purchasing.",
          "Operators always used the machine exactly as imagined by designers.",
          "The machine was designed for ideal use, but real operators edited quickly and faced vague errors."
        ],
        correctAnswer: 3,
        explanation: "Real-world use revealed unsafe assumptions in the design."
      }
    ]
  },
  {
    caseId: "case-6",
    questions: [
      {
        question: "Why is Tacoma Narrows an engineering ethics case?",
        options: [
          "A public bridge failed under real wind conditions.",
          "The bridge was located near water, which made the story memorable but not ethical by itself.",
          "The bridge was visually unusual and later became a famous engineering video.",
          "The collapse was filmed, which helped people study it later."
        ],
        correctAnswer: 0,
        explanation: "It is ethical because engineering decisions affected public infrastructure and safety."
      },
      {
        question: "What is the strongest explanation of the failure?",
        options: [
          "The bridge collapsed only because it was old and poorly maintained.",
          "The bridge failed because gravity loads were ignored entirely.",
          "The design was too slender and aerodynamically unstable.",
          "The bridge failed because traffic loads were heavier than expected."
        ],
        correctAnswer: 2,
        explanation: "The key issue was wind-induced instability in a flexible slender bridge."
      },
      {
        question: "Which phrase should you avoid as the full explanation?",
        options: [
          "Wind loading was underestimated.",
          "It was only resonance.",
          "Torsional flutter mattered.",
          "The deck was too flexible."
        ],
        correctAnswer: 1,
        explanation: "The video says resonance occurred, but final collapse was mainly torsional flutter."
      },
      {
        question: "In terms of public safety, what was the ethical concern?",
        options: [
          "The bridge needed stronger branding to reassure nearby drivers.",
          "The bridge should have been more expensive to prove safety.",
          "The bridge needed more traffic before engineers could judge it.",
          "The bridge had to be stable under expected environmental loads."
        ],
        correctAnswer: 3,
        explanation: "Public infrastructure must protect users under realistic conditions."
      },
      {
        question: "Why did cost-saving matter ethically?",
        options: [
          "It reduced stiffness and increased vulnerability to wind.",
          "It made the bridge impossible for drivers to see in bad weather.",
          "It removed the need for calculations by making the design simpler.",
          "It made the main span too short to behave like a suspension bridge."
        ],
        correctAnswer: 0,
        explanation: "Saving material can be acceptable, but not if it weakens safety."
      },
      {
        question: "What did the nickname Galloping Gertie indicate?",
        options: [
          "The bridge was designed for horse traffic rather than cars.",
          "The bridge was completed late and rushed into service.",
          "The bridge showed unusual movement before collapse.",
          "The bridge had no cables supporting the main span."
        ],
        correctAnswer: 2,
        explanation: "The nickname reflected visible movement in wind."
      },
      {
        question: "Which answer best describes torsional flutter?",
        options: [
          "Twisting motion amplified by wind.",
          "Static bending from gravity loads.",
          "Rusting of steel cables over many years.",
          "Traffic vibration from vehicles only."
        ],
        correctAnswer: 0,
        explanation: "Flutter is a self-amplifying aerodynamic motion."
      },
      {
        question: "What should engineers have done differently?",
        options: [
          "Ignore early movement until a full collapse proved the cause.",
          "Focus only on reducing material because the design was elegant.",
          "Avoid studying the collapse so public confidence stayed high.",
          "Test wind behavior and improve stiffness or aerodynamics."
        ],
        correctAnswer: 3,
        explanation: "Better testing and design changes could reduce wind instability."
      },
      {
        question: "Which responsibility was most directly involved?",
        options: [
          "Advertising responsibility.",
          "Professional responsibility.",
          "Entertainment responsibility.",
          "Customer service only."
        ],
        correctAnswer: 1,
        explanation: "Engineers must evaluate loads, risks, and safety."
      },
      {
        question: "Which answer best connects innovation to ethics?",
        options: [
          "Innovation removes safety duties once the calculation looks efficient.",
          "New designs are always unsafe and should never be attempted.",
          "New efficient designs can create new risks.",
          "Old designs are always perfect because they already exist."
        ],
        correctAnswer: 2,
        explanation: "Innovation requires more careful testing because unknown risks may appear."
      },
      {
        question: "What was underestimated?",
        options: [
          "Wind-induced dynamic behavior.",
          "The weight of paint on the deck surface.",
          "The number of cameras watching the bridge.",
          "Water depth under the bridge only."
        ],
        correctAnswer: 0,
        explanation: "Wind effects were more important than expected."
      },
      {
        question: "Which statement is the best written-answer claim?",
        options: [
          "Tacoma Narrows was just unlucky, so there is little to learn.",
          "Tacoma Narrows has no ethics lesson because no fraud occurred.",
          "Tacoma Narrows failed because all bridges are unsafe.",
          "Tacoma Narrows shows that real-world loads must guide design."
        ],
        correctAnswer: 3,
        explanation: "This connects the case to engineering responsibility."
      },
      {
        question: "What is the ethical problem with ignoring visible movement?",
        options: [
          "It improves public confidence by proving the bridge is flexible.",
          "It normalizes a warning sign.",
          "It proves the bridge is safe under all wind conditions.",
          "It removes the need for further testing."
        ],
        correctAnswer: 1,
        explanation: "Repeated abnormal behavior should trigger investigation."
      },
      {
        question: "Which design choice contributed to the problem?",
        options: [
          "Too many towers.",
          "No water below the span.",
          "Narrow plate girders.",
          "Excessive deep trusses."
        ],
        correctAnswer: 2,
        explanation: "Plate girders made the deck less open to wind and less stiff than deeper trusses."
      },
      {
        question: "Why is saying \"wind caused it\" incomplete?",
        options: [
          "The design's response to wind caused the collapse.",
          "Wind is not a real load engineers can reasonably consider.",
          "Wind only affects buildings, not bridge decks.",
          "Engineers cannot design for wind in public infrastructure."
        ],
        correctAnswer: 0,
        explanation: "Engineers must design structures to resist expected wind behavior."
      },
      {
        question: "What is the strongest lesson for future bridge design?",
        options: [
          "Build all bridges heavy so they cannot move at all.",
          "Ignore cost completely in every public project.",
          "Avoid suspension bridges forever after one failure.",
          "Include aerodynamic behavior in long-span bridge design."
        ],
        correctAnswer: 3,
        explanation: "The lesson is better wind/aerodynamic design, not banning bridges."
      },
      {
        question: "Which principle is linked to better wind testing?",
        options: [
          "Decoration.",
          "Marketing.",
          "Testing and validation.",
          "Scheduling."
        ],
        correctAnswer: 2,
        explanation: "Testing helps verify the design before public use."
      },
      {
        question: "Which option best describes accountability after the collapse?",
        options: [
          "Learn from failure and improve future standards.",
          "Hide the cause so the public does not worry.",
          "Repeat the same design to show confidence.",
          "Blame only the weather and avoid design review."
        ],
        correctAnswer: 0,
        explanation: "Accountability includes correction and learning."
      },
      {
        question: "Which stakeholder group matters most directly?",
        options: [
          "Only photographers who recorded the collapse.",
          "Bridge users and the public.",
          "Only bridge historians studying old failures.",
          "Only advertisers promoting the bridge."
        ],
        correctAnswer: 1,
        explanation: "Public infrastructure affects users, taxpayers, and public agencies."
      },
      {
        question: "What does the case say about elegant design?",
        options: [
          "Elegant designs are always unethical in public infrastructure.",
          "Elegant designs cannot fail if calculations look clean.",
          "Appearance is the only design goal when cost is low.",
          "Elegance must still satisfy safety."
        ],
        correctAnswer: 3,
        explanation: "A beautiful design is not enough if unsafe."
      },
      {
        question: "What is the best meaning of pushing the envelope?",
        options: [
          "Removing safety factors to save material and time.",
          "Avoiding engineering judgment once standards exist.",
          "Using innovative limits requires extra caution.",
          "Copying old designs only and avoiding all innovation."
        ],
        correctAnswer: 2,
        explanation: "New limits can reveal new failure modes."
      },
      {
        question: "Which answer best explains vortex shedding?",
        options: [
          "Alternating wind vortices create periodic forces.",
          "Gravity pulls the bridge downward under static weight.",
          "Cables gradually lose strength in sunlight and rain.",
          "Vehicles create all bridge motion through repeated traffic pulses."
        ],
        correctAnswer: 0,
        explanation: "Vortex shedding can create oscillating wind forces."
      },
      {
        question: "What finally overstressed the bridge?",
        options: [
          "Too many pedestrians crossing at once.",
          "The bridge's age after decades of use.",
          "Rainwater alone collecting on the deck.",
          "Wind-amplified twisting motion."
        ],
        correctAnswer: 3,
        explanation: "Torsional flutter produced excessive stress."
      },
      {
        question: "What makes this case different from fraud cases?",
        options: [
          "It involved intentional cheating by engineers.",
          "It is mainly about design judgment and underestimated risk.",
          "It involved hidden software controlling a public system.",
          "It involved medical overdose from unsafe equipment."
        ],
        correctAnswer: 1,
        explanation: "Tacoma is about technical judgment, not deception."
      },
      {
        question: "Best final exam sentence?",
        options: [
          "Economical design is ethical only when safe under real conditions.",
          "Wind cannot be predicted, so bridge collapse is never an engineering concern.",
          "Suspension bridges should not exist after Tacoma Narrows.",
          "Public safety is less important than cost if a design is visually elegant."
        ],
        correctAnswer: 0,
        explanation: "This captures cost, safety, and real-world design."
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
    "MCAS",
    "Similarity claims",
    "Transparency",
    "Profit vs safety",
    "Operator blame",
    "Failure visibility",
    "Public safety",
    "Sensor failure",
    "Accountability",
    "Pilot training",
    "Written answer",
    "Systemic risk",
    "Stakeholders",
    "Automation ethics",
    "Professional responsibility",
    "FAA oversight",
    "Safety culture",
    "Safety priority",
    "Redundancy",
    "Competition pressure",
    "Root causes",
    "Training material",
    "Accountability",
    "Public trust",
    "Final lesson",
    "Weak answer",
    "Transparency",
    "Accountability",
    "Profit vs safety",
    "Engineering ethics"
  ],
  "case-4": [
    "Software ethics",
    "Data conversion",
    "Code reuse",
    "Professional responsibility",
    "Redundancy",
    "Testing",
    "Overconfidence",
    "System causes",
    "Risk management",
    "Overflow handling",
    "Written answer",
    "Common-mode failure",
    "Failure visibility",
    "Realistic testing",
    "Organizational culture",
    "Public trust",
    "Integrity",
    "Prevention",
    "SRI role",
    "Payload focus",
    "Root causes",
    "Code reuse",
    "Accountability",
    "Boundary testing",
    "Redundancy",
    "Prevention",
    "Weak answer",
    "Hardware vs software",
    "Professional responsibility",
    "Final lesson"
  ],
  "case-5": [
    "Medical device ethics",
    "Fail-safe design",
    "Patient safety",
    "Human factors",
    "Accountability",
    "Code reuse",
    "Malfunction 54",
    "Hardware interlocks",
    "Operator behavior",
    "Medical automation",
    "Transparency",
    "Repeated harm",
    "Error handling",
    "Fail-safe design",
    "Safety analysis",
    "Written answer",
    "Regulation",
    "Documentation",
    "Race condition",
    "Arithmetic overflow",
    "Stakeholders",
    "Denial",
    "First response",
    "Software ethics",
    "Root causes",
    "Defense in depth",
    "Weak answer",
    "Medical-device lesson",
    "Accountability",
    "Real-world use"
  ],
  "case-6": [
    "Public safety",
    "Aerodynamic instability",
    "Resonance vs flutter",
    "Public safety",
    "Cost vs safety",
    "Warning signs",
    "Torsional flutter",
    "Prevention",
    "Professional responsibility",
    "Innovation risk",
    "Dynamic loads",
    "Written answer",
    "Risk management",
    "Design choice",
    "Design responsibility",
    "Future standards",
    "Testing",
    "Accountability",
    "Stakeholders",
    "Elegant design",
    "Pushing limits",
    "Vortex shedding",
    "Final collapse",
    "Case comparison",
    "Conclusion"
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
    "Safety-critical software must be disclosed, tested, and trained.",
    "Similarity claims become ethical issues when they hide meaningful risk.",
    "Transparency means safety-relevant information is not hidden or minimized.",
    "Do not say profit is always unethical. Say safety must not be compromised for profit.",
    "In ethics, look at system design, training, and information, not only operator action.",
    "Boeing discovery/visibility = similar crashes + investigation.",
    "Death or injury risk usually means public safety is central.",
    "Bad input in automation can create dangerous output.",
    "Accountability = responsibility plus corrective action.",
    "Training is ethical when users must respond to risk.",
    "Strong answer = principle + case-specific fact.",
    "Similar accidents often point to systemic risk.",
    "Stakeholders include direct and indirect groups.",
    "Automation ethics = predictability, training, control, and transparency.",
    "Certification does not remove engineering responsibility.",
    "Regulation is part of public protection.",
    "Culture = what the organization rewards, ignores, or tolerates.",
    "When in doubt, choose public safety.",
    "Single-point failure is a major risk issue.",
    "Explain pressure without excusing it.",
    "Avoid one-cause answers.",
    "If users must respond, they must be trained.",
    "Accountability is more than apology.",
    "Trust depends on safety, honesty, and accountability.",
    "Final lesson should not blame only one person.",
    "Avoid simplistic blame.",
    "Transparency is proactive.",
    "Add victims and prevention in accountability answers.",
    "Say business pressure influenced safety decisions, not that business itself is unethical.",
    "Ethics case = decisions affect people."
  ],
  "case-4": [
    "Connect technical bugs to professional responsibility.",
    "Remember the concept: overflow during conversion.",
    "Reuse requires revalidation.",
    "New system means new validation.",
    "Identical backup can cause common-mode failure.",
    "Boundary cases matter in safety-critical software.",
    "Past success does not prove future safety.",
    "Complex failures usually have multiple causes.",
    "Risk management means checking changed assumptions.",
    "Fail-safe behavior matters.",
    "Strong answers link reuse, validation, and safety.",
    "Same design can mean same failure.",
    "Ariane visibility = deviation and destruction.",
    "Ask whether testing matched real use.",
    "Culture = assumptions the organization accepts.",
    "No deaths does not mean no ethical issue.",
    "Integrity includes not relying on false confidence.",
    "Prevention begins before launch.",
    "Know the SRI role generally, not excessive technical detail.",
    "Focus on software, not payload.",
    "Use combined causes.",
    "Reuse is not the problem. Unvalidated reuse is.",
    "Accountability includes prevention.",
    "Overflow failures require boundary testing.",
    "Redundancy must reduce shared failure modes.",
    "Prevention answers should match root causes.",
    "Avoid vague random-accident explanations.",
    "System safety includes hardware and software.",
    "For Ariane 5, professional responsibility is the key.",
    "Final answer = reused software + changed conditions + validation."
  ],
  "case-5": [
    "Medical device cases usually center on patient safety.",
    "In safety-critical systems, software should not be the only protection.",
    "Link patient safety to actual harm.",
    "Bad error messages are a human-factor and transparency issue.",
    "Accountability means acting on warning signs.",
    "Reuse requires validation.",
    "Malfunction 54 = real use timing problem.",
    "Fail-safe means failure should move to a safe state.",
    "Human factors = design for real use, not ideal use.",
    "Do not say software is bad. Say unsafe software is bad.",
    "Transparency includes clear warnings and shared safety information.",
    "Repetition after warning signs increases responsibility.",
    "Error handling must prevent unsafe continuation.",
    "Safety-critical systems need layers of protection.",
    "Safety analysis must include software.",
    "Strong answers connect technical issue and ethics.",
    "Regulators step in when manufacturer control fails.",
    "Documentation is a safety tool.",
    "Theory vs practice matters in interfaces.",
    "Overflow can be deadly in safety-critical code.",
    "Identify direct harm first.",
    "Denial after harm is an accountability issue.",
    "First warning sign requires protective action.",
    "Software can have physical consequences.",
    "Use multi-cause answers.",
    "Defense in depth is key.",
    "Avoid blaming users alone.",
    "Final lesson should protect patients.",
    "Repeated failures strengthen the accountability argument.",
    "Design must match real human behavior."
  ],
  "case-6": [
    "Public structure failure usually connects to public safety.",
    "Do not focus only on gravity.",
    "\"Only resonance\" is incomplete.",
    "Public safety means real-use safety.",
    "Cost-saving is not automatically unethical.",
    "Warning signs are important in ethics questions.",
    "Torsional = twisting.",
    "Prevention must match the failure cause.",
    "Professional responsibility = competent design judgment.",
    "Innovation and caution go together.",
    "Dynamic loads are high-yield here.",
    "Use \"real-world loads\" in written answers.",
    "Warning signs ignored = risk management issue.",
    "Plate-girder/slender deck is important.",
    "Natural force does not remove design responsibility.",
    "Avoid extreme answers.",
    "Testing is evidence before trust.",
    "Accountability is not only blame.",
    "Stakeholders are not only engineers.",
    "Balance aesthetics, cost, and safety.",
    "New design = new responsibility.",
    "It explains motion, but not the full final collapse.",
    "Final failure = twisting.",
    "Do not force every case into fraud.",
    "Strong conclusion = safety limits economy."
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
