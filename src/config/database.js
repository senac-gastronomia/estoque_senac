import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';
<<<<<<< HEAD

=======
 
>>>>>>> Gustavo
const conn = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);
<<<<<<< HEAD

export default conn;
=======
 
export default conn;
 
 
>>>>>>> Gustavo
