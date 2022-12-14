import Image from 'next/image'
import { 
  Cards, PointCount 
} from '../components'


export const Home = () => {
  return (
    <>
      <section className='bg-primary flex justify-between relative z-10 shadow-2xl shadow-gray-700/40'>
        <article className='flex flex-col justify-center items-center gap-5 w-1/2'>
          <h2 className='text-white text-5xl font-bold'>Nouveauté !</h2>
          <h1 className='flex flex-col items-center glow text-8xl text-white font-accent tracking-widest'>
            Le Krusty
            <span className='flex items-center'>
              <span className='block w-14 h-1 rounded-lg bg-white mr-5'></span>
              Burger
              <span className='block w-14 h-1 rounded-lg bg-white ml-5'></span>
            </span>
          </h1>
          <button
            className='mt-3 font-accent text-3xl text-primary bg-lightGray rounded-full py-3 px-11 shadow-lg shadow-black/50'
          >
            Découvir
          </button>
        </article>
        <article>
          <Image
            src="/assets/img/banner/banner.png"
            alt='krusty burger banner image'
            width={680}
            height={527}
          />
        </article>
      </section>
      <section className='mt-16 mb-32'>
        <h2 className='font-accent text-7xl text-primary m-14'>Nos produits phares</h2>
        <div
          className='flex justify-between mx-44'
        >
          <article className='w-fit'>
            <Cards
              accent={true}
              alt='image produit pizzangelo'
              image='/assets/img/cards/home/card-01.jpg'
              productUrlName='pizzangelo'
              width={327}
              height={276}
            />
          </article>
          <article className='w-fit'>
            <Cards
              accent={true}
              alt='image produit sandwich parfait'
              image='/assets/img/cards/home/card-02.jpg'
              productUrlName='sandwich-parfait'
              width={329}
              height={277}
            />
          </article>
          <article className='w-fit'>
            <Cards
              accent={true}
              alt='image produit pizzangelo'
              image='/assets/img/cards/home/card-03.jpg'
              productUrlName='pizzangelo'
              width={328}
              height={277}
            />
          </article>
        </div>
      </section>
      <section className='mt-16 mb-11 relative z-10 shadow-t2xl shadow-gray-700/40'>
        <h2 className='font-accent text-7xl text-primary m-14'>Vos avantages</h2>
        <article>
          <div className='border-primary border-8 rounded-2xl p-8'>
            <PointCount
              firstValue={1}
              lastValue={2}
            />
          </div>
        </article>
        <article>

        </article>
      </section>
    </>
  )
}

export default Home