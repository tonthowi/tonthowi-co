import Projects from "./components/projects"
const ProjectsContent = () => {
    const works = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: '/giphy.webp',
          imageAlt: "Front of men's Basic Tee in black.",
          year: '2021 - 2024',
          description: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
          tags: [
            { id: 'ux-design', label: 'UX Design' },
            { id: 'rebranding', label: 'Rebranding' }           
          ]
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: '/giphy.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            year: '2021 - 2024',
            description: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
            tags: [
                { id: 'ux-design', label: 'UX Design' },
                { id: 'rebranding', label: 'Rebranding' }           
              ]
          },
          {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: '/giphy.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            year: '2021 - 2024',
            description: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
            tags: [
                { id: 'ux-design', label: 'UX Design' },
                { id: 'rebranding', label: 'Rebranding' }           
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