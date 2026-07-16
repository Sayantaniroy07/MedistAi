import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
  domain="dev-tsjanxyusoyk270t.us.auth0.com"
  clientId="yBO3RPCA3jhoZCobF7BP4aVbXV27F2eQ"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  cacheLocation="localstorage"
  useRefreshTokens={true}
>
  <App />
</Auth0Provider>
  </BrowserRouter>
</StrictMode>,
)
