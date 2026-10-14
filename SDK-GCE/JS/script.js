window.addEventListener("scroll", function () {
  const landingPage = document.getElementById("landing");

  if (window.scrollY > 50 && landingPage) {
    landingPage.classList.add("hidden");
  }
});

document.getElementById("enter-btn")?.addEventListener("click", function () {
  document.getElementById("landing")?.classList.add("hidden");
});

// =========================
// Section Navigation
// =========================

function showSectionFun(sectionId) {
  const sections = document.querySelectorAll("section");

  sections.forEach((sec) => sec.classList.remove("active"));

  const sec = document.getElementById(sectionId);

  if (sec) {
    sec.classList.add("active");
    sec.scrollIntoView({ behavior: "smooth" });
  }
}

// =========================
// Countdown
// =========================

const eventDate = new Date("2026-09-30T10:00:00").getTime();

const timer = setInterval(() => {
  const now = Date.now();
  const diff = eventDate - now;

  const countdown = document.getElementById("countdown");
  const countdownMessage = document.getElementById("countdownMessage");

  if (diff <= 0) {
    if (countdownMessage) {
      countdownMessage.innerText = "🎉 The Event has Started!";
    }

    if (countdown) {
      countdown.style.display = "none";
    }

    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  updateBox("days", days);
  updateBox("hours", hours);
  updateBox("minutes", minutes);
  updateBox("seconds", seconds);
}, 1000);

function updateBox(id, value) {
  const element = document.getElementById(id);

  if (!element) return;

  if (element.innerText != value) {
    element.innerText = value;

    element.parentElement?.classList.add("animate");

    setTimeout(() => {
      element.parentElement?.classList.remove("animate");
    }, 300);
  }
}

// =========================
// Contact Form
// =========================

function confirmationMessage() {
  const name =
    document.getElementById("name")?.value.trim() || "";

  const email =
    document.getElementById("email")?.value.trim() || "";

  const message =
    document.getElementById("contactMessage")?.value.trim() || "";

  const confirmation =
    document.getElementById("confirmation");

  if (!confirmation) return;

  if (!name || !email || !message) {
    confirmation.textContent =
      "❗ Please fill in all fields.";

    confirmation.style.color = "red";
  } else {
    confirmation.textContent =
      "Your message has been received , Thank You";
  }
}

// =========================
// GCE 2026 Coming Soon Cover
// =========================

const gceCoverDate = eventDate;

const gceComingCover =
  document.getElementById("gceComingCover");

const coverDays =
  document.getElementById("coverDays");

const coverHours =
  document.getElementById("coverHours");

const coverMinutes =
  document.getElementById("coverMinutes");

const coverSeconds =
  document.getElementById("coverSeconds");

function updateGceComingSoonCover() {
  if (
    !gceComingCover ||
    !coverDays ||
    !coverHours ||
    !coverMinutes ||
    !coverSeconds
  ) {
    return;
  }

  const diff = gceCoverDate - Date.now();

  if (isNaN(diff)) {
    console.log("Invalid event date");
    return;
  }

  if (diff <= 0) {
    gceComingCover.style.display = "none";

    const page3 =
      document.getElementById("page3");

    if (page3) {
      page3.classList.remove("coming-mode");
      page3.classList.add("event-started");
    }

    clearInterval(gceCoverTimer);
    return;
  }

  coverDays.textContent = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  coverHours.textContent = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  coverMinutes.textContent = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  coverSeconds.textContent = Math.floor(
    (diff % (1000 * 60)) / 1000
  );
}

const gceCoverTimer = setInterval(
  updateGceComingSoonCover,
  1000
);

updateGceComingSoonCover();

// =========================
// Remember Entered Session
// =========================

if (
  sessionStorage.getItem("enteredGCE") === "true"
) {
  document
    .getElementById("landing")
    ?.classList.add("hidden");
}

document
  .getElementById("enter-btn")
  ?.addEventListener("click", function () {
    sessionStorage.setItem(
      "enteredGCE",
      "true"
    );
  });

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    sessionStorage.setItem(
      "enteredGCE",
      "true"
    );
  }
});

