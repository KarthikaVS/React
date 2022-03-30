import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.selectedSong?.song?.title}</div>
        <div>{this.props.selectedSong?.song?.duration}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  }
}

export default connect(mapStateToProps)(SongDetail)
