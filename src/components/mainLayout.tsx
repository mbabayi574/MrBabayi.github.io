import type { ComponentChildren } from "preact";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export const MainLayout = ({ children }: { children: ComponentChildren }) => {
  return (
    <main>
      <Sidebar />
      <div class="main-content">
        <Navbar />
        {children}
      </div>
    </main>
  );
};
