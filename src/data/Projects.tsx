import Project from '../models/Project'
import photoViewer from '../assets/photo-viewer.png'
import busboard from '../assets/busboard.png'
import marsMission from '../assets/mars-mission.png'

const projects: Project[] = [
  {
    name: "Photo Viewer",
    description: <>A React photo viewer application using images from Lorem Picsum. I learnt about React props and hooks such as useState and useEffect.</>,
    imageUrl: photoViewer,
  },
  {
    name: "Busboard",
    description: <>A React + TypeScript bus times application using the TfL API. I learnt about making web requests using fetch and about using postman to test API requests.</>,
    imageUrl: busboard,
  },
  {
    name: "Mars Mission",
    description: "I worked as part of a team to create a React + TypeScript application designed to get young people interested in space. We used various Nasa APIs. I learnt about collaboration using Git and task management using Trello.",
    imageUrl: marsMission,
    link: "https://techswitch-learners.github.io/mars-mission-2023-aug/",
  }
]

export default projects