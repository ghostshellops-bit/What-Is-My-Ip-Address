'use client';

import { useState } from 'react';
import { Mail, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '../components/Toast';
import AdBanner from '../components/AdBanner';   // ✅ Fixed

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast('Please fill in all required fields', 'error');
      return;
    }
    setLoading(true);
    try {
      const text = `📩 New Contact Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\nMessage: ${message}`;
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      if (res.ok) {
        toast('Message sent successfully!', 'success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast('Failed to send. Please try again.', 'error');
      }
    } catch {
      toast('Error', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6">
        <p className="text-gray-300 font-mono text-sm">Have questions, feedback, or partnership inquiries? We'd love to hear from you.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm font-mono text-gray-300 p-3 glass-card rounded-xl border-ghost-cyan/10">
            <Mail className="text-ghost-cyan" size={20} />
            <a href="mailto:myipaddress92@gmail.com" className="hover:text-ghost-cyan transition-colors">myipaddress92@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-sm font-mono text-gray-300 p-3 glass-card rounded-xl border-ghost-cyan/10">
            <span className="text-gray-500">GitHub: Coming Soon</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-mono text-gray-300 p-3 glass-card rounded-xl border-ghost-cyan/10">
            <span className="text-gray-500">Twitter: Coming Soon</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
            <div className="flex items-center gap-2 text-ghost-cyan mb-2">
              <MapPin size={16} />
              <span className="text-xs font-orbitron">LOCATION</span>
            </div>
            <p className="text-xs font-mono text-gray-400">Global - Digital First</p>
          </div>
          <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
            <div className="flex items-center gap-2 text-ghost-cyan mb-2">
              <Clock size={16} />
              <span className="text-xs font-orbitron">RESPONSE TIME</span>
            </div>
            <p className="text-xs font-mono text-gray-400">Within 24-48 hours</p>
          </div>
        </div>
      </div>

      <div className="my-8 flex justify-center">
        <AdBanner type="rectangle" />
      </div>

      <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
        <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">📝 Send a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-gray-400 block mb-1">Message *</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="w-full bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send size={16} /> {loading ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>
        <p className="text-[10px] text-gray-500 font-mono text-center mt-4">
          We'll respond to <span className="text-ghost-cyan">myipaddress92@gmail.com</span> within 24-48 hours
        </p>
      </div>
    </>
  );
}