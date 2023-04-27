import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App'
import { themeToken } from './common/theme';
import './index.css';
import './i18n';
import { store } from './store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { SidebarProvider } from './common/providers';
import { ContentHeaderProvider } from './common/providers/contentHeader.provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: themeToken
          }}
        >
          <SidebarProvider>
            <ContentHeaderProvider>
              <App />
            </ContentHeaderProvider>
          </SidebarProvider>
        </ConfigProvider>
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
)
