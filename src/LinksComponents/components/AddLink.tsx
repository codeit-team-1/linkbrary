import Image from 'next/image';
import linkIcon from '@/LinksComponents/images/link.png';

export const AddLink = () => {
  return (
    <div className="m-auto max-w-[800px] h-auto px-5 py-4 flex justify-between items-center rounded-[15px] bg-white border border-solid border-primary">
      <div className="w-full flex justify-center items-center gap-3">
        <Image src={linkIcon} alt="링크 아이콘" width={20} height={20} />
        <input
          className="w-full focus:outline-none placeholder-[#9fa6b2]"
          type="text"
          placeholder="링크를 추가해 보세요"
        />
      </div>
      <button
        className="shrink-0 px-4 py-[10px] rounded-lg bg-gradient-color text-[14px] font-semibold text-[#f5f5f5]"
        type="button"
      >
        추가하기
      </button>
    </div>
  );
};