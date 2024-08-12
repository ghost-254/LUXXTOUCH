// Footer.tsx
'use server'

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 font-mono flexCenter py-20 text-white">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.png" alt="logo" width={74} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={`footer-column-${index}`}>
                <ul className="regular-14 flex flex-col gap-4 text-indigo-50">
                  {columns.links.map((link, linkIndex) => (
                    <Link
                      className="hover:text-green-600"
                      href={
                        link === 'About Lux' ? '/about' :
                        link === 'General Terms of Use' ? '/general-terms' :
                        link === 'Privacy Policy' ? '/privacy-policy' :
                        link === 'Terms and Conditions for Masseuses/Masseurs' ? '/masseuses-terms' :
                        link === 'Terms and Conditions for Clients' ? '/clients-terms' :
                        link === 'Close Account' ? '/close-account' :
                        link
                      }
                      key={`footer-link-${linkIndex}`}>
                      {link}                  
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title} key="footer-contact-info">
                {FOOTER_CONTACT_INFO.links.map((link, contactIndex) => (
                  <div
                    key={`contact-link-${contactIndex}`}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <a href='mailto:info@luxxtouch.com' className="medium-14 whitespace-nowrap text-white hover:text-green-600">
                      {link.value}
                    </a>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key="footer-socials">
                <ul className="regular-14 flex gap-4 text-white">
                  {SOCIALS.links.map((link, socialIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <Link href={link.url} key={`social-link-${socialIndex}`} target="_blank" rel="noopener noreferrer">
                        <IconComponent size={24} className="text-white hover:text-green-500 transition-colors duration-300"/>
                      </Link>
                    );
                  })}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14-full text-center text-gray-20"> © 2024 Lux Massage | Terms & Conditions Apply</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer;
