import { PartlyCloudy } from "./WeatherIcons";
import CityBox from "./CityBox";

const cities = [
    {city : 'USA' , temp : '14°' , weatherIcon : <PartlyCloudy width={85} height={85}/>},
    {city : 'Dubai - UAE' , temp : '27°' , weatherIcon : <PartlyCloudy width={85} height={85}/>},
    {city : 'Canada' , temp : '26°' , weatherIcon : <PartlyCloudy width={85} height={85}/>},
    {city : 'China Nuevo' , temp : '16°' , weatherIcon : <PartlyCloudy width={85} height={85}/>},
];

function OtherCitiesListBoxes() {
    return (
        <>
            {
                cities.map((city , i) => (
                    <CityBox key={i} backGround={"bg-[#0e1421]"} cityData = {city}/>
                ))
            }
        </>
    )
}

export default OtherCitiesListBoxes;