import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import alertStyles from '../styles/alert.module.css'
import cn from 'classnames'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Home({allPostsData}) {
  const [isShow, setIshow] = useState(false)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a creative, full stack + frontend engineer. I merge technical skills with design knowledge to create innovative products that drive business. Currently frontend engineer based in Jakarta, Indonesia. 
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Blog Sections */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>

              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />

              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      {/* Classnames Examples For Logic UI */}
      <section>
          <h2 className={utilStyles.headingLg}>Classnames example</h2>
          <button onClick={() => setIshow(!isShow)}>
            <p
              className={cn({
                [alertStyles.success] : isShow === true,
                [alertStyles.error] : isShow === false,
              })}
            >{isShow ? "SHOW ✔️" : "HIDE ❌"}</p>
          </button>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