// =========================================================
// GCE 2026 — Student Projects
//
// IMPORTANT:
//
// modalAvatar:
// student image INSIDE modal.
// Comes ONLY from:
// ./image/تكريم الطلاب/
//
// projectLogo:
// small project logo.
// Comes ONLY from:
// ./image/logos project/
//
// HTML card image:
// remains completely separate.
// =========================================================

const gce2026Students = [
  {
    match: "رهام الربضي",
    fullName: "رهام سمير الربضي",

    modalAvatar: "19.png",

    projectLogo: "رهام الربضي.jpeg",

    project: "GrowSmart | نماء",

    description:
      "GrowSmart هو نظام ذكي للتوصية بالمحاصيل، صُمم لجعل تجربة الزراعة أكثر سهولة ومتعة ومتاحة للجميع، وليس فقط للمزارعين أو لأصحاب الأراضي الزراعية الكبيرة.",

    socials: {}
  },

  {
    match: "مؤمن العمري",
    fullName: "مؤمن حسن العمري",

    modalAvatar: "",

    projectLogo: "مؤمن العمري.jpeg",

    project: "Booking System",

    description:
      "هو منصة ويب متكاملة تم تطويرها باستخدام تقنيات MERN Stack بهدف أتمتة وتسهيل عملية حجز الملاعب الرياضية من خلال ربط اللاعبين بأصحاب الملاعب مباشرة.",

    socials: {}
  },

  {
    match: "لانا ايوب",
    fullName: "لانا حسام ايوب",

    modalAvatar: "",

    projectLogo: "لانا الربضي.jpeg",

    project: "دعم المشاريع الصغيرة",

    description:
      "منصة ذكية لدعم أصحاب المشاريع الصغيرة والمتوسطة في الأردن باستخدام الذكاء الاصطناعي وتحليل البيانات.\n\nتساعد المنصة المستخدم على تقييم أداء مشروعه، وتحديد نقاط القوة والضعف، وتحليل السوق والموقع، ومتابعة المؤشرات المالية والتشغيلية وآراء العملاء.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/lana-ayoub-793a19377?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },

  {
    match: "اسامة طشطوش",
    fullName: "أسامة طشطوش",

    modalAvatar: "",

    projectLogo: "أسامة طشطوش.PNG",

    project: "Network Project",

    description:
      "نظام شبكات ذكي يهدف إلى الحفاظ على استمرارية الشبكة وأمانها من خلال استخدام اتصالين بالإنترنت (Dual ISP) لضمان الاستمرارية، وشبكة VPN للاتصال الآمن، وأنظمة IDS لاكتشاف التهديدات والاستجابة لها بشكل آلي.",

    socials: {}
  },

  {
    match: "شكري عدنان",
    fullName: "شكري عدنان محمد",

    modalAvatar: "",

    projectLogo: "شكري عدنان.jpeg",

    project: "Web Development Project",

    description:
      "منصة إلكترونية تهدف إلى تسهيل عملية الوصول إلى الأطباء والخدمات الطبية المتوفرة في العيادة، وحجز المواعيد بطريقة رقمية ومنظمة دون الحاجة إلى زيارة العيادة فقط من أجل الاستفسار أو الحجز.\n\nتعالج المنصة مشكلة شائعة تتمثل في ضياع وقت المريض وصعوبة معرفة الأطباء والخدمات المتاحة قبل التوجه إلى العيادة، بالإضافة إلى عدم القدرة على معرفة تفاصيل الخدمة أو سعرها مسبقًا في بعض الحالات.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/shokri-samara-193a00367?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },

  {
    match: "جلنار مهيدات",
    fullName: "جلنار علي مهيدات",

    modalAvatar: "",

    projectLogo:
      "جلنار علي مهيدات.png",

    project:
      "CCNP Enterprise Network Architecture",

    description:
      "This project designs and implements a secure, scalable CCNP Enterprise Network simulated in EVE-NG. The architecture delivers high-speed inter-domain connectivity and robust security controls.\n\nIt incorporates hierarchical IP Addressing, OSPF for internal routing, eBGP between Autonomous Systems, and GRE over IPsec VPN tunnels filtered with ACLs.",

    socials: {}
  },

  {
    match: "سيف جبرين",
    fullName: "سيف ايمن جبرين",

    modalAvatar: "",

    projectLogo: "سيف ايمن جبرين.png",

    project:
      "Amanak Alraqami – أمانك الرقمي",

    description:
      "Amanak Alraqami is an interactive digital safety education platform designed for children aged 8–14. The platform aims to improve children's awareness of online safety and responsible digital behavior through educational adventures, interactive questions, pre- and post-assessments, points, levels, and badges.\n\nThe system also allows parents to follow their children’s progress and provides administrators with tools to manage students, educational content, questions, assessments, and activities.",

    socials: {}
  },

  {
    match: "علي حرب",
    fullName: "علي فراس حرب",

    modalAvatar: "",

    projectLogo: "علي حرب.png",

    project: "Mawrid | مَورِد",

    description:
      "منصة B2B تساعد المشاريع الصغيرة على الشراء بسعر الجملة، عن طريق تجميع طلباتها مع محلات صغيرة أخرى ضمن سلات شراء مُجدولة ومُنسّقة مسبقًا مع موردين شركاء، دون الحاجة لرأس مال أو مخزون كبير من المنصة نفسها.",

    socials: {}
  },

  {
    match: "منار عبيدات",
    fullName: "منار اسلام عبيدات",

    modalAvatar: "",

    projectLogo:
      "منار اسلام عبيدات.png",

    project: "منصة الحصاد المستدام",

    description:
      "An interactive web platform that connects agricultural surplus rescue with smart farming education in schools and homes, aiming to enhance food and water security and reduce waste.",

    socials: {
      github:
        "https://github.com/manarobeidat/Harvest-GCE"
    }
  },

  {
    match: "عمار احميدان",
    fullName: "عمار ياسر احميدان",

    modalAvatar: "",

    projectLogo: "عمار احميدان.PNG",

    project: "لحظة | Lahza",

    description:
      "«لحظة» هي حملة توعوية عن التنمر الإلكتروني وتأثير الكلام والتعليقات الجارحة على الأشخاص. فكرة المشروع مبنية على الثلاث نقاط (...)، وهي موجودة أيضًا في لوجو المشروع، وتم استخدامها كعنصر أساسي في جميع التصاميم. كل بوستر يعرض الثلاث نقاط بطريقة مختلفة، ويوصل معنى مرتبطًا بأثر الكلمات والتصرفات. الهدف من الحملة هو تشجيع الشخص على أخذ «لحظة» والتفكير قبل أن يكتب أو يقول شيئًا قد يجرح غيره.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/ammar-awashreh-923269371",

      behance:
        "https://www.behance.net/ammarj46"
    }
  },

  {
    match: "جود الشطناوي",

    fullName:
      "جود محمد فرحان الشطناوي",

    modalAvatar: "",

    projectLogo:
      "جود محمد فرحان الشطناوي.png",

    project: "Rawi AI",

    description:
      "Rawi is an AI-powered tourism storyteller that identifies selected Jordanian landmarks using computer vision and provides users with informative and engaging stories about the detected landmark using AI.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/jood-shatnawi/",

      github:
        "https://github.com/joodshatnawi"
    }
  },

  {
    match: "نادر احميدان",

    fullName:
      "نادر ياسر صالح احميدان",

    modalAvatar: "",

    projectLogo: "نادر احميدان.jpg",

    project: "TOWQ | توق",

    description:
      "توق عبارة عن متجر يبيع كل ما يخص العرب والثقافة العربية، وخصوصًا خارج الحدود العربية.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/nader-ehmidan-448b51307",

      behance:
        "https://www.behance.net/naderehmidan"
    }
  },

  {
    match: "حنين العامري",

    fullName:
      "حنين شحادة العامري",

    modalAvatar: "",

    projectLogo:
      "حنين شحادة العامري.png",

    project: "AQUA",

    description:
      "مشروع توعوي يهدف إلى تعزيز مفهوم الأمن المائي، وإعادة تشكيل نظرتنا إلى الماء من كونه موردًا متاحًا بشكل دائم إلى كونه ثروة أساسية يجب حمايتها والحفاظ عليها واستدامتها.\n\nتنطلق الهوية البصرية للحملة من القطرة باعتبارها أصغر وحدة للماء، وفي الوقت نفسه عنصرًا أساسيًا لاستمرار الحياة. وقد تم توظيف القطرة كعنصر بصري متكرر داخل الحملة، بحيث تتغير دلالتها وفق الرسالة المطروحة مع بقائها مرتبطة بالهوية البصرية لـ AQUA.",

    socials: {
      behance:
        "https://www.behance.net/haneenal12"
    }
  },

  {
    match: "محمد الحمود",

    fullName: "محمد هايل الحمود",

    modalAvatar: "",

    projectLogo:
      "محمد هايل الحمود.png",

    project: "فاروق",

    description:
      "«فاروق» هو منصة ذكية متقدمة للتحقق الفوري من الأخبار والادعاءات (Real-time RAG News Verification Platform)، تم تصميمها وهندستها لمعالجة ظاهرة انتشار المعلومات الخاطئة والمضللة عبر الإنترنت. يعتمد النظام على معمارية البحث المعزز بالتوليد (RAG) ونماذج اللغة الكبيرة (LLMs) لتقييم مصداقية الأخبار والادعاءات بناءً على أدلة ومصادر حية وموضوعية من الويب.",

    socials: {
      github:
        "https://github.com/MohmmadHayel"
    }
  },

  {
    match:
      "سيف الدين بنى سلامة",

    fullName:
      "سيف الدين هاني بني سلامه",

    modalAvatar: "",

    projectLogo:
      "سيف الدين بني سلامة.png",

    project: "Loqma",

    description:
      "يهدف المشروع إلى الحد من هدر الطعام وتقليل كمياته من خلال إنشاء شبكة ربط فعّالة بين الجهات التي يتوفر لديها فائض من الطعام، وبين المستفيدين منه.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/saif-eddin-bani-salameh‏-2374a92b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },

  {
    match: "مدين لطايفه",

    fullName:
      "مدين حازم اللطايفه",

    modalAvatar: "",

    projectLogo: "مدين طلايفة.png",

    project: "Athar | أثر",

    description:
      "أَثَر — تطبيق موبايل يجمع التبرعات (مالية وعينية)، البيع والشراء، وإعلانات الوظائف في منصة واحدة. بدل ما يحتاج المستخدم يفتح عدة تطبيقات منفصلة، يقدر يتصفح ويتواصل مباشرة عبر واتساب مع صاحب أي إعلان — سواء كان بائعًا، متبرعًا، أو صاحب عمل — بخطوة واحدة بسيطة وبدون تعقيد.\n\nمبني بـ Flutter للواجهة، وNode.js وMongoDB للخادم، مع نظام صلاحيات يفرّق بين ثلاث فئات مستخدمين: مستخدم عادي، بائع، وأدمن لإدارة المنصة.",

    socials: {
      linkedin:
        "https://linkedin.com/in/madyan-malkawi",

      github:
        "https://github.com/Madyan-2002"
    }
  },

  {
    match: "حمزة الشرعة",

    fullName:
      "حمزة فواز الشرعة",

    modalAvatar: "",

    projectLogo: "حمزة الشرعة.jpeg",

    project: "عين",

    description:
      "نظام ذكاء اصطناعي لكشف الخطر الموجّه للأطفال باللغة العربية.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/hamzeh-alshraah-7b0629369?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },

  {
    match: "لينا حجازي",

    fullName: "لينا سامر حجازي",

    modalAvatar: "",

    projectLogo: "لينا حجازي.jpeg",

    project:
      "غراس | Little Minds Online",

    description:
      "غراس مشروع توعوي للأمن الرقمي للأطفال، يهدف إلى تعزيز الاستخدام الصحي والمتوازن للتكنولوجيا.\n\nتستهدف الحملة الأطفال بجذبهم لأنشطة مفيدة وممتعة بعيدًا عن الهاتف، والأمهات بتوعيتهن بأهمية الحد من الاستخدام المفرط للأجهزة.\n\nتشمل الفكرة تصاميم توعوية موجّهة للأطفال والأمهات، وأنشطة ممتعة تشجع الأطفال على الابتعاد عن الهاتف واستثمار وقتهم بطريقة مفيدة وتفاعلية، بالإضافة إلى ألعاب، أدوات مدرسية، كتب تلوين وأنشطة صُممت لتعزيز التعلم واللعب بعيدًا عن الشاشة.\n\nكما تتضمن إمكانية تطوير أفلام كرتونية بشخصيات خاصة بغراس لتقديم رسائلها التوعوية بطريقة ممتعة وقريبة من الأطفال.",

    socials: {
      linkedin:
        "https://linkedin.com/in/lina-hijazi-hijazi-88a877397",

      behance:
        "https://www.behance.net/linahijazi59",

      source:
        "https://1drv.ms/u/c/7eaadfecc796fef9/IQBuOrg9bhdiSrhDZgVR8vSWARR7YwOG0Ia1Cp3NQ21jUZU?e=1Sbeej"
    }
  },

  {
    match: "كامل بطاينة",

    fullName:
      "كامل محمود بطاينه",

    modalAvatar: "",

    projectLogo: "كامل بطاينة.png",

    project:
      "Employee Self Service (ESS)",

    description:
      "Employee Self Service (ESS) is a complete employee, attendance, and workforce management system consisting of:\n\n• Admin Web Dashboard for managing the company and employees.\n• Employee Flutter App for staff self-service.\n• Department, branch, and employee management.\n• Check-in / check-out using live location and geofencing.\n• Tracking of lateness, absence, working hours, and attendance.\n• Leave requests and official holiday management.\n• Work schedule and working-day configuration.\n• Defining the company location and the allowed geofence radius for check-in.\n• Multi-company support — each company has its own data and settings.",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/kamel-bataineh-a66a773b5?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },

  {
    match: "هند ابو حسين",

    fullName: "هند ابو حسين",

    modalAvatar: "",

    projectLogo: "",

    project: "برزنتيشن",

    description:
      "تفاصيل المشروع قريبًا.",

    socials: {}
  }
];

// =========================================================
// Student Matching
// =========================================================

function gceNormalizeArabic(value = "") {
  return value
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/\s+/g, " ")
    .trim();
}

