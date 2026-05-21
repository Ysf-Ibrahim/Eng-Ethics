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
        question: "A hospital notifies AECL that two patients experienced burns after Therac-25 treatments, but AECL engineers insist overdose is impossible because the software passed all internal tests. What is the most ethical immediate response for AECL?",
        options: [
          "Restrict use of the device, investigate the reports urgently, and notify all other hospitals using the machine.",
          "Continue normal operation until the exact software fault can be reproduced in a laboratory setting.",
          "Ask the hospital to collect more reports before any formal action is taken.",
          "Refer the matter to the FDA and take no internal action until a formal investigation is ordered."
        ],
        correctAnswer: 0,
        explanation: "Patient harm reports from a safety-critical medical device must be treated as evidence of real risk, not as problems to disprove."
      },
      {
        question: "Therac-20 had hardware interlocks that Therac-25 did not. What ethical concern does this design decision most directly raise?",
        options: [
          "Engineers overcomplicated the Therac-20 with unnecessary hardware, so removal was a reasonable simplification.",
          "Removing independent physical safeguards made the device entirely dependent on software, eliminating the hardware backup if software failed.",
          "Hardware interlocks are expensive, and removing them is standard engineering practice for newer devices.",
          "The absence of hardware interlocks was acceptable because the FDA approved the final design."
        ],
        correctAnswer: 1,
        explanation: "Removing hardware interlocks concentrated all patient safety in a single software layer, meaning any software fault could reach patients with nothing to stop it."
      },
      {
        question: "Which statement would be weakest in an engineering ethics exam answer about the Therac-25 accidents?",
        options: [
          "AECL should have validated the reused Therac-20 code under the new hardware configuration.",
          "Vague malfunction codes normalized unsafe behavior by training operators to proceed without understanding the danger.",
          "The accidents occurred because operators chose to press proceed rather than stopping treatment.",
          "Fail-safe design would have required the machine to stop when a safe state could not be confirmed."
        ],
        correctAnswer: 2,
        explanation: "Blaming only the operator ignores the system design that made unsafe behavior easy, routine, and effectively invisible to operators."
      },
      {
        question: "Which answer best distinguishes fail-safe design from safety redundancy in the context of Therac-25?",
        options: [
          "Fail-safe means the machine runs on backup power; redundancy means two operators monitor every treatment session.",
          "Fail-safe and safety redundancy are two names for the same concept in medical device design.",
          "Fail-safe means the software restarts automatically; redundancy means the hospital keeps a second machine on standby.",
          "Fail-safe means the device moves to a safe state when it cannot confirm normal operation; redundancy means independent safeguards protect against single-point failure."
        ],
        correctAnswer: 3,
        explanation: "Fail-safe is about the machine's default response under uncertainty. Redundancy is about independent layers so one failure does not reach the patient."
      },
      {
        question: "Therac-25 operators reported that editing treatment settings quickly sometimes produced Malfunction 54. Investigation later revealed a race condition in the software triggered by fast user input. What ethical issue does this most directly raise?",
        options: [
          "The software was not tested against realistic operator behavior, creating a hidden safety fault that reached patients.",
          "Operators violated the device manual by editing settings more quickly than the specification permitted.",
          "Race conditions are a known limitation of all software and fall outside normal engineering ethics responsibility.",
          "AECL should have replaced human operators with automated treatment systems to prevent fast-input errors."
        ],
        correctAnswer: 0,
        explanation: "A safety-critical system must be tested the way real users actually operate it, not only under ideal or slow-input conditions."
      },
      {
        question: "After one hospital reported a probable overdose, AECL investigated only at that site and sent no warning to other hospitals. Weeks later, a second overdose occurred elsewhere. What should AECL have done after the first report?",
        options: [
          "Waited for a second incident before alerting anyone, since one report could be a false alarm.",
          "Notified all hospitals using the device of the potential risk and suspended or restricted use until the investigation was complete.",
          "Investigated internally without contacting other hospitals to avoid causing unnecessary alarm.",
          "Asked the FDA to notify other hospitals on AECL's behalf while continuing normal internal operations."
        ],
        correctAnswer: 1,
        explanation: "When a safety signal appears in a medical device, all users must be warned even before the cause is confirmed."
      },
      {
        question: "During software development, an AECL engineer notices a timing condition that could briefly put the machine in an unsafe state during fast operator input. The engineer's manager says this scenario is too unlikely to require a design change. What is the most ethical course of action for the engineer?",
        options: [
          "Accept the manager's judgment because schedule and risk decisions are management's responsibility.",
          "Document the concern privately and mention it informally to a colleague as a personal record.",
          "Formally report the potential hazard and recommend testing or design changes to resolve it before the product is released.",
          "Report the concern directly to the FDA, bypassing internal management to ensure external oversight."
        ],
        correctAnswer: 2,
        explanation: "Engineers have a professional duty to escalate safety concerns formally, regardless of management's initial reaction to them."
      },
      {
        question: "AECL reused software from the Therac-20 in the Therac-25 without fully revalidating it. The Therac-20 had hardware interlocks that compensated for software limitations that no longer existed in the Therac-25. What is the strongest ethical concern here?",
        options: [
          "The reused code relied on hardware protections that were removed, so reusing it without revalidation introduced hidden risks.",
          "Reusing software from a previous device is inherently unethical regardless of context.",
          "Revalidation is only required when hardware components, not software, are changed.",
          "Code reuse is acceptable without further testing if the manufacturer has prior approval for the original software."
        ],
        correctAnswer: 0,
        explanation: "Code validated under one safety environment may behave dangerously in a different configuration."
      },
      {
        question: "A hospital has been seeing unexplained malfunction codes during Therac-25 treatments. No patient injury has been confirmed yet, and the manufacturer has not issued a safety alert. What is the most ethical course of action for the hospital?",
        options: [
          "Continue normal operation because no official safety alert has been issued by the manufacturer.",
          "Stop treatments on the affected machine, report the unusual behavior to the manufacturer and the regulator, and investigate before resuming.",
          "Train operators to clear malfunction codes faster so treatments are not disrupted.",
          "Request the full source code from AECL and review it internally before taking any action."
        ],
        correctAnswer: 1,
        explanation: "A medical institution must act on potential patient risk independently, without waiting for the manufacturer to act first."
      },
      {
        question: "From a transparency perspective, what did AECL most clearly owe to hospitals and operators using the Therac-25?",
        options: [
          "Publishing technical white papers for academic review of the software architecture.",
          "Responding publicly to media questions about the accident reports.",
          "Sharing the full source code with every hospital for independent safety review.",
          "Clearly communicating what malfunction codes meant, what risks existed, and what actions operators should take when errors appeared."
        ],
        correctAnswer: 3,
        explanation: "Transparency in safety-critical systems means users receive actionable information to operate safely — not press releases."
      },
      {
        question: "An operator frequently sees malfunction codes during Therac-25 setup. Because these codes always seem harmless and the machine restarts normally, the operator develops a habit of pressing proceed immediately. One session, this leads to a fatal overdose. Which explanation most accurately identifies where primary ethical responsibility lies?",
        options: [
          "The operator is fully responsible for developing an unsafe habit of pressing proceed after any error.",
          "The hospital is responsible because it failed to supervise and correct operator behavior over time.",
          "The system design is primarily responsible because it normalized unclear errors and allowed unsafe continuation, shaping operator behavior.",
          "The patient assumed this risk by consenting to radiation therapy."
        ],
        correctAnswer: 2,
        explanation: "Interface design that makes unsafe behavior easy and invisible carries primary design responsibility, not the operator who was shaped by it."
      },
      {
        question: "A hospital administrator says: \"We trusted the Therac-25 completely because it was the most technologically advanced machine available.\" Which lesson from engineering ethics best challenges this reasoning?",
        options: [
          "Advanced technology is not automatically safe; complexity can hide failure modes that require stronger testing and oversight, not less.",
          "Hospitals should rely only on proven older technology to minimize risk.",
          "Technologically advanced devices receive more rigorous regulatory scrutiny, so higher trust in them is justified.",
          "Engineers on advanced projects are more experienced, so their designs carry lower ethical risk."
        ],
        correctAnswer: 0,
        explanation: "Sophistication can increase, not reduce, risk — especially when complexity masks unexpected failure modes."
      },
      {
        question: "From a professional responsibility perspective, what was AECL's most important duty regarding the Therac-25 software?",
        options: [
          "To minimize software documentation to reduce maintenance costs and development time.",
          "To ensure the software controlling a dangerous physical process was independently validated, tested under realistic conditions, and accompanied by hardware fail-safes.",
          "To outsource software testing to the hospitals that operated the device in clinical settings.",
          "To respond to FDA inquiries promptly without conducting parallel internal safety reviews."
        ],
        correctAnswer: 1,
        explanation: "Manufacturers of safety-critical devices carry primary responsibility for design quality, independent validation, and fail-safe protection."
      },
      {
        question: "A software counter in the Therac-25 could overflow from its maximum value back to zero, hiding an unsafe machine state from the operator. Which ethical interpretation is strongest?",
        options: [
          "Arithmetic overflow is a routine low-level technical matter unrelated to engineering ethics.",
          "The fault is acceptable because all software contains some numerical edge cases that cannot be anticipated.",
          "AECL could not reasonably have been expected to test for every possible counter value.",
          "When software controls dangerous physical output, even details like counter overflow become ethical failures if they are not tested and guarded against."
        ],
        correctAnswer: 3,
        explanation: "A counter rolling to zero hid an unsafe state and allowed lethal radiation delivery. Technical detail does not cancel ethical responsibility."
      },
      {
        question: "An exam answer states: \"Therac-25 harmed patients because of a software bug in the code.\" Which response best identifies why this answer is too narrow?",
        options: [
          "It ignores the organizational failures — insufficient testing, denial of early reports, missing fail-safes, and poor error communication — that allowed the bug to harm patients.",
          "It ignores that hardware problems, not software faults, were the underlying cause of overdoses.",
          "It ignores that patient injuries resulted from incorrect hospital procedures and inadequate operator training.",
          "It ignores that the FDA should have identified and corrected the bug before approving the device."
        ],
        correctAnswer: 0,
        explanation: "The bug is the mechanism; the ethical failure is why it reached patients and why harm was not stopped after the first warning."
      },
      {
        question: "Engineers on a medical software project are asked to skip detailed safety documentation to meet a product release deadline. The software controls radiation dose delivery. What should the team do?",
        options: [
          "Skip documentation for this release and add it later, since documentation does not directly affect how the software operates.",
          "Document only the features most likely to be reviewed by the FDA and skip the rest.",
          "Refuse to skip safety documentation, because it supports testing, maintenance, accountability, and investigation of any future safety event.",
          "Record behavior informally in internal emails rather than formal safety project records."
        ],
        correctAnswer: 2,
        explanation: "Documentation for safety-critical software is not optional — it enables review, verification, and accountability when harm occurs."
      },
      {
        question: "After overdose reports from multiple hospitals, AECL's public position was that radiation overdose was physically impossible with the Therac-25. Which ethical principle was most directly violated?",
        options: [
          "Accountability, because AECL did not offer financial compensation to affected patients.",
          "Transparency, because AECL communicated false certainty to hospitals while patients continued to face unacknowledged risk.",
          "Professional responsibility, because AECL's statement contradicted its sales marketing claims.",
          "Risk management, because AECL failed to update its internal risk register after the reports."
        ],
        correctAnswer: 1,
        explanation: "Claiming safety when harm reports exist without investigation prevents hospitals from protecting patients."
      },
      {
        question: "Which answer best distinguishes accountability from transparency as they applied to AECL's conduct in the Therac-25 case?",
        options: [
          "Accountability means AECL needed to publish technical reports; transparency means issuing a formal public apology.",
          "Transparency means complying with FDA information requests; accountability means paying regulatory fines.",
          "Both principles describe the same duty, which is to provide clear user documentation.",
          "Transparency means providing clear risk information to users; accountability means taking corrective action and accepting responsibility when harm has occurred."
        ],
        correctAnswer: 3,
        explanation: "Transparency is about what you communicate. Accountability is about what you do and own when things go wrong."
      },
      {
        question: "A first hospital reported a likely overdose. AECL made a targeted software change. Months later, a second overdose occurred at a different hospital involving a related but distinct software fault. What does this pattern most strongly indicate?",
        options: [
          "The second accident proves that software faults in complex systems cannot be fully eliminated.",
          "The second hospital's operator failed to follow updated safety procedures issued after the first incident.",
          "The first investigation was not thorough enough; discovering one fault should have triggered a broader safety review of related code, not only a targeted patch.",
          "Repeated harm shows the device should have been immediately recalled after the first incident without any investigation."
        ],
        correctAnswer: 2,
        explanation: "One confirmed fault in safety-critical software requires a broader audit of related code — not only a narrow fix."
      },
      {
        question: "If a software fault in a radiation therapy machine occurs only once in every thousand treatments, what should engineers conclude about its ethical acceptability?",
        options: [
          "Probability alone does not determine acceptability; a rare but potentially lethal fault in a patient-facing device demands investigation and protection.",
          "A rate of once per thousand is rare enough to be acceptable in an approved medical device.",
          "Testing rare conditions is not practically feasible, so rare faults fall outside engineering responsibility.",
          "Rare faults are the responsibility of operators, who should monitor for unusual machine behavior during sessions."
        ],
        correctAnswer: 0,
        explanation: "Risk = probability × severity. In patient safety, high severity dominates. Low probability does not excuse catastrophic harm."
      },
      {
        question: "The Therac-25 could sometimes resume treatment after a malfunction by pressing a single key, without confirming whether the machine had returned to a safe state. Which ethical principle does this design most clearly violate?",
        options: [
          "Accountability, because error events were not automatically logged for future review.",
          "Fail-safe design, because a safety-critical device must require confirmed safety before allowing dangerous output to continue.",
          "Human factors, because operators should have been trained not to use the key in uncertain situations.",
          "Documentation, because the key behavior was not described in the user manual."
        ],
        correctAnswer: 1,
        explanation: "A fail-safe device stops or prevents harmful output when it cannot confirm safe conditions — not defaults to continuation."
      },
      {
        question: "An engineer proposes fixing the Therac-25 safety problem by adding a second software check that runs the same validation logic as the existing one. Which ethical assessment best applies?",
        options: [
          "A second software check doubles safety because it provides two independent validations of the same condition.",
          "Two checks that share the same codebase are acceptable for approved devices as standard industry practice.",
          "Adding any additional check improves safety, so the proposal should be accepted as an ethical improvement.",
          "Two checks in the same software are not independent; true safety redundancy requires a physically separate safeguard that can protect patients when software fails."
        ],
        correctAnswer: 3,
        explanation: "Redundancy means independent protection layers. If both checks share the same software fault, neither one prevents harm."
      },
      {
        question: "An engineer argues: \"Once the FDA approved the Therac-25, AECL had fulfilled its safety obligations.\" Which response is most ethically accurate?",
        options: [
          "The argument is correct because FDA approval represents the highest safety standard for medical devices.",
          "The argument is partially correct; AECL retained responsibility only until the device was delivered to purchasing hospitals.",
          "The argument is wrong; FDA approval sets a baseline, but manufacturers retain ongoing duty to monitor, investigate, and respond to safety signals throughout the device's operational life.",
          "The argument is correct if AECL responded to all FDA communications within required response deadlines."
        ],
        correctAnswer: 2,
        explanation: "Regulatory approval is a snapshot in time. Ongoing safety responsibility does not transfer to regulators after approval."
      },
      {
        question: "After the accidents, engineers added a dose-per-pulse monitor that could detect and interrupt treatment if radiation exceeded safe limits, working independently of the main control software. Which ethical principle does this addition most directly represent?",
        options: [
          "Transparency, because the monitor displayed radiation values to operators in real time during treatment.",
          "Safety redundancy, because an independent hardware safeguard was added to protect patients even if the main software failed.",
          "Accountability, because the monitor created a formal record of each treatment dose for regulatory review.",
          "Risk management, because AECL documented the monitor's addition in its updated device risk register."
        ],
        correctAnswer: 1,
        explanation: "The dose-per-pulse monitor was independent of the software that failed — exactly the kind of hardware redundancy the original design lacked."
      },
      {
        question: "From a patient safety perspective, how should AECL have treated repeated operator reports that patients were experiencing burns during Therac-25 treatment?",
        options: [
          "As early warning signals to collect and review at the next quarterly device safety meeting.",
          "As operator misuse reports, because the device had passed manufacturer validation testing.",
          "As isolated incidents without statistical significance until multiple hospitals confirmed similar patterns.",
          "As credible harm indicators requiring immediate investigation and protective action, even before the technical cause was confirmed."
        ],
        correctAnswer: 3,
        explanation: "Patient harm reports are the most direct safety signal. Dismissing them as user error while patients are being treated is an ethical failure."
      },
      {
        question: "AECL investigated one overdose report at the reporting hospital but did not warn other sites. A second patient was overdosed at a different hospital weeks later. Which ethical assessment is most accurate?",
        options: [
          "AECL bore primary responsibility for the second accident by failing to warn all users after receiving the first credible safety report.",
          "The second hospital was primarily responsible because it should have independently monitored its device for safety issues.",
          "The FDA bore primary responsibility for not coordinating safety information between hospitals.",
          "Both hospitals share equal responsibility for failing to communicate with each other about device behavior."
        ],
        correctAnswer: 0,
        explanation: "A manufacturer who discovers a safety signal in one installation has a duty to warn all installations — not only the one that reported."
      },
      {
        question: "What does the Therac-25 case most strongly establish about software in safety-critical medical systems?",
        options: [
          "Software in medical devices should be replaced with purely mechanical controls wherever clinical performance allows.",
          "The primary lesson is that software testing must be performed by external regulators before any medical device receives approval.",
          "Software controlling dangerous physical processes must be independently validated, tested under realistic operator conditions, and backed by hardware safeguards — not trusted as the sole safety layer.",
          "Safety-critical software needs more operational features to handle the wide range of operator behaviors in clinical settings."
        ],
        correctAnswer: 2,
        explanation: "The case proves software controlling physical harm requires the same engineering rigor as physical structure — independently reviewed, realistically tested, and hardware-backed."
      },
      {
        question: "Therac-25 operators saw one-line messages like \"Malfunction 54\" with no explanation of cause, severity, or required action. Over time, operators treated all malfunction codes as harmless. Which statement best explains the engineering ethics issue?",
        options: [
          "Operators should have demanded training on each malfunction code before being permitted to use the device.",
          "Hospital management was responsible for developing internal procedures to interpret each error code.",
          "The FDA should have required plain-language error messages as a condition of device approval.",
          "The interface design failed to support safe operator decisions by presenting unexplained errors that gradually trained operators toward unsafe behavior."
        ],
        correctAnswer: 3,
        explanation: "Human factors engineering requires interfaces that support correct decisions. The system shaped unsafe operator behavior — that is a design failure."
      },
      {
        question: "Which prevention strategy would have best addressed the root causes of the Therac-25 accidents?",
        options: [
          "Removing all operator interaction from treatment setup to eliminate human error as a factor.",
          "Requiring the FDA to perform independent software testing of all medical devices before granting approval.",
          "Combining rigorous software validation, independent hardware interlocks, clear error communication, prompt response to harm reports, and strong manufacturer accountability across all users.",
          "Replacing all Therac-25 machines with the older Therac-20 units, which had hardware interlocks already installed."
        ],
        correctAnswer: 2,
        explanation: "The failure had multiple root causes — technical, organizational, and communicative. Prevention must address all of them."
      },
      {
        question: "Which statement is the strongest final conclusion for a 5-mark engineering ethics exam answer about Therac-25?",
        options: [
          "Therac-25 proves that software has no place in safety-critical medical devices because it cannot be fully controlled.",
          "Therac-25 demonstrates that safety-critical software must be rigorously tested, backed by independent hardware safeguards, transparent to users, and accountable to harm signals — because ignoring any one of these layers put patients in danger.",
          "Therac-25 shows that stricter FDA pre-approval software testing would have been sufficient to prevent all the accidents.",
          "Therac-25 demonstrates that operators need greater professional training and personal responsibility for understanding the medical devices they use."
        ],
        correctAnswer: 1,
        explanation: "This conclusion captures the multi-layered ethical lesson without exaggerating the role of any single party."
      }
    ]
  },
  {
    caseId: "case-6",
    questions: [
      {
        question: "The Tacoma Narrows Bridge showed visible movement before collapse and became known as Galloping Gertie. According to the public-interest principle, what should engineers have done once that movement became clear?",
        options: [
          "Treat the motion as acceptable because flexible bridges can move in service.",
          "Investigate the motion as a public-safety warning before normal use continues.",
          "Ignore the issue because no one had been injured yet.",
          "Focus mostly on whether the bridge still looked complete from a distance."
        ],
        correctAnswer: 1,
        explanation: "Public safety requires action before harm occurs when a public structure shows abnormal behavior."
      },
      {
        question: "If a bridge passes basic static-load checks but also shows unusual wind-induced motion, which answer best matches the ethical idea that engineers should approve work only if it is safe?",
        options: [
          "Approval is acceptable because static strength is the main ethical requirement.",
          "Approval is acceptable if the design is economical and visually efficient.",
          "The bridge should not be treated as safe until dynamic wind behavior is understood.",
          "The bridge can remain approved while engineers continue studying the motion."
        ],
        correctAnswer: 2,
        explanation: "Safety is not only static strength. The bridge must be safe under the real conditions it will face."
      },
      {
        question: "Which answer is too narrow for an Engineering Ethics explanation of Tacoma Narrows?",
        options: [
          "The bridge design did not adequately account for wind-induced motion.",
          "Visible movement before collapse should have been treated as a warning sign.",
          "Engineers needed stronger testing and more realistic judgment about dynamic loads.",
          "Calling it only physics ignores engineering responsibility."
        ],
        correctAnswer: 3,
        explanation: "The physics explains the mechanism, but ethics concerns judgment, testing, responsibility, and public safety."
      },
      {
        question: "The Tacoma design used narrow plate girders instead of deeper, stiffer trusses partly to reduce cost and material. Which answer best evaluates that choice ethically?",
        options: [
          "Cost-saving is acceptable only if it does not compromise safety.",
          "Any economical design in a public project is automatically unethical.",
          "Public projects should ignore cost if the finished structure looks advanced.",
          "A cheaper design is automatically best because it saves taxpayer money."
        ],
        correctAnswer: 0,
        explanation: "Economy is acceptable in engineering, but not when it compromises safety or bypasses needed validation."
      },
      {
        question: "From the perspective of professional competence, what is the strongest lesson from Tacoma Narrows?",
        options: [
          "Engineers should avoid all new bridge forms because innovation is too risky.",
          "Engineers only need to follow older bridge assumptions if the math looks reasonable.",
          "Engineers must recognize limits in their knowledge and seek better analysis.",
          "Engineers are mainly responsible for calculations, not real-world behavior."
        ],
        correctAnswer: 2,
        explanation: "Competence includes recognizing when familiar assumptions are not enough for a new design or new behavior."
      },
      {
        question: "The course emphasizes realistic estimates of cost, quality, and outcomes. How does that idea apply to Tacoma Narrows?",
        options: [
          "Engineers should estimate cost accurately, but wind behavior is a separate issue.",
          "Engineers should realistically judge how lower stiffness affects wind response and safety.",
          "Realistic estimates matter only after a bridge has already opened to traffic.",
          "If the project is economical, uncertainty about performance can stay secondary."
        ],
        correctAnswer: 1,
        explanation: "Realistic judgment includes the actual safety consequences of design choices, not only construction cost."
      },
      {
        question: "An engineer says, 'The bridge moved, but no collapse had happened yet, so no warning needed to be disclosed.' Which answer is weakest?",
        options: [
          "Public danger does not need to be disclosed until damage is certain.",
          "Visible abnormal motion should have been communicated to decision makers as a possible danger.",
          "Known warning signs can create a duty to disclose risk even before failure occurs.",
          "Disclosure matters because public officials and users may depend on engineers to explain danger."
        ],
        correctAnswer: 0,
        explanation: "Engineers should disclose conditions that may endanger the public before harm occurs, not after certainty is reached."
      },
      {
        question: "If engineers notice repeated abnormal movement but keep treating the bridge as safe because it is already open to the public, what ethical principle is most at risk?",
        options: [
          "Protection of intellectual property rights.",
          "Integrity in professional judgment about safety.",
          "Confidentiality toward the client or owner.",
          "Protection of the bridge's public image."
        ],
        correctAnswer: 1,
        explanation: "Integrity means technical judgment should support safety and human values, not convenience or image."
      },
      {
        question: "Suppose a new long-span bridge uses an elegant, slender form that behaves differently from older, stiffer bridges. What should engineers do if they are ethically managing innovation responsibly?",
        options: [
          "Assume the new form can be judged by the same assumptions that worked for older bridges.",
          "Treat the strange behavior as a public-relations issue rather than a technical issue.",
          "Test the new risks and validate the design under realistic wind conditions.",
          "Wait and see whether normal operation makes the concern look smaller."
        ],
        correctAnswer: 2,
        explanation: "Innovation creates extra responsibility to test, question assumptions, and validate uncertain behavior before public exposure."
      },
      {
        question: "The bridge's nickname, Galloping Gertie, mattered ethically because it suggested what about the structure's condition before collapse?",
        options: [
          "That the motion was visible enough to count as a warning sign.",
          "That the public had exaggerated a bridge that was actually behaving normally.",
          "That the bridge was unsafe only during very rare storm conditions.",
          "That wind behavior was mostly a matter of image rather than safety."
        ],
        correctAnswer: 0,
        explanation: "The nickname reflected visible abnormal behavior, which should have triggered serious safety attention."
      },
      {
        question: "Which answer is too narrow for an ethical explanation of the Tacoma Narrows failure mechanism?",
        options: [
          "The bridge experienced wind-related motion before collapse.",
          "The final collapse was mainly torsional flutter, not just simple vertical resonance.",
          "Correct diagnosis matters because future prevention depends on the real mechanism.",
          "Treating it as only resonance ignores why correct diagnosis matters."
        ],
        correctAnswer: 3,
        explanation: "Wrong diagnosis can lead to the wrong prevention. Ethical engineering requires understanding the real mechanism."
      },
      {
        question: "Why is the sentence 'the wind caused it' incomplete from an engineering ethics perspective?",
        options: [
          "Because wind is not a real engineering load.",
          "Because engineers cannot be expected to consider environmental forces in bridge design.",
          "Because the bridge's response to foreseeable wind was the real issue.",
          "Because natural forces automatically remove professional responsibility."
        ],
        correctAnswer: 2,
        explanation: "The ethical issue is not that wind exists. It is whether engineers designed responsibly for foreseeable wind behavior."
      },
      {
        question: "A bridge authority is told that a newly opened bridge moves dramatically in ordinary wind. What is the most ethical first response by the engineering team?",
        options: [
          "Investigate immediately and restrict use if safety may be at risk.",
          "Leave the bridge fully open because public concern is not technical evidence.",
          "Wait for collapse or visible cracking so the danger can be confirmed.",
          "Treat the issue mainly as a communication problem rather than a design problem."
        ],
        correctAnswer: 0,
        explanation: "Known abnormal behavior in public infrastructure should trigger immediate technical review and protective action if needed."
      },
      {
        question: "Which answer best explains professional responsibility in the Tacoma case?",
        options: [
          "Engineers only had to prove the bridge could support traffic and its own weight.",
          "Engineers had to evaluate dynamic wind effects, not only gravity loads.",
          "Engineers were mainly responsible for elegance and efficiency, not long-term behavior.",
          "Professional responsibility begins only after the exact cause is fully known."
        ],
        correctAnswer: 1,
        explanation: "Competent professional judgment includes identifying relevant loads and failure modes before public use."
      },
      {
        question: "From an ethics-course perspective, why does it matter that the final collapse was mainly torsional flutter rather than only resonance?",
        options: [
          "Because the distinction has no value unless engineers are taking a physics exam.",
          "Because torsional flutter is easier to explain to the public than resonance.",
          "Because once the bridge collapsed, the exact mechanism stopped mattering ethically.",
          "Because correct failure diagnosis is part of accountability and future prevention."
        ],
        correctAnswer: 3,
        explanation: "If the diagnosis is wrong, later engineers may apply the wrong fix. Accurate understanding is part of responsible practice."
      },
      {
        question: "Which statement about cost versus safety is strongest in the Tacoma Narrows case?",
        options: [
          "Public projects should never consider economy once safety is mentioned.",
          "A beautiful and efficient design is enough if the public initially approves it.",
          "Cost-saving is acceptable only when realistic analysis still supports safety.",
          "If taxpayers benefit from lower cost, stiffness concerns can stay secondary."
        ],
        correctAnswer: 2,
        explanation: "Economy is part of engineering judgment, but it cannot override safety under real operating conditions."
      },
      {
        question: "A review board asks whether the Tacoma bridge should be considered fully acceptable because it still stands. Which answer is weakest?",
        options: [
          "Standing does not prove safety if abnormal motion already suggests danger.",
          "Visible movement can be a warning sign that public officials should take seriously.",
          "Realistic judgment should include dynamic behavior, not just whether the bridge remains upright.",
          "If the bridge has not collapsed yet, continued casual observation is enough to treat it as safe."
        ],
        correctAnswer: 3,
        explanation: "A structure can remain standing and still show clear signs that public safety is at risk."
      },
      {
        question: "If engineers realize that a new slender bridge behaves differently from older, stiffer bridges, what should they conclude?",
        options: [
          "Older assumptions may not fit the new design, so more testing may be necessary.",
          "The difference proves that innovation itself is unethical and should stop immediately.",
          "Once the bridge opens, unusual behavior becomes mainly the operator's problem.",
          "The public should adapt rather than engineers revisiting assumptions."
        ],
        correctAnswer: 0,
        explanation: "New forms can introduce new failure modes, which means earlier assumptions must be rechecked."
      },
      {
        question: "What should engineers have done after the bridge's movement became well known and easy to observe?",
        options: [
          "Treat the motion as a feature of modern design and wait for clearer evidence.",
          "Investigate the wind behavior and consider restrictions or design changes.",
          "Ignore public concern because ordinary users are not structural experts.",
          "Focus only on whether gravity-load calculations were still valid."
        ],
        correctAnswer: 1,
        explanation: "Risk management requires responding to evidence of danger before public harm occurs."
      },
      {
        question: "From the perspective of competence and humility, what should engineers do if a design begins to exceed the limits of what they fully understand?",
        options: [
          "Continue anyway because opening the bridge proves the design is already competent.",
          "Rely on past success with older bridge forms and avoid rechecking uncertain behavior.",
          "Seek better analysis or outside expertise before treating the design as safe.",
          "Assume unusual motion is acceptable if it does not immediately damage the structure."
        ],
        correctAnswer: 2,
        explanation: "Competence includes recognizing limitations and seeking better knowledge when behavior is uncertain."
      },
      {
        question: "Which answer is too narrow for a full ethics-course response about Tacoma Narrows?",
        options: [
          "The case involved public safety, professional responsibility, and warning signs before collapse.",
          "The design was slender and flexible, which affected wind behavior.",
          "Engineers should learn from the failure and improve future standards.",
          "The case was only about bridge motion, not responsibility or public welfare."
        ],
        correctAnswer: 3,
        explanation: "Tacoma Narrows is not just a motion story. It is a responsibility and public-safety case."
      },
      {
        question: "If a client prefers the cheaper slender design but engineers still have unresolved uncertainty about wind behavior, what is the most ethical engineering response?",
        options: [
          "Stay silent about the uncertainty to avoid delaying the project.",
          "Explain the unresolved risk and avoid approving the design as safe yet.",
          "Approve the design because the client, not the engineer, bears final responsibility.",
          "Assume the uncertainty is acceptable as long as cost targets are met."
        ],
        correctAnswer: 1,
        explanation: "Engineers must make realistic judgments, disclose danger, and avoid approving work as safe when important uncertainty remains."
      },
      {
        question: "Ethical reasoning asks engineers to identify facts, duties, stakeholders, alternatives, and likely impacts. Which answer best fits that method in Tacoma Narrows?",
        options: [
          "Compare options such as more testing, restrictions, or redesign by asking which best protects the public.",
          "Once the main fact is known, ethics no longer requires comparing alternatives or impacts.",
          "Ethical reasoning matters only after collapse, not when warning signs first appear.",
          "Facts and duties are enough, so stakeholders and outcomes need not be discussed."
        ],
        correctAnswer: 0,
        explanation: "Ethical reasoning is not just naming a principle. It also compares options and their impacts on affected people."
      },
      {
        question: "What should future bridge engineers include because of the Tacoma lesson if they are acting with accountability after failure?",
        options: [
          "A rule that all bridges should avoid innovation completely.",
          "A stronger emphasis on dynamic wind analysis, validation, and learning from failure.",
          "A policy that visible movement can be ignored if no one is hurt at first.",
          "A belief that collapse itself is the best form of testing uncertain designs."
        ],
        correctAnswer: 1,
        explanation: "Accountability after failure means improving knowledge and standards so similar public-safety failures are less likely."
      },
      {
        question: "Why does Tacoma Narrows matter for public trust even though the case is often taught mainly as a bridge failure?",
        options: [
          "Public trust depends on whether bold structures are tested and judged safe.",
          "Public trust applies only if a bridge fails because of intentional deception.",
          "Public trust is mainly about whether engineers defend their reputation after collapse.",
          "Public trust has little connection to technical judgment if the bridge looks impressive."
        ],
        correctAnswer: 0,
        explanation: "Public trust depends on the expectation that engineers protect people by testing public structures against real risks."
      },
      {
        question: "Which answer is weakest if a student is asked to explain stakeholders in the Tacoma Narrows case?",
        options: [
          "Bridge users, public agencies, and the wider public all had stakes in the bridge's safety.",
          "Future engineers were also stakeholders because they would learn from the failure.",
          "Taxpayers and decision makers mattered because public resources supported the bridge.",
          "Stakeholders are not important here because the case was only about aerodynamics."
        ],
        correctAnswer: 3,
        explanation: "Engineering ethics includes everyone affected by the work, not just the technical mechanism."
      },
      {
        question: "Which final conclusion best matches the ethics-course lesson of Tacoma Narrows?",
        options: [
          "Beautiful and economical public structures are ethical as long as they pass standard calculations.",
          "Wind was responsible for the collapse, so engineering ethics has only a limited role.",
          "Tacoma Narrows shows that public safety must limit cost-saving under dynamic uncertainty.",
          "The main lesson is that engineers should avoid all flexible or unusual designs forever."
        ],
        correctAnswer: 2,
        explanation: "The strongest ethics conclusion connects real-world loads, public safety, professional judgment, and the limits on economy and innovation."
      },
    ]
  },
  {
    caseId: "case-7",
    questions: [
      {
        question: "Hotel staff move a mattress that may still be smoldering into a closet beside the main stairway. Which ethical judgment is strongest?",
        options: [
          "It creates a foreseeable fire hazard beside the main escape route.",
          "It is acceptable if the mattress looks damp from the outside.",
          "It becomes a safety issue only if inspectors are already on site.",
          "It mainly concerns housekeeping efficiency rather than life safety."
        ],
        correctAnswer: 0,
        explanation: "Storing a possibly active fire source beside the main escape path combines ignition risk with egress failure."
      },
      {
        question: "Why is the Gulf Hotel fire an engineering ethics case rather than only an accidental fire?",
        options: [
          "Because every hotel fire automatically becomes an engineering case.",
          "Because the building was old enough that modern standards did not matter.",
          "Because known hazards and weak exits turned it into a public-safety failure.",
          "Because the event became famous and later appeared in textbooks."
        ],
        correctAnswer: 2,
        explanation: "The ethics issue is not just ignition. It is the preventable system of unsafe conditions that allowed mass harm."
      },
      {
        question: "Inspectors had already cited the hotel for a non-working exit light. Why does that fact matter most ethically?",
        options: [
          "It shows the city had a complete solution but chose not to use it.",
          "It shows a known life-safety defect was not corrected in time.",
          "It proves the exit light caused the original mattress fire.",
          "It means hotel management was legally exempt from further responsibility."
        ],
        correctAnswer: 1,
        explanation: "A prior citation shows awareness of a hazard, which makes failure to correct it an accountability problem."
      },
      {
        question: "Which explanation of the Gulf Hotel tragedy is weakest?",
        options: [
          "Unsafe storage near the stairway helped turn a small fire into a larger one.",
          "Poor exits and weak emergency guidance made evacuation harder.",
          "Known hazards and weak follow-up mattered as much as the ignition source.",
          "The deaths were caused only by one smoker, so building safety is secondary."
        ],
        correctAnswer: 3,
        explanation: "Reducing the case to one smoker ignores the building owner, inspectors, and known life-safety failures."
      },
      {
        question: "A low-cost hotel houses elderly, disabled, homeless, transient, or intoxicated occupants. What does ethical safety practice require?",
        options: [
          "Lower standards because the residents can leave if they dislike conditions.",
          "The same minimum rules, but no need for extra urgency.",
          "Stronger life-safety protection because many occupants may struggle to escape.",
          "Only voluntary safety upgrades because the building serves low-income guests."
        ],
        correctAnswer: 2,
        explanation: "Vulnerable occupants increase the duty of care because they may have less ability to self-protect in an emergency."
      },
      {
        question: "After the first mattress fire seemed controlled, what should hotel management have done?",
        options: [
          "Store the mattress in the closet until daylight so staff can watch it later.",
          "Place it near cleaning supplies so it stays out of guest rooms.",
          "Return it to service if no visible flames remain.",
          "Fully extinguish or remove it and keep it away from exits and flammables."
        ],
        correctAnswer: 3,
        explanation: "A mattress can keep heat deep inside and reignite. Safe response required full extinguishment or safe removal."
      },
      {
        question: "Why is saying 'the hotel was old' an incomplete explanation of the case?",
        options: [
          "Age mattered, but correctable hazards made the building unsafe.",
          "Old buildings are automatically unethical regardless of condition.",
          "Age explains the fire completely, so no other analysis is needed.",
          "If a building is old, city officials have no responsibility for it."
        ],
        correctAnswer: 0,
        explanation: "The ethical issue was not age alone. It was failing to correct foreseeable hazards in an occupied building."
      },
      {
        question: "What most directly made evacuation fail during the fire?",
        options: [
          "Too many guests were trying to leave at the same time, creating confusion.",
          "The main stairway was blocked, the fire escape crowded, and the exit light failed.",
          "The building had so many exits that people could not choose one quickly.",
          "The mattress was too heavy for staff to move after it reignited."
        ],
        correctAnswer: 1,
        explanation: "Evacuation failed because the primary route was lost, the secondary route was overloaded, and emergency guidance was weak."
      },
      {
        question: "Which statement best describes the risk management failure in the Gulf Hotel case?",
        options: [
          "The only true risk was smoking, and the rest followed naturally.",
          "The fire became fatal because the city lacked a fire department.",
          "Foreseeable hazards were allowed to combine before occupancy.",
          "Risk management does not really apply to lodging buildings."
        ],
        correctAnswer: 2,
        explanation: "Risk management is about identifying and controlling hazard combinations, not waiting for them to interact."
      },
      {
        question: "If an inspector cites a broken exit light in an occupied hotel, what is the best professional response?",
        options: [
          "Require correction and verify it before continued occupancy.",
          "Issue the citation and assume the owner will handle the problem eventually.",
          "Leave the matter to the next inspection cycle unless guests complain.",
          "Treat the defect as cosmetic unless the building has already had a fatal fire."
        ],
        correctAnswer: 0,
        explanation: "Professional responsibility means ensuring that known life-safety defects are actually corrected."
      },
      {
        question: "Why is code enforcement ethically important in this case?",
        options: [
          "Because any written rule is enough to satisfy public welfare.",
          "Because enforcement mainly protects the city from lawsuits.",
          "Because old hotels are otherwise impossible to regulate fairly.",
          "Because rules protect people only when violations are corrected."
        ],
        correctAnswer: 3,
        explanation: "A code that is cited but not enforced does not protect the public in practice."
      },
      {
        question: "Which written-answer claim is weakest?",
        options: [
          "Known hazards were not corrected before people were harmed.",
          "The fire was unavoidable, so ethical responsibility is limited.",
          "Vulnerable occupants made the duty of care stronger.",
          "The broken exit light matters because emergency guidance is part of life safety."
        ],
        correctAnswer: 1,
        explanation: "The case is valuable precisely because the harm was not unavoidable. Multiple foreseeable hazards were left in place."
      },
      {
        question: "How should engineers or safety officials think about vulnerable occupants in the Gulf Hotel?",
        options: [
          "They matter mainly for social policy, not engineering ethics.",
          "They reduce owner responsibility because self-rescue is always personal.",
          "Their vulnerability increases the duty to provide exits and protection.",
          "They should be considered only after the building meets minimum cost targets."
        ],
        correctAnswer: 2,
        explanation: "Ethical responsibility becomes stronger when affected people have less ability to escape or demand safer conditions."
      },
      {
        question: "Why is public safety the central principle in the Gulf Hotel case?",
        options: [
          "People stayed in a building without basic life-safety protection.",
          "Public safety applies only because the fire appeared in the news.",
          "It is central only if the owner is a licensed engineer.",
          "It matters less than the question of who first saw the mattress fire."
        ],
        correctAnswer: 0,
        explanation: "This case is about the duty to protect building occupants before a foreseeable emergency becomes mass harm."
      },
      {
        question: "Which fact most strongly supports an accountability criticism of the hotel and authorities?",
        options: [
          "The building was in a busy downtown area.",
          "The exit light was known but not fixed in time.",
          "The mattress fire began after smoking.",
          "Many victims were not identified immediately after death."
        ],
        correctAnswer: 1,
        explanation: "Accountability is strongest where a known safety defect was identified but not fixed."
      },
      {
        question: "Why is the sentence 'the fire was accidental' too incomplete for an ethics exam?",
        options: [
          "Because accidental events can never involve engineering judgment.",
          "Because the only relevant question is who lit the cigarette.",
          "Because ethics ends once the first ignition source is identified.",
          "Because weak safeguards turned ignition into mass harm."
        ],
        correctAnswer: 3,
        explanation: "Ignition alone does not explain the ethics failure. The preventable conditions around it do."
      },
      {
        question: "What set of measures best addresses emergency egress failure?",
        options: [
          "More hall lighting and less formal inspection paperwork.",
          "A larger lobby and fewer written fire rules.",
          "Working exit lights, clear routes, and usable escape paths.",
          "Faster elevators so guests can leave without using stairs."
        ],
        correctAnswer: 2,
        explanation: "Egress safety depends on route clarity, route usability, and enough capacity for escape."
      },
      {
        question: "What is the strongest justice-based interpretation of the Gulf Hotel fire?",
        options: [
          "Neglect is worse when people at risk are less able to protect themselves.",
          "Justice is unrelated because the case involved fire rather than design drawings.",
          "Justice matters only if the owner intended to harm the guests.",
          "Justice applies only after compensation is paid."
        ],
        correctAnswer: 0,
        explanation: "A building used by vulnerable people demands greater care, not lower standards."
      },
      {
        question: "What should city authorities have done after learning of the exit-light problem?",
        options: [
          "Wait for the next routine review so the owner had time to respond informally.",
          "Assume the owner would fix it because the defect looked minor.",
          "Issue another warning letter but allow normal occupancy to continue without checking.",
          "Follow up quickly and require correction before the hotel kept housing guests."
        ],
        correctAnswer: 3,
        explanation: "When a known life-safety defect remains in an occupied building, authorities must ensure correction rather than merely record awareness."
      },
      {
        question: "Which explanation of the Gulf Hotel fire is too narrow?",
        options: [
          "Unsafe storage near the stairway mattered.",
          "The disaster was only a mattress problem.",
          "Poor emergency guidance worsened evacuation.",
          "Vulnerable occupants raised the duty of care."
        ],
        correctAnswer: 1,
        explanation: "The mattress mattered, but the tragedy also involved exits, signage, enforcement, and vulnerable occupants."
      },
      {
        question: "Which case fact best shows compounding risk rather than a single isolated mistake?",
        options: [
          "A reigniting mattress, flammable supplies, and a blocked stairway.",
          "The building had guests from different backgrounds and life situations.",
          "The city already had inspection forms and citation procedures.",
          "The fire happened in a downtown location rather than in the suburbs."
        ],
        correctAnswer: 0,
        explanation: "Compounding risk appears when ignition source, fuel, and escape blockage are allowed to interact."
      },
      {
        question: "Why does public trust matter in a case like Gulf Hotel?",
        options: [
          "Public trust is mainly about whether the hotel was financially successful.",
          "It matters only for luxury lodging because low-cost guests expect fewer protections.",
          "People expect even low-cost lodging to meet basic life-safety standards.",
          "Trust becomes relevant only after the courts decide who pays damages."
        ],
        correctAnswer: 2,
        explanation: "Public trust means people believe that occupied buildings meet minimum life-safety requirements regardless of price."
      },
      {
        question: "A building with vulnerable occupants has weak exits, poor signage, and no strong suppression system. What should responsible officials do?",
        options: [
          "Treat it as acceptable as long as there has not yet been a fatal fire.",
          "Treat it as a high-priority safety risk and act before occupancy continues.",
          "Leave the choice to occupants because they accepted the building's low cost.",
          "Focus only on future renovations and ignore the current condition."
        ],
        correctAnswer: 1,
        explanation: "Known conditions that could trap vulnerable occupants demand urgent corrective action before disaster."
      },
      {
        question: "Which claim is weakest?",
        options: [
          "A cited-but-not-fixed exit defect is a serious accountability issue.",
          "Weak fire protection and unsafe storage can turn a small fire deadly.",
          "Protection of vulnerable occupants is part of public welfare.",
          "Cheap buildings cannot be expected to meet the same safety duties."
        ],
        correctAnswer: 3,
        explanation: "Economic status does not reduce the duty to provide basic life-safety protection."
      },
      {
        question: "Why did the blocked main stairway matter ethically, not just physically?",
        options: [
          "Because it removed the main escape path during emergency.",
          "Because it made the building look more disorganized from outside.",
          "Because it showed the hotel relied too heavily on elevators.",
          "Because it increased the hotel's repair costs after the incident."
        ],
        correctAnswer: 0,
        explanation: "Blocking the main means of egress is a direct life-safety failure when people depend on it to escape."
      },
      {
        question: "What should hotel management have prioritized long before the fire?",
        options: [
          "Keeping occupancy high enough to fund later improvements.",
          "Reducing complaints about room prices before addressing safety.",
          "Safe storage, functioning exits, and fire-prevention controls.",
          "Marketing the hotel as affordable so guests understood the building was basic."
        ],
        correctAnswer: 2,
        explanation: "Management's ethical duty was to maintain the building's life-safety systems before an emergency exposed their weakness."
      },
      {
        question: "Out of 133 guests, 55 died and 30 were injured. From an ethics perspective, what does that scale of harm show?",
        options: [
          "The fire was unusually severe, so normal ethics analysis does not apply.",
          "The building's protections were inadequate for the real occupants inside.",
          "The main lesson is simply that old buildings are impossible to make safe.",
          "The outcome mainly reflects the behavior of the guests rather than the building."
        ],
        correctAnswer: 1,
        explanation: "The scale of harm shows that the building's protection layers failed the people who depended on them."
      },
      {
        question: "Which answer best distinguishes accountability from code enforcement in this case?",
        options: [
          "Accountability is public anger, while code enforcement is private building maintenance.",
          "Accountability applies only after tragedy, while code enforcement matters only before it.",
          "There is no real difference because both mean identifying the first smoker.",
          "Accountability means fixing known hazards; code enforcement makes corrections happen."
        ],
        correctAnswer: 3,
        explanation: "The two ideas are related but distinct: one is responsibility, the other is the mechanism that makes safety rules real."
      },
      {
        question: "Which answer is too narrow for a full exam response about the Gulf Hotel fire?",
        options: [
          "The building's emergency egress failed when routes became unusable.",
          "Known hazards and weak follow-up made the case ethically serious.",
          "The main ethical lesson is simply that the hotel needed sprinklers.",
          "Vulnerable occupants increase the duty of care."
        ],
        correctAnswer: 2,
        explanation: "Sprinklers mattered, but the case also involved signage, exits, storage, enforcement, and accountability."
      },
      {
        question: "Why is blaming the victims a weak ethical response?",
        options: [
          "Because building fires are always caused by occupant behavior alone.",
          "Because occupants relied on owners and authorities for safe shelter and egress.",
          "Because vulnerable people are never allowed to make any choices for themselves.",
          "Because responsibility belongs only to the city once a building is occupied."
        ],
        correctAnswer: 1,
        explanation: "The ethical duty rested with the people and systems responsible for the building's safety conditions."
      },
      {
        question: "Which is the best final lesson of the Gulf Hotel fire?",
        options: [
          "Any old building should be closed immediately, even without inspection.",
          "The case mainly proves that smoking is always the single decisive cause.",
          "The most important reform is to increase hotel profits so maintenance improves.",
          "Known hazards must be corrected before vulnerable people are harmed."
        ],
        correctAnswer: 3,
        explanation: "The enduring lesson is about preventing foreseeable harm before it reaches vulnerable occupants."
      },
      {
        question: "If a citation is issued but no timely correction follows, which failure is most directly shown?",
        options: [
          "Accountability failed because awareness did not produce action.",
          "Justice was fully satisfied because the defect had been documented.",
          "Professional responsibility was transferred entirely to the occupants.",
          "The risk no longer counted as foreseeable once it was written down."
        ],
        correctAnswer: 0,
        explanation: "A recorded hazard that remains uncorrected shows that knowing about danger is not the same as acting on it."
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
    "Manufacturer response",
    "Software overreliance",
    "Human factors",
    "Operator blame",
    "Malfunction 54",
    "Code reuse",
    "Poor software engineering",
    "Hardware interlocks",
    "Arithmetic overflow",
    "Transparency",
    "Repeated harm",
    "Accountability vs transparency",
    "Rare failure defense",
    "Proceed after error",
    "Dose monitor",
    "Public trust",
    "First response",
    "Professional responsibility",
    "Safety redundancy",
    "Human factors lesson",
    "Weak conclusion",
    "FDA regulation",
    "Failure chain",
    "Safety analysis",
    "Advanced technology",
    "Risk management",
    "Specific ethics",
    "Documentation",
    "Prevention",
    "Final conclusion"
  ],
  "case-6": [
    "Public warning sign",
    "Approve only if safe",
    "Too narrow explanation",
    "Cost vs safety",
    "Professional competence",
    "Realistic estimates",
    "Disclosure of danger",
    "Integrity in judgment",
    "Innovation responsibility",
    "Galloping Gertie",
    "Failure diagnosis",
    "Wind response",
    "Protective action",
    "Professional responsibility",
    "Correct diagnosis",
    "Cost vs safety",
    "Weakest answer",
    "Design assumptions",
    "Risk management",
    "Competence limits",
    "Too narrow answer",
    "Client pressure",
    "Ethical reasoning",
    "Learning from failure",
    "Public trust",
    "Stakeholders",
    "Final lesson"
  ],
  "case-7": [
    "Stairway hazard",
    "Ethics case",
    "Known defect",
    "Weak explanation",
    "Vulnerable occupants",
    "First response",
    "Incomplete explanation",
    "Escape failure",
    "Risk management",
    "Inspector duty",
    "Code enforcement",
    "Weak claim",
    "Stakeholder vulnerability",
    "Public safety",
    "Accountability fact",
    "Incomplete ethics answer",
    "Emergency egress",
    "Justice",
    "Authority response",
    "Too narrow answer",
    "Compounding risk",
    "Public trust",
    "High-priority hazard",
    "Weak claim",
    "Main stairway",
    "Management priorities",
    "Scale of harm",
    "Accountability vs enforcement",
    "Too narrow lesson",
    "Victim blaming",
    "Final lesson",
    "Citation without correction"
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
    "In ethics, early harm reports are warning signs, not inconveniences.",
    "The issue is not software itself, but software without enough safety layers.",
    "Human factors means designing for real user behavior, not ideal behavior.",
    "Do not blame users when unsafe design makes error likely.",
    "Malfunction 54 = fast editing + timing problem + unsafe state.",
    "Reuse is acceptable only with validation.",
    "Safety-critical software is an engineering ethics issue.",
    "Fail-safe design uses layers of protection.",
    "Technical details matter when they connect to patient harm.",
    "Transparency is clear safety information, not just public statements.",
    "Repeated harm = stronger accountability issue.",
    "Exam questions may ask you to separate principles.",
    "Risk = probability + severity.",
    "Unknown fault should lead to safe shutdown.",
    "Dose monitor = fail-safe improvement.",
    "Public trust connects technical failure to society.",
    "First serious warning = act before repeated harm.",
    "Professional responsibility follows control over risk.",
    "Redundancy = independent protection.",
    "Human factors is about designing systems humans can use safely.",
    "Avoid one-cause blame.",
    "Regulators support safety, but engineers still remain responsible.",
    "Do not mix cases in exam answers.",
    "Safety analysis must include software.",
    "Technology is acceptable only with responsible controls.",
    "Risk management is proactive.",
    "Be specific to the ethical failure.",
    "Documentation supports transparency, accountability, and safety review.",
    "Strong prevention answers cover multiple safety layers.",
    "End with patient safety and professional responsibility."
  ],
  "case-6": [
    "Warning signs in a public structure should trigger action before harm occurs.",
    "Static strength does not guarantee dynamic safety under real conditions.",
    "Do not separate technical cause from professional duty.",
    "Cost-saving is acceptable only inside safety limits.",
    "Competence includes recognizing the limits of your knowledge.",
    "Realistic estimates include performance and risk, not only cost.",
    "Disclosure duties begin before certainty of collapse.",
    "Integrity is responsible judgment, not image protection.",
    "Innovation requires extra validation, not extra confidence.",
    "Galloping Gertie is a warning-sign fact, not trivia.",
    "Do not treat resonance as the whole story.",
    "Say the design response to wind was the real issue.",
    "First response to danger is investigation and protection.",
    "Professional responsibility includes all relevant loads.",
    "Correct diagnosis matters because future prevention depends on it.",
    "Economy is ethical only if safety remains protected.",
    "Standing is not the same as safe.",
    "Changed form means changed assumptions.",
    "Risk management acts before collapse, not after it.",
    "Seek expertise when uncertainty exceeds your competence.",
    "Too-narrow answers miss duty, welfare, and responsibility.",
    "Client pressure never removes the engineer's safety duty.",
    "Ethical reasoning compares alternatives and impacts.",
    "Accountability includes learning from failure and improving standards.",
    "Public trust depends on real safety, not bold appearance.",
    "Stakeholders include everyone affected by the bridge's safety.",
    "Best conclusions combine public safety, uncertainty, and responsibility."
  ],
  "case-7": [
    "Fire source plus escape path is a high-yield ethics link.",
    "Explain why it became a public-safety failure, not only how it started.",
    "A prior citation proves the hazard was known before the disaster.",
    "Victim-blaming or single-cause answers are usually the weakest.",
    "Vulnerable occupants increase the duty of care.",
    "After a small fire, the ethical response is safe removal or full extinguishment.",
    "Old building is not a complete explanation; focus on correctable hazards.",
    "Escape failure means blocked route, weak backup, and poor guidance together.",
    "Risk management questions reward combined-hazard answers.",
    "Inspector duty means cite, follow up, and verify correction.",
    "Codes protect life only when enforced in practice.",
    "Unavoidable is usually a weak ethics answer when hazards were known.",
    "Justice questions ask who lacked power to protect themselves.",
    "Public safety is usually the first principle in occupied-building disasters.",
    "Known defect plus no correction equals accountability.",
    "Accidental does not remove responsibility for foreseeable harm.",
    "Name signs, routes, and usable exits in egress answers.",
    "Protection duties rise when occupants are vulnerable.",
    "Authorities must act before another incident, not after it.",
    "Too-narrow answers ignore management and enforcement.",
    "Show how ignition, fuel, and blocked escape combined.",
    "Public trust applies to any lodging people rely on.",
    "If occupants are vulnerable, weak safety systems demand urgency.",
    "Any answer implying poor people deserve less safety is wrong.",
    "Blocked stairs are not just inconvenient; they remove primary egress.",
    "Prevention answers should include management action and building systems.",
    "Large casualty counts show safety failed for the real occupant population.",
    "Distinguish responsibility from the enforcement mechanism.",
    "Do not reduce Gulf Hotel to one missing system like sprinklers alone.",
    "Victims relied on the building and authorities for safety.",
    "Best conclusions combine foreseeability, vulnerability, and duty to act.",
    "Awareness without correction is the accountability failure."
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
      .replaceAll("vortex shedding", "<strong>vortex shedding</strong>")
      .replaceAll("wind-induced", "<strong>wind-induced</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("public trust", "<strong>public trust</strong>")
      .replaceAll("dynamic loads", "<strong>dynamic loads</strong>")
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
      .replaceAll("public trust", "<strong>public trust</strong>")
      .replaceAll("accountability", "<strong>accountability</strong>")
      .replaceAll("code enforcement", "<strong>code enforcement</strong>")
      .replaceAll("risk management", "<strong>risk management</strong>")
      .replaceAll("exit light", "<strong>exit light</strong>")
      .replaceAll("main stairway", "<strong>main stairway</strong>")
      .replaceAll("fire escape", "<strong>fire escape</strong>")
      .replaceAll("exit signs", "<strong>exit signs</strong>")
      .replaceAll("emergency egress", "<strong>emergency egress</strong>")
      .replaceAll("sprinklers", "<strong>sprinklers</strong>")
      .replaceAll("extinguishers", "<strong>extinguishers</strong>")
      .replaceAll("foreseeable", "<strong>foreseeable</strong>")
      .replaceAll("vulnerable", "<strong>vulnerable</strong>")
      .replaceAll("flammable", "<strong>flammable</strong>");
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
