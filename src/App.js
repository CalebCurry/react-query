import './App.css';
import Customers from './components/Customers';
import { useState } from 'react';

function App() {
    const [showCustomers, setShowCustomers] = useState(false);

    return (
        <div className="App">
            <button
                onClick={() => {
                    setShowCustomers(!showCustomers);
                }}
            >
                {showCustomers ? 'hide customers bro' : 'show customers bro'}
            </button>
            {showCustomers ? <Customers /> : null}
        </div>
    );
}

export default App;
