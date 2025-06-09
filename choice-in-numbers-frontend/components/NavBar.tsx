import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import '../styles/globals.css';
import logo from '../resources/logo.png';
import Chevron from '../components/Chevron';

export default function NavBar(): React.JSX.Element {
  const [showTakeAction, setShowTakeAction] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <nav className="bg-white flex gap-2 relative items-center p-2 pr-4">
      {/* title and logo */}
      <Link href="/" className='font-bold text-base text-accent-dark flex flex-row items-center gap-2'>
        <Image src={logo} alt="Logo" className="h-12 w-14" />
        CHOICE IN NUMBERS
      </Link>

      {/* gap */}
      <div className="flex-grow"></div>

      {/* nav */}
      <div className="gap-8 flex flex-row">
        {/* nav: take action */}
        <div
          className="relative"
          onMouseEnter={() => setShowTakeAction(true)}
          onMouseLeave={() => setShowTakeAction(false)}
        >
          <span className="cursor-pointer font-bold text-accent-dark inline-flex gap-1">
            Take Action
            { showTakeAction ? <Chevron Color="accent-dark" Orientation='up' /> : <Chevron Color="accent-dark" Orientation='down' />}
          </span>
          <div className="absolute right-0"
            onMouseEnter={() => setShowTakeAction(true)}
            onMouseLeave={() => setShowTakeAction(false)}
          >
          {showTakeAction && (
            <div className="bg-grey-pale shadow-md mt-2 p-2 flex flex-col w-36">
              <Link href="/take-action/send-postcard">Send a Postcard</Link>
              <Link href="/take-action/submit-testimonial">Submit a Testimonial</Link>
              <Link href="/take-action/donate">Donate</Link>
            </div>
          )}
          </div>
        </div>

        {/* nav: blog */}
        <div>
          <Link href="/blog" className="font-bold text-accent-dark">Blog</Link>
        </div>

        {/* nav: about us */}
        <div
          className="relative"
          onMouseEnter={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          <span className="cursor-pointer font-bold text-accent-dark inline-flex gap-1">
            About Us
            { showAbout ? <Chevron Color="accent-dark" Orientation='up' /> : <Chevron Color="accent-dark" Orientation='down' />}
          </span>
          
          <div className="absolute right-0"
            onMouseEnter={() => setShowAbout(true)}
            onMouseLeave={() => setShowAbout(false)}
            >
            {showAbout && (
              <div className="bg-grey-pale shadow-md mt-2 p-2 flex flex-col w-36">
                <Link href="/about/about">Our Mission</Link>
                <Link href="/about/contact">Contact Us</Link>
                <Link href="/about/join">Join Us</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}