import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import { getProviders, getSession, useSession } from 'next-auth/react';
import Feed from '../components/Feed'
import Login from '../components/Login'
import Modal from '../components/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Widgets from '../components/Widgets';

const Home: NextPage = ({trendingResults, followResults, providers}) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  
  if(!session) return <Login providers={providers}/>;

  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

        {isOpen && <Modal />}
      </main>
    </div>
  )
}

export default Home
export async function getServerSideProps(context: any) {
  // const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
  //   (res) => res.json()
  // );
  // const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
  //   (res) => res.json()
  // );

  type Results = {
    [key: string]: any;
  };

    const trendingResults:Results = [
      {
          heading: "2023 League of Legends Worlds · LIVE",
          description: "DRX vs. Rogues clash in the 2023 World Cup finals",
          img: "https://rebrand.ly/8k1rc5q",
          tags: [
              "#LeagueOfLegends, ",
              "#Riot, ",
              "#Worlds2023"
          ]
      },
      {
        heading: 'Trending in United States',
        description: 'Paul Hobbs Breaks the Internet',
        img: 'https://rebrand.ly/25b9ce',
        tags: ['Paul Hobbs, ', '#internet'],
      },
      {
          heading: "Trending in Digital Creators",
          description: "Miranda Sings and Colleen Ballinger",
          img: "",
          tags: [
              "Miranda Sings"
          ]
      }
  ];
  const followResults:Results = [
    {
        userImg: "https://rebrand.ly/25b9ce",
        username: "Paul Hobbs",
        tag: "@paulhobbs"
    },
    {
        userImg: "https://rebrand.ly/rambpp5",
        username: "Queen Cat",
        tag: "@queenofcats"
    },
    {
        userImg: "https://rebrand.ly/9nmrgxk",
        username: "Cuddle Luvr",
        tag: "@cuddleluvr"
    }
];
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}