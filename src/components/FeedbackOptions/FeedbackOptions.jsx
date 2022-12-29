import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div>
        {Object.keys(options).map((btn => <Button key={btn} type="button" onClick={() => onLeaveFeedback(btn)}>{btn}</Button>))}
    </div>
}
FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    clickFeedback: PropTypes.func,
};