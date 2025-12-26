// Urban-Rise unified logic: sidebar + bilingual support
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');

  if (menuToggle && sidebar && closeSidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.add('active');
    });
    closeSidebar.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // Bilingual support
  const langButtons = {
    en: document.getElementById('lang-en'),
    ar: document.getElementById('lang-ar')
  };

  async function setLanguage(lang) {
    try {
      // المسار الصحيح للملفات داخل مجلد lang/
      const response = await fetch(`lang/lang_${lang}.json`);
      const translations = await response.json();

      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });

      // ضبط اتجاه الصفحة
      document.body.dir = (lang === "ar") ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    } catch (err) {
      console.error("Language file error:", err);
    }
  }

  // ربط الأزرار
  if (langButtons.en) langButtons.en.addEventListener('click', () => setLanguage('en'));
  if (langButtons.ar) langButtons.ar.addEventListener('click', () => setLanguage('ar'));

  // تحميل اللغة الافتراضية
  setLanguage('en');
});
