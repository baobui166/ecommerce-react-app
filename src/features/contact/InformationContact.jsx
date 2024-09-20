import ContactRow from "./ContactRow";

function InformationContact() {
  return (
    <div>
      <h2 className="md:text-2xl text-sm font-bold">Thông tin liên hệ</h2>
      <div className="flex flex-col gap-1">
        <ContactRow method={"Hotline"} contacAddress={"0847 5222 69"} phone />
        <ContactRow
          method={"Email"}
          contacAddress={"hardmode.vn@gmail.com"}
          send
        />
        <ContactRow method={"Chatbox"} contacAddress={"Messenger"} />
      </div>
    </div>
  );
}

export default InformationContact;
