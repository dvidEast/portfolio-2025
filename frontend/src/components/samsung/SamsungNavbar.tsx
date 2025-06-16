import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link"
import Image from 'next/image';

export default function SamsungNavbar() {
    return (
        <nav className="bg-white text-m font-semibold text-black px-10 flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <Link className='hidden sm:inline' href='/'>David Lim</Link>

                <a className='hidden sm:inline' href="https://github.com/dvidEast" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="hover:text-[#1428A0] transition-colors duration-200" />
                </a>

                <a className='hidden sm:inline' href="https://www.linkedin.com/in/daviddlim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-[#1428A0] transition-colors duration-200" />
                </a>

                <a className='hidden sm:inline' href="mailto:daviddlim11@gmail.com" aria-label="Email">
                    <FaEnvelope className="hover:text-[#1428A0] transition-colors duration-200" />
                </a>
            </div>

            <div className="flex items-center">
                <Image
                    src="/samsung/samsung-logo.png"
                    alt="Samsung Logo"
                    width={100}
                    height={30} // realistic height
                    className="w-auto h-auto"
                />
                <p className="text-m font-semibold text-center">Application Portfolio</p>
            </div>
        </nav>
    );
}
