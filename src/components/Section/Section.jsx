import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <div className={css.sectionContainer}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
