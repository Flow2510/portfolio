import AboutNav from "../components/aboutnav/aboutnav";
import Info from "../components/infohero/infohero";

export default function About() {
    return(
        <main>
            <Info />
            <AboutNav />
            <section style={{ background: "#0a0a0a", height: '100vh', width: '100%', position: 'relative'}}>

            </section>
        </main>
    )
}