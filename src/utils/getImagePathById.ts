import { IMAGES_API } from 'constants';

type GetImagePathParams = {
  id: string;
  width: number;
  height: number;
};

export const getImagePathById = ({ id, width, height }: GetImagePathParams) => {
  return `${IMAGES_API}/id/${id}/${width}/${height}`;
};
