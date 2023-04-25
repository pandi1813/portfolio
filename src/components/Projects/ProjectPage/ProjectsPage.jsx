import ProjectCard from "../ProjectCard/ProjectCard"

export default function ProjectsPage(params) {
    let projectDetails = require('../ProjectDescription.json')
    return (
        <>
        <h1>Projects</h1>
        <div className="flex justify-evenly mx-10">

        {projectDetails.map(projectDetail => <ProjectCard {...projectDetail}/>)}
        </div>
        
        </>
    )
}