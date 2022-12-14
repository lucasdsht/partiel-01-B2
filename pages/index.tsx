import Image from 'next/image'
import { 
  Cards, 
  PointBadge, 
  PointCount 
} from '../components'


export const Home = () => {
  return (
    <>
      <section className='py-10 banner flex items-center justify-center lg:justify-start lg:flex-row relative z-10 shadow-2xl shadow-gray-700/40'>
        <article className='flex flex-col justify-center items-center gap-5 w-1/2'>
          <h2 className='text-white text-3xl sm:text-5xl font-bold'>Nouveauté !</h2>
          <h1 className='flex flex-col items-center glow  text-6xl sm:text-8xl text-white font-accent tracking-widest'>
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
      </section>
      <section className='mt-16 mb-32'>
        <h2 className='font-accent text-7xl text-primary m-14'>Nos produits phares</h2>
        <div
          className='grid place-items-center grid-cols-1 justify-center text-center space-y-6 md:grid-cols-2 lg:grid-cols-3 mx-7 md:mx-20 lg:mx-28'
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
      <section className='bg-lightGray mt-16 pb-14 relative z-10 shadow-t2xl shadow-gray-700/40'>
        <h2 className='ml-14 pt-14 font-accent text-7xl text-primary'>Vos avantages</h2>
        <div className='flex items-center justify-around mx-7 md:mx-20 lg:mx-28'>
          <article>
            <div className='border-primary border-8 rounded-2xl p-8'>
              <PointCount
                firstValue={1}
                lastValue={2}
              />
            </div>
          </article>
          <article className='flex items-center gap-16'>
            <div>
              <Image
                src='/assets/img/advantages/phone.svg'
                alt='image application de téléphone'
                width={210}
                height={375}
              />
            </div>
            <div className='flex items-center gap-6'>
              <PointBadge
                src='/assets/img/advantages/points/icon-1.svg'
                alt='icone 30 point de fidélité'
                height={100}
                width={100}
                points={30}
              />
              <PointBadge
                src='/assets/img/advantages/points/icon-2.svg'
                alt='icone 100 point de fidélité'
                height={100}
                width={100}
                points={100}
              />
              <PointBadge
                src='/assets/img/advantages/points/icon-3.svg'
                alt='icone 140 point de fidélité'
                height={100}
                width={100}
                points={140}
              />
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home