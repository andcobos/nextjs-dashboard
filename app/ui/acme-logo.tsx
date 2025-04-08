import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { monse } from '@/app/ui/fonts'; // Ensure lusitana is correctly exported

export default function AcmeLogo() {
  return (
    <div
      className={`${monse.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
