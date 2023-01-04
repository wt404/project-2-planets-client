import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const TeamCard = () => {
return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  "><br />
                    <div className="card position-relative" style={{ width: "15rem;" }} >
                        <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="position-absolute img-fluid top-0 start-50 translate-middle mb-5  d-block" alt="person" style={{ height: "50%", float: "auto" }} />
                        <div className="card-body mt-5 pt-5   text-center ">
                            <h5 className="text-black">Angela Mae Morales</h5>
                            <p className="text-black">Web Developer</p>
                            <li className="text-black list-unstyled">
                                <FontAwesomeIcon className="m-1" icon={brands('facebook')} />
                                <FontAwesomeIcon className="m-1" icon={brands('linkedin')} />
                                <FontAwesomeIcon className="m-1" icon={brands('twitter')} />
                            </li>
                            <button className="bg-black text-white btn rounded-pill m-2">FOLLOW</button>
                            <button className="border-dark text-black btn rounded-pill">HIRE ME</button>
                        </div>
                    </div><br /><br /><br /><br />
                </div>
                <div className="col-md-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  "><br />
                    <div className="card position-relative" style={{ width: "15rem;" }} >
                        <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="position-absolute img-fluid top-0 start-50 translate-middle mb-5  d-block" alt="person" style={{ height: "50%", float: "auto" }} />
                        <div className="card-body mt-5 pt-5  text-center ">
                            <h5 className="text-black">Jomar Clado</h5>
                            <p className="text-black">Web Developer</p>
                            <li className="text-black list-unstyled">
                                <FontAwesomeIcon className="m-1" icon={brands('facebook')} />
                                <FontAwesomeIcon className="m-1" icon={brands('linkedin')} />
                                <FontAwesomeIcon className="m-1" icon={brands('twitter')} />
                            </li>
                            <button className="bg-black text-white btn rounded-pill m-2">FOLLOW</button>
                            <button className="border-dark text-black btn rounded-pill">HIRE ME</button>
                        </div>
                    </div><br /><br /><br /><br />
                </div>
                <div className="col-md-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  "><br />
                    <div className="card position-relative" style={{ width: "15rem;" }} >
                        <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="position-absolute img-fluid top-0 start-50 translate-middle mb-5  d-block" alt="person" style={{ height: "50%", float: "auto" }} />
                        <div className="card-body mt-5 pt-5  text-center ">
                            <h5 className="text-black">Jason Lerit</h5>
                            <p className="text-black">Web Developer</p>
                            <li className="text-black list-unstyled">
                                <FontAwesomeIcon className="m-1" icon={brands('facebook')} />
                                <FontAwesomeIcon className="m-1" icon={brands('linkedin')} />
                                <FontAwesomeIcon className="m-1" icon={brands('twitter')} />
                            </li>
                            <button className="bg-black text-white btn rounded-pill m-2">FOLLOW</button>
                            <button className="border-dark text-black btn rounded-pill">HIRE ME</button>
                        </div>
                    </div><br /><br /><br /><br />
                </div>
                <div className="col-md-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  "><br />
                    <div className="card position-relative" style={{ width: "15rem;" }} >
                        <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="position-absolute img-fluid top-0 start-50 translate-middle mb-5  d-block" alt="person" style={{ height: "50%", float: "auto" }} />
                        <div className="card-body mt-5 pt-5  text-center ">
                            <h5 className="text-black">Alan Demol</h5>
                            <p className="text-black">Web Developer</p>
                            <li className="text-black list-unstyled">
                                <FontAwesomeIcon className="m-1" icon={brands('facebook')} />
                                <FontAwesomeIcon className="m-1" icon={brands('linkedin')} />
                                <FontAwesomeIcon className="m-1" icon={brands('twitter')} />
                            </li>
                            <button className="bg-black text-white btn rounded-pill m-2">FOLLOW</button>
                            <button className="border-dark text-black btn rounded-pill">HIRE ME</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}


export default TeamCard