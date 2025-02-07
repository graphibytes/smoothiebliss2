import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function SocialButtons() {
    return (
        <div class="grid grid-cols-2 my-8 items-center  h-full">
            <a href="https://www.facebook.com/mike.mwai.393/" target="_blank" rel="noopener noreferrer">
                <button
                    class="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-xl px-12 py-5 text-center mr-2 mb-2"
                    type="button"
                >
                    <div className="flex align-middle items-center">
                        <FaFacebook />
                        <p className="pl-4">Facebook</p>
                    </div>
                    </button>
            </a>
            {/* WHATSAPP BUTTON LINK */}
            <a href="http://wa.me/254746396308" target="_blank" rel="noopener noreferrer">
                    <button
                    class="text-white  bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-xl px-12 py-5 text-center mr-2 mb-2"
                    type="button">
                    <div className="flex align-middle items-center">
                            <FaWhatsapp/>
                            <p className="pl-4">Whatsapp</p>
                    </div>
                </button>
            </a>
            {/* YOUTUBE CHANNEL LINK */}
            <a href="http://youtube.com/@graphibytes" target="_blank" rel="noopener noreferrer">
                <button
                    class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-xl px-12 py-5 text-center mr-2 mb-2"
                    type="button">
                <div className="flex align-middle items-center">
                            <FaYoutube/>
                            <p className="pl-4">Youtube</p>
                    </div>
                </button>
            </a>
            {/* X ACCOUNT LINK */}
            <a href="http://x.com/devmikemwai" target="_blank" rel="noopener noreferrer">
                <button
                    class="text-white bg-gradient-to-r from-black via-gray-700 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-400/50 dark:shadow-lg dark:shadow-gray-800/80 font-bold rounded-lg text-xl px-12 py-5 text-center mr-2 mb-2"
                    type="button">
                   <div className="flex align-middle items-center">
                            <FaXTwitter/>
                            <p className="pl-4">x/twitter</p>
                    </div>
                </button>
            </a>
            {/* INSTAGRAM LINK */}
            <a href="https://www.instagram.com/graphibytes/" target="_blank" rel="noopener noreferrer">
                <button
                    class="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-bold rounded-lg text-xl px-12 py-5 text-center mr-2 mb-2"
                    type="button">

                    <div className="flex align-middle items-center">
                            <FaInstagram/>
                            <p className="pl-4">Instagram</p>
                    </div>
                </button>
            </a>
            {/* LINKED IN */}
            <a href="https://www.linkedin.com/in/michael-mwai-606a4529a/" target="_blank" rel="noopener noreferrer">
                <button
                    class="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-xl px-12 py-5 text-center mr-2 mb-2"
                    type="button"
                >
                    <div className="flex align-middle items-center">
                        <FaLinkedinIn />
                        <p className="pl-4">Linked In</p>
                    </div>
                    </button>
            </a>
            
        </div>

    );
}