import {Navbar} from '../components/Navbar'
export default function Home() {
  return (
    <div className='wrapper'>
      <Navbar />
      <h1>Dyanmic Routes in NextJS Tutorial</h1>
      <p>The protected route is a dynamic route /[username].</p>
      <p>Only users who are logged in have an access to that route.</p>
      <p>Proceed to login page and enter any username (lowercase and at least 4 character).</p>
    </div>
  )
}
