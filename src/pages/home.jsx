import { useState } from "react";
import Hero from "../components/hero/hero";
import Slider from "../components/slider/slider";
import ContactModal from "../components/contactmodal/contactmodal";

export default function Home({ works }) {
    const [openModal, setOpenModal] = useState(false);

    return(
        <main>
            <Hero 
                setOpenModal={setOpenModal}
            />
            <Slider
                works={works}
            />
            {openModal &&
                <ContactModal 
                    setOpenModal={setOpenModal}
                />
            }
        </main>
    )
}