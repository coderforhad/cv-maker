import InputField from "./elements/InputField";

const Contact = () => {
  return (
    <>
      <InputField 
        label="Email" 
        name="email"
      />
      <InputField 
        label="Phone" 
        name="phone"
      />
      <InputField 
        label="Address" 
        name="address"
      />
    </>
  );
};
export default Contact;
