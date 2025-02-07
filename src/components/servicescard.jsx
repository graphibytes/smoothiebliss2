export function ServiceCard({serviceName,desc,onclick}) {
    return (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg hover:-translate-y-12 hover:border-b-8 hover:border-amber-500">
            <h3 class="text-2xl font-serif font-semibold text-amber-600">{serviceName}</h3>
            <p class="mt-2 text-gray-600 text-lg">{desc}</p>
            <button onClick={onclick} className="mt-4 border-4 border-amber-500 text-amber-500 font-bold text-xl p-4 rounded-lg hover:text-white hover:bg-amber-500">Read More</button>
        </div>
    )
}