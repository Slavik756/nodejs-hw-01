import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {

  const oldContacts = await readContacts();
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const fakeContact = createFakeContact();
    newContacts.push(fakeContact);
  }
  const allContacts = oldContacts;
  for (const contact of newContacts) {
    allContacts.push(contact);
  }

  await writeContacts(allContacts);

  console.log(`${number} contacts successfully added`);
};

generateContacts(2);
