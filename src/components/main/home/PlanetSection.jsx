import { useEffect, useState } from "react";
import RedirectButton from "../RedirectButton";
import PlanetCard from "./PlanetCard";
import SectionHeading from "../SectionHeading";
import * as RestApi from "../../../utils/rest_api_util"

const PlanetSection = () => {

  const [loading, setLoading] = useState(false)
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    setLoading(true)
    try {
      const result = await RestApi.getPlanets()
      let response = await result.json();
      response = response.slice(0, 6);
      setPlanets(response);
    } catch (error) {}
    setLoading(false)
  };

  return (
    <div id="planets" className="planet__section container py-5">
      <SectionHeading classname="planets" name="THE PLANETS" />
      {
        loading
          ? (
            <div className='loader text-center'>
              <div className="ring"></div>
              <span>LOADING...</span>
            </div>
          )
          : (
            <>
              <div className="row pt-5">
                {
                  planets.map((planet, index) => <PlanetCard key={index} planet={planet} />)
                }
              </div>
              <div className="text-center">
                <RedirectButton name="Explore More" to="/planets" />
              </div>
            </>
          )
      }
    </div>
  );
};

export default PlanetSection;
