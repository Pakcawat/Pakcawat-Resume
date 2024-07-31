import Image from 'next/image'

export default function Profile_first() {
  return (
    <div className="describe">
      <Image src={`/Pakcawat-Resume/assets/profile.jpg`} width="500" height="500" className='image' />



      <h3>Pakcawat Issarawisarnpol</h3>
      <p>Computer Engineering from Thammasat University</p>
      <div className="share">
        <div className="address">Khlong 3 Rangsit nakhon nayok , Pathum Thani 12150 </div>
        <div className="tel">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-12 w-12" >
          <path fill-rule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clip-rule="evenodd" />
        </svg><a href="tel:+66618368168" > 061-836-8168</a></div>
        <div className="email">                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-12 w-12">
          <path fill-rule="evenodd" d="M1.756 4.568A1.5 1.5 0 0 0 1 5.871V12.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5V5.87a1.5 1.5 0 0 0-.756-1.302l-5.5-3.143a1.5 1.5 0 0 0-1.488 0l-5.5 3.143Zm1.82 2.963a.75.75 0 0 0-.653 1.35l4.1 1.98a2.25 2.25 0 0 0 1.955 0l4.1-1.98a.75.75 0 1 0-.653-1.35L8.326 9.51a.75.75 0 0 1-.652 0L3.575 7.53Z" clip-rule="evenodd" />
        </svg><a href="mailto:pakcawat.iss@gmail.com" >
            pakcawat.iss@gmail.com</a></div>
        <a href="https://github.com/Pakcawat" ><Image src={`/Pakcawat-Resume/assets/Github.png`} width="500" height="500" className='github' />
        </a>
        <a href="https://line.me/ti/p/5ovO1GsjEE"><Image src={`/Pakcawat-Resume/assets/LINE.png`} width="500" height="500" className='line' /></a>
      </div>

    </div>
  );
}