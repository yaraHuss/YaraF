export type LocaleKey = 'en' | 'ar'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      industries: 'Industries',
      caseStudies: 'Case Studies',
      contact: 'Contact',
      book: 'Book Free Consultation',
      theme: 'Theme',
      language: 'Language',
    },
    hero: {
      tagline: 'AI Automation & Enterprise Transformation',
      title: 'We build AI systems that reduce operational work by 70%',
      subtitle:
        'Enterprise-grade automation, AI customer support, and internal platforms — built for Gulf businesses, engineered for scale.',
      actionPrimary: 'Book Free AI Consultation',
      actionSecondary: 'View AI Solutions',
    },
    trustStrip: [
      'UAE-Based, Globally Engineered',
      'AI-First Infrastructure',
      'Enterprise-Grade Architecture',
      'Scalable Cloud Deployment',
    ],
    servicesPreview: {
      title: 'What we build',
      cards: [
        {
          title: 'AI Enterprise Automation',
          desc: 'Automate repetitive operations and internal workflows.',
        },
        {
          title: 'AI Customer Support',
          desc: 'Chatbots, voice agents, and WhatsApp AI that never sleep.',
        },
        {
          title: 'Internal Platforms',
          desc: 'Dashboards, portals, and approval systems built for your business.',
        },
        {
          title: 'AI Data & Analytics',
          desc: 'Executive dashboards and predictive operational intelligence.',
        },
      ],
      cta: 'See all services',
    },
    howWeWork: {
      title: 'How we work',
      steps: [
        {
          title: 'Discover',
          desc: 'Business workflow analysis to find the highest-impact opportunities.',
        },
        {
          title: 'Design',
          desc: 'AI architecture and automation mapping tailored to your operations.',
        },
        {
          title: 'Build',
          desc: 'Enterprise-grade implementation, built to scale from day one.',
        },
        {
          title: 'Scale',
          desc: 'Continuous optimization as your business grows.',
        },
      ],
    },
    aiDemoTeaser: {
      small: 'Try it yourself',
      title: 'Talk to our AI assistant right now',
      subtitle:
        'Open the assistant in the corner of this page — ask it about automation, pricing, or what we’d build for your industry.',
    },
    finalCta: {
      title: 'Ready to automate your business?',
      consult: 'Schedule Consultation',
      whatsapp: 'Talk on WhatsApp',
    },
    workflow: {
      nodes: ['Inbound Request', 'AI Agent', 'Workflow Engine', 'CRM / Data'],
    },
    services: {
      title: 'High-impact AI systems, not generic software',
      subtitle:
        'We focus on a small set of high-ticket services we can deliver at enterprise quality — not a long list of everything.',
      cards: [
        {
          title: 'AI Enterprise Automation',
          desc: 'Automate repetitive operations and workflows — document processing, internal approvals, and cross-team handoffs — so your team focuses on higher-value work.',
        },
        {
          title: 'AI Customer Support Systems',
          desc: 'AI chatbots, multilingual support, and voice agents that integrate directly with your CRM and respond instantly, day or night.',
        },
        {
          title: 'Internal Business Platforms',
          desc: 'Custom dashboards, vendor portals, HR systems, and approval workflows, built around how your business actually runs.',
        },
        {
          title: 'AI Data & Analytics',
          desc: 'Executive dashboards, KPI tracking, and predictive analytics that turn operational data into decisions.',
        },
        {
          title: 'WhatsApp AI Commerce',
          desc: 'AI-powered WhatsApp assistants that qualify leads, answer questions, and convert conversations into customers.',
        },
        {
          title: 'Dedicated AI Teams',
          desc: 'A monthly retainer model where YARAF acts as your outsourced AI transformation team — continuously building and optimizing.',
        },
      ],
      cta: 'Book Free Consultation',
    },
    industries: {
      title: 'Built around how your industry actually operates',
      description:
        'YARAF Digital builds AI systems for real estate, logistics, healthcare, construction, and finance businesses across the GCC.',
      cards: [
        {
          name: 'Real Estate',
          desc: 'AI lead qualification, CRM automation, and WhatsApp assistants for agents and developers.',
        },
        {
          name: 'Logistics',
          desc: 'Route optimization, operations dashboards, and workflow automation for fleets and warehouses.',
        },
        {
          name: 'Healthcare',
          desc: 'AI support systems, appointment automation, and streamlined patient workflows.',
        },
        {
          name: 'Construction',
          desc: 'AI reporting, procurement automation, and live project dashboards.',
        },
        {
          name: 'Finance',
          desc: 'Operational intelligence and compliance-ready automation for financial operations.',
        },
      ],
    },
    caseStudies: {
      title: 'Proven results, real systems',
      description:
        'Some of these are proof-of-concept builds while we grow our client roster — labeled clearly below.',
      cards: [
        {
          title: 'Reducing response time by 85% with AI automation',
          tag: 'WhatsApp AI · Proof of Concept',
          desc: 'A WhatsApp AI assistant handling customer inquiries in real time, cutting average response time from hours to seconds.',
        },
        {
          title: 'Streamlining approvals for a logistics operation',
          tag: 'Internal Platform · Proof of Concept',
          desc: 'An internal approval platform that replaced manual paperwork with automated workflows, significantly cutting processing time.',
        },
        {
          title: 'Executive dashboard for real-time operational visibility',
          tag: 'AI Data & Analytics · Proof of Concept',
          desc: 'A live dashboard pulling from multiple internal systems to give leadership a single view of operations and KPIs.',
        },
      ],
    },
    contact: {
      title: "Let's map your AI opportunity",
      description: "Tell us what's manual today, or pick a time directly on our calendar below.",
      sendForm: 'Send us a message',
      scheduleForm: 'Or book a time directly',
      name: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      serviceQuestion: 'What do you need help with?',
      messageQuestion: 'Tell us about your operations',
      appointment: 'Choose an available appointment slot',
      pickDate: 'Pick a date',
      selectSlot: 'Select a time slot',
      chooseService: 'Choose a service',
      bookingCta: 'Reserve this slot',
      formSuccess: 'Request received.',
      formSuccessCopy: "We'll reach out within one business day to schedule your consultation.",
      bookingSuccess: 'Booking request received.',
      bookingSuccessCopy: 'Our team will confirm the time and follow up shortly.',
      bookingError: 'Please choose a date and time, then try again.',
      submitError:
        'Something went wrong sending this. Please try again or reach us on WhatsApp.',
      serviceOptions: [
        'AI Enterprise Automation',
        'AI Customer Support Systems',
        'Internal Business Platforms',
        'AI Data & Analytics',
        'WhatsApp AI Commerce',
        'Dedicated AI Team / Retainer',
        'Not sure yet',
      ],
      notes: 'The scheduler writes bookings directly to Firestore without using Calendly.',
    },
    footer: {
      companyHeading: 'Company',
      getInTouchHeading: 'Get in touch',
      legalHeading: 'Legal',
      links: {
        home: 'Home',
        services: 'Services',
        industries: 'Industries',
        caseStudies: 'Case Studies',
        contact: 'Book a Consultation',
        whatsapp: 'WhatsApp',
        email: 'hello@yarafdigital.com',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      copy: 'UAE-based · Engineering hub in Pakistan',
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service',
      lastUpdated: 'Last updated: July 1, 2026',
      privacy: {
        intro:
          'YARAF Digital ("YARAF", "we", "our") builds AI automation and enterprise transformation systems for clients across the UAE, KSA and the wider GCC. This Privacy Policy explains how we collect, use, and protect information when you visit yaraf.com or engage us for services.',
        sections: [
          {
            title: 'Information we collect',
            body:
              'We collect information you provide directly — name, work email, phone number, company, and the details of your enquiry — when you submit a lead form, book a consultation, or contact us on WhatsApp. We also collect limited technical data (IP address, device, pages viewed) to secure and improve the site.',
          },
          {
            title: 'How we use information',
            body:
              'We use your information to respond to enquiries, schedule consultations, deliver contracted services, and share occasional updates about YARAF. We never sell personal data. Marketing emails always include an unsubscribe link.',
          },
          {
            title: 'Legal basis',
            body:
              'We process personal data on the basis of your consent, our legitimate business interests in operating and improving YARAF, and where necessary to perform a contract with your organisation.',
          },
          {
            title: 'Data sharing',
            body:
              'We share information only with vetted subprocessors that help us operate — cloud hosting, email delivery, analytics, and CRM. All subprocessors are bound by confidentiality and data-protection obligations. We do not transfer data outside our operating regions without appropriate safeguards.',
          },
          {
            title: 'Retention',
            body:
              'Lead and enquiry data is retained for up to 24 months, unless we enter into a client engagement, in which case retention follows the contract. You may request earlier deletion at any time.',
          },
          {
            title: 'Your rights',
            body:
              'You may request access, correction, deletion, or export of your personal data, and object to processing. Send requests to hello@yaraf.com and we will respond within 30 days.',
          },
          {
            title: 'Security',
            body:
              'We apply industry-standard controls including encryption in transit, least-privilege access, and audited hosting. No system is perfectly secure — we notify affected clients promptly in the event of a material incident.',
          },
          {
            title: 'Contact',
            body:
              'Questions about this policy? Email hello@yaraf.com or WhatsApp +971 58 800 5615.',
          },
        ],
      },
      terms: {
        intro:
          'These Terms of Service govern your use of yaraf.com and any services provided by YARAF Digital. By using the site or engaging us, you agree to these terms.',
        sections: [
          {
            title: 'Services',
            body:
              'YARAF designs, builds, and operates AI automation and enterprise systems. Specific deliverables, timelines, and fees are defined in a written Statement of Work between YARAF and the client.',
          },
          {
            title: 'Use of the website',
            body:
              'You agree not to misuse the site — including probing for vulnerabilities without authorisation, scraping at scale, or attempting to disrupt service. All content on yaraf.com is © YARAF Digital unless otherwise stated.',
          },
          {
            title: 'Intellectual property',
            body:
              'Unless otherwise agreed in a Statement of Work, YARAF retains rights to reusable frameworks, tooling, and know-how developed in the course of engagements. Client-specific deliverables are licensed or assigned as defined in the SOW.',
          },
          {
            title: 'Confidentiality',
            body:
              'Both parties will keep confidential information disclosed during discussions or engagements confidential and use it only for the purposes of the engagement.',
          },
          {
            title: 'Warranties',
            body:
              'YARAF delivers services with reasonable skill and care. The website is provided "as is" without warranty of any kind. Client-facing warranties for engagements are set out in the relevant SOW.',
          },
          {
            title: 'Liability',
            body:
              'To the maximum extent permitted by law, YARAF\'s aggregate liability arising out of the website is limited to AED 1,000. Liability under paid engagements is governed by the applicable SOW.',
          },
          {
            title: 'Governing law',
            body:
              'These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved in the competent courts of Dubai, unless the SOW specifies otherwise.',
          },
          {
            title: 'Contact',
            body:
              'For legal or contractual questions, contact hello@yaraf.com.',
          },
        ],
      },
    },
    form: {
      placeholders: {
        name: 'Your name',
        company: 'Company name',
        email: 'you@company.com',
        phone: '+971 ...',
        message: "What's manual today that you'd like automated?",
      },
      button: 'Book Free Consultation',
      sending: 'Sending…',
      required: 'Required',
    },
    theme: {
      light: 'Light Mode',
      dark: 'Dark Mode',
      english: 'English',
      arabic: 'العربية',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      industries: 'الصناعات',
      caseStudies: 'دراسات الحالة',
      contact: 'اتصل بنا',
      book: 'احجز استشارة مجانية',
      theme: 'المظهر',
      language: 'اللغة',
    },
    hero: {
      tagline: 'أتمتة الذكاء الاصطناعي والتحول المؤسسي',
      title: 'نقوم ببناء أنظمة ذكاء اصطناعي تقلل الأعمال التشغيلية بنسبة 70٪',
      subtitle:
        'أتمتة على مستوى المؤسسة، ودعم العملاء بالذكاء الاصطناعي، ومنصات داخلية — مصممة للأعمال في الخليج، ومهندسة من أجل التوسع.',
      actionPrimary: 'احجز استشارة ذكاء اصطناعي مجانية',
      actionSecondary: 'عرض الحلول',
    },
    trustStrip: [
      'مقرها الإمارات، مصممة عالمياً',
      'بنية تحتية تضع الذكاء الاصطناعي أولاً',
      'هندسة على مستوى المؤسسات',
      'نشر سحابي قابل للتوسع',
    ],
    servicesPreview: {
      title: 'ما نبنيه',
      cards: [
        {
          title: 'أتمتة المؤسسات الذكية',
          desc: 'أتمتة العمليات المتكررة وسير العمل الداخلي.',
        },
        {
          title: 'دعم عملاء بالذكاء الاصطناعي',
          desc: 'الدردشات الآلية، ووكلاء صوتيين، ودعم واتساب يعمل بلا توقف.',
        },
        {
          title: 'منصات داخلية',
          desc: 'لوحات تحكم وبوابات وأنظمة موافقات مخصصة لعملك.',
        },
        {
          title: 'البيانات والتحليلات',
          desc: 'لوحات معلومات تنفيذية وتحليلات تشغيلية تنبؤية.',
        },
      ],
      cta: 'عرض جميع الخدمات',
    },
    howWeWork: {
      title: 'كيف نعمل',
      steps: [
        {
          title: 'اكتشاف',
          desc: 'تحليل سير العمل للعثور على الفرص ذات التأثير الأعلى.',
        },
        {
          title: 'تصميم',
          desc: 'تصميم هندسة الذكاء الاصطناعي وسير الأتمتة المخصصة لعملياتك.',
        },
        {
          title: 'بناء',
          desc: 'تنفيذ على مستوى المؤسسة، مصمم للتوسع من اليوم الأول.',
        },
        {
          title: 'توسع',
          desc: 'التحسين المستمر أثناء نمو عملك.',
        },
      ],
    },
    aiDemoTeaser: {
      small: 'جرّبه الآن',
      title: 'تحدث إلى مساعد الذكاء الاصطناعي الآن',
      subtitle:
        'افتح المساعد في زاوية الصفحة — اسأله عن الأتمتة والتسعير أو ما سنبنيه لصناعتك.',
    },
    finalCta: {
      title: 'هل أنت جاهز لأتمتة عملك؟',
      consult: 'حدد موعد الاستشارة',
      whatsapp: 'تحدث على واتساب',
    },
    workflow: {
      nodes: ['الطلب الوارد', 'وكيل الذكاء الاصطناعي', 'محرك سير العمل', 'CRM / البيانات'],
    },
    services: {
      title: 'أنظمة ذكاء اصطناعي قوية، ليست برمجيات عامة',
      subtitle:
        'نركز على مجموعة صغيرة من الخدمات عالية القيمة التي يمكننا تقديمها بجودة مؤسسية — وليس قائمة طويلة من كل شيء.',
      cards: [
        {
          title: 'أتمتة المؤسسات الذكية',
          desc: 'أتمتة العمليات المتكررة وسير العمل — معالجة المستندات، الموافقات الداخلية، وانتقالات الفرق.',
        },
        {
          title: 'أنظمة دعم العملاء بالذكاء الاصطناعي',
          desc: 'دردشات آلية متعددة اللغات ووكلاء صوت يتكاملون مع CRM ويردون فوراً.',
        },
        {
          title: 'منصات الأعمال الداخلية',
          desc: 'لوحات تحكم مخصصة، بوابات الموردين، وأنظمة الموافقات مبنية حول كيفية عمل شركتك.',
        },
        {
          title: 'البيانات والتحليلات',
          desc: 'لوحات معلومات تنفيذية، وتتبع مؤشرات الأداء، وتحليلات تنبؤية لتحويل البيانات التشغيلية إلى قرارات.',
        },
        {
          title: 'تجارة واتساب بالذكاء الاصطناعي',
          desc: 'مساعدات واتساب ذكية تؤهل العملاء، تجيب على الأسئلة، وتحول المحادثات إلى صفقات.',
        },
        {
          title: 'فرق ذكاء اصطناعي مخصصة',
          desc: 'نموذج اشتراك شهري حيث تعمل YARAF كفريق تحويل ذكاء اصطناعي خارجي.',
        },
      ],
      cta: 'احجز استشارة مجانية',
    },
    industries: {
      title: 'مصممة حول كيفية عمل صناعتك بالفعل',
      description:
        'YARAF Digital builds AI systems for real estate, logistics, healthcare, construction, and finance businesses across the GCC.',
      cards: [
        {
          name: 'العقارات',
          desc: 'تأهيل العملاء، أتمتة CRM، ومساعدات واتساب للوكلاء والمطورين.',
        },
        {
          name: 'اللوجستيات',
          desc: 'تحسين المسارات، لوحات العمليات، وأتمتة للأساطيل والمستودعات.',
        },
        {
          name: 'الرعاية الصحية',
          desc: 'أنظمة دعم ذكاء اصطناعي، وموعد آلي، وسير عمل مرضى مبسط.',
        },
        {
          name: 'البناء',
          desc: 'تقرير الذكاء الاصطناعي، أتمتة الشراء، ولوحات المشاريع الحية.',
        },
        {
          name: 'التمويل',
          desc: 'ذكاء تشغيلي وأتمتة متوافقة للعمليات المالية.',
        },
      ],
    },
    caseStudies: {
      title: 'نتائج مثبتة، أنظمة حقيقية',
      description:
        'بعضها مشاريع إثبات المفهوم بينما نبني قاعدة عملائنا — مصنفة بوضوح أدناه.',
      cards: [
        {
          title: 'تقليل وقت الاستجابة بنسبة 85٪ بأتمتة الذكاء الاصطناعي',
          tag: 'واتساب AI · إثبات مفهوم',
          desc: 'مساعد واتساب ذكي يتعامل مع استفسارات العملاء في الوقت الفعلي، مع تقليل وقت الاستجابة من ساعات إلى ثوان.',
        },
        {
          title: 'تبسيط الموافقات لعملية لوجستية',
          tag: 'منصة داخلية · إثبات مفهوم',
          desc: 'منصة موافقات داخلية استبدلت الأعمال الورقية اليدوية بسير عمل آلي، مما خفض وقت المعالجة.',
        },
        {
          title: 'لوحة تنفيذية للرؤية التشغيلية في الوقت الفعلي',
          tag: 'البيانات والتحليلات AI · إثبات مفهوم',
          desc: 'لوحة معلومات حية تجمع من أنظمة داخلية متعددة لتوفر رؤية واحدة للقيادة.',
        },
      ],
    },
    contact: {
      title: 'دعنا نرسم فرصة الذكاء الاصطناعي الخاصة بك',
      description: 'أخبرنا بما هو يدوي اليوم، أو اختر وقتاً مباشرة من تقويمنا أدناه.',
      sendForm: 'أرسل لنا رسالة',
      scheduleForm: 'أو احجز موعداً مباشرة',
      name: 'الاسم الكامل',
      company: 'الشركة',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف / واتساب',
      serviceQuestion: 'ما الذي تحتاج مساعدة به؟',
      messageQuestion: 'أخبرنا عن عملياتك',
      appointment: 'اختر موعداً متاحاً',
      pickDate: 'اختر تاريخاً',
      selectSlot: 'اختر وقتاً',
      chooseService: 'اختر خدمة',
      bookingCta: 'حجز هذا الموعد',
      formSuccess: 'تم استلام الطلب.',
      formSuccessCopy: 'سوف نتواصل خلال يوم عمل واحد لتحديد موعد الاستشارة.',
      bookingSuccess: 'تم استلام طلب الحجز.',
      bookingSuccessCopy: 'سوف يؤكد فريقنا الموعد ويتابع قريباً.',
      bookingError: 'يرجى اختيار تاريخ ووقت ثم المحاولة مرة أخرى.',
      submitError:
        'حدث خطأ أثناء الإرسال. حاول مرة أخرى أو تواصل معنا عبر واتساب.',
      serviceOptions: [
        'أتمتة المؤسسات الذكية',
        'أنظمة دعم العملاء بالذكاء الاصطناعي',
        'منصات الأعمال الداخلية',
        'البيانات والتحليلات',
        'تجارة واتساب بالذكاء الاصطناعي',
        'فريق ذكاء اصطناعي مخصص / اشتراك',
        'لست متأكداً بعد',
      ],
      notes: 'يقوم هذا الجدول بكتابة الحجوزات مباشرة إلى Firestore دون استخدام Calendly.',
    },
    footer: {
      companyHeading: 'الشركة',
      getInTouchHeading: 'تواصل معنا',
      legalHeading: 'قانوني',
      links: {
        home: 'الرئيسية',
        services: 'الخدمات',
        industries: 'الصناعات',
        caseStudies: 'دراسات الحالة',
        contact: 'احجز استشارة',
        whatsapp: 'واتساب',
        email: 'hello@yarafdigital.com',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
      },
      copy: 'مقرها الإمارات · مركز هندسي في باكسان',
    },
    legal: {
      privacyTitle: 'سياسة الخصوصية',
      termsTitle: 'الشروط والأحكام',
      lastUpdated: 'آخر تحديث: 1 يوليو 2026',
      privacy: {
        intro:
          'تبني YaraF ديجيتال ("YaraF", "نحن") أنظمة أتمتة وذكاء اصطناعي وتحوّل مؤسسي لعملاء في الإمارات والسعودية ودول الخليج. توضح هذه السياسة كيف نجمع معلوماتك ونستخدمها ونحميها عند زيارة yaraf.com أو التعاقد معنا.',
        sections: [
          {
            title: 'المعلومات التي نجمعها',
            body:
              'نجمع المعلومات التي تقدّمها مباشرة — الاسم، البريد المهني، رقم الهاتف، الشركة، وتفاصيل استفسارك — عند تعبئة نموذج، أو حجز استشارة، أو التواصل عبر واتساب. كما نجمع بيانات تقنية محدودة (عنوان IP، الجهاز، الصفحات المُشاهدة) لتأمين الموقع وتحسينه.',
          },
          {
            title: 'كيف نستخدم المعلومات',
            body:
              'نستخدم معلوماتك للرد على الاستفسارات وجدولة الاستشارات وتنفيذ الخدمات المتعاقد عليها وإرسال تحديثات دورية. لا نبيع البيانات الشخصية أبداً. يتضمّن كل بريد تسويقي رابط إلغاء الاشتراك.',
          },
          {
            title: 'الأساس القانوني',
            body:
              'نعالج البيانات بناءً على موافقتك ومصالحنا المشروعة في تشغيل YaraF وتحسينه وعند الضرورة لتنفيذ عقد مع مؤسستك.',
          },
          {
            title: 'مشاركة البيانات',
            body:
              'نشارك المعلومات فقط مع مزوّدي خدمة معتمدين يساعدوننا في التشغيل — الاستضافة السحابية، البريد، التحليلات، وإدارة العملاء. جميعهم ملزمون بالسرية وحماية البيانات.',
          },
          {
            title: 'الاحتفاظ بالبيانات',
            body:
              'تُحفظ بيانات الاستفسارات لمدة تصل إلى 24 شهراً، ما لم ندخل في تعاقد فتُطبَّق شروط العقد. يمكنك طلب الحذف المبكر في أي وقت.',
          },
          {
            title: 'حقوقك',
            body:
              'يحق لك طلب الوصول أو التصحيح أو الحذف أو تصدير بياناتك والاعتراض على المعالجة. أرسل الطلبات إلى hello@yaraf.com وسنرد خلال 30 يوماً.',
          },
          {
            title: 'الأمان',
            body:
              'نطبّق ضوابط بمعايير الصناعة تشمل التشفير أثناء النقل، وأقل صلاحيات ممكنة، واستضافة مدقّقة. لا يوجد نظام آمن تماماً — سنُخطر العملاء المتأثرين فوراً في حال أي حادث جوهري.',
          },
          {
            title: 'التواصل',
            body:
              'استفسارات حول هذه السياسة؟ راسلنا على hello@yaraf.com أو واتساب +971 58 800 5615.',
          },
        ],
      },
      terms: {
        intro:
          'تحكم هذه الشروط استخدامك لموقع yaraf.com وأي خدمات تقدّمها YaraF ديجيتال. باستخدامك للموقع أو التعاقد معنا فأنت توافق على هذه الشروط.',
        sections: [
          {
            title: 'الخدمات',
            body:
              'تصمّم YaraF وتبني وتشغّل أنظمة أتمتة وذكاء اصطناعي للمؤسسات. تُحدَّد المخرجات والمواعيد والرسوم في وثيقة نطاق عمل مكتوبة بين YaraF والعميل.',
          },
          {
            title: 'استخدام الموقع',
            body:
              'توافق على عدم إساءة استخدام الموقع — بما في ذلك البحث عن ثغرات دون إذن، أو السحب المكثف للمحتوى، أو محاولة تعطيل الخدمة. جميع المحتويات محفوظة الحقوق لصالح YaraF ديجيتال ما لم يُذكر خلاف ذلك.',
          },
          {
            title: 'الملكية الفكرية',
            body:
              'تحتفظ YaraF بحقوق الأطر والأدوات والمعرفة القابلة لإعادة الاستخدام والمُطوَّرة خلال العمل، ما لم يُتفق على خلاف ذلك في نطاق العمل. تُرخَّص أو تُسنَد مخرجات العميل وفق ما يحدّده نطاق العمل.',
          },
          {
            title: 'السرية',
            body:
              'يحافظ كلا الطرفين على سرية المعلومات المُفصح عنها خلال المناقشات أو التنفيذ ولا يستخدمانها إلا لأغراض المشروع.',
          },
          {
            title: 'الضمانات',
            body:
              'تُقدَّم الخدمات بمهارة وعناية معقولة. يُقدَّم الموقع "كما هو" دون أي ضمان. تُحدَّد الضمانات الخاصة بالمشاريع في وثيقة نطاق العمل.',
          },
          {
            title: 'المسؤولية',
            body:
              'إلى الحد الأقصى الذي يسمح به القانون، تقتصر مسؤولية YaraF الإجمالية الناشئة عن الموقع على 1,000 درهم إماراتي. تخضع المسؤولية في المشاريع لنطاق العمل ذي الصلة.',
          },
          {
            title: 'القانون الحاكم',
            body:
              'تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة، وتختص محاكم دبي بأي نزاعات، ما لم يُحدَّد غير ذلك في وثيقة نطاق العمل.',
          },
          {
            title: 'التواصل',
            body:
              'للاستفسارات القانونية أو التعاقدية: hello@yaraf.com.',
          },
        ],
      },
    },
    form: {
      placeholders: {
        name: 'اسمك',
        company: 'اسم الشركة',
        email: 'you@company.com',
        phone: '+971 ...',
        message: 'ما هو العمل اليدوي الذي ترغب في أتمتته؟',
      },
      button: 'احجز استشارة مجانية',
      sending: 'جارٍ الإرسال…',
      required: 'مطلوب',
    },
    theme: {
      light: 'الوضع الفاتح',
      dark: 'الوضع الداكن',
      english: 'English',
      arabic: 'العربية',
    },
  },
}
        