"use client";

import { useState, type FormEvent, type PointerEvent } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const tickerText = "PLOHOSPAL PRODUCTION";
const root = "";

const services = [
  { title: "Упаковка бренда", text: "Позиционирование, фирменный стиль и презентации, которые продают.", result: "На выходе — бренд с характером: от логотипа и брендбука до питч-дека." },
  { title: "Стратегия и маркетинг", text: "Аудит медиаприсутствия, анализ аудитории и стратегия с понятными KPI.", result: "На выходе — живой инструмент роста, который развивается вместе с бизнесом." },
  { title: "SMM и контент", text: "Контент-стратегия, ведение аккаунтов и работа с блогерами.", result: "На выходе — медиаприсутствие, которое приводит клиентов." },
  { title: "Продакшн: съёмка и сценарии", text: "Сценарии, съёмка видео и фото — под ключ, от идеи до публикации.", result: "На выходе — история и картинка, которая цепляет с первых секунд." },
  { title: "AI-контент", text: "AI-фото и AI-видео, цифровые аватары, озвучка и клонирование голоса.", result: "На выходе — контент без студии и съёмочных дней: быстрее и дешевле." },
  { title: "Внедрение и обучение ИИ", text: "Подбор ИИ-инструментов под процессы и обучение вашей команды.", result: "На выходе — команда, которая делает больше силами тех же людей." },
];

const quizSteps = [
  { key: "goal", question: "Что сейчас важнее всего?", options: [["position", "Собрать позиционирование"], ["content", "Наладить контент"], ["campaign", "Запустить кампанию"]] },
  { key: "scale", question: "На каком вы масштабе?", options: [["start", "Запускаемся"], ["grow", "Растём"], ["large", "Большая команда"]] },
  { key: "pace", question: "Какой темп вам ближе?", options: [["fast", "Быстрый старт"], ["steady", "Системная работа"]] },
] as const;

const formats = [
  ["Старт", "Для малого бизнеса и личных брендов", "Упаковка бренда, стратегия и первый контент-план — быстрый выход в медиапространство."],
  ["Бизнес", "Для растущих команд", "Полный цикл: упаковка бренда, SMM и контент, продакшн и продвижение."],
  ["Корпорация", "Для крупного бизнеса", "Комплексная медиастратегия, AI-контент и внедрение ИИ — работа на год вперёд."],
  ["Партнёрство", "Для агентств и инвесторов", "Совместные проекты, white-label и долгосрочное сотрудничество."],
];

const team = [
  { name: "Илья Бушманов", role: "Основатель, медиапродюсер", image: `${root}/assets/ilya-bushmanov-new.webp`, links: [["ВК", "https://vk.com/bimperv"], ["TG", "https://t.me/bimperv"], ["IG", "https://www.instagram.com/bimperv"]] },
  { name: "Иван Егоров", role: "Креативный директор", image: `${root}/assets/ivan-egorov-new.webp`, links: [["ВК", "https://vk.com/vanzep"], ["TG", "https://t.me/vanzep"], ["IG", "https://www.instagram.com/ivanegorov"]] },
  { name: "Денис Круглов", role: "Режиссёр-постановщик, оператор", image: `${root}/assets/denis-kruglov-new.webp`, links: [["ВК", "https://vk.ru/motherfackers1"], ["IG", "https://www.instagram.com/kds_video_prod"]] },
  { name: "Артур Рякин", role: "Продюсер постпродакшна", image: `${root}/assets/artur-ryakin.webp`, links: [["ВК", "https://vk.ru/honeykut"]] },
  { name: "Илья Кузьмицкий", role: "Специалист по внедрению ИИ-технологий и обучению нейросетям", image: `${root}/assets/ilya-kuzmitsky.webp`, links: [["ВК", "https://vk.ru/neuro_ilya"], ["TG", "https://t.me/Neuro_Ilya"]] },
  { name: "Лиона Филь", role: "Руководитель направления актёрского и ораторского мастерства", image: `${root}/assets/liona-fil-portrait-v2.webp`, links: [["ВК", "https://vk.com/lionkas"], ["TG", "https://t.me/lionaelle"], ["IG", "https://www.instagram.com/lionaelle"]] },
  { name: "Юлия Гирш", role: "Специалист по AI и SMM", image: `${root}/assets/yulia-girsh-new.webp`, links: [["ВК", "https://vk.com/id138925509"], ["TG", "https://t.me/@girshjuli"], ["IG", "https://www.instagram.com/juli_girsh"]] },
];