function gceFindStudentByCard(card) {
  const name = gceNormalizeArabic(
    card.querySelector("p")?.textContent || ""
  );

  return gce2026Students.find(
    (student) =>
      name.includes(
        gceNormalizeArabic(student.match)
      )
  );
}

// =========================================================
// Social Links
// =========================================================

function gceSocialLink(type, url) {
  const config = {
    linkedin: [
      "fa-brands fa-linkedin-in",
      "LinkedIn"
    ],

    github: [
      "fa-brands fa-github",
      "GitHub"
    ],

    behance: [
      "fa-brands fa-behance",
      "Behance"
    ],

    source: [
      "fa-solid fa-code",
      "Source Code"
    ]
  };

  const [icon, label] = config[type];

  if (!url) {
    return `
      <span class="student-social-missing">
        <i class="${icon}"></i>
        ${label}: Soon
      </span>
    `;
  }

  return `
    <a
      class="student-social-link"
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="${icon}"></i>
      ${label}
    </a>
  `;
}

// =========================================================
// IMAGE PATHS
// =========================================================

// -----------------------------------------
// SMALL PROJECT LOGO
// -----------------------------------------

function gceProjectLogoPath(filename) {
  if (!filename) return "";

  return `./image/logos project/${encodeURIComponent(
    filename
  )}`;
}

