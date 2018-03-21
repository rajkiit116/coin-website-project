class Prices extends React.Component{
state ={
    
}
render(){

var listOfCurrency = this.props.details.map(function(name){
                return <tr>
                <td>{name.rank}  </td>
                <td>{name.id} </td>
                <td>${new Intl.NumberFormat('en-US', {  
                    currency: 'USD',
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 6 
                    }).format(name.market_cap_usd)}</td>
                <td>${new Intl.NumberFormat('en-US', { 
                    style: 'decimal', 
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 6 
                    }).format(name.price_usd)} </td>
               <td> {new Intl.NumberFormat('en-DE', { 
                   style: 'decimal', 
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 2 
                    }).format(name.total_supply)} </td>
               <td>{new Intl.NumberFormat('en-US', { 
                   style: 'decimal', 
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 2 
                    }).format(name.percent_change_24h)}</td>
</tr>;
              })
    return (
        <div>
          <table>
                <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Change</th>
                </tr>
            </thead>
             <tbody>     
                    {listOfCurrency}
             </tbody>
          </table>
            <br/>
        </div>
    );
}


}
export default Prices;