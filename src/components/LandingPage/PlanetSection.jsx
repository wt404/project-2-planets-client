
import { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard'
import SectionHeading from './SectionHeading'

const PlanetSection = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets()
    }, [])

    const getPlanets = async() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4dd6b9fd10mshec2b10eff154adap1f7fb2jsn9c8b9815b2ac',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
        };

        const result = await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options);
        let response = await result.json()
        response = response.slice(2)
        response.reverse()
        setPlanets(response)
    }

    return (
        <div className="container">
            <SectionHeading name="The Planets" />
            <div className="row">
                {
                    planets.map((planet, index) => <PlanetCard key={index} planet={planet} />)
                }
            </div>
        </div>
    )
}

export default PlanetSection