import React from 'react';
import PropTypes from 'prop-types';
import HelpHeader from './HelpHeader';

const HelpTopicContent = ({ title, content, backToTopics, hide }) => (
  <div
    className={`o-contextual-help__topic-content ${hide ? 'hide' : ''}`}
  >
    <HelpHeader
      contentLevel={true}
      backToTopics={backToTopics}
    />
    <div
      aria-live="polite"
      className="o-contextual-help__topic"
      id="o-contextual-help-topic-content-target"
    >
      <h2 className="pe-title">
        {title}
      </h2>
      <div>
        {content}
      </div>
    </div>
  </div>
);

HelpTopicContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  hide: PropTypes.bool
};

export default HelpTopicContent;