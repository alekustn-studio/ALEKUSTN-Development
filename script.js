(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document
      .querySelectorAll(".flow-lines animate, .flow-lines animateTransform")
      .forEach(function (el) {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
  }
})();

(function () {
  var STORAGE_KEY = "alekustn_lang";
  var toggle = document.querySelector("[data-lang-toggle]");

  var copy = {
    ru: {
      metaTitle: "ALEKUSTN Development — сайты, боты, full-stack",
      metaDescription:
        "Full-stack разработка: сайты, Telegram-боты, API и интеграции. Быстрые сроки, понятный процесс.",
      skipLink: "К содержанию",
      logoAria: "ALEKUSTN — на главную",
      navOpen: "Открыть меню",
      navClose: "Закрыть меню",
      nav: ["Услуги", "Кейсы", "Отзывы", "Процесс", "Стек", "Обо мне", "Связаться"],
      heroEyebrow: "Full-stack · сайты · боты · интеграции",
      heroTitle:
        "Full-stack разработка: сайты, Telegram-боты и всё, что их связывает",
      heroLead:
        "Фронт на Next.js / React, боты на Python или Node, базы и очереди, API и внешние сервисы. От лендинга до нетривиального бэкенда — фиксируем объём и сроки, сдаём поэтапно, поддержка по договорённости.",
      heroCta: "Обсудить проект",
      heroLink: "Услуги и форматы",
      servicesTitle: "Услуги",
      servicesIntro:
        "Ниже — типичные форматы. Точная смета после короткого созвона или сообщения с ТЗ.",
      serviceCards: [
        {
          title: "Сайты",
          text: "Лендинг, сайт-визитка компании, многостраничник услуг. Вёрстка под мобильные, быстрая загрузка, формы заявок, подключение аналитики.",
        },
        {
          title: "Telegram-боты",
          text: "Приём заявок, меню и сценарии, рассылка материалов, уведомления вам или менеджерам, сохранение лидов в базу.",
        },
        {
          title: "Чуть сложнее",
          text: "Мини-кабинет, админка, интеграции с API, фоновые задачи, Telegram Mini App — обсуждаем объём отдельно, режем на этапы.",
        },
      ],
      workTitle: "Кейсы",
      workIntro:
        "Реальные проекты из моей практики: от визиток и ботов до сложных веб-приложений. Ссылки на прод — по запросу, если договор это позволяет.",
      trustAria: "Цифры по кейсу Telegram-бота",
      trustLabels: [
        "дня до запуска бота",
        "заявок в базе",
        "уникальных пользователей с заявкой",
        "успешных уведомлений в чат команды",
      ],
      caseKind: ["Сайт", "Telegram", "Сайт", "Продукт", "Платформа"],
      caseTitles: [
        "Сайт для турагентства Balance Tours",
        "Бот для турагентства Balance Tours",
        "Арт-витрина: галерея, каталог и магазин",
        "Предсказательные рынки и мини-приложение в Telegram",
        "Планировщик отложенного постинга в соцсети",
      ],
      caseDescs: [
        "Многостраничный сайт для Balance Tours на Next.js: туры и гайды, фильтры и поиск, заявки из модального окна, плавные анимации и аккуратная мобильная вёрстка.",
        "Telegram-бот под Balance Tours: меню и сценарии, выдача PDF-гайда, сбор контактов с проверкой, SQLite и мгновенные уведомления в рабочий чат команды.",
        "Сайт для художника: витрина работ, внимание к типографике и ритму сетки, загрузка и раздача медиа через объектное хранилище (S3) — быстро открывается и хорошо смотрится с телефона.",
        "Веб-платформа prediction markets плюс удобный слой в Telegram Mini App: торги, позиции и выплаты на связке Next.js, Node.js и смарт-контрактов в сети Polygon.",
        "Веб-приложение для подготовки и отложенной публикации контента в несколько соцсетей: очереди задач, обработка медиа, хранение и статусы отправки — без ручного копирования в каждый канал.",
      ],
      caseLink: "Ссылка / демо — по запросу",
      caseWip: "В процессе разработки",
      caseMetricsLead:
        "Собрано и запущено за <strong>2 дня</strong>. Ниже — ключевые показатели по базе.",
      caseMetricsDt: [
        "Заявок в базе (contacts)",
        "Уникальных пользователей с заявкой",
        "Тип контакта",
      ],
      caseMetricsDd3: "телефон — 137, username — 1",
      caseArtPlaceholder:
        "Аналитика подключена — ключевые метрики (просмотры, корзина, заказы) добавлю сюда, когда накопится достаточно данных.",
      ctaMid:
        "Нужен сайт, бот или интеграция в том же духе — обсудим объём и сроки.",
      testimonialsTitle: "Отзывы",
      testimonialsIntro:
        "Ниже — формат блока: подставьте реальные цитаты и имена с согласия клиентов. Тексты сейчас отражают тип задач из кейсов выше.",
      testimonialQuotes: [
        "Сайт под туры сделали быстро: структура понятная, на телефоне всё читается, заявки приходят без лишних полей.",
        "Бот для лидов настроили чётко: PDF уходит сам, контакты падают в чат, база не теряется.",
        "Сложный фронт и интеграции — без «сделаем потом»: этапами, с понятным статусом, без растягивания сроков.",
      ],
      testimonialName: "Заказчик",
      testimonialRoles: [
        "турфирма · замените на имя",
        "малый бизнес · замените на имя",
        "продукт / стартап · замените на имя",
      ],
      processTitle: "Как работаю",
      processIntro:
        "Первый ответ — как правило в течение <strong>4 часов</strong> в рабочее время. В первом сообщении достаточно пары фраз: что нужно сделать, к какому сроку ориентируетесь, есть ли пример или ссылка.",
      stepsTitle: ["Короткое ТЗ", "Смета и договорённость", "Разработка и сдача"],
      stepsDesc: [
        "Цель сайта или бота, референсы, сроки, что должно получиться на выходе — можно очень кратко, главное, чтобы было понятно направление.",
        "Фиксируем объём, срок, стоимость и количество правок — без «раздувания» задачи по ходу.",
        "Показываю результат на тестовой среде, вношу согласованные правки, помогаю с запуском на вашем домене или сервере.",
      ],
      stackTitle: "Технологии",
      stackIntro:
        "Подбираю стек под задачу; чаще всего это современный фронт и бэкенд для ботов.",
      stackAria: "Основной стек",
      stackItems: [
        "Next.js / React",
        "TypeScript",
        "Python (боты)",
        "Node.js",
        "PostgreSQL / SQLite",
      ],
      aboutTitle: "Обо мне",
      aboutAlt: "Алексей Устинов",
      aboutP: [
        "Здравствуйте, меня зовут Алексей Устинов.",
        "Работаю под ником <strong>ALEKUSTN</strong>. По сути кручу веб (чаще всего Next / React), плюс боты на Python или Node, и всякие базы, очереди и API — когда без этого проект не взлетит.",
        "В коде давно: были и маленькие лендинги с ботами, и штуки потяжелее — смарт-контракты, фоновые воркеры, нормальный бэкенд. Сейчас параллельно допиливаю свои проекты и беру заказы, где заранее можно нормально описать задачу и срок, без «сделаем как-нибудь».",
      ],
      contactTitle: "Связаться",
      contactLead:
        "Напишите, что нужно сделать — отвечу в Telegram или на почте с <strong>2–3 вариантами</strong> по цене и срокам, чтобы можно было выбрать без догадок.",
      contactTablist: "Как с вами связаться",
      contactTabs: ["Напрямую", "Форма"],
      contactLabels: ["Telegram", "Почта"],
      formLabels: ["Имя", "Почта или Telegram", "Вопрос"],
      formPresetsLabel:
        "Шаблон в сообщение — кнопка подставляет текст, другая заменит его целиком. Всё можно править.",
      formPresetButtons: {
        site_landing: "Лендинг",
        site_multipage: "Многостраничник",
        bot_leads: "Бот для заявок",
        bot_notify: "Бот + уведомления",
        miniapp: "Mini App",
        api_integration: "Интеграция / API",
        unsure: "Нужна помощь с формулировкой",
      },
      formMsgTemplates: {
        site_landing:
          "Сайт — лендинг (одна страница)\n\nО чём страница и для кого:\nГлавные блоки (hero, услуги, отзывы…):\nСрок:\nПример или референс (ссылка), если есть:\nДомен и хостинг: есть / нужна помощь\nПо желанию: формы, аналитика, второй язык",
        site_multipage:
          "Сайт — несколько страниц\n\nКакие разделы нужны (списком):\nЧто должно уметь (поиск, личный кабинет, оплата…):\nСрок:\nРеференсы (ссылки):\nТексты и картинки: готовы / нужна помощь",
        bot_leads:
          "Telegram-бот — заявки и лиды\n\nЗадача бота (заявка, квиз, запись…):\nШаги для пользователя (коротко):\nКуда отправлять заявки (чат, почта, CRM):\nСрок:\nФайлы или ссылки на материалы, если есть",
        bot_notify:
          "Telegram-бот — уведомления\n\nКогда слать уведомление (событие, расписание, действие в боте):\nКуда (чат, топик, несколько адресатов):\nТекст сообщения (что в нём должно быть):\nСрок:",
        miniapp:
          "Telegram Mini App\n\nИдея (одним абзацем):\nЭкраны или разделы (списком):\nВход: только через Telegram / ещё и своя учётка:\nНужен ли бэкенд или API уже есть:\nСрок:",
        api_integration:
          "Интеграции / API\n\nКакие системы связать (названия или ссылки):\nЧто должно получаться (синхронизация, вебхуки, отчёты…):\nЕсть ли доступы (ключи, логины): да / позже\nСрок:\nОбъём данных или лимиты, если важно",
        unsure:
          "Пока сложно сформулировать — нужна консультация\n\nЧем занимаетесь и что хотите улучшить:\nЧто сейчас не устраивает:\nБюджет или срок, если уже понятны:\nКак удобнее связаться (Telegram, почта, звонок)",
      },
      formPlaceholders: [
        "Как к вам обращаться",
        "email@… или @username",
        "Кратко: что нужно сделать, сроки, если есть — ссылка на ТЗ или пример",
      ],
      formPromise:
        "После отправки отвечу тем же каналом (Telegram или почта) и предложу несколько сметных вариантов с ценой и сроком — от минимального объёма до расширенного.",
      formSend: "Отправить",
      formSuccess: "Сообщение отправлено. Отвечу в Telegram или на почту.",
      formNote:
        "Отправка идёт через тот же API, что и форма на <a href=\"https://alekustn.store/contacts\" rel=\"noopener noreferrer\" target=\"_blank\">alekustn.store</a> (уведомление в Telegram и подписка в MailerLite). Если API недоступен, можно поменять URL в атрибуте <code>data-contact-api</code> или написать через вкладку «Напрямую».",
      faqTitle: "Коротко о формате работы",
      faqQ: [
        "Как считается стоимость и сроки",
        "Предоплата и этапы оплаты",
        "NDA и конфиденциальность",
        "Часовой пояс и созвоны",
      ],
      faqA: [
        "Смотрю на объём экранов/сценариев, интеграции и срочность. В ответе на заявку даю 2–3 варианта пакета с разной глубиной — можно выбрать или скорректировать.",
        "Обычно старт после согласования сметы: часть авансом, остаток по этапам или при сдаче — зависит от объёма, фиксируем в переписке до начала работ.",
        "По запросу подписываю NDA или работаю по вашему шаблону. Код и доступы не передаю третьим лицам.",
        "Живу в привычном для РФ/Европы часовом поясе; созвоны — договоримся заранее. Многое можно закрыть текстом в Telegram без звонка.",
      ],
      footerAria: "Профили в соцсетях",
      form: {
        sending: "Отправляем…",
        submit: "Отправить",
        missing: ["имя", "почту или Telegram", "краткое описание задачи"],
        missingError:
          "Заполните, пожалуйста: {fields}. Так я смогу сразу ответить с вариантами сметы.",
        mailSubject: "С сайта ALEKUSTN: {name}",
        mailBody: "Имя: {name}\nКонтакт (почта или Telegram): {reach}\n\n{msg}\n",
        mailTrim: "\n\n… (текст сокращён: допишите детали отдельным письмом)",
        tooMany:
          "Слишком много отправок подряд. Подождите пару минут или напишите в Telegram — так быстрее.",
        tooLong:
          "Текст слишком длинный для сервера. Сократите сообщение и отправьте снова.",
        forbidden:
          "Сервер отклонил запрос по правам доступа. Напишите через вкладку «Напрямую» — дойдёт наверняка.",
        server:
          "На стороне сервера временная ошибка. Попробуйте чуть позже или вкладку «Напрямую».",
        badRequest:
          "Запрос не принят: проверьте поля формы. Если всё заполнено — напишите в Telegram.",
        statusCode: "Сервер вернул код {status}.",
        rejected: "Сервер отклонил запрос.",
        directFallback: "Вкладка «Напрямую» — запасной вариант.",
        network:
          "Не вышло отправить форму: нет сети, блокировка или CORS. Попробуйте ещё раз или вкладку «Напрямую» — там почта и Telegram.",
      },
    },
    en: {
      metaTitle: "ALEKUSTN Development - websites, bots, full-stack",
      metaDescription:
        "Full-stack development: websites, Telegram bots, APIs, and integrations. Fast delivery and clear process.",
      skipLink: "Skip to content",
      logoAria: "ALEKUSTN - go to homepage",
      navOpen: "Open menu",
      navClose: "Close menu",
      nav: ["Services", "Cases", "Testimonials", "Process", "Stack", "About", "Contact"],
      heroEyebrow: "Full-stack · websites · bots · integrations",
      heroTitle:
        "Full-stack development: websites, Telegram bots, and everything in between",
      heroLead:
        "Frontend with Next.js / React, bots with Python or Node, databases and queues, APIs and external services. From landing pages to non-trivial backend tasks - we fix scope and timeline, ship in stages, support by agreement.",
      heroCta: "Discuss your project",
      heroLink: "Services and formats",
      servicesTitle: "Services",
      servicesIntro:
        "Typical formats are listed below. Final estimate comes after a short call or message with your brief.",
      serviceCards: [
        {
          title: "Websites",
          text: "Landing pages, company websites, and multi-page service sites. Mobile-first layout, fast loading, lead forms, and analytics setup.",
        },
        {
          title: "Telegram bots",
          text: "Lead capture, menus and scenarios, content delivery, notifications for you or your team, and storing leads in a database.",
        },
        {
          title: "More advanced",
          text: "Mini account areas, admin panels, API integrations, background jobs, and Telegram Mini Apps - discussed separately and split into stages.",
        },
      ],
      workTitle: "Cases",
      workIntro:
        "Real projects from my practice: from simple websites and bots to complex web products. Production links are available on request when contracts allow.",
      trustAria: "Metrics from Telegram bot case",
      trustLabels: [
        "days to launch the bot",
        "leads stored in the database",
        "unique users with submitted leads",
        "successful team chat notifications",
      ],
      caseKind: ["Website", "Telegram", "Website", "Product", "Platform"],
      caseTitles: [
        "Website for Balance Tours agency",
        "Telegram bot for Balance Tours agency",
        "Art showcase: gallery, catalog, and store",
        "Prediction markets and Telegram mini app",
        "Social media scheduled posting planner",
      ],
      caseDescs: [
        "A multi-page Next.js website for Balance Tours: tours and guides, filters and search, modal lead forms, smooth animations, and polished mobile layout.",
        "Telegram bot for Balance Tours: menu and scenarios, PDF guide delivery, validated contact capture, SQLite storage, and instant notifications in the team chat.",
        "A website for an artist: artwork showcase, careful typography and rhythm, media delivery through object storage (S3) - loads fast and looks great on mobile.",
        "Prediction markets web platform plus a Telegram Mini App layer: trading, positions, and payouts using Next.js, Node.js, and smart contracts on Polygon.",
        "Web app for preparing and scheduling content across multiple social platforms: task queues, media processing, storage, and publishing statuses without manual copy-paste.",
      ],
      caseLink: "Link / demo - on request",
      caseWip: "In progress",
      caseMetricsLead:
        "Built and launched in <strong>2 days</strong>. Key database metrics below.",
      caseMetricsDt: [
        "Leads in database (contacts)",
        "Unique users with leads",
        "Contact type",
      ],
      caseMetricsDd3: "phone - 137, username - 1",
      caseArtPlaceholder:
        "Analytics is connected - key metrics (views, cart, orders) will be added once enough data is collected.",
      ctaMid:
        "Need a website, bot, or integration in a similar style? Let's discuss scope and timeline.",
      testimonialsTitle: "Testimonials",
      testimonialsIntro:
        "This is a sample block format: replace with real quotes and names with client consent. Current text reflects projects listed above.",
      testimonialQuotes: [
        "The travel website was delivered fast: clear structure, excellent mobile readability, and leads come in with no unnecessary fields.",
        "The lead bot was set up perfectly: PDFs are sent automatically, contacts go to chat, and the database stays clean.",
        "Complex frontend and integrations handled without delays: staged delivery, clear status, and no timeline stretching.",
      ],
      testimonialName: "Client",
      testimonialRoles: [
        "travel agency · replace with name",
        "small business · replace with name",
        "product / startup · replace with name",
      ],
      processTitle: "How I work",
      processIntro:
        "First reply is usually within <strong>4 hours</strong> during working hours. In your first message, a couple of lines are enough: what needs to be built, your target deadline, and any example or reference link.",
      stepsTitle: ["Short brief", "Estimate and agreement", "Build and delivery"],
      stepsDesc: [
        "Project goal, references, timeline, and expected result - brief format is totally fine as long as direction is clear.",
        "We fix scope, timeline, price, and number of revisions upfront - no scope creep during implementation.",
        "I show progress on a staging environment, apply agreed edits, and help with deployment to your domain or server.",
      ],
      stackTitle: "Technologies",
      stackIntro:
        "I choose the stack based on the task; most often it's modern frontend and backend for bots.",
      stackAria: "Core stack",
      stackItems: ["Next.js / React", "TypeScript", "Python (bots)", "Node.js", "PostgreSQL / SQLite"],
      aboutTitle: "About me",
      aboutAlt: "Aleksey Ustinov",
      aboutP: [
        "Hi, my name is Aleksey Ustinov.",
        "I work under the nickname <strong>ALEKUSTN</strong>. I mostly build web products (usually Next / React), plus bots in Python or Node, and all the databases, queues, and APIs needed to make a project work reliably.",
        "I've been coding for years: from small landing pages with bots to heavier things - smart contracts, background workers, and full backend systems. I also ship my own products and take client projects where scope and timeline can be defined clearly from the start.",
      ],
      contactTitle: "Contact",
      contactLead:
        "Tell me what you need - I'll reply via Telegram or email with <strong>2-3 options</strong> for price and timeline so you can choose confidently.",
      contactTablist: "How to reach me",
      contactTabs: ["Direct", "Form"],
      contactLabels: ["Telegram", "Email"],
      formLabels: ["Name", "Email or Telegram", "Message"],
      formPresetsLabel:
        "Templates fill the message; another button replaces it completely. Everything is editable.",
      formPresetButtons: {
        site_landing: "Landing page",
        site_multipage: "Multi-page site",
        bot_leads: "Lead capture bot",
        bot_notify: "Bot + notifications",
        miniapp: "Mini App",
        api_integration: "Integration / API",
        unsure: "Help me phrase it",
      },
      formMsgTemplates: {
        site_landing:
          "Website — landing (single page)\n\nWhat the page is about and who it is for:\nMain sections (hero, services, testimonials…):\nTimeline:\nExample or reference link, if any:\nDomain and hosting: I have it / need help\nOptional: forms, analytics, second language",
        site_multipage:
          "Website — multiple pages\n\nSections you need (list):\nFeatures (search, account area, payments…):\nTimeline:\nReference links:\nCopy and images: ready / need help",
        bot_leads:
          "Telegram bot — leads\n\nWhat the bot should do (lead form, quiz, booking…):\nUser steps (short):\nWhere to send leads (chat, email, CRM):\nTimeline:\nFiles or links to materials, if any",
        bot_notify:
          "Telegram bot — notifications\n\nWhen to notify (event, schedule, user action):\nWhere (chat, topic, several recipients):\nMessage content (what it should include):\nTimeline:",
        miniapp:
          "Telegram Mini App\n\nIdea (one short paragraph):\nScreens or sections (list):\nLogin: Telegram only / also custom accounts:\nBackend or API: already exists / needs to be built:\nTimeline:",
        api_integration:
          "Integrations / API\n\nSystems to connect (names or links):\nDesired outcome (sync, webhooks, reports…):\nCredentials available: yes / later\nTimeline:\nData volume or rate limits, if it matters",
        unsure:
          "Hard to phrase — need advice\n\nWhat you do and what you want to improve:\nWhat is not working now:\nBudget or timeline, if you already know:\nBest way to reach you (Telegram, email, call)",
      },
      formPlaceholders: [
        "How should I address you?",
        "email@... or @username",
        "Briefly: what should be built, preferred timeline, and link to brief/example if available",
      ],
      formPromise:
        "After submission, I reply in the same channel (Telegram or email) and share several estimate options with price and timeline - from minimal to extended scope.",
      formSend: "Send",
      formSuccess: "Message sent. I'll reply via Telegram or email.",
      formNote:
        "The form uses the same API as on <a href=\"https://alekustn.store/contacts\" rel=\"noopener noreferrer\" target=\"_blank\">alekustn.store</a> (Telegram alert + MailerLite subscription). If API is unavailable, you can change the <code>data-contact-api</code> URL or use the Direct tab.",
      faqTitle: "Quick work format FAQ",
      faqQ: [
        "How pricing and timeline are calculated",
        "Prepayment and payment stages",
        "NDA and confidentiality",
        "Time zone and calls",
      ],
      faqA: [
        "I assess screens/scenarios volume, integrations, and urgency. In reply to your request, I provide 2-3 package options with different depth - you can choose or adjust.",
        "Usually work starts after estimate approval: part upfront, the rest by milestones or on delivery - depends on project size, fixed before start.",
        "I can sign an NDA on request or work under your template. Code and access are never shared with third parties.",
        "I work in a timezone comfortable for Europe/CIS; calls are scheduled in advance. Many tasks can be handled in Telegram without calls.",
      ],
      footerAria: "Social profiles",
      form: {
        sending: "Sending...",
        submit: "Send",
        missing: ["name", "email or Telegram", "short task description"],
        missingError:
          "Please fill in: {fields}. This helps me respond right away with estimate options.",
        mailSubject: "From ALEKUSTN website: {name}",
        mailBody: "Name: {name}\nContact (email or Telegram): {reach}\n\n{msg}\n",
        mailTrim: "\n\n... (message shortened: send extra details in a separate email)",
        tooMany:
          "Too many submissions in a row. Wait a couple of minutes or message me in Telegram - it's faster.",
        tooLong:
          "The message is too long for the server. Please shorten it and submit again.",
        forbidden:
          "The server rejected the request due to permissions. Use the Direct tab to ensure delivery.",
        server:
          "Temporary server-side issue. Try again a bit later or use the Direct tab.",
        badRequest:
          "Request was not accepted: please check form fields. If everything looks correct, send a Telegram message.",
        statusCode: "Server returned status code {status}.",
        rejected: "Server rejected the request.",
        directFallback: "The Direct tab is a reliable fallback.",
        network:
          "Could not submit the form: network, blocking, or CORS issue. Please try again or use the Direct tab (email and Telegram).",
      },
    },
  };

  function getByPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : "";
    }, obj);
  }

  function format(str, params) {
    if (!str) return "";
    return str.replace(/\{(\w+)\}/g, function (_, key) {
      return params && params[key] !== undefined ? String(params[key]) : "";
    });
  }

  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setHTML(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.innerHTML = value;
  }

  function setAttr(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function applyLanguage(lang) {
    var t = copy[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    setAttr('meta[name="description"]', "content", t.metaDescription);

    setText(".skip-link", t.skipLink);
    setAttr(".logo", "aria-label", t.logoAria);
    setText(".sr-only", t.navOpen);
    setAttr("[data-nav-close]", "aria-label", t.navClose);

    document.querySelectorAll(".site-nav a").forEach(function (el, idx) {
      if (t.nav[idx]) el.textContent = t.nav[idx];
    });

    setText(".eyebrow", t.heroEyebrow);
    setText(".hero h1", t.heroTitle);
    setText(".hero .lead", t.heroLead);
    setText(".hero-actions .btn-primary", t.heroCta);
    setText(".hero-text-link", t.heroLink);

    setText("#services .section-title", t.servicesTitle);
    setText("#services .section-intro", t.servicesIntro);
    document.querySelectorAll("#services .card").forEach(function (card, idx) {
      var c = t.serviceCards[idx];
      if (!c) return;
      var h = card.querySelector("h3");
      var p = card.querySelector("p");
      if (h) h.textContent = c.title;
      if (p) p.textContent = c.text;
    });

    setText("#work .section-title", t.workTitle);
    setText("#work .section-intro", t.workIntro);
    setAttr(".trust-strip", "aria-label", t.trustAria);
    document.querySelectorAll(".trust-strip .trust-label").forEach(function (el, idx) {
      if (t.trustLabels[idx]) el.textContent = t.trustLabels[idx];
    });

    var cases = document.querySelectorAll(".case-grid .case-card");
    cases.forEach(function (card, idx) {
      var kind = card.querySelector(".case-kind");
      var title = card.querySelector(".case-title");
      var desc = card.querySelector(".case-desc");
      var link = card.querySelector(".case-link");
      var status = card.querySelector(".case-status");
      if (kind && t.caseKind[idx]) kind.textContent = t.caseKind[idx];
      if (title && t.caseTitles[idx]) title.textContent = t.caseTitles[idx];
      if (desc && t.caseDescs[idx]) desc.textContent = t.caseDescs[idx];
      if (link) link.textContent = t.caseLink;
      if (status) status.textContent = t.caseWip;
    });
    setHTML(".case-metrics-lead", t.caseMetricsLead);
    document.querySelectorAll("#case-balance-bot .case-metrics-row dt").forEach(function (el, idx) {
      if (t.caseMetricsDt[idx]) el.textContent = t.caseMetricsDt[idx];
    });
    setText("#case-balance-bot .case-metrics-row:nth-child(3) dd", t.caseMetricsDd3);
    setText(".case-metrics-placeholder", t.caseArtPlaceholder);
    setText(".cta-mid__text", t.ctaMid);
    setText(".cta-mid .btn-primary", t.heroCta);

    setText("#testimonials .section-title", t.testimonialsTitle);
    setText("#testimonials .section-intro", t.testimonialsIntro);
    document.querySelectorAll(".testimonial-quote").forEach(function (el, idx) {
      if (t.testimonialQuotes[idx]) el.textContent = t.testimonialQuotes[idx];
    });
    document.querySelectorAll(".testimonial-name").forEach(function (el) {
      el.textContent = t.testimonialName;
    });
    document.querySelectorAll(".testimonial-role").forEach(function (el, idx) {
      if (t.testimonialRoles[idx]) el.textContent = t.testimonialRoles[idx];
    });

    setText("#process .section-title", t.processTitle);
    setHTML(".process-intro", t.processIntro);
    document.querySelectorAll(".steps li").forEach(function (li, idx) {
      var h = li.querySelector("h3");
      var p = li.querySelector("p");
      if (h && t.stepsTitle[idx]) h.textContent = t.stepsTitle[idx];
      if (p && t.stepsDesc[idx]) p.textContent = t.stepsDesc[idx];
    });

    setText("#stack .section-title", t.stackTitle);
    setText("#stack .section-intro", t.stackIntro);
    setAttr("#stack .tags", "aria-label", t.stackAria);
    document.querySelectorAll("#stack .tags li").forEach(function (el, idx) {
      if (t.stackItems[idx]) el.textContent = t.stackItems[idx];
    });

    setText("#about .section-title", t.aboutTitle);
    setAttr(".about-photo img", "alt", t.aboutAlt);
    document.querySelectorAll("#about .about-body p").forEach(function (el, idx) {
      if (t.aboutP[idx]) {
        if (t.aboutP[idx].indexOf("<") >= 0) {
          el.innerHTML = t.aboutP[idx];
        } else {
          el.textContent = t.aboutP[idx];
        }
      }
    });

    setText("#contact .section-title", t.contactTitle);
    setHTML("#contact .contact-lead", t.contactLead);
    setAttr(".contact-switch", "aria-label", t.contactTablist);
    document.querySelectorAll(".contact-switch-btn").forEach(function (el, idx) {
      if (t.contactTabs[idx]) el.textContent = t.contactTabs[idx];
    });
    document.querySelectorAll(".contact-label").forEach(function (el, idx) {
      if (t.contactLabels[idx]) el.textContent = t.contactLabels[idx];
    });
    document.querySelectorAll(".contact-field label").forEach(function (el, idx) {
      if (t.formLabels[idx]) el.textContent = t.formLabels[idx];
    });
    var inputs = [
      document.getElementById("contact-name"),
      document.getElementById("contact-reach"),
      document.getElementById("contact-msg"),
    ];
    inputs.forEach(function (el, idx) {
      if (el && t.formPlaceholders[idx]) el.setAttribute("placeholder", t.formPlaceholders[idx]);
    });

    var presetsLabel = document.querySelector("[data-i18n-presets-label]");
    if (presetsLabel) presetsLabel.textContent = t.formPresetsLabel || "";
    document.querySelectorAll(".msg-preset").forEach(function (btn) {
      var key = btn.getAttribute("data-msg-preset");
      if (key && t.formPresetButtons && t.formPresetButtons[key]) {
        btn.textContent = t.formPresetButtons[key];
      }
    });

    setText(".contact-form-promise", t.formPromise);
    setText(".contact-submit", t.form.submit);
    setText("#contact-form-success", t.formSuccess);
    setHTML(".contact-form-note", t.formNote);

    setText(".mini-faq__title", t.faqTitle);
    document.querySelectorAll(".mini-faq__item summary").forEach(function (el, idx) {
      if (t.faqQ[idx]) el.textContent = t.faqQ[idx];
    });
    document.querySelectorAll(".mini-faq__item p").forEach(function (el, idx) {
      if (t.faqA[idx]) el.textContent = t.faqA[idx];
    });

    setAttr(".social-links--footer", "aria-label", t.footerAria);

    if (toggle) {
      var nextLang = lang === "ru" ? "en" : "ru";
      toggle.textContent = nextLang.toUpperCase();
      toggle.setAttribute(
        "aria-label",
        lang === "ru" ? "Switch to English" : "Переключить на русский"
      );
    }
  }

  function detectInitialLanguage() {
    var saved = "";
    try {
      saved = localStorage.getItem(STORAGE_KEY) || "";
    } catch (e) {
      saved = "";
    }
    if (saved === "ru" || saved === "en") return saved;
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("ru") === 0 ? "ru" : "en";
  }

  var currentLang = detectInitialLanguage();
  applyLanguage(currentLang);

  if (toggle) {
    toggle.addEventListener("click", function () {
      currentLang = currentLang === "ru" ? "en" : "ru";
      applyLanguage(currentLang);
      try {
        localStorage.setItem(STORAGE_KEY, currentLang);
      } catch (e) {}
    });
  }

  window.__siteI18n = {
    getLang: function () {
      return currentLang;
    },
    t: function (path, params) {
      var lang = copy[currentLang] ? currentLang : "ru";
      var value = getByPath(copy[lang], path);
      if (typeof value !== "string") return "";
      return format(value, params || {});
    },
    getMsgTemplate: function (key) {
      var lang = copy[currentLang] ? currentLang : "ru";
      var tpl = getByPath(copy[lang], "formMsgTemplates." + key);
      return typeof tpl === "string" ? tpl : "";
    },
  };

  (function bindContactIntake() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var ta = document.getElementById("contact-msg");
    if (!ta) return;

    function applyPresetTemplate(text, activeBtn) {
      if (!text) return;
      ta.value = text;
      form.querySelectorAll(".msg-preset.is-active").forEach(function (b) {
        b.classList.remove("is-active");
      });
      if (activeBtn) activeBtn.classList.add("is-active");
      ta.focus();
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    }

    ta.addEventListener("input", function (e) {
      if (!e.isTrusted) return;
      form.querySelectorAll(".msg-preset.is-active").forEach(function (b) {
        b.classList.remove("is-active");
      });
    });

    form.addEventListener("click", function (e) {
      var btn = e.target.closest(".msg-preset");
      if (!btn || !form.contains(btn)) return;
      var key = btn.getAttribute("data-msg-preset");
      if (!key) return;
      var tpl = window.__siteI18n.getMsgTemplate(key);
      applyPresetTemplate(tpl, btn);
    });
  })();
})();