// -----------------------------------------
// LARGE STUDENT IMAGE INSIDE MODAL
//
// IMPORTANT:
//
// This image comes ONLY from:
//
// image/تكريم الطلاب/
//
// It does NOT use:
// - HTML card image
// - project logo
// -----------------------------------------

function gceModalAvatarPath(student) {
  if (!student.modalAvatar) {
    return "";
  }

  return `./image/تكريم الطلاب/${encodeURIComponent(
    student.modalAvatar
  )}`;
}

// =========================================================
// OPEN STUDENT MODAL
// =========================================================

function gceOpenStudentDetails(
  student,
  card
) {
  const modal =
    document.getElementById(
      "studentDetailsModal"
    );

  if (!modal) return;

  const track =
    card
      .querySelector("h5")
      ?.textContent?.trim() ||
    "GCE 2026";

  const initials =
    student.project
      .replace(
        /[^A-Za-z\u0600-\u06FF ]/g,
        ""
      )
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "GCE";

  // ======================================
  // LARGE STUDENT IMAGE
  // image/تكريم الطلاب/
  // ======================================

  const avatarElement =
    modal.querySelector(
      ".student-modal-avatar"
    );

  const avatarPath =
    gceModalAvatarPath(student);

  avatarElement.alt =
    student.fullName;

  avatarElement.onerror = null;

  if (avatarPath) {
    avatarElement.style.display =
      "block";

    avatarElement.src =
      avatarPath;

    avatarElement.onerror = () => {
      console.warn(
        `Student modal image not found: ${avatarPath}`
      );

      avatarElement.removeAttribute(
        "src"
      );

      avatarElement.style.display =
        "none";
    };
  } else {
    avatarElement.removeAttribute(
      "src"
    );

    avatarElement.style.display =
      "none";
  }

  // ======================================
  // SMALL PROJECT LOGO
  // image/logos project/
  // ======================================

  const logoHolder =
    modal.querySelector(
      ".student-project-logo"
    );

  logoHolder.replaceChildren();

  if (student.projectLogo) {
    const img =
      document.createElement("img");

    img.src =
      gceProjectLogoPath(
        student.projectLogo
      );

    img.alt =
      `${student.project} logo`;

    img.loading = "lazy";

    img.onerror = () => {
      logoHolder.replaceChildren();
      logoHolder.textContent =
        initials;
    };

    logoHolder.appendChild(img);
  } else {
    logoHolder.textContent =
      initials;
  }

  // ======================================
  // TEXT
  // ======================================

  modal.querySelector(
    ".student-modal-title"
  ).textContent =
    student.fullName;

  modal.querySelector(
    ".student-modal-project"
  ).textContent =
    student.project;

  modal.querySelector(
    ".student-modal-track"
  ).textContent =
    track;

  modal.querySelector(
    ".student-modal-description"
  ).textContent =
    student.description;

  // ======================================
  // SOCIAL LINKS
  //
  // Graphic Design:
  // LinkedIn + Behance
  //
  // Developers / AI / Flutter / Network:
  // LinkedIn + GitHub
  // ======================================

  const isGraphicDesign =
    /graphic\s*design/i.test(track);

  const socialLinks = [
    gceSocialLink(
      "linkedin",
      student.socials?.linkedin
    )
  ];

  if (isGraphicDesign) {
    socialLinks.push(
      gceSocialLink(
        "behance",
        student.socials?.behance
      )
    );
  } else {
    socialLinks.push(
      gceSocialLink(
        "github",
        student.socials?.github
      )
    );
  }

  // Source Code if available
  if (student.socials?.source) {
    socialLinks.push(
      gceSocialLink(
        "source",
        student.socials.source
      )
    );
  }

  modal.querySelector(
    ".student-modal-links"
  ).innerHTML =
    socialLinks.join("");

  // ======================================
  // OPEN MODAL
  // ======================================

  modal.classList.add("is-open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "student-modal-open"
  );

  modal
    .querySelector(
      ".student-modal-close"
    )
    ?.focus();
}

