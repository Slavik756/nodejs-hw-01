import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.parse(fileName).dir;
const dirNameOfDirName = path.parse(dirName).dir;

export const PATH_DB = path.join(dirNameOfDirName, 'db/db.json');
