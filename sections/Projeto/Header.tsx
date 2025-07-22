import Title from  "../../components/ui/Title.tsx";
import Tag from  "../../components/ui/Tag.tsx";

export interface Props {
  /** @title Title */
  label?: string;
  categories?: string[];
  details?: {
    date?: string;
    place?: string;
    status?: string;
  }
}

export default function Header({
  label = "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
  categories = ["Crime Organizado e Polícia"],
  details = {
    date: "2025-atual",
    place: "Estado do Rio de Janeiro",
    status: "Em andamento",
  }
}: Props) {
  return (
    <div className="container flex gap-16 mb-9">
      <div className="flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-7">
        <Title label={label} serif titleSize="4xl" noClamp />
        <div class="flex gap-3">
          {categories?.map((tag) => (
            <Tag label={tag}/>
          ))}
          {details?.date ? <Tag type="date" label={details?.date} color="secondary"/> : ''}
          {details?.place ? <Tag type="place" label={details?.place} color="secondary"/> : ''}
          {details?.status ? <Tag type="status" label={details?.status} color="secondary"/> : ''}
        </div>
      </div>
      <div className="flex-none w-44"/>
    </div>
  );
}
