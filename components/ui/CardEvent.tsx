import Tag from  "./Tag.tsx";

export interface Props {
  label: string;
  description: string;
  /** @format date */
  date: string;
  categories: {
    slug: string;
  }[];
  online?: boolean;
  url: string;
  labels?: {
    online?: string,
    presencial?: string,
  }
}

export default function CardEvent({
  label = "I Reunião Técnica do FONACRIAD",
  description = "O Fórum RIDGE foi realizado em maio de 2025, em Lima (Peru), organizado pela Red de Investigación en Desarrollo Económico (RIDGE).. O evento reuniu pesquisadores e autoridades internacionais para discutir avanços e desafios em temas centrais da economia do desenvolvimento, como desigualdade, políticas públicas, finanças internacionais e crescimento econômico sustentável.",
  date = "2025-11-31",
  categories,
  online = false,
  url = "/",
  labels,
}: Props) {
  let lang = "pt-BR";
  if (categories?.some(item => item.slug.includes("en-"))) lang = "en-US";
  if (categories?.some(item => item.slug.includes("es-"))) lang = "es-ES";

  const formattedDate = { day: '', month: '', year: '' }
  formattedDate.day = new Date(date).toLocaleDateString(lang, { day: "numeric", timeZone: "America/Sao_Paulo" });
  formattedDate.month = new Date(date).toLocaleDateString(lang, { month: "short", timeZone: "America/Sao_Paulo" });
  formattedDate.year = new Date(date).toLocaleDateString(lang, { year: "numeric", timeZone: "America/Sao_Paulo" });

  return (
    <a
      key={label}
      href={url}
      className="group block md:px-3 md:hover:px-0 transition-[padding]"
    >
      <div className="flex space-x-5 md:px-8 md:py-5 md:hover:bg-white rounded-xl">
        <div className="flex-none p-2 w-14 bg-secondary rounded-lg text-white flex flex-col justify-center">
          <span className="leading-none flex justify-center font-serif text-4xl">{formattedDate.day}</span>
          <span className="text-xs flex justify-center">{formattedDate.month}</span>
          <span className="text-xs flex justify-center">{formattedDate.year}</span>
        </div>
        <div className="flex flex-col gap-1 justify-center text-neutral-950">
          <div className="flex flex-row gap-1 md:gap-5">
            <h3 className="flex-auto line-clamp-2 md:line-clamp-1 text-lg md:text-xl md:group-hover:text-secondary">{label}</h3>
            {
              labels ? (
                <div className="flex-none">
                  <Tag label={online ? labels.online : labels.presencial}/>
                </div>
              ) : ''
            }
          </div>
          <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        </div>
        <div class="hidden md:flex items-center text-secondary">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7803 16.7803C17.4874 17.0732 17.0127 17.0732 16.7198 16.7803C16.4269 16.4874 16.4269 16.0127 16.7198 15.7198L19.1895 13.2501L3.00006 13.2501C2.58584 13.2501 2.25006 12.9143 2.25006 12.5001C2.25006 12.0858 2.58584 11.7501 3.00006 11.7501L19.1895 11.7501L16.7198 9.28033L16.668 9.22369C16.4277 8.92911 16.4452 8.49439 16.7198 8.21978C16.9944 7.94518 17.4291 7.92772 17.7237 8.16802L17.7803 8.21978L21.5303 11.9698C21.8232 12.2627 21.8232 12.7374 21.5303 13.0303L17.7803 16.7803Z"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
