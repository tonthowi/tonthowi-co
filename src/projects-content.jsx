import Projects from "./components/projects"
const ProjectsContent = () => {
    const works = [
          {
            id: 1,
            name: 'Perfeqt App',
            href: 'https://www.perfeqt.co',
            target: '_blank',
            imageSrc: '/banner-video-revamp-mobile.mp4',
            imageAlt: "Thumbnail of Perfeqt app video preview",
            year: '2021 - 2024',
            description: "Designed an at-home wellness app with a personalized lifestyle plan, food recommendations, and customized supplements.",
            tags: [
                { id: 'ux-research', label: 'UX Research' },
                { id: 'ui-design', label: 'UI Design' },
                { id: 'animation', label: 'Animation' },
                { id: 'rebranding', label: 'Visual Branding' }           
              ]
          },
      ]

    return (
        <>
        <Projects works={works} />
        </>
    )
}

export default ProjectsContent