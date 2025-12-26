// Urban-Rise unified logic: sidebar + bilingual support
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');

  if (menuToggle && sidebar && closeSidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.add('active'));
    closeSidebar.addEventListener('click', () => sidebar.classList.remove('active'));
  }

  // Bilingual support
  const langButtons = {
    en: document.getElementById('lang-en'),
    ar: document.getElementById('lang-ar')
  };

  async function setLanguage(lang) {
    try {
      const response = await fetch(`lang/lang_${lang}.json`);
      const translations = await response.json();

      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });

      document.body.dir = (lang === "ar") ? "rtl" : "ltr";
      document.documentElement.lang = lang;

      // حفظ اللغة المختارة
      localStorage.setItem("preferredLang", lang);
    } catch (err) {
      console.error("Language file error:", err);
      alert("⚠️ Language file could not be loaded.");
    }
  }

  if (langButtons.en) langButtons.en.addEventListener('click', () => setLanguage('en'));
  if (langButtons.ar) langButtons.ar.addEventListener('click', () => setLanguage('ar'));

  // تحميل اللغة الافتراضية أو المحفوظة
  const savedLang = localStorage.getItem("preferredLang") || "en";
  setLanguage(savedLang);
});
