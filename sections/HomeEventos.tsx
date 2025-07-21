import Title from  "../components/ui/Title.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";
import Tag from  "../components/ui/Tag.tsx";

export interface Nav {
  title?: string;
  description?: string;
  events?: {
    label: string;
    description: string;
    date?: {
        day: string;
        month: string;
        year: string;
    },
    online?: boolean;
    url: string;
  }[];
  labels: {
    online: string,
    presencial: string,
  }
  button?: {
    label: string;
    url: string;
  }
}

export default function HomeEventos({
  title = "Eventos",
  description = "Acompanhe a participação do Leme em eventos",
  events = [
    {
      label: "Fórum RIDGE 2025",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      date: { day: "12", month: "nov", year: "2025" },
      online: false,
      url: "/"
    },
    {
      label: "III Workshop sobre Justiça Criminal e Crime Organizado",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      date: { day: "4", month: "nov", year: "2025" },
      online: true,
      url: "/"
    },
    {
      label: "I Reunião Técnica do FONACRIAD",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      date: { day: "31", month: "nov", year: "2025" },
      online: false,
      url: "/"
    },
  ],
  labels = {
    online: "Online",
    presencial: "Presencial",
  },
  button = { label: "Ver todos os eventos", url: "/" },
}: Nav) {
  return (
    <div className="container mx-auto px-16 flex space-x-12 mb-16">
      <div className="flex-none w-60">
        <Title label={title} description={description} serif />
      </div>

      <div className="flex flex-col flex-auto space-y-5">
        <div className="flex flex-col space-y-2 mr-40">
          {events?.map((event) => (
            <a
              key={event.label}
              href={event.url}
              className="group block px-3 hover:px-0 transition-[padding]"
            >
              <div className="flex space-x-5 px-8 py-5 hover:bg-white rounded-xl">
                <div className="p-2 w-48 bg-secondary rounded-lg text-white flex flex-col justify-center">
                  <span className="leading-none flex justify-center font-serif text-4xl">{event.date?.day}</span>
                  <span className="text-xs flex justify-center">{event.date?.month}</span>
                  <span className="text-xs flex justify-center">{event.date?.year}</span>
                </div>
                <div className="flex flex-col gap-1 justify-center text-neutral-950">
                  <div className="flex gap-5">
                    <h3 className="line-clamp-1 text-xl group-hover:text-secondary">{event.label}</h3>
                    <Tag label={event.online ? labels.online : labels.presencial}/>
                  </div>
                  <p className="line-clamp-2">{event.description}</p>
                </div>
                <div class="flex items-center text-secondary">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7803 16.7803C17.4874 17.0732 17.0127 17.0732 16.7198 16.7803C16.4269 16.4874 16.4269 16.0127 16.7198 15.7198L19.1895 13.2501L3.00006 13.2501C2.58584 13.2501 2.25006 12.9143 2.25006 12.5001C2.25006 12.0858 2.58584 11.7501 3.00006 11.7501L19.1895 11.7501L16.7198 9.28033L16.668 9.22369C16.4277 8.92911 16.4452 8.49439 16.7198 8.21978C16.9944 7.94518 17.4291 7.92772 17.7237 8.16802L17.7803 8.21978L21.5303 11.9698C21.8232 12.2627 21.8232 12.7374 21.5303 13.0303L17.7803 16.7803Z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div class="flex px-6">
          <FancyLink label={button?.label} url={button?.url} iconRight={true}/>
        </div>
      </div>
    </div>
  );
}
