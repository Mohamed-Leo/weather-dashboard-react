

interface IOtherCityBoxProps {
    backGround? : string;
    cityData : {
        city: string;
        temp: string;
        weatherIcon: JSX.Element;
    }
}



function CityBox({backGround = '' , cityData} : IOtherCityBoxProps) {
    return (
        <div className={`${backGround} relative rounded-xl py-3 px-6`}>
            {/* city , degree */}
            <div className="space-y-3">
                <h2 className="text-3xl">{cityData.temp}</h2>
                <p>{cityData.city}</p>
            </div>

            {/* weather status icon */}
            <div className="absolute right-2 bottom-[-10px]">{cityData.weatherIcon}</div>
        </div>
    )
}

export default CityBox;