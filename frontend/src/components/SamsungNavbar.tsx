import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link"


export default function SamsungNavbar() {
    return (
        <nav className={'mt-10 pl-10 pr-10 flex flex-row justify-between items-center bg-white text-black'}>
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

            <div className={'flex flex-row items-center gap-4'}>
                {/* <Link href='art'>ART</Link> */}
                {/* <a href="https://vsco.co/dvidlimm/gallery#google_vignette" target="_blank" rel="noopener noreferrer" aria-label="Vsco">ART</a> */}
                <Link href="/art">ART</Link>
                <a target="_blank" href="https://drive.google.com/drive/folders/1xjqC2a8Qb7t931TGmHaiyF_ox69FhAxV?usp=sharing">RESUME</a>
            </div>
        </nav>
    )
}