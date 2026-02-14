import { MessageCircleCode, AudioWaveform, FileJson, Mic } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientText } from './ui/GradientText';

const IndianLLM = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    const languages = [
        { name: "Hindi", script: "नमस्ते भारत" },
        { name: "Tamil", script: "வணக்கம் இந்தியா" },
        { name: "Telugu", script: "నమస్తే ఇండియా" },
        { name: "Bengali", script: "নমস্কার ভারত" },
        { name: "Gujarati", script: "નમસ્તે ભારત" },
        { name: "Kannada", script: "ನಮಸ್ಕಾರ ಭಾರತ" },
        { name: "Malayalam", script: "നమസ്കാരം ഇന്ത്യ" },
        { name: "Marathi", script: "नमस्ते ভারত" },
        { name: "Punjabi", script: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ" },
        { name: "Odia", script: "ନମସ୍କାର ଭାରତ" }
    ];

    // Duplicating for infinite marquee
    const marqueeLanguages = [...languages, ...languages];

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
            {/* Background Sliding Text - Refined with Less Saturation */}
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none flex flex-col justify-center space-y-12 select-none overflow-hidden">
                <motion.div
                    className="flex gap-12 whitespace-nowrap text-4xl sm:text-6xl font-bold font-heading"
                    animate={{ x: [0, -1200] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                    {marqueeLanguages.map((lang, i) => (
                        <GradientText
                            key={`l1-${i}`}
                            colors={["#fbd38d", "#f687b3", "#fbd38d"]}
                            animationSpeed={15}
                        >
                            {lang.script}
                        </GradientText>
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-12 whitespace-nowrap text-4xl sm:text-6xl font-bold font-heading"
                    animate={{ x: [-1200, 0] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                >
                    {[...marqueeLanguages].reverse().map((lang, i) => (
                        <GradientText
                            key={`l2-${i}`}
                            colors={["#f687b3", "#fbd38d", "#f687b3"]}
                            animationSpeed={18}
                        >
                            {lang.script}
                        </GradientText>
                    ))}
                </motion.div>
            </div>

            <div className="container-custom relative z-10 px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto relative px-4">
                    {/* Animated Waveform - More Subtle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 opacity-10 pointer-events-none flex items-center justify-center gap-1">
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-primary/50 to-accent/50 rounded-full animate-pulse"
                                style={{
                                    height: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 1}s`,
                                    animationDuration: `${0.8 + Math.random() * 0.5}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
                        Speaks Your Language. <br />
                        <GradientText colors={["#f6ad55", "#ed64a6", "#f6ad55"]} animationSpeed={4}>
                            Literally.
                        </GradientText>
                    </h2>
                    <p className={`text-base sm:text-lg text-muted-foreground transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
                        Trained on 2 trillion tokens of Indian language data. Rivinity understands the nuance, context, and dialects of 22+ official languages.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Feature Cards with Ripple Effect and Brand Colors */}
                    {[
                        { icon: MessageCircleCode, title: "Multilingual Text", desc: "Generate content, emails, and reports in regional languages with native fluency." },
                        { icon: AudioWaveform, title: "Voice Interaction", desc: "Real-time speech-to-speech translation for breaking language barriers." },
                        { icon: FileJson, title: "Document Translation", desc: "Instant translation of legal and government documents preserving formatting." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative p-6 sm:p-8 rounded-3xl bg-card border border-border overflow-hidden shadow-sm"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Ripple Hover Effect using Primary Color */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={idx === 1 ? 24 : 28} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm sm:text-base">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Language Showcase with Indian Tricolor Gradient Border */}
                <div className="mt-16 sm:mt-20 relative rounded-2xl sm:rounded-[2rem] overflow-hidden p-[1.5px] bg-gradient-to-r from-[#FF9933] via-black/10 to-[#128807] shadow-xl sm:shadow-2xl">
                    <div className="absolute inset-0 bg-white/20 blur-xl"></div>
                    <div className="relative bg-card rounded-[0.95rem] sm:rounded-[1.95rem] p-6 sm:p-12 text-center overflow-hidden min-h-[300px] sm:min-h-[350px] flex flex-col items-center justify-center">
                        <LanguageReadout languages={languages} />

                        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mt-8 sm:mt-12 relative z-20">
                            <button className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all flex items-center gap-2 text-xs sm:text-sm font-bold tracking-tight">
                                <Mic size={18} className="text-primary" />
                                Listen
                            </button>
                            <button className="btn-primary !px-6 !py-2.5 sm:!px-10 sm:!py-4 text-xs sm:text-sm">
                                Try Real-time Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LanguageReadout = ({ languages }: { languages: { name: string, script: string }[] }) => {
    const [index, setIndex] = useState(0);
    const meta = [
        { lang: "Hindi", trans: "Namaste", eng: "Hello" },
        { lang: "Tamil", trans: "Vanakkam", eng: "Hello" },
        { lang: "Telugu", trans: "Namaste", eng: "Hello" },
        { lang: "Bengali", trans: "Nomoshkar", eng: "Hello" },
        { lang: "Gujarati", script: "નમસ્તે", trans: "Namaste", eng: "Hello" },
        { lang: "Kannada", trans: "Namaskara", eng: "Hello" },
        { lang: "Malayalam", trans: "Namaskaram", eng: "Hello" },
        { lang: "Marathi", trans: "Namaste", eng: "Hello" },
        { lang: "Punjabi", trans: "Sat Sri Akal", eng: "Hello" },
        { lang: "Odia", trans: "Namaskara", eng: "Hello" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % languages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [languages.length]);

    const currentLang = languages[index];
    const currentMeta = meta[index] || { lang: currentLang.name, trans: "...", eng: "Hello" };

    return (
        <div className="mb-0 h-48 flex flex-col items-center justify-center relative w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.1, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-x-0"
                >
                    <div className="inline-block relative">
                        <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground/5 dark:text-foreground/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading scale-110 blur-[2px]">
                            {currentLang.script}
                        </h3>
                        <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold font-heading">
                            <GradientText colors={["#f97316", "#ec4899", "#f97316"]} animationSpeed={6}>
                                {currentLang.script}
                            </GradientText>
                        </h3>
                    </div>
                    <p className="mt-8 text-muted-foreground font-mono text-sm tracking-[0.3em] uppercase">
                        {currentMeta.lang} • {currentMeta.trans} • {currentMeta.eng}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default IndianLLM;
