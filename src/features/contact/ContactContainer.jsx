import ContactForm from "./ContactForm";

function ContactContainer() {
  return (
    <div className="my-16 p-4">
      <h2 className="text-2xl text-black uppercase text-center">Liên hệ</h2>
      <div className="sm:w-[80%] w-full mx-auto flex items-center justify-center gap-5 mt-10">
        <ContactForm />
        <img
          src="https://theme.hstatic.net/200000260587/1001225543/14/contact-image.jpg?v=294"
          alt="Contact Photo"
          className="max-w-[550px] h-[680px] hidden lg:block object-cover"
        />
      </div>
    </div>
  );
}

export default ContactContainer;
