'use client'

import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";



function ImageInput() {
    const name = 'image';
    return (
        <div className="mb-2">
             <Label className="Capitalize"> Image</Label>
             <Input
                id={name}
                name={name}
                type='file'
                accept='image/*'
                required
                className='max-w-xs'
            />

        </div>
    )
}

export default ImageInput;


type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

