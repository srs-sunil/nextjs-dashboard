import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
        src="/srs_logo_95.jpg"
        width={60}
        height={100}
        alt='Company Logo'
        className=''
      />
      <p className="pl-4 text-[34px]">SRS Software Systems</p>
    </div>
  );
}
