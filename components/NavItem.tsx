export interface Props {
  label?: string;
  url?: string;
  selected?: boolean;
  sublinks?: {
    label?: string;
    url?: string;
  }[];
}

export default function NavItem({
  label,
  url,
  selected,
  sublinks,
}: Props) {
  return (
    <div className="group">
      <a
        key={label}
        href={url}
        className="block px-3"
      >
        {
          selected ? (
            <span class="block text-secondary font-semibold py-2 px-3 border border-secondary rounded-md shadow-[2px_2px_0] --tw-shadow-[--secondary]">
              {label}
            </span>
          ) :
          (
            <span class="block text-primary group-hover:text-secondary group-hover:underline transition-colors duration-100 font-semibold py-2 border border-transparent">
              {label}
            </span>
          )
        }
      </a>
      {
        sublinks && sublinks?.length > 0 ? (
          <div className="flex flex-col absolute gap-2 px-[2px] bg-base-100 z-10 group-hover:pb-3 transition-all max-h-0 overflow-hidden duration-300 group-hover:max-h-96">
            {sublinks?.map((link) => (
              <a className="text-sm px-3 py-[2px] text-secondary hover:underline" href={link?.url}>{link?.label}</a>
            ))}
          </div>
        ) : ''
      }
    </div>
  );
}
