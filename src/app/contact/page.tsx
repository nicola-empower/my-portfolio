"use client";

import { FaGlobe, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = ({ icon, title, text, href }: { icon: React.ReactElement, title: string, text: string, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group transition-all duration-300">
        <div className="text-primary text-3xl group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-text-muted group-hover:text-secondary transition-colors">{text}</p>
        </div>
    </a>
);

export default function ContactPage() {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Get in <span className="text-primary">Touch</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="flex flex-col gap-8 justify-center">
                    <p className="text-lg text-text-muted">Have a question or want to work together? Drop me a message!</p>
                    <ContactInfo icon={<FaGlobe />} title="Virtual Assistant Website" text="empowervaservices.co.uk" href="https://empowervaservices.co.uk" />
                    <ContactInfo icon={<FaGlobe />} title="Automation Website" text="empowerautomation.co.uk" href="https://empowerautomation.co.uk" />
                    <ContactInfo icon={<FaGlobe />} title="Web Developer Website" text="empowerdigitalsolutions.co.uk" href="https://empowerdigitalsolutions.co.uk" />
                    <ContactInfo icon={<FaEnvelope />} title="Email" text="nicola@empowervaservices.co.uk" href="mailto:nicola@empowervaservices.co.uk" />
                    <ContactInfo icon={<FaLinkedin />} title="LinkedIn" text="Connect With Me On LinkedIn" href="https://www.linkedin.com/in/empowervaservices/" />
                    <ContactInfo icon={<FaGithub />} title="Github" text="Check Out My GitHub" href="https://github.com/nicola-empower" />
                    <ContactInfo icon={<FaMapMarkerAlt />} title="Location" text="Falkirk, Scotland" href="#" />
                </div>

                {/* --- UPDATED FORM --- */}
                <form 
                  action="https://formspree.io/f/mblkwkpp" // FORMPSREE URL 
                  method="POST" 
                  className="flex flex-col gap-4 p-8 bg-gray-800/50 rounded-lg border border-accent/30"
                >
                    {/* Each input now has a 'name' attribute so Formspree can label the data */}
                    <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded-lg bg-gray-900/70 border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                    <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded-lg bg-gray-900/70 border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                    <input type="text" name="phone" placeholder="Your Phone Number (Optional)" className="p-3 rounded-lg bg-gray-900/70 border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                    <input type="text" name="subject" placeholder="Subject" required className="p-3 rounded-lg bg-gray-900/70 border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                    <textarea name="message" placeholder="Your Message" rows={5} required className="p-3 rounded-lg bg-gray-900/70 border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all"></textarea>
                    <button type="submit" className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}