// =========================================================
// CLOSE STUDENT MODAL
// =========================================================

function gceCloseStudentDetails() {
  const modal =
    document.getElementById(
      "studentDetailsModal"
    );

  if (!modal) return;

  modal.classList.remove("is-open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "student-modal-open"
  );
}

// =========================================================
// CREATE STUDENT MODAL
// =========================================================

function gceInitStudentDetails() {
  const page3 =
    document.getElementById("page3");

  if (!page3) return;

  const modal =
    document.createElement("div");

  modal.id =
    "studentDetailsModal";

  modal.className =
    "student-modal";

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  modal.innerHTML = `
    <div
      class="student-modal-backdrop"
      data-close-student-modal
    ></div>

    <article
      class="student-modal-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="studentModalTitle"
    >

      <button
        class="student-modal-close"
        type="button"
        aria-label="Close details"
        data-close-student-modal
      >
        ×
      </button>

      <div class="student-modal-hero">

        <div class="student-modal-topline">

          <span
            class="student-modal-kicker"
          >
            <i
              class="fa-solid fa-sparkles"
            ></i>

            GCE 2026
          </span>

          <span
            class="student-modal-track"
          ></span>

        </div>

        <div
          class="student-modal-identity"
        >

          <div
            class="student-modal-avatar-wrap"
          >

            <!--
              LARGE STUDENT IMAGE

              Comes from:

              image/تكريم الطلاب/
            -->

            <img
              class="student-modal-avatar"
              src=""
              alt=""
            >

            <!--
              SMALL PROJECT LOGO

              Comes from:

              image/logos project/
            -->

            <div
              class="student-project-logo"
              aria-label="Project logo"
            ></div>

          </div>

          <div
            class="student-modal-heading"
          >

            <span
              class="student-modal-eyebrow"
            >
              STUDENT PROJECT
            </span>

            <h2
              class="student-modal-title"
              id="studentModalTitle"
            ></h2>

            <p
              class="student-modal-project"
            ></p>

          </div>

        </div>

        <div
          class="student-modal-scroll-cue"
        >
          <span>Project story</span>

          <i
            class="fa-solid fa-arrow-down"
          ></i>
        </div>

      </div>

      <div
        class="student-modal-body"
      >

        <div
          class="student-modal-section-head"
        >

          <span
            class="student-modal-section-icon"
          >
            <i
              class="fa-regular fa-lightbulb"
            ></i>
          </span>

          <div>
            <span>THE IDEA</span>

            <h3>
              عن المشروع
            </h3>
          </div>

        </div>

        <p
          class="student-modal-description"
        ></p>

        <div
          class="student-modal-divider"
        ></div>

        <div
          class="student-modal-connect-head"
        >

          <span>
            CONNECT & EXPLORE
          </span>

          <h3>
            روابط الطالب والمشروع
          </h3>

        </div>

        <div
          class="student-modal-links"
        ></div>

      </div>

    </article>
  `;

  document.body.appendChild(modal);

  // ======================================
  // ADD EXPLORE BUTTON
  // ======================================

  page3
    .querySelectorAll(".card-1")
    .forEach((card) => {
      const student =
        gceFindStudentByCard(card);

      if (!student) return;

      const button =
        document.createElement(
          "button"
        );

      button.type = "button";

      button.className =
        "student-details-btn";

      button.innerHTML = `
        <span>
          Explore Project
        </span>

        <span
          class="student-details-btn-icon"
        >
          <i
            class="fa-solid fa-arrow-right"
          ></i>
        </span>
      `;

      button.setAttribute(
        "aria-label",
        `Explore ${student.fullName} project`
      );

      button.addEventListener(
        "click",
        () => {
          gceOpenStudentDetails(
            student,
            card
          );
        }
      );

      card.appendChild(button);
    });

  // Close by backdrop / X button
  modal.addEventListener(
    "click",
    (event) => {
      if (
        event.target.closest(
          "[data-close-student-modal]"
        )
      ) {
        gceCloseStudentDetails();
      }
    }
  );

  // ESC
  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape"
      ) {
        gceCloseStudentDetails();
      }
    }
  );
}

