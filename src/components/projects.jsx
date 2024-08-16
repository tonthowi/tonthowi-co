import Magnetic from "../lib/magnetic"

const Projects = ({ works }) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-5xl">
        <h2 className="text-3xl font-bold text-white">Check out my work</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative bg-black border border-white/15 overflow-hidden rounded-lg"
            >
              <a href={work.href} target={work.target}>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden">
                  <Magnetic>
                    <div className="opacity-0 invisible transition-opacity duration-300 z-50 group-hover:opacity-100 group-hover:visible font-Display tracking-wider">
                      <button className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                        View
                      </button>
                    </div>
                  </Magnetic>
                  {work.imageSrc.endsWith(".mp4") ? (
                    <video
                      src={work.imageSrc}
                      alt={work.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-110 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      alt={work.imageAlt}
                      src={work.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {work.name}
                    </h3>
                    <p className="text-xs text-white/70">{work.year}</p>
                    <p className="text-sm text-white/70 mt-6">
                      {work.description}
                    </p>
                    <div className="flex flex-auto flex-row space-x-1">
                      {work.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="inline-flex items-center rounded-sm px-2 py-1 mt-6 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/30"
                        >
                          {tag.label}
                        </span>
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
  );
};

export default Projects;