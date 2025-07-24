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

export default function HomeEventsEN({
  title = "Events",
  description = "Follow Leme's participation in events",
  events = [
    {
      label: "RIDGE Forum 2025",
      description: "The RIDGE Forum was held in May 2025, in Lima (Peru), organized by the Red de Investigación en Desarrollo Económico (RIDGE). The event brought together international researchers and authorities to discuss advances and challenges in central themes of development economics, such as inequality, public policies, international finance and sustainable economic growth.",
      date: { day: "12", month: "nov", year: "2025" },
      online: false,
      url: "/"
    },
    {
      label: "III Workshop on Criminal Justice and Organized Crime",
      description: "The RIDGE Forum was held in May 2025, in Lima (Peru), organized by the Red de Investigación en Desarrollo Económico (RIDGE). The event brought together international researchers and authorities to discuss advances and challenges in central themes of development economics, such as inequality, public policies, international finance and sustainable economic growth.",
      date: { day: "4", month: "nov", year: "2025" },
      online: true,
      url: "/"
    },
    {
      label: "I FONACRIAD Technical Meeting",
      description: "The RIDGE Forum was held in May 2025, in Lima (Peru), organized by the Red de Investigación en Desarrollo Económico (RIDGE). The event brought together international researchers and authorities to discuss advances and challenges in central themes of development economics, such as inequality, public policies, international finance and sustainable economic growth.",
      date: { day: "31", month: "nov", year: "2025" },
      online: false,
      url: "/"
    },
  ],
  labels = {
    online: "Online",
    presencial: "In-person",
  },
  button = { label: "See all events", url: "/" },
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