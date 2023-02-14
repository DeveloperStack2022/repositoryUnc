import {Resolver,Mutation,Query,Arg} from 'type-graphql'
import {User} from './user-entity'
import {prisma} from '../lib/prisma'

@Resolver() 
export class UserResolver {

    @Query((_returns) => User,{nullable:false})
    async returnSingleUser(@Arg('id') id:number ){
        const single_user = await prisma.user.findUnique({where:{
            id: id
        }})
        return single_user
    }

    @Query(() => [User])
    async returnsAllUsers(){
        const all_users = await prisma.user.findMany()
        return all_users
    }
    
    @Mutation((_returns) => User)
    async createUser(@Arg('nombres') nombres:string,@Arg('username') username:string,@Arg('password') password:string) {
        const create_user = await prisma.user.create({data:{
            nombres:nombres,
            password:password,
            username:username,
        }})
       return {
           id: create_user.id,
           username: create_user.username,
           nombres: create_user.nombres,
       }
    }
    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id:number){
        const user_delete = await prisma.user.update({where:{id:id},data:{
            disabled:true
        }})

        if (user_delete) return true;
        return false;
    }
}