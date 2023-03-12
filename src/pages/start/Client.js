import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import {setFirstName} from "../../redux/slices/clientSlice";

function Client() {
 const [send, setSend] = useState(false);


  const { firstName } = useSelector((state) => state.client);

  const db = getDatabase();
  const auth = getAuth();
  const dispatch = useDispatch();

  //FORM
  const { register, handleSubmit, setValue, watch } = useForm();

  // записуємо в onSubmit(data)
  useEffect(() => {
    setValue("firstName", watch("firstName") || "");
  }, [setValue, watch]);

  const onSubmit = (data) => {
    writeUserData(userId, data.firstName, "fff");
    setSend(!send);
   
  };

  const userId = auth.currentUser.uid;
  useEffect(()=>{
       //Зчитуємо дані з бази даних
    
       onValue(
         ref(db, "/users/" + userId),
         (snapshot) => {
          dispatch(setFirstName((snapshot.val() && snapshot.val().firstName) || null));
         },
         {
           onlyOnce: true,
         }
       );

  },[send])
 
 


  

  //записуємо дані для запису в загальну базу даних користувача
  function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, "users/" + userId), {
      firstName: name,
      email: email,
    });
  }

  //перевіряємо чи залогінився користувач
  //console.log(userId);
  // userId === undefined? navigate("/login") : navigate("/client");

  return (
    <div className="container column">
     
        <h2>Ваші дані</h2>
        
          <form onSubmit={handleSubmit(onSubmit)}>
            {firstName === null ? (
              <div className="client-form">
                <label htmlFor="firstName">Введіть Ім'я</label>
                <input
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  autoComplete="on"
                />
              </div>
            ) : (
              <div className="client-form">
                <div className="client-name"><span>Ваше Імя:</span> {firstName}</div>
                <div>
                  <label htmlFor="firstName">Змінити Імя </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    name="firstName"
                    autoComplete="on"
                  />
                </div>
              </div>
            )}

            <Button type="submit" name="Send" />
          </form>
        
     
    </div>
  );
}

export default Client;
