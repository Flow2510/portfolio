import Hero from "../components/hero/hero";
import Slider from "../components/slider/slider";

export default function Home({ works }) {
    return(
        <main>
            <Hero />
            <Slider
                works={works}
            />
        </main>
    )
}