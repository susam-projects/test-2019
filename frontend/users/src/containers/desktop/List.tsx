import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { load, sort } from '../../actions/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
    onSortChange: (field: string) => dispatch(sort(field)),
  }),
)(enhance(List))
