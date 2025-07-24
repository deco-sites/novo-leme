import Title from  "../../components/ui/Title.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";
import NewsProps from  "../../components/NewsProps.tsx";
import Card from  "../../components/ui/Card.tsx";


export interface Props {
  title?: string;
  description?: string;
  news?: NewsProps[];
  button?: {
    label: string;
    url: string;
  }
}

export default function HomeMediaEN({
  title = "In the Media",
  description = "Reports about Leme in major media outlets",
  news = [
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Project",
      },
      label: "Predictive algorithm for domestic violence revictimization risk",
      description: "This project, initiated in 2024 and carried out in partnership with the Public Security Secretariat of Paraná (SESP-PR) and the Inter-American Development Bank (IDB), aims to develop a predictive model and prediction algorithm to assess the risk of revictimization of women in domestic violence cases in Paraná. This tool has the potential to classify cases according to the probability of new victimizations occurring, providing inputs for targeting public policies aimed at combating revictimization and femicide. The proposed model and algorithm aim to contribute to a faster approach in identifying high-risk victims and managing domestic violence cases, which numerically exceed the current service capacity of state protection agencies.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Project",
      },
      label: "Mapping and analysis of special treatment areas in Light's concession region",
      description: "Using quantitative and qualitative research techniques, this project aims to develop and validate methodological strategies to map, monitor and mitigate the impacts of violent criminal organizations' activities in Areas with Severe Operational Restrictions (ASRO) in Light's concession area. The initiative integrates the company's internal data with other public and private information sources, focusing on identifying the extent and evolution of ASROs, as well as analyzing the specific territorial dynamics of each criminal group, especially measuring the impact that such groups exert on territorial control and their relationship with the electricity distribution service.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Project",
      },
      label: "Predictive algorithm for domestic violence revictimization risk",
      description: "This project, initiated in 2024 and carried out in partnership with the Public Security Secretariat of Paraná (SESP-PR) and the Inter-American Development Bank (IDB), aims to develop a predictive model and prediction algorithm to assess the risk of revictimization of women in domestic violence cases in Paraná. This tool has the potential to classify cases according to the probability of new victimizations occurring, providing inputs for targeting public policies aimed at combating revictimization and femicide. The proposed model and algorithm aim to contribute to a faster approach in identifying high-risk victims and managing domestic violence cases, which numerically exceed the current service capacity of state protection agencies.",
      url: "/",
    },
  ],
  button = { label: "See all reports", url: "/" },
}: Props) {
  return (
    <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row space-y-8 md:space-x-12 mb-16">
      <div className="flex-none md:w-60">
        <Title label={title} description={description} serif />
      </div>

      <div className="flex flex-col flex-auto space-y-6 md:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {news?.map((item) => (
            <Card
              borderColor="primary"
              image={item.image}
              label={item.label}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
        <div className="flex">
          <FancyLink label={button?.label} url={button?.url} iconRight/>
        </div>
      </div>
    </div>
  );
}