import { PrismaClient } from '@prisma/client'
import {Resolver,Query,Mutation,Ctx,Arg} from 'type-graphql'
import {PersonasOnInvitacion} from '../../prisma/generated/type-graphql'

interface Context {
    prisma: PrismaClient
}


@Resolver()
export class PersonasOnInvitacionResolver {
    @Mutation(() => PersonasOnInvitacion)
    async createPersonasOnInvitacion(@Ctx() {prisma}:Context,@Arg('invitacionId') invitacionId:number,@Arg('personaId') personaId:number):Promise<any> {
        return await prisma.personasOnInvitacion.create({
            data:{
                assignedBy:"",
                Personas:{
                    connect:{
                        id:personaId
                    }
                },
                Invitacion:{
                    connect:{
                        id:invitacionId
                    }
                }
            }
        })
    }
}