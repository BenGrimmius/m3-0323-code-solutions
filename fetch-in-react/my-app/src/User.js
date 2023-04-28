/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function FetchUser() {
       fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
      .catch(e => {
        setError(e)
      })
      .finally(
        setIsLoading(false)
      )}
    FetchUser()
  }, [userId])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      {user && <UserCard user={user} />}
    </div>
  );
}
