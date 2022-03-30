import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../../redux/actions'

class SongList extends React.Component {
  getSongList() {
    return this.props.songs.map((songData, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(songData)}
            >
              Select
            </button>
          </div>
          <div className="content">{songData.title}</div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui divided list">{this.getSongList()}</div>
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songList }
}

export default connect(mapStateToProps, {
  selectSong,
})(SongList)
