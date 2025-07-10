import { useState } from "react";

interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const User: React.FC<UserProps> = ({ id, name, email, phone }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <li
      className="p-4 bg-white shadow-md rounded-lg border cursor-pointer my-3"
      onClick={handleToggle}
      role="button"
      aria-expanded={toggle}
      aria-controls={`user-details-${id}`}
    >
      <h6>
        {id}. {name}
      </h6>
      {toggle && (
        <div className="transition-all duration-300 ease-in-out">
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
      )}
    </li>
  );
};

export default User;