gceInitStudentDetails();

// =========================================================
// GCE 2026 — Whisper Crew
//
// No project modal.
// Only LinkedIn / GitHub.
// =========================================================

const gceWhisperCrew = [
  {
    match: "ميس اللطايفة",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/mais-malkawi-807a293b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },

  {
    match: "زيد كيلاني",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/zaid-kilany-392a612a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },

  {
    match: "نور زيدان",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/noor-alwedyan-009a603aa",

      github:
        "https://github.com/nooralwedyan"
    }
  },

  {
    match: "محمد المومني",

    socials: {
      github:
        "https://github.com/m7mddd066ll-pixel"
    }
  },

  {
    match: "صفاء ارشيدات",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/safaa-irshedat",

      github:
        "https://github.com/safaaoi2002"
    }
  },

  {
    match: "تقوى العكش",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/taqwa-akish-13a0ba411/",

      github:
        "https://github.com/taqwaakish"
    }
  },

  {
    match: "عمر القرعان",

    socials: {}
  }
];

// =========================================================
// FIND WHISPER CREW MEMBER
// =========================================================

function gceFindCrewMember(card) {
  const name = gceNormalizeArabic(
    card.querySelector("p")
      ?.textContent || ""
  );

  return gceWhisperCrew.find(
    (member) =>
      name.includes(
        gceNormalizeArabic(
          member.match
        )
      )
  );
}

