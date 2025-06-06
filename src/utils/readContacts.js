import { PATH_DB } from '../constants/contacts.js';

import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
   const dbContent = await fs.readFile(PATH_DB, { encoding: 'utf-8' });

    if (!dbContent) return [];

    const parsedDbContent = JSON.parse(dbContent);

    return Array.isArray(parsedDbContent) ? parsedDbContent : [];

  } catch (err) {
    console.log(err.message);
  }
};
