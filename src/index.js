const { create } = require("ipfs-http-client");

(async () => {
  try {
    // const client = create('http://127.0.0.1:5001')
    const client = create('https://ipfs.dotask.cc')
    // const client = create('https://ipfs.infura.io:5001')
    const added = await client.add('ppp')
    console.log('added', added)
  } catch (e) {
    console.error(e)
  }
})()
