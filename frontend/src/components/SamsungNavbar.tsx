        import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link"
import Image from 'next/image';

export default function SamsungNavbar() {
    return (
        <nav className={'bg-black pl-10 pr-10 flex flex-row justify-between items-center bg-white text-black'}>
            <div className="flex gap-4 items-center">

                <Link href='/'>DAVID LIM</Link>

                <a href="https://github.com/dvidEast" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="hover:text-white transition-colors duration-200" />
                </a>

                <a href="https://www.linkedin.com/in/daviddlim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-white transition-colors duration-200" />
                </a>

                <a href="mailto:daviddlim11@gmail.com" aria-label="Email">
                    <FaEnvelope className="hover:text-white transition-colors duration-200" />
                </a>
            </div>

            <div className={'flex flex-row items-center'}>
                {/* <Link href='art'>ART</Link> */}
                {/* <a href="https://vsco.co/dvidlimm/gallery#google_vignette" target="_blank" rel="noopener noreferrer" aria-label="Vsco">ART</a> */}
                {/* <Link href="/">WEBSITE HOME</Link> */}
                {/* <a target="_blank" href="https://drive.google.com/drive/folders/1xjqC2a8Qb7t931TGmHaiyF_ox69FhAxV?usp=sharing">RESUME</a> */}
                <Image
                    src="/samsung/samsung-logo.png" // or .svg, whatever the extension is
                    alt="Samsung Logo"
                    width={130}
                    height={10} 
                    className="text-[#1428A0]" // text color only affects text, not images
                />

                Application Portfolio
            </div>
        </nav>
    )
}