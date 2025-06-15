// Función para abrir el modal de la galería
function openModal(mediaSrc, mediaType) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");

  modal.style.display = "block";

  if (mediaType === "video") {
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = mediaSrc;
    modalVideo.muted = true; // Asegurar que esté sin sonido
  } else {
    modalVideo.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = mediaSrc;
  }
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  const modalVideo = document.getElementById("modalVideo");

  modal.style.display = "none";

  // Pausar video si está reproduciéndose
  if (modalVideo && !modalVideo.paused) {
    modalVideo.pause();
  }
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Cerrar modal con la tecla Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Smooth scroll para el indicador de scroll
document
  .querySelector(".scroll-indicator")
  .addEventListener("click", function () {
    document.querySelector(".party-info").scrollIntoView({
      behavior: "smooth",
    });
  });

// Animaciones al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".info-card, .thesis-card, .gallery-item, .action-card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Configurar elementos para animación de scroll
function setupScrollAnimations() {
  const elements = document.querySelectorAll(
    ".info-card, .thesis-card, .gallery-item, .action-card"
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.6s ease-out";
  });
}

// Efecto de partículas flotantes dinámicas
function createFloatingParticle() {
  const particles = ["🎉", "🎊", "🎈", "🥳", "🎓", "🍾", "✨", "🌟"];
  const particle = document.createElement("div");
  particle.className = "floating-particle";
  particle.textContent =
    particles[Math.floor(Math.random() * particles.length)];

  particle.style.position = "fixed";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.fontSize = Math.random() * 20 + 15 + "px";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "1";
  particle.style.opacity = "0.6";

  document.body.appendChild(particle);

  // Animar partícula
  particle.animate(
    [
      { transform: "translateY(100vh) rotate(0deg)", opacity: 0 },
      { opacity: 0.6, offset: 0.1 },
      { opacity: 0.6, offset: 0.9 },
      { transform: "translateY(-100px) rotate(360deg)", opacity: 0 },
    ],
    {
      duration: Math.random() * 3000 + 2000,
      easing: "linear",
    }
  ).onfinish = () => {
    particle.remove();
  };
}

// Efecto de confeti al hacer clic en el título
function createConfetti(x, y) {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#f9ca24",
    "#f0932b",
    "#eb4d4b",
    "#6c5ce7",
  ];

  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = x + "px";
    confetti.style.top = y + "px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "1000";
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

    document.body.appendChild(confetti);

    // Animar confeti
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 300 + 100;
    const gravity = 500;

    confetti.animate(
      [
        {
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1,
        },
        {
          transform: `translate(${Math.cos(angle) * velocity}px, ${
            Math.sin(angle) * velocity - gravity
          }px) rotate(720deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    ).onfinish = () => {
      confetti.remove();
    };
  }
}

// Efecto hover para las tarjetas de acción
function setupActionCardEffects() {
  const actionCards = document.querySelectorAll(".action-card");

  actionCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Crear pequeñas partículas al hacer hover
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const rect = card.getBoundingClientRect();
          const x = rect.left + Math.random() * rect.width;
          const y = rect.top + Math.random() * rect.height;
          createMiniParticle(x, y);
        }, i * 100);
      }
    });
  });
}

function createMiniParticle(x, y) {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.backgroundColor = "#FFD700";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "999";

  document.body.appendChild(particle);

  particle.animate(
    [
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
      {
        transform: `translate(${(Math.random() - 0.5) * 100}px, ${
          -50 - Math.random() * 50
        }px) scale(0)`,
        opacity: 0,
      },
    ],
    {
      duration: 800,
      easing: "ease-out",
    }
  ).onfinish = () => {
    particle.remove();
  };
}

// Contador regresivo hasta la fiesta
function setupCountdown() {
  const partyDate = new Date("2025-07-05T22:30:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = partyDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Si existe un elemento de countdown, actualizarlo
      const countdownElement = document.getElementById("countdown");
      if (countdownElement) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  }

  // Actualizar cada segundo
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Ejecutar inmediatamente
}

// Efecto de paralaje suave
function setupParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector(".hero-background");

    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// Manejo de errores para imágenes y videos de la galería
function setupMediaErrorHandling() {
  const galleryImages = document.querySelectorAll(".gallery-item img");
  const galleryVideos = document.querySelectorAll(".gallery-item video");

  // Manejo de errores para imágenes
  galleryImages.forEach((img) => {
    img.addEventListener("error", function () {
      createMediaPlaceholder(this, "📸");
    });
  });

  // Manejo de errores para videos
  galleryVideos.forEach((video) => {
    video.addEventListener("error", function () {
      createMediaPlaceholder(this, "🎬");
    });

    video.addEventListener("loadeddata", function () {
      // Asegurar que el video esté sin sonido
      this.muted = true;
    });
  });
}

function createMediaPlaceholder(element, emoji) {
  // Crear placeholder si el medio no carga
  const placeholder = document.createElement("div");
  placeholder.style.width = "100%";
  placeholder.style.height = "100%";
  placeholder.style.background =
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  placeholder.style.display = "flex";
  placeholder.style.alignItems = "center";
  placeholder.style.justifyContent = "center";
  placeholder.style.color = "white";
  placeholder.style.fontSize = "3rem";
  placeholder.innerHTML = emoji;

  element.parentNode.replaceChild(placeholder, element);
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  setupScrollAnimations();
  setupActionCardEffects();
  setupCountdown();
  setupParallax();
  setupMediaErrorHandling();

  // Agregar efecto de confeti al título
  const title = document.querySelector(".glow-text");
  if (title) {
    title.addEventListener("click", function (e) {
      createConfetti(e.clientX, e.clientY);
    });
    title.style.cursor = "pointer";
  }

  // Crear partículas flotantes periódicamente
  setInterval(createFloatingParticle, 3000);

  // Animaciones de scroll
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Ejecutar inmediatamente para elementos visibles

  console.log("🎉 ¡Página de la fiesta GraGOD cargada! 🎓");
});
