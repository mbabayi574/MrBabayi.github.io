import { Link } from "wouter";

export const Navbar = () => {
  return (
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <Link href="/" class="navbar-link">
            درباره
          </Link>
        </li>

        <li class="navbar-item">
          <Link href="/resume" id="resume" class="navbar-link">
            رزومه
          </Link>
        </li>

        <li class="navbar-item">
          <Link href="/portfolio" class="navbar-link">
            پروژه‌ها
          </Link>
        </li>

        <li class="navbar-item">
          <Link href="/blog" class="navbar-link">
            وبلاگ
          </Link>
        </li>

        <li class="navbar-item">
          <Link href="/contact" class="navbar-link">
            تماس با من
          </Link>
        </li>
      </ul>
    </nav>
  );
};
