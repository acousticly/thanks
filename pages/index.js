import Head from 'next/head'
import styles from '../styles/Home.module.css'
const ReactRotatingText = require('react-rotating-text')
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thanks for Using Acoustic</title>
        <link rel="icon" href="/meta.webp" />
      </Head>

      <main id="info" className={styles.main}>
        <h1 className={styles.title}>
          Thanks for choosing
          <ReactRotatingText
            items={[
              ' Acoustic',
              ' the best music bot',
              ' your newest server member',
              ' the coolest disk-jockie'
            ]}
          />
        </h1>

        <div className={styles.grid}>
          <a href="https://acoustic.to/patreon" className={styles.card}>
            <h3>Support us on Patreon &rarr;</h3>
            <p>Support Acoustic with a small donation. We appreciate it ❤️</p>
          </a>

          <a href="https://docs.acoustic.to" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Acoustic with gifs and helpful docs!</p>
          </a>

          <a href="https://acoustic.to/invite" className={styles.card}>
            <h3>Invite us to your servers &rarr;</h3>
            <p>
              You like us that much? By all means, we'd love to jam with you.
            </p>
          </a>

          <a href="https://acoustic.to/vote" className={styles.card}>
            <h3>Vote for Acoustic &rarr;</h3>
            <p>
              Feel free to vote for us if you like what we're doing. It's like a
              free donation.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
