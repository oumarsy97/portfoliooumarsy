import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.63 4.08 1.83 5.78l-1.2 4.37 4.5-1.15c1.64 1.01 3.53 1.54 5.47 1.54 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.75 2.67 4.23 3.74.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

const ContactSection = () => {
    const contacts = [
        {
            icon: WhatsAppIcon,
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send/?phone=+221781807229&text=Hello+Oumar+How+are+you",
            color: "text-[#6CA2BC] dark:text-[#8EC5FC]"
        },
        {
            icon: LinkedInIcon,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/oumar-sy-061797233/",
            color: "text-[#6CA2BC] dark:text-[#8EC5FC]"
        },
        {
            icon: EmailIcon,
            name: "Email",
            link: "mailto:syoumar505@gmail.com",
            color: "text-[#6CA2BC] dark:text-[#8EC5FC]"
        }
    ];

    return (
        <div className="container mx-auto max-w-4xl px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold text-[#2C5364] dark:text-[#8EC5FC] mb-4">
                    Let's Connect
                </h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-[#6CA2BC] dark:bg-[#8EC5FC] mx-auto rounded-full"
                />
            </motion.div>

            {/* Freelance Availability Message */}
            <div className="text-center mb-12">
                <p className="text-lg font-medium text-[#2C5364] dark:text-[#8EC5FC]">
                    I am available for freelance projects. Please feel free to contact me for your projects!
                </p>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
                {contacts.map((contact, index) => (
                    <motion.a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-3 px-6 py-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg
                                 bg-[#E6E9F0]/50 dark:bg-[#2C5364]/30
                                 backdrop-blur-sm
                                 shadow-lg hover:shadow-xl
                                 transition-all duration-200
                                 border border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20"
                    >
                        <motion.div
                            whileHover={{ rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="relative"
                        >
                            <contact.icon />
                            <div className="absolute inset-0 bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10
                                          rounded-full filter blur-xl opacity-0 group-hover:opacity-100
                                          transition-opacity duration-300" />
                        </motion.div>
                        <span className="font-medium text-[#2C5364] dark:text-[#8EC5FC] mt-2">
                            {contact.name}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default ContactSection;
