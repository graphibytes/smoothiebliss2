import { ServiceCard } from "../components/servicescard"

export function Services() {
  const servicesData = [
  {
    title: "Custom Smoothies",
    desc: "Craft your perfect smoothie by choosing from a wide selection of fresh fruits, creamy bases, nutritious add-ins, and sweeteners. Whether you’re going for a post-workout boost, a morning energizer, or just a delightful treat, we’ll blend it to your taste!"
  },
  {
    title: "Event Catering",
    desc: "Add a splash of flavor to your events! We cater for parties, corporate meetings, weddings, and special gatherings with our signature smoothies. Impress your guests with our refreshing, vibrant drinks tailored to match your event's theme and vibe."
  },
  {
    title: "Daily Specials",
    desc: "Every day is a surprise! Explore our unique daily creations featuring seasonal fruits, trending flavors, and exclusive blends. Stop by and discover what’s on today’s menu—you might just find your new favorite!"
  },
];

      
    
    return <>
    <section id="services" class="py-16 bg-white">
      <div class=" flex flex-col mx-auto px-6 ">
        <h2 class="text-6xl font-serif font-bold text-gray-800">Our Services</h2>
        <p class="mt-4 text-xl text-gray-600">We blend taste and health into every sip!</p>
          {/* SERVICES CARD MAP */}
          <div className="flex flex-col lg:flex-row mt-6 gap-5 justify-center text-center">
            {servicesData.map((service, index) =>
                <ServiceCard key={index}   serviceName={service.title} desc={service.desc} />     
          )}
          </div>
          
      </div>
    </section>
    </>
    
}