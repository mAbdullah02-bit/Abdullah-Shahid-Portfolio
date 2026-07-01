import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, CheckCircle } from 'lucide-react';

interface ContactProps {
  onSubmitSuccess: (fullName: string) => void;
}

export default function Contact({ onSubmitSuccess }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill out all required fields (First Name, Email, and Message).');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/mabdullahshahid019@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Portfolio Message from " + formData.firstName
        })
      });

      if (response.ok) {
        const fullName = `${formData.firstName} ${formData.lastName}`.trim();
        onSubmitSuccess(fullName || 'Friend');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Failed to send message.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left column: Contact info and 3D artwork character */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary-container flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary-container" /> Connected Channels
            </span>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-extrabold leading-tight text-neutral-900 dark:text-white">
              Get In <span className="text-primary-container">Touch</span>
            </h2>
            <p className="font-body-lg text-sm sm:text-base text-neutral-500 dark:text-on-surface-variant max-w-md leading-relaxed">
              Let's discuss your project and bring your ideas to life. Feel free to leave a brief note below.
            </p>
          </div>

          {/* Quick contact direct access */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-3.5 p-3 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/5">
              <div className="h-9 w-9 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container flex-shrink-0">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">EMAIL</div>
                <a href="mailto:mabdullahshahid019@gmail.com" className="text-xs sm:text-sm font-semibold hover:text-primary-container transition-colors text-neutral-800 dark:text-white">
                  mabdullahshahid019@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/5">
              <div className="h-9 w-9 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container flex-shrink-0">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">PHONE</div>
                <a href="tel:+923465891070" className="text-xs sm:text-sm font-semibold hover:text-primary-container transition-colors text-neutral-800 dark:text-white">
                  +92 346 5891070
                </a>
              </div>
            </div>
          </div>

          {/* Character illustration image */}
          <div className="relative max-w-[240px] mx-auto md:mx-0">
            <motion.img
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-auto object-contain rounded-2xl shadow-lg border border-neutral-200/30 dark:border-white/10"
              referrerPolicy="no-referrer"
              src="/src/assets/images/developer_working_1782715818127.jpg"
              alt="Abdullah Shahid Support Representative with Smartphone"
            />
          </div>
        </div>

        {/* Right column: Form */}
        <div className="glass-card p-6 rounded-2xl bg-white/70 dark:bg-surface-container/30 backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-xl relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-[11px] text-neutral-500 dark:text-on-surface-variant px-2">First Name *</label>
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-full px-4 py-2.5 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-neutral-800 dark:text-white text-xs"
                  placeholder="John"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-[11px] text-neutral-500 dark:text-on-surface-variant px-2">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-full px-4 py-2.5 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-neutral-800 dark:text-white text-xs"
                  placeholder="Doe"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-[11px] text-neutral-500 dark:text-on-surface-variant px-2">Email Address *</label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-full px-4 py-2.5 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-neutral-800 dark:text-white text-xs"
                placeholder="john@example.com"
                type="email"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-[11px] text-neutral-500 dark:text-on-surface-variant px-2">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-full px-4 py-2.5 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-neutral-800 dark:text-white text-xs"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-[11px] text-neutral-500 dark:text-on-surface-variant px-2">Your Message *</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-2xl px-4 py-2.5 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-neutral-800 dark:text-white text-xs"
                placeholder="Tell me about your project..."
                rows={3}
              />
            </div>

            <button
              disabled={submitting}
              className="w-full bg-primary-container hover:bg-primary-container/90 text-white py-3 rounded-full font-bold hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-xs sm:text-sm"
              type="submit"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending message...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
