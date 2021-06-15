const getHash = () => window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // #/1/ => 1 ....
// split => ['/', '1', '/']

export default getHash;
