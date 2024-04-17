import List from "../components/List/List";
import { MEDITATION } from "../data/dummy_data";

function MorningScreen() {
    const type = "Morning";
    const displayedMeditations = MEDITATION.filter((meditationItem) => {
        return meditationItem.type === type;
    });
    return <List items={displayedMeditations} />
}

export default MorningScreen;