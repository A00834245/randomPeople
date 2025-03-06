'use client';
import { usePeopleApi } from "./hooks/usePeopleApi";

export default function Home() {

  const { currentPerson, error, loading } = usePeopleApi()

  if (error) return <div>Error loading data</div>; 
  if (loading) return <div>Loading...</div>; 

  return (
    <pre>{JSON.stringify(currentPerson, null, 2)}</pre>
  );
}
