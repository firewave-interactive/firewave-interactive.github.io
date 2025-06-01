import { serve } from 'bun';
import indexHtml from './index.html';

serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);

        if (url.pathname === '/') {
            return new Response(indexHtml, {
                headers: { 'Content-Type': 'text/html' },
            });
        }

        if (url.pathname === '/hello') {
            return new Response('Hello, Bun!');
        }

        if (url.pathname === '/json') {
            return new Response(JSON.stringify({ message: 'Hello, JSON!' }), {
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (url.pathname === '/text') {
            return new Response('Hello, Text!', {
                headers: { 'Content-Type': 'text/plain' },
            });
        }

        // Serve static files from the "public" directory
        if (url.pathname.startsWith('/static/')) {
            try {
                const file = Bun.file(`./public${url.pathname.replace('/static', '')}`);
                if (await file.exists()) {
                    return new Response(file);
                }
            } catch {}
        }

        // 404 Not Found
        return new Response('Not Found', { status: 404 });
    },
});
