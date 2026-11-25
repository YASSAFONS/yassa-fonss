// Yalla Gouna - Interactive Logic, 4 Languages (AR/EN/DE/RU) & WhatsApp Booking

const WHATSAPP_NUMBER = "201554679616";
const MIN_DAYS_AHEAD = 3; // الحجز متاح من بعد 3 أيام على الأقل

const translations = {
  ar: {
    brand_name: "يلا جونا",
    brand_tagline: "تجارب مختارة في الجونة",
    nav_programs: "البرامج",
    nav_how: "كيف يعمل",
    nav_book: "احجز الآن",
    hero_badge: "الجونة • البحر الأحمر، مصر",
    hero_title: "اكتشف الجونة على طريقتك",
    hero_subtitle: "رحلات يومية، طلعات يخوت، أجواء سهر الويك إند، وإقامات مميزة مصممة لضيوف الغردقة وكل زوار الجونة.",
    hero_cta_book: "احجز تجربتك",
    hero_cta_programs: "استعرض البرامج",
    programs_title: "البرامج المميزة",
    programs_subtitle: "اختار التجربة المناسبة لمودك وجدولك في الجونة.",
    prog_roam_title: "جولة حرة في الجونة",
    prog_roam_desc: "لف براحتك في المارينا والداون تاون وبرج الجولف مع ترشيحات لأحلى الأماكن والقهاوي وأماكن التصوير.",
    prog_yacht_title: "رحلة يخت ودلافين اليوم الكامل",
    prog_yacht_desc: "إبحار في مياه البحر الأحمر الصافية مع فرصة مشاهدة الدلافين وزيارة الجزر والاستمتاع بيوم بحري متكامل.",
    prog_night_title: "سهرات الخميس والجمعة",
    prog_night_desc: "عيش طاقة الويك إند في الجونة مع أمسيات مميزة في أماكن مثل نويرة وأبرز سهرات الجونة.",
    prog_villa_title: "فيلات وإقامات ساحلية",
    prog_villa_desc: "استمتع بإقامة مريحة في فيلات ووحدات مختارة في الجونة للعائلات والأصدقاء ورحلات الويك إند.",
    prog_select_btn: "اختيار وحجز",
    how_title: "خطوات الحجز",
    how_subtitle: "خطوات بسيطة وسريعة وتنسيق مباشر معك.",
    step1_title: "١. اختار البرنامج",
    step1_desc: "حدد جولة حرة، رحلة يخت، سهرة ويك إند، أو إقامة فيلا.",
    step2_title: "٢. سجل بياناتك",
    step2_desc: "اكتب اسمك ورقم الواتساب والتاريخ المناسب وعدد الأفراد ومكان التحرك.",
    step3_title: "٣. أكد على واتساب",
    step3_desc: "ملخص الحجز بيتجهز فوراً على واتساب للتأكيد والتنسيق السريع.",
    book_title: "طلب حجز مباشر",
    book_subtitle: "املأ بياناتك بالأسفل وهنرتب معك باقي التفاصيل مباشرة عبر واتساب.",
    label_program: "البرنامج المختار",
    label_name: "الاسم بالكامل",
    label_phone: "رقم الهاتف / واتساب",
    label_date: "التاريخ المفضل (متاح من بعد ٣ أيام)",
    label_guests: "عدد الأفراد",
    label_pickup: "مكان التحرك (مثال: الغردقة / فندق / الجونة)",
    btn_confirm: "إرسال الطلب عبر واتساب",
    confirm_title: "ملخص الحجز جاهز",
    confirm_text: "تم تجهيز تفاصيل طلبك بالأسفل. إذا لم يفتح واتساب تلقائياً، اضغط على الزر للإرسال الآن.",
    btn_open_wa: "افتح واتساب الآن",
    wa_general_chat: "واتساب",
    wa_default_greeting: "أهلاً يلا جونا! حابب استفسر عن رحلات وبرامج الجونة.",
    date_error_msg: "عذراً، الحجز متاح من بعد ٣ أيام على الأقل. أقل تاريخ متاح هو: "
  },
  en: {
    brand_name: "Yalla Gouna",
    brand_tagline: "Curated El Gouna Experiences",
    nav_programs: "Programs",
    nav_how: "How It Works",
    nav_book: "Book Now",
    hero_badge: "El Gouna • Red Sea, Egypt",
    hero_title: "Discover El Gouna Your Way",
    hero_subtitle: "Seamless day trips, yacht excursions, nightlife vibes, and coastal stays crafted for visitors coming from Hurghada and beyond.",
    hero_cta_book: "Book Your Experience",
    hero_cta_programs: "Explore Programs",
    programs_title: "Signature Programs",
    programs_subtitle: "Choose an experience tailored to your mood and schedule in El Gouna.",
    prog_roam_title: "El Gouna Free-Roaming Tour",
    prog_roam_desc: "Explore Abu Tig Marina, Downtown, and Golf Tower at your own pace with insider recommendations on cafes, spots, and photo stops.",
    prog_yacht_title: "Full-Day Yacht & Dolphin Trip",
    prog_yacht_desc: "Sail across crystal-clear Red Sea waters, spot dolphins, visit scenic islands, and enjoy a relaxed day on the boat.",
    prog_night_title: "Thursday & Friday Nightlife",
    prog_night_desc: "Experience El Gouna's vibrant weekend energy with curated evenings at top spots like Noir and lively social venues.",
    prog_villa_title: "Private Villa & Coastal Stays",
    prog_villa_desc: "Unwind in comfortable villas and holiday homes in El Gouna for groups, couples, and weekend getaways.",
    prog_select_btn: "Select & Book",
    how_title: "How Booking Works",
    how_subtitle: "Simple, fast, and coordinated directly with you.",
    step1_title: "1. Pick Your Program",
    step1_desc: "Choose a roaming tour, yacht trip, nightlife pass, or villa stay.",
    step2_title: "2. Share Your Details",
    step2_desc: "Enter your name, WhatsApp/phone, preferred date, guests, and pickup spot.",
    step3_title: "3. Confirm on WhatsApp",
    step3_desc: "Your booking summary opens directly in WhatsApp for instant coordination.",
    book_title: "Direct Booking Request",
    book_subtitle: "Fill out your details below and we will finalize everything with you on WhatsApp.",
    label_program: "Selected Program",
    label_name: "Full Name",
    label_phone: "Phone / WhatsApp Number",
    label_date: "Preferred Date (Available from 3 days ahead)",
    label_guests: "Number of Guests",
    label_pickup: "Pickup Location (e.g., Hurghada / Hotel / El Gouna)",
    btn_confirm: "Send Request via WhatsApp",
    confirm_title: "Booking Summary Ready",
    confirm_text: "Your request details are prepared below. If WhatsApp did not open automatically, click the button to send it now.",
    btn_open_wa: "Open WhatsApp Now",
    wa_general_chat: "WhatsApp",
    wa_default_greeting: "Hello Yalla Gouna! I would like to ask about El Gouna trips and programs.",
    date_error_msg: "Bookings require at least 3 days in advance. Earliest available date: "
  },
  de: {
    brand_name: "Yalla Gouna",
    brand_tagline: "Exklusive Erlebnisse in El Gouna",
    nav_programs: "Programme",
    nav_how: "So funktioniert's",
    nav_book: "Jetzt buchen",
    hero_badge: "El Gouna • Rotes Meer, Ägypten",
    hero_title: "Entdecke El Gouna auf deine Art",
    hero_subtitle: "Tagesausflüge, Yachtfahrten, Nachtleben und Küstenunterkünfte – perfekt organisiert für Gäste aus Hurghada und El Gouna.",
    hero_cta_book: "Erlebnis buchen",
    hero_cta_programs: "Programme ansehen",
    programs_title: "Unsere Programme",
    programs_subtitle: "Wähle das passende Erlebnis für deine Zeit in El Gouna.",
    prog_roam_title: "El Gouna Freie Entdeckungstour",
    prog_roam_desc: "Erkunde die Abu Tig Marina, Downtown und den Golf Tower in deinem eigenen Tempo mit Insider-Tipps für Cafés und Fotospots.",
    prog_yacht_title: "Ganztägige Yacht- & Delfintour",
    prog_yacht_desc: "Segle über das kristallklare Rote Meer, beobachte Delfine, besuche Trauminseln und genieße einen entspannten Tag an Bord.",
    prog_night_title: "Donnerstag & Freitag Nightlife",
    prog_night_desc: "Erlebe die besondere Wochenend-Energie in El Gouna mit ausgewählten Abenden in Top-Locations wie dem Noir.",
    prog_villa_title: "Private Villen & Ferienhäuser",
    prog_villa_desc: "Entspanne in komfortablen Villen und Ferienunterkünften in El Gouna für Gruppen, Paare und Wochenendtrips.",
    prog_select_btn: "Auswählen & Buchen",
    how_title: "So läuft die Buchung ab",
    how_subtitle: "Einfach, schnell und direkt mit dir abgestimmt.",
    step1_title: "1. Programm wählen",
    step1_desc: "Wähle zwischen Stadttour, Yachttour, Nightlife-Abend oder Villa-Aufenthalt.",
    step2_title: "2. Daten eingeben",
    step2_desc: "Gib deinen Namen, WhatsApp/Telefon, Wunschdatum, Personenanzahl und Abholort an.",
    step3_title: "3. Per WhatsApp bestätigen",
    step3_desc: "Deine Buchungsübersicht öffnet sich direkt in WhatsApp zur schnellen Abstimmung.",
    book_title: "Direkte Buchungsanfrage",
    book_subtitle: "Fülle das Formular aus – wir klären alle Details direkt mit dir über WhatsApp.",
    label_program: "Gewähltes Programm",
    label_name: "Vollständiger Name",
    label_phone: "Telefon / WhatsApp-Nummer",
    label_date: "Wunschdatum (ab 3 Tagen im Voraus)",
    label_guests: "Anzahl der Gäste",
    label_pickup: "Abholort (z. B. Hurghada / Hotel / El Gouna)",
    btn_confirm: "Anfrage per WhatsApp senden",
    confirm_title: "Buchungsübersicht bereit",
    confirm_text: "Deine Anfrage wurde vorbereitet. Falls sich WhatsApp nicht automatisch öffnet, klicke bitte auf den Button.",
    btn_open_wa: "WhatsApp jetzt öffnen",
    wa_general_chat: "WhatsApp",
    wa_default_greeting: "Hallo Yalla Gouna! Ich möchte mich nach Ausflügen und Programmen in El Gouna erkundigen.",
    date_error_msg: "Buchungen sind mindestens 3 Tage im Voraus möglich. Frühestes Datum: "
  },
  ru: {
    brand_name: "Yalla Gouna",
    brand_tagline: "Авторский отдых в Эль-Гуне",
    nav_programs: "Программы",
    nav_how: "Как это работает",
    nav_book: "Забронировать",
    hero_badge: "Эль-Гуна • Красное море, Египет",
    hero_title: "Откройте Эль-Гуну по-своему",
    hero_subtitle: "Дневные прогулки, морские прогулки на яхте, вечеринки выходного дня и аренда вилл для гостей из Хургады и Эль-Гуны.",
    hero_cta_book: "Забронировать тур",
    hero_cta_programs: "Смотреть программы",
    programs_title: "Популярные программы",
    programs_subtitle: "Выберите формат отдыха, который идеально подойдёт именно вам.",
    prog_roam_title: "Свободная прогулка по Эль-Гуне",
    prog_roam_desc: "Прогуляйтесь по Марине Абу-Тиг, Даунтауну и Гольф-башне в своём темпе с лучшими рекомендациями кафе и мест для фото.",
    prog_yacht_title: "Яхта и дельфины на целый день",
    prog_yacht_desc: "Морская прогулка по кристально чистому Красному морю, наблюдение за дельфинами, острова и отдых на борту.",
    prog_night_title: "Вечеринки в четверг и пятницу",
    prog_night_desc: "Почувствуйте атмосферу выходных в Эль-Гуне в лучших локациях, включая клуб Noir и популярные лаунжи.",
    prog_villa_title: "Частные виллы и апартаменты",
    prog_villa_desc: "Комфортное размещение на виллах в Эль-Гуне для компаний, пар и отдыха на выходных.",
    prog_select_btn: "Выбрать и забронировать",
    how_title: "Как проходит бронирование",
    how_subtitle: "Просто, быстро и с прямой связью без посредников.",
    step1_title: "1. Выберите программу",
    step1_desc: "Прогулка по городу, яхта, вечерняя программа или аренда виллы.",
    step2_title: "2. Укажите данные",
    step2_desc: "Введите имя, номер WhatsApp, желаемую дату, количество гостей и место трансфера.",
    step3_title: "3. Подтвердите в WhatsApp",
    step3_desc: "Готовая заявка сразу откроется в WhatsApp для быстрого согласования.",
    book_title: "Прямая заявка на бронирование",
    book_subtitle: "Заполните форму ниже, и мы уточним все детали напрямую в WhatsApp.",
    label_program: "Выбранная программа",
    label_name: "Ваше имя",
    label_phone: "Телефон / WhatsApp",
    label_date: "Желаемая дата (минимум за 3 дня)",
    label_guests: "Количество гостей",
    label_pickup: "Место отправления (например: Хургада / отель / Эль-Гуна)",
    btn_confirm: "Отправить заявку в WhatsApp",
    confirm_title: "Заявка готова",
    confirm_text: "Детали вашей заявки сформированы ниже. Если WhatsApp не открылся автоматически, нажмите кнопку.",
    btn_open_wa: "Открыть WhatsApp",
    wa_general_chat: "WhatsApp",
    wa_default_greeting: "Здравствуйте, Yalla Gouna! Хочу узнать подробнее о турах и программах в Эль-Гуне.",
    date_error_msg: "Бронирование доступно минимум за 3 дня. Ближайшая дата: "
  }
};

