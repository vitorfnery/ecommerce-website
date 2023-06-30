import { FOOTER_INFO } from "~/constants";

const Footer = () => {
  const { content } = FOOTER_INFO;
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center">{content}</p>
      </div>
    </footer>
  );
};
export default Footer;
