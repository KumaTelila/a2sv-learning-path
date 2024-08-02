import React, { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import swal from "sweetalert";
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
  });
  const { register, control, handleSubmit, formState, setValue, watch, reset } =
    form;
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } =
    formState;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors) => {
    console.log("errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      swal("Good job!", "Form submitted successfully!", "success");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleSetValue = () => {
    setValue("message", "", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  return (
    <div className="mt-4">
      <h3 className="text-center">Contact Form</h3>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="border p-3"
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Example Jhon Doe"
            {...register("name", { required: "Name is required" })}
          />
          <p className="text-danger">{errors.name?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
              required: "Email is required",
              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Please use another email"
                );
              },
            })}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            {...register("message", { required: "Message is required" })}
          />
          <p className="text-danger">{errors.message?.message}</p>
          {watch("message") !== "" && (
            <button
              type="submit"
              onClick={handleSetValue}
              className="btn btn-danger"
            >
              Clear
            </button>
          )}
        </div>
        <div className="row justify-content-start">
          <div className="col">
            <button
            id="liveToastBtn"
              disabled={!isDirty || !isValid || isSubmitting}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <div className="col">
            <button
              disabled={!isDirty || isSubmitting}
              type="button"
              className="btn btn-secondary"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
