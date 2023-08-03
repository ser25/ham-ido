import MainLeft from "./MainLeft.tsx";
import MainRight from "./MainRight.tsx";


const Main = () => {
  return (
    <main className={"main"}>
      <div className={"main__body container"}>
        <MainLeft />
        <MainRight />
      </div>
    </main>
  );
};

export default Main;