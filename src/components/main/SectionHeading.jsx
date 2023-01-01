const SectionHeading = ({ name, classname }) => {
  return (
    <div className="row mb-5 py-4">
      <h2 className={`section__head text-white pt-5 ${classname}`}>{name}</h2>
    </div>
  );
};

export default SectionHeading;