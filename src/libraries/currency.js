  
export default {
    format(amount){
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PHP',
        });
        return formatter.format(amount);
    }
        
}

  


