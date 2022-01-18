import Head from 'next/head'
import styles from '../styles/Home.module.css'
const ReactRotatingText = require('react-rotating-text')

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thanks for choosing Acoustic</title>
        <meta name="theme-color" content="#2F3136" />
        <link rel="preconnect" href="https://docs.acoustic.to" />
        <link rel="preconnect" href="https://www.patreon.com" />
        <link rel="preconnect" href="https://discord.com" />
        <link rel="preconnect" href="https://top.gg" />
        <link rel="dns-prefetch" href="https://docs.acoustic.to" />
        <link rel="dns-prefetch" href="https://www.patreon.com" />
        <link rel="dns-prefetch" href="https://discord.com" />
        <link rel="dns-prefetch" href="https://top.gg" />
        <meta property="og:title" content="Thanks for choosing Acoustic" />
        <meta
          property="og:description"
          content="Thanks for inviting us to your community 😊"
        />
        <meta property="og:url" content="https://thanks.acoustic.to" />
        <meta
          name="description"
          content="Thanks for inviting us to your community 😊"
        ></meta>
        <meta property="og:url" content="https://thanks.acoustic.to"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Thanks for choosing Acoustic"></meta>
        <meta
          property="og:description"
          content="Thanks for inviting us to your community 😊"
        ></meta>
        <meta
          name="twitter:title"
          content="Thanks for choosing Acoustic"
        ></meta>
        <meta
          name="twitter:description"
          content="Thanks for inviting us to your community 😊"
        ></meta>
      </Head>
      <main id="info" className={styles.main}>
        <h1 className={styles.title}>
          Thanks for choosing
          <div className="browser">
            <ReactRotatingText
              items={[
                ' Acoustic',
                ' the most helpful bot',
                ' your newest server member',
                ' the crispiest lad'
              ]}
            />
          </div>
          <div className="mobile">Acoustic</div>
        </h1>

        <div className={styles.grid}>
          <a href="https://acoustic.to/patreon" className={styles.card}>
            <h3>Support us on Patreon &rarr;</h3>
            <p>Support Acoustic with a small donation. We appreciate it ❤️</p>
          </a>

          <a href="https://docs.acoustic.to" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Acoustic with gifs and other helpful resources!</p>
          </a>

          <a href="https://acoustic.to/invite" className={styles.card}>
            <h3>Invite us to your servers &rarr;</h3>
            <p>
              You like us that much? By all means, we'd love to jam with you.
            </p>
          </a>

          <a href="https://acoustic.to/vote" className={styles.card}>
            <h3>Vote for Acoustic &rarr;</h3>
            <p>Go ahead and vote for us if you like what we're doing.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
