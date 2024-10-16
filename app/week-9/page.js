import { useUserAuth } from "./_utils/auth-context";
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
console.log('useUserAuth called', context); 
await gitHubSignIn();
await firebaseSignOut();
<p>
  Welcome, {user.displayName} ({user.email})
</p>;