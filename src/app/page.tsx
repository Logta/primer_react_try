"use client";
import { Buttons } from "./button";
import { Dialog } from "./dialog";
import { Dropdown } from "./dropdown";
import { Tool } from "./tooltip";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Buttons />
      <Dialog />
      <Dropdown />
      <Tool />
    </main>
  );
}
