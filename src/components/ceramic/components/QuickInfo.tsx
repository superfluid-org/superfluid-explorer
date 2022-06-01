import styles from "../../../styles/ceramic.module.css";
import { IQuickInfo } from "../types";

export default function QuickInfo({ quickInfo }: { quickInfo: IQuickInfo }) {
  return (
    <div>
      <h3 style={{margin: 0, marginBottom: ".5rem"}}>Quick Info</h3>
      <div className={styles.quickInfo}>
        <div className={styles.quickInfoCard}>
          <p>Addresses In Ceramic Store</p>
          <h3 style={{ color: "#00A72F" }}>{quickInfo?.ceramicWalletsCnt}</h3>
        </div>
        <div className={styles.quickInfoCard}>
          <p>Unlinked Addresses In Local Store</p>
          <h3 style={{ color: "#CA0000" }}>{quickInfo?.unlinkedWalletsCnt}</h3>
        </div>
      </div>
    </div>
  );
}
