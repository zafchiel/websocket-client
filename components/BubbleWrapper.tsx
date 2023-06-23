import styles from "./bubbles.module.css"

export default function BubbleWrapper() {
  return (
    <div className="fixed inset-y-0 left-0">
      <div className={styles.bubble}></div>
    </div>
  )
}
