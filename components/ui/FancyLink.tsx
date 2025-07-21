export interface Link {
  label?: string;
  url?: string;
  iconRight?: boolean;
}

export default function FancyLink({
  label = "Label",
  url = "/",
  iconRight = false,
}: Link) {
  return (
    <a
      key={label}
      href={url}
      className="flex space-x-4 align-middle bg-base-100 text-secondary hover:text-primary transition-colors duration-200 font-semibold py-2 px-4 border border-2 border-transparent hover:border-secondary rounded-md hover:shadow-[2px_2px_0_rgba(234,115,66,1)]"
    >
      <span>{label}</span>
      {
        iconRight ? (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7803 16.7803C17.4874 17.0732 17.0127 17.0732 16.7198 16.7803C16.4269 16.4874 16.4269 16.0127 16.7198 15.7198L19.1895 13.2501L3.00006 13.2501C2.58584 13.2501 2.25006 12.9143 2.25006 12.5001C2.25006 12.0858 2.58584 11.7501 3.00006 11.7501L19.1895 11.7501L16.7198 9.28033L16.668 9.22369C16.4277 8.92911 16.4452 8.49439 16.7198 8.21978C16.9944 7.94518 17.4291 7.92772 17.7237 8.16802L17.7803 8.21978L21.5303 11.9698C21.8232 12.2627 21.8232 12.7374 21.5303 13.0303L17.7803 16.7803Z"/>
          </svg>
        ) : ''
      }
    </a>
  );
}
