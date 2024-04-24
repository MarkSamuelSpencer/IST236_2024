import List from "../components/List/List";
import { MEDITATION } from "../data/dummy_data";

function MorningScreen() {
    // define type of meditation
    const type = "Morning";
    // filter meditations based on type
    const displayedMeditations = MEDITATION.filter((meditationItem) => {
        return meditationItem.type === type;
    });

    // render list component with filtered meditations
    return <List items={displayedMeditations} />
}

export default MorningScreen;