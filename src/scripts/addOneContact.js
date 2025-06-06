import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
     const oldContacts = await readContacts();

  const newContact = createFakeContact();

  const allContacts = oldContacts;
  allContacts.push(newContact);

  await writeContacts(allContacts);
    console.log('Один контакт успішно додано:', newContact);
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error.message);
  }
};

addOneContact();
