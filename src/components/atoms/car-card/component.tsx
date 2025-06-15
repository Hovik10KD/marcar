"use client";

import {
  Badge,
  Button,
  Card,
  CardSection,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import Image from "next/image";
import clsx from "clsx";
import { toast } from "react-toastify";
import { CarCardProps } from "./types";
import styles from "./styles.module.css";

export const CarCard = ({ car }: CarCardProps) => {
  const handleShowMore = () => {
    toast.warn("В разработке!");
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Flex justify="space-between" direction="column" h="100%">
        <CardSection>
          <Image
            src={car.images.image[0]}
            alt={`${car.mark_id} ${car.folder_id}`}
            width={100}
            height={180}
            className={clsx(styles.image)}
            priority
          />
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>
            {car.mark_id} - {car.folder_id}
          </Text>
        </Group>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Цена</Text>
          <Badge color="pink" size="xl">
            {`${car.price} ${car.currency}`}
          </Badge>
        </Group>

        <Button fullWidth mt="md" radius="md" onClick={handleShowMore}>
          Информация
        </Button>
      </Flex>
    </Card>
  );
};
