import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const total = contacts.length;

    console.log(`Загальна кількість контактів: ${total}`);
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
  }
};

console.log(await countContacts());
