import Link from 'next/dist/client/link';
import { PropertyCardProps } from '../../app/utils/types';
import { formatCurrency } from '@/app/utils/format';
import Image from 'next/image';
import PropertyRating from './PropertyRating';
import FavouriteToggleButton from './FavouriteToggleButton';
import CountryFlagAndName from './CountryFlagAndName';


function PropertyCard({ property } : { property:PropertyCardProps }){
    const { name, image, price } =  property;
    const { country, id: propertyId, tagline } = property;
    return (
        <article className='group relative'>
      <Link href={`/properties/${propertyId}`}>
        <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
          <Image 
          src={image}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
          alt={name}
          className='rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500'>
          </Image>
        </div>
        <div className='flex justify-between items-center'>
          <h3 className='text-sm font-semibold mt-1'>
            {name.substring(0, 30)}
          </h3>
          {/* property rating */}
          <PropertyRating propertyId={propertyId} inPage={false}></PropertyRating>
        </div>
        <p className='text-sm mt-1 text-muted-foreground '>
          {tagline.substring(0, 40)}
        </p>
        <div className='flex justify-between items-center mt-1'>
          <p className='text-sm mt-1 '>
            <span className='font-semibold'>{formatCurrency(price)} </span>
            night
          </p>
          {/* country and flag */}
          <CountryFlagAndName countryCode={country} />
          
        </div>
      </Link>
      <div className='absolute top-5 right-5 z-5'>
        {/* favorite toggle button */}
        <FavouriteToggleButton propertyId={propertyId}></FavouriteToggleButton>
      </div>
    </article>
    )
}

export default PropertyCard;