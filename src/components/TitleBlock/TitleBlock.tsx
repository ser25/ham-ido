import { BLOCKCHAIN, FOR_WHOM_IDO_IS } from "../../assets/data/config.ts";

const TitleBlock = () => {
  return (
    <section className={"title-block text-center"}>
      <div className="container">
        <h1 className={"title-block__title bg-ham"}>
          {FOR_WHOM_IDO_IS} IDO {BLOCKCHAIN}
        </h1>
        <div className="title-block__subtitle">
          Buy new tokens launching on {BLOCKCHAIN}
        </div>
        {/*<div className="title-block__button">*/}
        {/*    <a href={'#'} className="wkit-button custom-button gradient-button">How does it work?</a>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default TitleBlock;
