import { Response } from 'https://deno.land/x/oak/mod.ts';

interface User {
  id: string;
  name: string;
}

let users: User[] = [
  {
    id: '1',
    name: 'Athos',
  },
  {
    id: '2',
    name: 'Porthos',
  },
  {
    id: '3',
    name: 'Aramis',
  },
  {
    id: '4',
    name: 'D\'Artagnan',
  }
];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: 'Sucessful Query',
    users,
  };
};

export const getUser = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}) => {
  const userFound = users.find((user) => user.id === params.id);

  if (userFound) {
    response.status = 200;
    response.body = {
      message: 'You got a single User',
      userFound,
    };
  } else {
    response.status = 404;
    response.body = {
      message: 'User Not Found',
    };
  }
};
