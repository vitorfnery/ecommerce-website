import "./styles.css";

const FilterButton = ({ content, onClick, selectedCategory }) => {
  return (
    <button
      className={
        selectedCategory === content
          ? "filter__button__select"
          : "filter__button"
      }
      onClick={onClick}
    >
      <span
        className={
          selectedCategory === content
            ? "filter__button__span__selected"
            : "filter__button__span"
        }
      >
        {content}
      </span>
    </button>
  );
};
export default FilterButton;
