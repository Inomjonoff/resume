/* ==========================================================================
   NAIMJON PORTFOLIO 2.0 — MULTILINGUAL DICTIONARY & LOGIC ENGINE
   ========================================================================== */

const translations = {
    uz: {
        // Nav
        nav_about: "Men haqimda",
        nav_services: "Xizmatlar",
        nav_projects: "Loyihalar",
        nav_skills: "Texnologiyalar",
        nav_github: "GitHub",
        nav_experience: "Tajriba",
        nav_contact: "Aloqa",
        btn_hire: "Hamkorlik",

        // Hero
        hero_badge_text: "Masofadan / Kontrakt asosida ishlashga tayyor",
        hero_greet: "Naimjon Inomjonov",
        hero_role: "Python Backend & AI Avtomatlashtirish Dasturchisi",
        hero_desc: "Murakkab biznes jarayonlarini qulay raqamli mahsulotlarga aylantiruvchi amaliy AI yechimlari, avtomatlashtirish tizimlari va backend arxitekturalarini yarataman.",
        btn_work_text: "Loyihalarni ko'rish",
        btn_contact_text: "Bog'lanish",
        btn_cv_text: "Rezyume (CV)",
        profile_status: "AI & Backend tizimlari ishlab chiqmoqda",

        // Metrics
        metric_years: "Yillik IT Tajriba",
        metric_years_desc: "Dasturlash, tizimlar & texnik qo'llab-quvvatlash",
        metric_projects: "Asosiy Loyihalar",
        metric_projects_desc: "EduAI, Pozitron, Mixaro va AI botlar",
        metric_integrations: "API Integratsiyalar",
        metric_integrations_desc: "LLM, Telegram TMA, To'lov tizimlari",
        metric_ai: "AI Platformalar",
        metric_ai_desc: "Baholash, mentorlar & aqlli avtomatlashtirish",

        // About
        about_title: "Men haqimda",
        about_subtitle: "Haqiqiy muammolarni amaliy raqamli mahsulotlarga aylantirish",
        about_subheading: "Tizimli Tafakkur: Izolyatsiyalangan kod emas, to'liq arxitektura",
        about_p1: "Men Python backend dasturlash, AI integratsiyasi va biznes jarayonlarini avtomatlashtirishga ixtisoslashgan dasturchiman. Men shunchaki alohida skriptlar yozmayman; ma'lumotlar bazasi, API, Telegram botlar va zamonaviy veb-interfeyslar yaxlit tizim sifatida ishlashini ta'minlayman.",
        about_p2: "Dasturiy ta'minotni qo'llab-quvvatlash va tizimlarni muvofiqlashtirish bo'yicha korporativ tajribam bilan bir qatorda, <strong>EduAI</strong> (AI ta'lim & baholash), <strong>Pozitron Academy</strong> (intervalli takrorlashga asoslangan til platformasi) va <strong>Mixaro Shop</strong> (avtomatlashtirilgan dropshipping savdo tizimi) kabi mustaqil loyihalarni rivojlantirmoqdaman.",
        pil1_title: "Tizimli Arxitektura",
        pil1_desc: "To'liq zanjir: ma'lumotlar bazalari, asinxron navbatlar, mikroxizmatlar va foydalanuvchi interfeyslari.",
        pil2_title: "AI Integratsiyasi",
        pil2_desc: "LLM API'larni (OpenAI, Gemini, Ollama) baholash, kontekstli mentor va aqlli tahlil uchun amaliy qo'llash.",
        pil3_title: "Biznes Avtomatlashtirish",
        pil3_desc: "Qo'lda bajariladigan operatsiyalarni bartaraf etish: botlar, buyurtmalar oqimi va hisobot tizimlari.",
        pil4_title: "Mahsulot Tafakkuri",
        pil4_desc: "Kodga biznes vositasi sifatida qarash — xavfsizlik, tezkorlik, UX va real foydaga e'tibor.",

        // Services
        services_title: "Nimalar Yarata Olaman",
        services_subtitle: "Biznesingiz va raqamli mahsulotlaringizni kengaytirish uchun professional muhandislik xizmatlari",
        serv1_title: "AI Avtomatlashtirish & LLM",
        serv1_desc: "Murakkab jarayonlarni LLM API'lar (OpenAI, Gemini, Claude, Ollama) orqali avtomatlashtirish. Maxsus AI agentlar, avtomatik baholash va RAG tizimlari.",
        serv2_title: "Backend Tizimlar & REST API",
        serv2_desc: "Python (FastAPI / Flask) asosida yuqori tezlikda ishlovchi server arxitekturasi, xavfsiz JWT autentifikatsiyasi, ma'lumotlar bazasi va Docker.",
        serv3_title: "Telegram Botlar & Mini Applar",
        serv3_desc: "aiogram 3.x va Telegram Mini Apps (TMA) yordamida e-commerce, avtomatlashtirilgan savdo, to'lov tizimlari va boshqaruv panellari.",
        serv4_title: "Biznes Tahlil & Avtomatlashtirish",
        serv4_desc: "Savdo voronkalari, avtomatik hisobotlar (PDF/Excel), ma'lumotlar integratsiyasi va CRM bilan sinxronizatsiya.",
        serv5_title: "Veb Ilovalar & PWA",
        serv5_desc: "Zamonaviy, mobil qurilmalarga moslashuvchan, oflayn rejimda ishlovchi Progressive Web App (PWA) ilovalari.",
        serv_cta_badge: "Maxsus Yechimlar",
        serv_cta_title: "G'oyangiz bormi? Uni birgalikda quramiz.",
        serv_cta_desc: "Konsepsiyadan boshlab arxitektura, backend dasturlash va AI integratsiyasigacha — loyihangizni ishchi holatga keltiramiz.",
        serv_cta_btn: "Bog'lanish",

        // Projects
        proj_section_pill: "Asosiy Loyihalar",
        proj_title: "Tanlangan Loyihalar",
        proj_subtitle: "Python, AI, Telegram va zamonaviy backend tizimlari asosida yaratilgan real mahsulotlar",
        filter_all: "Barcha Loyihalar",
        filter_ai: "AI & Backend",
        filter_telegram: "Telegram & E-Commerce",
        filter_mobile: "Mobil & Vositalar",

        status_active_dev: "Faol ishlab chiqilmoqda",
        status_in_dev: "Ishlab chiqilmoqda",
        status_live: "Ishchi / Qo'llab-quvvatlanmoqda",
        btn_case_study: "Case Study 📖",
        btn_demo: "Demo / So'rov",

        eduai_headline: "AI Asosidagi Interaktiv Ta'lim Platformasi",
        eduai_problem: "O'qituvchilar topshiriqlarni tuzish va tekshirishga soatlab vaqt sarflaydi; o'quvchilarda esa 24/7 shaxsiy tushuntiruvchi mentor yetishmaydi.",
        eduai_solution: "O'qituvchi va o'quvchi kabinetlari, interaktiv topshiriqlar, AI mentor va avtomatik baholash tizimiga ega PWA platforma.",

        pozitron_headline: "Tillar O'rganish va Intervalli Takrorlash Platformasi",
        pozitron_problem: "Til o'rganuvchilar lug'atni eslab qolishda qiynaladi, o'zaro amaliyot va qulay ochiq vositalar kam.",
        pozitron_solution: "SuperMemo-2 algoritmi, lug'atli interaktiv kitob mutolaasi, geymifikatsiya va Telegram bot integratsiyasiga ega ochiq ta'lim platformasi.",

        mixaro_headline: "Telegram + Veb Dropshipping Savdo Ekotizimi",
        mixaro_problem: "Xitoydan tovar yetkazib berishda buyurtmalar va to'lovlarni qo'lda qayta ishlash xatoliklarga olib keladi.",
        mixaro_solution: "aiogram 3.x boti, interaktiv Telegram Mini App katalogi, avtomatlashtirilgan buyurtmalar oqimi va admin panelli savdo tizimi.",

        auto_headline: "Aqlli Biznes Jarayonlari & Mijozlar Avtomatlashtiruvi",
        auto_problem: "Kompaniyalar sekin javob berish sababli mijozlarni yo'qotadi va bir xil savollarga javob berishga ko'p vaqt sarflaydi.",
        auto_solution: "LLM API bilan integratsiya qilingan mijozlarni saralash boti, ko'p kanalli bildirishnomalar va avtomatik kundalik tahliliy hisobotlar.",

        dict_headline: "Android Lingvistik Mavzuiy Sinonimlar Lug'ati",
        dict_problem: "Tilshunoslar va talabalar uchun mavzular bo'yicha guruhlangan tezkor oflayn sinonimlar lug'ati zarur edi.",
        dict_solution: "Mavzuiy leksik guruhlar, tezkor indekslangan qidiruv, saralangan xatcho'plarga ega oflayn Android ilovasi.",

        // Skills
        skills_title: "Texnologik Stek & Muhandislik Arsenali",
        skills_subtitle: "Amaliyotda sinovdan o'tgan texnologiyalar, freymvorklar va arxitekturalar",
        cat_backend: "Backend & APIlar",
        cat_ai: "AI & LLM Tizimlari",
        cat_db: "Ma'lumotlar Bazasi & Kesh",
        cat_telegram: "Telegram Ekotizimi",
        cat_devops: "DevOps & Tizimlar",
        cat_frontend: "Frontend & Mobil",
        lang_skills_title: "Tillarni Bilish Darajasi",
        lang_uz: "O'zbek tili",
        lang_tg: "Tojik tili",
        lang_ru: "Rus tili",
        lang_en: "Ingliz tili",

        // GitHub
        github_pill: "Ochiq Kod & Repozitoriylar",
        github_title: "GitHub & Kod Faoliyati",
        github_subtitle: "Mening ochiq kodli repozitoriylarim, arxitektura va loyihalarim",
        pinned_title: "Asosiy Repozitoriylar",

        // Experience
        exp_title: "Kasbiy Tajriba & Faoliyat",
        exp_subtitle: "Texnik sohadagi faoliyatim va korporativ poydevorim",
        job1_date: "Yanvar 2026 — Hozirgacha",
        job1_title: "Dasturiy Ta'minot Texnik Qo'llab-quvvatlash Mutaxassisi",
        job1_desc: "Unicon Soft tashkilotida davlat va korporativ sektor uchun tizim integratsiyasi hamda biznesni avtomatlashtirish dasturlari infratuzilmasiga texnik xizmat ko'rsatish.",
        job2_date: "Avgust 2024 — Avgust 2025",
        job2_title: "Axborot va Tizimlarni Muvofiqlashtirish Yetakchi Mutaxassisi",
        job2_desc: "Respublika Ma'naviyat va ma'rifat markazi viloyat bo'limida axborot tadbirlarini rejalashtirish, ma'lumotlarni tahlil qilish va tashkilotlararo hisobotlarni monitoring qilish.",
        job3_date: "Sentyabr 2023 — Avgust 2024",
        job3_title: "Informatika va Algoritmlar O'qituvchisi",
        job3_desc: "42-sonli maktabda kompyuter fanlari, algoritmlar va Python dasturlash asoslari bo'yicha darslar o'tish, o'quv dasturlari va laboratoriya mashg'ulotlarini tashkil etish.",
        job4_date: "Mart 2023 — Iyun 2023",
        job4_title: "Tashqi Iqtisodiy Faoliyat Bosh Mutaxassisi",
        job4_desc: "Savdo-sanoat palatasida tadbirkorlarga bojxona, eksport-import operatsiyalari bo'yicha maslahatlar berish va xalqaro hamkorlik bo'yicha tahliliy hisobotlar tayyorlash.",
        btn_show_earlier: "Avvalgi Tajribani Ko'rish (2019-2023)",
        job5_date: "Oktyabr 2021 — Mart 2023",
        job5_title: "Tadbirkorlik O'quv Dasturlari Menejeri",
        job5_desc: "Toshkent viloyati tadbirkorlikka ko'maklashish markazida tadbirkorlar uchun o'quv kurslarini tashkil etish va raqamli vositalarni o'rgatish.",
        job6_date: "Aprel 2021 — Sentyabr 2021",
        job6_title: "Yoshlar Bilan Ishlash Yordamchisi",
        job6_desc: "Yoshlar ishlari agentligida raqamli savodxonlik tadbirlari va hududiy loyihalarni muvofiqlashtirish.",
        job8_date: "Oktyabr 2019 — Dekabr 2020",
        job8_title: "Informatika O'qituvchisi va Kotib",
        job8_desc: "47-sonli maktabda informatika o'qitish va rasmiy hujjatlar aylanishini boshqarish.",

        // Education
        edu_title: "Ta'lim & Sertifikatlar",
        edu_subtitle: "Akademik poydevor va doimiy dasturiy muhandislik malakasi",
        edu1_degree: "Oliy Ma'lumot: Matematika va Informatika",
        edu1_school: "Chirchiq davlat pedagogika universiteti (Toshkent viloyati)",
        edu1_desc: "Matematik modellashtirish, hisoblash mantig'i, ma'lumotlar tuzilmalari va kompyuter fanlari asoslarini chuqur o'rganish.",
        edu2_degree: "Python Dasturlash Mutaxassisligi",
        edu2_school: "Coursera Professional Sertifikati",
        edu2_desc: "OOP paradigmalari, API integratsiyasi, ma'lumotlar bazasi operatsiyalari va Python arxitekturasi bo'yicha malaka oshirish.",

        // Contact
        contact_pill: "Hamkorlik Qilaylik",
        contact_title: "Men Bilan Bog'lanish",
        contact_subtitle: "Loyiha, ish imkoniyati yoki AI avtomatlashtirish zarurati bormi? Muloqotga tayyorman.",
        contact_info_title: "To'g'ridan-to'g'ri Kanallar",
        contact_info_desc: "Telegram, email yoki telefon orqali bevosita bog'lanishingiz mumkin. Odatda bir necha soat ichida javob beraman (GMT+5).",
        form_name: "Ismingiz",
        form_email: "Email yoki Telegram / Telefon",
        form_email_placeholder: "sizning@email.com yoki @username",
        form_project_type: "Loyiha / Murojaat Turi",
        form_message: "Xabaringiz",
        form_submit: "Xabarni Yuborish",
        footer_rights: "Barcha huquqlar himoyalangan.",

        // Chatbot
        chat_bubble: "PositronAI dan so'rang!",
        chat_bot_name: "PositronAI",
        chat_online: "Onlayn & Tayyor",
        chat_greet: "Salom! Men PositronAI-man, Naimjonning AI assistentiman. Mendan uning loyihalari (EduAI, Pozitron, Mixaro), ko'nikmalari, xizmatlari yoki aloqalari haqida so'rang!",
        sug_projects: "EduAI va loyihalar haqida",
        sug_services: "Qanday xizmatlar ko'rsatasiz?",
        sug_skills: "Texnologik stekingiz qanday?",
        sug_contact: "Qanday bog'lansam bo'ladi?",
        chat_input_placeholder: "Biror narsa yozing (masalan, 'EduAI', 'FastAPI', 'AI')...",

        chat_msg_projects: "Naimjonning 3 ta asosiy flagman loyihasi:\n1. 🥇 **EduAI** — AI yordamida avtomatik baholovchi va mentorli ta'lim platformasi (FastAPI, LLMs, PWA).\n2. 🥈 **Pozitron Academy** — SuperMemo-2 intervalli takrorlash va kitob mutolaasiga ega til hamjamiyati.\n3. 🥉 **Mixaro Shop** — Xitoydan O'zbekistonga dropshipping Telegram bot va TMA ekotizimi.\n4. 4️⃣ **AI Automation System** — Biznes jarayonlarini AI bilan avtomatlashtirish.",
        chat_msg_services: "Naimjon quyidagi xizmatlarni taklif qiladi:\n- 🤖 **AI Avtomatlashtirish & LLM**: Maxsus AI agentlar, baholash, RAG.\n- ⚙️ **Backend & REST API**: Python, FastAPI, Flask, PostgreSQL, Docker.\n- 📱 **Telegram Botlar & Mini Applar**: aiogram 3.x, TMA, to'lovlar.\n- 📊 **Biznes Tahlil**: Avtomatik hisobotlar va CRM integratsiyasi.\n- 🌐 **Veb Ilovalar & PWA**: Mobil interfeyslar va oflayn ilovalar.",
        chat_msg_skills: "Naimjonning asosiy texnik arsenali:\n- **Backend**: Python, FastAPI, Flask, AsyncIO, REST APIs, JWT\n- **AI**: LLM APIs (OpenAI, Gemini, Claude, Ollama), Prompt Engineering\n- **Bazalar**: PostgreSQL, Redis, SQLite, Firebase\n- **Telegram**: aiogram 3.x, Telegram Mini Apps, Bot API\n- **DevOps**: Docker, Linux, Git, Vercel, SSH",
        chat_msg_contact: "Naimjon bilan to'g'ridan-to'g'ri bog'lanish:\n- 📱 **Telegram**: @Naimjon_Inomjonov\n- 📧 **Email**: naiminomjonov@gmail.com\n- 📞 **Telefon**: +998 (99) 837-08-23\n- 💻 **GitHub**: github.com/Inomjonoff",
        chat_msg_fallback: "Tushunmadim. Pastdagi tugmalardan birini bosing yoki EduAI, FastAPI, xizmatlar yoki aloqa haqida so'rang."
    },

    ru: {
        // Nav
        nav_about: "О себе",
        nav_services: "Услуги",
        nav_projects: "Проекты",
        nav_skills: "Стек технологий",
        nav_github: "GitHub",
        nav_experience: "Опыт",
        nav_contact: "Контакты",
        btn_hire: "Сотрудничество",

        // Hero
        hero_badge_text: "Открыт для удаленной работы и контрактов",
        hero_greet: "Наимжон Иномжонов",
        hero_role: "Python Backend & AI Automation Разработчик",
        hero_desc: "Разрабатываю практичные AI-приложения, системы бизнес-автоматизации и масштабируемые бэкенд-решения на Python.",
        btn_work_text: "Смотреть Проекты",
        btn_contact_text: "Связаться",
        btn_cv_text: "Резюме (CV)",
        profile_status: "Разработка AI & Backend систем",

        // Metrics
        metric_years: "Лет IT Опыта",
        metric_years_desc: "Программирование, бэкенд и поддержка",
        metric_projects: "Ключевых Проектов",
        metric_projects_desc: "EduAI, Pozitron, Mixaro и AI боты",
        metric_integrations: "API Интеграций",
        metric_integrations_desc: "LLMs, Telegram TMA, Платежи",
        metric_ai: "AI Платформы",
        metric_ai_desc: "Оценка, менторы и смарт-автоматизация",

        // About
        about_title: "О себе",
        about_subtitle: "Превращаю реальные задачи в практичные цифровые продукты",
        about_subheading: "Системный подход: архитектура превыше изолированного кода",
        about_p1: "Я разработчик, специализирующийся на бэкенд-разработке на Python, интеграции искусственного интеллекта и автоматизации бизнес-процессов. Я рассматриваю задачи комплексно: как Telegram-бот, база данных, REST API и веб-интерфейс работают как единый слаженный механизм.",
        about_p2: "Параллельно с корпоративным опытом в техподдержке ПО я развиваю собственные независимые платформы: <strong>EduAI</strong> (AI-платформа обучения и автопроверки), <strong>Pozitron Academy</strong> (сообщество изучения языков с интервальным повторением) и <strong>Mixaro Shop</strong> (автоматизированный дропшиппинг-маркетплейс).",
        pil1_title: "Системная Архитектура",
        pil1_desc: "Проектирование полного цикла: базы данных, асинхронные очереди, микросервисы и клиентские интерфейсы.",
        pil2_title: "AI Интеграция",
        pil2_desc: "Применение LLM API (OpenAI, Gemini, Ollama) для автопроверки кода/задач, интерактивных менторов и анализа данных.",
        pil3_title: "Бизнес Автоматизация",
        pil3_desc: "Устранение рутины: Telegram-боты, обработка заказов, пайплайны отчетности и клиентские воронки.",
        pil4_title: "Продуктовое Мышление",
        pil4_desc: "Отношение к коду как к активу бизнеса — надежность, безопасность, скорость доставки и реальная польза.",

        // Services
        services_title: "Что Я Могу Создать",
        services_subtitle: "Инженерные решения для масштабирования вашего бизнеса и цифровых продуктов",
        serv1_title: "AI Автоматизация & LLM",
        serv1_desc: "Автоматизация процессов с помощью LLM API (OpenAI, Gemini, Claude, Ollama). Кастомные AI-агенты, автопроверка заданий, RAG-системы.",
        serv2_title: "Backend Системы & REST API",
        serv2_desc: "Высокопроизводительная серверная архитектура на Python (FastAPI / Flask). Безопасная JWT аутентификация, PostgreSQL, Redis, Docker.",
        serv3_title: "Telegram Боты & Mini Apps",
        serv3_desc: "Продвинутые боты на aiogram 3.x и интерактивные Telegram Mini Apps (TMA) для e-commerce, приема платежей и администрирования.",
        serv4_title: "Бизнес Аналитика & Отчеты",
        serv4_desc: "Автоматизация воронок продаж, генерация PDF/Excel отчетов, интеграция данных и синхронизация с CRM.",
        serv5_title: "Веб-Приложения & PWA",
        serv5_desc: "Современные адаптивные веб-приложения и Progressive Web Apps (PWA) с поддержкой офлайн-режима.",
        serv_cta_badge: "Индивидуальные Решения",
        serv_cta_title: "Есть идея? Давайте создадим её.",
        serv_cta_desc: "От архитектуры до бэкенд-разработки и AI-интеграции — доведем ваш проект до рабочего продукта.",
        serv_cta_btn: "Обсудить Проект",

        // Projects
        proj_section_pill: "Флагманские Проекты",
        proj_title: "Избранные Проекты",
        proj_subtitle: "Реальные продукты на базе Python, AI, Telegram и современных бэкенд-архитектур",
        filter_all: "Все Проекты",
        filter_ai: "AI & Backend",
        filter_telegram: "Telegram & E-Commerce",
        filter_mobile: "Мобильные & Утилиты",

        status_active_dev: "Активная разработка",
        status_in_dev: "В разработке",
        status_live: "Релиз / Поддержка",
        btn_case_study: "Case Study 📖",
        btn_demo: "Демо / Запрос",

        eduai_headline: "Интерактивная AI-Платформа Обучения",
        eduai_problem: "Преподаватели тратят часы на составление и проверку заданий; студентам не хватает круглосуточного персонального ментора.",
        eduai_solution: "PWA-платформа с раздельными дашбордами преподавателя/студента, AI-ментором и модулем автоматической проверки заданий.",

        pozitron_headline: "Платформа Изучения Языков с Интервальным Повторением",
        pozitron_problem: "Учащиеся быстро забывают новые слова, нет удобных открытых инструментов для практики и повторения.",
        pozitron_solution: "Платформа с алгоритмом SuperMemo-2, интерактивным чтением книг со словарем, геймификацией и Telegram-ботом.",

        mixaro_headline: "Telegram + Web Дропшиппинг Экосистема",
        mixaro_problem: "Ручная обработка заказов и оплат из Китая в Узбекистан приводит к потерям заявок и задержкам.",
        mixaro_solution: "Бот на aiogram 3.x, каталог Telegram Mini App, автоматическая диспетчеризация заказов и панель аналитики.",

        auto_headline: "Умная Автоматизация Бизнес-Процессов и Лидов",
        auto_problem: "Компании теряют лиды из-за долгого ответа и тратят время сотрудников на типовые консультации.",
        auto_solution: "AI-бот квалификации лидов на базе LLM API, мгновенные оповещения и автоматическая ежедневная сводка руководству.",

        dict_headline: "Android Тематический Словарь Синонимов",
        dict_problem: "Лингвистам и студентам требовался быстрый офлайн-инструмент с тематической группировкой синонимов.",
        dict_solution: "Офлайн Android-приложение с лексическими категориями, быстрым поиском и системой закладок.",

        // Skills
        skills_title: "Технологический Стек & Арсенал",
        skills_subtitle: "Проверенные в продакшене технологии, фреймворки и архитектуры",
        cat_backend: "Backend & API",
        cat_ai: "AI & LLM Системы",
        cat_db: "Базы Данных & Кэш",
        cat_telegram: "Telegram Экосистема",
        cat_devops: "DevOps & Системы",
        cat_frontend: "Frontend & Мобайл",
        lang_skills_title: "Владение Языками",
        lang_uz: "Узбекский",
        lang_tg: "Таджикский",
        lang_ru: "Русский",
        lang_en: "Английский",

        // GitHub
        github_pill: "Open Source & Репозитории",
        github_title: "GitHub & Активность Кода",
        github_subtitle: "Мои открытые репозитории, архитектура и вклад в разработку",
        pinned_title: "Ключевые Репозитории",

        // Experience
        exp_title: "Опыт Работы & Карьера",
        exp_subtitle: "Мой профессиональный путь и системный фундамент",
        job1_date: "Январь 2026 — Настоящее время",
        job1_title: "Специалист Технической Поддержки ПО",
        job1_desc: "Unicon Soft: техническая поддержка и обслуживание ПО системной интеграции и автоматизации бизнес-процессов.",
        job2_date: "Август 2024 — Август 2025",
        job2_title: "Ведущий Специалист по Координации Информационных Систем",
        job2_desc: "Республиканский центр 'Маънавият ва маърифат': планирование и мониторинг информационных кампаний, анализ данных.",
        job3_date: "Сентябрь 2023 — Август 2024",
        job3_title: "Учитель Информатики и Алгоритмов",
        job3_desc: "Школа №42: обучение школьников основам программирования на Python, алгоритмизации и компьютерной грамотности.",
        job4_date: "Март 2023 — Июнь 2023",
        job4_title: "Главный Специалист по Внешнеэкономической Деятельности",
        job4_desc: "Торгово-промышленная палата: таможенные консультации предпринимателей, аналитика экспортно-импортных операций.",
        btn_show_earlier: "Показать Ранний Опыт (2019-2023)",
        job5_date: "Октябрь 2021 — Март 2023",
        job5_title: "Менеджер Обучающих Курсов для Предпринимателей",
        job5_desc: "Центр содействия предпринимательству: организация обучающих программ по цифровизации торговли.",
        job6_date: "Апрель 2021 — Сентябрь 2021",
        job6_title: "Помощник по Работе с Молодежью",
        job6_desc: "Агентство по делам молодежи: организация мероприятий по цифровой грамотности и молодежных проектов.",
        job8_date: "Октябрь 2019 — Декабрь 2020",
        job8_title: "Учитель Информатики и Делопроизводитель",
        job8_desc: "Школа №47: преподавание информатики и ведение официального документооборота.",

        // Education
        edu_title: "Образование & Сертификаты",
        edu_subtitle: "Академическая база и непрерывное повышение квалификации",
        edu1_degree: "Высшее Образование: Математика и Информатика",
        edu1_school: "Чирчикский государственный педагогический университет",
        edu1_desc: "Специализация в области математического моделирования, вычислительной логики, структур данных и информатики.",
        edu2_degree: "Специализация: Python Programming",
        edu2_school: "Coursera Professional Certification",
        edu2_desc: "Профессиональная сертификация: ООП, проектирование REST API, работа с базами данных и алгоритмы на Python.",

        // Contact
        contact_pill: "Сотрудничество",
        contact_title: "Связаться со Мной",
        contact_subtitle: "Есть проект, вакансия или задача по автоматизации? Напишите мне.",
        contact_info_title: "Прямые Каналы",
        contact_info_desc: "Вы можете написать мне в Telegram, на почту или позвонить. Обычно отвечаю в течение пары часов (GMT+5).",
        form_name: "Ваше Имя",
        form_email: "Email или Telegram / Телефон",
        form_email_placeholder: "you@example.com или @username",
        form_project_type: "Тип Проекта / Запроса",
        form_message: "Сообщение",
        form_submit: "Отправить Сообщение",
        footer_rights: "Все права защищены.",

        // Chatbot
        chat_bubble: "Спросить PositronAI!",
        chat_bot_name: "PositronAI",
        chat_online: "Онлайн & Готов",
        chat_greet: "Привет! Я PositronAI, AI-ассистент Наимжона. Спросите меня о его проектах (EduAI, Pozitron, Mixaro), стеке технологий или контактах!",
        sug_projects: "О проектах EduAI и Mixaro",
        sug_services: "Какие услуги вы предлагаете?",
        sug_skills: "Какой у вас стек?",
        sug_contact: "Как с вами связаться?",
        chat_input_placeholder: "Напишите вопрос (напр., 'EduAI', 'FastAPI', 'AI')...",

        chat_msg_projects: "Главные проекты Наимжона:\n1. 🥇 **EduAI** — Платформа обучения с AI-автопроверкой заданий и ментором (FastAPI, LLM, PWA).\n2. 🥈 **Pozitron Academy** — Платформа изучения языков с алгоритмом SuperMemo-2.\n3. 🥉 **Mixaro Shop** — Дропшиппинг экосистема с Telegram Mini App и aiogram 3.x.\n4. 4️⃣ **AI Automation** — Автоматизация бизнес-процессов и квалификация лидов.",
        chat_msg_services: "Услуги Наимжона:\n- 🤖 **AI Автоматизация**: LLM-агенты, RAG, автопроверка.\n- ⚙️ **Backend & REST API**: Python, FastAPI, Flask, PostgreSQL, Docker.\n- 📱 **Telegram Боты & Mini Apps**: aiogram 3.x, TMA, платежные интеграции.\n- 📊 **Бизнес Аналитика**: Пайплайны отчетов, CRM-интеграции.\n- 🌐 **Web & PWA**: Адаптивные приложения с поддержкой офлайн.",
        chat_msg_skills: "Технологический стек:\n- **Backend**: Python, FastAPI, Flask, AsyncIO, REST, JWT\n- **AI**: OpenAI, Gemini, Claude, Ollama, Prompt Engineering\n- **Databases**: PostgreSQL, Redis, SQLite, Firebase\n- **Telegram**: aiogram 3.x, TMA WebApp SDK\n- **DevOps**: Docker, Linux, Git, Vercel",
        chat_msg_contact: "Контакты Наимжона:\n- 📱 **Telegram**: @Naimjon_Inomjonov\n- 📧 **Email**: naiminomjonov@gmail.com\n- 📞 **Телефон**: +998 (99) 837-08-23\n- 💻 **GitHub**: github.com/Inomjonoff",
        chat_msg_fallback: "Не совсем понял запрос. Выберите вопрос из кнопок ниже или спросите о проектах, стеке или контактах."
    },

    en: {
        // Nav
        nav_about: "About",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_skills: "Tech Stack",
        nav_github: "GitHub",
        nav_experience: "Experience",
        nav_contact: "Contact",
        btn_hire: "Hire Me",

        // Hero
        hero_badge_text: "Available for Remote / Contract Work",
        hero_greet: "Naimjon Inomjonov",
        hero_role: "Python Backend & AI Automation Developer",
        hero_desc: "I build practical AI-powered applications, automation systems, and backend solutions that turn complex business workflows into smooth digital products.",
        btn_work_text: "View Projects",
        btn_contact_text: "Hire Me",
        btn_cv_text: "Get CV",
        profile_status: "Building AI & Backend Systems",

        // Metrics
        metric_years: "Years IT Background",
        metric_years_desc: "Support, systems & programming",
        metric_projects: "Core Projects",
        metric_projects_desc: "EduAI, Pozitron, Mixaro & Bots",
        metric_integrations: "API Integrations",
        metric_integrations_desc: "LLMs, Telegram TMA, Payments",
        metric_ai: "AI Platforms",
        metric_ai_desc: "Grading, mentors & smart automation",

        // About
        about_title: "About Me",
        about_subtitle: "Turning real-world problems into practical digital products",
        about_subheading: "Systemic Mindset: Architecture Over Isolated Code",
        about_p1: "I am a developer focused on Python backend development, AI integrations, and business automation. I don't just write individual scripts; I build cohesive systems where APIs, databases, Telegram bots, and modern web applications seamlessly communicate to solve real operational challenges.",
        about_p2: "Alongside my corporate experience in software support and system coordination, I actively design and scale independent platforms like <strong>EduAI</strong> (AI education & assessment), <strong>Pozitron Academy</strong> (spaced-repetition language community), and <strong>Mixaro Shop</strong> (automated dropshipping e-commerce).",
        pil1_title: "Systemic Architecture",
        pil1_desc: "Designing end-to-end flows: databases, asynchronous queues, API microservices, and client interfaces.",
        pil2_title: "AI Integration",
        pil2_desc: "Integrating LLMs (OpenAI, Gemini, Ollama) for practical tasks like grading, contextual mentors, and smart parsing.",
        pil3_title: "Business Automation",
        pil3_desc: "Automating tedious operations: Telegram bots, sales dispatching, reporting pipelines, and customer workflows.",
        pil4_title: "Product Mindset",
        pil4_desc: "Treating code as a business asset — prioritizing UX, reliability, security, and speed of delivery.",

        // Services
        services_title: "What I Can Build",
        services_subtitle: "Specialized engineering services to power your business and digital products",
        serv1_title: "AI Automation & LLMs",
        serv1_desc: "Automate complex workflows with LLM APIs (OpenAI, Gemini, Anthropic, Ollama). Custom AI agents, automated grading systems, intelligent document parsing, and RAG knowledge engines.",
        serv2_title: "Backend Systems & REST APIs",
        serv2_desc: "Robust server-side architecture built with Python (FastAPI / Flask). Secure authentication, database schemas, asynchronous tasks, and high-throughput RESTful endpoints.",
        serv3_title: "Telegram Bots & Mini Apps",
        serv3_desc: "High-performance Telegram bots (aiogram 3.x) and interactive Telegram Mini Apps (TMA) for e-commerce, automated ordering, payment gateways, and community management.",
        serv4_title: "Business Analytics & Automation",
        serv4_desc: "Automate sales pipelines, recurring reports, data extraction, and CRM synchronization to eliminate repetitive manual work and give management clear visibility.",
        serv5_title: "Web Applications & PWAs",
        serv5_desc: "Responsive full-stack web applications and offline-ready Progressive Web Apps (PWAs) with modern UI, optimized loading speeds, and robust API integration.",
        serv_cta_badge: "Custom Solutions",
        serv_cta_title: "Have an idea? Let's build it.",
        serv_cta_desc: "From concept to architecture, backend development, and AI integration — let's turn your project into a working reality.",
        serv_cta_btn: "Get in Touch",

        // Projects
        proj_section_pill: "Flagship Engineering",
        proj_title: "Featured Projects",
        proj_subtitle: "Real-world applications built with Python, AI, Telegram, and modern backend systems",
        filter_all: "All Projects",
        filter_ai: "AI & Backend",
        filter_telegram: "Telegram & E-Commerce",
        filter_mobile: "Mobile & Tools",

        status_active_dev: "Active Development",
        status_in_dev: "In Development",
        status_live: "Live / Maintained",
        btn_case_study: "Case Study 📖",
        btn_demo: "Live Demo / Request",

        eduai_headline: "AI-Powered Interactive Education Platform",
        eduai_problem: "Teachers spend extensive hours manually generating and grading homework; students lack 24/7 personalized explanations and interactive practice.",
        eduai_solution: "An AI-powered PWA with dedicated teacher/student dashboards, interactive assignments, contextual AI mentor, and automated assessment engine.",

        pozitron_headline: "Language Learning & Spaced Repetition Platform",
        pozitron_problem: "Language learners struggle with vocabulary retention, lack structured habit loops, and need accessible peer-to-peer practice without paywalls.",
        pozitron_solution: "An open learning platform combining SuperMemo-2 spaced repetition, interactive books with instant dictionary, gamified levels, and Telegram bot integration.",

        mixaro_headline: "Telegram + Web E-Commerce Dropshipping Platform",
        mixaro_problem: "Managing China-to-Uzbekistan dropshipping via manual spreadsheets and direct messaging leads to missed orders and payment bottlenecks.",
        mixaro_solution: "An automated commerce ecosystem with an aiogram 3.x Telegram bot, interactive Telegram Mini App catalogue, automated order dispatch, and admin analytics.",

        auto_headline: "Intelligent Business Workflow & Lead Automation",
        auto_problem: "Companies lose inbound leads due to slow response times and waste hours on repetitive manual inquiries and manual reporting.",
        auto_solution: "Automated lead intake bot integrated with LLM APIs for instant qualification, multi-channel notifications, and automated executive reports.",

        dict_headline: "Android Application & Linguistic Search",
        dict_problem: "Linguists and students lacked a structured, offline thematic synonym reference tool categorized by context rather than just alphabetical order.",
        dict_solution: "An offline-capable Android application featuring thematic lexical groups, sub-grouping, fast indexed search, and custom bookmarks.",

        // Skills
        skills_title: "Tech Stack & Engineering Arsenal",
        skills_subtitle: "Production-tested technologies, frameworks, and architectures",
        cat_backend: "Backend & APIs",
        cat_ai: "AI & LLMs",
        cat_db: "Databases & Cache",
        cat_telegram: "Telegram Ecosystem",
        cat_devops: "DevOps & Systems",
        cat_frontend: "Frontend & Mobile",
        lang_skills_title: "Languages Fluency",
        lang_uz: "Uzbek",
        lang_tg: "Tajik",
        lang_ru: "Russian",
        lang_en: "English",

        // GitHub
        github_pill: "Open Source & Repositories",
        github_title: "GitHub & Code Activity",
        github_subtitle: "Explore my active repositories, code architecture, and contributions",
        pinned_title: "Key Repositories",

        // Experience
        exp_title: "Professional Experience & Background",
        exp_subtitle: "My technical career journey and enterprise support foundations",
        job1_date: "Jan 2026 — Present",
        job1_title: "IT Support Specialist",
        job1_desc: "Providing technical support and troubleshooting software infrastructure for system integration and business automation products in government and enterprise sectors.",
        job2_date: "Aug 2024 — Aug 2025",
        job2_title: "Lead Information & Systems Coordinator",
        job2_desc: "Planned, managed, and executed regional information campaigns, public outreach, and cross-organizational data coordination. Analyzed campaign metrics and efficiency reports.",
        job3_date: "Sep 2023 — Aug 2024",
        job3_title: "Informatics & Algorithms Teacher",
        job3_desc: "Educated high school students on computer science fundamentals, algorithms, and Python programming. Created learning curriculum and hands-on laboratory exercises.",
        job4_date: "Mar 2023 — Jun 2023",
        job4_title: "Chief Specialist in External Economic Affairs",
        job4_desc: "Consulted businesses on customs regulations, export-import operations, and performed market analysis to connect local companies with international trade partners.",
        btn_show_earlier: "View Earlier Experience (2019-2023)",
        job5_date: "Oct 2021 — Mar 2023",
        job5_title: "Manager of Educational Programs",
        job5_desc: "Managed educational pathways and designed training workshops for small-to-medium enterprise owners on commerce digitizing.",
        job6_date: "Apr 2021 — Sep 2021",
        job6_title: "Youth Affairs Assistant",
        job6_desc: "Organized local youth talent programs, digital literacy events, and regional social initiatives.",
        job8_date: "Oct 2019 — Dec 2020",
        job8_title: "Informatics Teacher & Secretary",
        job8_desc: "Taught computing basics and coordinated official documentation flow and administrative workflows.",

        // Education
        edu_title: "Education & Certifications",
        edu_subtitle: "Academic foundations and continuous software engineering qualifications",
        edu1_degree: "Higher Education Degree: Mathematics & Informatics",
        edu1_school: "Chirchik State Pedagogical University of Tashkent Region",
        edu1_desc: "Specialization in Mathematics, Computer Science, and Algorithmic Foundations. Deep study of mathematical modeling, computational logic, and data structures.",
        edu2_degree: "Python Programming Specialization",
        edu2_school: "Coursera Professional Certification",
        edu2_desc: "Professional development certification covering software engineering paradigms, OOP design, API web integrations, and database operations in Python.",

        // Contact
        contact_pill: "Let's Collaborate",
        contact_title: "Get In Touch",
        contact_subtitle: "Have a project, job opportunity, or AI automation need? Let's talk.",
        contact_info_title: "Direct Channels",
        contact_info_desc: "Feel free to reach out via Telegram, email, or direct call. I typically respond within a few hours (GMT+5).",
        form_name: "Your Name",
        form_email: "Email or Telegram / Phone",
        form_email_placeholder: "you@example.com or @username",
        form_project_type: "Project / Inquiry Type",
        form_message: "Message",
        form_submit: "Send Message",
        footer_rights: "All rights reserved.",

        // Chatbot
        chat_bubble: "Ask PositronAI!",
        chat_bot_name: "PositronAI",
        chat_online: "Online & Ready",
        chat_greet: "Hi! I am PositronAI, Naimjon's AI Assistant. Ask me anything about his projects (EduAI, Pozitron, Mixaro), tech stack, services, or contact details!",
        sug_projects: "Tell me about EduAI & Projects",
        sug_services: "What services can you build?",
        sug_skills: "What is your tech stack?",
        sug_contact: "How do I hire or contact you?",
        chat_input_placeholder: "Ask something (e.g. 'EduAI', 'FastAPI', 'Automation')...",

        chat_msg_projects: "Naimjon's top flagship projects:\n1. 🥇 **EduAI** — AI-powered interactive education platform with automated assessment & mentor (FastAPI, LLMs, PWA).\n2. 🥈 **Pozitron Academy** — Open language learning platform with SuperMemo-2 spaced repetition & interactive reader.\n3. 🥉 **Mixaro Shop** — China-to-Uzbekistan dropshipping automated ecosystem with Telegram Mini App & aiogram 3.x.\n4. 4️⃣ **AI Automation System** — Business process automation & lead qualification.",
        chat_msg_services: "Services Naimjon can build:\n- 🤖 **AI Automation & LLMs**: Custom agents, automated grading, RAG.\n- ⚙️ **Backend & REST APIs**: Python, FastAPI, Flask, PostgreSQL, Docker.\n- 📱 **Telegram Bots & TMAs**: aiogram 3.x, Telegram Mini Apps, payment flows.\n- 📊 **Business Analytics**: Automated reports (PDF/Excel), CRM integrations.\n- 🌐 **Web Apps & PWAs**: Responsive client portals & offline-ready PWAs.",
        chat_msg_skills: "Technical Arsenal:\n- **Backend**: Python, FastAPI, Flask, AsyncIO, REST APIs, JWT, SQLAlchemy\n- **AI & LLMs**: OpenAI API, Google Gemini, Claude, Ollama, Prompt Engineering\n- **Databases**: PostgreSQL, Redis, MySQL, SQLite, Firebase\n- **Telegram**: aiogram 3.x, TMA WebApp SDK, Bot API\n- **DevOps**: Docker, Docker Compose, Linux, Git, Vercel",
        chat_msg_contact: "Contact Naimjon directly:\n- 📱 **Telegram**: @Naimjon_Inomjonov\n- 📧 **Email**: naiminomjonov@gmail.com\n- 📞 **Phone**: +998 (99) 837-08-23\n- 💻 **GitHub**: github.com/Inomjonoff",
        chat_msg_fallback: "I didn't quite get that. Click one of the suggestions below or ask about EduAI, FastAPI, services, or contact details."
    }
};

