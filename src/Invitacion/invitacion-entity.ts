import {ObjectType,Field,ID,Int} from 'type-graphql'

@ObjectType({description:"The Invitacion model"})
export class Invitacion {
    @Field(() => Int)
    id:number;
    @Field(() => String)
    lugar:string;
    @Field(()=> String)
    N_Documento:string;
    @Field(()=> String)
    F_Recepcion:string;
    
}