let currentLang = "ar";
let latestWhatsAppUrl = "";

const htmlEl = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn[data-lang]");
const programSelect = document.getElementById("program-select");
const bookingForm = document.getElementById("booking-form");
const dateInput = document.getElementById("client-date");
const confirmationBox = document.getElementById("booking-confirmation");
const confirmationSummary = document.getElementById("confirmation-summary");
const openWhatsappLink = document.getElementById("open-whatsapp-link");
const floatingWaBtn = document.getElementById("floating-whatsapp");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

function getMinBookingDateStr() {
  const target = new Date();
  target.setHours(0, 0, 0, 0);
  target.setDate(target.getDate() + MIN_DAYS_AHEAD);

  const year = target.getFullYear();
  const month = String(target.getMonth() + 1).padStart(2, "0");
  const day = String(target.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function syncDateConstraints() {
  if (!dateInput) return;
  const minDate = getMinBookingDateStr();
  dateInput.min = minDate;
  if (!dateInput.value || dateInput.value < minDate) {
    dateInput.value = minDate;
  }
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "ar";
  const dict = translations[currentLang];

  htmlEl.lang = currentLang;
  htmlEl.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (programSelect) {
    Array.from(programSelect.options).forEach((option) => {
      const key = option.getAttribute("data-i18n-option");
      if (key && dict[key]) {
        option.textContent = dict[key];
      }
    });
  }

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  updateFloatingWhatsAppLink();
}

function buildWhatsAppUrl(messageText) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

function updateFloatingWhatsAppLink() {
  if (!floatingWaBtn) return;
  const dict = translations[currentLang] || translations.en;
  floatingWaBtn.href = buildWhatsAppUrl(dict.wa_default_greeting);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    if (selectedLang) {
      applyLanguage(selectedLang);
    }
  });
});

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

