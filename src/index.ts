import { db } from './database'
import * as bookQuery from './BookQuery'
import { sql } from 'kysely'

console.log("testing");
main();
function main() {
  console.log("running");

  const AW = db
  .insertInto('Authors')
  .values({
    firstName: 'Andy',
    lastName: 'Weir',
    countryOfOrigin: 'US'
  });

  let AWselect = db.selectFrom('Author')
  .select('AuthorID')
  .where('firstName', '=', 'Andy')
  .execute()

  const PHM = db
  .insertInto('Books')
  .values({
    title: 'Project Hail Mary',
    Author: AWselect,
    isbn: 12345,
    isbn13: '12346'
  })
};
