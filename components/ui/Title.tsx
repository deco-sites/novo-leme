export interface Link {
  label?: string;
  description?: string;
  titleSize?: string;
  descriptionSize?: string;
  descriptionColor?: string;
  serif?: boolean;
  gap?: number;
  noClamp?: boolean;
}

export default function Title({
  label = "Label",
  description,
  titleSize = "5xl",
  descriptionSize = "base",
  descriptionColor,
  serif,
  gap = 1,
  noClamp,
}: Link) {
  return (
    <div className={`w-full flex flex-col gap-${gap}`}>
      <h2 className={`leading-snug ${noClamp ? '' : 'line-clamp-2'} text-${titleSize} ${ serif ? 'font-serif' : '' } }`}>{label}</h2>
      {
        description ? (
          <div class={`leading-normal md:line-clamp-2 xl:line-clamp-4 ${descriptionColor ? 'text-' + descriptionColor : ''} text-${descriptionSize}`}>{description}</div>
        ) : ''
      }
    </div>
  );
}
