import React from "react";
import { Link } from "react-router-dom";
import ImagePrincipal from '../../assets/img/Caballo1.jpg'
import ImageSecundaria from '../../assets/img/Caballo2.jpg'
import ImageProvisoria1 from '../../assets/img/ciervo1.jpg'
import ImageProvisoria2 from '../../assets/img/paisaje1.jpg'
import ImageProvisoria3 from '../../assets/img/paisaje2.jpg'
import IconGoTo from '../../assets/icons/gotoIcon.png'
import Carousel from "../../components/Carrusel/Carousel";

const Home = () => {
  return (
    <main>
      <Carousel images={[ImageProvisoria1, ImageProvisoria2, ImageProvisoria3]} />
      <section>
        <div className="flex justify-center text-5xl my-3">
            <b>Our Next </b><b className="text-primary">Tours</b>
        </div>
        <div className=" flex justify-center text-gray-600 my-6">
            <p>Explore our top destinations vote by more than +100.000 costumers around the world</p>
        </div>
        <div className="my-3">
            <Link className=" flex justify-center  items-center text-2xl">
                <b>All Tours</b>
                <i> <img src={IconGoTo} alt="Icon Go to " className="h-12" /></i>
            </Link>
        </div>

        <div className="flex justify-center items-center h-96">
            CARD SECTION 
        </div>
        </section>
        <section>
            <div className="flex flex-col">
                <div className="flex justify-center items-center">
                    <p>Some of</p>
                </div>
                <div className="flex justify-center items-center text-4xl">
                    <b className=" mx-4">OUR</b><b className="text-primary mx-2">PROPOUSALS</b>
                </div>
                <div className="flex justify-center items-center h-96">
                CARD SECTION 
                </div>
                <div className="my-3">
                    <Link className=" flex justify-center  items-center text-2xl">
                        <b>All Tours</b>
                        <i> <img src={IconGoTo} alt="Icon Go to " className="h-12" /></i>
                    </Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home;
