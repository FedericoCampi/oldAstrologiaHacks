import { GetServerSideProps } from "next";
import Landing from "../components/Landing";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import { getSession } from 'next-auth/react';
import type { Session } from 'next-auth';
import StarsCanvas from "../components/StarsCanvas";
import Image from 'next/image'
import '../styles/rotate.css';
import Button from "../components/Button";

interface Props {
    categories: Category[];
    products: Product[];
    session: Session | null;
}

export default function Page({ categories, products }: Props) {
    
    // filter product by category
    const showProducts = (category: number) => {
        return products.filter((product) => product.category._ref === categories[category]._id)
        .map((product) => <Product product={product} key={product._id}/> );
    }
    return(
        <div className="w-full font-dmsans bg-[#1c1c1c]">
            <main className="relative h-[200vh] w-full">
                <Landing/>
            </main>
            <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#232222]">
                <div className="space-y-10 py-16 h-full">
                    <h1 className="text-center h-[40px] text-2xl sm:text-4xl font-medium tracking-wide
                        text-white md:text-5xl opacity-100 transition hover:opacity-75 sm:h-[60px]">
                        Calculá tu Carta Natal
                    </h1>
                    <div className="flex flex-col px-[30px] justify-center w-full items-center lg:flex-row lg:justify-evenly">
                        <div className="h-full max-w-[420px] flex justify-center bg-[#1c1c1c] border border-[#232222] p-6 mt-6 rounded-lg sm:max-w-[480px]">
                            <div className="text-white w-full">
                                <form className="w-full max-w-lg">
                                    <div className="flex flex-wrap mb-6 w-full">
                                        <div className="flex flex-wrap mb-6 mt-4 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Mi nombre es:
                                            </label>
                                            <input className="text-black appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ignacio Rodriguez"/>
                                        </div>
                                        <div className="flex flex-wrap mb-6 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Nací en:
                                            </label>
                                            <input className="text-black appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ciudad/Estado/País"/>
                                        </div>
                                        <div className="w-full mb-6 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Mi fecha de nacimiento es:
                                            </label>
                                            <input
                                                className="text-black appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="date"  //  Cambiado a type "date" 
                                                placeholder="DD/MM/YYYY"
                                                style={{ color: '#9CA3B3' }}  // Cambia 'red' al color que desees para el texto del patrón
                                                pattern="\d{2}/\d{2}/\d{4}" // Patrón para el formato DD/MM/YYYY
                                            />
                                        </div>
                                        <div className="w-full mb-6 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Mi horario de nacimiento es:
                                            </label>
                                            <div className="flex items-center w-full">
                                                <input
                                                    className="text-black appearance-none block w-1/4 bg-gray-200 rounded py-3 px-4 mb-3 mr-2 leading-tight focus:outline-none focus:bg-white"
                                                    type="number"
                                                    placeholder="HH"
                                                    min="1"
                                                    max="12"
                                                />
                                                <p className="pb-[10px] pr-[7px]">:</p>
                                                <input
                                                    className="text-black appearance-none block w-1/4 bg-gray-200 rounded py-3 px-4 mb-3 mr-2 leading-tight focus:outline-none focus:bg-white"
                                                    type="number"
                                                    placeholder="MM"
                                                    min="0"
                                                    max="59"
                                                />
                                                <div className='flex w-[50%] justify-evenly pb-[10px]'>
                                                <input id="draft" className="peer/draft" type="radio" name="status" />
                                                    <label htmlFor="draft" className="peer-checked/draft:text-white">
                                                        AM
                                                    </label>
                                                    <input id="draft" className="peer/draft" type="radio" name="status" />
                                                    <label htmlFor="draft" className="peer-checked/draft:text-white">
                                                        PM
                                                    </label>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-full justify-center">
                                            <Button title="Obtené tu carta"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 
                        <div className="max-w-[400px] pt-6 sm:max-w-[480px] sm:pt-12 lg:pl-6 xl:max-w-[620px] 2xl:max-w-[650px]">
                            <Image
                                src={'/images/CARTAANATAAL.png'}
                                alt='cartaNatal'
                                width={720}
                                height={500}
                                className="rotate-on-hover"
                            />
                        </div> 
                    </div>
                </div>
            </section>
            <div className="relative z-40 h-screen w-full overflow-hidden">
                <StarsCanvas />
            </div>
        </div> 
  )
};

//Backend code
export const getServerSideProps: GetServerSideProps<Props> = async( context ) => {

    const categories = await fetchCategories();
    const products = await fetchProducts();
    const session = await getSession(context);

    return{
        props: {
            categories,
            products,
            session
        }
    };
};

