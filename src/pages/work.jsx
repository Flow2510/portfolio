import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import Project from "../components/project/project";

export default function Work({ works }) {
    const location = useLocation();

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
                    id={work.id}
                    key={work.name + index}
                    title= {work.name}
                    text={work.text}
                    tags={work.tags}
                    image={work.image}
                />
            ))}
        </main>
    )
}