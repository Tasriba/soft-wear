import React, { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';

const Verify = () => {

    const { navigate, backendUrl, token, setCartItems } = useContext(ShopContext);

    const [searchParams, setSearchParams] = useSearchParams();
    //const navigate = useNavigate();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) return null;

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                {
                    success,
                    orderId
                },
                {
                    headers: { token }
                }
            );

            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                toast.error('Payment verification failed');
                navigate('/cart');
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
            navigate('/cart');
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [token]);

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <p className="text-lg font-medium">Verifying Payment...</p>
        </div>
    );
};

export default Verify;