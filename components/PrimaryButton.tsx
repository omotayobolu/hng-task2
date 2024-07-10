const PrimaryButton = ({ children, onClick }: any) => {
  return (
    <button
      className="bg-primary-orange text-white py-2.5 px-3 border border-transparent rounded-[4px] inline-block w-full hover:bg-[#904504]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
