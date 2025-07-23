import SideNav, { Props as SideNavProps } from  "../components/ui/SideNav.tsx";
import CardEvent, { Props as EventProps } from  "../components/ui/CardEvent.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  events?: EventProps[];
  labels?: {
    online?: string,
    presencial?: string,
  }
}

export default function EventosParticipacao({
  sidebarNav,
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
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12 text-neutral-950">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto"> 
        <div className="flex flex-col space-y-6 md:space-y-2">
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
      </div>
    </div>
  );
}
