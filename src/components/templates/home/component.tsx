import clsx from "clsx";
import { Footer } from "@/components/atoms/footer";
import { HomeTemplateProps } from "./types";
import styles from "./styles.module.css";

export const HomeTemplate = ({ cars = [], totalPages }: HomeTemplateProps) => {
  return (
    <>
      <main className={clsx(styles.main)}></main>
      <Footer totalPages={totalPages} />
    </>
  );
};
