import Title from  "../components/ui/Title.tsx";

export interface Props {
  title?: string;
  description?: string;
}

export default function PageTitle({
  title = "Title",
  description = "Description",
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex gap-36">
      <Title label={title} description={description} serif />
    </div>
  );
}
