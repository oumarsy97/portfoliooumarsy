import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
    const contacts = [
        {
            icon: MessageCircle,
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send/?phone=+221781807229&text=Hello+Oumar+How+are+you",
            color: "text-[#6CA2BC] dark:text-[#8EC5FC]"
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/oumar-sy-061797233/",
            color: "text-[#6CA2BC] dark:text-[#8EC5FC]"
        },
        {
            icon: Mail,
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
                        className="flex items-center gap-3 px-6 py-3 rounded-lg
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
                            <contact.icon
                                size={24}
                                className={`${contact.color} transition-colors duration-200`}
                            />
                            <div className="absolute inset-0 bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10
                                          rounded-full filter blur-xl opacity-0 group-hover:opacity-100
                                          transition-opacity duration-300" />
                        </motion.div>
                        <span className="font-medium text-[#2C5364] dark:text-[#8EC5FC]">
                            {contact.name}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default ContactSection;