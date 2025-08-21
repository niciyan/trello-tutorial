import { useFormStatus } from "react-dom";

interface Props {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: Props) => {
  const { pending } = useFormStatus();
  return (
    <>
      <input
        id="title"
        name="title"
        required
        placeholder="title.."
        className="border-black border p-1"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};
