import React, { Component } from 'react'
import EmojiResultRow from './EmojiResultRow'
import Clipboard from 'clipboard'
export default class EmojiResult extends Component {

    componentDidMount() {
        this.clipboard = new Clipboard('.copy-it')
    }

    componentWillUnmount() {
        this.clipboard.destroy()
    }


  render() {
    const { emojisData } = this.props
    return (
      <div className="component-emoji-results">
        {emojisData.map(emojiData => (
            <EmojiResultRow
                key={emojiData.title}
                symbol={emojiData.symbol}
                title={emojiData.title}
            />
        ))}
      </div> 
    )
  }
}
