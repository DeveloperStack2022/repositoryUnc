import {ObjectType,Field,ID,Int} from 'type-graphql'

@ObjectType({description:"The User model"})
export class User {
    @Field(() =>Int )
    id:number;
    @Field( () => String)
    username: string;
    @Field(() => String)
    nombres:string;
    @Field()
    password:string;

   
}