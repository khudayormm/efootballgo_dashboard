import { useMutation } from '@apollo/client';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LOGIN_USER } from "~/apollo/mutations/users/auth";
const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required().min(5).max(30)
  })
  .required()

  type FormValues = {
    username: string,
    password: string
  }

const LoginForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onError: (error) => {
      setError(error.message)
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  
  const onSubmit = handleSubmit(async(data) => {
    try {
      const res = await loginUser({
        variables: {
          username: data.username,
          password: data.password
        }
      })

      localStorage.setItem("access_token", res.data.loginUser.access_token)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  })



  return (
    <div className="flex justify-center items-center mt-36">
      <Card>
        <CardHeader className="flex justify-center mt-3">KIRISH</CardHeader>
        <CardBody className="flex gap-4">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input
            {...register("username")}
              type="text"
              label="Username"
              onChange={() => setError(null)}
              classNames={{
                inputWrapper: "w-64",
              }}
              variant="bordered"
              isInvalid={errors.username || error ? true : false}
              errorMessage={errors.username?.message || error}
              className="max-w-xs"
            />
            <Input
              {...register("password")}
              type="password"
              label="Password"
              classNames={{
                inputWrapper: "w-64",
              }}
              variant="flat"
              isInvalid={errors.password ? true : false}
              errorMessage={errors.password?.message}
              className="max-w-xs"
            />
            <Button
              type="submit"
              color="primary"
              isLoading={loading}
              className="text-sm py-6"
              variant="bordered"
              radius="md"
              fullWidth
            >
              KIRISH
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;
