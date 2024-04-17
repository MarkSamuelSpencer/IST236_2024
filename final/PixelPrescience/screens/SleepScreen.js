import List from "../components/List/List";
import { MEDITATION } from "../data/dummy_data";

function SleepScreen() {
    const type = "Sleep";
    const displayedMeditations = MEDITATION.filter((meditationItem) => {
        return meditationItem.type === type;
    });
    return <List items={displayedMeditations} />
}

export default SleepScreen;