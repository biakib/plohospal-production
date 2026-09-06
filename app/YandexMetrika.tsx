"use client";

import Script from "next/script";

/** Номер счётчика Яндекс.Метрики. 0 — счётчик ещё не подключён, код не рендерится. */
export const YANDEX_METRIKA_ID = 112013260;

/** Отправка цели в Метрику (цель в кабинете: тип «JavaScript-событие», идентификатор = goal). */
export function reachGoal(goal: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { ym?: (...args: unknown[]) => void };
  w.ym?.(YANDEX_METRIKA_ID, "reachGoal", goal);
}

export function YandexMetrika() {
  if (!YANDEX_METRIKA_ID) return null;
  return (
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${YANDEX_METRIKA_ID}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });`}
    </Script>
  );
}
