type InputFieldProps = { type: string; placeholder: string };

export default function InputField({ type }: InputFieldProps) {
  return (
    <div className="w-full h-fit bg-gradient-to-r from-[#47B368] to-[#1C8894] p-0.5 rounded-sm">
      <div className="h-full w-full bg-white">
        <input
          type="text"
          required
          autoFocus
          placeholder="Coloque seu nome aqui..."
          className="w-full rounded-lg transition-all duration-300 outline-none p-2 font-medium"
          name="nome"
        />
      </div>
    </div>
  );
}
