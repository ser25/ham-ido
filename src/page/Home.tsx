import TitleBlock from "../components/TitleBlock/TitleBlock.tsx";
import Main from "../components/Main/Main.tsx";
import TabsInformation from "../components/TabsInformation/TabsInformation.tsx";


const Home = () => {
    return (
        <div>
            <TitleBlock />
            <Main />
            <TabsInformation />
        </div>
    );
};

export default Home;