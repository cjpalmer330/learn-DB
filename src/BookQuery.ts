import { db } from './database'
import { NewBook, UpdateBook, SelectBook, NewAuthor, SelectAuthor} from './types'

export async function findBookByTitle(title: string){
  return await db.selectFrom('Books').
  where('title', '=', "Project Hail Mary").selectAll().execute()
}

//generic function that we can call anytime we want to insert a new book
//into the database with unique values
export async function addBook(Books: NewBook){
  return await db.insertInto('Books')
  .values(Books)
  .returningAll()
  .executeTakeFirstOrThrow()
}

export async function addAuthor(Authors: NewAuthor){
  return await db.insertInto('Authors')
  .values(Authors)
  .returningAll()
  .executeTakeFirstOrThrow()
}

export async function findAuthorByLast(firstName: string, lastName: string){
  return await db.selectFrom('Authors')
  .where('lastName', '=', lastName)
  .where('firstName', '=', firstName)
  .selectAll()
  .executeTakeFirstOrThrow()
}
