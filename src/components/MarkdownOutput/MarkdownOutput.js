import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownOutput = ({ data = '' }) => (
  <ReactMarkdown source={data} escapeHtml={false} skipHtml={false} />
);

export default MarkdownOutput;
