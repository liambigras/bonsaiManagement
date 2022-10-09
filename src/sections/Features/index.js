import handleViewport from 'react-in-viewport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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
                    <h1 className="font-bold text-5xl flex  w-full justify-center" >{translate("navbar.features")}</h1>
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
        <div ref={forwardedRef} className='lg:ml-10 col-span-3 transition-all duration-700 mt-4 md:mt-0 ' style={{ opacity: opacity, transform: `translateX(${size && size.width > 800 ? position : 0}px)` }}>
                        <h2 className='tracking-wide  text-[17px] font-semibold text-[#54a832]  '>{translate("sections.communications").toLocaleUpperCase()}</h2>
                        <h1 className='font-bold text-[28px] md:text-[34px] leading-11 pt-5 '>{translate("communication.description")}</h1><br/>
                            <ul className=''>
                                <div className='flex flex-row '><FontAwesomeIcon icon={faCheck} size="lg" color="green"  /><li className='ml-1 text-[20px] leading-6 tracking-wide text-zinc-800'>{translate("communication.point1")}</li></div><br/>
                                <div className='flex flex-row  '><FontAwesomeIcon icon={faCheck} size="lg" color="green"  /><li className='ml-1 text-[20px] leading-6 tracking-wide text-zinc-800'>{translate("communication.point2")}</li></div><br/>
                                <div className='flex flex-row  '><FontAwesomeIcon icon={faCheck} size="lg" color="green"  /><li className='ml-1 text-[20px] leading-6 tracking-wide text-zinc-800'>{translate("communication.point3")}</li></div><br/>
                            </ul>
        </div>
    );
}

//const CheckMarkOne = (props)

const ViewportTitle = handleViewport(Title);
const ViewPortCommunicationHeader = handleViewport(CommunicationHeader);

const Features = () => {
   // const { translate } = useLocales();
    return (
        <div className='w-full flex justify-center overflow-x-hidden'>
            <div className='grid grid-cols-1 pt-20 '>
            
                <ViewportTitle />
              
    
        
                <div className="grid max-w-7xl grid-cols-1 md:grid-cols-5 mx-2 xl:mx-0 "   >
                    <div className="md:col-span-2 ">
                    <img alt="Communications" src={CommunicationsImg} width="500px" height="auto"/>
                    </div>
                    
                   <ViewPortCommunicationHeader />
                  
                </div>
            </div>
        

        </div>
        
        
    )
}

export default Features;