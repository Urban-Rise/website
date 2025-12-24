// Urban-Rise sidebar toggle logic
document.addEventListener('DOMContentLoaded', () => {
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
});
