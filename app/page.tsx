import Hero from "@/components/sections/Hero";
import SoftwareGrid from "@/components/sections/SoftwareGrid";
import Services from "@/components/sections/Services";
import ProjectStats from "@/components/sections/ProjectStats";
// import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactForm from "@/components/sections/ContactForm";
import Blog from "@/components/sections/blog";
import BlogSection from "@/components/sections/blog";
import ClientMarquee from "@/components/sections/client";
import Achievements from "@/components/sections/achivements";
import Footer from "@/components/sections/footer";
import WhyProsperousScrubber from "@/components/sections/why";

export default function Home() {
  
  return (
    <main>
      <Hero /> {/* No ID needed as it's at the top */}
      
      {/* <section id="software">
        <SoftwareGrid />
      </section> */}
      <section id="why">
        <WhyProsperousScrubber/>
      </section>

      <section id="services">
        <Services />
      </section>

       <section id="client">
        <ClientMarquee/>
      </section>

      <section id="experience">
        <ProjectStats />
      </section>

       

      <section id="blog">
        <BlogSection/>
      </section>

       <section id="achivements">
        < Achievements/>
       </section>
      

      <section id="contact" className="py-24 bg-slate-50">
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Get a Technical Quote</h2>
            <p className="text-slate-600 mt-4">Submit your project details for review.</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <section id="footer">
        <Footer/>
       </section>
    </main>
  );
}