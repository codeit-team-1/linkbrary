import Image from 'next/image';
import kakaoIcon from '@/assets/images/kakaoTalk.png';
import facebookIcon from '@/assets/images/facebook.png';
import copyLinkIcon from '@/assets/images/copyLink.png';
import { CommonInput, CommonButton } from '@/components';
import { ModalType } from '@/lib/types';
import { match } from 'ts-pattern';

interface ModalContentProps {
  mode: ModalType;
}

type TsModalType =
  | { type: 'add' }
  | { type: 'share' }
  | { type: 'changeName' }
  | { type: 'delete' };

export const ModalContent = ({ mode }: ModalContentProps) => {
  const TContent: TsModalType = { type: mode };

  const SelectedModalContent = match(TContent)
    .with({ type: 'add' }, () => <AddFolder />)
    .with({ type: 'share' }, () => <ShareFolder />)
    .with({ type: 'changeName' }, () => <ChangeFolderName />)
    .with({ type: 'delete' }, () => <DeleteFolder />)
    .exhaustive();

  return SelectedModalContent;
};

const AddFolder = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#373740] font-[Pretendard] not-italic leading-[normal] text-center">
        폴더 추가
      </h3>
      <div className="mt-6 mb-[15px]">
        <CommonInput placeholder="내용 입력" />
      </div>
      <CommonButton mode="default">추가하기 </CommonButton>
    </div>
  );
};

const ShareFolder = () => {
  const shareMethodList = [
    {
      id: 1,
      src: kakaoIcon,
      text: '카카오톡',
    },
    {
      id: 2,
      src: facebookIcon,
      text: '페이스북',
    },
    {
      id: 3,
      src: copyLinkIcon,
      text: '링크 복사',
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-[#373740] font-[Pretendard] not-italic leading-[normal] text-center">
        폴더 공유
      </h3>
      <h4 className="mt-2 mb-6 text-center text-[14px] font-normal text-secondary-60 font-[Pretendard] not-italic leading-[22px]">
        폴더명
      </h4>
      <ul className="flex justify-center items-center gap-8">
        {shareMethodList.map((shareMethod) => (
          <li
            className="flex flex-col justify-center items-center gap-[10px]"
            key={shareMethod.id}
          >
            <button type="button">
              <Image
                src={shareMethod.src}
                alt={`${shareMethod.text} 아이콘`}
                width={42}
                height={42}
              />
            </button>
            <p className="text-center text-[13px] text-[#373740] font-[Pretendard] not-italic leading-[15px]">
              {shareMethod.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChangeFolderName = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#373740] font-[Pretendard] not-italic leading-[normal] text-center">
        폴더 이름 변경
      </h3>
      <div className="mt-6 mb-[15px]">
        <CommonInput placeholder="내용 입력" />
      </div>
      <CommonButton mode="default">변경하기 </CommonButton>
    </div>
  );
};

const DeleteFolder = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#373740] font-[Pretendard] not-italic leading-[normal] text-center">
        폴더 삭제
      </h3>
      <h4 className="mt-2 mb-6 text-center text-[14px] text-secondary-60 font-[Pretendard] not-italic leading-[22px]">
        폴더명
      </h4>
      <CommonButton
        className="flex w-full py-4 px-5 justify-center items-center gap-2.5 bg-red rounded-lg text-white disabled:bg-none disabled:bg-gray-500"
        mode="default"
      >
        삭제하기{' '}
      </CommonButton>
    </div>
  );
};