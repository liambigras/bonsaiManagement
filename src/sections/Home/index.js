import handleViewport from 'react-in-viewport';
import useLocales from "../../hooks/useLocales"; 
import useWindowSize from '../../hooks/useWindowSize';
import Navbar from "../../components/Navbar";


const Block = (props) => {
    const {translate} = useLocales();
    const { inViewport, forwardedRef } = props;
    const size  = useWindowSize();
    const opacity = inViewport ? 1 : 0;
	const position = inViewport ? 100 : 0;
   
    return (
        <div className='flex justify-center pt-48' ref={forwardedRef}>
        <div className="max-w-7xl w-full mx-4 grid sm:grid-cols-1 md:grid-cols-3  duration-700" style={{ opacity: opacity, transform: `translateX(${size && size.width > 800 ? position : 0}px)` }}>
            <h1 className='text-4xl lg:text-6xl font-bold leading-tight md:col-span-2' >{translate("homepage.title")}</h1>
            <span />
            <p className='text-zinc-500 py-10 text-2xl md:col-span-2 max-w-3xl' s>{translate("homepage.description")}</p>
            <span />
            <button className="h-12 w-auto rounded-md text-white font-semibold w-auto lg:w-2/3 hover:translate-x-1 duration-150" style={{background:"linear-gradient(to top,#54a832,#a1b81c)", padding:"13px 10px", opacity: opacity, }}>
                {translate("components.getQuote")}
            </button>            
        </div>
    </div>
    );
}
const ViewportBlock = handleViewport(Block);

const Home = () => {
    
    return (
    <div className='relative w-full h-[100vh] bg-center bg-cover font-poppins ' style={{backgroundImage:"url(/bonsaiManagement/ressources/bgbanner.jpg)"}}>
        
        <Navbar />
        <ViewportBlock  />
        
    </div>)
}

export default Home;