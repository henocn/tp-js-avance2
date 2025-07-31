import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import "./index.css"
import { OrderProvider } from "./contexts/OrderContext";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
             <OrderProvider>
                <App />
            </OrderProvider>
        </BrowserRouter>
    );