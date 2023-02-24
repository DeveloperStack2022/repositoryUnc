import express from "express";
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import 'reflect-metadata'
// Resolvers
import {UserResolver as UserResolver} from './User/user-resolver'
import {Tema_RutaRelationsResolver,InvitacionCrudResolver,InvitacionRelationsResolver,Tema_RutaCrudResolver,PersonasOnInvitacionRelationsResolver,FindManyTema_RutaResolver,TipoReunionCrudResolver,Tipo_RCrudResolver,PersonasCrudResolver,CursosCrudResolver,CursosPersonasCrudResolver,CursosPersonasRelationsResolver} from '../prisma/generated/type-graphql'


import path from 'path'
import {PrismaClient} from '@prisma/client'

interface Context {
  prisma?:PrismaClient
}

async function main(){
  const schema = await buildSchema({
    resolvers:[
      UserResolver,
      FindManyTema_RutaResolver,
      Tema_RutaRelationsResolver,
      InvitacionCrudResolver, 
      InvitacionRelationsResolver,
      Tema_RutaCrudResolver,
      PersonasOnInvitacionRelationsResolver,
      TipoReunionCrudResolver,
      Tipo_RCrudResolver,
      PersonasCrudResolver,
      CursosCrudResolver,
      CursosPersonasCrudResolver,
      CursosPersonasRelationsResolver
    ],
    emitSchemaFile: path.resolve(__dirname,"./schema.graphql"),
    validate:false
  })
  const server = new ApolloServer({
    schema,
    context: ():Context => ({prisma}),
  })
  const app = express();
  
  await server.start()
  server.applyMiddleware({app})
  
  // app.get('/',(req,res) => {
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  // })

  app.listen({port:8000}, () => {
    console.log(`🚀 Server ready and listening at ==> http://localhost:8000${server.graphqlPath}`)
  })
}
export default main;