/* ==========================================================================
   CASE STUDY DETAILED DATA (UZ, RU, EN)
   ========================================================================== */
const caseStudies = {
    eduai: {
        tag: "Flagship 01 · Case Study",
        title: "EduAI — AI-Powered Interactive Education Platform",
        github: "https://github.com/Inomjonoff/eduai",
        demo: "#contact",
        content: {
            uz: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Loyiha haqida</h4>
                    <p>EduAI — bu an'anaviy video ma'ruzalardan voz kechib, amaliyotga va interaktiv muloqotga asoslangan ta'lim platformasi. Unda o'qituvchilar uchun topshiriqlar yaratish va tekshirish, o'quvchilar uchun esa 24/7 ishlovchi shaxsiy AI mentor tizimi mavjud.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Muammo</span>
                        <p>O'qituvchilar yuzlab talabalarning uy vazifalarini qo'lda tekshirishga katta vaqt sarflaydi. Talabalar esa darsdan tashqari paytda xatolarini tushunish uchun tezkor fikr-mulohaza ololmaydi.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Yechim</span>
                        <p>FastAPI va LLM API integratsiyasi asosida avtomatik baholash, xatolarni tushuntirish va o'quvchining savollariga individual javob beruvchi intellektual mentor tizimi ishlab chiqildi.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-network-wired text-purple"></i> Texnik Arxitektura</h4>
                    <pre class="cs-arch-code">Student / Teacher (PWA Frontend)
       ↓ (HTTPS / JWT Auth)
FastAPI Backend (Async Endpoints)
       ↓
PostgreSQL (Users, Assignments, Submissions) + Redis (Cache & Rate Limits)
       ↓
AI Evaluation Engine (Gemini / OpenAI API + Prompt Engineering)
       ↓
Instant Score + Detailed Feedback + Progress Analytics</pre>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Asosiy Funksiyalar</h4>
                    <p>• O'qituvchi va o'quvchi uchun alohida boshqaruv panellari (Dashboards)<br>• Kod va matnli javoblarni AI orqali tekshirish va baholash<br>• Savol-javob qiluvchi kontekstli AI Mentor<br>• Oflayn rejimda ishlovchi PWA arxitekturasi</p>
                </div>
            `,
            ru: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Обзор Проекта</h4>
                    <p>EduAI — образовательная платформа нового поколения, заменяющая пассивный просмотр видеолекций на интерактивную практику с мгновенной обратной связью от ИИ.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Проблема</span>
                        <p>Учителя перегружены ручной проверкой сотен домашних заданий, а ученики не получают мгновенного разбора своих ошибок во время самостоятельной работы.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Решение</span>
                        <p>Создан движок автооценки и интерактивный AI-ментор на базе FastAPI и LLM API, выдающий разбор решений и персональные рекомендации 24/7.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-network-wired text-purple"></i> Техническая Архитектура</h4>
                    <pre class="cs-arch-code">Студент / Преподаватель (PWA Frontend)
       ↓ (JWT Autentication)
FastAPI Бэкенд (AsyncIO)
       ↓
PostgreSQL (Данные и Задания) + Redis (Кэширование)
       ↓
AI Evaluation Engine (Интеграция LLM API + Промпт-инжиниринг)
       ↓
Автопроверка + Разбор ошибок + Статистика прогресса</pre>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Реализованный Функционал</h4>
                    <p>• Раздельные дашборды для студентов и преподавателей<br>• Автоматическая оценка кода и ответов через AI<br>• Интерактивный виртуальный тьютор (AI Mentor)<br>• PWA поддержка с возможностью установки на мобильные устройства</p>
                </div>
            `,
            en: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Project Overview</h4>
                    <p>EduAI is a practice-first educational platform designed to replace passive video lectures with real-time AI code evaluation, math reasoning, and interactive 24/7 mentorship.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> The Problem</span>
                        <p>Teachers spend dozens of hours manually grading assignments, while students lack instant guidance when studying independently outside classroom hours.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> The Solution</span>
                        <p>A scalable FastAPI backend integrated with LLM APIs to provide automated grading, mistake explanations, and interactive AI mentor chat.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-network-wired text-purple"></i> Technical Architecture</h4>
                    <pre class="cs-arch-code">Student / Teacher (PWA Client)
       ↓ (HTTPS / JWT Auth)
FastAPI Backend (Async Endpoints)
       ↓
PostgreSQL (Users, Assignments, Submissions) + Redis (Cache)
       ↓
AI Evaluation Engine (Gemini / OpenAI API + Prompt Engineering)
       ↓
Instant Score + Mistake Breakdown + Learning Analytics</pre>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Key Capabilities</h4>
                    <p>• Dedicated Student and Teacher Dashboards<br>• Automated AI Homework Evaluation & Scoring<br>• 24/7 Contextual AI Mentor Chatbot<br>• Offline-capable PWA Architecture</p>
                </div>
            `
        }
    },

    pozitron: {
        tag: "Flagship 02 · Case Study",
        title: "Pozitron Academy — Language Learning & Spaced Repetition Platform",
        github: "https://github.com/Inomjonoff/pozitron-academy",
        demo: "#contact",
        content: {
            uz: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Loyiha haqida</h4>
                    <p>Pozitron Academy — tillarni bepul va samarali o'rganish uchun yaratilgan ochiq hamjamiyat platformasi. Unda SuperMemo-2 intervalli takrorlash algoritmi, interaktiv kitob mutolaasi va geymifikatsiya birlashtirilgan.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Muammo</span>
                        <p>Til o'rganuvchilar yangi so'zlarni tez unutib qo'yadi va zerikarli jadvallar sababli doimiy odat shakllantira olmaydi.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Yechim</span>
                        <p>SuperMemo-2 intervalli takrorlash tizimi, bir marta bosishda tarjima qiluvchi interaktiv kitoblar va Telegram boti bilan birlashtirilgan ekotizim ishlab chiqildi.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Asosiy Imkoniyatlar</h4>
                    <p>• Aqlli flesh-kartalar va SuperMemo-2 algoritmi<br>• Notanish so'zlarni avtomatik lug'atga saqlovchi kitoblar mutolaasi<br>• Darajalar, yutuqlar va kundalik 'streak' geymifikatsiyasi<br>• Hamjamiyat uchun Telegram o'quv boti</p>
                </div>
            `,
            ru: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Обзор Проекта</h4>
                    <p>Pozitron Academy — открытая коммьюнити-платформа для изучения языков, объединяющая интервальное повторение SuperMemo-2, интерактивное чтение книг и Telegram-бота.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Проблема</span>
                        <p>Учащиеся быстро забывают словарный запас без научно обоснованной системы повторения и теряют мотивацию.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Решение</span>
                        <p>Реализован алгоритм SuperMemo-2, умные карточки слов с озвучкой, сохранение слов в 1 клик при чтении книг и Telegram-уведомления.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Реализованный Функционал</h4>
                    <p>• Алгоритм интервального повторения SuperMemo-2<br>• Модуль чтения книг с мгновенным контекстным переводом<br>• Геймификация: ранги (Starter → Master), стрики и достижения<br>• Telegram-бот для синхронизации словарного запаса</p>
                </div>
            `,
            en: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Project Overview</h4>
                    <p>Pozitron Academy is an open, community-driven language learning platform combining scientific SuperMemo-2 spaced repetition, bilingual interactive book reading, and Telegram community bot integration.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> The Problem</span>
                        <p>Language learners struggle with vocabulary retention without scientifically backed spaced repetition intervals and lose study momentum.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> The Solution</span>
                        <p>Engineered an intelligent vocabulary system with SuperMemo-2 review scheduling, 1-click word lookup in interactive reader, and Telegram study companion.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Key Capabilities</h4>
                    <p>• SuperMemo-2 Spaced Repetition Scheduling Engine<br>• Interactive Book Reader with Instant Word Translation & Audio<br>• Gamified Ranks (Starter to Legend), Streaks & XP<br>• Telegram Study Bot Sync</p>
                </div>
            `
        }
    },

    mixaro: {
        tag: "Flagship 03 · Case Study",
        title: "Mixaro Shop — Telegram + Web E-Commerce Dropshipping Ecosystem",
        github: "https://github.com/Inomjonoff/mixaro-shop",
        demo: "#contact",
        content: {
            uz: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Loyiha haqida</h4>
                    <p>Mixaro Shop — Xitoydan O'zbekistonga tovarlar keltiruvchi dropshipping savdo platformasi. U Telegram bot, veb-sayt va Telegram Mini App'ni yagona ma'lumotlar bazasiga birlashtiradi.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Muammo</span>
                        <p>Buyurtmalarni qo'lda qabul qilish, to'lovlarni tekshirish va logistika hisoboti ko'p vaqt va xatoliklarga sabab bo'lgan.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Yechim</span>
                        <p>aiogram 3.x Telegram boti, Telegram Mini App savat tizimi, PostgreSQL ma'lumotlar bazasi va admin paneli orqali to'liq avtomatlashtirildi.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Asosiy Imkoniyatlar</h4>
                    <p>• Telegram Mini App interaktiv savdo katalogi<br>• Buyurtmalarni avtomatik qabul qilish va boshqarish<br>• To'lov va logistika holatini kuzatish<br>• Savdo va tovarlar bo'yicha admin tahliliy paneli</p>
                </div>
            `,
            ru: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Обзор Проекта</h4>
                    <p>Mixaro Shop — торговая площадка по продаже товаров из Китая в Узбекистан по модели дропшиппинга, объединяющая Telegram Mini App, aiogram 3.x и бэкенд на Python.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Проблема</span>
                        <p>Ручной прием заказов в переписках, путаница с чеками и отсутствие единой системы остатков товаров.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Решение</span>
                        <p>Разработана автоматизированная экосистема: Telegram-бот заказов, Telegram Mini App каталог, база данных PostgreSQL и админ-панель.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Реализованный Функционал</h4>
                    <p>• Интерактивный Telegram Mini App каталог с корзиной<br>• Асинхронная обработка заказов на базе aiogram 3.x<br>• Интеграция с P2P/Payoneer потоками платежей<br>• Админ-панель аналитики продаж и складских остатков</p>
                </div>
            `,
            en: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Project Overview</h4>
                    <p>Mixaro Shop is a China-to-Uzbekistan dropshipping automated e-commerce ecosystem featuring a Telegram Mini App catalogue, aiogram 3.x order bot, and robust PostgreSQL backend.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> The Problem</span>
                        <p>Manual order processing via direct messaging led to missed customer orders, delayed payments, and unorganized logistics tracking.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> The Solution</span>
                        <p>Built a unified platform with an interactive Telegram Mini App cart, automated order dispatch pipeline, and real-time admin analytics dashboard.</p>
                    </div>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Key Capabilities</h4>
                    <p>• Telegram Mini App (TMA) Touch-first Shopping Cart<br>• Automated Asynchronous Order Processing (aiogram 3.x)<br>• Real-time Sales, Revenue, and Inventory Analytics<br>• Multi-tier Admin Management Console</p>
                </div>
            `
        }
    },

    automation: {
        tag: "Flagship 04 · Case Study",
        title: "AI Automation System — Business Workflow & Lead Engine",
        github: "https://github.com/Inomjonoff",
        demo: "#contact",
        content: {
            uz: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Loyiha haqida</h4>
                    <p>Biznes jarayonlarini va mijozlar oqimini avtomatlashtiruvchi intellektual tizim. Kompaniyalarga tushgan har bir so'rovni LLM orqali tahlil qiladi va saralaydi.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Muammo</span>
                        <p>Mijozlarning so'rovlariga kech javob berilishi sababli kelib tushgan lidlar yo'qotiladi, hisobotlar esa qo'lda tuziladi.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Yechim</span>
                        <p>24/7 ishlovchi AI mijozlar boti, avtomatik saralash va rahbariyat uchun kunlik tahliliy hisobotlar yuboruvchi tizim.</p>
                    </div>
                </div>
            `,
            ru: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Обзор Проекта</h4>
                    <p>Интеллектуальная система автоматизации бизнес-процессов и квалификации входящих заявок с использованием LLM API и Telegram.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> Проблема</span>
                        <p>Потеря лидов из-за задержек в ответах менеджеров и отсутствие прозрачной аналитики входящих обращений.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> Решение</span>
                        <p>Разработан 24/7 AI-бот для мгновенной квалификации клиентов, автозаписи в базу и отправки сводных отчетов руководству.</p>
                    </div>
                </div>
            `,
            en: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Project Overview</h4>
                    <p>An intelligent business automation and lead qualification engine combining LLM APIs, async Telegram webhooks, and executive reporting pipelines.</p>
                </div>
                <div class="cs-box-grid">
                    <div class="cs-box">
                        <span class="cs-box-label text-pink"><i class="fa-solid fa-triangle-exclamation"></i> The Problem</span>
                        <p>Businesses lose potential clients due to delayed responses to inbound inquiries and spend hours manually drafting summary reports.</p>
                    </div>
                    <div class="cs-box">
                        <span class="cs-box-label text-cyan"><i class="fa-solid fa-circle-check"></i> The Solution</span>
                        <p>A 24/7 AI lead intake system that qualifies inquiries in real time, synchronizes customer data, and dispatches automated daily executive digests.</p>
                    </div>
                </div>
            `
        }
    },

    dictionary: {
        tag: "Flagship 05 · Case Study",
        title: "Thematic Synonym Dictionary — Android Application",
        github: "https://github.com/Inomjonoff/thematic-synonym-dictionary",
        demo: "#contact",
        content: {
            uz: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Loyiha haqida</h4>
                    <p>O'zbek tili sinonimlarini mavzular bo'yicha tizimlashtirgan va oflayn qidiruv imkoniyatini beruvchi Android mobil ilovasi.</p>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Imkoniyatlar</h4>
                    <p>• SQLite ma'lumotlar bazasi orqali lahzalik oflayn qidiruv<br>• Mavzuiy leksik guruhlar va semantik bog'liqliklar<br>• Sevimli so'zlarni saqlash va xatcho'plar</p>
                </div>
            `,
            ru: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Обзор Проекта</h4>
                    <p>Мобильное Android-приложение для тематического поиска и структурирования синонимов с поддержкой полноценного офлайн-режима.</p>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Возможности</h4>
                    <p>• Мгновенный индексированный офлайн поиск на базе SQLite<br>• Тематические группы и контекстные синонимы<br>• Система закладок и заметок</p>
                </div>
            `,
            en: `
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-circle-info text-cyan"></i> Project Overview</h4>
                    <p>An offline-capable Android application offering fast indexed lexical search and thematic grouping of synonyms for researchers and students.</p>
                </div>
                <div class="cs-section">
                    <h4 class="cs-section-title"><i class="fa-solid fa-list-check text-teal"></i> Key Capabilities</h4>
                    <p>• Instant Offline Indexed SQLite Search<br>• Thematic Lexical Categorization<br>• Bookmarks and User Notes</p>
                </div>
            `
        }
    }
};

