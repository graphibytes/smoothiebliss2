export function RatingCard({src,username,rating,desc}) {
    return (
        <div className="flex flex-col items-center w-auto rounded-xl shadow-lg py-4">
            {/* IMAGE */}
            <img className="w-1/2 rounded-full h-64 object-cover mb-4" src={src} alt={username} />
            {/* NAME */}
            <p className="font-semibold text-lg">{username}</p>
            {/* Rating stars */}
            <div className="flex">{rating}</div>
            <p className="text-gray-700">{desc}</p>
        </div>
    )
}