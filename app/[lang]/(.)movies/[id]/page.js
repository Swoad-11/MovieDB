import Modal from "@/app/components/Modal";
import MovieDetails from "@/app/components/MovieDetails";

const MovieModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <MovieDetails id={id} lang={lang} />
    </Modal>
  );
};

export default MovieModal;
