import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
}

function FormInput({
    label,
    name,
    type,
    defaultValue,
    placeholder,
}: FormInputProps) {
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>
                   {label || name }
            </Label>
            <Input id={name} name={name} defaultValue={defaultValue}
                    placeholder={placeholder} type={type}
                    required
            />   
        </div>  
    )


}

export default FormInput;

