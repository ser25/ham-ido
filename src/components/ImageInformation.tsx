import React from "react";

type ImageInformationProps = {
  image: string;
  title: string;
  total: string | JSX.Element;
  subtitle?: string;
};

const ImageInformation: React.FC<ImageInformationProps> = ({
  image,
  total,
  title,
  subtitle,
}) => {
  return (
    <div className={"image-information d-flex align-items-center gap-3"}>
      <div className={"image-information__image"}>
        <img src={image} alt="token icon" />
      </div>
      <div>
        <div className={"image-information__title"}>{title}</div>
        <div className={"image-information__total"}>{total}</div>
        {subtitle && (
          <div className={"image-information__subtitle"}>{subtitle}</div>
        )}
      </div>
    </div>
  );
};

export default ImageInformation;
