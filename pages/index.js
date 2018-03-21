import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index= (props) => (
    <Layout>
        <div> 
            <h1>Welcome to CryptoCurrency Coin Details</h1>
 
            <Prices details={props.bpi}/>


            
        </div>
    </Layout>
); 
Index.getInitialProps=async function() {
    const res=await fetch('https://api.coinmarketcap.com/v1/ticker/');
    const data=await res.json();
    return {
        bpi : data

    };
}

export default  Index;