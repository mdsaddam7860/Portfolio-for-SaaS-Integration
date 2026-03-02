'use client'

import { Variants, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRegCopy,
  FaSpinner,
  FaUser,
} from 'react-icons/fa'
import { FaSquarePhone } from 'react-icons/fa6'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

// interface FormData {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

// const ContactUs: FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   })
//   const [status, setStatus] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setStatus('')

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setStatus('Message sent successfully!')
//         setFormData({ name: '', email: '', subject: '', message: '' })
//       } else {
//         setStatus('Failed to send message. Please try again.')
//       }
//     } catch {
//       setStatus('An error occurred. Please try again later.')
//     } finally {
//       setIsSubmitting(false)
//       setTimeout(() => setStatus(''), 5000)
//     }
//   }

//   const copyToClipboard = (text: string, label: string) => {
//     navigator.clipboard.writeText(text)
//     toast.success(`${label} copied!`)
//   }

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//     hover: {
//       scale: 1.02,
//       transition: { duration: 0.3 },
//     },
//   }

//   const inputVariants: Variants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.4, delay: i * 0.1 },
//     }),
//   }

//   return (
//     <section id="contact" className="relative py-20 bg-background text-foreground transition-colors overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Floating Geometric Shapes */}
//         <div className="absolute top-20 left-12 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-60 right-16 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
//         <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Gradient Orbs */}
//         <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           className="max-w-7xl mx-auto bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-10 shadow-2xl"
//           variants={cardVariants}
//           initial="hidden"
//           animate="visible"
//           whileHover="hover"
//         >
//           <div className="flex flex-col md:flex-row gap-12">
//             <motion.div
//               className="w-full md:w-1/2 space-y-6"
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <h2 title="Connect With Me" className="text-4xl font-extrabold bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
//                 Connect With Me
//               </h2>
//               <p className="text-muted-foreground leading-relaxed text-base">
//                 Have a project in mind or a question? Reach out and let's turn your ideas into
//                 reality.
//               </p>

//               <div className="space-y-5 text-foreground">
//                 <div className="flex items-center gap-3">
//                   <FaEnvelope className="text-primary text-lg" />
//                   <span className="text-sm font-medium select-text">hasanashab.18205@gmail.com</span>
//                   <button
//                     title="Copy email address"
//                     onClick={() => copyToClipboard('hasanashab.18205@gmail.com', 'Email')}
//                     className="text-muted-foreground hover:text-primary transition"
//                     aria-label="Copy email"
//                   >
//                     <FaRegCopy />
//                   </button>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaSquarePhone className="text-primary text-lg" />
//                   <span className="text-sm font-medium select-text">+880 16273 18919</span>
//                   <button
//                     title="Copy phone number"
//                     onClick={() => copyToClipboard('+880 16273 18919', 'Phone number')}
//                     className="text-muted-foreground hover:text-primary transition"
//                     aria-label="Copy phone number"
//                   >
//                     <FaRegCopy />
//                   </button>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-primary text-lg" />
//                   <span className="text-sm font-medium select-text">Dhaka, Bangladesh</span>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="w-full md:w-1/2 space-y-6"
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact Form">
//                 {['name', 'email', 'subject'].map((field, i) => (
//                   <motion.div
//                     key={field}
//                     custom={i}
//                     variants={inputVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
//                     <div className="relative">
//                       {field === 'name' && (
//                         <FaUser className="absolute top-3.5 left-3 text-muted-foreground" />
//                       )}
//                       {field === 'email' && (
//                         <FaEnvelope className="absolute top-3.5 left-3 text-muted-foreground" />
//                       )}
//                       {field === 'subject' && (
//                         <MessageCircle className="absolute top-3.5 left-3 text-muted-foreground" />
//                       )}
//                       <input
//                         type={field === 'email' ? 'email' : 'text'}
//                         name={field}
//                         value={formData[field as keyof FormData]}
//                         onChange={handleChange}
//                         placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                         className="w-full pl-10 pr-4 py-3 bg-background/50 text-foreground rounded-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground transition-all"
//                         required
//                         aria-label={field}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//                 <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Please Drop Your Short Message..."
//                     className="w-full pl-4 pr-4 py-3 bg-background/50 text-foreground rounded-none h-36 resize-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground transition-all"
//                     required
//                     aria-label="Message"
//                   />
//                 </motion.div>
//                 <motion.button
//                   title={isSubmitting ? 'Sending message...' : 'Send message'}
//                   type="submit"
//                   className={cn(
//                     buttonVariants({
//                       className:
//                         'w-full py-3 rounded-none flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed',
//                     }),
//                   )}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaSpinner className="animate-spin" /> Sending...
//                     </>
//                   ) : (
//                     <>
//                       <FaPaperPlane /> Send Message
//                     </>
//                   )}
//                 </motion.button>
//                 {status && (
//                   <motion.p
//                     className={`text-center text-sm ${
//                       status.includes('successfully') ? 'text-green-500' : 'text-red-500'
//                     }`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {status}
//                   </motion.p>
//                 )}
//               </form>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ContactUs
// "use client";
// import dotenv from "dotenv";
// dotenv.config();