/* ==========================================================================
   LANGUAGE ENGINE
   ========================================================================== */
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update active UI label
    const activeLangEl = document.getElementById('active-lang');
    if (activeLangEl) activeLangEl.textContent = lang.toUpperCase();

    // Mark active in dropdown
    const dropdownItems = document.querySelectorAll('#lang-dropdown li');
    dropdownItems.forEach(item => {
        if (item.getAttribute('data-lang') === lang) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Translate DOM elements
    const translatableElements = document.querySelectorAll('[data-key]');
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key] !== undefined) {
            const translation = translations[lang][key];

            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translation);
            } else {
                el.innerHTML = translation;
            }
        }
    });
}

// Language Dropdown Event Handlers
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    const langMenuBtn = document.getElementById('lang-menu-btn');
    const langSwitcher = langMenuBtn ? langMenuBtn.parentElement : null;
    const langDropdown = document.getElementById('lang-dropdown');

    if (langMenuBtn && langSwitcher && langDropdown) {
        langMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle('open');
        });

        langDropdown.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.getAttribute('data-lang');
                setLanguage(lang);
                langSwitcher.classList.remove('open');
            });
        });

        document.addEventListener('click', () => {
            langSwitcher.classList.remove('open');
        });
    }

    initMobileNav();
    initProjectFilters();
    initEarlierExpToggle();
    initCaseStudyModal();
    initContactForm();
    initChatBot();
    initScrollSpy();
});

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('active');
        });
    });
}

