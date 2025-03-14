export function EmailForm() {
    return (
            <div class="container px-4 w-full">
            <div class="mx-auto">
                <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <form>
                    <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                    <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                        placeholder="Enter your name"
                        type="text"
                    />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="email">Your Email</label>
                    <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        type="email"
                    />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="message"
                        >Your Message</label
                    >
                    <textarea
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                        rows="4"
                        placeholder="Enter your message"
                        name="message"
                        id="message"
                    ></textarea>
                    </div>
                    <button
                    class="w-full bg-amber-500 text-gray-800 py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300"
                    type="submit"
                    >
                    Send Message
                    </button>
                </form>
                </div>
            </div>
            </div>

    );
}