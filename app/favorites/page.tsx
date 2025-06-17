import EmptyList from "@/components/home/EmptyList";
import { fetchFavorites } from "../utils/action"
import PropertiesList from "@/components/home/PropertiesList";

async function FavoritePage() {

    const favourites = await fetchFavorites();

    if (favourites.length === 0) return <EmptyList/>

    return (
        <PropertiesList properties={favourites}></PropertiesList>
    )
}

export default FavoritePage