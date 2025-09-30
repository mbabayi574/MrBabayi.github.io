import designIcon from "../assets/images/icon-design.svg";
import devIcon from "../assets/images/icon-dev.svg";
import NabzLogo from "../assets/images/MyAssets/nabzgroup-logo.webp";
import RaydadLogo from "../assets/images/MyAssets/Raydad-Horizontal22.svg";
import QueraLogo from "../assets/images/MyAssets/logo-quera-heavy.3-1c1287ee3575.svg";
import PSPLogo from "../assets/images/MyAssets/psplogo.svg";

export const AboutPage = () => {
  return (
    <article class="about">
      <header>
        <h2 class="h2 article-title">درباره من</h2>
      </header>

      <section class="about-text">
        <p>
          من محمدرضام، قبل از هر چیزی یه آدم شاد که دلم میخواهد با کارایی که
          انجام میدم باعث ایجاد حس خوب و شادی توی آدمای دیگه بشم.
          <br />
          اگه فکر میکنین ایده‌ای دارین که میتونه برای جامعه فایده‌ای داشته باشه
          و باعث ایجاد حال خوب توی بقیه بشه خوشحال میشم با همدیگه یه گپی بزنیم.
          شاید دوستای خوبی شدیم. ^_^
        </p>

        <ul>
          <li>
            توسعه‌‌دهنده نرم‌افزار با ۶ سال تجربه عملی در طراحی و پیاده‌سازی
            وب‌اپلیکیشن‌های مقیاس‌پذیر و سرویس‌های نرم‌افزاری
          </li>
          <li>JAVA ( SPRING BOOT ) - REACT JS - AI AGENTS & RAG SYSTEMS</li>
        </ul>
      </section>

      <section class="service">
        <h3 class="h3 service-title">چه کارهایی انجام میدم؟</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img src={designIcon} alt="design icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">تحلیل و طراحی</h4>

              <p class="service-item-text">
                تحلیل و طراحی ظاهر و تجربه کاربری محصولات مورد نظر شما
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img src={devIcon} alt="Web development icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">توسعه وب‌اپلیکیشن</h4>

              <p class="service-item-text">
                ساخت و توسعه وب‌اپلیکیشن‌های مقیاس‌پذیر و سرویس‌های نرم‌افزاری
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section class="clients">
        <h3 class="h3 clients-title">سوابق همکاری</h3>

        <ul class="clients-list has-scrollbar">
          <li class="clients-item">
            <a href="https://nabzgroup.com/">
              <img src={NabzLogo} alt="Nabz Group" />
            </a>
          </li>

          <li class="clients-item">
            <a href="https://raydad.com/">
              <img src={RaydadLogo} alt="Raydad" />
            </a>
          </li>

          <li class="clients-item">
            <a href="https://quera.org/">
              <img src={QueraLogo} alt="Quera" />
            </a>
          </li>

          <li class="clients-item">
            <a href="https://pep.co.ir/">
              <img src={PSPLogo} alt="Pasargad Electronic Payment" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};
