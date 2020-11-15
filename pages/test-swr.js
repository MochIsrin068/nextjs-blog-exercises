import Head from 'next/head'
import Layout from '../components/layout'
import useSwr from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const TestSwr = () => {
    const {data, error} = useSwr('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isrin068', fetcher)

    if(error) return <div>failed to load</div>
    if(!data) return <div>loading...</div>
    return (
        <Layout>
            <Head>
                <title>Test Swr</title>
            </Head>
            <main>
                { 
                    data.items.map(article => {
                        return (
                            <div className="md:flex card" key={article.title}>
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
                    })
                }
            </main>
            <style jsx>
                {
                    `.card{
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
export default TestSwr