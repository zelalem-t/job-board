import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import { createNewCompany } from "../actions/serveractions";

export default async function NewJob(){
    const {user} = await getUser();
    const workos = new WorkOS(process.env.WORKOS_API_KEY);

    async function handleOrganizationSubmit(data:FormData) {
        'use server';
        if(user){
            await createNewCompany(data.get('companyName') as string, user.id);
        }
         

    }
    if(!user){
        return(
            <div>You need to be loged in to add a new job</div>
        );
    }
    const companyMemberShips = await workos.userManagement.listOrganizationMemberships({userId:user.id})||null
    return(

        <div className="container">
         <pre>
         
        </pre> 
        {user &&(
            <div>

                <h2 className="text-lg mt-6">Add a New Job</h2>
                <p className="text-sm text-gray-500 mb-2">Select a company to add a job post</p>
                <div className="border border-blue-200 bg-blue-100 p-4 rounded-md">
                    
                    No campanies found for this user.
                </div>
                <h2 className="text-lg mt-6">Create a new company</h2>
                <p className="text-gray-500 text-sm mb-2">To create a job first you need to register a company</p>
                <form action= {handleOrganizationSubmit}
                className="flex gap-2">

                <input type= "text" 
                name="companyName"
                className="border border-blue-400 w-full py-2 px-3 rounded-md"
                placeholder="Company name"/>
                <button className="bg-gray-400  py-2 px-4 rounded-md">Create Company</button>
                </form>
            </div>
        )}
        
        </div>
        
    );
}