import { LoaderIcon } from "lucide-react";

export default function Loading() {
    return (
        <div className="place-items-center items-center center mt-10">
             
              <> <LoaderIcon className='mr-2 h-10 w-10 animate-spin' />
              Please wait...
              </>
              
        </div>
    )
}