import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (contacts) => {
  try {
    const dataToWrite = JSON.stringify(contacts, null, 2); 
    await fs.writeFile(PATH_DB, dataToWrite, { encoding: 'utf-8' });
  } catch (err) {
    console.error('Помилка при записі файлу:', err.message);
  }
};
