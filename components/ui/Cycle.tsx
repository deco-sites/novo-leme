import { RichText } from "apps/admin/widgets.ts";

export interface Props {
  title?: string;
  step1?: RichText;
  step2?: RichText;
  step3?: RichText;
  step4?: RichText;
  step5?: RichText;
  step6?: RichText;
}

export default function Cycle({
  title,
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
}: Props) {
  const stepClasses = "group-hover:border-secondary transition-all absolute w-[240px] px-3 py-2 border-2 border-primary rounded-md"
  const stepClassesMobile = "absolute px-2 py-1 border border-primary rounded-md text-xs"
  return (
    <div className="flex flex-col gap-6">
      <div className="hidden md:block group relative w-[745px] h-[435px] mx-auto">
        <svg className="transition-all group-hover:scale-110 group-hover:text-secondary group-hover:rotate-6 absolute -mt-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-300" width="238" height="231" viewBox="0 0 238 231" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M116.853 2.2873C137.303 2.34251 158.214 7.68779 175.782 18.0151C181.037 21.1042 187.523 25.3372 190.502 30.7729M192.99 17.2688C193.52 20.236 194.006 23.1938 194.353 26.1901C194.66 28.8361 195.482 32.1321 194.376 34.7264C194.035 35.5263 192.287 34.7433 191.712 34.6274C186.606 33.5969 181.714 32.2662 176.661 30.9706M229.427 139.109C233.951 128.812 232.747 122.146 230.898 110.894C228.202 94.4912 221.454 71.1856 211.976 57.3321M222.129 135.324C221.126 136.947 224.25 150.421 224.811 150.353C226.796 150.11 235.769 143.328 236.358 141.355M144.767 222.735C149.036 221.624 156.884 221.27 161.048 219.829C175.184 214.939 212.324 191.921 215.264 174.097M153.435 229.21C148.13 229.178 143.314 223.948 138.366 222.189C138.055 222.079 137.983 221.862 138.321 221.734C142.786 220.048 147.401 216.817 151.383 214.067M118.496 226.466C106.172 228.665 85.8371 218.259 75.3029 212.799C67.7552 208.886 48.976 198.249 48.976 198.249M43.5945 206.556C42.2415 202.792 41.2284 197.172 39.741 193.465C38.9215 191.422 37.6663 191.012 40.7398 190.56C44.1672 190.056 51.5967 191.349 54.983 190.744M22.9586 166.787C11.8197 152.671 4.11619 133.611 1.73424 116.008C1.38618 113.436 1.97915 110.484 2.11207 107.884C4.52123 97.8665 10.4752 92.2866 10.4752 92.2866M1.87393 89.8285C6.39392 89.0219 10.9225 88.0151 15.4772 87.4008C16.5414 87.2573 16.432 98.2219 16.5956 99.1385M89.0803 11.325C85.4714 12.8413 80.8936 14.3178 77.203 15.7146C57.5039 23.1704 32.2237 36.9575 23.9549 58.0467M82.7006 5.3069C85.7042 5.32769 90.6588 7.62211 93.6597 7.19323C95.9225 6.86983 94.5769 8.13168 93.9489 9.3403C91.9585 13.1711 90.2001 17.6558 87.5724 21.1708" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <div className="transition-all group-hover:scale-110 group-hover:rotate-0 absolute -mt-4 text-lg font-semibold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2">{title}</div>
        <div className={`${stepClasses} group-hover:-translate-y-4 right-[466px] bottom-[330px]`} dangerouslySetInnerHTML={{__html: step1}}></div>
        <div className={`${stepClasses} group-hover:translate-x-4 group-hover:-translate-y-2 left-[422px] bottom-[360px]`} dangerouslySetInnerHTML={{__html: step2}}></div>
        <div className={`${stepClasses} group-hover:translate-x-2 group-hover:translate-y-2 left-[512px] bottom-[233px]`} dangerouslySetInnerHTML={{__html: step3}}></div>
        <div className={`${stepClasses} group-hover:-translate-x-4 group-hover:translate-y-4 left-[473px] top-[305px]`} dangerouslySetInnerHTML={{__html: step4}}></div>
        <div className={`${stepClasses} group-hover:-translate-x-6 group-hover:translate-y-2 right-[412px] top-[322px]`} dangerouslySetInnerHTML={{__html: step5}}></div>
        <div className={`${stepClasses} group-hover:-translate-x-4 group-hover:-translate-y-2 right-[515px] bottom-[180px]`} dangerouslySetInnerHTML={{__html: step6}}></div>
      </div>
      <div class="md:hidden font-semibold text-center">{title}</div>

      {/* Mobile */}
      <div className="md:hidden group relative w-full h-[290px] mx-auto">
        <svg className="absolute -mt-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-300" width="56" height="56" viewBox="0 0 238 231" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M116.853 2.2873C137.303 2.34251 158.214 7.68779 175.782 18.0151C181.037 21.1042 187.523 25.3372 190.502 30.7729M192.99 17.2688C193.52 20.236 194.006 23.1938 194.353 26.1901C194.66 28.8361 195.482 32.1321 194.376 34.7264C194.035 35.5263 192.287 34.7433 191.712 34.6274C186.606 33.5969 181.714 32.2662 176.661 30.9706M229.427 139.109C233.951 128.812 232.747 122.146 230.898 110.894C228.202 94.4912 221.454 71.1856 211.976 57.3321M222.129 135.324C221.126 136.947 224.25 150.421 224.811 150.353C226.796 150.11 235.769 143.328 236.358 141.355M144.767 222.735C149.036 221.624 156.884 221.27 161.048 219.829C175.184 214.939 212.324 191.921 215.264 174.097M153.435 229.21C148.13 229.178 143.314 223.948 138.366 222.189C138.055 222.079 137.983 221.862 138.321 221.734C142.786 220.048 147.401 216.817 151.383 214.067M118.496 226.466C106.172 228.665 85.8371 218.259 75.3029 212.799C67.7552 208.886 48.976 198.249 48.976 198.249M43.5945 206.556C42.2415 202.792 41.2284 197.172 39.741 193.465C38.9215 191.422 37.6663 191.012 40.7398 190.56C44.1672 190.056 51.5967 191.349 54.983 190.744M22.9586 166.787C11.8197 152.671 4.11619 133.611 1.73424 116.008C1.38618 113.436 1.97915 110.484 2.11207 107.884C4.52123 97.8665 10.4752 92.2866 10.4752 92.2866M1.87393 89.8285C6.39392 89.0219 10.9225 88.0151 15.4772 87.4008C16.5414 87.2573 16.432 98.2219 16.5956 99.1385M89.0803 11.325C85.4714 12.8413 80.8936 14.3178 77.203 15.7146C57.5039 23.1704 32.2237 36.9575 23.9549 58.0467M82.7006 5.3069C85.7042 5.32769 90.6588 7.62211 93.6597 7.19323C95.9225 6.86983 94.5769 8.13168 93.9489 9.3403C91.9585 13.1711 90.2001 17.6558 87.5724 21.1708" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
        </svg>
        <div className={`${stepClassesMobile} w-[150px] left-[12px] top-0`} dangerouslySetInnerHTML={{__html: step1}}></div>
        <div className={`${stepClassesMobile} w-[140px] left-[200px] top-[12px]`} dangerouslySetInnerHTML={{__html: step2}}></div>
        <div className={`${stepClassesMobile} w-[140px] right-0 top-[90px]`} dangerouslySetInnerHTML={{__html: step3}}></div>
        <div className={`${stepClassesMobile} w-[150px] left-[200px] top-[172px]`} dangerouslySetInnerHTML={{__html: step4}}></div>
        <div className={`${stepClassesMobile} w-[150px] left-[22px] bottom-[32px]`} dangerouslySetInnerHTML={{__html: step5}}></div>
        <div className={`${stepClassesMobile} w-[140px] left-0 top-[110px]`} dangerouslySetInnerHTML={{__html: step6}}></div>
      </div>
    </div>
  );
}
