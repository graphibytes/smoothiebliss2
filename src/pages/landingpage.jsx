import smoothie from '../assets/smoothie.png'


export function LandingPage() {
    return <div className="flex lg:flex-row w-full flex-col-reverse  pr-10 overflow-hidden items-center bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
        {/* WELCOME NOTE */}

        <div className="basis-1/2 ml-10">
            <h1 className="text-8xl text-white  align-middle font-serif font-black">Welcome to Smoothie Bliss</h1>
            <p className="text-xl text-white font-semibold max-w-4xl">where every sip is a burst of flavor and freshness! Indulge in our handcrafted smoothies, made with the finest fruits and wholesome ingredients, blended to perfection just for you. Whether you're craving a healthy boost or a delicious treat, we’ve got the perfect smoothie to brighten your day!</p>
        </div>

        {/* SMOOTHIE IMAGE */}
        <div className="basis-1/2">
            <img src={smoothie} alt="" />
        </div>
        
    </div>
}