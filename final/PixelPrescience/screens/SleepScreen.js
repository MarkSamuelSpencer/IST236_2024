import List from "../components/List/List";
import { MEDITATION } from "../data/dummy_data";

function SleepScreen() {
    // define type of meditation
    const type = "Sleep";

    // filter meditations based on type
    const displayedMeditations = MEDITATION.filter((meditationItem) => {
        return meditationItem.type === type;
    });

     // render list component with filtered meditations
    return <List items={displayedMeditations} />
}

export default SleepScreen;