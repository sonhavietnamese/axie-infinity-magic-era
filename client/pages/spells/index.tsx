import Head from 'next/head'
import { AxieSpells } from '../../components/axie-spells/AxieSpellsNoSsr'

import s from './styles.module.css'

const Houses = () => {
  return (
    <div>
      <Head>
        <title>Axie Infinity | Magic Era</title>
        <meta name='description' content='A playground where you can generate an Axie.' />
        <link rel='icon' href='/axie.png' />
      </Head>

      <main>
        <AxieSpells />
      </main>
    </div>
  )
}

export default Houses
