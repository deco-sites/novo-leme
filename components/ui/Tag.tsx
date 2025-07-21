export interface Link {
  label?: string;
  color?: string;
}

export default function Tag({
  label = "Label",
  color,
}: Link) {
  return (
    <span className={`text-primary border border-primary text-xs font-semibold rounded-full px-3 py-1`}>
      {label}
    </span>
  );
}
