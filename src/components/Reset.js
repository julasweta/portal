import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate } from "react-router-dom";
import Button from "./Button";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Reset() {
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState("");

  //відновлення паролю
  function onSubmit() {
    var auth = getAuth();

    sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login', // куди переадресовуємо після зміни паролю
      handleCodeInApp: true
    })
      .then(function () {
        navigate('/')
        alert(" Лист з посиланням на відновлення паролю надіслано.");
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Виникла помилка. Обробіть її відповідним чином.");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type={"submit"} name={"Send"}></Button>
      </form>
    </div>
  );
}

export default Reset;
