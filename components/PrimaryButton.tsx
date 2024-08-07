"use client";
const PrimaryButton = ({ children, onClick, disabled, className }: any) => {
  return (
    <button
      className={`bg-primary-orange text-white py-2.5 px-3 border border-transparent rounded-[4px] inline-block w-full hover:bg-[#904504] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
