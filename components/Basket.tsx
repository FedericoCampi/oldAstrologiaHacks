import { useState, useEffect } from 'react';
import Link  from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'; // Asegúrate de importar el icono correcto
import { selecBasketTotal, selectBasketItems } from '../redux/basketSlice';
import { useSelector } from 'react-redux';

const Basket = () => {
    const items = useSelector(selectBasketItems);
     const basketTotal = useSelector(selecBasketTotal);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Agrega un retraso para que la transición sea visible al cambiar la visibilidad
        const timeout = setTimeout(() => {
            setIsVisible(items.length > 0);
        }, 100);

        return () => clearTimeout(timeout);
    }, [items.length]);

    return (
        <Link href='/checkout'>
            <div
                className={`${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-16'
                } fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center 
                    rounded-full bg-gray-300 transform transition-all ease-in-out duration-200`}
            >
                {isVisible && (
                    <span className='absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full
                        bg-gradient-to-r from-pink-500 to-violet-500 text-[15px] text-white'>
                        {items.length}
                    </span>
                )}
                <ShoppingBagIcon className='headerIcon h-8 w-8' />
            </div>
        </Link>
    );
};
export default Basket