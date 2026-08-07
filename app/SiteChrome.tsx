export function SiteHeader() {
  const root = "/plohospal-production";
  return (
    <header className="nav-wrap">
      <a className="logo" href={`${root}/`} aria-label="PLOHOSPAL Production — главная">
        <img src={`${root}/assets/plohospal-logo-dark.png`} alt="PLOHOSPAL PRODUCTION" />
      </a>
      <nav aria-label="Основная навигация">
        <a href={`${root}/#about`}>Про нас</a><a href={`${root}/#formats`}>Форматы</a><a href={`${root}/#team`}>Команда</a><a href={`${root}/#contact`}>Контакты</a>
        <details className="desktop-more"><summary>Ещё <span>+</span></summary><div><a href={`${root}/directions/`}>Направления</a><a href={`${root}/manifesto/`}>Манифест</a><a href={`${root}/faq/`}>FAQ</a></div></details>
      </nav>
      <a className="nav-cta" href={`${root}/#contact`}>Обсудить проект ↗</a>
      <details className="mobile-menu">
        <summary aria-label="Открыть меню"><span></span><span></span></summary>
        <div><a href={`${root}/`}>Главная</a><a href={`${root}/#about`}>Про нас</a><a href={`${root}/#formats`}>Форматы</a><a href={`${root}/#team`}>Команда</a><a href={`${root}/#contact`}>Контакты ↗</a><span className="mobile-menu-label">Разделы сайта</span><a href={`${root}/directions/`}>Направления</a><a href={`${root}/manifesto/`}>Манифест</a><a href={`${root}/faq/`}>FAQ</a></div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-top"><div className="eyebrow">[ Контакты ]</div><p>Есть проект?</p></div>
      <h2>ДАВАЙТЕ<br/><span>СДЕЛАЕМ</span> ↗</h2>
      <div className="footer-grid">
        <p>Первая консультация и персональная стратегия медиаприсутствия — бесплатно.</p>
        <div><small>Социальные сети</small><a href="https://t.me/bimperv" target="_blank" rel="noreferrer">Telegram</a><a href="https://www.instagram.com/bimperv" target="_blank" rel="noreferrer">Instagram</a><a href="https://vk.com/bimperv" target="_blank" rel="noreferrer">ВКонтакте</a></div>
        <div><small>Связаться напрямую</small><a href="tel:+79026399815">+7 902 639-98-15</a><a href="mailto:Bimperv@yandex.ru">Bimperv@yandex.ru</a></div>
      </div>
      <div className="copyright"><span>© PLOHOSPAL PRODUCTION, 2026</span><a href="/plohospal-production/privacy/">Политика обработки данных</a><a href="#top">Наверх ↑</a></div>
    </footer>
  );
}
