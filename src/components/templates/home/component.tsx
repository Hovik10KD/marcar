import clsx from "clsx";
import { Footer } from "@/components/atoms/footer";
import { CarCard } from "@/components/atoms/car-card";
import { Box } from "@mantine/core";
import { SortingButton } from "@/components/atoms/sorting-button";
import { HomeTemplateProps } from "./types";
import styles from "./styles.module.css";

export const HomeTemplate = ({ cars = [], totalPages }: HomeTemplateProps) => {
  return (
    <>
      <main className={clsx(styles.main)}>
        <Box p="lg">
          <SortingButton />
        </Box>
        <div className={clsx(styles.carsBlock)}>
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </main>
      <Footer totalPages={totalPages} />
    </>
  );
};
