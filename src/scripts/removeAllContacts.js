import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const allContacts = await readContacts();

  if (allContacts.length === 0) {
    console.log(`Нема контактів для видаленя`);
    return;
  }

  await writeContacts([]);

  console.log(`Всі контакти видалені`);
};

removeAllContacts();
