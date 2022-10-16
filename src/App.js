import './App.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {
    const priceQuery = useQuery(
        ['price'],
        () => {
            return axios(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
            );
        },
        {
            refetchInterval: 1000 * 5,
        }
    );

    const customerQuery = useQuery(
        ['customers'],
        () => {
            return axios('http://localhost:3000/api/customers');
        },
        {
            refetchOnWindowFocus: true,
        }
    );
    return (
        <div className="App">
            {priceQuery?.error ? <p>UH oh! Error...</p> : null}
            {priceQuery?.isLoading ? <p>Loading...</p> : null}
            {priceQuery?.data?.data?.bitcoin?.usd
                ? priceQuery.data.data.bitcoin.usd
                : null}
        </div>
    );
}

export default App;
