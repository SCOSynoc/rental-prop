'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { URLSearchParams } from "url"; 

export default function NavSearch(){
    const searchParams = useSearchParams()
    const pathName = usePathname();
    const { replace } = useRouter();
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
    const handleSearch = useDebouncedCallback((value:string) => {
            const params = new URLSearchParams(searchParams);
            if(value){
                params.set('search', value);
            }else{
                params.delete('search');
            }
            replace(`${pathName}?${params.toString()}`);
        },300)
        useEffect(() => {
            if (!searchParams.get('search')) {
              setSearch('');
            }
        }, [searchParams.get('search')]);


    return(
        <Input
            type='search'
            placeholder='find a property...'
            className='max-w-xs dark:bg-muted '
            onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
            }}
            value={search}
    />
    )
}