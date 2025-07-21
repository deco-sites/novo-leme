export interface Link {
  label?: string;
  description?: string;
  titleSize?: string;
  decriptionSize?: string;
  serif?: boolean;
  gap?: number;
}

export default function Title({
  label = "Label",
  titleSize = "5xl",
  decriptionSize = "base",
  description,
  serif,
  gap = 1,
}: Link) {
  return (
    <div className={`w-full flex flex-col gap-${gap}`}>
      <h2 className={`leading-snug line-clamp-2 text-${titleSize} ${ serif ? 'font-serif' : '' } }`}>{label}</h2>
      {
        description ? (
          <div class={`leading-normal line-clamp-4 text-${decriptionSize}`}>{description}</div>
        ) : ''
      }
    </div>
  );
}
