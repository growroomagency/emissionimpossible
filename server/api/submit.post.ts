import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (event) => {
    const body = await readBody<ResultedState>(event);

    if (
        body != null && 
        typeof (body.email) == 'string' && 
        typeof (body.username) == 'string' && 
        typeof (body.score) == 'number' && 
        body.email.length > 0 && 
        body.email.length <= 512 && 
        body.username.length > 0 && 
        body.username.length <= 512 && 
        body.score >= 0 && 
        body.score <= 10 && (
            body.url == null || (
                body.url.length > 0 && 
                body.url.length <= 512
            )
        )
    ) {
        const { error } = await supabase.from('guests').upsert({
            'email': body.email,
            'username': body.username,
            'score': body.score,
            'url': body.url ?? undefined,
        }, {
            onConflict: 'email,username'
        });

        console.log(error)
    } else {
        console.log('incorrect input');
        console.dir(JSON.stringify(body));
    }
});