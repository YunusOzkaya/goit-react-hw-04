import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./api/unsplash";
import { Toaster } from "react-hot-toast";

const IMAGES_PER_PAGE = 12;

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = async (searchTerm) => {
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
    setTotalPages(0);
    setError("");
    setModalImage(null);

    setLoading(true);
    try {
      const data = await fetchImages(searchTerm, 1, IMAGES_PER_PAGE);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("An error occurred while fetching images.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await fetchImages(query, nextPage, IMAGES_PER_PAGE);
      setImages((prev) => [...prev, ...data.results]);
      setPage(nextPage);
    } catch (err) {
      setError("An error occurred while fetching more images.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (img) => setModalImage(img);

  const handleCloseModal = () => setModalImage(null);

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={handleImageClick} />

      {loading && <Loader />}

      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal image={modalImage} onClose={handleCloseModal} />
    </>
  );
};

export default App;
