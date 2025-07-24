import Title from  "../../components/ui/Title.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";
import CardEvent, { Props as EventProps } from  "../../components/ui/CardEvent.tsx";

export interface Nav {
  title?: string;
  description?: string;
  events?: EventProps[];
  labels?: {
    online?: string,
    presencial?: string,
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
      date: "2025-11-12",
      online: false,
      url: "/"
    },
    {
      label: "III Workshop sobre Justiça Criminal e Crime Organizado",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      date: "2025-04-04",
      online: true,
      url: "/"
    },
    {
      label: "I Reunião Técnica do FONACRIAD",
      description: "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
      date: "2025-03-01",
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
    <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row space-y-8 md:space-x-12 mb-16">
      <div className="flex-none md:w-60">
        <Title label={title} description={description} serif />
      </div>
      <div className="flex flex-col flex-auto space-y-5">
        <div className="flex flex-col space-y-7 md:space-y-2 md:mr-40">
          {events?.map((event) => (
            <CardEvent
              label={event.label}
              description={event.description}
              date={event.date}
              online={event.online}
              url={event.url}
              labels={labels}
            />
          ))}
        </div>
        <div class="flex md:px-6">
          <FancyLink label={button?.label} url={button?.url} iconRight/>
        </div>
      </div>
    </div>
  );
}
