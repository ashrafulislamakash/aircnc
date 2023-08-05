const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
<<<<<<< HEAD
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
=======
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b
      `}
    >
      {Icon && (
        <Icon
          size={24}
<<<<<<< HEAD
          className="
            absolute
            left-4
            top-3
          "
=======
          className='
            absolute
            left-4
            top-3
          '
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b
        />
      )}
      {label}
    </button>
<<<<<<< HEAD
  );
};

export default Button;
=======
  )
}

export default Button
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b
