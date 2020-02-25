import { connect } from 'react-redux'
import { getList } from 'actions/Auth';
import { handleAddDate } from 'actions/Appointments';
import Home from 'components/Home'

const mapStateToProps = state => ({
  calendarData: state.calendarData,
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
  handleAddDate: (data) => dispatch(handleAddDate(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
