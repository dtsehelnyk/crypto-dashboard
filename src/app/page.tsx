import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/coins'); // redirect from root page to /coins
}
