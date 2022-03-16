import { User as MedusaUser } from "@medusajs/medusa/dist";
import { Column, Entity } from "typeorm";
import { Entity as MedusaEntity } from "medusa-extender";

export enum UserRolesExtended {
    SUPER_ADMIN = "super_admin",
    STORE_ADMIN = "store_admin",
    BRANCH_MANAGER = "branch_manager",
    BRANCH_STAFF = "branch_staff",
}

@MedusaEntity({ override: MedusaUser })
@Entity()
export class User extends MedusaUser {
    @Column({ nullable: true, enum: UserRolesExtended})
    role: any;
}
