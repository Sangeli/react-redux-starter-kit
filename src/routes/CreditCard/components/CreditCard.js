import React from 'react'

export const CreditCard = (props) => (
  <div >
    <h2>Payment</h2>
    <form>
      <input 
        placeholder="Credit/Debit Card"
        onKeyUp={ (e) => {
          props.formatCard(e, props.dispatch); 
        }}
      />
    </form>
  </div>
)

CreditCard.propTypes = {
  formatCard : React.PropTypes.func.isRequired
}

export default CreditCard
