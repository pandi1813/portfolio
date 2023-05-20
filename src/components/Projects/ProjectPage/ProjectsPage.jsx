import ProjectCard from "../ProjectCard/ProjectCard"
import './project-page.css'

export default function ProjectsPage(params) {
    let projectDetails = require('../ProjectDescription.json')
    return (
        <>
        <h1 id="project-title">Projects</h1>
        <p id="project-subtitle">Some of my favorite projects for the Front-End Web Dev bootcamp including individual and group projects. These are still work in progress, I've got a few ideas I'm working on.</p>
        <div id="card-container" className="flex justify-evenly mx-10">

        {projectDetails.map(projectDetail => <ProjectCard {...projectDetail}/>)}
        </div>
     
        </>
    )
}