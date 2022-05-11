import { Pool } from 'pg';

const connectionString = 'postgres://hxyfiadg:wW_IE5G_zq7TEvHvs7f_VMIdQWbaEsaZ@motty.db.elephantsql.com/hxyfiadg';

const db = new Pool({ connectionString });

export default db;
