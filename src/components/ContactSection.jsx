import { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsFormOpen(false);
    } else {
      alert(result.message || 'Something went wrong. Please try again.');
    }

  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to send message. Please try again or contact us directly.');
  } finally {
    setIsSubmitting(false);
  }
};

const handleWhatsApp = () => {
  const { name, email, phone, message } = formData;

  // Build WhatsApp message
  const text = `
New enquiry from MSJ Traders Website:

Name: ${name || '-'}
Email: ${email || '-'}
Phone: ${phone || '-'}
Message: ${message || '-'}
  `.trim();

  const encodedText = encodeURIComponent(text);

  // Your WhatsApp number WITHOUT + or spaces
  const phoneNumber = "919841040740";

  window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
};

  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="contact-content max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/90">
            Ready to start your next project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="contact-card bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group hover-glow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
            <a 
              href="tel:‪+919841040740‬" 
              className="text-foreground hover:text-primary transition-colors"
            >
              ‪+91 9841040740‬
            </a>
          </div>

          <div className="contact-card bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group hover-glow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
            <a 
              href="mailto:mohideenmsj@gmail.com" 
              className="text-foreground hover:text-primary transition-colors"
            >
              mohideenmsj@gmail.com
            </a>
          </div>

          <div className="contact-card bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group hover-glow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
            <p className="text-foreground">
              No.57/34, Perambur High Road,<br />
              Jamaliya,<br />
              Chennai - 600 012
            </p>
            <a 
              href="https://maps.google.com/?q=No.57/34, Perambur High Road, Jamaliya, Chennai - 600 012"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-orange-400 transition-colors text-sm mt-2 inline-block"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setIsFormOpen(true)}
            size="lg"
            className="hover:scale-105 font-semibold px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg"
          >
            Get in touch
          </Button>
        </div>

        {/* Contact Form Modal */}
        {isFormOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          >
            <div 
              className="bg-black/80 border border-border rounded-xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-gradient-gold">
                Contact Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name 
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message 
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Let us know about your demolition project - we'll provide a free quote and expert advice!"
                  />  
                </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 hover:scale-105 font-semibold py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md rounded-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <Button
                   type="button"
                   onClick={handleWhatsApp}
                   disabled={isSubmitting}
                   className="flex-1 hover:scale-105 font-semibold py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md rounded-lg"
                >                 
                  WhatsApp Us
               </Button>
                 
              </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;