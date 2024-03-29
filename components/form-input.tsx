interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        className="bg-transparent rounded-lg focus:border-orange-500 
        ring-neutral-200
        focus:outline-none
        focus:ring-orange-500
        ring-1 focus:ring-4 border-none w-full"
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
