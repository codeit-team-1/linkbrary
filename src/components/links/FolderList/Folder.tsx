interface FolderProps {
  folderName: string;
}

export const Folder = ({ folderName }: FolderProps) => {
  return (
    <button className="px-3 py-2 border border-solid border-primary rounded-[5px] font-normal text-base font-[Pretendard] not-italic leading-[normal] hover:bg-[#e7effb] active:bg-primary active:text-white">
      {folderName}
    </button>
  );
};
