import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import React from 'react';
const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-36">
      <Card>
        <CardHeader className="flex justify-center mt-3">
          KIRISH
        </CardHeader>
        <CardBody className="flex gap-4">
          <Input
            type="email"
            label="Email"
            classNames={{
              inputWrapper: "w-64"
            }}
            variant="bordered"
            isInvalid={false}
            is={'sss'}
            className="max-w-xs"
          />
          <Input
            type="password"
            label="Password"
            classNames={{
              inputWrapper: "w-64"
            }}
            variant="flat"
            isInvalid={false}
            is={'sss'}
            className="max-w-xs"
          />
          <Button color="primary" className="text-sm py-6" variant="shadow" radius='md' fullWidth>
            KIRISH
          </Button> 
          </CardBody>
      </Card>
    </div>
  );
};

export default Login;
