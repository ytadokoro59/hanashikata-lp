/* ==============================
   FAQ Accordion
============================== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

/* ==============================
   Smooth Scroll for CTA buttons
============================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 60;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ==============================
   Fade-in on scroll
============================== */
const fadeEls = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('is-visible'));
}

/* ==============================
   Form Submit (Formspree)
============================== */
const form = document.getElementById('contact-form');
if (form) {
  const showSuccess = () => {
    form.innerHTML = `
      <div style="text-align:center;padding:32px 0;color:#fff;">
        <div style="font-size:48px;margin-bottom:16px;">✓</div>
        <p style="font-size:18px;font-weight:700;margin-bottom:8px;">お申し込みありがとうございます</p>
        <p style="font-size:14px;opacity:0.8;line-height:1.8;">担当者より日程調整のご連絡をいたします。<br>しばらくお待ちください。</p>
      </div>`;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // メールアドレスまたは電話番号のどちらか一方は必須
    const email = form.querySelector('#email');
    const tel = form.querySelector('#tel');
    if (!email.value.trim() && !tel.value.trim()) {
      alert('メールアドレスまたは電話番号の、どちらか一方をご入力ください。');
      email.focus();
      return;
    }

    const btn = form.querySelector('.form-submit-btn');
    const originalLabel = btn.textContent;
    btn.textContent = '送信中...';
    btn.disabled = true;

    // Formspreeの正式IDが未設定の場合のガード
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      alert('※フォーム送信先（Formspree ID）が未設定です。index.html の form action を正式IDに差し替えてください。');
      btn.textContent = originalLabel;
      btn.disabled = false;
      return;
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        showSuccess();
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (err) {
      alert('送信中にエラーが発生しました。お手数ですが、時間をおいて再度お試しください。');
      btn.textContent = originalLabel;
      btn.disabled = false;
    }
  });
}

/* ==============================
   Header shadow on scroll
============================== */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = 'none';
  }
}, { passive: true });
