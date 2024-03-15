import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

function USNewsScreen() {
    const type = "US";
    const displayedNews = NEWS.filter((newsItem) => {
        return newsItem.type === type;
    });
    return <List items={displayedNews} />
}

export default USNewsScreen;