export default function ProjectCard(props) {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
                <div>

                    <img className="w-full" src={props.image} alt={props.projectName} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{props.projectName}</div>
                        <p className="text-gray-700 text-base">
                            {props.descriptionShort}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-evenly">
                        <a href={props.github} target="_blank" rel="noreferrer" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">GitHub</a>
                        <a href={props.liveLink} target="_blank" rel="noreferrer" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Live App</a>

                    </div>
                    <div className="px-6 pt-4 pb-2  bottom-0">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tech1}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tech2}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tech3}</span>
                    </div>
                </div>
            </div>
        </>
    )
}