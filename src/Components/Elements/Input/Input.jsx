import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm rounded 2-full py-2 px-3 text-slate-700 border-1 outline-0 w-full shadow-current "
      placeholder={placeholder}
      name={name}
      required
      ref={ref}
    />
  );
});
