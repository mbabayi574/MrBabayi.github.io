export const ResumePage = () => {
  return (
    <article class="resume">
      <header>
        <h2 class="h2 article-title">رزومه</h2>
      </header>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="analytics-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Creative director</h4>

            <span>2015 — Present</span>

            <p class="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Art director</h4>

            <span>2013 — 2015</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Web designer</h4>

            <span>2010 — 2013</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">تحصیلات</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">دانشگاه علم و صنعت ایران</h4>

            <span>۱۴۰۲ - ۱۳۹۷</span>

            <p class="timeline-text">
              فارغ‌التحصیل در رشته مهندسی کامپیوتر با معدل ۱۵.۶۸
              <br />
              عنوان پایان‌نامه: سامانه جامع مدیریت اینترنت اشیای پاتریوت - استاد
              راهنما: دکتر حسینی‌منزه
            </p>
          </li>
        </ol>
      </section>
      <section class="skill">
        <h3 class="h3 skills-title">مهارت‌ها</h3>

        <ul class="skills-list content-card" dir="ltr">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">FrontEnd Development ( React JS )</h5>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 85%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Java & Spring EcoSystem</h5>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 65%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Django and FastAPI</h5>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 20%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">AI Agent & RAG System Development</h5>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 35%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Data Analysis & Machine Learning</h5>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 5%"></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};
