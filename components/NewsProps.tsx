import type { ImageWidget } from "apps/admin/widgets.ts";
import { RichText } from "apps/admin/widgets.ts";

export default interface Props {
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  label?: string;
  description?: string;
  body?: RichText;
  /** @format date */
  date?: string;
  url?: string;
  tags?: string[];
}