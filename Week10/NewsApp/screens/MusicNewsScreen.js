import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

function MusicNewsScreen() {
    const type = "Music";
    const displayedNews = NEWS.filter((newsItem) => {
        return newsItem.type === type;
    });
    return <List items={displayedNews} />
}

export default MusicNewsScreen;