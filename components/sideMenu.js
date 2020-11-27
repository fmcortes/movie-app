import { createMovie } from '../actions';
import Modal from '../components/modal';
import MovieCreateForm from './movieCreateForm';
import { useRouter } from 'next/router';

// Contaiment on Modal with Movie form
const SideMenu = (props) => {
  const { appName, categories, changeCategory, activeCategory } = props;
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal();
      router.push('/');
    });
  };

  return (
    <div>
      <Modal hasSubmit={false} ref={(elem) => (modal = elem)}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a
            onClick={() => changeCategory(category.name)}
            href="#"
            className={`list-group-item ${activeCategory === category.name
              ? 'active'
              : ''}`}
            key={category.id}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
