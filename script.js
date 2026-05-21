// Engineering Ethics Study Website
// Add or replace case quiz data below. Each quiz uses caseId, question, options,
// correctAnswer, and explanation. correctAnswer is zero-based: 0 = first option.

const quizData = [
    {
    caseId: "case-1",
    questions: [
      {
        question: "A software team designs code that recognizes official emissions-test conditions and changes engine behavior only during the test. Which ethical judgment is strongest?",
        options: [
          "The software only changes performance in a legal testing environment, so the main issue is efficiency rather than ethics.",
          "The software mainly creates a branding risk because consumers usually prefer simpler technology.",
          "Engineering knowledge is being used to deceive regulators and hide real-world emissions.",
          "The issue is only mechanical because the vehicle still functions during normal driving."
        ],
        correctAnswer: 2,
        explanation: "The software was intentionally designed to create a false appearance of compliance rather than honest environmental performance."
      },
      {
        question: "Which answer is too narrow for a full Engineering Ethics explanation of the Volkswagen scandal?",
        options: [
          "Volkswagen used defeat-device software to manipulate emissions behavior.",
          "The scandal involved deception of regulators, customers, governments, and the public.",
          "Public trust in engineering claims and environmental promises was damaged.",
          "The case was only about cars producing pollution."
        ],
        correctAnswer: 3,
        explanation: "Pollution matters, but the deeper ethical issue is deliberate deception using software and engineering knowledge."
      },
      {
        question: "An engineer is asked to help write code that makes a vehicle pass emissions testing without meeting the same standard in real driving. What is the strongest ethical first response?",
        options: [
          "Refuse to create deceptive software, document the concern, and report it through proper channels.",
          "Write the code because the product still passes the official test procedure.",
          "Stay silent because business strategy belongs to managers rather than engineers.",
          "Complete the work first and raise concerns only if regulators later discover the problem."
        ],
        correctAnswer: 0,
        explanation: "Professional responsibility requires engineers to refuse deceptive work and act before public or environmental harm continues."
      },
      {
        question: "Why is transparency central in the Volkswagen case rather than only a secondary communication issue?",
        options: [
          "Because transparency only means explaining fuel economy in advertising language.",
          "Because regulators, customers, and the public were not told that emissions behavior changed between testing and real driving.",
          "Because transparency applies mainly to financial statements, not to product behavior.",
          "Because the cars still operated, so hidden emissions behavior did not really affect stakeholder judgment."
        ],
        correctAnswer: 1,
        explanation: "Stakeholders needed truthful information about real emissions behavior, not a carefully managed testing image."
      },
      {
        question: "Why did real-world emissions testing matter ethically in this case, not only technically?",
        options: [
          "It gave competitors a better chance to criticize diesel vehicles in public.",
          "It showed that laboratory procedures are always unreliable and should be abandoned completely.",
          "It exposed the gap between official claims and actual environmental performance.",
          "It proved that regulators were mainly responsible for Volkswagen's design choices."
        ],
        correctAnswer: 2,
        explanation: "The mismatch between lab and road results revealed that the company's apparent compliance was deceptive."
      },
      {
        question: "A manager learns that a vehicle appears compliant only when testing conditions are detected by software. What should that manager do if acting ethically?",
        options: [
          "Stop approval, investigate the software honestly, disclose the risk, and require genuine compliance before release.",
          "Protect the launch schedule first and return to the emissions concern after the next quarter.",
          "Wait for a public relations problem before deciding whether the issue is serious.",
          "Approve the product because the official lab result is the only result regulators will initially see."
        ],
        correctAnswer: 0,
        explanation: "Managers share responsibility for stopping deceptive products before they reach the public and environment."
      },
      {
        question: "Which statement about legal compliance is weakest in the Volkswagen case?",
        options: [
          "Emissions rules exist to protect air quality and public welfare in real use, not only in a lab procedure.",
          "Passing the laboratory test is enough even if real driving defeats the purpose of the emissions law.",
          "Using a defeat device bypasses the intent of environmental regulation even if the paperwork initially looks compliant.",
          "Ethical compliance requires honest performance, not manipulated compliance signals."
        ],
        correctAnswer: 1,
        explanation: "Engineering ethics rejects compliance theater when the real behavior defeats the rule's protective purpose."
      },
      {
        question: "Why did the scandal damage public trust beyond Volkswagen itself?",
        options: [
          "Because the scandal proved that all diesel engines everywhere were technically identical.",
          "Because it showed that regulators should stop testing vehicles entirely.",
          "Because consumers care only about vehicle price and not about environmental claims.",
          "Because it made people more skeptical of emissions testing, diesel technology, and engineering promises across the industry."
        ],
        correctAnswer: 3,
        explanation: "Large deception cases damage trust not only in one company but also in the systems and claims people rely on."
      },
      {
        question: "Which stakeholder list is strongest for analyzing the Volkswagen scandal ethically?",
        options: [
          "Customers, regulators, governments, the public, the environment, employees, shareholders, and the automobile industry.",
          "Only Volkswagen executives and shareholders, because they carried the main financial risk.",
          "Only vehicle owners, because they were the direct purchasers.",
          "Only emissions-test laboratories, because the test procedure was where the mismatch first appeared."
        ],
        correctAnswer: 0,
        explanation: "The scandal affected many direct and indirect stakeholders, including the public and environment."
      },
      {
        question: "If regulators or independent testers discover a large mismatch between road emissions and laboratory results, what is the strongest ethical next step?",
        options: [
          "Treat the issue as mainly a branding problem until the company confirms the cause itself.",
          "Investigate the discrepancy, demand accurate disclosure, expand testing, and require correction before treating the vehicles as compliant.",
          "Assume the difference is normal because real-world driving is always somewhat unpredictable.",
          "Delay action until the company voluntarily explains whether software was involved."
        ],
        correctAnswer: 1,
        explanation: "Oversight must protect the public by verifying real behavior when evidence shows the official story may be false."
      },
      {
        question: "What made software engineering central to the ethical failure rather than just a supporting technical detail?",
        options: [
          "Software became central only because drivers could not see it directly.",
          "Software reduced the amount of physical hardware needed in the emissions system.",
          "Software was used to create a false appearance of compliance while hiding real-world emissions.",
          "Software matters ethically only when it causes a crash or immediate physical malfunction."
        ],
        correctAnswer: 2,
        explanation: "The code did not merely fail; it was used as the tool of deception."
      },
      {
        question: "Which answer is most incomplete in a written exam response about Volkswagen?",
        options: [
          "The scandal involved defeat-device software and a mismatch between lab and road emissions.",
          "The case damaged public trust because claims about clean diesel did not match real behavior.",
          "Engineers should not use technical knowledge to mislead regulators or the public.",
          "The main problem was simply that diesel engines are difficult to optimize."
        ],
        correctAnswer: 3,
        explanation: "That answer hides the ethical core of the case by treating intentional deception like an ordinary design challenge."
      },
      {
        question: "Suppose employees reported concerns internally and the company kept hiding deceptive emissions behavior. What should engineers do next if serious public and environmental harm remains possible?",
        options: [
          "Maintain documentation, continue authorized escalation, and consider whistle-blowing if internal channels fail.",
          "Stop raising the issue because repeating the concern may look disloyal to the employer.",
          "Wait until the public discovers the problem before deciding whether the risk was serious enough.",
          "Delete technical records so the concern cannot be misinterpreted by outsiders."
        ],
        correctAnswer: 0,
        explanation: "Escalation becomes ethically stronger when serious harm is at stake, internal channels fail, and evidence is documented."
      },
      {
        question: "Which answer best connects honesty and integrity to Volkswagen's actions?",
        options: [
          "The company pursued ambitious engineering goals in a competitive market.",
          "The company used advanced software to coordinate test performance efficiently.",
          "The company's clean-diesel claims did not match the vehicles' real environmental performance.",
          "The company's main error was underestimating how curious regulators might become."
        ],
        correctAnswer: 2,
        explanation: "Honesty and integrity require that real performance match what stakeholders are led to believe."
      },
      {
        question: "What does accountability require after a scandal like Volkswagen?",
        options: [
          "Mainly paying fines and then returning to normal business operations as soon as possible.",
          "Explaining that competition pressure made difficult choices unavoidable in the market.",
          "Waiting for individual employees to confess before making any broader changes.",
          "Accepting responsibility, correcting the vehicles, compensating affected parties, cooperating with regulators, and reforming culture and oversight."
        ],
        correctAnswer: 3,
        explanation: "Accountability is broader than punishment; it includes correction, compensation, reform, and prevention."
      },
      {
        question: "A company argues that if a product passes the official lab procedure, it has met its ethical duty. Which response best matches engineering ethics?",
        options: [
          "That is enough because ethical questions end once documented procedures are passed.",
          "Ethical compliance requires meeting the real purpose of the standard, not manipulating the test.",
          "That argument is acceptable unless a competitor complains publicly.",
          "Real-world performance matters only if customers report a noticeable driving problem."
        ],
        correctAnswer: 1,
        explanation: "Engineering ethics asks whether the product honestly meets the protective purpose of the standard in real use."
      },
      {
        question: "Before approving a compliance claim for a system that behaves differently during test conditions than in normal use, what should a responsible engineer or reviewer do?",
        options: [
          "Require evidence of safe and compliant real-world performance and refuse approval until it is verified.",
          "Treat the difference as a normal optimization choice if the test data still looks acceptable.",
          "Approve the claim and ask legal staff to handle any questions that arise later.",
          "Assume the test condition is the more important reality because regulators designed it."
        ],
        correctAnswer: 0,
        explanation: "Products should be approved only when their real behavior is safe, lawful, and honestly represented."
      },
      {
        question: "Which corporate-culture explanation is weakest from an Engineering Ethics perspective?",
        options: [
          "Pressure to protect market share and reputation can encourage people to rationalize bad decisions.",
          "A culture problem can exist when employees feel results matter more than honest compliance.",
          "If sales and targets are met, the ethical process used to reach them matters less.",
          "Culture shapes whether people feel safe reporting concerns about deceptive practices."
        ],
        correctAnswer: 2,
        explanation: "That view is exactly the kind of culture failure that helps deception survive."
      },
      {
        question: "An employee knows defeat-device software exists and fears retaliation for speaking up. When does outside escalation become ethically stronger?",
        options: [
          "Whenever the employee feels personally uncomfortable, even without evidence.",
          "Only after the employee has resigned and is no longer connected to the organization.",
          "Only if the deception already caused a visible public health crisis in court.",
          "When serious harm is possible, internal channels were tried or ignored, and persuasive evidence is documented."
        ],
        correctAnswer: 3,
        explanation: "Whistle-blowing is strongest when public or environmental harm is serious and internal correction has failed."
      },
      {
        question: "What role did regulators and independent testing play in uncovering Volkswagen?",
        options: [
          "They mainly confirmed the company's own explanation after the deception had already been admitted.",
          "They compared real-road emissions with lab results and exposed a mismatch that pointed to deliberate manipulation.",
          "They proved that all environmental regulation was too complex for the auto industry to follow honestly.",
          "They discovered the issue because the cars stopped functioning in ordinary driving."
        ],
        correctAnswer: 1,
        explanation: "Independent testing mattered because it showed the difference between the official appearance and the real behavior."
      },
      {
        question: "A marketing or compliance professional learns that environmental claims do not match real-world emissions data. What is the strongest ethical action?",
        options: [
          "Stop the misleading claims, raise the issue immediately, and push for truthful correction rather than continued promotion.",
          "Keep using the claims until regulators formally order the language to change.",
          "Focus only on whether customers are still satisfied with the vehicle's performance.",
          "Treat the mismatch as a technical issue that does not affect public-facing statements."
        ],
        correctAnswer: 0,
        explanation: "Once claims are known to be misleading, continuing them deepens the deception."
      },
      {
        question: "Which answer best applies environmental responsibility and public welfare to Volkswagen?",
        options: [
          "Environmental responsibility was secondary because the software itself was not a physical pollutant.",
          "Environmental responsibility was violated because higher real-world emissions could harm air quality and public health while being marketed as clean.",
          "Public welfare was not involved because drivers were not immediately injured by the software.",
          "Environmental responsibility applies mainly to factories, not to vehicle design or software behavior."
        ],
        correctAnswer: 1,
        explanation: "Software decisions can create real environmental and public-health consequences when they control emissions behavior."
      },
      {
        question: "Which statement about honesty and integrity is weakest in the Volkswagen case?",
        options: [
          "Honesty requires that emissions claims match what vehicles actually do in normal use.",
          "Integrity means engineers should not use technical skill to create false compliance.",
          "Misleading regulators and customers about real emissions violates both honesty and professional duty.",
          "If the code is technically clever, shaping test performance is mainly a business choice rather than an integrity issue."
        ],
        correctAnswer: 3,
        explanation: "Technical cleverness does not remove the ethical problem when the purpose is deception."
      },
      {
        question: "What is the strongest final engineering ethics lesson from Volkswagen?",
        options: [
          "Engineering is too closely linked to business pressure to ever be fully trustworthy.",
          "The real lesson is simply that regulators should design more difficult laboratory tests.",
          "Technical success is unethical if software is used to deceive instead of protect public welfare, legal compliance, and public trust.",
          "Environmental cases matter less than safety cases because the harm is harder to see immediately."
        ],
        correctAnswer: 2,
        explanation: "The case shows that technical ability must be governed by honesty, compliance, environmental responsibility, and public trust."
      }
    ]
  },
  {
    caseId: "case-2",
    questions: [
      {
        question: "A week before Heathrow Terminal 5 opens, integration reports show that baggage handling, staff navigation, parking access, and check-in coordination still break down under realistic rehearsals. The opening date is politically important and the building is complete. What is the most ethical response?",
        options: [
          "Open fully because the remaining problems are operational details that staff can solve once passengers arrive.",
          "Treat the warnings as launch-readiness risk, reduce scope or delay the opening, and require corrective action before full service.",
          "Keep the date fixed because changing it would damage the public image of the project more than the disruption would.",
          "Transfer responsibility to frontline staff because the technical build is already finished."
        ],
        correctAnswer: 1,
        explanation: "Operational readiness is part of professional responsibility. A public system should not open at full scale when known risks remain unresolved."
      },
      {
        question: "Heathrow T5 involved 163 IT applications, more than 15 IT vendors, 564 interfaces, over 9,000 connected devices, 11 miles of conveyor belts, and a baggage system capable of handling up to 12,000 bags per hour. Why did that scale make the Big Bang launch ethically risky?",
        options: [
          "Because one failure could cascade across passengers, staff, baggage, and flights at the same time.",
          "Because months of testing automatically guaranteed that a full launch would be safe enough.",
          "Because system complexity removed the duty to listen to frontline operational concerns.",
          "Because the cost of the project made opening on the announced date the main ethical priority."
        ],
        correctAnswer: 0,
        explanation: "The more tightly coupled the system, the greater the duty to control rollout risk so one failure does not hit everyone at once."
      },
      {
        question: "A senior executive says, 'The terminal passed testing, the building is complete, and the brand needs the opening to happen as announced.' Which response best fits engineering ethics?",
        options: [
          "Physical completion is the key ethical standard once the project cost has already been spent.",
          "Protecting public image should control the decision because reputational loss also harms stakeholders.",
          "Opening is acceptable if the organization is prepared to offer refunds and apologies afterward.",
          "A public system should not enter full service unless real operations, staff, and contingencies are ready for expected demand."
        ],
        correctAnswer: 3,
        explanation: "Engineering ethics asks whether the system is truly ready for public use, not whether the opening ceremony can still proceed."
      },
      {
        question: "During cutover from test mode to live mode, a software filter used in testing is left active and transfer-bag information is handled incorrectly. Which ethical lesson is most direct?",
        options: [
          "Staff training mattered more than any technology control, so the software issue is secondary.",
          "Airports should avoid highly integrated systems because integration itself is ethically suspect.",
          "Launch approval requires controlled transition from test conditions to live operation, not just impressive rehearsal statistics.",
          "Real passengers are mainly responsible once they choose to rely on a new terminal."
        ],
        correctAnswer: 2,
        explanation: "A complex system is not ethically ready if the shift from testing to live operation is not verified and controlled."
      },
      {
        question: "Business analysts repeatedly hear from baggage handlers and union representatives that parking, security access, and baggage procedures are not ready for real operating pressure. What should they do?",
        options: [
          "Remove the concerns from readiness reporting until senior management explicitly requests them.",
          "Treat the concerns as stakeholder evidence, convert them into risks and requirements, and escalate them into launch decisions.",
          "Assume operational staff naturally resist change and continue with the approved plan.",
          "Wait until opening day because only live traffic can prove whether the concerns are serious."
        ],
        correctAnswer: 1,
        explanation: "Business analysts have an ethical role in making sure operational concerns become decision-useful evidence, not background noise."
      },
      {
        question: "Management learns that server-capacity planning may not support opening-day baggage loads, but delaying the launch would be embarrassing after months of publicity. What is the strongest ethical response?",
        options: [
          "Open as planned because compensation can be offered later if disruption becomes serious.",
          "Keep the risk discussion internal so passengers and staff do not lose confidence before launch.",
          "Trust that on-site teams will improvise once the real load appears.",
          "Delay or limit the launch until capacity and contingency plans are credible under expected load."
        ],
        correctAnswer: 3,
        explanation: "Public image does not outrank credible capacity risk when thousands of people will depend on the system."
      },
      {
        question: "Passengers at a new terminal face long queues, late check-in, and uncertainty about luggage and flights. Which communication duty is most ethically important at that moment?",
        options: [
          "Give accurate, timely, visible information and enough ground support so affected people can make informed decisions.",
          "Avoid detailed announcements until leadership agrees on a perfect message.",
          "Focus communication on premium customers first because they are the most visible publicly.",
          "Communicate only after the technical cause is fully diagnosed."
        ],
        correctAnswer: 0,
        explanation: "During disruption, truthful communication is part of stakeholder care, not an optional public-relations extra."
      },
      {
        question: "Heathrow T5 underwent six months of testing using about 16,000 volunteers, yet opening day still failed badly. What is the best ethical interpretation?",
        options: [
          "The tests were unethical because they involved too many volunteers before launch.",
          "The failure proves testing has little value in complex public infrastructure projects.",
          "Readiness claims were too optimistic because testing did not prove real operational performance under actual demand, staffing, and disruption.",
          "Once testing reaches that scale, managers are ethically justified in assuming full readiness."
        ],
        correctAnswer: 2,
        explanation: "A long testing period does not prove readiness if it does not capture the real operating conditions that matter on launch day."
      },
      {
        question: "Some baggage handlers later said they had mostly been shown around the terminal rather than fully prepared for real procedures. Why is that ethically serious?",
        options: [
          "Because training concerns matter only in human resources, not in engineering or project ethics.",
          "Because staff discomfort is less important than meeting a public opening date.",
          "Because operators can learn critical procedures only after passengers begin arriving.",
          "Because a complex public system is not responsibly launched if the people running it cannot perform under real conditions."
        ],
        correctAnswer: 3,
        explanation: "Training is part of operational readiness. If staff are not ready, the system is not ready."
      },
      {
        question: "A project manager knows that parking access, security delays, baggage handling, and passenger wayfinding still have unresolved operational dependencies. What should the project manager do before approving full launch?",
        options: [
          "Approve the date and let departments solve issues independently during live operations.",
          "Reassess readiness across the whole operating chain, activate contingency plans, and recommend phased opening or delay if risks remain high.",
          "Narrow the readiness review to the baggage software because other issues are not technical enough.",
          "Leave the decision entirely to public-relations leadership because passenger expectation is now the main risk."
        ],
        correctAnswer: 1,
        explanation: "Project managers are responsible for whole-system readiness, not just milestone completion."
      },
      {
        question: "Why was listening to frontline staff and unions ethically important in Heathrow T5?",
        options: [
          "They were close to daily operations and could identify practical weaknesses that senior planning teams might miss.",
          "Their role was mainly symbolic because only executives understand whole-system risk.",
          "Stakeholder listening matters only after the first public complaint.",
          "Union concerns should be separated from readiness decisions to keep the launch objective."
        ],
        correctAnswer: 0,
        explanation: "Stakeholder management matters most when people closest to the work are warning about operational weakness before the public is affected."
      },
      {
        question: "The baggage system did not fail only because one belt stopped. It involved conveyor issues, information problems, performance limits, and operational confusion. Which ethical lesson follows?",
        options: [
          "The main responsibility belonged to passengers who chose to check bags on opening day.",
          "Large systems should be judged mainly by construction completion rather than operational performance.",
          "Complex-system approval must include realistic load, interface behavior, human procedures, and cutover controls, not one isolated technical check.",
          "High technology always creates unavoidable opening chaos in airports."
        ],
        correctAnswer: 2,
        explanation: "For complex public systems, ethics requires whole-system thinking instead of narrow technical optimism."
      },
      {
        question: "An engineer believes the terminal is being presented as ready when unresolved operational risks remain. Internal meetings downplay the concern because the opening date is close. What should the engineer do first?",
        options: [
          "Document the risks, raise them through authorized channels, and keep escalating if readiness concerns are ignored.",
          "Stay silent because launch timing is a management matter rather than an engineering matter.",
          "Wait until passengers are affected so the concern will be easier to prove.",
          "Publicly accuse the project team immediately without building a technical record."
        ],
        correctAnswer: 0,
        explanation: "The first ethical step is documented internal reporting. Escalation becomes stronger if serious public harm remains likely and the warnings are ignored."
      },
      {
        question: "Heathrow and British Airways promoted Terminal 5 as a world-class opening, yet passengers experienced confusion, missing bags, and cancelled flights almost immediately. Why did this damage public trust so strongly?",
        options: [
          "Because airport projects are always judged more harshly than other infrastructure.",
          "Because once any public project fails, trust can never return.",
          "Because public trust depends only on architectural appearance and media messaging.",
          "Because the gap between promised readiness and actual user experience suggested that leadership overstated operational preparedness."
        ],
        correctAnswer: 3,
        explanation: "Trust depends on whether public promises about readiness match the real service people receive."
      },
      {
        question: "What would have been the most ethically defensible alternative to the Big Bang launch strategy?",
        options: [
          "Keep the full launch but add more apology messaging in case disruption occurs.",
          "Start with a phased or limited rollout, monitor the system under live conditions, train staff further, and expand only after stability is demonstrated.",
          "Shift responsibility to vendors and proceed because integrated systems always require some public disruption.",
          "Reduce transparency so early problems do not generate panic or reputation damage."
        ],
        correctAnswer: 1,
        explanation: "A phased launch reduces the number of people exposed while the organization learns whether the system can operate reliably."
      },
      {
        question: "A senior leader says, 'No one died, so Heathrow T5 is a project failure, not an ethics case.' Which response best matches engineering ethics?",
        options: [
          "Ethics applies only when fraud is proven in court.",
          "The case is mainly about customer-service quality, not professional duty.",
          "Ethics still applies because public-facing systems can cause serious avoidable disruption, stress, and loss of trust when launched irresponsibly.",
          "Ethics is irrelevant once compensation has been paid."
        ],
        correctAnswer: 2,
        explanation: "Public welfare includes major avoidable disruption in systems that thousands of people depend on, not only physical injury."
      },
      {
        question: "On opening day, operations managers must decide whether to keep accepting large volumes of checked bags even though the baggage system is falling behind and transfer-bag data is unreliable. What is the most ethical basis for the decision?",
        options: [
          "Keep accepting normal volume so the launch appears stable for as long as possible.",
          "Prioritize the published schedule because baggage recovery can happen later.",
          "Limit operations to what can be handled safely and reliably, even if that means reducing service and informing passengers immediately.",
          "Continue full service unless regulators issue a formal shutdown order."
        ],
        correctAnswer: 2,
        explanation: "When reliable operation is no longer possible, responsible leaders reduce scope rather than pretend the system is still working."
      },
      {
        question: "Before launch, staff complain about parking access, security entry, terminal layout, and unloading procedures. What should business analysts have done with that information?",
        options: [
          "Translate it into concrete operational requirements, failure scenarios, and readiness criteria rather than treating it as informal noise.",
          "Exclude it because business analysis should focus on software features rather than operations.",
          "Save it for post-launch lessons learned so the opening is not delayed.",
          "Treat it as a labour-relations issue with little relevance to passenger outcomes."
        ],
        correctAnswer: 0,
        explanation: "Operational complaints can be requirements evidence when they point to predictable failure modes in live service."
      },
      {
        question: "Why did ignoring staff and union concerns conflict with integrity in this case?",
        options: [
          "Integrity mainly concerns financial disclosure, not operational decisions.",
          "Once formal testing is complete, integrity no longer requires questioning readiness.",
          "Integrity means defending the announced date consistently so the organization looks confident.",
          "Integrity required leaders to judge readiness honestly instead of dismissing warnings that challenged the preferred launch story."
        ],
        correctAnswer: 3,
        explanation: "Integrity in project ethics means being honest about readiness, especially when stakeholder evidence is inconvenient."
      },
      {
        question: "By the fifth day, about 250 flights had been cancelled and around 15,000 bags were backlogged. What does accountability require after a failure on that scale?",
        options: [
          "Explaining that complex systems are unpredictable and moving on once media attention fades.",
          "Accepting responsibility, compensating affected passengers, correcting systems and procedures, and learning from the failure before scaling operations further.",
          "Focusing only on which employee made the first mistake on opening day.",
          "Treating the event as unavoidable because the building eventually operated later."
        ],
        correctAnswer: 1,
        explanation: "Accountability is broader than blame. It includes correction, compensation, and organizational learning."
      },
      {
        question: "In a readiness meeting for a public-facing terminal, which question best reflects ethical judgment?",
        options: [
          "Will the opening ceremony and media coverage reinforce the brand strongly enough?",
          "Can the terminal operate reliably for real passengers, staff, baggage, and flights at expected load, with contingencies if parts fail?",
          "Have enough senior leaders committed publicly that cancellation is now impossible?",
          "Are contractual milestone payments protected even if operations remain uncertain?"
        ],
        correctAnswer: 1,
        explanation: "The ethically relevant question is whether real users can be served reliably, not whether the launch commitment is already public."
      },
      {
        question: "External deadline pressure and public image concerns are increasing. Which principle most directly limits the decision to open?",
        options: [
          "Large projects should be completed exactly as scheduled whenever possible.",
          "Risk belongs mainly to operators once the facility is handed over.",
          "A complex public system should be launched only when it is reasonably ready, tested, and operationally reliable for the people who depend on it.",
          "Reputation damage becomes the main ethical issue once a date has been announced."
        ],
        correctAnswer: 2,
        explanation: "Schedule pressure matters, but launch approval is ethically limited by readiness, reliability, and stakeholder protection."
      },
      {
        question: "On opening morning, queues are growing, the baggage system is unstable, and passengers cannot get clear answers. What should the crisis team do first?",
        options: [
          "Activate the disruption plan: slow or reduce operations if needed, deploy visible support staff, and give frequent, truthful updates across channels.",
          "Say as little as possible until every technical cause is confirmed.",
          "Keep normal operations running unchanged so confidence is not shaken.",
          "Focus only on the root-cause investigation because passenger communication can wait."
        ],
        correctAnswer: 0,
        explanation: "Crisis management is about protecting people during failure, not only diagnosing the technical cause in the background."
      },
      {
        question: "What is the strongest final engineering ethics lesson from Heathrow Terminal 5?",
        options: [
          "Complex infrastructure mainly fails because staff resist change, so management should centralize decisions more tightly.",
          "If a project has been expensive and heavily tested, it should usually open on time to protect public confidence.",
          "The main lesson is simply that baggage technology is unreliable in airports.",
          "A complex public system is not a success at launch unless readiness, training, stakeholder input, communication, and risk control are strong enough to protect the people using it."
        ],
        correctAnswer: 3,
        explanation: "Project success is ethical only when the people who depend on the system are protected by real operational readiness."
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
        question: "An ESA engineer reviewing the Ariane 5 pre-launch checklist notices that the inertial reference software was taken unchanged from Ariane 4. Which action best reflects professional responsibility?",
        options: [
          "Trust the software since Ariane 4 had a clean flight record across multiple launches.",
          "Require revalidation of the reused software under Ariane 5's actual flight profile and operating conditions.",
          "Ask the payload team to confirm satellite mass before approving the software.",
          "Submit a report to management and wait for a decision without taking independent action."
        ],
        correctAnswer: 1,
        explanation: "Professional responsibility requires that safety-critical reused software be revalidated against the specific conditions of the new system — past success on a different rocket is not sufficient."
      },
      {
        question: "Ariane 5 Flight 501 exploded 37 seconds after launch. Investigation revealed that a 64-bit floating-point number representing horizontal velocity was converted to a 16-bit signed integer. What is the direct consequence of this conversion?",
        options: [
          "The value exceeded the 16-bit integer range, causing an operand overflow exception that produced invalid guidance data.",
          "The 64-bit value was too large for flight computer memory, causing the main engine to shut down.",
          "The conversion error caused the payload fairing to open prematurely, destroying the satellites.",
          "The backup SRI attempted a recalculation that overloaded the communication bus."
        ],
        correctAnswer: 0,
        explanation: "The 64-bit horizontal velocity value exceeded the maximum 16-bit signed integer range, triggering an overflow exception. This caused the SRI to shut down and output invalid data that the flight computer misread as guidance commands."
      },
      {
        question: "Both the primary and backup Inertial Reference Systems in Ariane 5 ran identical software. When the primary SRI failed, what happened to the backup?",
        options: [
          "The backup SRI automatically switched to a simpler guidance mode immune to overflow.",
          "The backup SRI detected the primary's failure and sent a safe-state signal to the flight computer.",
          "The backup SRI failed from the same overflow error at almost the same moment, leaving no functioning guidance.",
          "The backup SRI continued operating correctly for another 12 seconds before a separate fault caused it to fail."
        ],
        correctAnswer: 2,
        explanation: "Both SRIs ran the same software and processed the same data. When the primary failed from overflow, the backup failed from the identical cause moments later — a textbook common-mode failure."
      },
      {
        question: "The Ariane 5 design used two identical SRI units as redundancy. Which principle of safety-critical system design does this arrangement violate?",
        options: [
          "Defense in depth — the design lacked more than two protection layers.",
          "Minimum footprint — two identical units doubled the potential attack surface.",
          "Fail-safe design — neither unit was programmed to default to a safe state on exception.",
          "Diverse redundancy — redundant systems should use different designs to avoid failing from the same fault."
        ],
        correctAnswer: 3,
        explanation: "Diverse redundancy requires that backup systems differ in design or implementation so a single fault cannot disable both. Identical software makes both units vulnerable to the same failure mode simultaneously."
      },
      {
        question: "Before launch, the SRI software was tested using data representative of Ariane 4 flight conditions. An engineer proposes that testing with actual Ariane 5 trajectory data is unnecessary. Which response best reflects sound engineering ethics?",
        options: [
          "The engineer is correct — Ariane 4's track record makes additional testing an unjustified delay.",
          "The engineer is wrong — safety-critical software must be validated against the conditions of the specific system it will control.",
          "Testing with Ariane 5 data is preferable but not required, since the software architecture has not changed.",
          "The decision should be left to the project manager, not individual engineers."
        ],
        correctAnswer: 1,
        explanation: "Safety-critical software must be validated against the actual system's operating conditions, data ranges, and edge cases. Past success on a different vehicle does not substitute for context-specific validation."
      },
      {
        question: "A software engineer on the Ariane 5 project discovers the horizontal velocity variable can produce values outside the 16-bit integer safe range during early flight. Her supervisor dismisses the concern, citing Ariane 4 experience. What should she do?",
        options: [
          "Accept her supervisor's judgment — Ariane 4 experience is reliable engineering evidence.",
          "Document the concern in personal notes and raise it again only if asked.",
          "Escalate formally, since engineers bear independent responsibility for safety-critical risks they have identified.",
          "Report the issue to the payload customer, who will suffer the most from a launch failure."
        ],
        correctAnswer: 2,
        explanation: "Engineers have a professional obligation to escalate identified safety risks through appropriate channels, independent of management's initial response. Silence on a known risk is itself an ethical failure."
      },
      {
        question: "A 64-bit floating-point number representing Ariane 5's horizontal velocity was stored in a 16-bit signed integer field with a maximum value of 32,767. Which statement best describes the ethical significance of this limit?",
        options: [
          "Engineers were responsible for knowing the data range the new system would produce and ensuring the code handled out-of-range values safely.",
          "The limit is a hardware constraint that falls outside the scope of software engineering ethics.",
          "The limit was acceptable because no single measurement was expected to exceed 32,767 during early flight.",
          "The limit became a problem only because the backup SRI failed first, amplifying the error."
        ],
        correctAnswer: 0,
        explanation: "Understanding data ranges and designing code to handle values outside safe limits is a core software engineering responsibility. When the system changes, engineers must verify that inherited assumptions still hold."
      },
      {
        question: "Post-accident investigation found that the Ariane 5 organization placed strong confidence in the SRI unit's long operational history on Ariane 4. What ethical risk does this attitude create?",
        options: [
          "Over-reliance on hardware testing leads teams to over-test software as well, wasting resources.",
          "Engineers focused on hardware reliability tend to ignore launch schedules, causing cost overruns.",
          "Hardware confidence always transfers correctly to software, creating no additional ethical risk.",
          "Hardware reliability confidence can lead an organization to under-test or uncritically reuse the software running on that hardware."
        ],
        correctAnswer: 3,
        explanation: "A strong hardware track record can create a culture of false confidence that reduces scrutiny of the software layer. The Ariane 5 investigation found this contributed directly to insufficient software testing."
      },
      {
        question: "After the Ariane 5 explosion, ESA commissioned an independent inquiry board. From an engineering ethics perspective, what is the primary purpose of this investigation?",
        options: [
          "To identify a single person responsible for the failure so disciplinary action can be taken.",
          "To satisfy legal requirements before insurance claims could be filed.",
          "To understand the full chain of technical and organizational causes so the same failure cannot recur.",
          "To produce a public report that reassures the media the investigation is complete."
        ],
        correctAnswer: 2,
        explanation: "Accountability in engineering ethics is primarily about understanding failure causes and preventing recurrence — not individual blame. The goal is a safer engineering culture, not a scapegoat."
      },
      {
        question: "The Ariane 5 SRI software raised an exception on operand overflow and shut down, but its last diagnostic output was misread by the flight computer as valid guidance data. What is the core ethical lesson about exception handling here?",
        options: [
          "Exceptions should be silently suppressed in safety-critical systems to prevent unexpected shutdowns.",
          "Exception handling must be designed so a software fault puts the system into a safe state, not into a more dangerous one.",
          "The SRI shutdown was ethically correct — software exceptions should always result in system halt regardless of context.",
          "Exception handling is a software quality concern, not an engineering ethics concern."
        ],
        correctAnswer: 1,
        explanation: "Fail-safe design requires that exceptions produce clearly safe behavior. The Ariane 5 SRI's diagnostic output being misinterpreted as flight commands shows that safe exception handling must be designed end-to-end, not just at the point of the error."
      },
      {
        question: "The Ariane 5 team reused SRI software from Ariane 4 to save development time. Which statement best explains when software reuse is ethically acceptable in safety-critical engineering?",
        options: [
          "Software reuse is acceptable only when the component is revalidated to confirm it behaves correctly within the new system's actual operating envelope.",
          "Software reuse is always acceptable when the previous system had a clean operational history.",
          "Software reuse decisions are business decisions and fall outside the domain of engineering ethics.",
          "Software reuse is acceptable as long as the hardware components connecting the software remain identical."
        ],
        correctAnswer: 0,
        explanation: "Reuse is an efficiency tool, not a safety shortcut. Every reused safety-critical component must be revalidated in its new context — different vehicle, different data ranges, different failure modes."
      },
      {
        question: "An engineer proposes that all safety-critical numerical conversions in the Ariane 5 SRI be tested with values at, below, and above the maximum range of the target data type. Which principle does this approach directly address?",
        options: [
          "Fail-safe design — the system should default to a safe state when a conversion fails.",
          "Transparency — engineers must be open about the limits of their software.",
          "Professional competence — knowing data type limits is a basic software engineering skill.",
          "Boundary testing — testing edge cases at the limits of valid input is required to identify overflow and similar failures."
        ],
        correctAnswer: 3,
        explanation: "Boundary testing specifically targets the values where failures like overflow occur — at, just below, and just above the valid range. This is the direct preventive measure for the Ariane 5 overflow fault."
      },
      {
        question: "Ariane 5 Flight 501 carried four scientific satellites worth approximately $500 million. The mission had no human passengers, yet the failure is described as an engineering ethics failure. Why?",
        options: [
          "The ethical issue only applies because the satellites belonged to a government agency, not a private company.",
          "Engineering ethics includes responsibility for public investment, institutional trust, and broader impact — not only direct harm to people.",
          "The ethics issue applies because engineers were contractually bound to deliver the payload, making failure a breach of contract.",
          "The failure is not an engineering ethics issue, because ethics applies only when human life is at risk."
        ],
        correctAnswer: 1,
        explanation: "Engineering ethics extends to public trust, responsible use of public investment, and the broader consequences of preventable failures — even when no human passengers are involved."
      },
      {
        question: "During Ariane 5 development, the engineering team assumed horizontal velocity values would remain within the range proven safe for Ariane 4. No one verified this assumption against Ariane 5 flight data. What does this failure most directly illustrate?",
        options: [
          "Poor risk management — the team failed to document their assumptions in the project plan.",
          "Lack of transparency — the team should have published their assumptions in a public report.",
          "Lack of integrity — engineers must verify assumptions against the actual system, not carry them forward unchecked.",
          "Insufficient accountability — management failed to assign responsibility for the assumption."
        ],
        correctAnswer: 2,
        explanation: "Integrity in engineering means honestly examining whether assumptions still hold when the system changes. Accepting inherited assumptions without verification is a failure of intellectual honesty."
      },
      {
        question: "A junior engineer asks why the Ariane 5 software failure is an ethics problem rather than simply a technical problem. Which answer best explains the ethical dimension?",
        options: [
          "When software directly controls a physical system and a software fault can cause catastrophic loss, engineers have an ethical obligation to validate that software rigorously — not merely make it work in typical conditions.",
          "The failure is ethical only because it involved public money from ESA member states.",
          "Software errors are always ethical violations because all software must be bug-free before release.",
          "The ethical dimension arises because the engineers were professionals who were paid to prevent failures."
        ],
        correctAnswer: 0,
        explanation: "The ethical dimension of safety-critical software lies in the obligation to validate beyond typical operation — to actively seek failure modes, especially when the software controls real physical hardware."
      },
      {
        question: "Which set of actions would have most directly prevented the Ariane 5 Flight 501 failure?",
        options: [
          "Replacing all software with hardware control systems to eliminate the risk of software overflow.",
          "Adding more pre-launch testing to hardware sensors and rocket engines.",
          "Hiring additional software engineers to review SRI code for style and documentation quality.",
          "Re-running the SRI software with Ariane 5 flight trajectory values, adding overflow protection, and designing the two SRIs to fail safely and independently."
        ],
        correctAnswer: 3,
        explanation: "Prevention required addressing the actual failure chain: validating the software with real Ariane 5 data, protecting against overflow, and ensuring the redundant SRIs could not fail from the same cause."
      },
      {
        question: "A project manager notes the SRI unit has a proven operational history of over 100,000 hours on Ariane 4 and concludes risk analysis for the SRI is unnecessary. What is wrong with this conclusion?",
        options: [
          "Risk analysis can be skipped only when reliability data exceeds 50,000 hours of operation, not just 100,000.",
          "Operational history from a different system does not transfer to a new system — risk analysis must assess the specific conditions, loads, and edge cases of the new context.",
          "Risk analysis is only required by regulation, so the manager is correct if no regulation specifically covers SRI.",
          "The conclusion is acceptable, because risk analysis should focus on new components, not proven ones."
        ],
        correctAnswer: 1,
        explanation: "Risk analysis is context-specific. A component's reliability record on one system tells you nothing about its behavior when integrated into a different system with different data ranges and operating conditions."
      },
      {
        question: "An exam question asks a student to explain the Ariane 5 failure in terms of engineering ethics. Which answer would receive the highest mark?",
        options: [
          "The failure was caused by a data overflow bug in the SRI software, which the programmers should have caught.",
          "The failure was caused by ESA prioritizing cost savings over safety, leading to insufficient testing.",
          "The failure resulted from an unvalidated assumption about data range, reused software not tested under new conditions, insufficient boundary testing, and identical backup systems that failed from the same cause.",
          "The failure was caused by over-reliance on redundancy, which gave engineers false confidence that the backup SRI would prevent any single-point failure."
        ],
        correctAnswer: 2,
        explanation: "High-scoring ethics answers identify multiple interconnected causes: the unvalidated assumption, the inadequate testing, the common-mode redundancy failure, and the organizational culture behind all three."
      },
      {
        question: "An engineer claims that because the SRI is a black-box unit supplied by a subcontractor, the Ariane 5 team had no responsibility to verify its software behavior under the new flight conditions. Which principle does this claim most directly conflict with?",
        options: [
          "Professional competence — engineers integrating a system component bear responsibility for confirming it behaves correctly in their system, regardless of who originally developed it.",
          "Transparency — the subcontractor should have disclosed all internal software assumptions without being asked.",
          "Accountability — the subcontractor, not the integrating team, is responsible for any component-level failures.",
          "Risk management — the engineering team should have added a third SRI to cover for the subcontractor's potential failures."
        ],
        correctAnswer: 0,
        explanation: "System integration engineers have a professional responsibility to verify that every component behaves correctly within their system — black-box sourcing does not transfer ethical responsibility to the supplier."
      },
      {
        question: "What is the central lesson engineers should take from the Ariane 5 case when designing future safety-critical systems that reuse existing components?",
        options: [
          "Existing components should be replaced with newly developed code on every project to avoid inheriting past assumptions.",
          "Reused components must be tested only if the new project manager specifically requests a safety review.",
          "Reused hardware components carry the most risk, so hardware should be replaced while software can be kept unchanged.",
          "Every reused component must be validated against the actual conditions, data ranges, and failure modes of the new system — past success does not guarantee future safety."
        ],
        correctAnswer: 3,
        explanation: "The core lesson is not 'never reuse' but 'always revalidate.' Reuse is acceptable and efficient only when the component is confirmed to behave safely within the specific context of the new system."
      },
      {
        question: "After the Ariane 5 explosion, the independent inquiry board published its full report, naming the technical cause and recommending changes to validation practices. How does this outcome relate to engineering ethics?",
        options: [
          "Publishing the report was primarily a legal requirement with no direct ethical significance.",
          "The report demonstrates accountability only to the extent that someone was formally disciplined.",
          "Transparent investigation and public reporting are core ethical responsibilities after a major engineering failure — they prevent recurrence and maintain public trust.",
          "The report's ethical value is limited because it was written after the failure rather than before it."
        ],
        correctAnswer: 2,
        explanation: "Transparency after a major failure — honest investigation, public reporting, and systemic recommendations — is an ethical obligation that serves both the engineering community and the public."
      },
      {
        question: "A systems engineer designing a new spacecraft proposes two identical flight computers with the same software. A colleague raises a concern. What is the colleague's most likely concern?",
        options: [
          "Identical hardware costs twice as much to manufacture, violating the principle of cost-proportionate safety.",
          "If both computers run the same software, a single software fault could cause both to fail simultaneously, providing no real redundancy against software-based failures.",
          "Having two identical computers makes it harder to maintain consistent configuration documentation.",
          "Identical computers will produce identical outputs, making it impossible for the system to detect a disagreement between the two units."
        ],
        correctAnswer: 1,
        explanation: "Common-mode failure is the core concern: identical software means both units are vulnerable to the same bug. True redundancy against software faults requires diverse implementations, not physical copies."
      },
      {
        question: "ESA engineers knew that Ariane 5 would carry government-funded scientific satellites representing years of research. From an engineering ethics perspective, what obligation does this create for the engineering team?",
        options: [
          "The high value of public investment strengthens the obligation to apply rigorous validation — not merely meet minimum contractual requirements.",
          "The financial value of the payload is an argument for speed, since delay also has a cost to the public investment.",
          "The obligation rests with ESA management to insure the payload, not with the engineering team to provide additional validation.",
          "Scientific payloads present no greater ethical obligation than any other satellite, because they carry no human passengers."
        ],
        correctAnswer: 0,
        explanation: "Public investment in safety-critical missions creates a heightened engineering obligation to go beyond minimum requirements. The scale of public trust placed in the engineering team demands proportionate rigor."
      },
      {
        question: "In the Ariane 5 SRI, an overflow exception caused the unit to shut down and output its last diagnostic data. The flight computer interpreted this diagnostic data as valid guidance commands. Which design principle was violated?",
        options: [
          "Code reuse — the diagnostic output format should have been changed for Ariane 5.",
          "Transparency — the flight computer should have received a full error report, not just the last data.",
          "Professional responsibility — individual engineers should have owned the exception handling path.",
          "Fail-safe design — the system should have been designed so that an SRI exception produced a clear safe-state signal, not data that could be misread as flight guidance."
        ],
        correctAnswer: 3,
        explanation: "Fail-safe design requires that the failure mode of a component cannot be misinterpreted by the larger system as valid operation. The SRI's exception output being read as flight commands is a direct fail-safe design failure."
      },
      {
        question: "Investigators found that the Ariane 5 failure involved not just a software bug but a culture that did not question inherited assumptions. Which organizational practice best addresses this risk?",
        options: [
          "Prohibiting reuse of all software more than five years old.",
          "Requiring every software component be rewritten from scratch for each new project.",
          "Requiring systematic validation reviews whenever a component is integrated into a new context, explicitly questioning inherited assumptions rather than accepting past success as proof of safety.",
          "Relying on post-launch monitoring to detect software failures early before they escalate."
        ],
        correctAnswer: 2,
        explanation: "The organizational lesson from Ariane 5 is to institutionalize assumption-questioning at integration points. Culture must treat 'it worked before' as a starting point for review, not a conclusion."
      },
      {
        question: "Which statement best summarizes the core engineering ethics lesson of the Ariane 5 Flight 501 failure?",
        options: [
          "Software engineers must never reuse code from previous systems, even when reuse would save time and cost.",
          "When software controls a safety-critical physical system, engineers have a professional obligation to validate it under the specific conditions of that system — past performance does not guarantee future safety.",
          "The failure shows hardware redundancy is sufficient for safety-critical systems as long as hardware components are independently certified.",
          "Engineering ethics requires all software failures be reported publicly within 30 days of a major incident."
        ],
        correctAnswer: 1,
        explanation: "The Ariane 5 case demonstrates that professional responsibility in safety-critical software engineering requires context-specific validation, not reliance on inherited success. The obligation is to confirm safety, not assume it."
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
      },
      {
        question: "A hospital physicist suspects that Therac-25 caused a radiation overdose, but AECL says overdose is impossible and asks the hospital not to make unsupported claims. Which action best fits whistle-blowing and public-safety principles?",
        options: [
          "Document the evidence, report through hospital and manufacturer channels, and escalate to regulators if patients remain at risk.",
          "Stay silent until AECL admits the problem in writing, because the manufacturer has more technical authority.",
          "Blame the operator publicly before completing any technical review so the danger is exposed quickly.",
          "Continue normal treatments because the manufacturer has not issued an official safety alert."
        ],
        correctAnswer: 0,
        explanation: "Serious patient harm requires documented reporting through proper channels, with escalation if the danger is ignored."
      },
      {
        question: "An AECL engineer has already reported repeated injury signals internally, but managers say contacting regulators would be disloyal and would damage the company unless causation is proved with absolute certainty. Which answer best applies moral-duty reasoning?",
        options: [
          "Loyalty to the company requires silence until the company itself approves any outside communication.",
          "Whistle-blowing is unethical unless the engineer can guarantee in advance that outside reporting will succeed.",
          "The engineer's personal motive matters more than whether patients may continue to face serious harm.",
          "If serious patient harm may continue, internal channels have been tried, and documented evidence is persuasive, escalation beyond the organization may become a moral duty."
        ],
        correctAnswer: 3,
        explanation: "When grave public harm is at stake and internal reporting fails, loyalty does not override the duty to prevent further injury."
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
      {
        question: "An engineer repeatedly observes abnormal bridge movement and believes it may endanger the public, but project leaders treat it as normal flexibility. What is the most ethical first response?",
        options: [
          "Ignore the issue because the bridge has not collapsed and normal use is still continuing.",
          "Wait until drivers or pedestrians begin filing formal public complaints about the motion.",
          "Accuse the project team publicly right away, even before making a technical record of the behavior.",
          "Document the observations, report the concern through responsible engineering channels, and request technical investigation."
        ],
        correctAnswer: 3,
        explanation: "The first ethical step is documented internal reporting and technical investigation because public safety may be at risk."
      },
      {
        question: "Suppose internal reports about Galloping Gertie are minimized even though the public continues using the bridge and engineers have documented unusual movement. Which answer best fits whistle-blowing ethics?",
        options: [
          "External disclosure is always unethical if the bridge is still open and no collapse has happened yet.",
          "If serious public harm may occur and documented internal warnings are ignored, stronger escalation beyond the project can become ethically justified.",
          "Once project leaders disagree, the engineer's duty ends because management owns the risk decision.",
          "Public-safety concerns should stay informal so the bridge's reputation is not damaged unnecessarily."
        ],
        correctAnswer: 1,
        explanation: "Ignored internal warnings plus serious public risk strengthen the case for escalation beyond normal channels."
      },
    ]
  },
  {
    caseId: "case-7",
    questions: [
      {
        question: "A hotel is cited for a non-working emergency exit light, but the defect is not corrected before a deadly fire. Which ethical interpretation is strongest?",
        options: [
          "The citation itself was enough to protect the public, even without correction.",
          "Accountability failed because a known life-safety defect was not corrected.",
          "Guests were responsible for finding exits without clear emergency guidance.",
          "Exit lights matter mainly for convenience, not for survival during smoke and panic."
        ],
        correctAnswer: 1,
        explanation: "A known safety defect requires timely correction, especially when lives may depend on it."
      },
      {
        question: "Why is the sentence 'the fire was accidental' too incomplete for an Engineering Ethics answer about the Gulf Hotel?",
        options: [
          "Because accidental events cannot involve ethics once the ignition source is known.",
          "Because the only relevant issue is which guest or worker started the first flame.",
          "Because foreseeable hazards and weak safety systems turned ignition into a public-safety disaster.",
          "Because the age of the building alone explains why the outcome could not be prevented."
        ],
        correctAnswer: 2,
        explanation: "Even if ignition was accidental, the deadly outcome depended on preventable hazards and weak protection."
      },
      {
        question: "Which explanation of the Gulf Hotel fire is too narrow for a full ethics answer?",
        options: [
          "Unsafe storage near the main stairway mattered because it endangered an escape route.",
          "Weak emergency exits and poor guidance worsened evacuation after the fire spread.",
          "Vulnerable occupants increased the duty of care and the seriousness of neglect.",
          "The tragedy was only about one person's smoking, so building safety was secondary."
        ],
        correctAnswer: 3,
        explanation: "The cigarette may have started the event, but unsafe conditions allowed it to become mass harm."
      },
      {
        question: "Why is public safety the central ethical principle in the Gulf Hotel case?",
        options: [
          "People were housed in a building without reliable life-safety protection during a foreseeable emergency.",
          "Public safety applies only because the fire later became well known in Houston.",
          "It is central only if the owner, not the city, was the first to notice the danger.",
          "The main issue was identifying who first saw the smoke, not protecting occupants."
        ],
        correctAnswer: 0,
        explanation: "Occupants depended on the building and the authorities to provide safe escape and basic fire protection."
      },
      {
        question: "After the first mattress fire appeared to be under control, what should hotel management have done to act responsibly?",
        options: [
          "Move the mattress into the closet until morning and check it again later.",
          "Place it near stored supplies so guest rooms remain usable overnight.",
          "Treat the absence of visible flame as proof that the danger is over.",
          "Fully extinguish or remove it and keep it away from exits and flammables."
        ],
        correctAnswer: 3,
        explanation: "A mattress can keep heat inside and reignite, so safe removal or full extinguishment was necessary."
      },
      {
        question: "If inspectors cite a faulty exit light in an occupied hotel, which action best reflects professional responsibility?",
        options: [
          "Record the violation and assume the owner will fix it eventually without follow-up.",
          "Require timely correction and verify it because the defect affects emergency escape.",
          "Treat the issue as minor unless there has already been a previous fatal fire.",
          "Leave the choice to occupants because they accepted a low-cost building."
        ],
        correctAnswer: 1,
        explanation: "Inspection protects people only when the life-safety problem is actually corrected."
      },
      {
        question: "A low-cost hotel houses elderly, disabled, intoxicated, or homeless occupants. What does engineering ethics require in that situation?",
        options: [
          "Stronger attention to life-safety systems because many occupants may have difficulty escaping.",
          "The same minimum attitude toward safety because low-cost lodging cannot do more.",
          "Weaker enforcement unless the occupants themselves file formal complaints first.",
          "No special concern unless the building is newly constructed or recently renovated."
        ],
        correctAnswer: 0,
        explanation: "Vulnerability increases the duty of care because some occupants may have less ability to self-protect."
      },
      {
        question: "Which case fact best shows compounding risk rather than one isolated mistake?",
        options: [
          "The hotel stood in a busy downtown area with many nearby buildings.",
          "A large number of guests happened to be inside that night.",
          "A reigniting mattress, flammable storage, a blocked stairway, and a crowded fire escape.",
          "Some victims were difficult to identify after the disaster."
        ],
        correctAnswer: 2,
        explanation: "Compounding risk appears when ignition, fuel, blocked egress, and weak backup routes are all allowed to interact."
      },
      {
        question: "Why is code enforcement ethically important in the Gulf Hotel case?",
        options: [
          "Written safety rules by themselves are enough to satisfy public welfare.",
          "Safety rules matter only when violations are actually corrected.",
          "Code enforcement mainly protects owners from confusion about maintenance duties.",
          "Older or cheaper buildings should be exempt when upgrades are inconvenient."
        ],
        correctAnswer: 1,
        explanation: "A code that is cited but not enforced does not protect the public in practice."
      },
      {
        question: "Which written-answer claim is weakest?",
        options: [
          "Known hazards were not corrected before people were harmed.",
          "Vulnerable occupants made the duty of care stronger.",
          "The broken exit light mattered because emergency guidance is part of life safety.",
          "Cheap lodging cannot be expected to meet the same safety duties."
        ],
        correctAnswer: 3,
        explanation: "Economic status does not reduce the duty to provide basic life-safety protection."
      },
      {
        question: "A building owner argues that the faulty exit light was minor because the hotel still had a main stairway. What is the strongest ethical response?",
        options: [
          "Once smoke blocks the main route, secondary guidance becomes life-critical.",
          "Exit lighting matters only in buildings that depend on elevators for evacuation.",
          "If one obvious stairway exists, emergency signage becomes mostly optional.",
          "The original citation was enough even if the defect stayed unresolved."
        ],
        correctAnswer: 0,
        explanation: "A single main route can fail during fire, which is exactly why emergency guidance and backup egress matter."
      },
      {
        question: "Out of 133 guests, 55 died and 30 were injured. In an ethics analysis, what does that scale of harm most strongly show?",
        options: [
          "The event was unusually severe, so normal ethics analysis becomes less relevant.",
          "The outcome mainly reflects the unpredictable behavior of individual guests.",
          "The building's protection layers were inadequate for the real occupants inside.",
          "The number matters mostly because it increased media attention after the fire."
        ],
        correctAnswer: 2,
        explanation: "The scale of harm shows that the building's prevention, warning, and escape protections failed the people depending on them."
      },
      {
        question: "Which answer is too narrow for explaining accountability in the Gulf Hotel fire?",
        options: [
          "Hotel management mishandled the mattress near the main egress route.",
          "A known exit-light defect was not corrected before disaster.",
          "Responsible parties failed to act before people were exposed to danger.",
          "Accountability mattered only after the fire, not before it."
        ],
        correctAnswer: 3,
        explanation: "Accountability includes acting on known risks before tragedy, not only explaining events after harm occurs."
      },
      {
        question: "If city authorities know a building serving vulnerable tenants has weak exits, poor signage, and limited suppression, what should they do before another incident occurs?",
        options: [
          "Treat it as an urgent life-safety problem and require correction before occupancy continues.",
          "Assume the occupants accepted those conditions because the lodging was inexpensive.",
          "Postpone action until the next routine budget cycle or inspection window.",
          "Wait for another smaller incident so the danger can be demonstrated more clearly."
        ],
        correctAnswer: 0,
        explanation: "Known conditions that could trap vulnerable occupants require action before disaster, not after it."
      },
      {
        question: "How did integrity fail in the Gulf Hotel case?",
        options: [
          "It failed because no one used technical language to describe smoke spread precisely.",
          "Known safety defects were effectively tolerated instead of being treated seriously.",
          "It failed because the hotel was not aesthetically modernized before the fire.",
          "Integrity did not matter once the citation had been written down."
        ],
        correctAnswer: 1,
        explanation: "Integrity in professional judgment means not normalizing or overlooking known conditions that threaten life."
      },
      {
        question: "Which answer best applies risk management to the Gulf Hotel fire?",
        options: [
          "Focus only on the person who smoked because the rest followed automatically.",
          "Treat ignition as unfortunate luck and assume the rest could not be controlled.",
          "Identify how smoking, a smoldering mattress, flammables, blocked exits, and vulnerable occupants combined into deadly risk.",
          "Assume old hotels cannot be made safer in any meaningful way."
        ],
        correctAnswer: 2,
        explanation: "Risk management looks at interacting hazards and tries to reduce them before they combine into harm."
      },
      {
        question: "What should hotel management have prioritized long before the fire occurred?",
        options: [
          "Safe storage, functioning exits, and basic fire-prevention controls.",
          "Keeping occupancy high enough to fund future improvements later.",
          "Reducing room-price complaints before addressing life-safety problems.",
          "Marketing the hotel as affordable so guests understood its limitations."
        ],
        correctAnswer: 0,
        explanation: "Management's ethical duty was to maintain the building's safety systems before an emergency exposed their weakness."
      },
      {
        question: "Which answer is too narrow for discussing emergency egress in the Gulf Hotel fire?",
        options: [
          "The blocked main stairway removed the primary escape route.",
          "The crowded fire escape showed that backup routes can fail under pressure.",
          "The non-working exit light made guidance weaker during panic and smoke.",
          "Because a fire escape existed, the evacuation system was basically adequate."
        ],
        correctAnswer: 3,
        explanation: "Having a fire escape on paper does not make egress adequate if routes are blocked, crowded, or poorly marked."
      },
      {
        question: "Why is the prior exit-light citation ethically important?",
        options: [
          "It proves inspectors caused the fire by interfering with the building.",
          "It shows all other hazards became unimportant once a citation existed.",
          "It shows the danger was known and foreseeable before fatalities occurred.",
          "It means the owner no longer had responsibility once the issue was documented."
        ],
        correctAnswer: 2,
        explanation: "A known, unresolved defect strengthens the case that later harm was foreseeable and should have triggered action."
      },
      {
        question: "If professionals cannot say a lodging building is safe in an emergency, which action best matches the course principle that work should be accepted only if safe?",
        options: [
          "Continue occupancy while assuming the building will probably perform adequately.",
          "Do not treat the building as acceptable until life-safety defects are corrected.",
          "Rely on guests to decide whether the risk feels reasonable enough to stay there.",
          "Approve the building if correcting defects would increase operating cost too much."
        ],
        correctAnswer: 1,
        explanation: "Occupied buildings should not be treated as ethically acceptable when basic life-safety defects remain unresolved."
      },
      {
        question: "Which answer is weakest if you are asked to discuss vulnerable stakeholders in the Gulf Hotel case?",
        options: [
          "Some occupants had limited ability to escape quickly once smoke spread.",
          "Many occupants had little power to demand safer conditions before the disaster.",
          "Their vulnerability made the duty of care stronger, not weaker.",
          "Occupant vulnerability was mostly irrelevant once rooms had been rented."
        ],
        correctAnswer: 3,
        explanation: "Who the occupants were matters ethically because vulnerability changes the seriousness of neglect and the duty to protect."
      },
      {
        question: "What should city authorities have done after the exit-light defect remained unresolved?",
        options: [
          "Follow up, verify correction, and restrict occupancy if necessary.",
          "Assume the written citation itself satisfied public safety requirements.",
          "Allow continued use because the defect concerned only convenience, not survival.",
          "Treat enforcement as optional in low-cost lodging so long as rent remains affordable."
        ],
        correctAnswer: 0,
        explanation: "When a known life-safety defect remains unresolved, authorities must do more than document it."
      },
      {
        question: "A student is told to analyze the Gulf Hotel fire using ethical reasoning rather than only retelling the story. Which answer best fits that method?",
        options: [
          "Identify one cause, name one person to blame, and stop there.",
          "Identify facts, duties, stakeholders, alternative actions, impacts, and the best protective response.",
          "Focus only on whether the building was old enough to make the disaster understandable.",
          "Discuss profit and affordability only, because ethics is mainly about financial tradeoffs."
        ],
        correctAnswer: 1,
        explanation: "Ethical reasoning is more than retelling facts; it compares responsibilities, options, and consequences for affected people."
      },
      {
        question: "Which final lesson best matches the Engineering Ethics meaning of the Gulf Hotel fire?",
        options: [
          "Small fires are unavoidable, so prevention has natural limits that reduce responsibility.",
          "Public lodging should be judged mainly by affordability and occupancy, not by safety systems.",
          "Public safety requires correcting known hazards before vulnerable people are harmed.",
          "Responsibility belongs only to the person who caused the first flame."
        ],
        correctAnswer: 2,
        explanation: "The main ethics lesson is about foreseeable harm, vulnerability, and the duty to act before disaster."
      },
      {
        question: "A hotel worker knows the emergency exit light is not working and sees that management has not corrected it after inspection. The hotel houses elderly, intoxicated, and low-income occupants. What is the strongest ethical action?",
        options: [
          "Document the hazard, report it to management or inspectors, and escalate if it remains uncorrected.",
          "Ignore it because the hotel is low-cost and the defect may not matter unless a fire starts.",
          "Wait until a fire happens so the seriousness of the danger can be proved clearly.",
          "Treat it as only a maintenance issue with no real ethical importance."
        ],
        correctAnswer: 0,
        explanation: "A known life-safety defect in a building with vulnerable occupants creates a duty to report and push for correction."
      },
      {
        question: "An inspector worries that pressing harder on Gulf Hotel violations will embarrass the city and damage the owner's business. Which response is strongest?",
        options: [
          "Avoid stronger action because bad publicity can harm local jobs and city reputation.",
          "Delay action unless a second inspector sees the same defect during a later fire drill.",
          "Protecting vulnerable occupants matters more than avoiding embarrassment, so unresolved life-safety hazards should be documented and escalated.",
          "Let management decide because inspectors should not interfere once a citation has already been written."
        ],
        correctAnswer: 2,
        explanation: "Public safety outweighs embarrassment or business image when known hazards still threaten vulnerable people."
      }
    ]
  },
  {
    caseId: "case-8",
    questions: [
      {
        question: "During a crowded hotel event, two suspended walkways collapsed into the atrium and killed 114 people. From an Engineering Ethics perspective, what makes the Hyatt Regency case more than only a structural failure?",
        options: [
          "The event happened in a hotel rather than on a bridge or highway, so public expectations were different.",
          "Professional decisions about design review, approval, and communication exposed the public to preventable harm.",
          "The collapse was unusually dramatic, which is why ethics became part of the discussion afterward.",
          "Any structural failure in a modern building automatically becomes an ethics case, even without responsibility issues."
        ],
        correctAnswer: 1,
        explanation: "The case is ethical because professional judgment and approval decisions affected public safety in a crowded space."
      },
      {
        question: "Why was the change from continuous hanger rods to split rods ethically important in the Hyatt case, not just technically different?",
        options: [
          "It made the final construction drawings longer and more difficult to coordinate across firms.",
          "It changed the appearance of the suspended walkways, which affected architectural expectations.",
          "It changed the load path and doubled the load on the upper walkway connection.",
          "It shifted the project from ordinary engineering into experimental architecture."
        ],
        correctAnswer: 2,
        explanation: "The change mattered because it affected how load was carried through a critical connection that should have been recalculated."
      },
      {
        question: "Which explanation of the Hyatt Regency collapse is too narrow for a good Engineering Ethics exam answer?",
        options: [
          "The case involved communication, review, and approval failures as well as a technical design problem.",
          "The disaster violated public safety because unsafe work reached a crowded public space.",
          "The change in rod arrangement should have triggered new checking of the connection strength.",
          "The collapse was only the fabricator's fault because the fabricator suggested the final detail."
        ],
        correctAnswer: 3,
        explanation: "The fabricator proposed the change, but engineers still had a duty to verify the safety-critical connection."
      },
      {
        question: "What is the clearest ethical meaning of the engineer's seal on structural documents in a case like Hyatt Regency?",
        options: [
          "It signals professional responsibility for approved engineering work unless limits are clearly stated.",
          "It shows that the engineer reviewed the drawing format and general presentation only.",
          "It transfers responsibility to the contractor once construction begins in the field.",
          "It means that later design changes do not need additional engineering verification."
        ],
        correctAnswer: 0,
        explanation: "A professional seal carries accountability for the adequacy of approved engineering work."
      },
      {
        question: "A fabricator proposes a connection detail that is easier to build, but the project is under fast-track schedule pressure and the revised detail may affect structural load. What should the responsible engineer do first?",
        options: [
          "Accept the change if it helps the schedule, because constructability is usually the contractor's issue.",
          "Document the change, recalculate the connection, and verify safety before approval.",
          "Treat the detail as field-level paperwork and leave it to be checked after installation.",
          "Approve the change verbally and request written confirmation only if visible concerns appear later."
        ],
        correctAnswer: 1,
        explanation: "A safety-critical design change must be checked before approval, even when schedule pressure is intense."
      },
      {
        question: "Which answer best applies the course principle of 'approve work only if safe' to the Hyatt Regency case?",
        options: [
          "Approval was acceptable because the original walkway concept had already been reviewed earlier in the project.",
          "Approval was acceptable if the revised connection looked buildable and the opening date was close.",
          "The revised connection should not have been approved until the changed load path and strength were verified.",
          "Approval was mainly the owner's concern because the owner would be responsible for public occupancy."
        ],
        correctAnswer: 2,
        explanation: "Ethical approval depends on the safety of the final built detail, not only the safety of the original concept."
      },
      {
        question: "A project manager realizes no one can clearly explain who checked a revised walkway detail that may affect the load path. Which response best reflects the engineer's communication duty?",
        options: [
          "Stop the assumption chain, identify who is responsible, and document verification before work proceeds.",
          "Treat the uncertainty as normal because fast-track projects rarely have perfectly clear review paths.",
          "Let the fabricator continue because shop drawings mainly belong to the construction side of the project.",
          "Wait for an inspector to discover the problem later, since inspection exists for that purpose."
        ],
        correctAnswer: 0,
        explanation: "Safety-critical communication means responsibility must be clear before people are exposed to the result."
      },
      {
        question: "Which answer is weakest if someone explains the Hyatt collapse by focusing on the crowd in the atrium?",
        options: [
          "Normal public use should have been expected in a hotel atrium and designed for safely.",
          "A crowded event increased the stakes because many people were exposed to the same structural risk.",
          "The crowd revealed whether the final built connection could handle expected public use.",
          "People dancing were the true cause, so design review and approval failures were secondary."
        ],
        correctAnswer: 3,
        explanation: "The crowd was normal use. The ethical failure was letting an unsafe connection reach the public."
      },
      {
        question: "A reviewer says shop drawings are basically construction paperwork and do not deserve deep engineering attention. What is the strongest ethical response?",
        options: [
          "That is reasonable if the original design concept was mathematically sound and professionally sealed.",
          "Shop drawings can contain safety-critical load-path changes, so treating them as paperwork is dangerous.",
          "Shop drawings belong to the fabricator, so only fabrication staff should assess their safety implications.",
          "Shop drawings matter ethically only when the architect, not the engineer, requests a visual change."
        ],
        correctAnswer: 1,
        explanation: "In Hyatt, the critical change appeared in the shop-drawing process, which is why review could not be superficial."
      },
      {
        question: "If an engineer allows a safety-critical detail to move forward because someone else probably checked it, which ethical principle is most directly violated?",
        options: [
          "Confidentiality to the client, because uncertainty should stay inside the project team.",
          "Cost efficiency, because duplicated checking can slow progress unnecessarily.",
          "Innovation, because engineering progress requires tolerance for uncertain details.",
          "Integrity in professional judgment, because approval creates a false appearance of safety."
        ],
        correctAnswer: 3,
        explanation: "Integrity means not allowing uncertain safety-critical work to appear verified when it has not been."
      },
      {
        question: "Which answer is too narrow for explaining the Hyatt Regency collapse in an ethics course?",
        options: [
          "The collapse occurred in a crowded public space where public safety should have been paramount.",
          "The split-rod detail changed the load path and should have been recalculated before approval.",
          "The rods failed, so the case is mainly about metal strength rather than professional judgment.",
          "Communication and approval failures helped let an unsafe design detail reach the public."
        ],
        correctAnswer: 2,
        explanation: "The technical mechanism matters, but the ethics lesson is about why an unsafe mechanism was approved."
      },
      {
        question: "From an accountability perspective, why did the Hyatt case become professionally serious after the collapse?",
        options: [
          "Accountability required identifying approval failures, disciplining misconduct, and improving future practice.",
          "The case became serious only because civil lawsuits made the event financially expensive.",
          "It became serious mainly because the hotel's reputation suffered in the national press.",
          "Accountability meant only proving which individual first suggested the split-rod detail."
        ],
        correctAnswer: 0,
        explanation: "Accountability includes responsibility, correction, discipline, and learning after failure."
      },
      {
        question: "A reviewer cannot tell whether final calculations still match a revised shop-drawing connection detail. What should the reviewer do before fabrication continues?",
        options: [
          "Assume the original design calculations still control unless the contractor reports a visible problem.",
          "Pause approval and require explicit recalculation or documented confirmation before proceeding.",
          "Let field crews decide whether the connection looks strong enough during installation.",
          "Approve the detail with a note that it should be watched after the hotel opens."
        ],
        correctAnswer: 1,
        explanation: "If the final detail may change load behavior, approval must stop until the safety check is explicit."
      },
      {
        question: "Why is blaming only the fabricator incomplete in the Hyatt Regency case?",
        options: [
          "Because the fabricator had no role in proposing any practical changes to the structure.",
          "Because hotel ownership always carries exclusive responsibility for public safety in occupied spaces.",
          "Because engineers still had a duty to review and verify safety-critical changes before approval.",
          "Because once a shop drawing exists, legal responsibility automatically shifts away from the design engineer."
        ],
        correctAnswer: 2,
        explanation: "The fabricator suggested the change, but engineering responsibility for checking structural safety remained."
      },
      {
        question: "Suppose an engineer has raised concern internally several times about an unchecked load-path change, but project leaders dismiss it to avoid delay while the public opening approaches. Which answer best fits whistle-blowing ethics?",
        options: [
          "Go public immediately even if the concern is undocumented, because urgency matters more than evidence.",
          "Drop the issue because management, not engineering staff, owns the final project schedule.",
          "Wait until after opening because actual use will show whether the concern was worth raising.",
          "If serious public harm is possible, internal channels have been tried, and evidence is persuasive, stronger escalation may become ethically justified."
        ],
        correctAnswer: 3,
        explanation: "When grave public harm is at stake and internal channels fail, escalation beyond the project may become a moral duty."
      },
      {
        question: "Which stakeholder list is strongest for the Hyatt Regency case?",
        options: [
          "Hotel guests, workers, engineers, fabricators, contractors, owners, regulators, victims' families, and the public.",
          "Only the structural engineer and the fabricator, because they touched the critical connection detail directly.",
          "Only the people standing on or below the walkways at the time of the event.",
          "Only the hotel owner and the legal teams who dealt with the aftermath of the collapse."
        ],
        correctAnswer: 0,
        explanation: "Engineering decisions affected direct victims and a wider network of people who relied on the structure's safety."
      },
      {
        question: "Which statement about fast-track construction pressure is weakest from an Engineering Ethics perspective?",
        options: [
          "Fast-track delivery can increase the risk of unclear review responsibility and missed coordination.",
          "Cost and time matter, but they do not justify skipping safety-critical verification.",
          "If a project is behind schedule, recalculation can wait until after installation if the detail looks reasonable.",
          "Schedule pressure makes clear communication and documented checking more important, not less important."
        ],
        correctAnswer: 2,
        explanation: "Schedule pressure never removes the duty to verify a safety-critical change before it reaches the public."
      },
      {
        question: "The course emphasizes realistic judgments and estimates. How does that idea apply most directly to Hyatt Regency?",
        options: [
          "Engineers mainly needed to estimate cost accurately, since the construction detail itself was secondary.",
          "Engineers had to judge realistically how the revised connection affected load, capacity, and public risk.",
          "Once the original concept was reviewed, later estimates about the detail were mostly fabrication concerns.",
          "Realistic judgment mattered more to the owner's budget than to the final structural approval."
        ],
        correctAnswer: 1,
        explanation: "Ethical judgment includes realistic assessment of how a changed detail affects safety, not only how it affects cost or speed."
      },
      {
        question: "Why is code compliance ethically important in the Hyatt case?",
        options: [
          "Public structures should not rely on underchecked details that may fall below required strength.",
          "Codes matter mainly because they help divide legal blame after a collapse has already happened.",
          "If a detail looks stable enough to experienced workers, safety margins are less ethically important.",
          "Code compliance is mostly an administrative issue once the building owner has accepted the project."
        ],
        correctAnswer: 0,
        explanation: "Code strength requirements protect the public, so ignoring them or failing to verify them is an ethical failure."
      },
      {
        question: "The Hyatt project had also experienced a roof collapse during construction. What should responsible engineers have done with that warning sign?",
        options: [
          "Treat it as unrelated because one structural issue rarely says anything about another one in the same project.",
          "Focus only on keeping the schedule intact because extra review would delay the hotel opening further.",
          "Assume the roof problem was already isolated and therefore no broader review of safety practice was needed.",
          "Treat it as a reason for deeper structural review and sharper attention to safety-critical details."
        ],
        correctAnswer: 3,
        explanation: "A warning sign in the same project should trigger more caution, not less, especially where public safety is involved."
      },
      {
        question: "Which answer is too narrow for a full exam response about Hyatt Regency?",
        options: [
          "Once the original design was conceptually sound, later detail changes were secondary.",
          "The changed load path should have been recalculated before the connection was approved.",
          "Public safety was violated because an unsafe detail reached a crowded public space.",
          "Communication and approval failures mattered as much as the technical change itself."
        ],
        correctAnswer: 0,
        explanation: "Later detail changes were exactly where the safety-critical failure entered the project."
      },
      {
        question: "From the perspective of professional competence, what is the strongest lesson from the Hyatt Regency case?",
        options: [
          "Engineers should avoid all large atrium designs because unusual public spaces are too difficult to review safely.",
          "Contractors and fabricators should carry the main burden for judging constructability-based safety changes.",
          "Professional competence means checking the original design carefully and trusting later shop details to follow it closely.",
          "Engineers must understand the limits of their assumptions and seek recalculation when a changed detail alters the load path."
        ],
        correctAnswer: 3,
        explanation: "Competence includes recognizing when a change falls outside the safety assumptions of the original design."
      },
      {
        question: "Why was public trust damaged so deeply by the Hyatt collapse?",
        options: [
          "Technical details rarely affect trust unless the public can see the failed connection directly.",
          "People expect public structures to be safe under normal use and to have design changes verified responsibly.",
          "Public trust depends mainly on whether the hotel reopened quickly after the disaster.",
          "Trust was damaged only because the news media focused heavily on the event."
        ],
        correctAnswer: 1,
        explanation: "People rely on engineers to keep public spaces safe, especially when the spaces are designed for crowds."
      },
      {
        question: "Which final conclusion best matches the Engineering Ethics lesson of the Hyatt Regency collapse?",
        options: [
          "Hyatt shows that beautiful public buildings are too risky to justify the engineering effort they require.",
          "The main lesson is that shop drawings should never be changed once the first design concept exists.",
          "Hyatt shows that public safety depends on verified design changes, clear communication, competent review, and accountable approval.",
          "The case proves ethics matters only when criminal guilt is established after a disaster."
        ],
        correctAnswer: 2,
        explanation: "The strongest conclusion connects the technical change to professional duties of communication, review, and public protection."
      }
    ]
  },
  {
    caseId: "case-9",
    questions: [
      {
        question: "The case video argues that safety culture often fails before the accident itself. If managers dismiss repeated technical warnings because responding may delay production or upset shareholders, which ethical interpretation is strongest?",
        options: [
          "Management may set aside technical warnings until losses become financially measurable.",
          "Technical warnings matter only when they already prove that a law was broken.",
          "Ignoring technical warnings turns business pressure into a public-safety risk.",
          "Safety data should be handled later so managers can focus on strategic goals first."
        ],
        correctAnswer: 2,
        explanation: "When warning data concerns serious hazard, ignoring it lets business pressure override safety-critical judgment."
      },
      {
        question: "In Piper Alpha, a North Sea platform fire on July 6, 1988 became far worse when operators wanted shutdown, supervisors refused, and connected platforms kept sending gas. Which principle was most directly violated?",
        options: [
          "Protect confidentiality inside the organization even during an emergency.",
          "Hold public safety and human welfare paramount when life-threatening conditions appear.",
          "Avoid criticizing co-workers in front of others during stressful events.",
          "Respect management hierarchy even if a dangerous operation is still continuing."
        ],
        correctAnswer: 1,
        explanation: "When lives are at stake, safety must override hierarchy and continued production."
      },
      {
        question: "Which explanation of Piper Alpha is too narrow for an Engineering Ethics answer?",
        options: [
          "Miscommunication helped create the disaster.",
          "Continuing to pump gas made the fire worse.",
          "Shutdown authority and safety culture were central issues.",
          "It was only an offshore fire, so ethics is secondary to accident investigation."
        ],
        correctAnswer: 3,
        explanation: "The fire is the technical event, but ethics concerns responsibility, communication, authority, and public safety."
      },
      {
        question: "A senior manager receives a technical report showing that a connected facility may be feeding energy into a hazardous situation, but shutdown would be expensive and publicly visible. What should the manager do first if acting ethically?",
        options: [
          "Treat the report as a safety decision, ask for immediate technical clarification, and prioritize stopping the hazard if the risk is serious.",
          "Delay action until finance confirms the cost of interruption and lost production.",
          "Wait for absolute certainty before authorizing any shutdown that affects output.",
          "Keep the discussion informal so written records do not create legal exposure later."
        ],
        correctAnswer: 0,
        explanation: "Managers in high-risk systems must respond to credible danger as a safety issue, not a public-relations issue."
      },
      {
        question: "Why was the continued gas flow from sister platforms ethically significant in Piper Alpha?",
        options: [
          "It mattered mainly because it complicated later insurance claims and cost allocation.",
          "It showed that offshore systems are naturally too complex to be meaningfully controlled.",
          "It increased the severity of a known hazard by feeding energy into a burning platform.",
          "It proved only that operators on nearby platforms lacked enough technical skill."
        ],
        correctAnswer: 2,
        explanation: "Continuing to feed gas into a fire showed a failure to stop a known escalating hazard."
      },
      {
        question: "What is the strongest ethical lesson about shutdown authority from this case?",
        options: [
          "Shutdown power should remain only with distant executives because they see the whole business picture.",
          "People closest to a serious hazard should have clear authority to stop unsafe operations.",
          "Shutdown should happen only after the financial impact is approved by senior leadership.",
          "Operators should recommend shutdown, but production should continue until investigation is complete."
        ],
        correctAnswer: 1,
        explanation: "When danger is immediate, people nearest the hazard need authority to stop conditions from getting worse."
      },
      {
        question: "An organization says it has a strong safety culture because it has written policies, annual training slides, and a slogan about zero harm. Which answer is weakest?",
        options: [
          "A strong safety culture also depends on whether technical warnings are heard in real decisions.",
          "Real culture is shown by whether risky operations can actually be stopped.",
          "Written policy matters, but it is not enough if production pressure dominates conduct.",
          "Once safety policies exist on paper, the culture problem is mostly solved."
        ],
        correctAnswer: 3,
        explanation: "Culture is revealed by actual decisions under pressure, not by slogans or paperwork alone."
      },
      {
        question: "An engineer believes an unresolved safety issue could endanger workers or the public, but worries that pushing the issue may damage promotion chances. Which response best fits the course principle discussed in the video?",
        options: [
          "Public safety should come before personal career development, so the concern should be documented and raised.",
          "Career protection should come first until another engineer agrees with the concern in writing.",
          "The engineer should stay silent unless already legally required to speak up.",
          "Personal risk means the concern is now mainly a management issue rather than an engineering one."
        ],
        correctAnswer: 0,
        explanation: "The course message is that career pressure does not excuse silence when serious safety risk may exist."
      },
      {
        question: "A process engineer and an operations supervisor disagree about whether an abnormal condition is serious, and the situation is getting worse. Which response best matches good communication ethics in a high-risk system?",
        options: [
          "Let each department keep its own view until the event is over so confusion does not spread.",
          "Avoid technical language so decision makers are not overwhelmed by operational detail.",
          "Make the risk explicit, clarify who has authority, and communicate the consequence of not shutting down.",
          "Focus on avoiding blame during the emergency and leave technical disagreement for later."
        ],
        correctAnswer: 2,
        explanation: "Safety-critical communication must connect the condition, the consequence, and the required decision."
      },
      {
        question: "If internal safety concerns have been reported through normal channels and leaders keep dismissing them while serious public harm remains possible, what is the best ethical next step?",
        options: [
          "Say nothing further because continued reporting will look disloyal.",
          "Keep documented evidence, continue authorized escalation, and go beyond internal channels if necessary to prevent serious harm.",
          "Post accusations publicly right away even if the evidence is incomplete.",
          "Withdraw from the project quietly and assume others will deal with the danger."
        ],
        correctAnswer: 1,
        explanation: "Whistle-blowing becomes stronger when serious harm is possible, internal channels have been tried, and evidence is documented."
      },
      {
        question: "Why is the statement 'management decided, so the engineers are no longer accountable' ethically insufficient?",
        options: [
          "Because management decisions are never relevant in engineering ethics.",
          "Because only the final executive can ever be responsible for a safety failure.",
          "Because accountability matters only after a court decides who is liable.",
          "Because engineers still have duties to communicate danger, document concerns, and resist unsafe approval."
        ],
        correctAnswer: 3,
        explanation: "Professional accountability includes what engineers say, document, and challenge before harm occurs."
      },
      {
        question: "Deborah Grubbe suggests asking whether you would let your own family use a product or be exposed to a system when you know a safety problem is unresolved. What is the main ethical purpose of that test?",
        options: [
          "It forces engineers to reconnect technical work to real human consequences.",
          "It replaces formal risk analysis with personal intuition about danger.",
          "It proves that only family-oriented products need higher safety standards.",
          "It means a design is ethical whenever the engineer feels personally comfortable."
        ],
        correctAnswer: 0,
        explanation: "The question helps engineers stop treating users as abstractions and focus on real human harm."
      },
      {
        question: "Which answer best applies risk management to Piper Alpha?",
        options: [
          "Treat the fire as a rare emergency that could not have been influenced once it began.",
          "Focus only on the initial ignition source, because later system responses are secondary.",
          "Identify how miscommunication, delayed shutdown, and continued gas flow combined into escalating danger.",
          "Assume offshore platforms are so hazardous that detailed prevention planning has limited value."
        ],
        correctAnswer: 2,
        explanation: "Risk management looks at how interacting failures turn a bad event into a catastrophe."
      },
      {
        question: "Which statement about safety culture is weakest from an Engineering Ethics perspective?",
        options: [
          "Safety culture depends on whether managers ask technical teams for input before risk grows.",
          "Safety culture mainly means avoiding bad publicity after an incident.",
          "Safety culture is shown by whether unsafe operations can actually be stopped.",
          "Safety culture is tested when technical warnings conflict with business pressure."
        ],
        correctAnswer: 1,
        explanation: "Safety culture is about protecting people before harm, not only managing reputation afterward."
      },
      {
        question: "A manager in a high-risk operation does not fully understand the significance of abnormal safety data but still dismisses the technical team's concern as overcautious. What is the strongest ethical criticism?",
        options: [
          "The manager's main duty is to protect schedule certainty, not to interpret technical detail.",
          "Managers are entitled to ignore technical disagreement if they hold broader business authority.",
          "The team should stop raising concerns until the manager requests a clearer financial summary.",
          "Competence and humility require leaders to ask what the data means and listen when experts warn of danger."
        ],
        correctAnswer: 3,
        explanation: "Leaders in hazardous systems must know enough to recognize their limits and rely on technical expertise."
      },
      {
        question: "During a worsening emergency, an operator closest to the hazard believes continued operation may kill people, but the chain of command is hesitating. What action best fits the ethics of high-risk engineering?",
        options: [
          "Raise the danger clearly, seek shutdown through responsible channels, and keep pressing because delay can increase harm.",
          "Keep operating normally until written authorization arrives even if conditions deteriorate.",
          "Avoid repeating the concern so management does not think the operator is emotional.",
          "Wait for outside investigators, because operators should not influence production decisions."
        ],
        correctAnswer: 0,
        explanation: "Operators closest to danger have a duty to communicate urgent risk clearly and persistently."
      },
      {
        question: "Why did the Piper Alpha disaster, which killed 168 people, damage public trust so deeply?",
        options: [
          "Public trust was damaged mainly because offshore accidents receive unusual media coverage.",
          "Trust fell only because oil and gas companies are usually unpopular with the public.",
          "People expect engineering organizations to control known risks and stop deadly operations before lives are lost.",
          "Public trust depends mostly on how much compensation is paid after a disaster."
        ],
        correctAnswer: 2,
        explanation: "Trust depends on whether dangerous systems are operated responsibly before disaster happens."
      },
      {
        question: "Which answer about whistle-blowing is most incomplete in a case like Piper Alpha?",
        options: [
          "Whistle-blowing becomes stronger ethically when serious harm is at stake and evidence is documented.",
          "Whistle-blowing is always disloyal, so engineers should avoid it even if internal channels fail.",
          "Internal reporting is usually the first step before outside escalation.",
          "The moral goal of escalation is preventing harm, not punishing an employer."
        ],
        correctAnswer: 1,
        explanation: "Treating whistle-blowing as automatic disloyalty ignores the public-safety reasons that can justify escalation."
      },
      {
        question: "Which stakeholder list is strongest for ethical reasoning in Case 9?",
        options: [
          "Only platform supervisors and executives, because they made the final operational decisions.",
          "Only the operators on Piper Alpha, because they were physically nearest to the fire.",
          "Only shareholders and regulators, because they influence organizational policy.",
          "Operators, engineers, supervisors, nearby platforms, victims' families, company leaders, regulators, and the public."
        ],
        correctAnswer: 3,
        explanation: "The case affected direct victims, decision makers, connected operations, and wider public trust."
      },
      {
        question: "A company argues that stopping production whenever engineers raise a serious safety concern will hurt profit, schedule, and shareholder confidence. Which ethical judgment is strongest?",
        options: [
          "Business goals matter, but they lose priority when they conflict with credible life-safety risk.",
          "Profit should always be ignored completely in engineering decisions.",
          "Engineers should avoid raising concerns unless they can prove disaster is certain.",
          "Shareholder pressure justifies continuing operations until an executive review is complete."
        ],
        correctAnswer: 0,
        explanation: "Engineering ethics does not reject business goals, but it does require safety to set the limit."
      },
      {
        question: "Which answer is too narrow for a full written explanation of Piper Alpha?",
        options: [
          "The case involved miscommunication and weak shutdown authority.",
          "Technical teams should have been heard more seriously.",
          "The disaster can be explained fully by saying that a fire occurred on an oil platform.",
          "Safety culture and accountability were central to the ethical failure."
        ],
        correctAnswer: 2,
        explanation: "A complete ethics answer must connect the event to decisions, authority, warnings, and public safety."
      },
      {
        question: "What should a high-risk organization decide in advance if it wants safety to be the 'showstopper' rather than a slogan?",
        options: [
          "That shutdown decisions should always wait for the highest possible level of financial approval.",
          "That clear stop-work authority, reporting routes, and escalation rules will apply when serious danger appears.",
          "That operators should avoid interrupting production unless media attention is likely.",
          "That safety decisions can remain informal as long as experienced people are on shift."
        ],
        correctAnswer: 1,
        explanation: "Real safety culture requires preplanned authority and escalation rules before an emergency begins."
      },
      {
        question: "Which answer best explains accountability in Case 9?",
        options: [
          "Accountability means mainly identifying which individual is easiest to blame after the disaster.",
          "Accountability begins only once regulators or courts decide whether rules were broken.",
          "Accountability is satisfied if management can show that someone else made the last operational call.",
          "Accountability means taking responsibility for warnings, decisions, and failures to act before harm grows."
        ],
        correctAnswer: 3,
        explanation: "Accountability includes what people do and fail to do when known danger is building."
      },
      {
        question: "What is the strongest final engineering ethics lesson from Piper Alpha and Deborah Grubbe's safety-culture discussion?",
        options: [
          "Safety must be the showstopper: organizations must listen to technical warnings, empower shutdown, and put human life above production pressure.",
          "The main lesson is that managers should make all safety decisions alone so responsibility stays clear.",
          "The most important reform is to reduce documentation so emergency decisions can be made faster.",
          "The case proves that accidents are unavoidable whenever complex systems depend on human communication."
        ],
        correctAnswer: 0,
        explanation: "The enduring lesson is that technical warning, authority, and human life must outrank production pressure."
      }
    ]
  },
  {
    caseId: "case-10",
    questions: [
      {
        question: "A medical technology company claims its device can run many blood tests from a finger-prick sample, but engineers inside the company know the device cannot produce reliable results for most of those tests. Which ethical issue is most directly raised?",
        options: [
          "The company may face a patent dispute if competitors copy its device.",
          "Honesty and patient safety are both violated because false medical claims can affect real health decisions.",
          "The main issue is only financial: investors may lose money if the technology does not work.",
          "The ethical duty to maintain secrecy about proprietary technology outweighs the duty to disclose limitations."
        ],
        correctAnswer: 1,
        explanation: "False medical claims are both an honesty violation and a patient-safety risk, because inaccurate results can affect diagnosis and treatment."
      },
      {
        question: "Theranos used existing commercial third-party laboratory machines for many tests while giving partners, patients, and investors the impression that its own Edison device was producing the results. Which answer best describes the ethical failure?",
        options: [
          "Theranos misled stakeholders about the true method and capability of its technology, which is a violation of transparency and honesty.",
          "Using third-party machines was ethical because all laboratory services use commercial equipment.",
          "The failure was only technical — using different machines does not raise ethical concerns.",
          "Transparency applies only to investors, not to patients or partners."
        ],
        correctAnswer: 0,
        explanation: "The problem was the deliberate impression that Theranos machines were doing the work when they were not — a clear transparency and honesty violation."
      },
      {
        question: "Which of the following is the weakest explanation of the Theranos case as an engineering ethics failure?",
        options: [
          "Theranos promoted medical technology beyond what its engineering and science could reliably support.",
          "Theranos misled patients, partners, investors, and regulators about the accuracy and capability of its device.",
          "Theranos was simply a failed startup that needed more funding and development time before going public.",
          "Theranos violated professional responsibility by using unvalidated technology in a healthcare setting."
        ],
        correctAnswer: 2,
        explanation: "The case was not only about insufficient time or money — it involved deliberate deception and patient-safety risks that distinguish it from an ordinary failed startup."
      },
      {
        question: "A Theranos employee discovers that blood tests being reported to patients are being run on commercial third-party machines, while company communications imply the Edison device is producing all results. The employee raises the concern internally but is told to stay quiet and reminded of their confidentiality agreement. What is the most ethical next step?",
        options: [
          "Accept management's decision because confidentiality agreements have legal force.",
          "Report the concern to a supervisor once more and then permanently drop it.",
          "Destroy the evidence to prevent personal legal risk.",
          "Document the evidence, exhaust internal channels, and escalate to a regulator or appropriate authority if patients remain at risk."
        ],
        correctAnswer: 3,
        explanation: "When serious patient-safety risk is involved and internal channels are blocked, documented escalation to regulators is ethically justified."
      },
      {
        question: "A medical device company asks its engineers to begin patient testing for a blood-testing product whose accuracy has not been independently validated. Engineers know that the device cannot reliably perform several of the tests claimed. Which principle of engineering ethics most directly applies?",
        options: [
          "Engineers should protect intellectual property by proceeding quietly.",
          "Professional responsibility requires that medical devices be validated before use on real patients, and known limitations must be disclosed.",
          "Engineers must follow management directives unless the device is formally recalled.",
          "Validation is a regulatory requirement but not an engineering ethics duty."
        ],
        correctAnswer: 1,
        explanation: "Engineering ethics requires honest claims about what technology can do, especially when patient welfare is at stake. Products should not be released if known to be unsafe."
      },
      {
        question: "After the Wall Street Journal published its investigation and the FDA inspected Theranos, the company responded by publicly defending its technology and minimizing the reported problems rather than correcting them. Which ethical principle most directly applies?",
        options: [
          "The company had a right to defend itself under freedom of speech.",
          "Transparency was violated only because the FDA was not informed earlier.",
          "Accountability was violated because leadership protected the company image instead of correcting patient-safety risks.",
          "The company was within its rights because no criminal charges had yet been filed."
        ],
        correctAnswer: 2,
        explanation: "Accountability means accepting responsibility and correcting harm, not defending reputation when safety problems are confirmed."
      },
      {
        question: "Theranos required employees to sign confidentiality agreements that prevented them from discussing the technology's limitations, even with family members. Former employees who raised concerns faced pressure, retaliation, or termination. Which answer best applies engineering ethics to this situation?",
        options: [
          "Confidentiality becomes unethical when it is used to hide serious safety risks from patients and regulators.",
          "Confidentiality agreements are always ethical because companies have the right to protect trade secrets.",
          "Employees who signed agreements have no ethical obligation to report safety concerns.",
          "Confidentiality only creates ethical problems if it prevents disclosure to investors."
        ],
        correctAnswer: 0,
        explanation: "Confidentiality is legitimate for trade secrets but loses ethical standing when used to suppress information that places patients at serious risk."
      },
      {
        question: "Inside Theranos, employees who questioned the technology or raised safety concerns were fired, pressured, or intimidated. Which answer best explains why this represents an engineering ethics failure beyond the technical problems?",
        options: [
          "The work culture was only a management issue unrelated to engineering ethics.",
          "Fear and retaliation are expected in competitive technology startups.",
          "The culture was unethical only if employees were required to falsify written records.",
          "A culture of fear and retaliation prevented honest technical communication, allowing deception to continue and patient risk to grow."
        ],
        correctAnswer: 3,
        explanation: "Engineering ethics requires a culture where concerns can be raised safely. Suppressing technical truth is an ethical failure that compounds the original deception."
      },
      {
        question: "Tyler Shultz, a Theranos employee, chose to expose the company's deceptive practices despite legal risk from his confidentiality agreement. He provided information to the Wall Street Journal investigation. Which statement best describes whether his action was ethically justified?",
        options: [
          "It was not justified because he violated his contract.",
          "It was partially justified, but he should have waited for formal criminal charges first.",
          "It was ethically justified because he documented concerns, faced ignored internal channels, and acted to prevent serious harm to patients.",
          "It was justified only if he had medical credentials to evaluate blood-testing accuracy."
        ],
        correctAnswer: 2,
        explanation: "Whistle-blowing is ethically justified when serious harm is possible, evidence is documented, and internal channels are exhausted or ignored."
      },
      {
        question: "Which statement best explains why patient safety is the central ethical concern in the Theranos case?",
        options: [
          "Patient safety matters only if the FDA has formally approved the product.",
          "Blood-test results can directly influence diagnosis, medication dosage, and urgent treatment decisions, making accuracy an ethical requirement.",
          "Patient safety is important but less urgent than investor protection in technology fraud cases.",
          "The central ethical concern is investor deception, because patients were not required to use Theranos tests."
        ],
        correctAnswer: 1,
        explanation: "Medical data directly affects treatment decisions — inaccurate results can lead to misdiagnosis, wrong medication, or delayed care."
      },
      {
        question: "What should a responsible executive team have done when multiple medical experts expressed doubts about whether Theranos technology was scientifically validated for the claimed range of blood tests?",
        options: [
          "Commission independent validation studies, delay commercial partnerships until reliability was confirmed, and disclose limitations to partners and patients.",
          "Dismiss expert skepticism as bias from competitors who feared disruption.",
          "Continue partnership negotiations because investors and board members were already committed.",
          "Ask marketing to present the technology more carefully without changing the device."
        ],
        correctAnswer: 0,
        explanation: "Responsible oversight requires independent evidence before expanding patient-facing services — reputation and investor confidence cannot replace technical validation."
      },
      {
        question: "Walgreens and Safeway agreed to major partnerships with Theranos based on claims about the Edison device's capabilities. Later investigations revealed that many tests were not performed as described. Which answer best applies professional ethics to this situation?",
        options: [
          "Walgreens and Safeway should have been more skeptical before partnering.",
          "The misleading information was acceptable because no formal written guarantees were made.",
          "Business partners cannot expect full technical transparency before signing agreements.",
          "Providing exaggerated or false impressions about product capability to business partners violates honesty and professional integrity."
        ],
        correctAnswer: 3,
        explanation: "Honest and realistic claims about capability are an engineering ethics requirement that extends to all stakeholders, including commercial partners."
      },
      {
        question: "A student writes the following explanation: 'Theranos failed because Elizabeth Holmes was overconfident about her vision.' Which answer correctly identifies the weakness of this explanation?",
        options: [
          "The explanation is too long.",
          "The explanation focuses on personality rather than the systematic ethical failures: false claims, patient-safety risks, suppressed concerns, and deception of stakeholders.",
          "The explanation is correct and complete.",
          "The explanation is only wrong because it does not mention the FDA."
        ],
        correctAnswer: 1,
        explanation: "An engineering ethics explanation must focus on duties, failures, and impacts — not on the personal characteristics of one leader."
      },
      {
        question: "Theranos continued to expand partnerships, launch in retail pharmacies, and attract investor funding even after employees and early testers knew the Edison device had serious accuracy problems. Which answer best identifies the ethical failure?",
        options: [
          "The ethical failure was poor strategic timing.",
          "The failure was technical, not ethical, because the team continued to work on improvements.",
          "Integrity was violated because the company continued promoting and deploying technology it knew was not performing as claimed.",
          "The failure was limited to investor relations, because patients were not directly informed of the problems."
        ],
        correctAnswer: 2,
        explanation: "Integrity means not hiding known defects. Expanding commercial use while knowing the technology was inaccurate is a clear violation of this principle."
      },
      {
        question: "Theranos repeatedly claimed its technology could run hundreds of tests from a single finger-prick sample. Medical specialists in blood testing had long argued this was scientifically implausible for many test types. Which engineering ethics principle was most directly violated?",
        options: [
          "Engineers and professionals must be honest and realistic in claims and estimates, and must understand and acknowledge the limits of their technology.",
          "Engineers must protect shareholder value by supporting bold product claims.",
          "Medical specialists outside the company have no standing to challenge a startup's internal claims.",
          "The company's duty was only to patent its technology, not to validate it independently."
        ],
        correctAnswer: 0,
        explanation: "Claiming capability beyond what technology can reliably achieve violates the duty to be honest and realistic in professional claims and estimates."
      },
      {
        question: "Which answer is the most incomplete explanation of why Theranos is an engineering ethics case?",
        options: [
          "Theranos violated the principle that medical devices must be validated before use on real patients.",
          "Theranos shows that honesty and transparency are essential in medical technology.",
          "Theranos demonstrates that whistle-blowing can be ethically justified when internal concerns are suppressed.",
          "Theranos was unethical only because it eventually went bankrupt and investors lost money."
        ],
        correctAnswer: 3,
        explanation: "Financial failure is not the source of the ethical problem — the deception, patient-safety risks, and suppressed concerns are the real ethical failures."
      },
      {
        question: "The FDA receives reports that a medical blood-testing company's results may be inaccurate and that several patients received incorrect health information. What is the most important first step the regulator should take?",
        options: [
          "Wait for the company to self-report, because companies are responsible for their own compliance.",
          "Inspect the company's laboratory processes, demand documentation of test validation, and assess whether patient-safety risks require immediate action.",
          "Issue a public warning before investigating, to protect the media's right to know.",
          "Defer to investors to determine whether the company's technology is reliable."
        ],
        correctAnswer: 1,
        explanation: "Regulatory oversight exists to protect public safety — investigations should follow evidence of risk, not wait for voluntary disclosure."
      },
      {
        question: "Patients who used Theranos blood-testing services at Walgreens pharmacies were not told that many of their test results were produced using commercial third-party machines rather than the company's own Edison device. Which ethical principle is most directly violated?",
        options: [
          "Professional competence, because Theranos engineers lacked sufficient training.",
          "Accountability, because patients had no legal basis to challenge the results.",
          "Transparency, because patients were not given accurate information about the method and reliability of their test results.",
          "Whistle-blowing, because patients should have reported the problem to regulators."
        ],
        correctAnswer: 2,
        explanation: "Transparency requires that people affected by a technology — especially in healthcare — know how it works and what its limitations are."
      },
      {
        question: "When Theranos voided thousands of lab results after the FDA inspection and the Wall Street Journal investigation, many patients and partners lost confidence in health-technology startups as a category. Which answer best explains this as an ethics consequence?",
        options: [
          "Public trust in medical technology is harmed when a company presents itself as safe and life-changing while hiding serious accuracy and safety problems.",
          "Public trust was only affected for investors, not patients.",
          "Public trust is not an engineering ethics concern — it is a marketing and public-relations matter.",
          "The damage was limited because only a small number of patients were directly affected."
        ],
        correctAnswer: 0,
        explanation: "Public trust in engineering and medical technology depends on genuine honesty and safety. Deception erodes the trust that makes innovation possible."
      },
      {
        question: "An engineer at a medical diagnostics company discovers that internal validation data shows the device's results are unreliable for 30% of the test types advertised. Senior management says the company will improve accuracy after the product launches. What is the most ethical response for the engineer?",
        options: [
          "Proceed with launch because management has the final decision authority.",
          "Trust management's promise and document nothing, to avoid creating a paper trail.",
          "Resign quietly to avoid personal legal liability.",
          "Formally document the concern in writing, refuse to certify the device as safe, and escalate to senior ethics or compliance channels if ignored."
        ],
        correctAnswer: 3,
        explanation: "Engineers must not approve products they know are unsafe or inaccurate. Formal documentation creates accountability and is a core professional duty."
      },
      {
        question: "Theranos financial projections shown to investors forecast revenues that were never achievable given the actual performance of the technology. Which answer best connects this to engineering ethics?",
        options: [
          "Inflated projections are standard practice in startups and raise no ethical concerns.",
          "The ethical issue was only financial fraud, not engineering ethics.",
          "Honesty requires that claims — including financial forecasts based on technology performance — be realistic and consistent with what the technology can actually achieve.",
          "Honesty applies only to technical specifications, not to financial presentations."
        ],
        correctAnswer: 2,
        explanation: "When financial projections depend on technology capability, exaggerating that capability to investors is an honesty violation under engineering ethics."
      },
      {
        question: "Which statement is the strongest and most complete for a 5-mark engineering ethics exam answer about the main lesson of the Theranos case?",
        options: [
          "Theranos proves that medical startups should not be allowed to operate without a CFO.",
          "Theranos demonstrates that in medical technology, innovation is ethical only when claims are truthful, results are validated, patients are protected, and employees can report safety concerns without fear.",
          "Theranos shows that the FDA needs more funding to inspect all health-technology companies.",
          "Theranos proves that investors must never trust startup projections without detailed audits."
        ],
        correctAnswer: 1,
        explanation: "A strong exam conclusion connects multiple ethical principles and case evidence without reducing the lesson to one institutional fix."
      },
      {
        question: "A student argues: 'Theranos failed only because the FDA did not inspect it early enough.' Which ethical principle does this explanation most overlook?",
        options: [
          "Honesty and professional responsibility, because the company itself had a duty to be truthful about limitations and not deploy unvalidated technology, regardless of regulatory timing.",
          "Public trust, because regulators are the only true protectors of public trust.",
          "Accountability, because the FDA was ultimately responsible for all medical technology approvals.",
          "Transparency, because the FDA should have published all inspection results in real time."
        ],
        correctAnswer: 0,
        explanation: "Regulatory oversight is one system layer, but companies have their own independent ethical duties of honesty and safety that exist with or without enforcement."
      },
      {
        question: "A startup tells its engineers that any concerns about product accuracy must be communicated only through internal confidential channels and may not be shared with regulators, medical professionals, or the public without company approval. Which answer best evaluates this policy from an engineering ethics perspective?",
        options: [
          "The policy is ethical because companies must protect their intellectual property.",
          "The policy is acceptable until a regulatory body issues a formal complaint.",
          "The policy is ethical as long as the company has a legal compliance team.",
          "The policy is ethically problematic because it suppresses engineers' duty to disclose serious risks that could harm patients or the public."
        ],
        correctAnswer: 3,
        explanation: "Internal policies cannot override an engineer's ethical duty to protect public safety. Requiring silence about patient-safety risks conflicts with core engineering ethics duties."
      },
      {
        question: "A student says: 'Theranos violated transparency because the company never published its full validation data.' Another student says: 'Theranos violated honesty because it made claims its technology could not support.' Which answer best evaluates both statements?",
        options: [
          "Only the transparency statement is correct.",
          "Only the honesty statement is correct.",
          "Both statements are correct; the case involved both honesty violations (false claims) and transparency failures (hidden limitations), and these are distinct ethical principles.",
          "Neither statement is correct because the case was primarily about regulatory compliance, not ethics."
        ],
        correctAnswer: 2,
        explanation: "Honesty concerns truthfulness of claims; transparency concerns whether limitations and methods were disclosed to stakeholders. Both were violated in the Theranos case."
      },
      {
        question: "Which statement best describes why public safety must be held paramount in engineering decisions, and how Theranos violated that principle?",
        options: [
          "Public safety is paramount only in physical engineering products, not in software or data-based medical services.",
          "Public safety must be the primary concern in engineering decisions; Theranos violated this because unreliable blood-test results could affect real medical decisions, placing patients at direct risk.",
          "Public safety was not directly violated because Theranos only provided information, not physical treatment.",
          "Public safety is paramount only after formal regulatory approval has been refused."
        ],
        correctAnswer: 1,
        explanation: "Medical data is part of patient care — inaccurate results can affect treatment as directly as a faulty device, so public safety applies fully."
      }
    ]
  }
];

const quizTopics = {
  "case-1": [
    "Deceptive software",
    "Too narrow answer",
    "Engineer refusal",
    "Transparency",
    "Real-world testing",
    "Manager action",
    "Weak compliance claim",
    "Industry trust",
    "Stakeholders",
    "Regulator response",
    "Software ethics",
    "Incomplete explanation",
    "Escalation",
    "Honesty and integrity",
    "Accountability",
    "Ethical compliance",
    "Safe approval",
    "Weak culture claim",
    "Whistle-blowing threshold",
    "Oversight and testing",
    "Correcting claims",
    "Environmental responsibility",
    "Weak integrity claim",
    "Final lesson"
  ],
  "case-2": [
    "Readiness vs launch date",
    "System complexity",
    "Building complete is not ready",
    "Test-to-live cutover",
    "Business analyst escalation",
    "Capacity vs image pressure",
    "Crisis communication",
    "Limits of testing",
    "Training responsibility",
    "Project-manager duty",
    "Frontline stakeholder knowledge",
    "Whole-system approval",
    "Internal escalation",
    "Public trust gap",
    "Phased launch",
    "Public welfare",
    "Limiting operations ethically",
    "Business-analysis duty",
    "Integrity and ignored warnings",
    "Accountability after disruption",
    "Ethical readiness question",
    "Launch only if ready",
    "Crisis-team first move",
    "Final lesson"
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
    "Software reuse duty",
    "Overflow technical cause",
    "Common-mode failure",
    "Diverse redundancy",
    "Validation requirement",
    "Professional escalation",
    "Data range ethics",
    "Hardware confidence risk",
    "Accountability purpose",
    "Exception handling design",
    "Code reuse conditions",
    "Boundary testing",
    "Public trust",
    "Integrity and assumptions",
    "Safety-critical ethics",
    "Prevention measures",
    "Risk management",
    "Multi-cause explanation",
    "Integration competence",
    "Core lesson",
    "Transparency after failure",
    "Redundancy concern",
    "Public investment obligation",
    "Fail-safe design",
    "Organizational learning",
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
    "Final conclusion",
    "Escalating harm reports",
    "Loyalty vs patient safety"
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
    "Final lesson",
    "Internal reporting",
    "Escalation threshold"
  ],
  "case-7": [
    "Known defect",
    "Incomplete fire answer",
    "Too narrow cause",
    "Public safety",
    "First mattress response",
    "Inspector duty",
    "Vulnerable occupants",
    "Compounding risk",
    "Code enforcement",
    "Weak claim",
    "Exit-light seriousness",
    "Scale of harm",
    "Accountability too narrow",
    "Authority action",
    "Integrity",
    "Risk management",
    "Management priorities",
    "Egress too narrow",
    "Foreseeable danger",
    "Accept only if safe",
    "Weak stakeholder claim",
    "Follow-up enforcement",
    "Ethical reasoning",
    "Final lesson",
    "Worker reporting duty",
    "Inspector escalation"
  ],
  "case-8": [
    "Public safety failure",
    "Load path change",
    "Too narrow blame",
    "Engineer's seal",
    "Fast-track response",
    "Approve only if safe",
    "Communication duty",
    "Weak crowd answer",
    "Shop drawing review",
    "Integrity",
    "Too narrow mechanism",
    "Accountability",
    "Reviewer action",
    "Fabricator blame",
    "Whistle-blowing",
    "Stakeholders",
    "Weak schedule claim",
    "Realistic judgment",
    "Code compliance",
    "Warning sign",
    "Too narrow response",
    "Professional competence",
    "Public trust",
    "Final conclusion"
  ],
  "case-9": [
    "Ignored technical warnings",
    "Public safety first",
    "Too narrow explanation",
    "Manager's first duty",
    "Continued gas flow",
    "Shutdown authority",
    "Weak safety culture claim",
    "Career pressure",
    "Communication in emergency",
    "Escalation",
    "Accountability",
    "Family-use test",
    "Risk management",
    "Weak safety culture answer",
    "Competence and humility",
    "Operator action",
    "Public trust",
    "Incomplete whistle-blowing claim",
    "Stakeholders",
    "Profit vs safety",
    "Too narrow written answer",
    "Stop-work rules",
    "Accountability meaning",
    "Final lesson"
  ],
  "case-10": [
    "Honesty and patient safety",
    "Transparency and false claims",
    "Too narrow explanation",
    "Employee duty",
    "Professional responsibility",
    "Accountability",
    "Confidentiality limits",
    "Toxic work culture",
    "Whistle-blowing justification",
    "Patient safety central",
    "Responsible oversight",
    "Misleading partners",
    "Weakest explanation",
    "Integrity",
    "Competence and limits",
    "Weakest — narrow answer",
    "Regulatory action",
    "Transparency to patients",
    "Public trust",
    "Engineer discovers problem",
    "Honesty in claims",
    "Best final conclusion",
    "Too narrow — regulatory blame",
    "Confidentiality vs escalation",
    "Honesty vs transparency",
    "Public safety paramount"
  ]
};

const quizExamTips = {
  "case-1": [
    "In Volkswagen, the software worked technically, but the purpose was unethical.",
    "Do not reduce this case to pollution only; explain the deception.",
    "Professional responsibility can require refusal, documentation, and escalation.",
    "Transparency means real product behavior is truthfully disclosed to stakeholders.",
    "Real-world testing mattered because it exposed the gap between promise and reality.",
    "Managers share responsibility when they allow deceptive compliance to continue.",
    "Legal compliance includes the real purpose of the rule, not just the test format.",
    "Public trust questions often extend beyond one company to whole systems and industries.",
    "Include the public and environment when pollution is involved.",
    "Oversight matters when official claims and real behavior do not match.",
    "Software ethics is high-yield here because code became the tool of deception.",
    "Incomplete answers usually ignore the intentional use of engineering knowledge to mislead.",
    "Escalation becomes stronger when serious harm is possible and internal channels fail.",
    "Honesty and integrity ask whether claims match real-world performance.",
    "Accountability is broader than fines; it includes correction, compensation, and reform.",
    "Passing a test is not enough if the test itself is being manipulated.",
    "Approve only if real-world performance is safe, compliant, and honestly represented.",
    "Culture questions ask what the organization rewarded, tolerated, or ignored.",
    "Whistle-blowing is strongest when evidence is documented and harm is serious.",
    "Regulators and independent testers helped reveal the truth through comparison and verification.",
    "Once claims are known to be misleading, continuing them deepens the deception.",
    "Digital or software choices can still create environmental and public-health harm.",
    "Technical cleverness never turns deception into integrity.",
    "Best conclusions connect software, deception, public welfare, compliance, and trust."
  ],
  "case-2": [
    "Operational readiness beats ceremonial readiness.",
    "Scale increases the ethical duty to control rollout risk.",
    "Physical completion is not the same as launch readiness.",
    "Cutover errors are approval failures, not just technical glitches.",
    "BA ethics includes turning staff concerns into requirements and risks.",
    "Public image never outranks credible capacity risk.",
    "During disruption, information is part of stakeholder care.",
    "Testing volume does not prove realistic readiness.",
    "If operators are unready, the system is unready.",
    "Project managers are responsible for launch scope, not just schedule.",
    "Frontline staff often see the risks first.",
    "Whole-system thinking beats single-component thinking.",
    "Document first, then escalate through proper channels.",
    "Public trust falls when promise and lived reality diverge.",
    "Phased launch is a high-yield risk-reduction answer.",
    "Public welfare includes major avoidable disruption, not only injury.",
    "Reduce service when that is what reliable operation requires.",
    "Operational complaints can be requirements evidence.",
    "Integrity means honest readiness judgment under pressure.",
    "Accountability means responsibility, compensation, correction, and learning.",
    "Ask whether real users can be served reliably at real load.",
    "Launch only if ready is a core project-ethics rule.",
    "Crisis response must help people while the technical team diagnoses.",
    "Best conclusions connect readiness, stakeholders, communication, and trust."
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
    "Revalidation is the ethical duty when reusing code in a new safety-critical system.",
    "Know the exact fault: 64-bit float to 16-bit signed integer overflow = core Ariane 5 fact.",
    "Common-mode failure = both systems fail from the same bug — a key concept for the exam.",
    "Diverse redundancy means different designs, not just physical copies.",
    "Past success is not validation — always connect reuse to context-specific testing.",
    "Engineers have independent safety obligations, even when management disagrees.",
    "Data range analysis is an engineering responsibility, not just a QA task.",
    "Operational history on a different system does not transfer safety assurance.",
    "Accountability serves prevention, not blame — use this framing in written answers.",
    "Exception handling must preserve system safety, not just report the error.",
    "Reuse is ethical only with revalidation — never automatically safe.",
    "Boundary testing at data type limits is the specific prevention for overflow.",
    "Public trust and public investment apply even when no humans are harmed.",
    "Unchecked assumptions = lack of integrity — use this framing in exam answers.",
    "Safety-critical software ethics = obligation to validate, not just to code correctly.",
    "Prevention answers should address overflow, testing, and diverse redundancy together.",
    "Risk assessment must be system-specific — not transferable from a different program.",
    "High-scoring exam answers name multiple causes: assumption, testing, redundancy, culture.",
    "Integration responsibility: the system engineer must validate all components in context.",
    "The core lesson is about revalidation — not about avoiding software reuse altogether.",
    "Post-failure transparency and reporting are part of engineering accountability.",
    "Identical software redundancy is a common exam scenario — know why it fails.",
    "Public investment strengthens, not relaxes, the engineering validation obligation.",
    "The SRI diagnostic-data-as-command flaw is a textbook fail-safe design violation.",
    "Culture of questioning assumptions is the organizational lesson from Ariane 5.",
    "Final answers should connect technical fault, professional duty, and system-specific validation."
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
    "End with patient safety and professional responsibility.",
    "Whistle-blowing is strongest when serious patient harm is supported by documented evidence.",
    "Loyalty does not override the duty to prevent ongoing harm to patients."
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
    "Best conclusions combine public safety, uncertainty, and responsibility.",
    "Start with evidence and authorized channels unless urgent danger requires immediate escalation.",
    "Ignored internal warnings plus serious public risk strengthen the case for escalation."
  ],
  "case-7": [
    "Known hazard plus no correction is a strong accountability pattern.",
    "Do not stop at ignition; explain preventable system failure.",
    "Avoid one-cause blame in ethics cases.",
    "Public safety means real protection for occupants, not hopeful assumptions.",
    "Prevention starts when the first warning sign appears.",
    "Code enforcement means action, not only paperwork.",
    "Vulnerable stakeholders increase the duty of care.",
    "Compounding risk is a high-yield Gulf Hotel idea.",
    "Rules protect people only when violations are corrected.",
    "Low cost does not reduce life-safety duties.",
    "Main-route failure makes backup guidance life-critical.",
    "Scale of harm helps show whether protection matched real need.",
    "Accountability includes action before tragedy, not only after it.",
    "Authorities must act before harm, not merely document risk.",
    "Integrity includes not normalizing known safety defects.",
    "Risk management rewards multi-factor thinking, not one-cause blame.",
    "Management priorities become ethics when they affect safety.",
    "Egress safety is about route usability, not route existence alone.",
    "A prior citation proves the danger was foreseeable.",
    "Occupied buildings should not be accepted as safe while major defects remain.",
    "Who was vulnerable matters ethically, not just technically.",
    "Follow-up is part of enforcement, not an optional extra.",
    "Ethical reasoning compares facts, duties, stakeholders, options, and impacts.",
    "Best conclusions combine foreseeability, vulnerability, and prevention.",
    "Vulnerable occupants make even small life-safety defects ethically urgent.",
    "Bad publicity is never a good reason to leave known public hazards uncorrected."
  ],
  "case-8": [
    "Ethics in Hyatt means technical decisions must be tied to public harm and responsibility.",
    "Continuous rods to split rods to doubled load is the core Hyatt mechanism.",
    "Avoid one-person blame in complex engineering failures.",
    "Engineer's seal means responsibility unless limits are clearly stated.",
    "Schedule pressure never removes verification duty.",
    "Safe approval means verifying the final built detail, not only the original concept.",
    "If no one can say who checked it, review has already failed.",
    "Normal public use must be designed for safely, not blamed afterward.",
    "Shop drawings are not paperwork if they change the structure.",
    "Integrity includes not approving what you have not verified.",
    "Connect technical cause to professional duty for strong ethics answers.",
    "Accountability includes discipline, correction, and future prevention.",
    "Pause approval when safety checking is unclear.",
    "A fabricator's proposal does not remove the engineer's duty to verify safety.",
    "DeGeorge-style questions reward evidence, internal reporting, and serious public risk.",
    "Stakeholders include direct victims and the wider public.",
    "Time pressure is not an excuse for underchecking safety.",
    "Realistic judgments include load, capacity, and consequences.",
    "Code margins protect human life, not just paperwork.",
    "Warning signs should trigger deeper review, not normalization.",
    "Later details can be the most important part of safety.",
    "Competence includes recognizing when assumptions no longer hold.",
    "Public trust depends on responsible verification, not appearance alone.",
    "End with public safety, communication, and accountable approval."
  ],
  "case-9": [
    "Safety culture is tested before the accident, when warnings first meet business pressure.",
    "When lives are at stake, hierarchy does not outrank public safety.",
    "Do not stop at the fire; explain the ethical failure behind it.",
    "Managers must treat credible hazard reports as safety decisions, not public-relations problems.",
    "Risk grows when energy keeps feeding a known hazard.",
    "Shutdown authority is a high-yield public-safety theme in this case.",
    "Policies on paper do not prove a real safety culture.",
    "Career pressure never removes the duty to raise a serious safety concern.",
    "Strong emergency communication names the risk, the consequence, and the needed action.",
    "Escalation is strongest when evidence exists, internal channels were tried, and harm may be serious.",
    "Engineers cannot hand away accountability by pointing only to management.",
    "The family-use test helps connect technical work to human harm.",
    "Risk management rewards multi-factor thinking, not one-cause blame.",
    "Reputation management is not the same as safety culture.",
    "Competence includes knowing when to listen instead of dismissing experts.",
    "People closest to the hazard should keep pressing when delay increases danger.",
    "Public trust depends on stopping deadly risk before it becomes mass harm.",
    "Whistle-blowing is not automatically disloyal when the goal is preventing serious harm.",
    "Stakeholder answers should include direct victims, decision makers, and the wider public.",
    "Business goals matter, but safety sets the ethical limit.",
    "A full ethics answer links facts, duties, stakeholders, and safer alternatives.",
    "Showstopper means stop-work authority and escalation are decided before the emergency.",
    "Accountability includes inaction, not only visible decisions.",
    "Best conclusions combine safety culture, shutdown authority, and public trust."
  ],
  "case-10": [
    "In medical technology, accuracy is a patient-safety issue, not only a product-quality issue.",
    "Transparency means stakeholders know the real method and real limitations.",
    "Do not confuse a failed startup with an ethical fraud case.",
    "Confidentiality does not override the duty to protect patients from serious harm.",
    "Professional responsibility includes not releasing products known to be unsafe or inaccurate.",
    "Accountability includes choosing correction over reputation defense.",
    "Confidentiality has limits when public safety is at stake.",
    "Work culture affects whether technical truth reaches decision-makers — culture is an ethics issue.",
    "Whistle-blowing is strongest when evidence is documented, channels are exhausted, and public harm is possible.",
    "Medical data is a patient-safety issue, not just a product-quality question.",
    "Reputation and funding cannot replace validated technical evidence.",
    "Misleading partners and misleading patients are both honesty violations.",
    "Ethics explanations should focus on duties, failures, and impacts, not only character traits.",
    "Integrity is tested when a problem is known — not after it becomes public.",
    "Competence includes recognizing and communicating limitations, not only technical skill.",
    "Engineering ethics is not about financial outcomes; it is about duties, honesty, and harm.",
    "Regulatory accountability is part of the broader engineering ethics system.",
    "Transparency is not only about investors; it applies to anyone who depends on the information.",
    "Public trust depends on actual ethical behavior, not only on marketing messages.",
    "Management decisions do not remove an engineer's professional responsibility.",
    "All claims — technical and financial — must be realistic and evidence-based.",
    "Best conclusions name the principles, case evidence, and lesson without oversimplifying.",
    "Engineers' duties exist even without regulatory enforcement.",
    "Internal policies cannot override the ethical duty to protect public safety.",
    "Honesty is about claims; transparency is about disclosure — both were violated.",
    "Public safety applies to any engineering work where failure can harm people, including health data."
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

  if (caseId === "case-1") {
    return sharedText
      .replaceAll("Volkswagen", "<strong>Volkswagen</strong>")
      .replaceAll("honesty", "<strong>honesty</strong>")
      .replaceAll("integrity", "<strong>integrity</strong>")
      .replaceAll("transparency", "<strong>transparency</strong>")
      .replaceAll("legal compliance", "<strong>legal compliance</strong>")
      .replaceAll("environmental responsibility", "<strong>environmental responsibility</strong>")
      .replaceAll("professional responsibility", "<strong>professional responsibility</strong>")
      .replaceAll("accountability", "<strong>accountability</strong>")
      .replaceAll("whistle-blowing", "<strong>whistle-blowing</strong>")
      .replaceAll("real-world emissions", "<strong>real-world emissions</strong>")
      .replaceAll("lab results", "<strong>lab results</strong>")
      .replaceAll("real-world testing", "<strong>real-world testing</strong>")
      .replaceAll("regulators", "<strong>regulators</strong>")
      .replaceAll("customers", "<strong>customers</strong>");
  }

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

  if (caseId === "case-9") {
    return sharedText
      .replaceAll("Piper Alpha", "<strong>Piper Alpha</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("public trust", "<strong>public trust</strong>")
      .replaceAll("safety culture", "<strong>safety culture</strong>")
      .replaceAll("technical warnings", "<strong>technical warnings</strong>")
      .replaceAll("shutdown authority", "<strong>shutdown authority</strong>")
      .replaceAll("whistle-blowing", "<strong>whistle-blowing</strong>")
      .replaceAll("escalation", "<strong>escalation</strong>")
      .replaceAll("risk management", "<strong>risk management</strong>")
      .replaceAll("production pressure", "<strong>production pressure</strong>")
      .replaceAll("professional responsibility", "<strong>professional responsibility</strong>")
      .replaceAll("accountability", "<strong>accountability</strong>")
      .replaceAll("operators", "<strong>operators</strong>")
      .replaceAll("supervisors", "<strong>supervisors</strong>")
      .replaceAll("shut down", "<strong>shut down</strong>")
      .replaceAll("continued gas flow", "<strong>continued gas flow</strong>")
      .replaceAll("miscommunication", "<strong>miscommunication</strong>")
      .replaceAll("showstopper", "<strong>showstopper</strong>");
  }

  if (caseId === "case-10") {
    return sharedText
      .replaceAll("Theranos", "<strong>Theranos</strong>")
      .replaceAll("honesty", "<strong>honesty</strong>")
      .replaceAll("patient safety", "<strong>patient safety</strong>")
      .replaceAll("public safety", "<strong>public safety</strong>")
      .replaceAll("transparency", "<strong>transparency</strong>")
      .replaceAll("accountability", "<strong>accountability</strong>")
      .replaceAll("professional responsibility", "<strong>professional responsibility</strong>")
      .replaceAll("whistle-blowing", "<strong>whistle-blowing</strong>")
      .replaceAll("confidentiality", "<strong>confidentiality</strong>")
      .replaceAll("validation", "<strong>validation</strong>")
      .replaceAll("public trust", "<strong>public trust</strong>")
      .replaceAll("integrity", "<strong>integrity</strong>")
      .replaceAll("Edison device", "<strong>Edison device</strong>")
      .replaceAll("third-party machines", "<strong>third-party machines</strong>");
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
  if (caseId === "case-2") {
    return;
  }

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

