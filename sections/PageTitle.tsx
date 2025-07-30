import Title from  "../components/ui/Title.tsx";

export interface Props {
  title?: string;
  description?: string;
  width?:  "wide" | "normal";
}

export default function PageTitle({
  title = "Title",
  description,
  width = "wide",
}: Props) {
  return (
    <div className={`container px-6 flex gap-36 ${width === "normal" ? "md:px-44" : "md:px-12"}`}>
      <Title label={title} description={description} serif />
    </div>
  );
}
