import { Route, Switch } from "wouter";
import { MainLayout } from "./components/mainLayout";
import { AboutPage } from "./pages/about";
import { ResumePage } from "./pages/resume";
import { BlogPage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
import { PortfolioPage } from "./pages/portfolio";

export function App() {
  return (
    <>
      <MainLayout>
        <Switch>
          <Route path="/" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </MainLayout>
    </>
  );
}
