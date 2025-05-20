import Link from 'next/link';
import { useState } from 'react';
import '../styles/globals.css';

export default function NavBar(): React.JSX.Element {
  const [showTakeAction, setShowTakeAction] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
<nav className="p-4 shadow-md bg-white flex gap-4 border-b relative">
      <Link href="/">Home</Link>

      <div
        className="relative"
        onMouseEnter={() => setShowTakeAction(true)}
        onMouseLeave={() => setShowTakeAction(false)}
      >
        <span className="cursor-pointer">Take Action</span>
        <div className="absolute"
          onMouseEnter={() => setShowTakeAction(true)}
          onMouseLeave={() => setShowTakeAction(false)}
        >
          {showTakeAction && (
            <div className="bg-white border shadow-md mt-2 p-2 flex flex-col">
              <Link href="/take-action/send-postcard">Send a Postcard</Link>
              <Link href="/take-action/submit-testimonial">Submit a Testimonial</Link>
              <Link href="/take-action/donate">Donate</Link>
            </div>
          )}
        </div>
      </div>

      <Link href="/blog">Blog</Link>

      <div
        className="relative"
        onMouseEnter={() => setShowAbout(true)}
        onMouseLeave={() => setShowAbout(false)}
      >
        <span className="cursor-pointer">About Us</span>
        <div className="absolute"
          onMouseEnter={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          {showAbout && (
            <div className="bg-white border shadow-md mt-2 p-2 flex flex-col">
              <Link href="/about/mission">Our Mission</Link>
              <Link href="/about/contact">Contact Us</Link>
              <Link href="/about/join">Join Us</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}