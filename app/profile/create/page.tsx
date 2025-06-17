import { createProfileAction } from "@/app/utils/action";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



// const createProfileAction = async (prevState:any, formData:FormData,) => {
//     'use server'
//     const firstName = formData.get('firstName') as string;
//     if(firstName !== 'shakeAndBake') return { message: "There was an error"}
//     return {message:"Profile Created"}
// }

export default async function CreateProfile() {
    const user = await currentUser();
   
    if (user?.privateMetadata?.hasProfile) {
        redirect('/');
    }else{
        return (
            <section className="px-4 py-4">
                <h1 className="text-2xl mb-8 font-semibold captitalize ">New User</h1>
                <div className="border p-8 rounded-md">
                    <FormContainer action={createProfileAction}>
                        <div className="grid md:grid-cols-2 gap-4 mt-4 max-w-screen-lg ">
                            <FormInput type="text" label="First Name" name="firstName"/>
                            <FormInput type='text' name='lastName' label='Last Name' />
                            <FormInput type='text' name='username' label='Username' />
                        </div>
                        <SubmitButton text='Create Profile' className='mt-8' />
                    </FormContainer>
                </div>
    
            </section>
        )
    }

    
}