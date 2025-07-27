import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // your delete logic here
    // then:
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
