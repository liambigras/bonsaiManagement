import handleViewport from 'react-in-viewport';
import useLocales from '../../hooks/useLocales';
import useWindowSize from '../../hooks/useWindowSize';
import CommunicationsImg from '../../commmon/images/communications.svg';


const Title = (props) => {
    const {translate} = useLocales();
    const { inViewport, forwardedRef } = props;
    const size  = useWindowSize();
    const opacity = inViewport ? 1 : 0;
	const position = inViewport ? 0 : 100;
   
    return (
        <div ref={forwardedRef} className="max-w-7xl w-full py-20 mx-4 flex transition-all duration-700" style={{ opacity: opacity, transform: `translateX(${size && size.width > 800 ? position-120 : 0}px)` }}>
                    <h1 className="font-bold text-5xl flex  w-full justify-center">{translate("navbar.features")}</h1>
                </div>
    );
}

const CommunicationHeader = (props) => {
    const {translate} = useLocales();
    const { inViewport, forwardedRef } = props;
    const size  = useWindowSize();
    const opacity = inViewport ? 1 : 0;
	const position = inViewport ? 0 : 100;
   
    return (
        <div ref={forwardedRef} className='ml-10 col-span-3 transition-all duration-700' style={{ opacity: opacity, transform: `translateX(${size && size.width > 800 ? position : 0}px)` }}>
                        <h2 className='tracking-wide  text-[17px] font-semibold text-[#54a832]'>{translate("sections.communications").toLocaleUpperCase()}</h2>
                        <h1 className='font-bold text-[28px] md:text-[34px] leading-11 pt-5'>{translate("communication.description")}</h1>
        </div>
    );
}

const ViewportTitle = handleViewport(Title);
const ViewPortCommunicationHeader = handleViewport(CommunicationHeader);

const Features = () => {
    const { translate } = useLocales();
    return (
        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-1 pt-20'>
            
                <ViewportTitle />
              
    
        
                <div className="grid max-w-7xl grid-cols-1 md:grid-cols-5 ">
                    <div className="col-span-2">
                    <img alt="Communications" src={CommunicationsImg} width="500px" height="auto"/>
                    </div>
                    
                   <ViewPortCommunicationHeader />
                </div>
            </div>
        

        </div>
        
        
    )
}

export default Features;