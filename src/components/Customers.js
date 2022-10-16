import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Customers = () => {
    const customerQuery = useQuery(
        ['customers'],
        () => {
            return axios('http://localhost:3000/api/customers');
        },
        { refetchOnWindowFocus: false }
    );

    if (customerQuery.isLoading) {
        return <p>Patience...</p>;
    }

    if (customerQuery?.data?.data?.customers) {
        return (
            <div>
                {customerQuery.data.data.customers.map((customer) => {
                    return <p key={customer._id}>{customer.name}</p>;
                })}
            </div>
        );
    }

    return <div></div>;
};

export default Customers;
