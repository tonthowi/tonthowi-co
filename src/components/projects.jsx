import Magnetic from "../lib/magnetic"

const Projects = ({works}) =>{

    return (
      <div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-5xl">
          <h2 className="text-3xl font-bold text-white">Check out my work</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {works.map((work) => (
              <div key={work.id} className="group relative bg-black border border-white/15 overflow-hidden rounded-lg">
                  <a href={work.href}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none  lg:h-80">
                      <Magnetic>
                        <div className="magnetic-wrapper font-Display tracking-wider">
                          <button className="magnetic-button">View</button>
                        </div>
                      </Magnetic>
                      <img
                        alt={work.imageAlt}
                        src={work.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                                    <div className="flex justify-between">
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-lg font-semibold text-white">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {work.name}
                        </h3>
                      <p className="text-xs text-white/70">{work.year}</p>
                      <p className="text-sm text-white/70">{work.description}</p>
                      <div className="flex flex-auto flex-row space-x-1">
                          {work.tags.map((tag) => (
                          <span key={tag.id} className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">{tag.label}</span>
                          ))}
                      </div>
                    </div>
                    </div>
                  </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default Projects