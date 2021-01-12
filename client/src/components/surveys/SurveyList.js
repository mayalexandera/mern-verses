import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div>
        {this.props.surveys.map((survey) => {
          return (
            <div>
              <div>{survey.title}</div>
              <div>{survey.subject}</div>
              <div>{survey.body}</div>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
