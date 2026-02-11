import TimelineWidget from "../component/TimelineWidget";
import { timelineData } from "../data/CityContent";

const Home: React.FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 h-screen">
      <TimelineWidget
      header="History of Siwan, Bihar"
      subHeader="A brief journey through the ancient, medieval, colonial, and modern
          history of Siwan."
      content={timelineData}
      />
    </section>
  );
};
export default Home;
