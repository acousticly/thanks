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
            <button className="button-fat">
              <ReactRotatingText
                items={[
                  ' Acoustic',
                  ' the most helpful bot',
                  ' your newest server member',
                  ' the crispiest lad',
                  ' man\'s best friend',
                  ' has lots of lore',
                  " I've lost 36 jobs please help I need a stable income :(",
                  ' https://youtube.com/watch?v=dQw4w9WgXcQ',
                  ' hey you really should vote!',
                  ' the bot with the most AWESOME team out there!',
                  " the bot that isn't a guitar nor has relations to one",
                  ' a cool support server',
                  ' a glorified mp3 player',
                  ' dude vote for us',
                  ' now 😡'
                ]}
              />
            </button>
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
            <h3>Invite us to your other servers &rarr;</h3>
            <p>
              You like us that much? By all means, we'd love to jam with you.
            </p>
          </a>

          <a href="https://acoustic.to/vote" className={styles.card}>
            <h3>Vote for us &rarr;</h3>
            <p>Go ahead and vote for us if you like what we're doing.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
