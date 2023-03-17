import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { email } = useSelector((state) => state.user);

  const { register, handleSubmit, setValue, watch } = useForm();

  // після монтування компоненту встановлюємо значення поля форми
  useEffect(() => {
    setValue("email", watch("email") || "");
    setValue("password", watch("password") || "");
  }, [setValue, watch]);

  //реєстрація новго користувача
  const onSubmit = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        dispatch(
          setUser({
            email: user.user.email,
            id: user.user.uid,
            token: user.user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="email" autoComplete="on" />
        <input {...register("password")} type="password" autoComplete="on" />

        <Button type="submit" name="Send" />
      </form>

<div className="error">{error && error.substring(5)}</div>

    </div>
  );
}

export default Form;
