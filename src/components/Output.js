import React from 'react'

const Output = ({paragraphs, includeHTML, tag}) => {
        return (
                <div className="output">
                        {includeHTML === 'Yes'
                                ? (
                                        <p>{paragraphs.map(paragraph => `<${tag}>${paragraph}</${tag}>`)}</p>
                                )
                                : (
                                        <p>{paragraphs.map(paragraph => `${paragraph}`)}</p>
                                )
                        }
                </div>
        )
}

export default Output
