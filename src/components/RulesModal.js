import ReactDOM from "react-dom";
import { ReactComponent as CloseSvg } from '../images/icon-close.svg';
import { ReactComponent as RulesSvg } from '../images/image-rules.svg';

function RulesModal(props) {
    //props.rulesDisplay
    //props.hideRules()

    if (!props.rulesDisplay) return null;
    return ReactDOM.createPortal( 
        <>
            <div className="modal-background">
                <div className="modal-content">
                    <div className="rules-header">
                        <p>RULES</p>

                        {/* <CloseSvg onClick={props.hideRules}/> */}

                    </div>
                    <RulesSvg />
                    <CloseSvg onClick={props.hideRules}/>
                </div>
            </div>
        </>,
        document.getElementById("portal"),
    )

  } export default RulesModal;