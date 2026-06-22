// ================================================================
// 1. INITIALISATION AOS (Animations)
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser AOS
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100
  });


  // ================================================================
  // 3. DARK MODE
  // ================================================================
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Vérifier si le mode sombre est sauvegardé
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      this.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      this.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });

  // ================================================================
  // 4. NAVIGATION DOUCE VERS LES SECTIONS
  // ================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});