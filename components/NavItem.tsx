import MatchPathname from "apps/website/matchers/pathname.ts";

export interface Props {
  label?: string;
  url?: string;
  pathname?: string;
}

export default function NavItem({
  label,
  url,
  pathname,
}: Props) {
  return (
    <a
      key={label}
      href={url}
      className="block px-3"
    >
      {
        pathname?.indexOf(url || '') == -1 ? (
            <span class="block text-primary hover:text-secondary hover:underline transition-colors duration-100 font-semibold py-2 border border-transparent">
              {label}
            </span>
        ) :
        (
          <span class="block text-secondary hover:text-secondary transition-colors duration-100 font-semibold py-2 px-3 border border-secondary rounded-md shadow-[2px_2px_0] --tw-shadow-[--secondary]">
            {label}
          </span>
        )
      }
    </a>
  );
}
