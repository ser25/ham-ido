import ImageInformation from "../ImageInformation.tsx";

type item = {
  image: string;
  title: string;
  total: string | JSX.Element;
  subtitle?: string;
};

type ImageInformationBlockProps = {
  items: item[];
};

const ImageInformationBlock = ({ items }: ImageInformationBlockProps) => {
  return (
    <>
      {items.map(({ image, title, total, subtitle }) => (
        <ImageInformation
          key={title}
          image={image}
          title={title}
          total={total}
          subtitle={subtitle}
        />
      ))}
    </>
  );
};

export default ImageInformationBlock;
