import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.css';

import { ClerkProvider, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'

import CustomButton from '../components/button/button'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  return (
    <ClerkProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Home</h1>
        <CustomButton children={'Hallo Welt'} />
      </main>
      <footer>

      </footer>
    </ClerkProvider>
  )
}
