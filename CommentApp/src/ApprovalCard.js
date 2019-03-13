import React from 'react';

const ApprovalCard = (props)=>{
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>        {/* Content to show above those buttons */}
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic blue button">Approve</div>
                    <div className="ui basic pink button">Decline</div>
                </div>
            </div>
        </div>
    );

};

export default ApprovalCard;