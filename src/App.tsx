import { motion } from "motion/react";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Code, 
  Layout, 
  Smartphone, 
  Globe,
  ArrowUpRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect, useRef, useCallback, ReactNode } from "react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  type: 'work' | 'study';
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

// --- Mock Data ---
const SERVICES: Service[] = [
  {
    id: 1,
    title: "WEBSITE DEVELOPMENT",
    description: "Welcome to our portfolio website! We are a professional printing company that offers a wide range of Lorem ipsum dolor sit amet, consectetur.",
    icon: <Globe className="w-8 h-8" />,
    tags: ["UI/Ux Design", "Research", "Web & Mobile app"]
  },
  {
    id: 2,
    title: "DIGITAL MARKETING",
    description: "Welcome to our portfolio website! We are a professional printing company that offers a wide range of Lorem ipsum dolor sit amet, consectetur.",
    icon: <Layout className="w-8 h-8" />,
    tags: ["UI/Ux Design", "Research", "Web & Mobile app"]
  },
  {
    id: 3,
    title: "FRONT END DEVELOPMENT",
    description: "Welcome to our portfolio website! We are a professional printing company that offers a wide range of Lorem ipsum dolor sit amet, consectetur.",
    icon: <Code className="w-8 h-8" />,
    tags: ["UI/Ux Design", "Research", "Web & Mobile app"]
  },
  {
    id: 4,
    title: "JOOMLA REDESIGNING",
    description: "Welcome to our portfolio website! We are a professional printing company that offers a wide range of Lorem ipsum dolor sit amet, consectetur.",
    icon: <Smartphone className="w-8 h-8" />,
    tags: ["UI/Ux Design", "Research", "Web & Mobile app"]
  }
];

const EXPERIENCE: Experience[] = [
  { id: 1, title: "SENIOR UI DESIGNER", company: "Google", period: "2021 - PRESENT", type: 'work' },
  { id: 2, title: "JUNIOR UI DESIGNER", company: "Meta", period: "2016 - 2018", type: 'work' },
  { id: 3, title: "SENIOR UI DESIGNER", company: "Apple", period: "2018 - 2021", type: 'work' },
  { id: 4, title: "GRAPHICS DESIGNER", company: "Adobe", period: "2014 - 2016", type: 'work' },
  { id: 5, title: "COMPUTER SCIENCE", company: "MIT", period: "2021 - PRESENT", type: 'study' },
  { id: 6, title: "UI/UX DESIGN", company: "Stanford", period: "2016 - 2018", type: 'study' },
  { id: 7, title: "WEB DEVELOPMENT", company: "Harvard", period: "2018 - 2021", type: 'study' },
  { id: 8, title: "ART & DESIGN", company: "Yale", period: "2014 - 2016", type: 'study' }
];

const PROJECTS: Project[] = [
  { id: 1, title: "Digital Marketing", category: "Web", date: "Art, Direction", image: "https://picsum.photos/seed/p1/800/600" },
  { id: 2, title: "App Development", category: "App", date: "Art, Direction", image: "https://picsum.photos/seed/p2/800/600" },
  { id: 3, title: "Brand Identity", category: "Design", date: "Art, Direction", image: "https://picsum.photos/seed/p3/800/600" },
  { id: 4, title: "Social Media Campaign", category: "Web", date: "Art, Direction", image: "https://picsum.photos/seed/p4/800/600" },
  { id: 5, title: "E-commerce Platform", category: "App", date: "Art, Direction", image: "https://picsum.photos/seed/p5/800/600" },
  { id: 6, title: "Product Design", category: "Design", date: "Art, Direction", image: "https://picsum.photos/seed/p6/800/600" }
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Zonathon Smith", role: "CEO, TechFlow", content: "Working with Santanu was a pleasure. His attention to detail and creative vision transformed our project into something truly special.", rating: 5, image: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sarah Johnson", role: "Product Manager", content: "The best designer I've ever worked with. He understands the user needs perfectly and delivers outstanding results every time.", rating: 5, image: "https://i.pravatar.cc/150?u=2" }
];

const BLOGS: BlogPost[] = [
  { id: 1, title: "Trending code settings for a nice portfolio", date: "March 15, 2024", image: "https://picsum.photos/seed/b1/800/500" },
  { id: 2, title: "How to optimize your workflow with AI", date: "March 10, 2024", image: "https://picsum.photos/seed/b2/800/500" },
  { id: 3, title: "The future of UI/UX design in 2025", date: "March 05, 2024", image: "https://picsum.photos/seed/b3/800/500" }
];

