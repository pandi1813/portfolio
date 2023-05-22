import './about.css';

export default function AboutPage() {
    return (
        <>
            <div id="grid" >

                <h1 id='about-header' >Welcome to my portfolio</h1>
                <p id='p1' >
                    <span className='p-start'> I'm Andrea but most people call me Andi.</span>  I'm a front-end developer who's passionate about building cool and functional web apps. I love coding and figuring out how to solve complex problems, and I'm always eager to learn new skills and techniques.
                </p>
                <h2 id='about-subheader'>My skills</h2>
                <p id='p2'>
                    <span className='p-start'>I started coding</span>  when I decided I wanted to learn a new skill. I did a bit of research and came across freeCodeCamp and began their Responsive Web Design certificate, which introduced me to the basics of HTML and CSS. Once I completed that, I was hooked and knew I wanted to keep learning. I enrolled in the Front-End Web Development Boot Camp from Trilogy Education, where I recently graduated with a strong foundation in front-end web development.</p>

                <ul className='flex flex-wrap justify-center '>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">HTML</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">CSS</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">JavaScript</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">ES6</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">React</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Node.js</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">NPM</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Git</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">GitHub</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Figma</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Photoshop</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">jQuery</li>
                    <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">APIs</li>
                </ul>
                <p id='p3'>
                    <span className='p-start'> When I'm not coding,</span> I love to explore my other passions. I'm always drawing and painting and trying to get better at it. It's a great way for me to unwind and let my creativity flow. (I started posting some of my art on my <a href='https://www.instagram.com/_p_andi_/'>Instagram</a> if you are interested)  I'm also a big fan of playing guitar and learning new songs - music has always been a huge part of my life. And when I'm not inside making art or music, you can find me outside exploring nature and going on hikes. I'm also super into science and love reading up on the latest discoveries and breakthroughs
                </p>
            </div>
        </>
    )
}