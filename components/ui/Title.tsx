export interface Link {
  label?: string;
  description?: string;
}

export default function Title({
  label = "Label",
  description = '',
}: Link) {
  return (
    <div className="flex-none flex flex-col space-y-1 w-56">
      <h2 className="text-5xl leading-tight font-serif">{label}</h2>
      {
        description ? (
          <div>{description}</div>
        ) : ''
      }
    </div>
  );
}
