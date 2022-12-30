import Link from "next/link";
import React from "react";
import Outline from "../components/layout/Outline";
import Page from "../components/layout/Page";

export default function Home() {
  return (
    <Page>
      <Outline extraClass={styles.container}>
        <h1 className="w-[12em] flex-wrap text-center text-6xl font-bold capitalize">
          <span className="tracking-normal  text-purple-700">
            School Management
          </span>
          <br /> has never been Easier
        </h1>
        <p className="mx-auto text-3xl font-medium">
          Welcome to <span className="text-purple-700">MANAGE!</span>
        </p>
        <Link
          href={"/login"}
          className="mx-auto rounded-lg bg-purple-700 p-2 px-4 text-2xl font-medium tracking-wider text-white hover:bg-purple-500"
        >
          <button>Get Started</button>
        </Link>
      </Outline>
    </Page>
  );
}
const styles = {
  wrapper: `flex w-full flex-col items-center h-[80vh] justify-center`,
  container: `flex flex-col gap-6 tracking-wider p-10`,
};