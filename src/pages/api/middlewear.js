export function middleware( NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: '/about/:path*', 
};