(function () {
  var svg = document.querySelector(".flow-lines__svg");
  if (!svg) return;

  var W = 1920;
  var H = 1200;
  var pad = 140;

  function rnd(a, b) {
    return a + Math.random() * (b - a);
  }

  function rndi(a, b) {
    return Math.round(rnd(a, b));
  }

  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  function fmt(v) {
    return Math.round(v * 10) / 10;
  }

  function scribble(opts) {
    var sx = opts.sx;
    var sy = opts.sy;
    var n = opts.segments;
    var dxSign = opts.dxSign || 1;
    var x = rnd(sx[0], sx[1]);
    var y = rnd(sy[0], sy[1]);
    var parts = ["M " + fmt(x) + " " + fmt(y)];
    var i;
    var stepX = opts.stepX || [220, 420];
    var stepY = opts.stepY || [-260, 260];
    var ctrl = opts.ctrl || 300;
    var prevC2x = x;
    var prevC2y = y;
    var first = true;

    for (i = 0; i < n; i++) {
      var tx = x + rnd(stepX[0], stepX[1]) * dxSign;
      var ty = y + rnd(stepY[0], stepY[1]);
      tx = clamp(tx, -pad, W + pad);
      ty = clamp(ty, -pad, H + pad);

      var c1x;
      var c1y;
      if (first) {
        c1x = x + rnd(-ctrl * 0.55, ctrl * 0.55);
        c1y = y + rnd(-ctrl * 0.55, ctrl * 0.55);
        first = false;
      } else {
        var alpha = rnd(0.32, 0.72);
        c1x = x + alpha * (x - prevC2x);
        c1y = y + alpha * (y - prevC2y);
      }

      var c2x = tx + rnd(-ctrl * 0.42, ctrl * 0.42);
      var c2y = ty + rnd(-ctrl * 0.42, ctrl * 0.42);

      parts.push(
        "C " +
          fmt(c1x) +
          " " +
          fmt(c1y) +
          " " +
          fmt(c2x) +
          " " +
          fmt(c2y) +
          " " +
          fmt(tx) +
          " " +
          fmt(ty)
      );
      prevC2x = c2x;
      prevC2y = c2y;
      x = tx;
      y = ty;
    }
    return parts.join(" ");
  }

  var specs = [
    {
      segments: rndi(7, 11),
      sx: [-180, -40],
      sy: [160, 420],
      dxSign: 1,
      stepX: [200, 400],
      stepY: [-240, 240],
      ctrl: 320,
    },
    {
      segments: rndi(7, 11),
      sx: [1980, 2140],
      sy: [80, 260],
      dxSign: -1,
      stepX: [200, 400],
      stepY: [-240, 240],
      ctrl: 300,
    },
    {
      segments: rndi(9, 13),
      sx: [260, 720],
      sy: [-160, 40],
      dxSign: rnd(0, 1) > 0.45 ? 1 : -1,
      stepX: [140, 340],
      stepY: [160, 320],
      ctrl: 340,
    },
    {
      segments: rndi(7, 10),
      sx: [-120, 80],
      sy: [640, 980],
      dxSign: 1,
      stepX: [220, 440],
      stepY: [-280, 280],
      ctrl: 300,
    },
    {
      segments: rndi(5, 8),
      sx: [1880, 2100],
      sy: [480, 760],
      dxSign: -1,
      stepX: [260, 420],
      stepY: [-220, 220],
      ctrl: 280,
    },
    {
      segments: rndi(6, 10),
      sx: [420, 920],
      sy: [420, 720],
      dxSign: rnd(0, 1) > 0.5 ? 1 : -1,
      stepX: [180, 360],
      stepY: [-200, 200],
      ctrl: 290,
    },
    {
      segments: rndi(6, 9),
      sx: [-100, 200],
      sy: [320, 580],
      dxSign: 1,
      stepX: [240, 400],
      stepY: [-260, 260],
      ctrl: 310,
    },
  ];

  var paths = svg.querySelectorAll("path");
  if (paths.length !== specs.length) return;

  var lineCount = rndi(4, 7);

  paths.forEach(function (path, idx) {
    if (idx < lineCount) {
      path.classList.remove("is-hidden");
      path.setAttribute("d", scribble(specs[idx]));
    } else {
      path.classList.add("is-hidden");
      path.setAttribute("d", "M0 0");
    }
  });
})();

