import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  sortOption: string;
  setSortOption: (option: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<ModalProps> = ({ sortOption, setSortOption, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSortChange = (option: string) => {
    setSortOption(option);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Сортировка</h2>
        <span onClick={onClose} className={styles.cross}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#F7F7F8" />
            <path
              d="M16.7364 7.2636C17.0879 7.61508 17.0879 8.18492 16.7364 8.5364L13.273 12L16.7364 15.4636C17.0586 15.7858 17.0854 16.2915 16.817 16.6442L16.7364 16.7364C16.3849 17.0879 15.8151 17.0879 15.4636 16.7364L12 13.273L8.5364 16.7364C8.18492 17.0879 7.61508 17.0879 7.2636 16.7364C6.91213 16.3849 6.91213 15.8151 7.2636 15.4636L10.727 12L7.2636 8.5364C6.94142 8.21421 6.91457 7.70853 7.18306 7.35577L7.2636 7.2636C7.61508 6.91213 8.18492 6.91213 8.5364 7.2636L12 10.727L15.4636 7.2636C15.8151 6.91213 16.3849 6.91213 16.7364 7.2636Z"
              fill="#C3C3C6"
            />
          </svg>
        </span>
        <div className={styles["radio-list"]}>
          {["alphabet", "birthday"].map((option) => (
            <label key={option} className={styles.radioLabel}>
              <input
                type="radio"
                value={option}
                checked={sortOption === option}
                onChange={() => handleSortChange(option)}
                className={styles.radioInput} // скрываем input
              />
              <span className={styles.radioCustom}>
                {sortOption === option ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
                      stroke="#6534FF"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#6534FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#aaa" strokeWidth="2" />
                  </svg>
                )}
              </span>
              {option === "alphabet" ? "По алфавиту" : "По дню рождения"}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
