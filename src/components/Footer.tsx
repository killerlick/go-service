import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white text-center p-4">

            <div className="flex flex-row items-center justify-center gap-1.5">
                <div className="bg-gray-600 p-2 rounded-xl">
                    <a href="https://www.linkedin.com/in/malick-ibrahim-546a1b253/">
                        <FaTwitter size={24} />
                    </a>
                </div>
                <div className="bg-gray-600 p-2 rounded-xl">
                    <a href="https://www.linkedin.com/in/malick-ibrahim-546a1b253/">
                        <FaFacebookF size={24} />
                    </a>
                </div>
                <div className="bg-gray-600 p-2 rounded-xl">
                    <a href="https://www.linkedin.com/in/malick-ibrahim-546a1b253/">
                        <FaInstagram size={24} />
                    </a>
                </div>
                <div className="bg-gray-600 p-2 rounded-xl">
                    <a href="https://www.linkedin.com/in/malick-ibrahim-546a1b253/">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center gap-1.5'>
                <Link href="/about" className="hover:underline">
                               A propos
                </Link>
 
            </div>

        </footer>
    )
}