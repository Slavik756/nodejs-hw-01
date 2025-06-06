import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
      console.log(`Всі твои контакти тут:`);

  return await readContacts();
};

console.log(await getAllContacts());
