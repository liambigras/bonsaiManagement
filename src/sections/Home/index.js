import { useState } from 'react';
import Navbar from "../../components/Navbar"


const Home = () => {
    return (
    <div className='w-full h-screen bg-cover font-poppins ' style={{backgroundImage:"url(/bonsaiManagement/ressources/bgbanner.jpg)"}}>
        
        <Navbar />
        <div className='flex justify-center pt-20'>
            <div className="max-w-7xl w-full mx-4 grid sm:grid-cols-1 md:grid-cols-3">
                <h1 className='text-4xl lg:text-6xl font-bold leading-tight md:col-span-2'>Gestion de condos, simplifiée.</h1>
                <span />
                <p className='text-zinc-500 py-10 text-2xl md:col-span-2 max-w-3xl' >Offrez la meilleure expérience condo à vos résidents, tout en ayant des outils puissants pour une gestion simple et efficace.</p>
                <span />
                <button className="h-12 w-auto rounded-md text-white font-semibold w-auto lg:w-2/3" style={{background:"linear-gradient(to top,#54a832,#a1b81c)", padding:"13px 10px"}}>
                    Demander une soumission
                </button>            
            </div>
        </div>
        
    </div>)
}

export default Home;