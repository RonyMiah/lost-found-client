import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AuthRoutes = ['/login', '/register'];
const commonPrivateRoutes = [
  '/viewlostitems',
  '/viewfounditems',
  '/myprofile',
  '/lostitems',
  '/founditems',
  '/mylostitems',
  '/myfounditems',
  '/myprofile/changepassword',
  '/myprofile/edit',
];

const roleBasePrivetRoutes = {
  // SUPPER_ADMIN
  ADMIN: [/^\/dashboard\/admin/],
  //   USER: [/^\/dashboard\/admin/],
};

type TRole = keyof typeof roleBasePrivetRoutes;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname, '==================');

  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  //check common routes
  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role = decodedData?.role;
  console.log(role, 'Role ....');

  //   if (role === 'ADMIN' && pathname.startsWith('/dashboard/admin')) {
  //     return NextResponse.next();
  //   }

  //Check Role Base Route
  if (role && roleBasePrivetRoutes[role as TRole]) {
    const routes = role && roleBasePrivetRoutes[role as TRole];
    if (routes.some((route: any) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/register ',
    '/dashboard/:page*',
    '/viewlostitems',
    '/viewfounditems',
    '/myprofile',
    '/lostitems',
    '/founditems',
    '/mylostitems',
    '/myfounditems',
  ],
};
