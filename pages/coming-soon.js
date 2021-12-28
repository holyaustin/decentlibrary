import { React } from 'react';
import Navbar from '../components/navbar';

export default function coming() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />
        <div className="md:items-center">
          <center>
            <br />
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">Content Coming Soon</h2>
            <br />
            <br />
          </center>
          <div>
          <center>
          <p> The Library Admin is currently working on the content on this section of the LIBRARY.</p>
          <br />
            <br />
          <ul>
              <li>1. Check back soon.</li>
              <li>2. Suggest a book you want to see in this section.</li>
              <li>3. Read boooks from other sections of the library.</li>
              <li>4. Take the quiz, you earn an Delibrary NFT.</li>
              <li>5. Be part of the community by joining our discord and participation in decisions about the library.</li>
          </ul>
          </center>
          </div>
          <br />
        <br />
        <br />
        </div>
        

      </div>
    </>
  );
}
