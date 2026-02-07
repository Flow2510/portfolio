import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import Project from "../components/project/project";
import Counter from "../components/counter/counter";

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
            <Counter />
            {works.map((work, index) => (
                <Project 
                    id={work.id}
                    key={work.name + index}
                    title= {work.name}
                    text={work.text}
                    background={work.color}
                    tags={work.tags}
                    image={work.image}
                />
            ))}
        </main>
    )
}