import React from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";
import FavoritesButton from "./FavoritesButton";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import { BiChevronDown } from "react-icons/bi";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {

  const router = useRouter();
  const { openModal } = useInfoModalStore();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="Thumbnail"
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />
      <div
        className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0
                        group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw]"
      >
        <img
          src={data.thumbnailUrl}
          alt="Thumbnail"
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
                onClick={() => router.push(`/watch/${data?.id}`)}
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white flex justify-center items-center transition hover:bg-neutral-300">
              <BsFillPlayFill size={30} />
            </div>
              <FavoritesButton movieId={data?.id} />
              <div
                  onClick={() => openModal(data?.id)}
                  className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
                <BiChevronDown size={30} className="text-white group-hover/item:text-neutral-300" />
              </div>
          </div>
          <p className="text-green-400 font-semibold mt-4 text-sm lg:text-base">{data.title}</p>
          <div className="flex flex-row items-center gap-1 mt-2">
            <p className="text-white text-xs lg:text-sm">{data.duration}</p>
            <span className="text-white text-xs lg:text-sm">|</span>
            <p className="text-white text-xs lg:text-sm">{data.genre}</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default MovieCard;