(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  var slot = toggle.closest(".nav-slot");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    if (window.matchMedia("(max-width: 720px)").matches) {
      document.body.style.overflow = open ? "hidden" : "";
    } else {
      document.body.style.overflow = "";
    }
  }

  window.addEventListener("resize", function () {
    if (!window.matchMedia("(max-width: 720px)").matches) {
      document.body.style.overflow = "";
      setOpen(false);
    }
  });

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  var closeBtn = document.querySelector("[data-nav-close]");
  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(false);
      toggle.focus();
    });
  }

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 720px)").matches) {
        setOpen(false);
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target) &&
      !(closeBtn && closeBtn.contains(e.target)) &&
      !(slot && slot.contains(e.target))
    ) {
      setOpen(false);
    }
  });
})();

(function () {
  var el = document.querySelector(".footer-year");
  if (el) el.textContent = "© ALEKUSTN - " + String(new Date().getFullYear());
})();

(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  var nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  function reveal(el) {
    el.classList.add("is-visible");
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(reveal);
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        io.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
  );

  nodes.forEach(function (n) {
    var rect = n.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.92 && rect.bottom > 0) {
      reveal(n);
    } else {
      io.observe(n);
    }
  });
})();

(function () {
  var root = document.querySelector("[data-contact-panel]");
  if (!root) return;

  var tabs = root.querySelectorAll("[data-contact-tab]");
  var panelDirect = document.getElementById("contact-panel-direct");
  var panelForm = document.getElementById("contact-panel-form");

  function setMode(mode) {
    var isDirect = mode === "direct";
    tabs.forEach(function (btn) {
      var on = btn.getAttribute("data-contact-tab") === mode;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (panelDirect) panelDirect.hidden = !isDirect;
    if (panelForm) panelForm.hidden = isDirect;
  }

  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setMode(btn.getAttribute("data-contact-tab") || "direct");
    });
  });

  var switchEl = root.querySelector(".contact-switch");
  if (switchEl) {
    switchEl.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      var i = e.key === "ArrowRight" ? 1 : -1;
      var active = root.querySelector(".contact-switch-btn.is-active");
      var list = Array.prototype.slice.call(tabs);
      var idx = active ? list.indexOf(active) : 0;
      var next = (idx + i + list.length) % list.length;
      list[next].focus();
      setMode(list[next].getAttribute("data-contact-tab") || "direct");
    });
  }

  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var submitBtn = form.querySelector(".contact-submit");
  var okEl = document.getElementById("contact-form-success");
  var errEl = document.getElementById("contact-form-error");
  var i18n = window.__siteI18n || null;

  function msg(path, params, fallback) {
    if (!i18n || typeof i18n.t !== "function") return fallback || "";
    var v = i18n.t(path, params || {});
    return v || fallback || "";
  }

  function setSending(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    submitBtn.textContent = on
      ? msg("form.sending", null, "Отправляем…")
      : msg("form.submit", null, "Отправить");
  }

  function showErr(msg) {
    if (!errEl) return;
    errEl.textContent = msg || "";
    errEl.hidden = !msg;
    if (okEl) okEl.hidden = true;
  }

  function showOk() {
    if (errEl) errEl.hidden = true;
    if (okEl) okEl.hidden = false;
  }

  function hideStatus() {
    if (okEl) okEl.hidden = true;
    if (errEl) errEl.hidden = true;
  }

  form.addEventListener("input", function () {
    hideStatus();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideStatus();

    var nameEl = form.querySelector('[name="contact_name"]');
    var reachEl = form.querySelector('[name="contact_reach"]');
    var msgEl = form.querySelector('[name="contact_msg"]');
    var name = nameEl && nameEl.value ? nameEl.value.trim() : "";
    var reach = reachEl && reachEl.value ? reachEl.value.trim() : "";
    var messageText = msgEl && msgEl.value ? msgEl.value.trim() : "";
    if (!name || !reach || !messageText) {
      var missing = [];
      if (!name) missing.push(msg("form.missing.0", null, "имя"));
      if (!reach) missing.push(msg("form.missing.1", null, "почту или Telegram"));
      if (!messageText)
        missing.push(msg("form.missing.2", null, "краткое описание задачи"));
      showErr(
        msg(
          "form.missingError",
          { fields: missing.join(", ") },
          "Заполните, пожалуйста: " +
            missing.join(", ") +
            ". Так я смогу сразу ответить с вариантами сметы."
        )
      );
      return;
    }

    var apiUrl = (form.getAttribute("data-contact-api") || "").trim();

    function sendMailto() {
      var subject = msg(
        "form.mailSubject",
        { name: name },
        "С сайта ALEKUSTN: " + name
      );
      var body = msg(
        "form.mailBody",
        { name: name, reach: reach, msg: messageText },
        "Имя: " +
          name +
          "\nКонтакт (почта или Telegram): " +
          reach +
          "\n\n" +
          messageText +
          "\n"
      );
      var href =
        "mailto:alekustn@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      if (href.length > 2000) {
        body = body.slice(0, 1100) + msg("form.mailTrim", null, "\n\n…");
        href =
          "mailto:alekustn@gmail.com?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(body);
      }
      window.location.href = href;
    }

    if (!apiUrl) {
      sendMailto();
      return;
    }

    setSending(true);
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: reach,
        message: messageText,
      }),
    })
      .then(function (res) {
        return res.text().then(function (text) {
          var data = {};
          try {
            data = text ? JSON.parse(text) : {};
          } catch (e) {
            data = {};
          }
          return { status: res.status, httpOk: res.ok, data: data };
        });
      })
      .then(function (r) {
        setSending(false);
        if (r.httpOk) {
          form.reset();
          showOk();
          return;
        }
        var status = r.status;
        var fromApi =
          r.data && (r.data.error || r.data.message)
            ? String(r.data.error || r.data.message)
            : "";
        var friendly = "";
        if (status === 429) {
          friendly = msg(
            "form.tooMany",
            null,
            "Слишком много отправок подряд. Подождите пару минут или напишите в Telegram — так быстрее."
          );
        } else if (status === 413) {
          friendly = msg(
            "form.tooLong",
            null,
            "Текст слишком длинный для сервера. Сократите сообщение и отправьте снова."
          );
        } else if (status === 401 || status === 403) {
          friendly = msg(
            "form.forbidden",
            null,
            "Сервер отклонил запрос по правам доступа. Напишите через вкладку «Напрямую» — дойдёт наверняка."
          );
        } else if (status >= 500 && status <= 599) {
          friendly = msg(
            "form.server",
            null,
            "На стороне сервера временная ошибка. Попробуйте чуть позже или вкладку «Напрямую»."
          );
        } else if (status === 400) {
          friendly = msg(
            "form.badRequest",
            null,
            "Запрос не принят: проверьте поля формы. Если всё заполнено — напишите в Telegram."
          );
        }
        var errText =
          friendly ||
          fromApi ||
          (status
            ? msg(
                "form.statusCode",
                { status: status },
                "Сервер вернул код " + status + "."
              )
            : msg("form.rejected", null, "Сервер отклонил запрос."));
        showErr(
          errText +
            " " +
            msg("form.directFallback", null, "Вкладка «Напрямую» — запасной вариант.")
        );
      })
      .catch(function () {
        setSending(false);
        showErr(
          msg(
            "form.network",
            null,
            "Не вышло отправить форму: нет сети, блокировка или CORS. Попробуйте ещё раз или вкладку «Напрямую» — там почта и Telegram."
          )
        );
      });
  });
})();