export default function Home() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [leadBrief, setLeadBrief] = useState("");
  const quizDone = quizIndex === quizSteps.length;
  const recommendedFormat =
    quizAnswers.scale === "large" ? "Корпорация"
    : quizAnswers.scale === "grow" || quizAnswers.goal === "campaign" || quizAnswers.pace === "steady" ? "Бизнес"
    : "Старт";
  const recommendationReason =
    recommendedFormat === "Корпорация"
      ? "У вас большая команда — нужна комплексная стратегия, AI-инструменты и работа на год вперёд."
      : recommendedFormat === "Бизнес"
        ? quizAnswers.goal === "campaign"
          ? "Вы запускаете кампанию — подключим полный цикл: контент, SMM и продвижение."
          : quizAnswers.scale === "grow"
            ? "Вы в стадии роста — нужен полный цикл: упаковка бренда, контент, SMM и продвижение."
            : "Вы настроены на системную работу — построим медиаприсутствие, которое работает по плану."
        : "Вы запускаетесь — начнём с упаковки бренда, стратегии и первого контент-плана.";

  function chooseQuizAnswer(key: string, value: string) {
    setQuizAnswers((answers) => ({ ...answers, [key]: value }));
    setQuizIndex((index) => index + 1);
  }

  function tiltTeamCard(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--tilt-x", `${-y * 5}deg`);
    card.style.setProperty("--tilt-y", `${x * 5}deg`);
  }

  function resetTeamTilt(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  function sendLeadBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = fields.get("name")?.toString().trim() ?? "";
    const contact = fields.get("contact")?.toString().trim() ?? "";
    const task = fields.get("task")?.toString().trim() ?? "";
    const brief = `PLOHOSPAL — новый бриф\n\nИмя: ${name}\nКонтакт: ${contact}\nРекомендованный формат: ${recommendedFormat}\nПочему: ${recommendationReason}\nЗадача: ${task}`;
    setLeadBrief(brief);
    window.open("https://t.me/bimperv", "_blank", "noopener,noreferrer");
    navigator.clipboard?.writeText(brief).catch(() => undefined);
  }

  return (
    <main id="top">
      <SiteHeader/>

      <section className="hero" id="top">
        <div className="hero-lens" aria-hidden="true"><span/></div>
        <h1 aria-label="PLOHOSPAL">
          <span className="hero-word solid-word" aria-hidden="true"><i>P</i><i>L</i><i>O</i><i>H</i><i>O</i></span>
          <span className="hero-word outline-word" aria-hidden="true"><i>S</i><i>P</i><i>A</i><i>L</i></span>
        </h1>
        <div className="hero-bottom">
          <p>Строим медиаприсутствие,<br/>которое невозможно игнорировать.</p>
          <a className="round-link" href="#about" aria-label="Узнать больше"><ArrowIcon direction="down" /></a>
          <p className="hero-side">Стратегия · SMM<br/>Продакшн · AI</p>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((group) => <span key={group}>{Array.from({ length: 24 }, (_, index) => <b key={index}>{tickerText}</b>)}</span>)}
          </div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="eyebrow">[ Про нас ]</div>
        <p className="statement">Мы берём бизнес и создаём для него <em>сильную подачу</em> в медиапространстве — от стратегии и визуального образа до контента, рекламы и цифровых амбассадоров.</p>
        <div className="intro-grid">
          <div className="portrait"><img src={`${root}/assets/about.webp`} alt="Команда PLOHOSPAL Production за работой" loading="lazy" decoding="async"/></div>
          <div className="intro-copy">
            <h2>Система, которая<br/>приносит результат.</h2>
            <p>Для каждого клиента — свой продукт. Мы изучаем бизнес, находим точки роста и предлагаем именно то, что даст результат.</p>
            <ul><li>Полный цикл в одном месте</li><li>Бизнес любого масштаба</li><li>AI как усиление живого подхода</li></ul>
          </div>
        </div>
      </section>

      <section className="numbers section" aria-label="Результаты">
        <div><strong>48</strong><span>часов до первой<br/>персональной стратегии</span></div>
        <div><strong>2</strong><span>дня до первого<br/>AI-аватара</span></div>
        <div><strong>6</strong><span>направлений<br/>полного цикла</span></div>
      </section>

      <section className="services section">
        <div className="section-label-row"><div className="eyebrow">[ Направления ]</div><a className="text-link" href={`${root}/directions/`}>Все направления <ArrowIcon /></a></div>
        <div className="service-list">
          {services.map((service) => {
            const isOpen = openService === service.title;
            return <article className={isOpen ? "is-open" : ""} key={service.num}>
              <button className="service-toggle" type="button" aria-expanded={isOpen} onClick={() => setOpenService(isOpen ? null : service.title)}>
                <h3>{service.title}</h3><p>{service.text}</p><b><ArrowIcon /></b>
              </button>
              <div className="service-expand"><div><p>{service.result}</p><a href="#contact">Обсудить проект <ArrowIcon /></a></div></div>
            </article>;
          })}
        </div>
      </section>

      <section className="manifesto section">
        <div className="manifesto-art"><img src={`${root}/assets/manifesto.webp`} alt="Креативный образ PLOHOSPAL Production" loading="lazy" decoding="async"/></div>
        <div className="manifesto-copy">
          <div className="eyebrow">[ Манифест ]</div>
          <blockquote>«Бренд — это то, как вас чувствуют»</blockquote>
          <p>Мы сами — наш главный кейс. Всё, что предлагаем клиентам, делаем для себя первыми. Создаём истории, которые остаются — от поста до полнометражного кино.</p>
          <a className="dark-link" href={`${root}/manifesto/`}>Читать манифест <ArrowIcon /></a>
        </div>
      </section>

      <section className="formats section" id="formats">
        <div className="section-head"><div className="eyebrow">[ Форматы сотрудничества ]</div><h2>Подключаемся<br/>на нужном масштабе</h2></div>
        <div className="format-grid">
          {formats.map(([title, forWhom, desc], i) => <article key={title}><h3>{title}</h3><small>{forWhom}</small><p>{desc}</p><a href="#contact">Обсудить проект <ArrowIcon /></a></article>)}
        </div>
        <p className="note">Точные условия — индивидуально после брифинга.</p>
      </section>

      <section className="quiz section" id="quiz">
        <div className="quiz-heading"><div className="eyebrow">[ Быстрый бриф ]</div><p>Ответьте на три вопроса — подскажем, с какого формата лучше начать.</p></div>
        <div className="quiz-panel">
          {!quizDone ? <>
            <div className="quiz-progress" aria-label={`Вопрос ${quizIndex + 1} из ${quizSteps.length}`}><span style={{ width: `${((quizIndex + 1) / quizSteps.length) * 100}%` }}/></div>
            <small>Вопрос {quizIndex + 1} из {quizSteps.length}</small>
            <h2>{quizSteps[quizIndex].question}</h2>
            <div className="quiz-options">
              {quizSteps[quizIndex].options.map(([value, label]) => <button key={value} type="button" onClick={() => chooseQuizAnswer(quizSteps[quizIndex].key, value)}>{label}<ArrowIcon /></button>)}
            </div>
          </> : <div className="quiz-result">
            <div className="eyebrow">[ Ваш старт ]</div><p>Вам подойдёт формат</p><h2>{recommendedFormat}</h2><p className="quiz-result-copy">{recommendationReason}</p><button className="quiz-reset" type="button" onClick={() => { setQuizIndex(0); setQuizAnswers({}); setLeadBrief(""); }}>Пройти ещё раз</button>
            <form className="lead-form" onSubmit={sendLeadBrief}>
              <label>Как вас зовут?<input name="name" required autoComplete="name" placeholder="Имя"/></label>
              <label>Как с вами связаться?<input name="contact" required placeholder="Telegram, телефон или почта"/></label>
              <label>Коротко о задаче<textarea name="task" required placeholder="Что хотите изменить или запустить?" rows={1}/></label>
              <label className="consent-field"><input name="consent" type="checkbox" required/><span>Даю согласие на обработку персональных данных согласно <a href={`${root}/privacy/`} target="_blank" rel="noreferrer">Политике обработки персональных данных</a>.</span></label>
              <p className="lead-form-note">После нажатия откроется Telegram, а текст брифа будет скопирован в буфер. Сообщение отправляете вы сами.</p>
              <button type="submit">Получить персональную стратегию <ArrowIcon /></button>
            </form>
            {leadBrief && <div className="lead-confirmation"><b>Бриф скопирован.</b><span>Telegram открыт — вставьте текст в сообщение и отправьте его.</span><button type="button" onClick={() => navigator.clipboard?.writeText(leadBrief)}>Скопировать ещё раз</button></div>}
          </div>}
        </div>
      </section>

      <section className="team section" id="team">
        <div className="section-head"><div className="eyebrow">[ Команда ]</div><h2>Проверяем всё<br/>на себе</h2></div>
        <p className="team-lead">Стратеги, маркетологи, сценаристы и AI-специалисты, объединённые одной целью — создавать медиаприсутствие, которое работает.</p>
        <div className="team-grid">
          {team.map((person) => <article key={person.name}>
            <div className="team-photo" onPointerMove={tiltTeamCard} onPointerLeave={resetTeamTilt}><img src={person.image} alt={person.name} loading="lazy" decoding="async"/><span><ArrowIcon /></span></div>
            <h3>{person.name}</h3><p>{person.role}</p>
            <div className="socials">{person.links.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>)}</div>
          </article>)}
        </div>
      </section>

      <section className="faq section">
        <div className="eyebrow">[ FAQ ]</div>
        <div className="faq-grid"><h2>Перед тем,<br/>как начать</h2><div>
          <details><summary>С какими нишами вы работаете?<span>+</span></summary><p>С бизнесом любого масштаба — от личного бренда и локального проекта до крупной компании.</p></details>
          <details><summary>Можно начать с одной задачи?<span>+</span></summary><p>Да. Начнём с аудита и приоритетной задачи, а затем соберём систему вокруг измеримого результата.</p></details>
          <details><summary>Что происходит после заявки?<span>+</span></summary><p>Связываемся в течение 24 часов, проводим короткий бриф и предлагаем персональную стратегию.</p></details>
          <a className="text-link faq-more" href={`${root}/faq/`}>Все вопросы и ответы <ArrowIcon /></a>
        </div></div>
      </section>
      <SiteFooter/>
    </main>
  );
}
