import React from 'react';

class Copy extends React.Component{
    constructor(props) {
        super(props);
        this.innerRef = React.createRef();  
    }

    copyRange = () => {
        let rng, sel;
        if (document.createRange) {
            rng = document.createRange();
            rng.selectNode(this.innerRef.current);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(rng);
        } else {
            rng = document.body.createTextRange();
            rng.moveToElementText(this.innerRef.current);
            rng.select();
        }
        document.execCommand('copy');
        sel.removeAllRanges();
    }

    render() {
        return (
            window.screen.width < 600 ?
            <a href={'tel:+' + this.props.phone}>{this.props.children}</a> :
            <div
                onClick={()=>{
                    this.copyRange();
                    this.props.handler();
                }}
                ref={this.innerRef}
            >
                {this.props.children}
            </div>
        );
    }

};

export default Copy;
