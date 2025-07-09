interface UserProps {
  id: number;
  name: string;
}

const User: React.FC<UserProps> = ({ id, name }) => {
  return (
    <li>
      {id}. {name}
    </li>
  );
};

export default User;
