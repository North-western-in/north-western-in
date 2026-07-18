'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, User, Bot, RefreshCw, Compass, ArrowRight, Loader2, Calendar } from 'lucide-react';
import Link from 'next/link';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

export default function VirtualConsultant() {
  const [step, setStep] = useState<'profile' | 'chat'>('profile');
  const [profile, setProfile] = useState({
    name: '',
    projectType: 'Luxury Residential',
    budget: 'Premium (25L - 50L INR)',
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      content: 'Welcome to North Western Innovators. I am Aura, your Virtual Design Director. Before we orchestrate your spatial blueprint, share your aspirations with me. How can NWI elevate your physical environment today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const projectTypes = [
    'Luxury Residential',
    'Commercial Office',
    'Fine Dining & Hospitality',
    'Institutional / Architecture',
    'MEP Infrastructure',
    'Bespoke Product Design',
  ];

  const budgetScales = [
    'Bespoke Elite (> 1 Cr INR)',
    'Ultra Luxury (50L - 1 Cr INR)',
    'Premium (25L - 50L INR)',
    'Classic High-End (< 25L INR)',
  ];

  const suggestionPrompts = [
    "What wood veneer pairs best with dark travertine?",
    "How do you hide HVAC ducts in high-ceiling living rooms?",
    "Suggest a biophilic layout for a 20-person startup office.",
    "What is NWI's philosophy on structural double-height concrete?",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.name.trim()) return;
    setStep('chat');
    // Inject personalized intro based on profile
    setMessages([
      {
        sender: 'bot',
        content: `Greetings, **${profile.name}**. I see you are exploring a **${profile.projectType}** project within our **${profile.budget}** design scale. 

This is a magnificent canvas to work upon. Tell me about the physical site, the quality of natural light you receive, or any particular design language—be it organic modernism, minimalist brutalism, or classic Indian craftsmanship—that moves you. Let us discover your space's true potential.`,
      },
    ]);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isLoading) return;

    const updatedMessages = [...messages, { sender: 'user', content: textToSend } as Message];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          userProfile: profile,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            content: `*Aura is temporarily experiencing server-side congestion:* \n\n${data.error}\n\n*However, our humans are ready at +91 78884 58257. Let's arrange a direct call!*`,
          },
        ]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', content: data.text }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          content: 'I apologize, my creative processors lost connection. Let us book a human consultation to review your structural ideas.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetConsultant = () => {
    setProfile({
      name: '',
      projectType: 'Luxury Residential',
      budget: 'Premium (25L - 50L INR)',
    });
    setStep('profile');
  };

  return (
    <div className="glassmorphism rounded-2xl overflow-hidden border border-gold-500/10 shadow-2xl shadow-black/30" id="virtual-consultant-card">
      {/* Header */}
      <div className="charcoal-gradient px-6 py-5 border-b border-gold-500/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500">
            <Compass size={20} className="animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-display text-white text-base tracking-wider font-semibold flex items-center gap-2">
              <span>AURA</span>
              <Sparkles size={14} className="text-gold-500 animate-pulse" />
            </h4>
            <span className="text-[10px] font-mono tracking-widest text-gold-500/80 uppercase">
              Virtual Design Director • NWI
            </span>
          </div>
        </div>
        {step === 'chat' && (
          <button
            onClick={resetConsultant}
            className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
            title="Reset Chat Profile"
          >
            <RefreshCw size={12} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      {/* Body */}
      <div className="h-[480px] bg-rich-black/65 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 'profile' ? (
            <motion.form
              key="profile-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleStartChat}
              className="p-6 flex flex-col justify-between h-full overflow-y-auto"
            >
              <div className="space-y-4">
                <p className="text-xs text-gray-400 leading-relaxed text-center max-w-md mx-auto mb-2">
                  Configure your luxury portfolio preferences to launch a bespoke styling dialogue with our AI Curator.
                </p>

                {/* Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Your Distinguished Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajinder Singh"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-gray-600"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Aspirational Space Scale
                  </label>
                  <select
                    value={profile.projectType}
                    onChange={(e) => setProfile({ ...profile, projectType: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-all text-white cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-rich-black">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Scale */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-gold-500 font-medium mb-1.5">
                    Project Budget Grade
                  </label>
                  <select
                    value={profile.budget}
                    onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-all text-white cursor-pointer"
                  >
                    {budgetScales.map((scale) => (
                      <option key={scale} value={scale} className="bg-rich-black">
                        {scale}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-white py-3.5 rounded font-semibold text-xs uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 mt-6 focus:outline-none"
              >
                <span>Initiate Styling Consultation</span>
                <ArrowRight size={14} />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="chat-messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col h-full overflow-hidden"
            >
              {/* Messages Container */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4" id="chat-scroller">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 max-w-[85%] ${
                      msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full border shrink-0 ${
                        msg.sender === 'user'
                          ? 'bg-gold-500/10 border-gold-500/20 text-gold-500'
                          : 'bg-white/5 border-white/10 text-white'
                      }`}
                    >
                      {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div
                      className={`rounded-xl px-4 py-3 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gold-500/10 text-gold-200 border border-gold-500/15'
                          : 'bg-white/5 text-gray-300 border border-white/5'
                      }`}
                    >
                      <p className="whitespace-pre-line prose prose-invert prose-xs">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3 max-w-[85%]">
                    <div className="p-2 rounded-full bg-white/5 border border-white/10 text-white animate-spin">
                      <Loader2 size={14} />
                    </div>
                    <div className="bg-white/5 text-gray-400 border border-white/5 rounded-xl px-4 py-3 text-xs font-mono tracking-widest animate-pulse">
                      Aura is sketching material boards...
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick suggestions */}
              {messages.length === 1 && !isLoading && (
                <div className="px-6 pb-2">
                  <span className="block text-[9px] uppercase tracking-widest text-gold-500/70 font-mono mb-1.5">
                    Inquire Aura about:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {suggestionPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-[10px] text-gray-400 hover:text-white bg-white/5 hover:bg-gold-500/10 border border-white/5 hover:border-gold-500/20 px-2.5 py-1.5 rounded transition-all focus:outline-none"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input Bar */}
              <div className="p-4 border-t border-white/5 bg-[#141414]/90 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Pose architectural or interior inquiry..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-grow bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-gray-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="p-3 rounded-lg gold-gradient text-white hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all cursor-pointer"
                  aria-label="Send message to Aura"
                >
                  <Send size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer info link */}
      <div className="bg-rich-black px-6 py-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
        <span className="font-mono tracking-wider">AURA v1.2 • POWERED BY GEMINI 3.5</span>
        <Link href="/book-consultation" className="text-gold-500 hover:text-white transition-colors flex items-center gap-1">
          <Calendar size={10} />
          <span>Book live consult</span>
        </Link>
      </div>
    </div>
  );
}
