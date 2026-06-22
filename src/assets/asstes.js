import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Django', 'Next.js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    },
    {
        icon: FaDesktop,
        title: 'Graphics Designing',
        technologies: ['Canva', 'Figma', 'Photoshop', 'Illustrator']
    },
    {
        icon: FaCode ,
        title: 'DevOps',
        technologies: ['Linux', 'Git', 'Github',]
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Android', 'Flutter', 'Java']
    },
]



export const projectData = [
  {
    title: 'MiniStoreBackOffice',
    description: 'Immersive shopping experience with C#',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRxNL_-lZnZYrb4IN9CEHjwfsp5X28qUTor2UJ9vwQg&s=10',
    tech: ['C#', 'Sql']
},
    {
        title: 'Electronic Store',
        description: 'An online retail platform for purchasing the latest computers, smartphones, and tech accessories.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENj82NWue4l6mmCJBm-OsJ07il2NW_sdWTh78utO4EA&s=10',
        tech: ['C#', 'sql']
    },
    {
        title: 'Virtual Keyboard',
        description: "A fully functional digital keyboard interface for touchscreens and mouse-based typing.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJi9Gnm-gEwC7u4r6qEiwgae_PZQij50ctoMJtvS_XhA&s=10',
        tech: ['Python', 'OpenCv']
    },
    {
        title: 'Eat-n-Split',
        description: "Split restaurant bills and shared expenses fairly with friends in seconds.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkVLy1aTkmBb2uc73-LlAGMMjozj1dvDnV71q7kTI7g&s=10',
        tech: ['React', 'Bootstrap', 'Javascript']
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['Python', 'Django', 'Bootstrap', 'React', 'Tailwindcss']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['BS in Computer Science']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built more than 5+']
    },
]