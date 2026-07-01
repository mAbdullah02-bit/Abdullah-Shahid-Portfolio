import { Linkedin, Github, Heart, Rocket, Mail } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const socialIcons = [
    {
      icon: <Linkedin className="h-4 w-4" />,
      url: 'https://www.linkedin.com/in/m-abdullah-8901b529a',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      url: 'mailto:mabdullahshahid019@gmail.com',
      label: 'Email',
    },
    {
      icon: <Github className="h-4 w-4" />,
      url: 'https://github.com/mAbdullah02-bit',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-white/5 bg-transparent py-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 max-w-[1200px] mx-auto gap-8">
        {/* Logo and Role details */}
        <div className="space-y-2 text-center md:text-left">
          <div
            onClick={() => onScrollToSection('home')}
            className="font-display-lg text-lg font-bold hover:text-primary-container transition-colors cursor-pointer flex items-center justify-center md:justify-start gap-2"
          >
            <Rocket className="h-5 w-5 text-primary-container" />
            <span>Abdullah.</span>
          </div>
          <div className="font-label-caps text-xs text-neutral-400 dark:text-on-surface-variant uppercase tracking-widest">
            App Developer &amp; Data Analyst
          </div>
        </div>

        {/* Social Link channels */}
        <div className="flex gap-4">
          {socialIcons.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-primary-container/10 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-primary-container transition-all"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Brand Copyright */}
        <div className="font-label-caps text-xs text-neutral-400 dark:text-on-surface-variant text-center md:text-right">
          © 2026 Made with <span className="text-red-500 animate-pulse">❤️</span> by{' '}
          <span className="text-primary-container font-bold">Abdullah Shahid</span>
        </div>
      </div>
    </footer>
  );
}
