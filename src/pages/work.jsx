import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Project from "../components/project/project";
import ProjectInfoBar from "../components/projectinfobar/projectinfobar";

export default function Work({ works }) {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: "smooth" })
        }
    })

    return(
        <main>
            {works.map((work, index) => (
                <Project
                    link={work.link}
                    color={work.color}
                    counter={index + 1}
                    date={work.year}
                    id={work.id}
                    key={work.name + index}
                    title= {work.name}
                    text={work.text}
                    tags={work.tags}
                    image={work.image}
                />
            ))}
            <ProjectInfoBar 
                works={works}
                image={works[currentIndex].image}
                title={works[currentIndex].name}
                date={works[currentIndex].year}
                color={works[currentIndex].color}
                link={works[currentIndex].link}
            />
        </main>
    )
}