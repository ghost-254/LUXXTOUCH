// index.ts file
import { IconType } from 'react-icons';
import { FaFacebookF, FaTelegramPlane, FaTiktok, FaInstagram } from 'react-icons/fa';

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about', key: 'about', label: 'About Lux' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/contact', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // PEOPLE JOINED SECTION
  export const PEOPLE_URL = [
    '/person-1.jpg',
    '/person-2.jpg',
    '/person-3.jpg',
    '/person-4.jpeg',
  ];
  
  // SERVICES SECTION
  export const SERVICES = [
    {
      title: 'Swedish Massage',
      icon: '/one.svg',
      variant: 'blue',
      description:
        'This is a gentle, full-body massage that uses long strokes, kneading, deep circular movements, and tapping to help relax and energize.',
    },
    {
      title: 'Nuru Massage',
      icon: '/two.svg',
      variant: 'blue',
      description:
        "Originating from Japan, nuru massage involves the use of a special gel made from seaweed to provide a slippery and sensual experience. It typically involves body-to-body contact for an intimate and arousing experience.",
    },
    {
      title: 'Erotic Massage',
      icon: '/three.svg',
      variant: 'blue',
      description:
        "Indulge in the ultimate sensory experience with our erotic massage sessions. Let our skilled masseuses and masseurs guide you through a journey of sensual bliss, igniting your senses and awakening every inch of your body. Explore the depths of pleasure in a safe and comfortable environment tailored to your desires.",
    },
    {
      title: 'Facial Massage',
      icon: '/four.svg',
      variant: 'blue',
      description:
        'We offer facial massage, which has proven to be a rejuvenating practice that involves manipulating the soft tissues of the face and neck using various techniques and pressures. It offers numerous benefits for your skin, muscles, and overall well-being.',
    },
  ];
  
// TESTIMONIALS SECTION
export const testimonials = [
  { author: "Otieno", text: "I've never experienced such blissful relaxation before! Luxx Touch is truly magical." },
  { author: "Jane", text: "Luxx Touch massage services are a game changer. I feel rejuvenated and ready to conquer the world!" },
  { author: "Brian", text: "All I can say that it has been a long time coming. We have lacked a genuine site like Lux, where you basically swipe (just like in Tinder) and get to pick your favorite masseuse. One more thing: they're beautiful too." },
  { author: "Kamau", text: "Mimi niko tuu na neno moja: what happens in Lux Vegas stays in Lux Vegas" },
  { author: "Jay B.", text: "Hii site walai wamefikiria. Saa ukitaka manzi akumassage unadownload tuu hii app yao alafu unapata mamanzi kibao hapo ndani. I swear, I am happy TBH. Thanks Lux." },
  { author: "Kevin", text: "These guys are cool asf. My go to place when I need some relaxing with a kababy. I just swipe and DM my favorite. That's it. Rates zao pia ni cool and affordable." },
  { author: "Elisa", text: "I like Lux so much because it's my side hustle. I get to earn some cool sum every month. They have also ensured that we are safe because they collect client's details. So, you are sure the client will do no harm to you ukienda hiyo sessions zako." },
];

  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Lux',
        'General Terms of Use',
        'Privacy Policy',
        'Terms and Conditions for Masseuses/Masseurs',
        'Terms and Conditions for Clients',
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Our Contact Info',
    links: [
      { label: 'For Enquiries', value: 'info@luxxtouch.com' },
    ],
  };
  
  export const SOCIALS: { title: string; links: { icon: IconType; url: string; }[] } = {
    title: 'Socials',
    links: [
      {
        icon: FaFacebookF,
        url: 'https://www.facebook.com/luxxvitaspa/'
      },
      {
        icon: FaTelegramPlane,
        url: 'https://t.me/luxx_massage'
      },
      {
        icon: FaTiktok,
        url: 'https://www.tiktok.com/@luxx_touch'
      },
      {
        icon: FaInstagram,
        url: 'https://www.instagram.com/luxxmassage2024/'
      },
    ],
  };
  
