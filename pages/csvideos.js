/* pages/csbooks.js */
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Navbar from '../components/navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  nftvaddress, nftvideoaddress
} from '../config'

import NFTV from '../artifacts/contracts/NFTV.sol/NFTV.json'
import Video from '../artifacts/contracts/Video.sol/NFTVideo.json'

export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  const router = useRouter()
  
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftvaddress, NFTV.abi, provider)
    const videoContract = new ethers.Contract(nftvideoaddress, Video.abi, provider)
    const data = await videoContract.fetchMarketItems()

     const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  async function buyNft(nftv) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftvideoaddress, Video.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nftv.price.toString(), 'ether')   
    const transaction = await contract.createMarketSale(nftvaddress, nftv.tokenId, {
      value: price
    })
    await transaction.wait()
    //loadNFTs()
    router.push('/watching')
  }
  if (loadingState === 'loaded' && !nfts.length) return ( <><Navbar />
 
  <h1 className="px-20 py-10 text-3xl">No Video in Library</h1></>)
  return (
 <div> 
     <Navbar />
    <br />
      <Head>
        <title>Computer Science Video Books - Decentralized Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> 
  <>
          <center>
            <br />
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">Computer Science Video Books Collections</h2>
            <br />
          </center>
  </>
    <div className="flex justify-center pb-6">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4" >
  
          {
            
            nfts.map((nftv, i) => (
              <div key={i} className="-bg-white border shadow rounded-xl overflow-hidden">
                <>
                <iframe className="object-fill h-400 w-full" 
                src={nftv.image}
                  frameBorder="0"
                 scrolling="no"
                height="300px"
                width="100%"
                ></iframe> </>
                <div className="p-4">
                  <p style={{ height: '20px' }} className="text-2xl font-semibold">{nftv.name}</p>
                  <div style={{ height: '100px', overflow: 'hidden' }}>
                    <p className="text-black pt-2">{nftv.description}</p>
                  </div>
                </div>
                <div className="p-2 bg-black">
                  <p className="text-lg mb-1 font-bold text-white text-center">{nftv.price} METIS</p>
                  <button className="w-full bg-blue-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nftv)}>Watch Video Book</button>
                </div>
                
              </div>
            ))
          }
        </div>
        
      </div>
    </div>
    <div>
    <>

</>
        </div>


    </div>
  )
}