// =========================================================
// WHISPER CREW SOCIAL BUTTON
// =========================================================

function gceCrewSocialButton(
  type,
  url
) {
  const config = {
    linkedin: [
      "fa-brands fa-linkedin-in",
      "LinkedIn"
    ],

    github: [
      "fa-brands fa-github",
      "GitHub"
    ]
  };

  const [icon, label] =
    config[type];

  if (!url) {
    return `
      <span
        class="crew-social-link is-missing"
        aria-label="${label} coming soon"
      >

        <i
          class="${icon}"
        ></i>

        <span>
          ${label}
        </span>

        <small>
          Soon
        </small>

      </span>
    `;
  }

  return `
    <a
      class="crew-social-link"
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open ${label} profile"
    >

      <i
        class="${icon}"
      ></i>

      <span>
        ${label}
      </span>

      <i
        class="fa-solid fa-arrow-up-right-from-square crew-social-arrow"
      ></i>

    </a>
  `;
}

// =========================================================
// INIT WHISPER CREW
// =========================================================

function gceInitWhisperCrewProfiles() {
  const whisperHeading =
    document.getElementById(
      "whisper-icon"
    );

  if (!whisperHeading) return;

  const crewGrid =
    whisperHeading.nextElementSibling;

  if (
    !crewGrid ||
    !crewGrid.classList.contains(
      "card"
    )
  ) {
    return;
  }

  crewGrid.classList.add(
    "whisper-crew-grid"
  );

  crewGrid
    .querySelectorAll(".card-1")
    .forEach((card) => {
      const member =
        gceFindCrewMember(card);

      if (!member) return;

      card.classList.add(
        "whisper-crew-card"
      );

      const badge =
        document.createElement(
          "div"
        );

      badge.className =
        "crew-card-badge";

      badge.innerHTML = `
        <i
          class="fa-solid fa-users"
        ></i>

        <span>
          Whisper Crew
        </span>
      `;

      card.prepend(badge);

      const links =
        document.createElement(
          "div"
        );

      links.className =
        "crew-socials";

      links.innerHTML = [
        gceCrewSocialButton(
          "linkedin",
          member.socials.linkedin
        ),

        gceCrewSocialButton(
          "github",
          member.socials.github
        )
      ].join("");

      card.appendChild(links);
    });
}

gceInitWhisperCrewProfiles();