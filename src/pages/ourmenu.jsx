export function OurMenu() {
    return <>
        <section id="menu" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800">Our Menu</h2>
        <p class="mt-4 text-gray-600">From classic blends to adventurous creations.</p>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Menu Item --> */}
          <div class="p-6 bg-white rounded-lg shadow">
            <h3 class="text-xl font-semibold text-green-500">Berry Blast</h3>
            <p class="mt-2 text-gray-600">A refreshing mix of strawberries, blueberries, and raspberries.</p>
          </div>
          {/* <!-- Add more items as needed --> */}
        </div>
      </div>
    </section>
    </>
}