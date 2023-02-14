import {Resolver,Mutation,Query,Arg,Ctx} from 'type-graphql'
import {Personas,PersonasRelationsResolver} from '../../prisma/generated/type-graphql'
import {PrismaClient} from '@prisma/client'

interface Context {
    prisma: PrismaClient
}

@Resolver(of => Personas)
export class PersonasResolvers{
    @Query(() => Personas)
    async getNumeroDeReunionesAlMesForId(@Ctx() {prisma}: Context,@Arg('id',{description:"id de la persona"}) id:number){
        return await prisma.personas.findUnique({where:{
            id:id
        },include:{
            _count:true
        }})
    }
}  