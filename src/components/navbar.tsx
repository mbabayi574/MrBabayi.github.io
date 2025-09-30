export const Navbar = () => {
  return (
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <button class="navbar-link">درباره</button>
        </li>

        <li class="navbar-item">
          <button id="resume" class="navbar-link">
            رزومه
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link">پروژه‌ها</button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link">وبلاگ</button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link">تماس با من</button>
        </li>
      </ul>
    </nav>
  );
};
