import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch} from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { register, handleSubmit, setValue, watch } = useForm();



  //відправка даних, форма авторизації
  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        localStorage.setItem("emailLocal", JSON.stringify(user.user.email));
        localStorage.setItem("idLocal", JSON.stringify(user.user.uid));
        localStorage.setItem("accesLocal", JSON.stringify(user.user.accessToken));
        dispatch(
          setUser({
            email: user.user.email,
            id: user.user.uid,
            token: user.user.accessToken,
          })
        );
        navigate("/*");
      })
      .catch((error) => {
       // setError(error.code);
      });
  
  };

  /* після монтування компоненту встановлюємо значення поля форми, 
  які передаються в data onSubmit */
  useEffect(() => {
    setValue("email", watch("email") || "");
    setValue("password", watch("password") || "");
  }, [setValue, watch]);


  const userIdLocal = JSON.parse(localStorage.getItem("userIdLocal") );



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Вхід в особистий кабінет</h2>
        <input
          {...register("email")}
          type="email"
          autoComplete="on"
        />
        <input
          {...register("password")}
          type="password"
          autoComplete="on"
        />

        <Button type={"submit"} name={"Send"}></Button>
      </form>
      <Link to="/reset" >Відновити пароль</Link>
      <div className="error">{error && error.substring(5)}</div>
    </div>
  );
}

export default SignUp;

