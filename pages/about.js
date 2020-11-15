import Head from 'next/head'
import Layout from '../components/layout'
import styleButton from '../styles/button.module.scss'

const About = ({mediumData}) => {
    return (
        <Layout>
            <Head>
                <title>My Blog</title>
            </Head>
            <main>
                {/* Medium APIS and Tailwind */}
                {mediumData.items.map(article => {
                    return (
                        <div className="md:flex card">
                            <div className="md:flex-shrink-0">
                                <img className="rounded-lg md:w-56" src={article.thumbnail} width="448" height="299" alt="Woman paying for a purchase"/>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6">
                                <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                                    Tutorial - {article.categories[0]}
                                </div>
                                    <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{article.title}</a>
                                <p className="mt-2 text-gray-600">{article.title} Written By {article.author}</p>
                            </div>
                        </div>
                    )
                })}

                <p className="test">Test Styles In JS</p>
                <button className={styleButton.buttonSuccess}>Success</button>
            </main>
            <style jsx>
                {
                    `
                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities;
                    .test{
                        color : green;
                    }
                    .test:hover{
                        color : yellow;
                    }
                    .card{
                        margin-bottom : 16px;
                        border-bottom : 1px solid #ddd ;
                        padding-bottom : 10px
                    }
                    `
                }
            </style>
        </Layout>
    )
}
// Statc Generation Data Fething
export async  function getStaticProps(){
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isrin068')
    const mediumData = await res.json()

    return {
        props : {
            mediumData
        }
    }
}

export default About