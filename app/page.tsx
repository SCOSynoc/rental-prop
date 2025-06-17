import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import Navbar from '@/components/navbar/Navbar';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function HomePage({searchParams} : {
     searchParams:{category?:string, search?:string}
    }) {
  return (
    // <div>
  
    //   <h1 className='text-3xl'>HomePage</h1>
    //   <Button variant='outline' size='lg' className='capitalize m-8'>
    //     Click me
    //   </Button>
    // </div>
    <section>
        <div className='place-items-center px-10'>
        <CategoriesList category={searchParams.category} search={searchParams.search}/>
        </div>
        
         <div className='flex-auto px-2'>
         <Suspense fallback={ <LoadingCards/>}>
         <PropertiesContainer
           category={searchParams.category}
           search={searchParams.search} 
           />
         </Suspense> 
        </div>   
    </section>

  );
}
export default HomePage;
