import ClientComponent from "@/app/(with-searchbar)/clien-component";
import ServerComponent from "@/app/(with-searchbar)/server-component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
