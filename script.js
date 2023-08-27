function cal(){
    const p = Number(document.getElementById("principle").value)
    const r = Number(document.getElementById("roi").value)
    const m = Number(document.getElementById("months").value)
    const monthly_roi= (r/12)/100 
    const emi = ((p*monthly_roi)*((1+monthly_roi)**m)/(((1+monthly_roi)**m)-1))
    result.innerHTML= "₹"+Math.round(emi)+" Per Month"
    
    

}
