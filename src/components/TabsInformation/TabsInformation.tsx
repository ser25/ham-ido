import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Overview from "./Overview.tsx";
import HowToTakePart from "./HowToTakePart.tsx";

const TabsInformation = () => {
  return (
    <section>
      <div className={"container"}>
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="justify-content-center mb-2"
          >
            <Tab eventKey="overview" title="Overview">
              <Overview />
            </Tab>
            <Tab eventKey="How to Take Part" title="How to Take Part">
              <HowToTakePart />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsInformation;
