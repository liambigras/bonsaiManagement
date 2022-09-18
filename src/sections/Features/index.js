import useLocales from '../../hooks/useLocales';

const Features = () => {
    const { translate } = useLocales();
    return (
        <div className='flex justify-center pt-20'>
            <div className="max-w-7xl w-full py-20 mx-4 flex">
                <h1 className="font-bold text-5xl flex  w-full justify-center">{translate("navbar.features")}</h1>
            </div>
        </div>
        
    )
}

export default Features;