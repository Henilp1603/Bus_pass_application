import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './contexts/UserContext.jsx'
import { TransactionProvider } from './contexts/Transactioncontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TransactionProvider>
        <App />
      </TransactionProvider>
    </UserProvider>
  </React.StrictMode>,
)
