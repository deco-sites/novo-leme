import { RichText } from "apps/admin/widgets.ts";
import Title from  "../../components/ui/Title.tsx";

export interface Props {
  paragraph?: {
    /** @title Title */
    label?: string;
    text: RichText;
  }[]
}

export default function TextBlock({
  paragraph = [
    {
      label: "Descrição",
      text: "Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base de dados consolidada e validada sobre as ASRO, o desenvolvimento de métricas e indicadores para monitorar essas áreas e a formulação de estratégias para mitigar os impactos operacionais causados pelos grupos criminosos. Espera-se, ainda, que os produtos gerados contribuam para fortalecer a posição da Light como uma empresa inovadora, comprometida com a segurança pública do Estado do Rio de Janeiro, além de embasar políticas públicas mais eficazes na área de segurança.",
    },
    {
      label: "Resultados",
      text: "Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base de dados consolidada e validada sobre as ASRO, o desenvolvimento de métricas e indicadores para monitorar essas áreas e a formulação de estratégias para mitigar os impactos operacionais causados pelos grupos criminosos. Espera-se, ainda, que os produtos gerados contribuam para fortalecer a posição da Light como uma empresa inovadora, comprometida com a segurança pública do Estado do Rio de Janeiro, além de embasar políticas públicas mais eficazes na área de segurança.",
    },
  ]
}: Props) {
  return (
    <div className="container flex gap-8 md:gap-16 mb-6 md:mb-9">
      <div className="hidden md:block flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-6 md:gap-9">
        {paragraph?.map((p) => (
          <div class="flex flex-col gap-4">
            {p.label ? <Title label={p.label} titleSize="2xl" serif /> : ''}
            <div
              className="leading-relaxed text-neutral-950 custom-list"
              dangerouslySetInnerHTML={{
                __html: p.text,
              }}
            />
          </div>
        ))}
      </div>
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
