const h1Style = {
  textAlign: "center",
  paddingBottom: "1rem",
};

const pStyle = {
  width: "60%",
  margin: "0 auto",
};
const CustomText = () => {
  return (
    <>
      <h1 style={h1Style}>Github Action Learning</h1>
      <p style={pStyle}>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.” The purpose of lorem ipsum is to create a
        natural looking block of text (sentence, paragraph, page, etc.) that
        doesnt distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content.
      </p>
    </>
  );
};

export default CustomText;
