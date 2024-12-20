import { NextResponse } from 'next/server';


export const dynamic = 'force-dynamic'; // Otherwise, Next.js will cache this handler's output


export async function GET(req, res) {

    // 获取 x-forwarded-for 头，它可能包含多个IP地址
    const forwardedFor = req.headers.get('x-forwarded-for');
    // 获取 x-real-ip 头
    const realIp = req.headers.get('x-real-ip', undefined);
    // 获取连接的远程地址
    const remoteAddress = req.sock ? req.sock.remoteAddress : undefined;

    // 处理 x-forwarded-for 头，取第一个IP地址
    const forwardedIp = forwardedFor ? forwardedFor.split(',')[0].trim() : undefined;

    // 确定最终的客户端IP地址
    const clientIp = forwardedIp || realIp || remoteAddress;

    return new NextResponse(clientIp, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}