/* ==========================================================================
   PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-featured');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   EARLIER EXPERIENCE TOGGLE
   ========================================================================== */
function initEarlierExpToggle() {
    const toggleBtn = document.getElementById('toggle-earlier-exp');
    const expPane = document.getElementById('earlier-exp-pane');
    const chevron = document.getElementById('earlier-chevron');

    if (!toggleBtn || !expPane) return;

    toggleBtn.addEventListener('click', () => {
        const isHidden = expPane.style.display === 'none';
        expPane.style.display = isHidden ? 'block' : 'none';
        if (chevron) {
            chevron.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
        }
    });
}

/* ==========================================================================
   CASE STUDY MODAL WINDOW
   ========================================================================== */
function initCaseStudyModal() {
    const modal = document.getElementById('case-study-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');
    const openButtons = document.querySelectorAll('.open-case-study');

    if (!modal || !modalBody) return;

    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectKey = btn.getAttribute('data-project');
            const data = caseStudies[projectKey];

            if (!data) return;

            modalTag.textContent = data.tag;
            modalTitle.textContent = data.title;

            // Injected localized content
            const contentHtml = data.content[currentLang] || data.content['en'];
            modalBody.innerHTML = contentHtml;

            // Injected action footer
            modalFooter.innerHTML = `
                <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                    <i class="fa-brands fa-github"></i> <span>GitHub Repo</span>
                </a>
                <a href="${data.demo}" class="btn btn-primary btn-sm" onclick="document.getElementById('case-study-modal').classList.remove('active')">
                    <i class="fa-solid fa-paper-plane"></i> <span>Discuss / Hire</span>
                </a>
            `;

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ==========================================================================
   SCROLL SPY & HEADER SHADOW
   ========================================================================== */
function initScrollSpy() {
    const header = document.getElementById('top-header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            if (header) header.classList.add('scrolled');
        } else {
            if (header) header.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 160) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   CONTACT FORM DISPATCH
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');
    const formStatus = document.getElementById('form-status');

    if (!contactForm || !formSubmitBtn) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        formSubmitBtn.disabled = true;
        const originalBtnHTML = formSubmitBtn.innerHTML;

        const loadingTexts = {
            uz: "Xabar yuborilmoqda...",
            ru: "Отправка сообщения...",
            en: "Sending Message..."
        };

        formSubmitBtn.innerHTML = `<span>${loadingTexts[currentLang] || loadingTexts.en}</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

        const nameVal = document.getElementById('name').value;
        const emailVal = document.getElementById('email').value;
        const projectTypeVal = document.getElementById('project_type') ? document.getElementById('project_type').value : 'General Inquiry';
        const messageVal = document.getElementById('message').value;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameVal,
                    email: emailVal,
                    project_type: projectTypeVal,
                    message: messageVal
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                const successMsgs = {
                    uz: `Rahmat, ${nameVal}! Xabaringiz Telegram orqali muvaffaqiyatli yuborildi.`,
                    ru: `Спасибо, ${nameVal}! Ваше сообщение успешно отправлено в Telegram.`,
                    en: `Thank you, ${nameVal}! Your message has been successfully sent to Telegram.`
                };
                formStatus.className = "form-status success";
                formStatus.textContent = successMsgs[currentLang] || successMsgs.en;
                contactForm.reset();
            } else {
                throw new Error(data.error || 'Failed to send');
            }
        } catch (err) {
            console.error("Contact Form Error:", err);
            const errorMsgs = {
                uz: "Xabarni yuborishda xatolik yuz berdi. Iltimos, to'g'ridan-to'g'ri Telegram orqali yozing: @Naimjon_Inomjonov",
                ru: "Ошибка отправки. Пожалуйста, напишите напрямую в Telegram: @Naimjon_Inomjonov",
                en: "An error occurred while sending. Please contact directly on Telegram: @Naimjon_Inomjonov"
            };
            formStatus.className = "form-status error";
            formStatus.textContent = errorMsgs[currentLang] || errorMsgs.en;
        } finally {
            formSubmitBtn.innerHTML = originalBtnHTML;
            formSubmitBtn.disabled = false;
        }
    });
}

/* ==========================================================================
   INTERACTIVE AI CHATBOT (POSITRONAI)
   ========================================================================== */
function initChatBot() {
    const chatWidget = document.getElementById('chat-widget');
    const chatToggle = document.getElementById('chat-toggle');
    const chatClose = document.getElementById('chat-close');
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatSuggestions = document.getElementById('chat-suggestions');

    if (!chatToggle || !chatContainer || !chatMessages) return;

    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
        scrollChatBottom();
    });

    if (chatClose) {
        chatClose.addEventListener('click', (e) => {
            e.stopPropagation();
            chatContainer.classList.remove('active');
        });
    }

    if (chatSuggestions) {
        chatSuggestions.addEventListener('click', (e) => {
            const btn = e.target.closest('.suggestion-btn');
            if (btn) {
                const questionText = btn.textContent.trim();
                handleUserMessage(questionText);
            }
        });
    }

    if (chatSend && chatInput) {
        chatSend.addEventListener('click', () => sendMessageFromInput());
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendMessageFromInput();
        });
    }

    // Conversation history for AI context
    const chatHistory = [];

    function sendMessageFromInput() {
        const text = chatInput.value.trim();
        if (!text) return;
        chatInput.value = '';
        handleUserMessage(text);
    }

    async function handleUserMessage(userText) {
        appendChatMessage(userText, 'outgoing');
        const prevHistory = chatHistory.slice(-10);
        chatHistory.push({ role: 'user', text: userText });

        // Typing indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'message incoming typing-msg';
        typingEl.innerHTML = `<div class="msg-bubble"><span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></div>`;
        chatMessages.appendChild(typingEl);
        scrollChatBottom();

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4500);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: controller.signal,
                body: JSON.stringify({
                    message: userText,
                    history: prevHistory
                })
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const contentType = response.headers.get('content-type') || '';

            // Handle Real-time Streaming SSE
            if (contentType.includes('text/event-stream') && response.body && response.body.getReader) {
                if (typingEl.parentNode) typingEl.remove();

                const msgDiv = document.createElement('div');
                msgDiv.className = 'message incoming';
                const bubble = document.createElement('div');
                bubble.className = 'msg-bubble';
                msgDiv.appendChild(bubble);
                chatMessages.appendChild(msgDiv);

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let accumulatedText = '';
                let streamBuffer = '';

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;

                    streamBuffer += decoder.decode(value, { stream: true });
                    const lines = streamBuffer.split('\n');
                    streamBuffer = lines.pop() || '';

                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (trimmed.startsWith('data: ')) {
                            const dataPayload = trimmed.slice(6).trim();
                            if (dataPayload === '[DONE]') continue;
                            try {
                                const parsed = JSON.parse(dataPayload);
                                if (parsed.text) {
                                    accumulatedText += parsed.text;
                                    bubble.innerHTML = formatMarkdown(accumulatedText);
                                    scrollChatBottom();
                                }
                            } catch (e) {
                                // partial or non-json chunk
                            }
                        }
                    }
                }

                if (streamBuffer.trim().startsWith('data: ')) {
                    const dataPayload = streamBuffer.trim().slice(6).trim();
                    if (dataPayload !== '[DONE]') {
                        try {
                            const parsed = JSON.parse(dataPayload);
                            if (parsed.text) {
                                accumulatedText += parsed.text;
                                bubble.innerHTML = formatMarkdown(accumulatedText);
                            }
                        } catch (e) {}
                    }
                }

                if (accumulatedText.trim()) {
                    chatHistory.push({ role: 'model', text: accumulatedText.trim() });
                } else {
                    const reply = getLocalFallback(userText);
                    bubble.innerHTML = formatMarkdown(reply);
                    chatHistory.push({ role: 'model', text: reply });
                }
                scrollChatBottom();

            } else {
                // Handle Standard JSON Response
                if (typingEl.parentNode) typingEl.remove();
                const data = await response.json();

                if (data.text) {
                    typewriterChatMessage(data.text, 'incoming');
                    chatHistory.push({ role: 'model', text: data.text });
                } else {
                    const reply = getLocalFallback(userText);
                    appendChatMessage(reply, 'incoming');
                    chatHistory.push({ role: 'model', text: reply });
                }
            }
        } catch (err) {
            console.error('Chat error:', err);
            if (typingEl.parentNode) typingEl.remove();

            const reply = getLocalFallback(userText);
            appendChatMessage(reply, 'incoming');
            chatHistory.push({ role: 'model', text: reply });
        }
    }

    function typewriterChatMessage(fullText, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}`;
        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);

        let charIdx = 0;
        const step = Math.max(2, Math.floor(fullText.length / 30));
        
        function typeStep() {
            charIdx = Math.min(fullText.length, charIdx + step);
            bubble.innerHTML = formatMarkdown(fullText.slice(0, charIdx));
            scrollChatBottom();
            if (charIdx < fullText.length) {
                requestAnimationFrame(typeStep);
            }
        }
        typeStep();
    }

    function getLocalFallback(text) {
        const dict = translations[currentLang] || translations.en;
        const lower = text.toLowerCase();

        if (lower.includes('project') || lower.includes('loyiha') || lower.includes('проект') || lower.includes('eduai') || lower.includes('mixaro') || lower.includes('pozitron') || lower.includes('remember')) {
            return dict.chat_msg_projects;
        } else if (lower.includes('service') || lower.includes('xizmat') || lower.includes('услуг') || lower.includes('build') || lower.includes('qila olas')) {
            return dict.chat_msg_services;
        } else if (lower.includes('skill') || lower.includes('stek') || lower.includes('стек') || lower.includes('python') || lower.includes('fastapi')) {
            return dict.chat_msg_skills;
        } else if (lower.includes('contact') || lower.includes('aloq') || lower.includes('связ') || lower.includes('hire') || lower.includes('telegram') || lower.includes('email')) {
            return dict.chat_msg_contact;
        }
        return dict.chat_msg_fallback;
    }

    function formatMarkdown(text) {
        if (!text) return '';
        let escaped = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Bold **text**
        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Italic *text*
        escaped = escaped.replace(/\*(.*?)\*/g, '<em>$1</em>');
        // Inline code `code`
        escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
        // Bullet points
        escaped = escaped.replace(/^[•\-\*]\s+(.*)$/gm, '• $1');
        // Line breaks
        escaped = escaped.replace(/\n/g, '<br>');

        return escaped;
    }

    function appendChatMessage(text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}`;

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = formatMarkdown(text);

        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);
        scrollChatBottom();
    }

    function scrollChatBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

