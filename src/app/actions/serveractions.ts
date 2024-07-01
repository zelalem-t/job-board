'use server';
import { WorkOS } from "@workos-inc/node";


const workos = new WorkOS(process.env.WORKOS_API_KEY);
export async function createNewCompany(compName:string, id:string){
    const org = await workos.organizations.createOrganization({name:compName });
   return  await workos.userManagement.createOrganizationMembership({
        organizationId: org.id,
        userId: id,
        roleSlug: "admin",
    });
}