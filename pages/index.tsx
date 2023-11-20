import { GetServerSideProps } from "next";
import Landing from "../components/Landing";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import { getSession } from 'next-auth/react';
import type { Session } from 'next-auth';
import StarsCanvas from "../components/StarsCanvas";
import Image from 'next/image'

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
                    <h1 className="text-center h-[50px] text-2xl sm:text-4xl font-medium tracking-wide
                        text-white md:text-5xl opacity-100 transition hover:opacity-75">
                        Calculá tu Carta Natal
                    </h1>
                    <div className="flex flex-col">
                        <div className="h-full w-full flex justify-center px-[30px]">
                            <div className="text-white w-full">
                                <form className="w-full max-w-lg">
                                    <div className="flex flex-wrap mb-6 w-full">
                                        <div className="flex flex-wrap mb-6 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Mi nombre es:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Mario Lopéz"/>
                                        </div>
                                        <div className="flex flex-wrap mb-6 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Nací en:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ciudad/Estado/País"/>
                                        </div>
                                        <div className="w-full mb-6 md:mb-0 w-full">
                                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Mi fecha de nacimiento es:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ciudad/Estado/País"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 
                        <div className="">
                            <Image
                                src={'/images/cartaNatal.png'}
                                alt='cartaNatal'
                                width={500}
                                height={500} 
                            />
                        </div> 
                    </div>
                </div>
            </section>
            <div className="relative z-40 h-screen w-full bg-transparent">
                    <StarsCanvas/>
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

