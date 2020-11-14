import Link from 'next/link';

function CreateUser() {
  return (
    <>
      <h1>Create User</h1>
      <Link href='/users'>Go to users page</Link>
    </>
  );
}

export default CreateUser;