// --- Components ---

const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const SectionHeading = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="mb-12">
    <span className="text-accent text-sm font-medium tracking-widest uppercase mb-2 block">
      ✱ {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold font-display" dangerouslySetInnerHTML={{ __html: title }} />
  </div>
);

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust margin to trigger active state more naturally
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate email sending to santanusikder1@gmail.com
    // In a real scenario, you would use a service like Formspree or a backend API
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="min-h-screen bg-primary selection:bg-accent selection:text-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">P</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tight">ProSun</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase() ? 'text-accent' : 'hover:text-accent'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-secondary border border-white/5 hover:border-accent/50 transition-all group"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-accent group-hover:-rotate-12 transition-transform" />
              )}
            </button>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              className="hidden sm:inline-block bg-accent text-primary px-6 py-2.5 rounded-full font-bold text-sm"
            >
              Let's Talk
            </motion.a>
            <button 
              className="md:hidden p-2 text-text-muted hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-primary border-b border-white/5 p-6 space-y-4 shadow-2xl"
          >
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-bold transition-colors ${activeSection === item.toLowerCase() ? 'text-accent' : 'hover:text-accent'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-accent text-primary px-6 py-3 rounded-xl font-bold text-center"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium tracking-widest uppercase mb-4 block">✱ UI/UX DESIGNER</span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold font-display leading-tight mb-8">
                HELLO <br /> I'M <span className="text-accent underline decoration-4 underline-offset-8">SANTANU</span> SIKDER
              </h1>
              <div className="flex items-center gap-6">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2"
                >
                  Hire Me <ArrowUpRight className="w-5 h-5" />
                </motion.a>
                <div className="flex gap-4">
                  {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-3xl animate-pulse" />
                <div className="absolute inset-0 border-[10px] md:border-[15px] border-accent rounded-full overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/test-media-bucket-v1/cloudevents/706275545075/zgywjakrmzupwnmrxwru2d/1742455000000/input_file_0.png" 
                    alt="Santanu Sikder"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/santanu/800/800';
                    }}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-secondary p-4 sm:p-6 rounded-2xl border border-white/5 shadow-2xl">
                  <div className="text-2xl sm:text-3xl font-bold text-accent"><Counter target={78} />+</div>
                  <div className="text-[10px] sm:text-xs text-text-muted uppercase tracking-widest">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Branding */}
        <div className="py-10 border-y border-white/5 overflow-hidden bg-secondary/30">
          <div className="flex gap-8 sm:gap-12 whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((_) => (
              <div key={_} className="flex gap-8 sm:gap-12 items-center">
                <span className="text-lg sm:text-2xl font-bold opacity-30">BRANDING ✱</span>
                <span className="text-lg sm:text-2xl font-bold opacity-30">PRODUCT DESIGN ✱</span>
                <span className="text-lg sm:text-2xl font-bold opacity-30">DIGITAL MARKETING ✱</span>
                <span className="text-lg sm:text-2xl font-bold opacity-30">DEVELOPMENT ✱</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education */}
        <section id="about" className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <SectionHeading subtitle="My Experience resume" title="work & Education" />
              <a href="#contact" className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm inline-block">Contact Me</a>
            </div>

            <div className="grid md:grid-cols-2 gap-20">
              {/* Work */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="text-accent" />
                  </div>
                  <h3 className="text-4xl sm:text-6xl font-black opacity-10 uppercase tracking-tighter">WORK</h3>
                </div>
                <div className="space-y-6">
                  {EXPERIENCE.filter(e => e.type === 'work').map((item) => (
                    <motion.div 
                      key={item.id}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(180, 211, 54, 0.05)" }}
                      className="p-8 rounded-2xl border border-white/5 bg-secondary/40 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-accent text-xs font-bold tracking-widest">✱ {item.period}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                      </div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.company}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Study */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="text-accent" />
                  </div>
                  <h3 className="text-4xl sm:text-6xl font-black opacity-10 uppercase tracking-tighter">STUDY</h3>
                </div>
                <div className="space-y-6">
                  {EXPERIENCE.filter(e => e.type === 'study').map((item) => (
                    <motion.div 
                      key={item.id}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(180, 211, 54, 0.05)" }}
                      className="p-8 rounded-2xl border border-white/5 bg-secondary/40 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-accent text-xs font-bold tracking-widest">✱ {item.period}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                      </div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.company}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <SectionHeading subtitle="my services area" title="MY SERVICE AREA" />
            </div>
            
            <div className="space-y-4">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-10 rounded-3xl border border-white/5 bg-secondary/20 hover:bg-accent transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-text-muted group-hover:text-primary/70 transition-colors max-w-2xl">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:w-48">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/5 rounded group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-accent text-primary px-8 py-3 rounded-full font-bold">Get More Services</button>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="projects" className="py-24 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <SectionHeading subtitle="Explore my projects" title="Explore My Projects" />
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['All', 'Web', 'App', 'Design'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-accent text-primary' : 'bg-white/5 hover:bg-white/10'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={project.id}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
                >
                  <img src={project.image} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-accent text-primary inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-3">
                      {project.category}
                    </div>
                    <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                    <p className="text-text-muted text-sm">{project.date}</p>
                    <div className="mt-4 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {visibleProjects < filteredProjects.length && (
              <div className="mt-16 text-center">
                <button 
                  onClick={() => setVisibleProjects(prev => prev + 3)}
                  className="w-32 h-32 rounded-full border border-accent text-accent font-bold text-lg hover:bg-accent hover:text-primary transition-all flex flex-col items-center justify-center gap-2"
                >
                  MORE <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="client testimonials" title="What My Clients Say" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-10 rounded-3xl border border-white/5 bg-secondary/30 relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent hover:brightness-125 transition-all cursor-pointer" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-8 text-text-muted">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h5 className="font-bold">{t.name}</h5>
                      <p className="text-xs text-text-muted uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Introduction about me" title="Latest News & Blogs" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {BLOGS.map((blog) => (
                <motion.div 
                  key={blog.id}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="rounded-3xl overflow-hidden mb-6 aspect-video">
                    <img src={blog.image} alt={blog.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">{blog.date}</span>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{blog.title}</h4>
                  <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read More <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Counter Section */}
        <section className="py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Project Completed", value: 8000, suffix: "+" },
              { label: "Award Achievement", value: 99, suffix: "+" },
              { label: "Satisfied Customers", value: 4000, suffix: "+" },
              { label: "Years Experience", value: 20, suffix: "+" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  <Counter target={stat.value} />{stat.suffix}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-accent rounded-[30px] md:rounded-[40px] p-8 md:p-24 text-primary relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="max-w-xl w-full">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-display leading-none mb-8">GET IN <br /> TOUCH <ArrowUpRight className="inline-block w-10 h-10 md:w-20 md:h-20" /></h2>
                  <p className="text-base md:text-lg font-medium opacity-80 mb-8">Let's work together to create something amazing. I'm available for new projects and collaborations.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      <span className="text-lg md:text-xl font-bold break-all">santanusikder1@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      <span className="text-lg md:text-xl font-bold">+880 1829-220286</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                  <input required type="email" placeholder="Email Address" className="w-full bg-primary/10 border-none rounded-2xl p-5 placeholder:text-primary/50 focus:ring-2 focus:ring-primary/20 outline-none" />
                  <input required type="text" placeholder="Your Name" className="w-full bg-primary/10 border-none rounded-2xl p-5 placeholder:text-primary/50 focus:ring-2 focus:ring-primary/20 outline-none" />
                  <textarea required placeholder="Write Message..." rows={4} className="w-full bg-primary/10 border-none rounded-2xl p-5 placeholder:text-primary/50 focus:ring-2 focus:ring-primary/20 outline-none resize-none"></textarea>
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-primary text-accent py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Message Me'}
                  </button>
                </form>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-96 h-96 border-[40px] border-primary/5 rounded-full" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">P</span>
              </div>
              <span className="text-xl font-bold font-display tracking-tight">ProSun</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['Service', 'Projects', 'Pricing', 'Faqs', 'News', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors">{item}</a>
              ))}
            </div>

            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-text-muted hover:text-accent transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">
            <p>Copyright @2025, ProSun All Rights Reserved</p>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>

      {/* Success Popup */}
      {formStatus === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-accent p-10 rounded-[40px] text-primary text-center max-w-sm w-full shadow-2xl"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 fill-primary" />
            </div>
            <h3 className="text-3xl font-black mb-2 font-display">Your Message Done</h3>
            <p className="font-medium opacity-80 mb-8">Thank you for reaching out. I'll get back to you at santanusikder1@gmail.com soon!</p>
            <button 
              onClick={() => setFormStatus('idle')}
              className="bg-primary text-accent px-8 py-4 rounded-2xl font-bold w-full hover:scale-[1.02] transition-transform"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
