

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
        <div className={`city-box ${backGround} flex flex-col gap-3 items-center justify-center lg:grid lg:grid-cols-2 sm:grid-cols-2 lg:gap-5 sm:gap-2 rounded-xl py-3 px-6`}>
            {/* city , degree */}
            <div className="space-y-6">
                <h2 className="text-3xl">{cityData.temp}</h2>
                <p>{cityData.city}</p>
            </div>

            {/* weather status icon */}
            <div className="scale-125 flex items-center justify-center">{cityData.weatherIcon}</div>
        </div>
    )
}

export default CityBox;