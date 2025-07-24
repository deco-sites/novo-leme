import type { ImageWidget } from "apps/admin/widgets.ts";

export default interface Props {
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  label?: string;
  description?: string;
  url?: string;
  tags?: string[];
}