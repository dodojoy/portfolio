interface ButtonProps {
  lg?: boolean;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const BaseButton: React.FC<ButtonProps> = ({ text, lg, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        lg
          ? "w-[170px] md:w-[200px] p-[18px] md:p-[15px] text-[20px] md:text-[25px]"
          : "w-[130px] md:w-[160px] p-[12px] md:p-[12px] text-[15px] md:text-[20px]"
      }  uppercase bg-primary hover:bg-primary-dark transition-colors duration-300 ease-in-out rounded-[5px] cursor-pointer`}
    >
      {text}
    </button>
  );
};
