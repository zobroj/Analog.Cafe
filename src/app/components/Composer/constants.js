// tools
import React from "react"
import { Html } from "slate"

// plugins
import { MarkHotkey } from "./plugins"
import AutoReplace from "slate-auto-replace"
import EditBlockquote from "slate-edit-blockquote"

// plugins list
export const plugins = [
  MarkHotkey({ 	key: "b", 			type: "bold" }),
  MarkHotkey({ 	key: "i", 			type: "italic" }),
	EditBlockquote({
		type: 				"quote",
		typeDefault: 	"paragraph",
	}),
  AutoReplace({
    trigger: 		"space",
    before: 		/^(>)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: 'quote' })
    }
  })
]


// composer rules
const BLOCK_TAGS = {
  p: 						"paragraph",
  blockquote: 	"quote",
}
const MARK_TAGS = {
  em: 					"italic",
  strong: 			"bold",
}
const rules = [
  {
    // Switch deserialize to handle more blocks...
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName]
      if (!type) return
      return {
        kind: "block",
        type: type,
        nodes: next(el.children)
      }
    },
    // Switch serialize to handle more blocks...
    serialize(object, children) {
      if (object.kind !== "block") return
      switch (object.type) {
        case "paragraph": return <p>{children}</p>
        case "quote": 		return <blockquote>{children}</blockquote>
        default:					return {children}
      }
    }
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName]
      if (!type) return
      return {
        kind: "mark",
        type: type,
        nodes: next(el.children)
      }
    },
    serialize(object, children) {
      if (object.kind !== "mark") return
      switch (object.type) {
        case "bold": 		return <strong>{children}</strong>
        case "italic": 	return <em>{children}</em>
        default: 				return {children}
      }
    }
  }
]
export const html = new Html({ rules })
export const stateSchema = {
	nodes: {
		paragraph: 		props => <p>{props.children}</p>,
		quote: 				(props) => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <blockquote {...props.attributes} className={className}>{props.children}</blockquote>
									},
    
    
    
    
	},
	marks: {
		bold: 			props => <strong>{props.children}</strong>,
		italic: 		props => <em>{props.children}</em>,
	}
}


// composer initial state
export const composerInputPlaceholders = {
	"title": "Write Your Title Here ✍",
	"subtitle": "Subtitle (Optional)",
	"body": "<p>Drag and drop your images here. Feel free to caption them with a title, location, time, camera, etc.</p><p><em>You can add more than one image and even write an article or a photo essay!</em></p>",
}