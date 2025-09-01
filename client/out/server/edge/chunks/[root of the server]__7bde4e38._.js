(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__7bde4e38._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:assert [external] (node:assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[project]/lib/firebase/admin.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "adminAuth": (()=>adminAuth),
    "verifyIdToken": (()=>verifyIdToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$2f$lib$2f$esm$2f$app$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase-admin/lib/esm/app/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$2f$lib$2f$esm$2f$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase-admin/lib/esm/auth/index.js [middleware-edge] (ecmascript)");
;
;
// Initialize Firebase Admin SDK
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$2f$lib$2f$esm$2f$app$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getApps"])().length) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$2f$lib$2f$esm$2f$app$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["initializeApp"])({
        credential: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$2f$lib$2f$esm$2f$app$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cert"])({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        })
    });
}
const adminAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$2f$lib$2f$esm$2f$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAuth"])();
async function verifyIdToken(token) {
    try {
        const decodedToken = await adminAuth.verifyIdToken(token);
        return decodedToken;
    } catch (error) {
        console.error('Error verifying token:', error);
        throw new Error('Invalid token');
    }
}
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/admin.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Check if the request is for admin routes or protected API routes
    const isAdminRoute = pathname.startsWith('/admin');
    const isProtectedApiRoute = pathname.startsWith('/api/upload-image') || pathname.startsWith('/api/delete-image');
    // Allow login page to pass through
    if (pathname === '/admin/login') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // For admin routes and protected API routes, check authentication
    if (isAdminRoute || isProtectedApiRoute) {
        // Get the Firebase ID token from cookies
        const token = request.cookies.get('firebase-auth-token')?.value;
        if (!token) {
            // Redirect to login for admin routes
            if (isAdminRoute) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/login', request.url));
            }
            // Return 401 for API routes
            if (isProtectedApiRoute) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Unauthorized'
                }, {
                    status: 401
                });
            }
        }
        // Verify the token using Firebase Admin SDK
        try {
            const decodedToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$admin$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyIdToken"])(token);
            if (!decodedToken) {
                throw new Error('Invalid token');
            }
        } catch (error) {
            if (isAdminRoute) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/login', request.url));
            }
            if (isProtectedApiRoute) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid token'
                }, {
                    status: 401
                });
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/admin/:path*',
        '/api/upload-image',
        '/api/delete-image'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7bde4e38._.js.map