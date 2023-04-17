import ProjectCard from "../ProjectCard/ProjectCard"

export default function ProjectsPage(params) {
    return (
        <>
        <h1>Projects</h1>
        <div className="flex justify-evenly mx-10">

        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
        
        </>
    )
}