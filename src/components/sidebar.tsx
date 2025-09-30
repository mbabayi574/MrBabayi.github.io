import avatarImg from "../assets/images/MyAssets/CartoonBobby.png";

export const Sidebar = () => {
  return (
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img
            src={avatarImg}
            alt="محمدرضا بابایی"
            width="80"
            style="border-radius: 20px"
          />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Mohammadreza Babayi">
            محمدرضا بابایی
          </h1>

          <p class="title">توسعه‌دهنده نرم‌افزار</p>
        </div>

        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">پست الکترونیکی</p>

              <a
                href="mailto:m.babayi574@gmail.com"
                class="contact-link english-numbers"
              >
                M.Babayi574@Gmail
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">شماره همراه</p>

              <a href="tel:+989355033107" class="contact-link">
                ۰۹۳۵۵۰۳۳۱۰۷
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">تاریخ تولد</p>
              <time datetime="2000/4/2">۱۴ / ۰۱ / ۱۳۷۹</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">محل سکونت</p>

              <address>اصفهان، کاشان</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/mohammad-reza-b-7a2099123/"
              class="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://github.com/mbabayi574" class="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://t.me/The_Path_313" class="social-link">
              <ion-icon name="logo-rss"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
