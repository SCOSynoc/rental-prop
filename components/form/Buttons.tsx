'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { LoaderIcon } from 'lucide-react';


type SubmitButtonProps = {
  className?: string;
  text?: string;
};


export function SubmitButton({
    className="",
    text='submit',
}: SubmitButtonProps) {
    const { pending } = useFormStatus();
    return (
        <Button
        type='submit' 
        className={`capitalize ${className}`}
        size='lg'
        >
           {
              pending ? ( 
              <> <LoaderIcon className='mr-2 h-4 w-4 animate-spin' />
              Please wait...
              </>
              ) :  
              (text)
           }
        </Button>
    )
}

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonImageProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};


export function SubmitButtonImage({
    className = '',
    text = 'submit',
    size = 'lg',
  }: SubmitButtonImageProps) {
    const { pending } = useFormStatus();
    return (
      <Button
        type='submit'
        disabled={pending}
        className={`capitalize ${className}`}
        size={size}
      >
        {pending ? (
          <>
            <LoaderIcon className='mr-2 h-4 w-4 animate-spin' />
            Please wait...
          </>
        ) : (
          text
        )}
      </Button>
    );
  }


  import { SignInButton } from '@clerk/nextjs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className=' p-2 cursor-pointer'
    >
      {pending ? (
        <LoaderIcon className=' animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};


import { LuTrash2, LuSquare } from 'react-icons/lu';

type actionType = 'edit' | 'delete';
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuSquare />;
      case 'delete':
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type='submit'
      size='icon'
      variant='link'
      className='p-2 cursor-pointer'
    >
      {pending ? <LoaderIcon className=' animate-spin' /> : renderIcon()}
    </Button>
  );
};