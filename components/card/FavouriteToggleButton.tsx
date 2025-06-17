import { FaHeart } from 'react-icons/fa';
import { PropertyCardProps } from '../../app/utils/types';
import { Button } from '../ui/button';
import { CardSignInButton } from '../form/Buttons';
import { auth } from '@clerk/nextjs/server';
import { fetchFavoriteId, getAuthUser } from '@/app/utils/action';
import FavoriteToggleForm from './FavouriteToggleForm';

 async function FavouriteToggleButton({propertyId} : {propertyId:string}) {
    const { userId } = await auth();
  if (!userId) return <CardSignInButton />;
    const favoriteId = await fetchFavoriteId({ propertyId });
    return(
        <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />
    )
}

export default FavouriteToggleButton;