export const User = ({ users }) => {
  return (
    <>
      {users?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};
