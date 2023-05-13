export default function ProjectCard(props) {
    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={props.image} alt={props.projectName}/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{props.projectName}</div>
                        <p class="text-gray-700 text-base">
                           {props.descriptionShort}
                        </p>
                    </div>
                    <div className="flex justify-evenly">
                        <a href={props.github}  target="_blank" rel="noreferrer">GitHub</a>
                        <a href={props.liveLink}  target="_blank" rel="noreferrer">Live App</a>

                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tech1}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tech2}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tech3}</span>
                    </div>
            </div>
        </>
    )
}