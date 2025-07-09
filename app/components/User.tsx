interface UserProps {
  id: number;
  name: string;
}

const User: React.FC<UserProps> = ({ id, name }) => {
  return <li key={id}>{name}</li>;
};

export default User;
