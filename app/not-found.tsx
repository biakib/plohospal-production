import { SiteFooter, SiteHeader } from "./SiteChrome";
import { ArrowIcon } from "./ArrowIcon";

export const dynamic = "force-static";

export default function NotFound() {
  return <main id="top"><SiteHeader/>
    <section className="page-hero notfound-hero">
      <div className="eyebrow">[ Страница не найдена ]</div>
      <h1>ТАКОЙ<br/><span>СТРАНИЦЫ</span> НЕТ</h1>
      <p>Как и вашего бренда в медиапространстве, если о нём никто не слышал. Исправим второе — начнём с главной.</p>
      <a className="notfound-link" href="/"><ArrowIcon /> На главную</a>
    </section>
    <SiteFooter/>
  </main>;
}
