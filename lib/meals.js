import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => {
    return setTimeout(resolve, 2000);
  })
  throw Error('Loading meals faild');
  return db.prepare('SELECT * FROM meals').all();
}