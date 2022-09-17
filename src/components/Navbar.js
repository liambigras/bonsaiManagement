

const Navbar = () => {
    return (<div className="h-20 flex justify-center align-middle" style={{borderBottom: "1px solid #e0e0e0"}}>
        <div className="max-w-7xl w-full  flex justify-between mx-4 items-center">
            <img  width="150px" height="auto" className=" flex align-middle" src="/ressources/logo.svg" style={{  verticalAlign:"middle", backgroundRepeat: "no-repeat"}}alt="logo"/>
            <span className="  flex-row space-x-6 items-center hidden md:flex">
                <ul className="flex  flex-row space-x-8 font-normal items-center text-lg">
                    <li>Fonctionnalites</li>
                    <li>Prix</li>
                    <li>Se connecter</li>
                    <li>EN</li>
                </ul>
                <button className="h-12 rounded-md text-white font-semibold" style={{background:"linear-gradient(to top,#54a832,#a1b81c)", padding:"13px 25px"}}>
                    Demander une soumission
                </button>
            </span>
            
        </div>
    </div>)
}

export default Navbar;