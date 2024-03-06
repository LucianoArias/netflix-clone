import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from '@/components/FavoriteButton';
import { useRouter } from 'next/router';
import useInfoModal from '@/hooks/useInfoModal';
import { BiChevronDown } from 'react-icons/bi';

interface MovieCardProps {
  data: Record<string, any>;
}

export default function MovieCard({ data }: MovieCardProps) {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        width={100}
        height={100}
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        src={data.thumbnailUrl}
        alt="thumbnail"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300  w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              onClick={() => router.push(`watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <BiChevronDown
                className="text-white group-hover/item:text-neutral-300 w-4"
                size={30}
              />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            Nuevo{' '}
            <span className="text-white text-[10px] lg:text-sm border py-0.5 px-1 border-gray-200 rounded">
              {data.age}+
            </span>
            {'   '}
            <span className="text-white">{data.release}</span>
          </p>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {data.duration}h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
