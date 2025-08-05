// Sayfa yüklendiğinde yıl güncelle (footer)
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Typewriter efekti
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const text = "MERHABA, BEN BURAK";
    let i = 0;

    function typeWriterEffect() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriterEffect, 100);
      }
    }

    typeWriterEffect();
  }

 
  // GitHub toast uyarısı
  document.querySelectorAll("a.button").forEach((btn) => {
    btn.addEventListener("click", () => {
      showToast("GitHub sayfasına yönlendiriliyorsunuz...");
    });
  });
});

// Basit toast mesajı
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "#333";
  toast.style.color = "#fff";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "6px";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.4s ease";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
  }, 10);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  const setTheme = (dark) => {
    if (dark) {
      document.body.classList.add("dark-mode");
      btn.textContent = "🌞";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      btn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  };

  // Başlangıçta ayarı yükle
  const isDark = localStorage.getItem("theme") === "dark";
  setTheme(isDark);

  btn.addEventListener("click", () => {
    const nowDark = !document.body.classList.contains("dark-mode");
    setTheme(nowDark);
  });
});
