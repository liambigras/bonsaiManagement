import useLocales from '../hooks/useLocales';
import logo from '../logo.svg';

const Navbar = () => {
    const { translate, onChangeLang } = useLocales();

    return (<div className="h-20 flex justify-center align-middle" style={{borderBottom: "1px solid #e0e0e0"}}>
        <div className="max-w-7xl w-full  flex justify-between mx-4 items-center">
            <img  width="150px" height="auto" className=" flex align-middle" src={logo} style={{  verticalAlign:"middle", backgroundRepeat: "no-repeat"}}alt="logo"/>
            <span className="  flex-row space-x-6 items-center hidden md:flex">
                <ul className="flex  flex-row space-x-8 font-normal items-center text-lg">
                    <li className="hover:text-[#229A16]"><button >{translate("navbar.features")}</button></li>
                    <li className="hover:text-[#229A16]"><button>{translate("navbar.pricing")}</button></li>
                    <li className="hover:text-[#229A16]"><button>{translate("navbar.signIn")}</button></li>
                    <li className="hover:text-[#229A16]"><button onClick={()=>{onChangeLang(translate("navbar.language").toLocaleLowerCase())}}>{translate("navbar.language")}</button></li>
                </ul>
                <button className="h-12 rounded-md text-white font-semibold hover:translate-x-1 duration-200" style={{background:"linear-gradient(to top,#54a832,#a1b81c)", padding:"13px 25px"}}>
                    {translate("components.getQuote")}
                </button>
            </span>
            
        </div>
    </div>)
}

export default Navbar;