import Link from "next/link"

export default function Navbar() {
    return (
        <nav className={'mt-10 pl-10 pr-10 flex flex-row justify-between items-center'}>
            <Link href='/'>DAVID LIM</Link>

            <div className={'flex flex-row items-center gap-4'}>
                <Link href='art'>ART</Link>
                <a target="_blank" href="https://drive.google.com/drive/folders/1xjqC2a8Qb7t931TGmHaiyF_ox69FhAxV?usp=sharing">RESUME</a>
                {/* <div></div> */}
            </div>
        </nav>
    )
}