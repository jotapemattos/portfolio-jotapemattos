const Footer = () => {
  return (
    <footer className="mt-10 p-4 flex items-start justify-evenly gap-10 text-sm">
      <p className="flex items-center gap-1">
        ⚡ Built with
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Next.js
        </a>
        and
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          shadcn/ui
        </a>
      </p>
    </footer>
  );
};

export default Footer;
