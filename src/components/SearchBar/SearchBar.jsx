import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      toast.error("Please enter a keyword to search images.");
      return;
    }
    onSubmit(trimmed);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          className={styles.input}
          type="text"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
