import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuctionContextProvider from './context/AuctionContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuctionContextProvider>
            <App />
        </AuctionContextProvider>
    </BrowserRouter>
)
