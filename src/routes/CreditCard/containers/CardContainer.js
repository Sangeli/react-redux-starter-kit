import { connect } from 'react-redux'
import { formatCard } from '../modules/card'
import CreditCard from '../components/CreditCard'


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const mapStateToProps = (state) => ({
  formatCard
})


export default connect(mapStateToProps, mapDispatchToProps)(CreditCard)
