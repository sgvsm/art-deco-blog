import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/layout';
import {
  Home,
  Registry,
  MapExplorer,
  LocationDetail,
  Blog,
  BlogPost,
  About,
  Contact,
  Exhibitions,
} from './pages';

// Import i18n
import './i18n';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Routes with Layout (Navbar + Footer) */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/registro"
            element={
              <Layout>
                <Registry />
              </Layout>
            }
          />
          <Route
            path="/ubicacion/:slug"
            element={
              <Layout>
                <LocationDetail />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <BlogPost />
              </Layout>
            }
          />
          <Route
            path="/sobre"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contacto"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/exposiciones"
            element={
              <Layout>
                <Exhibitions />
              </Layout>
            }
          />

          {/* Map Explorer - Full height, own layout */}
          <Route
            path="/mapa"
            element={
              <Layout>
                <MapExplorer />
              </Layout>
            }
          />

          {/* 404 - Not Found */}
          <Route
            path="*"
            element={
              <Layout>
                <div className="min-h-[60vh] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-brand-red">404</h1>
                    <p className="mt-4 text-xl text-brand-gray">Página no encontrada</p>
                    <a
                      href="/"
                      className="mt-6 inline-block px-6 py-3 bg-brand-red text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
                    >
                      Volver al inicio
                    </a>
                  </div>
                </div>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
