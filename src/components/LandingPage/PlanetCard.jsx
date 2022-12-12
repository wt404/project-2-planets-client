
const PlanetCard = ({ planet }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="img-fluid" src={planet.imgSrc[0].img} alt={planet.name} />
                    </div>
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                        <h5>{planet.name}</h5>
                        <p>{planet.imgSrc[0].imgDescription}</p>
                        <button type="button">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard