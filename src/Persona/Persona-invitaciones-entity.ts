import {ObjectType,Field,Int} from 'type-graphql'
import {PersonasCount} from '../../prisma/generated/type-graphql'
@ObjectType()
export class PersonasInvitacion {
    
    @Field( _type => PersonasCount,{nullable:true})
    _count?:PersonasCount | null;
}