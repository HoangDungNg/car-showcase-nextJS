'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@utils';

interface IShowMore {
  isNext: boolean;
  pageNumber: number;
}

const ShowMore: React.FC<IShowMore> = ({ isNext, pageNumber }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams('limit', newLimit.toString());
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