// import { FC, useState, FormEvent } from "react";
// import { motion } from "framer-motion";
// import { MessageCircle } from "lucide-react";
// import toast from "react-hot-toast";
// import {
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaRegCopy,
//   FaSpinner,
//   FaUser,
// } from "react-icons/fa";
// import { FaSquarePhone } from "react-icons/fa6";

interface ContactUsProps {
  cta?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: FC<ContactUsProps> = ({ cta }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // DATA FROM YOUR RESUME
  const MY_EMAIL = "saddam.stem@gmail.com";
  const MY_PHONE = "+91 7004455742";
  const MY_LOCATION = "Delhi NCR, India";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Strategy session requested!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied!`);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-background text-foreground overflow-hidden border-t border-border"
    >
      {/* 1. Integrated Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Glow Orbs for Depth */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Form Container: Theme-Adaptive Glassmorphism */}
        <div className="max-w-6xl mx-auto bg-card/40 backdrop-blur-xl border border-border rounded-[2rem] p-8 md:p-14 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Side: Professional Positioning */}
            <div className="flex-1 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">
                  Available for Partnerships
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6 tracking-tight leading-tight">
                  {cta || "Let’s Architect Your Integration"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Ready to eliminate manual data entry and scale your HubSpot
                  workflows with <strong>fault-tolerant syncs</strong>.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  { icon: <FaEnvelope />, label: "Email Me", val: MY_EMAIL },
                  {
                    icon: <FaSquarePhone />,
                    label: "WhatsApp / Call",
                    val: MY_PHONE,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/50 border border-border hover:border-blue-500/30 transition-all group"
                  >
                    <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="font-bold text-foreground">{item.val}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.val, item.label)}
                      className="p-2 text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      <FaRegCopy size={18} />
                    </button>
                  </div>
                ))}

                <div className="flex items-center gap-5 p-5">
                  <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">
                      Location
                    </p>
                    <p className="font-bold text-foreground">
                      {MY_LOCATION} (GMT +5:30){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Inquiry Form */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <FaUser className="absolute top-5 left-5 text-muted-foreground/50" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full pl-14 pr-6 py-5 bg-secondary/30 border border-border rounded-2xl focus:border-blue-500 focus:bg-background outline-none transition-all placeholder:text-muted-foreground/50 text-foreground font-medium"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute top-5 left-5 text-muted-foreground/50" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Work Email"
                      className="w-full pl-14 pr-6 py-5 bg-secondary/30 border border-border rounded-2xl focus:border-blue-500 focus:bg-background outline-none transition-all placeholder:text-muted-foreground/50 text-foreground font-medium"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <MessageCircle className="absolute top-5 left-5 text-muted-foreground/50 w-5 h-5" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Integration Niche (e.g., HubSpot + Filevine)"
                    className="w-full pl-14 pr-6 py-5 bg-secondary/30 border border-border rounded-2xl focus:border-blue-500 focus:bg-background outline-none transition-all placeholder:text-muted-foreground/50 text-foreground font-medium"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current workflow bottleneck..."
                  className="w-full px-6 py-5 bg-secondary/30 border border-border rounded-2xl h-44 resize-none focus:border-blue-500 focus:bg-background outline-none transition-all placeholder:text-muted-foreground/50 text-foreground font-medium"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaPaperPlane />
                  )}
                  {isSubmitting
                    ? "Sending Request..."
                    : "Request Strategy Session"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const ContactUs: FC<ContactUsProps> = ({ cta }) => {
//   const [formData, setFormData] = useState<FormData & { _honeypot: string }>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     _honeypot: "", // Added honeypot
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const MY_EMAIL = "saddam.stem@gmail.com";
//   const MY_PHONE = "+91 7004455742";
//   const MY_LOCATION = "Delhi NCR, India"; // Matches Gurgaon/Delhi area
//   // 1. THIS IS THE MISSING PIECE CAUSING YOUR ERROR
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (formData._honeypot) return; // Silent fail for bots

//     setIsSubmitting(true);
//     try {
//       console.log("formData", formData);
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         toast.success(
//           "Strategy session requested! Redirecting to my calendar..."
//         );
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//           _honeypot: "",
//         });

//         // Strategy: Shorten the sales cycle by redirecting to a meeting link
//         setTimeout(() => {
//           window.location.href = "https://calendly.com/your-link";
//         }, 1500);
//       } else {
//         toast.error("Failed to sync request. Please try again.");
//       }
//     } catch {
//       toast.error("Network error. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-background text-foreground overflow-hidden border-t border-border"
//     >
//       {/* ... (background elements same as your update) */}

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-6xl mx-auto bg-card/40 backdrop-blur-xl border border-border rounded-[2rem] p-8 md:p-14 shadow-2xl">
//           <div className="flex flex-col lg:flex-row gap-16">
//             {/* Left Side: Professional Positioning */}
//             <div className="flex-1 space-y-10">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">
//                   Available for High-Stake Integrations
//                 </span>
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6 tracking-tight leading-tight">
//                   {cta || "Architect Your Data Pipeline"}
//                 </h2>
//                 <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
//                   Stop manual entry. Scale your HubSpot workflows with{" "}
//                   <strong>enterprise-grade, fault-tolerant syncs</strong>.
//                 </p>
//               </motion.div>

//               {/* ... (contact items same as your update) */}
//             </div>

//             {/* Right Side: Inquiry Form */}
//             <div className="flex-1">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* Honeypot field - Hidden from users */}
//                 <input
//                   type="text"
//                   name="_honeypot"
//                   style={{ display: "none" }}
//                   tabIndex={-1}
//                   value={formData._honeypot}
//                   onChange={handleChange}
//                 />

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="relative">
//                     <FaUser className="absolute top-5 left-5 text-muted-foreground/50" />
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       placeholder="Full Name"
//                       className="w-full pl-14 pr-6 py-5 bg-secondary/30 border border-border rounded-2xl focus:border-blue-500 focus:bg-background outline-none transition-all text-foreground"
//                       onChange={handleChange}
//                       value={formData.name}
//                     />
//                   </div>
//                   <div className="relative">
//                     <FaEnvelope className="absolute top-5 left-5 text-muted-foreground/50" />
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       placeholder="Work Email"
//                       className="w-full pl-14 pr-6 py-5 bg-secondary/30 border border-border rounded-2xl focus:border-blue-500 focus:bg-background outline-none transition-all text-foreground"
//                       onChange={handleChange}
//                       value={formData.email}
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <MessageCircle className="absolute top-5 left-5 text-muted-foreground/50 w-5 h-5" />
//                   <input
//                     type="text"
//                     name="subject"
//                     required
//                     placeholder="Integration Niche (e.g., HubSpot + ServiceM8)" // ServiceM8 is a core skill
//                     className="w-full pl-14 pr-6 py-5 bg-secondary/30 border border-border rounded-2xl focus:border-blue-500 focus:bg-background outline-none transition-all text-foreground"
//                     onChange={handleChange}
//                     value={formData.subject}
//                   />
//                 </div>

//                 <textarea
//                   name="message"
//                   required
//                   placeholder="Describe your current data bottleneck or sync requirements..."
//                   className="w-full px-6 py-5 bg-secondary/30 border border-border rounded-2xl h-44 resize-none focus:border-blue-500 focus:bg-background outline-none transition-all text-foreground"
//                   onChange={handleChange}
//                   value={formData.message}
//                 />

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 active:scale-95"
//                 >
//                   {isSubmitting ? (
//                     <FaSpinner className="animate-spin" />
//                   ) : (
//                     <FaPaperPlane />
//                   )}
//                   {isSubmitting
//                     ? "Syncing Request..."
//                     : "Request Strategy Session"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
export default ContactUs;
