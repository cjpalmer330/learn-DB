import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from 'kysely'
//import pg from pg

// all the tables created
export interface Database {
  Books: BooksTable
  Authors: AuthorsTable
}

export interface BooksTable{
  id: Generated<number>
  title: string
  isbn: number
  isbn13: string
  AuthorID: number
}

export interface AuthorsTable{
  id: Generated<number>
  firstName: string
  lastName: string
  countryOfOrigin: string | null
}

export type SelectBook = Selectable<BooksTable>
export type NewBook = Insertable<BooksTable>
export type UpdateBook = Updateable<BooksTable>

export type SelectAuthor = Selectable<AuthorsTable>
export type NewAuthor = Insertable<AuthorsTable>
export type UpdateAuthor = Updateable<AuthorsTable>

