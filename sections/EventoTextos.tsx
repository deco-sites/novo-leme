export interface Props {
  description?: string;
  date?: string;
  dateStart?: string;
  dateEnd?: string;
  location?: string;
  register?: string;
  gallery?: string;
  organization?: string;
  partners?: string;
  sponsors?: string;
}

export default function EventTexts({
  description = "Descrição",
  date = "Data",
  dateStart = "Início",
  dateEnd = "Fim",
  location = "Local",
  register = "Inscreva-se",
  gallery = "Galeria",
  organization = "Organização",
  partners = "Parceiros",
  sponsors = "Financiadores",
}: Props) {
  return (
    <></>
  );
}
