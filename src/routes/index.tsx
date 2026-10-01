import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Baby, CalendarDays, Check, ChevronDown, Heart, HeartPulse, Home, Menu, ShieldCheck, Stethoscope, Syringe, TestTube2, X, Bandage, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lnt-logo.png";
import heroImage from "@/assets/home-visit.jpg";
import maternalImage from "@/assets/maternal-care.jpg";
import vanImage from "@/assets/mobile-clinic-van.jpg";
import doorstepImage from "@/assets/doorstep-care.jpg";
import bookingImage from "@/assets/booking care.jpeg";

const services = [
  { title: "General consultations", description: "Personalised primary healthcare for you and your family.", icon: Stethoscope },
  { title: "Antenatal care", description: "Thoughtful support and guidance through pregnancy.", icon: Heart },
  { title: "Postnatal care", description: "Care for your recovery and your baby's early days.", icon: Baby },
  { title: "Child wellness & immunisations", description: "Growth monitoring, immunisations and child health care.", icon: Syringe },
  { title: "Family planning", description: "A confidential space to explore your options.", icon: HeartPulse },
  { title: "HIV testing & screening", description: "Private testing, counselling and referrals.", icon: TestTube2 },
  { title: "Wound care", description: "Professional attention to help you heal well.", icon: Bandage },
  { title: "Wellness services", description: "Selected health screenings and wellbeing support.", icon: Sparkles },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LNT Healthcare & Midwifery Services | Modern Care. Maternal Heart." },
      { name: "description", content: "Professional, compassionate healthcare and midwifery services, including mobile home visits. Your health. Our priority." },
      { property: "og:title", content: "LNT Healthcare & Midwifery Services" },
      { property: "og:description", content: "Modern care, maternal heart. Personalised healthcare and midwifery services brought closer to you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const bookingLink = "https://wa.me/27795453723";

  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const value = (key: string) => String(fields.get(key) || "").trim();
    const lines = [
      "Hello LNT Healthcare & Midwifery Services, I would like to request an appointment.",
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
      `Service: ${value("service")}`,
      `Appointment type: ${value("visit")}`,
      `Preferred date: ${value("date") || "Flexible"}`,
      value("message") ? `Additional details: ${value("message")}` : "",
    ].filter(Boolean);
    window.open(`${bookingLink}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="overflow-x-hidden">
      <div className="bg-deep text-deep-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-[11px] font-medium tracking-wide sm:px-8 lg:px-12">
          <span>Mobile clinic · We come to your doorstep · Booking essential</span>
          <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 transition-opacity hover:opacity-70 sm:inline-flex"><MessageCircle size={13} /> +27 79 545 3723</a>
        </div>
      </div>
      <header className="relative z-20 bg-background">
        <div className="mx-auto flex h-23 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <a href="#home" aria-label="LNT Healthcare & Midwifery Services home" className="flex shrink-0 items-center"><img src={logo} width={497} height={358} alt="LNT Healthcare & Midwifery Services" className="h-20 w-auto object-contain sm:h-21" /></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            <a href="#home" className="text-xs font-semibold text-foreground transition-colors hover:text-gold">Home</a>
            <a href="#about" className="text-xs font-semibold text-foreground transition-colors hover:text-gold">Our story</a>
            <a href="#services" className="text-xs font-semibold text-foreground transition-colors hover:text-gold">Services</a>
            <a href="#home-visits" className="text-xs font-semibold text-foreground transition-colors hover:text-gold">Home visits</a>
          </nav>
          <div className="hidden lg:block"><Button asChild variant="brand" size="brand"><a href="#book">Book an appointment <ArrowUpRight /></a></Button></div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-border bg-background px-5 py-4 shadow-lg lg:hidden">
          {[["Home", "#home"], ["Our story", "#about"], ["Services", "#services"], ["Home visits", "#home-visits"], ["Book an appointment", "#book"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium text-foreground">{label}</a>)}
        </nav>}
      </header>

      <main>
        <section id="home" className="relative flex min-h-147 items-center overflow-hidden bg-deep text-deep-foreground md:min-h-158 lg:min-h-168">
          <img src={heroImage} alt="Nurse caring for a patient during a home visit" width={1600} height={1008} className="hero-image absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.19em] text-deep-foreground"><span className="gold-rule" /> LNT Healthcare & Midwifery Services</div>
              <h1 className="font-display max-w-xl text-6xl font-medium leading-[.98] sm:text-7xl lg:text-[5.5rem]">Healthcare that comes <em className="font-normal text-sage">closer to you.</em></h1>
              <p className="mt-7 max-w-lg text-[15px] leading-7 text-deep-foreground/85 sm:text-base">Professional, compassionate care for every stage of life — delivered by our mobile clinic, straight to your doorstep. <span className="font-semibold text-deep-foreground">Booking is essential.</span></p>
              <div className="mt-9 flex flex-wrap items-center gap-4"><Button asChild variant="gold" size="brand"><a href="#book">Book an appointment <ArrowUpRight /></a></Button><a href="#services" className="inline-flex items-center gap-2 border-b border-deep-foreground/70 pb-1 text-sm font-semibold text-deep-foreground transition-opacity hover:opacity-70">Explore our services <ArrowRight size={16} /></a></div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden border-l border-t border-deep-foreground/25 bg-deep/75 px-8 py-5 backdrop-blur-sm md:block"><span className="font-display text-2xl italic text-deep-foreground">Modern Care. Maternal Heart.</span></div>
        </section>

        <section aria-label="Our approach" className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
            {[{ icon: Heart, title: "Care that listens", text: "Seen, heard and valued" }, { icon: Home, title: "Closer to home", text: "Convenient mobile visits" }, { icon: ShieldCheck, title: "Professional care", text: "Led by a nurse & midwife" }].map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-4 py-5 sm:justify-center sm:px-4 lg:py-7"><Icon className="size-7 shrink-0 text-gold" strokeWidth={1.5} /><div><p className="text-sm font-bold text-foreground">{title}</p><p className="mt-0.5 text-xs text-muted-foreground">{text}</p></div></div>)}
          </div>
        </section>

        <section id="about" className="scroll-mt-12 bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-22 lg:px-12">
            <div className="relative mx-auto w-full max-w-125 lg:mx-0"><img src={maternalImage} loading="lazy" width={912} height={1104} alt="Midwife talking with an expectant mother at home" className="aspect-[4/4.8] w-full object-cover" /><div className="absolute -bottom-6 -right-4 bg-deep px-6 py-5 text-deep-foreground sm:-right-7 sm:px-8"><span className="font-display text-3xl italic">Care with heart.</span></div></div>
            <div className="pt-5 lg:pl-4"><p className="section-kicker">The heart behind LNT</p><div className="gold-rule mt-5" /><h2 className="font-display mt-5 max-w-2xl text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl">More than healthcare.<br /><em className="font-normal text-sage">A feeling of being cared for.</em></h2><p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">LNT began with a vision carried for many years: a healthcare service where people aren't simply treated as patients, but seen, heard and cared for as individuals.</p><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Founded by a Registered Nurse and Midwife, our approach is shaped by firsthand experience of pregnancy, childbirth, recovery and the moments when a family's peace of mind matters most.</p><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">We bring professional, personalised healthcare closer to individuals and families — with compassion at the centre of every visit.</p><a href="#book" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-2 text-sm font-bold text-primary transition-colors hover:text-gold">Let's care for you <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section id="services" className="scroll-mt-12 bg-soft py-20 sm:py-26">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">What we offer</p><h2 className="font-display mt-4 text-5xl font-medium leading-none text-foreground sm:text-6xl">Care for every chapter <em className="font-normal text-sage">of life.</em></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Personalised, professional services tailored to the needs of you and your family.</p></div>
            <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{services.map(({ title, description, icon: Icon }, index) => <div key={title} className="service-item flex min-h-60 flex-col bg-background p-7 lg:p-8"><div className="flex items-start justify-between"><div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><Icon size={23} strokeWidth={1.5} /></div><span className="text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-auto pt-9 font-display text-2xl font-semibold leading-tight text-foreground">{title}</h3><p className="mt-2 text-[13px] leading-6 text-muted-foreground">{description}</p></div>)}</div>
            <p className="mt-6 text-xs text-muted-foreground">Service availability and suitability can be confirmed when you get in touch.</p>
          </div>
        </section>

        <section id="home-visits" className="scroll-mt-12 bg-deep py-20 text-deep-foreground sm:py-25"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20"><div className="relative pb-10 pl-2 sm:pb-12 sm:pl-6"><img src={vanImage} loading="lazy" width={1600} height={1008} alt="The LNT mobile clinic van arriving at a patient's home" className="aspect-[16/10] w-full object-cover" /><img src={doorstepImage} loading="lazy" width={912} height={1104} alt="Nurse greeting a patient at her front door" className="absolute bottom-0 left-0 hidden w-40 border-4 border-deep object-cover shadow-xl sm:block sm:w-52" /></div><div className="lg:pl-2"><p className="section-kicker">Our mobile clinic</p><div className="gold-rule mt-5" /><h2 className="font-display mt-5 text-5xl leading-[1.04] sm:text-6xl">We come to <em className="font-normal text-sage">your doorstep.</em></h2><p className="mt-6 max-w-xl text-sm leading-7 text-deep-foreground/75 sm:text-base">LNT is a mobile clinic — there's no waiting room to sit in and no journey to plan. We bring the consultation, the equipment and the care directly to your front door, at a time arranged around you.</p><ul className="mt-8 space-y-5">{[{ icon: Home, title: "We come to you", text: "No queues, no travel — quality care in the comfort of your own home." }, { icon: CalendarDays, title: "Booking is essential", text: "Every visit is scheduled in advance, so we arrive prepared for you." }, { icon: MessageCircle, title: "Booking is simple", text: "Send your request on WhatsApp and we'll confirm your appointment." }].map(({ icon: Icon, title, text }) => <li key={title} className="flex items-start gap-4"><span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-deep-foreground/10 text-gold"><Icon size={18} strokeWidth={1.6} /></span><div><p className="text-sm font-bold text-deep-foreground">{title}</p><p className="mt-0.5 text-[13px] leading-6 text-deep-foreground/70">{text}</p></div></li>)}</ul><Button asChild variant="gold" size="brand" className="mt-9"><a href="#book">Book your visit <ArrowUpRight /></a></Button></div></div><div className="mt-20 border-l border-gold/70 py-3 pl-7 sm:mt-24 sm:pl-10"><p className="font-display max-w-3xl text-3xl italic leading-snug sm:text-4xl">“It is trust. It is dignity. It is listening. It is showing up. It is care.”</p><p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-sage">The LNT promise</p></div></div></section>

        <section id="book" className="scroll-mt-8 bg-background py-20 sm:py-27"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.76fr_1fr] lg:gap-24 lg:px-12"><div><p className="section-kicker">Get in touch</p><h2 className="font-display mt-5 text-5xl font-medium leading-[1.05] sm:text-6xl">Let's start with <em className="font-normal text-sage">a conversation.</em></h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">Tell us a little about the care you're looking for. Your request will open in WhatsApp, where we can confirm the details with you personally.</p><div className="mt-10 border-t border-border pt-7"><p className="text-[11px] font-bold uppercase tracking-[.17em] text-gold">Prefer to message directly?</p><a href={bookingLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-display text-2xl text-foreground hover:text-gold"><MessageCircle size={19} /> +27 79 545 3723 <ArrowUpRight size={18} /></a></div><div className="mt-10"><img src={bookingImage} loading="lazy" width={1600} height={1008} alt="Nurse confirming a home-visit schedule with a mother and her baby" className="aspect-[16/10] w-full object-cover" /></div><p className="mt-10 font-display text-2xl italic text-primary">Your health. Our priority.</p></div>
          <form onSubmit={handleBooking} className="border border-border bg-soft p-6 sm:p-9"><div className="flex items-center justify-between gap-3 border-b border-border pb-5"><div><p className="font-display text-3xl font-semibold text-foreground">Request an appointment</p><p className="mt-1 text-xs text-muted-foreground">We'll continue the conversation on WhatsApp.</p></div><CalendarDays size={27} strokeWidth={1.4} className="shrink-0 text-gold" /></div><div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="block text-xs font-bold text-foreground">Your name <span className="text-gold">*</span><input className="form-field mt-2" name="name" type="text" autoComplete="name" placeholder="Full name" required /></label><label className="block text-xs font-bold text-foreground">Phone number <span className="text-gold">*</span><input className="form-field mt-2" name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" required /></label><label className="block text-xs font-bold text-foreground sm:col-span-2">What care do you need? <span className="text-gold">*</span><span className="relative mt-2 block"><select className="form-field appearance-none pr-10" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(({title}) => <option key={title} value={title}>{title}</option>)}</select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-4 text-muted-foreground" /></span></label><label className="block text-xs font-bold text-foreground">Appointment type <span className="text-gold">*</span><span className="relative mt-2 block"><select className="form-field appearance-none pr-10" name="visit" defaultValue="" required><option value="" disabled>Select an option</option><option>Home visit</option><option>General enquiry / consultation</option></select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-4 text-muted-foreground" /></span></label><label className="block text-xs font-bold text-foreground">Preferred date <span className="font-normal text-muted-foreground">(optional)</span><input className="form-field mt-2" name="date" type="date" min={new Date().toISOString().slice(0, 10)} /></label><label className="block text-xs font-bold text-foreground sm:col-span-2">Anything else we should know? <span className="font-normal text-muted-foreground">(optional)</span><textarea className="form-field mt-2" name="message" placeholder="Share any details that may help us understand your request" /></label></div><Button type="submit" variant="brand" size="brand" className="mt-6 w-full">Continue to WhatsApp <ArrowUpRight /></Button>{sent && <p role="status" className="mt-3 flex items-center gap-2 text-xs text-primary"><Check size={15} /> WhatsApp opened with your request. Please send the message there to complete it.</p>}<p className="mt-4 text-center text-[11px] leading-5 text-muted-foreground">Please do not share sensitive medical information in this form. For urgent medical needs, seek immediate emergency care.</p></form>
        </div></section>
      </main>
      <footer className="bg-deep text-deep-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-[1.4fr_1fr_1fr] sm:px-8 lg:px-12"><div><div className="inline-block bg-background p-1"><img src={logo} width={497} height={358} alt="LNT Healthcare & Midwifery Services" className="h-26 w-auto" /></div><p className="mt-5 max-w-xs text-sm leading-6 text-deep-foreground/70">Professional, compassionate healthcare with the human touch. Modern Care. Maternal Heart.</p></div><div><p className="text-xs font-bold uppercase tracking-[.15em] text-sage">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-deep-foreground/75"><a href="#about" className="hover:text-deep-foreground">Our story</a><a href="#services" className="hover:text-deep-foreground">Our services</a><a href="#home-visits" className="hover:text-deep-foreground">Home visits</a><a href="#book" className="hover:text-deep-foreground">Book an appointment</a></div></div><div><p className="text-xs font-bold uppercase tracking-[.15em] text-sage">Get in touch</p><a href={bookingLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-deep-foreground/75 hover:text-deep-foreground"><MessageCircle size={17} /> +27 79 545 3723</a><p className="mt-5 text-sm text-deep-foreground/70">Care that comes closer to you.</p></div></div><div className="border-t border-deep-foreground/15"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-[11px] text-deep-foreground/55 sm:flex-row sm:px-8 lg:px-12"><span>© {new Date().getFullYear()} LNT Healthcare & Midwifery Services (Pty) Ltd.</span><span>Your health. Our priority.</span></div></div></footer>
    </div>
  );
}
