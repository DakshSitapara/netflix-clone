import React from 'react';
import { isEmpty } from 'lodash';

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null;

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className='text-md text-white md:text-xl lg:text-2xl mb-4 font-semibold'>{title}</p>
        <div className='grid grid-cols-4 gap-2'>
            {data.map((movie) => (
                <div key={movie.id}>
                    <p className='text-sm text-white md:text-base lg:text-lg'>{movie.title}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
