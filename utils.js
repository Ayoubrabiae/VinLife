import { auth } from "./api";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.replace(
        `/login?message=You must be singed in first${
          pathname && "&redirectTo=" + pathname
        }`
      );
    }
  });

  // if (!auth.currentUser) {
  //   throw redirect(
  //     `/login?message=You must be singed in first${
  //       pathname && "&redirectTo=" + pathname
  //     }`
  //   );
  // }
}
