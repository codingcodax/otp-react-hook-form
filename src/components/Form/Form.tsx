import {
  type ChangeEvent,
  type FormEventHandler,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

let currentIndex = 0;

const Form = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (data) => {
    console.log(data);
  };

  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const newOTP: string[] = [...otp];
    newOTP[currentIndex] = value.substring(value.length - 1);

    if (!value) setActiveIndex(currentIndex - 1);
    else setActiveIndex(currentIndex + 1);
    setOtp(newOTP);
  };

  const handleKeyDown = (
    { key }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentIndex = index;
    if (key === "Backspace") setActiveIndex(index - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-x-2">
        {otp.map((_, index) => (
          <input
            required
            ref={index === activeIndex ? inputRef : null}
            key={index}
            type="number"
            className="spin-button-none h-12 w-12 rounded border border-zinc-300 bg-transparent text-center text-xl font-semibold outline-none transition duration-200"
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, index)}
            value={otp[index]}
          />
        ))}
      </div>
      <button>Verify Email</button>
    </form>
  );
};

export default Form;
