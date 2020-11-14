import Link from 'next/link';

function User() {
  return (
    <>
      <h1>User Page</h1>
      <p>Create One</p>
      <Link href='/users/create'>Go to create users page</Link>

      <p>
        <Link href='/'>Go to Home</Link>
      </p>
    </>
  );
}

export default User;