document.querySelectorAll("[data-select-program]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.getAttribute("data-select-program");
    if (programSelect && selectedValue) {
      programSelect.value = selectedValue;
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function buildBookingMessage(lang, data) {
  if (lang === "ar") {
    return [
      "مرحباً يلا جونا، أود تأكيد طلب حجز جديد:",
      `• البرنامج: ${data.programLabel}`,
      `• الاسم: ${data.name}`,
      `• الهاتف / واتساب: ${data.phone}`,
      `• التاريخ المفضل: ${data.date}`,
      `• عدد الأفراد: ${data.guests}`,
      `• مكان التحرك: ${data.pickup}`
    ].join("\n");
  }

  if (lang === "de") {
    return [
      "Hallo Yalla Gouna, ich möchte eine neue Buchung anfragen:",
      `• Programm: ${data.programLabel}`,
      `• Name: ${data.name}`,
      `• Telefon / WhatsApp: ${data.phone}`,
      `• Wunschdatum: ${data.date}`,
      `• Gäste: ${data.guests}`,
      `• Abholort: ${data.pickup}`
    ].join("\n");
  }

  if (lang === "ru") {
    return [
      "Здравствуйте, Yalla Gouna! Хочу оформить бронирование:",
      `• Программа: ${data.programLabel}`,
      `• Имя: ${data.name}`,
      `• Телефон / WhatsApp: ${data.phone}`,
      `• Дата: ${data.date}`,
      `• Гостей: ${data.guests}`,
      `• Место отправления: ${data.pickup}`
    ].join("\n");
  }

  return [
    "Hello Yalla Gouna, I would like to request a booking:",
    `• Program: ${data.programLabel}`,
    `• Name: ${data.name}`,
    `• Phone / WhatsApp: ${data.phone}`,
    `• Preferred Date: ${data.date}`,
    `• Guests: ${data.guests}`,
    `• Pickup Location: ${data.pickup}`
  ].join("\n");
}

if (dateInput) {
  dateInput.addEventListener("change", () => {
    const minDate = getMinBookingDateStr();
    if (dateInput.value && dateInput.value < minDate) {
      const dict = translations[currentLang] || translations.en;
      alert(`${dict.date_error_msg}${minDate}`);
      dateInput.value = minDate;
    }
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const dict = translations[currentLang] || translations.en;
    const minDate = getMinBookingDateStr();
    const date = dateInput?.value || "";

    if (!date || date < minDate) {
      alert(`${dict.date_error_msg}${minDate}`);
      if (dateInput) {
        dateInput.value = minDate;
        dateInput.focus();
      }
      return;
    }

    const programKey = programSelect ? programSelect.value : "prog_roam_title";
    const programLabel = dict[programKey] || programKey;
    const name = document.getElementById("client-name")?.value.trim() || "";
    const phone = document.getElementById("client-phone")?.value.trim() || "";
    const guests = document.getElementById("client-guests")?.value || "1";
    const pickup = document.getElementById("client-pickup")?.value.trim() || "";

    const fullMessage = buildBookingMessage(currentLang, {
      programLabel,
      name,
      phone,
      date,
      guests,
      pickup
    });

    latestWhatsAppUrl = buildWhatsAppUrl(fullMessage);

    if (confirmationSummary) {
      confirmationSummary.textContent = fullMessage;
    }
    if (openWhatsappLink) {
      openWhatsappLink.href = latestWhatsAppUrl;
    }
    if (confirmationBox) {
      confirmationBox.classList.remove("hidden");
      confirmationBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    window.open(latestWhatsAppUrl, "_blank", "noopener,noreferrer");
  });
}

// تهيئة اللغة والحد الأدنى للتاريخ عند الفتح
syncDateConstraints();
applyLanguage("ar");
const siteTexts = {
  ar: {
    aboutTitle: "من نحن",
    aboutDesc: "يلا جونا بتصمم لك تجربتك الكاملة في الجونة: من انتقالات مريحة، وجولات حرة في المارينا والداون تاون وبرج الجولف، لرحلات يخت خاصة وسنوركلينج مع الدلافين، لحد أرقى الفيلات للإقامة وأقوى سهرات الويك إند — كل تفاصيل رحلتك متنظمة من البداية للنهاية، وانت عليك تستمتع بس.",
    langBadge: "العربية • AR",
    tagline: "يومك في الجونة متخطط بكل جمال",
    dir: "rtl"
  },
  en: {
    aboutTitle: "About Us",
    aboutDesc: "Yalla Gouna crafts your complete El Gouna experience: from seamless transfers and free-roaming tours across the Marina, Downtown, and Golf Tower, to private yacht trips, dolphin snorkeling, luxury villa stays, and lively weekend nights — every detail is planned from start to finish.",
    langBadge: "English • EN",
    tagline: "Your day in El Gouna, beautifully planned",
    dir: "ltr"
  },
  de: {
    aboutTitle: "Über uns",
    aboutDesc: "Yalla Gouna gestaltet Ihr komplettes El-Gouna-Erlebnis: von entspannten Transfers und freien Touren durch Marina, Downtown und Golf Tower bis hin zu Yachtausflügen, Delfin-Schnorcheln, Villen-Aufenthalten und Wochenend-Events — alles perfekt organisiert.",
    langBadge: "Deutsch • DE",
    tagline: "Ihr Tag in El Gouna, perfekt geplant",
    dir: "ltr"
  },
  ru: {
    aboutTitle: "О нас",
    aboutDesc: "Yalla Gouna организует ваш идеальный отдых в Эль-Гуне: от удобных трансферов и свободных прогулок по Марине, Даунтауну и Гольф-тауэру до прогулок на яхте, снорклинга с дельфинами, проживания на виллах и вечерних мероприятий — всё продумано от начала до конца.",
    langBadge: "Русский • RU",
    tagline: "Ваш день в Эль-Гуне, красиво спланированный",
    dir: "ltr"
  }
};

function updateSiteLanguage(lang) {
  const current = siteTexts[lang] || siteTexts.ar;
  document.documentElement.dir = current.dir;

  const aboutTitle = document.getElementById("about-title");
  const aboutDesc = document.getElementById("about-desc");
  const langBadge = document.getElementById("footer-lang-label");
  const tagline = document.getElementById("footer-tagline");

  if (aboutTitle) aboutTitle.textContent = current.aboutTitle;
  if (aboutDesc) aboutDesc.textContent = current.aboutDesc;
  if (langBadge) langBadge.textContent = current.langBadge;
  if (tagline) tagline.textContent = current.tagline;
}
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = document.documentElement.lang || "ar";
  updateSiteLanguage(currentLang);
});