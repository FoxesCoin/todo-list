import { RElement } from 'types/react';

const getIcon = (path: string) => require(`../assets/icons/${path}.svg`);

const PICTURE = {
  bin: getIcon('bin'),
  pencil: getIcon('pencil'),
};

export type PictureName = keyof typeof PICTURE;

interface Props {
  src: keyof typeof PICTURE;

  alt?: string;
  size?: number;
  width?: number;
  height?: number;
}

export const Picture: RElement<Props> = (props) => {
  const { className, src, height, size, width, alt = src } = props;

  const img = PICTURE[src];
  const imgHeight = height ?? size;
  const imgWidth = width ?? size;

  return (
    <img
      alt={alt}
      className={className}
      style={{ width: imgWidth, height: imgHeight }}
      src={img}
    />
  );
};
