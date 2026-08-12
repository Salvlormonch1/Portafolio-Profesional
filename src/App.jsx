import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import { copy, gmailComposeUrl } from './content';
const defaultForm = {
  name: '',
  email: '',
  message: '',
};

function App() {
  const [language, setLanguage] = useState('es');
  const [form, setForm] = useState(defaultForm);

  const content = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = 'Ramón Jorge | Software Engineer';
  }, [language]);

  const handleLanguageToggle = () => {
    setLanguage((current) => (current === 'es' ? 'en' : 'es'));
  };

  return (
    <BrowserRouter>
      <SiteLayout content={content} language={language} onToggleLanguage={handleLanguageToggle}>
        <Routes>
          <Route path="/" element={<HomePage content={content} />} />
          <Route path="/sobre-mi" element={<AboutPage content={content} />} />
          <Route path="/proyectos" element={<ProjectsPage content={content} />} />
          <Route path="/habilidades" element={<SkillsPage content={content} />} />
          <Route
            path="/contacto"
            element={
              <ContactPage
                content={content}
                form={form}
                onChange={(field, value) => setForm((current) => ({ ...current, [field]: value }))}
                onSubmit={(event) => {
                  event.preventDefault();
                  const subject = `Contacto desde portafolio - ${form.name || 'Visitante'}`;
                  const body = form.message;
                  window.open(gmailComposeUrl({ subject, body }), '_blank', 'noopener,noreferrer');
                }}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

export default App;