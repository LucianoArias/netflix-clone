import { useRouter } from 'next/router';

interface NavbarItemsProps {
  label: string;
}

export default function NavbarItem({ label }: NavbarItemsProps) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
}
