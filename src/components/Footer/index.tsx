const Footer = () => {
  return (
    <footer className="w-full h-20 bg-black flex flex-row justify-center items-center">
      <p className="not-italic font-light text-lg leading-none uppercase text-white cursor-pointer hover:text-[#A0141C]">
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
