export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    platform: 'Process Automation',
    turbohub: 'TurboHUB',
    solutions: 'Solutions',
    services: 'How We Work',
    why: 'Why AI Kitchen',
    caseStudies: 'Case Studies',
    contact: 'Contact',
    requestDemo: 'Request a Demo',
    menu: 'Menu',
  },

  language: {
    en: 'English',
    tr: 'Turkish',
  },

  common: {
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
    schedule: 'Schedule Demo',
    explore: 'Explore',
    close: 'Close',
    success: 'Success',
    error: 'Error',
    loading: 'Loading...',
  },

  footer: {
    company: 'AI Kitchen',
    description:
      'AI Kitchen automates repetitive back-office work with RPA and AI, and gives management fast answers from company data with TurboHUB.',
    offerings: 'What we offer',
    solutions: 'Solutions',
    companyTitle: 'Company',
    contact: 'Contact',
    supportLabel: 'Support',
    salesLabel: 'Sales',
    supportEmail: 'support@aikitchen.com.tr',
    salesEmail: 'sales@aikitchen.com.tr',
    turbohubContactLabel: 'TurboHUB',
    turbohubEmail: 'elena.turkmen@aikitchen.com.tr',
    copyright: '© 2026 AI Kitchen. All rights reserved.',
  },

  home: {
    meta: {
      title: 'Business Process Automation with RPA and AI | AI Kitchen',
      description:
        'Automate repetitive work such as invoice and document processing, data entry, reconciliation and reporting across your ERP, Excel, email and web systems with RPA and AI.',
    },
    hero: {
      eyebrow: 'Business process automation with RPA + AI',
      title: 'Hand off repetitive daily work',
      titleHighlight: 'to software robots.',
      description:
        'AI Kitchen automates repetitive work such as invoice and document processing, data entry, reconciliation and reporting across your ERP, Excel, email and web systems. We analyze the process with you, build the robot and support it in production.',
      primaryCta: 'Request a Demo',
      secondaryCta: 'See how it works',
      worksWith: 'Works with your existing systems',
      systems: ['SAP and ERP', 'Excel', 'Email', 'PDFs and scanned documents', 'Web applications'],
    },
    heroCard: {
      label: 'Example automation flow',
      title: 'Supplier invoice processing',
      steps: [
        { title: 'Invoice arrived by email', detail: 'PDF attachment received', status: 'done' },
        { title: 'Fields extracted', detail: 'Supplier, date, amount, VAT', status: 'done' },
        { title: 'Matched against the order', detail: 'Amount difference detected', status: 'warning' },
        { title: 'Sent for approval', detail: 'Decision stays with an employee', status: 'human' },
        { title: 'Will be posted to ERP', detail: 'Automatically after approval', status: 'pending' },
      ],
      footer: 'The robot applies the rules and leaves exceptions to you.',
    },
    offerings: {
      eyebrow: 'What we offer',
      heading: 'Two ways we speed up your business',
      description: 'A service that automates repetitive work, and a product that gives management fast answers from data.',
      items: [
        {
          tag: 'Service',
          title: 'Process Automation',
          description:
            'We automate repetitive operational work with RPA robots and AI, and stay with you end to end, from process discovery to go-live and support.',
          points: ['Document and invoice processing', 'Data entry and cross-system transfer', 'Reconciliation, controls and reporting', 'Human approval for exceptions'],
          cta: 'Explore process automation',
        },
        {
          tag: 'Product',
          title: 'TurboHUB',
          description:
            'Unifies your accounting, ERP, CRM and Excel data in one layer and answers management questions in natural language within minutes.',
          points: ['Natural language question, structured answer', 'Built on top of existing systems', 'On-premise, appliance or cloud', 'Data can stay in-house'],
          cta: 'Explore TurboHUB',
        },
      ],
    },
    tasks: {
      eyebrow: 'Concrete examples',
      heading: 'Which work can you hand off to robots?',
      description:
        'The best candidates are tasks that repeat often, follow clear rules and move data between more than one system.',
      groups: [
        { team: 'Finance and Accounting', items: ['Incoming invoice and document entry', 'Account and ledger reconciliation', 'Month-end controls and reports', 'Pre-payment checks'] },
        { team: 'Human Resources', items: ['Bonus and KPI calculations', 'Collecting data from multiple systems', 'Excel-based calculations and checks'] },
        { team: 'Procurement and Logistics', items: ['Quote and document comparison', 'Order and status updates', 'Document checks and notifications'] },
        { team: 'SAP and ERP', items: ['Scheduled control runs', 'Record comparison and variance reports', 'Parameter and data validation'] },
        { team: 'Legal and Document Management', items: ['Field extraction from contracts and attachments', 'Pre-checks for missing information', 'Archiving and tagging'] },
        { team: 'Customer Operations', items: ['Request and reservation intake', 'Notification and confirmation emails', 'Data transfer between applications'] },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      heading: 'What does a software robot do?',
      description:
        'A robot repeats the on-screen steps an employee performs, within defined permissions and rules. AI supports steps that need interpretation, such as reading and classifying documents.',
      steps: [
        { title: 'Collects the data', description: 'From email, PDFs, scanned documents, Excel files or web applications.' },
        { title: 'Reads and checks it', description: 'AI extracts the fields; business rules validate and compare them.' },
        { title: 'Enters it into systems', description: 'Creates the record in ERP, SAP, CRM or a web screen and prepares the report.' },
        { title: 'Leaves exceptions to you', description: 'Unclear or out-of-rule cases go to the responsible employee for approval.' },
      ],
      note: 'You do not need to replace your systems; the robot works through permitted access methods.',
    },
    model: {
      eyebrow: 'How we work',
      heading: 'How do we get started?',
      description: 'We move forward in low-risk, measurable steps.',
      steps: [
        { title: 'Process discovery', description: 'We review the current work step by step and identify the best automation candidates and success criteria.' },
        { title: 'Pilot', description: 'We run a controlled pilot on a selected process and measure results together with real data.' },
        { title: 'Go-live', description: 'We move validated workflows into production and transfer knowledge to your team.' },
        { title: 'Support and expansion', description: 'We monitor live workflows, improve them and extend automation to new processes.' },
      ],
      cta: 'Explore how we work',
    },
    proof: {
      eyebrow: 'Proof',
      heading: 'Documented results',
      description:
        'The results below come from two real automation cases documented in company-provided materials and shared without customer names.',
      cases: [
        {
          area: 'Human Resources',
          title: 'KPI bonus calculation automation',
          description: 'A bonus calculation process based on data collected from several enterprise systems and Excel files was automated.',
          metrics: [
            { value: '8 → 1', label: 'Employees involved in the process' },
            { value: '20 → 3 days', label: 'Calculation cycle time' },
          ],
        },
        {
          area: 'Accounting and Finance',
          title: 'Document processing and accounting entry',
          description: 'Document intake, recognition, data extraction, validation, checks and posting to the accounting system were automated.',
          metrics: [
            { value: '3–20x', label: 'Lower labor requirement for document entry' },
            { value: '2–3x', label: 'Faster document processing' },
          ],
        },
      ],
      note: 'Results belong to the respective cases; each process has different potential depending on its systems and structure.',
      cta: 'View case studies',
    },
    why: {
      eyebrow: 'Why AI Kitchen?',
      heading: 'We treat automation as an implementation discipline, not a software sale',
      items: [
        { title: 'RPA and AI together', description: 'Rule-based steps run on robots while document understanding and classification run on AI, in the same workflow.' },
        { title: 'You stay in control', description: 'What the robot can access, where human approval is required and which records are kept are defined upfront.' },
        { title: 'Deployment that fits your policy', description: 'The deployment model is defined during discovery according to your system and access requirements.' },
        { title: 'Training and lasting support', description: 'After go-live we keep training your team, monitoring workflows and improving them.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Frequently asked questions',
      items: [
        {
          question: 'What is RPA (robotic process automation)?',
          answer:
            'RPA means software robots perform the repetitive computer steps an employee does (copying data, filling forms, processing files, moving data between systems) according to defined rules. Combined with AI, steps like reading and classifying documents can be automated too.',
        },
        {
          question: 'Do we need to replace our existing systems?',
          answer:
            'No. The robot works with your existing systems such as ERP, SAP, Excel, email and web applications through permitted access methods.',
        },
        {
          question: 'Which processes are suitable for automation?',
          answer:
            'Processes that repeat often, follow clear rules, use digital data and move data between multiple systems are good candidates. We prioritize them together during process discovery.',
        },
        {
          question: 'How long does an automation project take?',
          answer:
            'It depends on the process scope, the systems involved and access conditions. Projects usually start with a pilot on a single process, and the timeline is set after discovery.',
        },
        {
          question: 'How are data and access security handled?',
          answer:
            'The robot’s access rights, processing records and steps requiring human approval are defined according to your organization’s policies. The deployment model is chosen based on your security requirements.',
        },
        {
          question: 'What is the difference between TurboHUB and process automation?',
          answer:
            'Process automation performs repetitive work. TurboHUB unifies data from different systems to answer management questions quickly. They can be used separately or together.',
        },
      ],
    },
    finalCta: {
      heading: 'Let’s find out which of your processes are ready for automation',
      description: 'Let’s review your current process, the systems you use and your business rules in a short call.',
      primary: 'Request a Demo',
      secondary: 'Explore TurboHUB',
    },
  },

  about: {
    hero: {
      title: 'About AI Kitchen',
      description:
        'A team that understands local operational realities and treats enterprise automation as an implementation discipline, not just a software sale.',
    },
    story: {
      heading: 'Our Approach',
      content:
        'Many automation initiatives fail to scale because they stay too technical or solve only isolated tasks. AI Kitchen combines the modularity of modern RPA ecosystems with AI-assisted decision logic, process advisory, training, and live support to create a more practical delivery model.',
    },
    mission: {
      heading: 'Our Mission',
      content:
        'To turn the most time-consuming manual operations in enterprise teams into measurable, manageable, and sustainable automations.',
    },
    vision: {
      heading: 'Our Vision',
      content:
        'A future where every business can confidently operate a digital workforce on its own data, systems, and approval logic.',
    },
    values: {
      heading: 'Our Values',
      items: [
        {
          title: 'Practicality',
          description: 'We design automations that create value in real operations, not just in theory.',
        },
        {
          title: 'Transparency',
          description: 'What gets automated, what stays under human control, and how success is measured are always clear.',
        },
        {
          title: 'Enablement',
          description: 'We train customer teams so automation becomes sustainable inside the organization.',
        },
        {
          title: 'Long-Term Partnership',
          description: 'We stay involved beyond go-live to optimize and expand automation across new processes.',
        },
      ],
    },
    trust: {
      heading: 'Built for Real Operations',
      description:
        'We focus on repetitive, document-heavy work in finance, legal, operations, HR, customer service, and related teams.',
    },
  },

  platform: {
    meta: {
      title: 'Process Automation: Software Robots with RPA and AI | AI Kitchen',
      description:
        'Automate repetitive work across documents, email, Excel, ERP and web applications end to end with RPA robots and AI. Exception handling, human approval and controlled deployment.',
    },
    hero: {
      eyebrow: 'Service · Process Automation',
      title: 'Software robots that run repetitive work end to end',
      description:
        'AI Kitchen combines document reading, data entry, checks, reconciliation and reporting into a single automated workflow. The robot applies the rules, AI understands the documents, and critical decisions stay with your team.',
      primaryCta: 'Talk to us about your process',
      secondaryCta: 'What the robot can do',
    },
    diagram: {
      inputsLabel: 'Incoming data',
      inputs: ['Email and attachments', 'PDFs and scanned documents', 'Excel and CSV files', 'Web applications'],
      robotLabel: 'AI Kitchen robot',
      robotSteps: ['Reads and classifies', 'Checks against rules', 'Enters into systems', 'Reports and notifies'],
      outputsLabel: 'Target systems',
      outputs: ['ERP and SAP', 'CRM and business apps', 'Reports and files', 'Email notifications'],
      humanLabel: 'When there is an exception',
      human: 'Goes to the responsible employee for approval',
    },
    capabilities: {
      eyebrow: 'Capabilities',
      heading: 'What the robot can do',
      description: 'Most of the repetitive steps an employee performs on a computer can be automated.',
      items: [
        { title: 'Document and data processing', description: 'Reads, validates, transforms and moves data from PDFs, Excel, Word, CSV, email and forms.' },
        { title: 'Application and browser automation', description: 'Builds workflows that operate across web applications, desktop screens and legacy systems.' },
        { title: 'AI document understanding', description: 'Takes classification, field extraction, content understanding and exception detection beyond static rules.' },
        { title: 'Exception and approval handling', description: 'Detects out-of-rule cases, routes them to the responsible person and continues after approval.' },
        { title: 'Scheduled and triggered runs', description: 'Starts at set times, at period end, or when a new email or file arrives.' },
        { title: 'Monitoring and processing records', description: 'Makes it traceable which record was processed, at which step and how.' },
      ],
    },
    comparison: {
      eyebrow: 'The difference',
      heading: 'Traditional RPA vs. the AI Kitchen approach',
      head: ['Aspect', 'Traditional RPA', 'AI Kitchen'],
      rows: [
        { aspect: 'Scope', traditional: 'Isolated task automation', aiKitchen: 'End-to-end process automation with decision support' },
        { aspect: 'Document understanding', traditional: 'Limited and mostly rule-based', aiKitchen: 'AI-supported classification and field extraction' },
        { aspect: 'Exception handling', traditional: 'Manual follow-up and brittle logic', aiKitchen: 'Escalation, approval and retry design built in' },
        { aspect: 'Team capability', traditional: 'Strong dependence on specialist developers', aiKitchen: 'Training and a shared delivery model' },
      ],
    },
    control: {
      eyebrow: 'Control and security',
      heading: 'Automation scales, control stays with you',
      description:
        'What the robot can access, which steps need human approval and which records are kept are defined together at the start of the project.',
      items: [
        { title: 'Data ownership and access control', description: 'The robot accesses only permitted systems and data, with defined permissions.' },
        { title: 'Processing records', description: 'What was done at each step and which records were processed stays traceable.' },
        { title: 'Human approval steps', description: 'In critical workflows, decision points stay with the responsible employee.' },
        { title: 'Deployment that fits your policy', description: 'The deployment model is defined during discovery based on your system and security requirements.' },
      ],
    },
    useCases: {
      eyebrow: 'Where to start?',
      heading: 'Automation by department and topic',
      description: 'Explore the scenario closest to yours.',
    },
    cta: {
      heading: 'Let’s review the process you want to automate',
      description: 'We will assess the current steps, the systems you use and your control points together to define the right scope.',
      primary: 'Request a Demo',
      secondary: 'Explore how we work',
    },
  },

  solutions: {
    index: {
      hero: {
        title: 'Solutions',
        description:
          'Enterprise automation solutions built around reusable scenario logic and adapted to specific departments and workflows.',
      },
    },
    financial: {
      name: 'Finance Operations',
      hero: {
        title: 'Intelligent Automation for Finance Operations',
        description:
          'Standardize reconciliation, reporting, data collection, and control-heavy financial processes with AI-supported RPA.',
      },
      challenges:
        'Finance teams collect data from multiple systems, compare files, perform reconciliations, and follow up on exceptions manually. The result is slow, error-prone work with too much control overhead.',
      solution:
        'AI Kitchen works across ERP screens, permitted web applications, Excel files, and email flows to collect data, compare records, flag mismatches, and generate required outputs.',
      capabilities: [
        'Multi-system data collection and matching',
        'Reconciliation and variance detection',
        'Report preparation and distribution',
        'Audit-friendly processing records',
        'Escalation for human approval steps',
      ],
      outcomes: [
        'Measurement and reduction of close and control time',
        'Monitoring and reduction of manual data-entry errors',
        'More team capacity for exception handling',
      ],
      cta: 'Explore Finance Operations',
    },
    accountsPayable: {
      name: 'Invoice and Payables Workflows',
      hero: {
        title: 'Automate Invoice Processing and Approval Flows',
        description:
          'Speed up the reading, validation, routing, and posting of incoming invoices.',
      },
      challenges:
        'Accounting and procurement teams receive invoices from different channels, compare them with PO and delivery data, follow up on missing records, and run approval chains before payment.',
      solution:
        'AI Kitchen reads incoming documents, extracts fields, validates them against business rules, triggers approvals, and pushes results into accounting systems.',
      capabilities: [
        'Invoice data extraction and classification',
        'Cross-checking against PO and delivery data',
        'Automated approval routing',
        'Supplier and document tracking',
        'Pre-payment control checkpoints',
      ],
      outcomes: [
        'Measurement and reduction of processing time per invoice',
        'Reduced manual data entry',
        'Better visibility across approval workflows',
      ],
      cta: 'Explore Payables Workflows',
    },
    legal: {
      name: 'Legal Document Workflows',
      hero: {
        title: 'Accelerate Contract and Document Operations',
        description:
          'Standardize document review, data extraction, risk flagging, and archiving activities.',
      },
      challenges:
        'Legal teams lose time on repetitive control steps across high volumes of documents. Different document types and manual status tracking increase turnaround times.',
      solution:
        'AI Kitchen extracts critical fields from contracts and supporting documents, applies pre-check logic, highlights risk or missing information, and routes work to the right people.',
      capabilities: [
        'Document classification and field extraction',
        'Critical clause and field detection',
        'Early-stage risk flagging',
        'Archiving and tagging automation',
        'Traceable process records',
      ],
      outcomes: [
        'Shorter document cycle times',
        'More consistent control steps',
        'Higher capacity across legal operations work',
      ],
      cta: 'Explore Legal Workflows',
    },
    tourism: {
      name: 'Tourism and Customer Operations',
      hero: {
        title: 'Coordinate Reservations and Customer Operations End to End',
        description:
          'Manage reservations, confirmations, payments, guest communication, and follow-up actions through centralized automation.',
      },
      challenges:
        'Tourism and service teams re-enter the same information across web portals, email inboxes, payment systems, and CRM tools. That creates delays, inconsistency, and lost customer satisfaction.',
      solution:
        'AI Kitchen collects reservation data from multiple channels, generates confirmations, processes payment and status updates, and distributes operational tasks across teams automatically.',
      capabilities: [
        'Reservation and request intake',
        'Guest communication and notification flows',
        'Payment and status update scenarios',
        'Operational task distribution across teams',
        'Follow-up workflows for next actions',
      ],
      outcomes: [
        'Measurement and improvement of response times',
        'Reduction of repeatable operations work',
        'More consistent customer communication',
      ],
      cta: 'Explore Tourism Operations',
    },
  },

  services: {
    index: {
      hero: {
        title: 'Services',
        description:
          'A delivery model that takes automation from discovery to go-live, then supports enablement and long-term optimization.',
      },
      intro:
        'Inspired by the training and competency-center mindset seen in modern RPA ecosystems, we offer not just implementation but a model that helps teams own automation internally.',
    },
    processDiscovery: {
      name: 'Process Discovery',
      description: 'Identify which workflows are the strongest candidates for automation.',
      content:
        'We break down your current operations step by step to expose manual effort, repetitive work, and hidden failure points.',
      benefits: [
        'Clear prioritization of automation candidates',
        'Visibility into bottlenecks and duplicate work',
        'Defined success metrics',
        'A realistic implementation roadmap',
      ],
      timeline: 'Defined after discovery',
    },
    assessment: {
      name: 'Technical and Operational Assessment',
      description: 'Define the right deployment model, integration requirements, and team readiness.',
      content:
        'We analyze your systems, access patterns, data sources, and user roles to shape an implementation plan that can actually be executed.',
      benefits: [
        'Clear system and access requirements',
        'Mapped integration needs',
        'Visibility into risks and dependencies',
        'A sharpened implementation scope',
      ],
      timeline: 'Defined after discovery',
    },
    poc: {
      name: 'Pilot / POC',
      description: 'Prove value quickly on one high-impact workflow.',
      content:
        'We launch a controlled pilot on a selected process, measure success criteria together, and create a strong base for wider rollout.',
      benefits: [
        'Fast value demonstration',
        'Internal stakeholder confidence',
        'Validation with real operational data',
        'A solid foundation for scale',
      ],
      timeline: 'Defined by scope',
    },
    implementation: {
      name: 'Go-Live and Rollout',
      description: 'Move validated workflows into production and expand to new teams.',
      content:
        'We turn pilot workflows into production-grade automations, transfer knowledge to your team, and extend the model across additional departments.',
      benefits: [
        'Controlled production launch',
        'Training and knowledge transfer',
        'Standardized delivery discipline',
        'Reusable foundations for future automations',
      ],
      timeline: 'Defined by scope',
    },
    integration: {
      name: 'System Integration',
      description:
        'Bring together web portals, desktop apps, files, and APIs in the same automation flow.',
      content:
        'We connect ERP, CRM, accounting tools, email, shared folders, and third-party services so automation can operate on real data and real systems.',
      benefits: [
        'Multi-system connectivity',
        'Standardized data flows',
        'A blend of API and UI automation',
        'Real-time or scheduled execution models',
      ],
      timeline: 'Defined by systems and access scope',
    },
    support: {
      name: 'Training, Support, and Optimization',
      description:
        'Monitor live performance and launch new workflows faster over time.',
      content:
        'We train your teams, monitor live workflows, identify improvement opportunities, and help extend automation into new use cases.',
      benefits: [
        'User and operations team enablement',
        'Live support and issue analysis',
        'Continuous improvement loops',
        'Guidance for new scenarios',
      ],
      timeline: 'Defined by service scope',
    },
  },

  whyAiKitchen: {
    hero: {
      title: 'Why AI Kitchen',
      description:
        'A unified model for enterprise automation that goes beyond software and focuses on practical implementation.',
    },
    intro:
      'We offer more than task automation: reusable scenarios, team enablement, enterprise governance, and AI-supported decision layers that make automation more practical to adopt.',
    items: [
      {
        title: 'Reusable and Adaptable Foundations',
        description:
          'Instead of starting every project from zero, we adapt common workflow patterns so teams can move faster.',
        benefit: 'Faster go-live timelines',
      },
      {
        title: 'Designed for Enterprise Operations',
        description:
          'We support workflows that involve multiple systems, teams, approvals, and operational dependencies.',
        benefit: 'Centralized control instead of fragmented tooling',
      },
      {
        title: 'Controlled Data and Access',
        description:
          'We define exactly what automation can access, where human approval is required, and which records must be kept.',
        benefit: 'A stronger foundation for security and compliance',
      },
      {
        title: 'RPA Strengthened by AI',
        description:
          'Beyond clicks and data transfer, we add document understanding, classification, and exception detection into the workflow.',
        benefit: 'A step beyond static rule-based automation',
      },
      {
        title: 'Training and Capability Building',
        description:
          'We support customer teams after deployment so automation knowledge stays inside the organization.',
        benefit: 'Less dependence on outside specialists',
      },
      {
        title: 'Focused on Business Outcomes',
        description:
          'Success is measured not by bot counts, but by time saved, errors reduced, and service quality improved.',
        benefit: 'Clearer ROI tracking',
      },
    ],
    comparison: {
      heading: 'AI Kitchen vs. Traditional RPA',
      rows: [
        {
          aspect: 'Scope',
          traditional: 'Isolated task automation',
          aiKitchen: 'End-to-end process automation with decision support',
        },
        {
          aspect: 'Document Understanding',
          traditional: 'Limited and mostly rule-based',
          aiKitchen: 'AI-supported classification and field extraction',
        },
        {
          aspect: 'Exception Handling',
          traditional: 'Manual follow-up and brittle logic',
          aiKitchen: 'Escalation, approval, and retry design built in',
        },
        {
          aspect: 'Adaptation Speed',
          traditional: 'High development effort per workflow',
          aiKitchen: 'Faster launch through reusable modules',
        },
        {
          aspect: 'Team Enablement',
          traditional: 'Strong dependence on specialist developers',
          aiKitchen: 'Training and shared delivery model',
        },
        {
          aspect: 'Operational Visibility',
          traditional: 'Fragmented logs and tracking',
          aiKitchen: 'Centralized monitoring and audit trail',
        },
      ],
    },
  },

  caseStudies: {
    hero: {
      title: 'Case Studies',
      description:
        'Illustrative automation scenarios for evaluation, not published customer references or measured business results.',
    },
    items: [
      {
        company: 'Illustrative Finance Operation',
        industry: 'Finance Operations',
        challenge:
          'A hypothetical process where records from separate Excel files and permitted business applications are compared manually.',
        solution:
          'Structure to evaluate: automating data collection, reconciliation, and exception flagging across the workflow.',
        outcomes: [
          'Measurement of end-of-day control time',
          'Ability for the team to focus on variances and exceptions',
          'Reduction of repeatable reporting steps',
          'Evaluation of a standardized workflow with process records',
        ],
        metric: 'Illustrative Scenario',
        metricLabel: 'Finance Operations',
      },
      {
        company: 'Illustrative Order Operation',
        industry: 'Order and Customer Operations',
        challenge:
          'A hypothetical process where order updates, return records, and requests are repeatedly handled across multiple portals.',
        solution:
          'Structure to evaluate: coordinating order and request steps across browser-based and back-office systems.',
        outcomes: [
          'Monitoring of peak-period workload',
          'Measurement of response times',
          'Reduction of repetitive portal actions',
          'Evaluation of trackable task routing across teams',
        ],
        metric: 'Illustrative Scenario',
        metricLabel: 'Order and Customer Operations',
      },
      {
        company: 'Illustrative Document and Approval Operation',
        industry: 'Document and Approval Workflows',
        challenge:
          'A hypothetical process where contract attachments, invoices, and approval documents arrive by email while review and status tracking remain manual.',
        solution:
          'Structure to evaluate: automating document reading, field extraction, pre-checks, and routing steps.',
        outcomes: [
          'Measurement of document turnaround time',
          'Earlier flagging of missing information',
          'Visibility into pending approvals',
          'Clearer task allocation across operations and legal teams',
        ],
        metric: 'Illustrative Scenario',
        metricLabel: 'Document and Approval Workflows',
      },
    ],
  },

  turbohub: {
    hero: {
      eyebrow: 'Product',
      title: 'TurboHUB',
      subtitle: 'Management answers from all your enterprise systems — in minutes, not days',
      description:
        'TurboHUB is an AI-powered system that answers management questions in natural language using data from your accounting, ERP, payroll, CRM and warehouse systems, databases and Excel models.',
      tags: ['Security', 'Neural Networks', 'AI Agents', 'Business Digitalization'],
      primaryCta: 'Request a Demo',
      secondaryCta: 'How It Works',
      whitepaperCta: 'Download the White Paper',
    },
    mockup: {
      label: 'Example view',
      askLabel: 'Question',
      question: 'Show revenue breakdown by counterparty for last month',
      sourcesLabel: 'Sources used',
      sources: ['Accounting', 'CRM', 'Excel'],
      answerTitle: 'Revenue by counterparty · last month',
      columns: ['Counterparty', 'Revenue', 'Share'],
      rows: [
        ['Counterparty A', '₺ 4.2M', '31%'],
        ['Counterparty B', '₺ 2.9M', '21%'],
        ['Counterparty C', '₺ 2.1M', '15%'],
        ['Others', '₺ 4.5M', '33%'],
      ],
      footnote: 'Illustrative data for demonstration',
    },
    whitepaper: {
      heading: 'TurboHUB White Paper',
      description:
        'An 8-page overview of the problem, how TurboHUB works, impact by department, deployment models and infrastructure requirements.',
      cta: 'Download PDF',
      file: '/whitepapers/TurboHUB_White_Paper_EN.pdf',
      meta: 'PDF · English',
    },
    problem: {
      eyebrow: 'What companies tell us',
      heading: 'Reporting relies on data from multiple disparate sources',
      points: [
        'Management reporting requires manual reconciliation across 5–7 sources: accounting, payroll, CRM, warehouse management, external services and manual Excel models.',
        'The same metric can differ by 5–15% from one system to another.',
        '3–5 business days every month go into reconciliation instead of interpretation and analysis.',
      ],
    },
    costs: {
      heading: 'Three types of inefficient costs',
      description:
        'Companies already using BI or Excel for management reporting face systemic inefficiencies at the data preparation stage — the “first mile” of analytics.',
      problemLabel: 'Today',
      solutionLabel: 'With TurboHUB',
      items: [
        {
          title: 'IT Department',
          subtitle: 'Report creation and customization',
          problems: [
            'Every new report dimension requires an IT ticket',
            '2–3 weeks lead time for customization',
            'A growing backlog of business requests',
          ],
          solutionTitle: 'Automated data preparation',
          solutions: [
            'New report dimension in 2–4 minutes without IT involvement',
            'All reports use a single, consistent logic',
          ],
        },
        {
          title: 'Analysts and Finance Managers',
          subtitle: 'Data extraction and reconciliation',
          problems: [
            '3–5 days a month spent on manual consolidation',
            'Prolonged reconciliation of data discrepancies',
            '70–80% of time consumed by routine tasks instead of analysis',
          ],
          solutionTitle: 'Business user autonomy',
          solutions: [
            'Natural language question — structured answer in minutes',
            'Frees up 1.5–2 FTE of analyst capacity',
          ],
        },
        {
          title: 'Accounting Department',
          subtitle: 'Adding supplemental analytics',
          problems: [
            'Manual entry of analytical tags into primary documents',
            'Increased data entry workload',
            'High risk of human error',
          ],
          solutionTitle: 'AI analytics via indirect indicators',
          solutions: [
            'AI extracts analytical insights from text fields and related documents',
            'Accounting focuses on statutory compliance, not report preparation',
          ],
        },
      ],
    },
    about: {
      heading: 'Minutes from executive request to delivered insight',
      points: [
        'An up-to-date, continuously refreshed data layer built on top of your existing systems (accounting, Excel, CRM, databases, data warehouses) for real-time analytics',
        'Executive questions answered in minutes',
        'An AI-powered tool for situations where a 24-hour delay means lost profit',
      ],
      howHeading: 'How it works',
      steps: [
        'You ask a question in natural language: “Show revenue breakdown by counterparty for last month”',
        'TurboHUB maintains a continuously updated operational data layer sourced from your enterprise systems',
        'Data from all sources is unified into a single layer using AI',
        'The system returns a structured, actionable answer',
      ],
    },
    benefits: {
      heading: 'Key business benefits',
      items: [
        { value: '5+ days → 2 min', label: 'Shorter request-to-report cycle' },
        { value: '100%', label: 'Elimination of report customization costs' },
        { value: '2+ FTE', label: 'Analyst capacity freed up' },
      ],
      note:
        'TurboHUB removes long data preparation cycles and dependency on individual employee expertise. No specialized skills or training are required to use the system.',
      disclaimer:
        'Figures are based on TurboHUB product material. Actual results depend on your data sources, data quality and project scope.',
    },
    deployment: {
      heading: 'Flexible deployment options',
      description:
        'TurboHUB can run inside your own infrastructure, be delivered as a pre-configured hardware appliance, or be hosted in the cloud.',
      options: [
        {
          title: 'On-premise',
          description:
            'Deployed on your own physical servers or virtual machines. The environment must support virtualization so the solution can run in containers.',
          specs: [
            'Minimum (1–2 users): Intel Core i7, 128 GB RAM, 4 TB SSD, RTX 3060 / 4090 / 5090',
            'Pilot (1–10 users): Intel Core i9, 128 GB RAM, 8 TB SSD, Tesla P40 / A40 / A100',
            'Enterprise (100+ users): Intel Xeon Platinum, 512 GB RAM, 16 TB SSD, NVIDIA A100 / H100 / H200 or 4× L40',
          ],
        },
        {
          title: 'Hardware appliance',
          description:
            'If the required servers are not available, TurboHUB can be delivered pre-installed and configured on dedicated hardware placed inside your infrastructure.',
          specs: [
            'Compact AI supercomputer: NVIDIA DGX Spark',
            'Two-node DGX Spark cluster for models up to 405 billion parameters',
            'Your data stays inside your premises',
          ],
        },
        {
          title: 'Cloud (SaaS)',
          description:
            'If new systems cannot be hosted internally, TurboHUB can be provided on dedicated rented servers.',
          specs: [
            'GPU servers for running local LLMs',
            'CPU servers combined with cloud LLM subscriptions',
            'Server configuration sized to your requirements',
          ],
        },
      ],
      note: 'Hardware configurations are indicative and are finalized together with your team during scoping.',
    },
    contact: {
      heading: 'Ready to try?',
      subheading: 'Let’s start with a demo',
      description: 'In 15 minutes, we’ll show you how to use the system and the impact it can create.',
      name: 'Elena Türkmen',
      role: 'TurboHUB Contact',
      email: 'elena.turkmen@aikitchen.com.tr',
      emailCta: 'Send an Email',
      formCta: 'Request a Demo',
    },
  },

  contact: {
    hero: {
      title: 'Get in Touch',
      description:
        'Let’s review your workflows together and decide whether a reusable scenario or a custom deployment is the better fit.',
    },
    form: {
      fullName: 'Full Name',
      company: 'Company',
      email: 'Business Email',
      phone: 'Phone Number',
      message: 'How can we help?',
      solution: 'Primary Interest',
      selectSolution: 'Select a topic...',
      submit: 'Send Request',
      submitting: 'Sending...',
      success: 'Your message has been received. We will get back to you shortly.',
      error: 'There was an error sending your message. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      placeholderName: 'Your full name',
      placeholderCompany: 'Company name',
      placeholderEmail: 'you@company.com',
      placeholderPhone: '+90 5xx xxx xx xx',
      placeholderMessage: 'Briefly describe the process you want to automate',
      optionFinancial: 'Finance Operations',
      optionAp: 'Invoice and Payables Workflows',
      optionLegal: 'Legal Document Workflows',
      optionTourism: 'Tourism and Customer Operations',
      optionTurbohub: 'TurboHUB — AI Management Analytics',
      optionOther: 'Other',
    },
    info: {
      contact: 'Contact Information',
      email: 'support@aikitchen.com.tr',
      emailLabel: 'Email',
      phone: '',
      phoneLabel: 'Phone',
      address: 'Enterprise Automation Platform',
      addressLabel: 'Headquarters',
      hours: 'Monday - Friday, 09:00 - 18:00',
      response: 'We will respond as soon as possible after receiving your request',
    },
    cta: {
      heading: 'Ready for the Next Step in Enterprise Automation?',
      description:
        'Let’s build an automation structure that reduces manual workload while staying measurable and sustainable.',
      button: 'Start the Conversation',
    },
  },
};
