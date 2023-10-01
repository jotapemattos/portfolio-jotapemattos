'use client';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy, Send } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import SocialMedia from '../SocialMedia';

const Contact = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: 'Successfully copied!',
      description: '"jpmrc49@gmail.com" copied to clipboard'
    });
  };

  return (
    <>
      <div
        id="contact"
        className="w-full max-h-full flex flex-col items-center justify-center gap-16 px-2 pt-10 md:px-0 md:pt-20 pb-10"
      >
        <span className="flex flex-col items-center justify-center text-center md:text-justify gap-4">
          <p>Do you have an idea you want to get off the ground?</p>
          <h1 className="text-primary text-2xl md:text-3xl font-bold">
            Let&apos;s talk about it
          </h1>
        </span>
        <span className="flex items-center gap-4 px-4 py-2 h-10 text-md border border-input rounded-md">
          <p className="text-md">jpmrc49@gmail.com</p>
          <CopyToClipboard text="jpmrc49@gmail.com" onCopy={() => showToast()}>
            <Copy size={18} className="hover:cursor-pointer" />
          </CopyToClipboard>
          <a href="mailto:jpmrc49@gmail.com">
            <Send size={18} />
          </a>
        </span>
        <div className="md:hidden">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Contact;
