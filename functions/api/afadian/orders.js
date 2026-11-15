// functions/api/afadian/orders.js

import md5 from 'blueimp-md5';

export async function onRequest(context) {
    const apiToken = context.env.AFADIAN_API_KEY;
    const userId = context.env.AFADIAN_USER_ID;

    if (!apiToken || !userId) {
        return Response.json({ error: 'Missing Afdian credentials' }, { status: 500 });
    }

    const ts = Math.floor(Date.now() / 1000);
    const params = JSON.stringify({ page: 1 }); // 按需传参，如 page

    // 签名：api_token + "params" + params + "ts" + ts + "user_id" + user_id
    const signStr = `${apiToken}params${params}ts${ts}user_id${userId}`;

    const sign = md5(signStr);
    //CLOUDFLARE PAGES 实现方法
    //const sign = await md5(signStr);

    const body = {
        user_id: userId,
        params,
        ts,
        sign,
    };

    const resp = await fetch('https://afdian.com/api/open/query-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    const data = await resp.json();
    return Response.json(data);
}