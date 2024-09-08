import { API_PATH, instance } from '../config';
import {
  DeleteFolderParams,
  FolderTypes,
  GetFolderParams,
  PostFolderParams,
  PostLinkParams,
  PutFolderParams,
} from './types';

export const getFolderList = async () => {
  const response = await instance.get<FolderTypes[]>(API_PATH.folder.default);

  return response.data ?? [];
};

export const postFolder = async ({ folderName }: PostFolderParams) => {
  const params = { name: folderName };
  const response = await instance.post<FolderTypes[]>(
    API_PATH.folder.default,
    JSON.stringify(params),
  );

  return response.data ?? [];
};

export const putFolder = async ({ folderName, folderId }: PutFolderParams) => {
  const params = { name: folderName, id: folderId };
  const response = await instance.put(
    API_PATH.folder.detail(folderId),
    JSON.stringify(params),
  );

  return response.data ?? [];
};

export const deleteFolder = async ({ folderId }: DeleteFolderParams) => {
  const response = await instance.delete(API_PATH.folder.detail(folderId), {
    params: { id: folderId },
  });

  return response.data.list ?? [];
};

export const getLinkList = async ({ folderId }: GetFolderParams) => {
  const response = await instance.get<FolderTypes[]>(
    API_PATH.link.category(folderId),
  );

  return response.data ?? [];
};

export const postLink = async ({ url, folderId = 0 }: PostLinkParams) => {
  const params = { url, folderId };
  const response = await instance.post(
    API_PATH.link.default,
    JSON.stringify(params),
  );

  return response.data ?? [];
};