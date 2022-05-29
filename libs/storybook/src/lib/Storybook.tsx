import styles from './Storybook.module.scss';

/* eslint-disable-next-line */
export interface StorybookProps {}

export function Storybook(props: StorybookProps) {
  return (
    <div className={styles['container']}>
      <p>Welcome to Storybook!</p>
    </div>
  );
}

export default Storybook;
