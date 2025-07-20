import Title from  "../components/ui/Title.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";

export interface Nav {
  title?: string;
  description?: string;
  projects?: {
    label: string;
    description: string;
    url: string;
  }[];
  button?: {
    label: string;
    url: string;
  }
}

export default function HomeProjetos({
  title = "Projetos",
  description = "Conheça nossa atuação através dos nossos projetos",
  projects = [
    {
      label: "Fórum RIDGE 2025",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      url: "/"
    },
    {
      label: "III Workshop sobre Justiça Criminal e Crime Organizado",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      url: "/"
    },
    {
      label: "I Reunião Técnica do FONACRIAD",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      url: "/"
    },
  ],
  button = { label: "Ver mais projetos", url: "/" },
}: Nav) {
  return (
    <div className="mx-16 py-16 flex flex-col space-y-10 mb-16 text-white rounded-se-3xl rounded-es-3xl bg-[url(https://assets.decocache.com/novo-leme/aa01eb61-8e76-4691-85bd-da34db62d246/bg1.svg)]">
      <div className="px-32">
          <Title label={title} description={description} />
      </div>

      <div className="flex flex-col flex-auto space-y-16 items-center px-32">
        <div className="flex space-x-12">
          {projects?.map((project) => (
            <a
              key={project.label}
              href={project.url}
              className="block px-3 rounded-xl bg-white text-primary"
            >
              <div className="flex space-x-5 px-8 py-5">
                <div className="flex flex-col space-y-1 justify-center">
                  <h3 className="text-xl">{project.label}</h3>
                  <p className="line-clamp-2">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div class="flex px-6">
          <FancyLink label={button?.label} url={button?.url} iconRight/>
        </div>
      </div>
    </div>
  );
}
