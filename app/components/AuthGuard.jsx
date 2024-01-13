// // components/AuthGuard.js
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { SessionProvider } from 'next-auth/react';

// const AuthGuard = (WrappedComponent) => {
//   const WithAuthGuard = (props) => {
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     // If the user is not authenticated, redirect to the login page
//     if (status === 'loading') {
//       return <div>Loading...</div>;
//     }

//     if (!session) {
//       router.push('/login');
//       return null;
//     }

//     // If the user is authenticated, render the wrapped component
//     return <WrappedComponent {...props} />;
//   };

//   return () => (
//     <SessionProvider>
//       <WithAuthGuard />
//     </SessionProvider>
//   );
// };

// export default AuthGuard;
